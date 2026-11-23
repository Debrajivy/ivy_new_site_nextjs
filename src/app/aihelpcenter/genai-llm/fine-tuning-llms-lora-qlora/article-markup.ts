const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps backslashes in the code samples exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>Fine-Tuning with LoRA and QLoRA</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>Fine-Tuning LLMs with LoRA and QLoRA: A Practical Guide</h1>
<p class="sub">Decide whether fine-tuning is the right tool, understand what LoRA and QLoRA change, and train your first adapter on a single GPU.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>13 min read</span><span>Published 23 Nov 2026</span><span>Last reviewed 23 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>LoRA teaches a model habits, not facts.</strong> It trains a small add-on while the original model stays frozen, which makes it good at formats, tone and narrow tasks, and poor at tracking changing information.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">LoRA fine-tunes an LLM by freezing its original weights and training two small low-rank matrices per layer, usually under 1% of the parameters. QLoRA does the same on a base model compressed to 4-bit NF4, so a 7B model can be tuned on one consumer GPU. Use them for consistent formats and narrow tasks, not for teaching new facts.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>Fine-tune only after measuring prompting and retrieval; fine-tuning fixes behaviour (format, tone, task skill), while RAG supplies facts.</li>
<li>LoRA replaces a full weight update with the product of two thin matrices, B×A, of rank r, scaled by alpha/r; the base model stays frozen.</li>
<li>QLoRA stores the frozen base in 4-bit NormalFloat (NF4) with double quantization, cutting weight memory to roughly a quarter of 16-bit.</li>
<li>A few hundred to a few thousand clean, consistent examples in JSONL chat format usually matter more than any hyperparameter.</li>
<li>Judge a fine-tune against a well-prompted base model on a held-out set; if it does not clearly win, do not ship it.</li>
</ul></section>

<section class="card" id="when-should-you-fine-tune-an-llm-instead-of-prompting-or-using-rag"><div class="pill">Decision</div><h2>When should you fine-tune an LLM instead of prompting or using RAG?</h2>
<p><strong>Fine-tune when you need consistent behaviour that prompting cannot deliver reliably, such as a strict output format, a house style, or a narrow classification task at high volume; use RAG when the problem is missing or changing facts.</strong> This guide is the hands-on LoRA and QLoRA how-to; for the full decision framework, read our comparison of <a href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning</a>. The quick version:</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Approach</th><th scope="col">Changes</th><th scope="col">Best for</th><th scope="col">Data needed</th><th scope="col">Updating</th></tr></thead>
<tbody>
<tr><td>Prompting</td><td>Instructions and examples</td><td>Most tasks, first attempt</td><td>A few examples</td><td>Instant</td></tr>
<tr><td>RAG</td><td>What the model reads</td><td>Facts, policies, documents that change</td><td>Your documents</td><td>Re-index the documents</td></tr>
<tr><td>LoRA / QLoRA</td><td>Small adapter weights</td><td>Format, tone, narrow skills, cheaper small models</td><td>Hundreds to thousands of labelled pairs</td><td>Retrain the adapter</td></tr>
<tr><td>Full fine-tuning</td><td>All weights</td><td>Large domain shifts, labs with big GPU budgets</td><td>Large, curated datasets</td><td>Expensive retrain</td></tr>
</tbody></table></div>
<p>A common good reason in Indian companies is control: a small open model tuned for one task can run on your own servers when data cannot leave your environment. If your real problem is facts, start with <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">retrieval-augmented generation (RAG)</a> instead.</p>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>Most teams that ask us about fine-tuning do not need it yet. If you have not written a careful prompt with five good examples (see our guide to <a href="/aihelpcenter/genai-llm/advanced-prompting">advanced prompting</a>) and measured it on 50 test cases, you do not know whether fine-tuning will help. Do that first; it takes a day.</p></div>
</section>

<section class="card" id="what-is-lora-and-how-does-it-work"><div class="pill">LoRA</div><h2>What is LoRA and how does it work?</h2>
<p><strong>LoRA (Low-Rank Adaptation) freezes the pretrained weight matrix W and learns its update as the product of two small matrices, B and A, so only those small matrices are trained.</strong> Hu and colleagues introduced it in 2021, on the observation that the change a model needs for a new task has low "intrinsic rank": it can be described with far fewer numbers than the full matrix. Pretraining (covered in <a href="/aihelpcenter/genai-llm/how-are-llms-trained">how LLMs are trained</a>) builds W; LoRA only nudges it.</p>
<p>For a d×k weight matrix, LoRA computes <code>h = W·x + (α / r) · B·A·x</code>, where A is r×k, B is d×r, and the rank r is small (often 8 to 64).</p>
<p>Concretely: one attention projection in a 7B-class model is about 4096×4096, or 16.8 million weights. With r = 16, A and B together hold 16 × (4096 + 4096) = 131,072 weights, about 0.8% of the original. B starts at zero, so training begins from exactly the base model's behaviour. B·A can be merged into W after training, so there is no extra inference latency. The <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener">LoRA paper</a> reported up to 10,000 times fewer trainable parameters and about three times less GPU memory than full fine-tuning of GPT-3 175B.</p>
<figure class="diagram"><svg viewBox="0 0 720 250" role="img" aria-label="LoRA diagram. Input x flows through two paths. The frozen pretrained weight W, a large d by k matrix, gives W x. In parallel, x goes through a small trainable matrix A of size r by k, then a trainable matrix B of size d by r, and is scaled by alpha over r. The two results are added to give the output h." style="width:100%;height:auto"><defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0b5394"/></marker></defs><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">One LoRA layer: frozen big matrix plus a trainable thin detour</text>
<rect x="0" y="112" width="60" height="40" rx="8" fill="#eeeeee"/><text x="30" y="137" text-anchor="middle" font-weight="600">x</text>
<path d="M62 124 L120 72" stroke="#0b5394" stroke-width="2" fill="none" marker-end="url(#ar7)"/><path d="M62 140 L120 192" stroke="#0b5394" stroke-width="2" fill="none" marker-end="url(#ar7)"/>
<rect x="124" y="36" width="230" height="74" rx="8" fill="#c9d3dc"/><text x="239" y="68" text-anchor="middle" font-weight="600">W (d × k), frozen</text><text x="239" y="88" text-anchor="middle" font-size="12">16.8M weights, not updated</text>
<rect x="124" y="172" width="100" height="40" rx="6" fill="#1a98cb"/><text x="174" y="197" text-anchor="middle" fill="#fff" font-weight="600">A (r × k)</text>
<line x1="226" y1="192" x2="252" y2="192" stroke="#0b5394" stroke-width="2" marker-end="url(#ar7)"/>
<rect x="256" y="172" width="100" height="40" rx="6" fill="#1a98cb"/><text x="306" y="197" text-anchor="middle" fill="#fff" font-weight="600">B (d × r)</text>
<text x="124" y="232" font-size="12">Trainable: 131K weights at r = 16</text>
<line x1="358" y1="192" x2="398" y2="192" stroke="#0b5394" stroke-width="2" marker-end="url(#ar7)"/>
<rect x="402" y="172" width="80" height="40" rx="6" fill="#fff6e5" stroke="#f7a61b" stroke-width="2"/><text x="442" y="197" text-anchor="middle">× α/r</text>
<path d="M356 73 L520 73 L540 116" stroke="#0b5394" stroke-width="2" fill="none" marker-end="url(#ar7)"/><path d="M484 192 L540 150" stroke="#0b5394" stroke-width="2" fill="none" marker-end="url(#ar7)"/>
<circle cx="556" cy="132" r="18" fill="#0b5394"/><text x="556" y="138" text-anchor="middle" fill="#fff" font-weight="700" font-size="16">+</text>
<line x1="576" y1="132" x2="626" y2="132" stroke="#0b5394" stroke-width="2" marker-end="url(#ar7)"/>
<rect x="630" y="112" width="70" height="40" rx="8" fill="#eeeeee"/><text x="665" y="137" text-anchor="middle" font-weight="600">h</text>
</g></svg><figcaption>Only A and B learn. Because B starts at zero, the model begins exactly where the base model was, and the detour can later be merged into W.</figcaption></figure>
</section>

<section class="card" id="how-do-rank-r-and-alpha-affect-a-lora-fine-tune"><div class="pill">Hyperparameters</div><h2>How do rank r and alpha affect a LoRA fine-tune?</h2>
<p><strong>Rank r sets how much the adapter can learn, and alpha sets how strongly its update is applied, through the scaling factor alpha/r.</strong> Higher r means more capacity and memory. Alpha acts like a learning-rate multiplier: doubling it doubles the update for the same weights.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Setting</th><th scope="col">Sensible start</th><th scope="col">When to change it</th></tr></thead>
<tbody>
<tr><td><code>r</code></td><td>16</td><td>Drop to 8 for simple format tasks; try 32 to 64 if the model underfits a harder task</td></tr>
<tr><td><code>lora_alpha</code></td><td>2 × r (32 for r = 16)</td><td>Keep the ratio fixed while you tune r, or use rsLoRA (alpha/√r) at high ranks</td></tr>
<tr><td><code>target_modules</code></td><td><code>"all-linear"</code></td><td>Restrict to attention projections only if memory is tight</td></tr>
<tr><td><code>lora_dropout</code></td><td>0.05</td><td>Raise to 0.1 on small datasets that overfit</td></tr>
<tr><td>Learning rate</td><td>1e-4 to 2e-4</td><td>Lower it if training loss spikes or outputs degrade</td></tr>
<tr><td>Epochs</td><td>2 to 3</td><td>Stop earlier if evaluation loss starts rising</td></tr>
</tbody></table></div>
<p>The Hugging Face <a href="https://huggingface.co/docs/peft/developer_guides/lora" target="_blank" rel="noopener">PEFT LoRA guide</a> notes that adapting all linear layers, as QLoRA does, gets closer to full fine-tuning than attention layers alone.</p>
<div class="callout rule-of-thumb"><div class="eyebrow">Rule of thumb</div><p>Change one thing at a time, and change data before hyperparameters. Fixing 50 inconsistent labels usually beats any rank sweep.</p></div>
</section>

<section class="card" id="what-does-qlora-add-on-top-of-lora"><div class="pill">QLoRA</div><h2>What does QLoRA add on top of LoRA?</h2>
<p><strong>QLoRA keeps the frozen base model in 4-bit precision instead of 16-bit and trains LoRA adapters on top, so the biggest memory cost, the base weights, shrinks to about a quarter.</strong> Dettmers and colleagues introduced it in 2023 with three ideas:</p>
<ul>
<li><strong>4-bit NormalFloat (NF4):</strong> a 4-bit data type designed for neural network weights, which are roughly normally distributed.</li>
<li><strong>Double quantization:</strong> the scaling constants used for quantization are themselves quantized, saving a little more memory.</li>
<li><strong>Paged optimizers:</strong> optimizer state can spill to CPU memory to survive memory spikes.</li>
</ul>
<p>Computation still happens in 16-bit: weights are de-quantized on the fly, and gradients flow through them into the 16-bit adapters. The <a href="https://arxiv.org/abs/2305.14314" target="_blank" rel="noopener">QLoRA paper</a> fine-tuned a 65B model on a single 48 GB GPU and reported task performance matching full 16-bit fine-tuning in its experiments. The trade-off is speed: de-quantizing costs time, so QLoRA runs slower per step than LoRA on a 16-bit base. Use QLoRA when memory is the constraint and LoRA when it is not.</p>
</section>

<section class="card" id="how-much-gpu-memory-do-you-need-for-lora-and-qlora"><div class="pill">Hardware</div><h2>How much GPU memory do you need for LoRA and QLoRA?</h2>
<p><strong>For a 7B model, rough arithmetic puts full fine-tuning above 100 GB, LoRA around 15 GB and QLoRA around 5 GB before activations, which add a few GB more depending on sequence length and batch size.</strong></p>
<figure class="diagram"><svg viewBox="0 0 720 230" role="img" aria-label="Illustrative estimate of GPU memory for weights, gradients and optimizer state when fine-tuning a 7B model, before activations: full fine-tuning about 112 GB, LoRA on a 16-bit base about 15 GB, QLoRA on a 4-bit base about 5 GB." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Memory to fine-tune a 7B model, before activations (illustrative)</text>
<text x="0" y="62" font-weight="600">Full fine-tune</text><rect x="140" y="44" width="500" height="28" rx="4" fill="#d64545"/><text x="648" y="63" font-family="Montserrat,sans-serif" font-weight="700">~112 GB</text>
<text x="0" y="112" font-weight="600">LoRA (16-bit)</text><rect x="140" y="94" width="67" height="28" rx="4" fill="#0b5394"/><text x="215" y="113" font-family="Montserrat,sans-serif" font-weight="700">~15 GB</text>
<text x="0" y="162" font-weight="600">QLoRA (4-bit)</text><rect x="140" y="144" width="22" height="28" rx="4" fill="#1f9d6b"/><text x="170" y="163" font-family="Montserrat,sans-serif" font-weight="700">~5 GB</text>
<text x="0" y="200" font-size="12">Bytes per parameter: ~16 for full fine-tuning with AdamW, ~2 for a 16-bit base, ~0.5 for 4-bit.</text>
<text x="0" y="218" font-size="12" font-style="italic">Worked estimate, not a benchmark.</text>
</g></svg><figcaption>The frozen base model dominates memory once you stop training every weight, which is why 4-bit storage matters so much.</figcaption></figure>
<p>In practice, QLoRA on a 7B model with short sequences fits a 16 GB T4 on cloud notebooks, and LoRA on a 7B model is comfortable on a 24 GB card. For learning, start with a 1B to 3B model: same workflow, much faster.</p>
</section>

<section class="card" id="how-should-you-prepare-training-data-for-fine-tuning"><div class="pill">Data</div><h2>How should you prepare training data for fine-tuning?</h2>
<p><strong>Write one JSON object per line, each holding a short conversation in the chat format (system, user, assistant), where the assistant turn is exactly the output you want the model to learn.</strong> TRL applies the model's chat template automatically when it sees a <code>messages</code> field.</p>
<div class="code"><div class="fname">train.jsonl (two lines)</div><pre><code>{"messages": [{"role": "system", "content": "Convert the collections call note into JSON with keys intent, promise_date, amount_promised, language, next_action."}, {"role": "user", "content": "Cust ne bola 15 tareekh tak 12,000 bhej dega, salary late hai. Callback 16 ko."}, {"role": "assistant", "content": "{\"intent\": \"promise_to_pay\", \"promise_date\": \"15\", \"amount_promised\": 12000, \"language\": \"hinglish\", \"next_action\": \"callback on 16th\"}"}]}
{"messages": [{"role": "system", "content": "Convert the collections call note into JSON with keys intent, promise_date, amount_promised, language, next_action."}, {"role": "user", "content": "Customer disputes the late fee, wants branch visit. No payment commitment."}, {"role": "assistant", "content": "{\"intent\": \"dispute\", \"promise_date\": null, \"amount_promised\": null, \"language\": \"english\", \"next_action\": \"escalate fee dispute to branch\"}"}]}</code></pre></div>
<ul>
<li><strong>Consistency beats volume.</strong> If two annotators format dates differently, the model learns both. Write a one-page labelling guide first.</li>
<li><strong>Cover the hard cases.</strong> Disputes, partial payments, Hinglish, missing information: the model only handles what it has seen.</li>
<li><strong>Hold out an evaluation set</strong> of 10 to 20% that never touches training, and deduplicate across the split.</li>
<li><strong>Mask personal data.</strong> Under the DPDP Act 2023, training on customer notes needs a lawful basis and clear purpose; replace names, phone and account numbers with placeholders.</li>
</ul>
<p>Validate the file before spending GPU time:</p>
<div class="code"><div class="fname">check_jsonl.py</div><pre><code>import json
import sys
from collections import Counter

REQUIRED_KEYS = {"intent", "promise_date", "amount_promised", "language", "next_action"}


def check(path: str) -&gt; Counter:
    problems, seen = Counter(), set()
    with open(path, encoding="utf-8") as f:
        for line in f:
            record = json.loads(line)
            messages = record.get("messages", [])
            if not messages or messages[-1]["role"] != "assistant":
                problems["last turn is not the assistant"] += 1
                continue
            if any(m["role"] not in {"system", "user", "assistant"} for m in messages):
                problems["unknown role"] += 1
            key = messages[-2]["content"].strip().lower()
            if key in seen:
                problems["duplicate input"] += 1
            seen.add(key)
            try:
                target = json.loads(messages[-1]["content"])
                if set(target) != REQUIRED_KEYS:
                    problems["wrong JSON keys"] += 1
            except json.JSONDecodeError:
                problems["target is not valid JSON"] += 1
    return problems


if __name__ == "__main__":
    print(check(sys.argv[1]) or "No problems found")</code></pre></div>
</section>

<section class="card" id="how-do-you-fine-tune-a-model-with-hugging-face-peft-and-trl"><div class="pill">Code</div><h2>How do you fine-tune a model with Hugging Face PEFT and TRL?</h2>
<p><strong>Load the base model in 4-bit with <code>BitsAndBytesConfig</code>, describe the adapter with a <code>LoraConfig</code>, and pass both to TRL's <code>SFTTrainer</code> with an <code>SFTConfig</code>.</strong> The script below is QLoRA on a small instruct model and runs on a single CUDA GPU.</p>
<div class="code"><div class="fname">train_qlora.py</div><pre><code># pip install -U torch transformers peft trl datasets accelerate bitsandbytes
import torch
from datasets import load_dataset
from peft import LoraConfig
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
from trl import SFTConfig, SFTTrainer

MODEL_ID = "Qwen/Qwen2.5-1.5B-Instruct"   # any small instruct model whose licence fits your use
use_bf16 = torch.cuda.get_device_capability()[0] &gt;= 8  # Ampere or newer (A100, L4, RTX 30xx+); a T4 is 7.5
compute_dtype = torch.bfloat16 if use_bf16 else torch.float16

# QLoRA part 1: load the frozen base model in 4-bit NF4
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_compute_dtype=compute_dtype,
)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID, quantization_config=bnb_config, dtype=compute_dtype, device_map="auto"
)  # dtype sets the non-quantized layers; transformers older than 4.56 call it torch_dtype

# QLoRA part 2: small trainable LoRA adapters on every linear layer
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    lora_dropout=0.05,
    target_modules="all-linear",
    task_type="CAUSAL_LM",
)

data = load_dataset("json", data_files={"train": "train.jsonl", "eval": "eval.jsonl"})

args = SFTConfig(
    output_dir="callnotes-qlora",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,      # effective batch size 16
    learning_rate=2e-4,                 # adapters tolerate a higher LR than full fine-tuning
    lr_scheduler_type="cosine",
    warmup_steps=10,
    optim="paged_adamw_8bit",           # QLoRA part 3: paged optimizer survives memory spikes
    max_length=1024,
    logging_steps=10,
    eval_strategy="epoch",
    save_strategy="epoch",
    bf16=use_bf16,
    fp16=not use_bf16,
    gradient_checkpointing=True,
    report_to="none",
)

trainer = SFTTrainer(
    model=model,
    args=args,
    train_dataset=data["train"],
    eval_dataset=data["eval"],
    processing_class=tokenizer,
    peft_config=lora_config,
)
trainer.model.print_trainable_parameters()
trainer.train()
trainer.save_model("callnotes-qlora/adapter")   # saves only the adapter, a few MB to tens of MB</code></pre></div>
<p>Version notes, as of November 2026: this follows the current <a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">TRL SFTTrainer documentation</a> (TRL 1.x, checked against 1.17) and the Transformers <a href="https://huggingface.co/docs/transformers/quantization/bitsandbytes" target="_blank" rel="noopener">bitsandbytes guide</a>. The tokenizer is passed as <code>processing_class</code> and the sequence cap is <code>max_length</code>; older tutorials use <code>tokenizer=</code> and <code>max_seq_length=</code>, which now fail. <code>SFTConfig</code> turns gradient checkpointing on by default, and 4-bit loading in this script assumes an NVIDIA GPU. If you want loss computed only on the assistant's reply, look at <code>assistant_only_loss=True</code> in <code>SFTConfig</code>, which depends on the model's chat template supporting it.</p>
<p>To use the adapter, load the base model, attach the adapter and generate:</p>
<div class="code"><div class="fname">infer.py</div><pre><code>import torch
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer

MODEL_ID = "Qwen/Qwen2.5-1.5B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
# transformers older than 4.56 call this argument torch_dtype; use float16 on a T4
base = AutoModelForCausalLM.from_pretrained(MODEL_ID, dtype=torch.bfloat16, device_map="auto")
model = PeftModel.from_pretrained(base, "callnotes-qlora/adapter")   # base + adapter
model.eval()

messages = [
    {"role": "system", "content": "Convert the collections call note into JSON with keys "
                                  "intent, promise_date, amount_promised, language, next_action."},
    {"role": "user", "content": "Customer bola 20 ko 8,500 dega, baaki next month. Reminder SMS bhejo."},
]
inputs = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True, return_tensors="pt", return_dict=True
).to(model.device)
with torch.no_grad():
    output = model.generate(**inputs, max_new_tokens=200, do_sample=False)
print(tokenizer.decode(output[0][inputs["input_ids"].shape[-1]:], skip_special_tokens=True))</code></pre></div>
</section>

<section class="card" id="how-do-you-evaluate-a-fine-tuned-llm"><div class="pill">Evaluation</div><h2>How do you evaluate a fine-tuned LLM?</h2>
<p><strong>Run the fine-tuned model, the base model with your best prompt, and ideally a larger hosted model on the same held-out set, and score them with task-specific metrics you agreed before training.</strong> Falling training loss only proves the model learned the training format.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">What to measure</th><th scope="col">How</th><th scope="col">Why it matters</th></tr></thead>
<tbody>
<tr><td>Format validity</td><td>Share of outputs that parse as JSON with the right keys</td><td>Usually the first win from fine-tuning</td></tr>
<tr><td>Field accuracy</td><td>Exact match per field against labels</td><td>Tells you where the model still guesses</td></tr>
<tr><td>Hard-case accuracy</td><td>Same metrics on a tagged slice (disputes, Hinglish)</td><td>Averages hide the cases that hurt</td></tr>
<tr><td>General ability</td><td>A few unrelated prompts before and after</td><td>Catches the model forgetting other skills</td></tr>
<tr><td>Cost and latency</td><td>Tokens and milliseconds per request</td><td>Often the real business case</td></tr>
</tbody></table></div>
<p>Our guide to <a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">evaluating LLM applications</a> includes a reusable harness for exactly this comparison.</p>
</section>

<section class="card" id="worked-example-should-a-bengaluru-nbfc-fine-tune-for-collections-call-notes"><div class="pill">Worked example</div><h2>Worked example: should a Bengaluru NBFC fine-tune for collections call notes?</h2>
<p><strong>Yes, if a well-prompted base model fails the format and Hinglish cases on a held-out test and the data cannot leave the company's servers.</strong> Consider a mid-sized NBFC in Bengaluru whose collections agents type short notes in mixed Hindi and English after every call. Managers want each note turned into JSON (intent, promise date, amount promised, language, next action) for daily follow-up lists, the kind of structured input a collections agent like the one in our <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">guide to agentic AI</a> depends on.</p>
<p>A sensible path, with illustrative numbers:</p>
<ol class="steps">
<li>Prompt a hosted model with five examples; score 100 held-out notes.</li>
<li>Find the failures: wrong JSON keys, missed amounts written as "8.5k", Hinglish dates.</li>
<li>Label 1,500 masked notes with a one-page guide; validate with check_jsonl.py.</li>
<li>QLoRA-tune a small open model with r = 16, alpha = 32, three epochs.</li>
<li>Compare both on the same 100 notes and the Hinglish slice; ship only on a clear win.</li>
</ol>
<p>Rough training arithmetic: 1,500 examples at about 250 tokens each is roughly 375,000 tokens per epoch, a little over a million across three epochs. On a single modern GPU, a 1.5B model finishes well within an hour. The expensive parts are labelling and the evaluation set, not the GPU. In the LoRA/QLoRA labs of Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a>, the learners who get the best results spend most of their time on the labelling guide; the training script is the quick part.</p>
</section>

<section class="card concl" id="what-is-a-sensible-first-fine-tuning-project-checklist"><div class="pill">Checklist</div><h2>What is a sensible first fine-tuning project checklist?</h2>
<p><strong>Treat it as an experiment with a pass mark, not a default.</strong></p>
<div class="check"><ul>
<li>Write down the behaviour you want and the metric that proves it.</li>
<li>Build a 100-example held-out set and score your best prompt on it first.</li>
<li>Draft a labelling guide and label 300 to 1,500 examples, masking personal data.</li>
<li>Validate the JSONL, deduplicate, and split train and evaluation sets.</li>
<li>Run QLoRA on a 1B to 3B model with r = 16 and alpha = 32 as a baseline.</li>
<li>Compare against the prompted base model on the full set and on hard slices.</li>
<li>Version the adapter, data and config together.</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>What is the difference between LoRA and QLoRA?</h3>
<p>Both freeze the base model and train small low-rank adapter matrices. LoRA keeps the frozen base in 16-bit precision. QLoRA stores it in 4-bit NF4 with double quantization, cutting weight memory to about a quarter, so larger models fit on smaller GPUs. QLoRA is slower per step because weights are de-quantized during computation.</p>
<h3>How many examples do I need to fine-tune an LLM with LoRA?</h3>
<p>For a narrow format or classification task, a few hundred consistent, high-quality examples often show clear gains, and one to a few thousand is a common working range. Quality and coverage of hard cases matter more than raw count. Keep a separate held-out set to measure the gain.</p>
<h3>Can fine-tuning teach an LLM new facts?</h3>
<p>Poorly. Fine-tuning with LoRA reliably changes behaviour such as format, tone and task skill, but it is an unreliable way to store facts and costly to update. For company policies, product data or anything that changes, use retrieval-augmented generation and keep the documents current.</p>
<h3>What rank and alpha should I use for LoRA?</h3>
<p>A common starting point is rank 16 with alpha 32, applied to all linear layers, a learning rate around 1e-4 to 2e-4, and two to three epochs. Lower the rank for simple tasks and raise it if the model underfits. Change one setting at a time and judge by held-out metrics.</p>
<h3>Can I fine-tune an LLM on Google Colab?</h3>
<p>Yes, for small models. QLoRA on a 1B to 3B model, and on a 7B model with short sequences, can fit in the 16 GB of a T4 GPU. A T4 does not support bfloat16, so train in float16. Sessions can time out, so save checkpoints regularly.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Hu, E. J. et al. "LoRA: Low-Rank Adaptation of Large Language Models." 2021. <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener">https://arxiv.org/abs/2106.09685</a></li>
<li>Dettmers, T. et al. "QLoRA: Efficient Finetuning of Quantized LLMs." 2023. <a href="https://arxiv.org/abs/2305.14314" target="_blank" rel="noopener">https://arxiv.org/abs/2305.14314</a></li>
<li>Hugging Face. "LoRA" developer guide, PEFT documentation. <a href="https://huggingface.co/docs/peft/developer_guides/lora" target="_blank" rel="noopener">https://huggingface.co/docs/peft/developer_guides/lora</a></li>
<li>Hugging Face. "SFT Trainer," TRL documentation. <a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">https://huggingface.co/docs/trl/sft_trainer</a></li>
<li>Hugging Face. "bitsandbytes" quantization guide, Transformers documentation. <a href="https://huggingface.co/docs/transformers/quantization/bitsandbytes" target="_blank" rel="noopener">https://huggingface.co/docs/transformers/quantization/bitsandbytes</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning: which should you use?</a></li>
<li><a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">How to evaluate LLM applications</a></li>
<li><a href="/aihelpcenter/genai-llm/how-are-llms-trained">How are LLMs trained?</a></li>
<li><a href="/aihelpcenter/genai-llm/why-llms-hallucinate-and-how-to-reduce-it">Why LLMs hallucinate, and how to reduce it</a></li>
<li><a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">Build your first AI agent in Python with LangGraph</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Train your first adapter with mentors beside you.</strong> Ivy's Advanced Generative AI Course covers open-source model fine-tuning with LoRA and QLoRA hands-on, then shows where a tuned model fits next to RAG pipelines, LangGraph agents and a FastAPI plus Docker deployment. 160 hours, live, with certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">See the LoRA and QLoRA fine-tuning course module</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Check if you are ready with PrepAI Diagnose (free)</a>
<p>Not sure fine-tuning is the right tool yet? Join a free <a href="/bootcamp">live AI bootcamp</a> first, or call or WhatsApp +91 7676882222 to book two free demo classes and talk it through with a counsellor.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#when-should-you-fine-tune-an-llm-instead-of-prompting-or-using-rag">When should you fine-tune?</a><a href="#what-is-lora-and-how-does-it-work">What is LoRA?</a><a href="#how-do-rank-r-and-alpha-affect-a-lora-fine-tune">Rank r and alpha</a><a href="#what-does-qlora-add-on-top-of-lora">What QLoRA adds</a><a href="#how-much-gpu-memory-do-you-need-for-lora-and-qlora">GPU memory needed</a><a href="#how-should-you-prepare-training-data-for-fine-tuning">Preparing training data</a><a href="#how-do-you-fine-tune-a-model-with-hugging-face-peft-and-trl">Code: PEFT and TRL</a><a href="#how-do-you-evaluate-a-fine-tuned-llm">Evaluating a fine-tune</a><a href="#worked-example-should-a-bengaluru-nbfc-fine-tune-for-collections-call-notes">Worked example: a Bengaluru NBFC</a><a href="#what-is-a-sensible-first-fine-tuning-project-checklist">First-project checklist</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
