const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps backslashes in the code samples (regex patterns, \n) exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/data-engineering">Data Engineering</a> › <b>Data Engineering for Generative AI</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">Data Engineering · PRACTITIONER GUIDE</div>
<h1>Data Engineering for Generative AI: Pipelines That Feed RAG and Agents</h1>
<p class="sub">How to turn SharePoint folders, PDFs, Tally exports and CRM notes into a clean, permission-aware, always-fresh index that a RAG system or agent can trust.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>15 min read</span><span>Published 24 Nov 2026</span><span>Last reviewed 24 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>Most RAG failures are data failures in disguise.</strong> When an assistant quotes last year's travel policy or shows a salary file to a sales trainee, the model did exactly what it was given. Fix the pipeline and most of those complaints disappear.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">Data engineering for generative AI is the work of turning scattered company content (SharePoint files, PDFs, ERP and Tally exports, CRM notes) into clean, permission-tagged, current chunks that a RAG system or AI agent can search. It covers extraction, cleaning, PII masking, chunking, embedding, indexing and incremental refresh, backed by quality checks and lineage.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>An LLM answers from whatever chunks retrieval hands it, so stale, duplicated or garbled data becomes wrong answers.</li>
<li>A RAG pipeline is a familiar ELT pipeline plus three stages: chunking, embedding and loading a vector index with access metadata.</li>
<li>Mask personal data such as PAN, Aadhaar and phone numbers before embedding; the DPDP Act, 2023 applies to text in your index and logs.</li>
<li>Refresh incrementally using content hashes or change feeds, and delete chunks for removed documents in the same transaction.</li>
<li>Do not embed ledgers and Tally exports. Load numbers into tables and let the AI query them with SQL; embed the documents that explain them.</li>
</ul></section>

<section class="card" id="why-is-generative-ai-a-data-engineering-problem"><div class="pill">Data Engineering</div><h2>Why is generative AI a data engineering problem?</h2>
<p><strong>Because an LLM can only answer from what your pipeline puts in front of it, so stale, duplicated, garbled or wrongly permissioned data turns directly into wrong or leaked answers.</strong> In retrieval-augmented generation (RAG), described by <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">Lewis and colleagues in 2020</a>, the system searches your documents for relevant passages and places them in the prompt before the model answers. The model only knows whichever chunk retrieval returned (new to this? read <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained</a>). When users complain, the cause usually sits upstream:</p>
<div class="tbl"><table>
<thead><tr><th scope="col">What users report</th><th scope="col">Usual data cause</th></tr></thead>
<tbody>
<tr><td>"It quoted the old policy"</td><td>Index not refreshed, or the old version never deleted</td></tr>
<tr><td>"It says it can't find something that exists"</td><td>Scanned PDF with no OCR, or a table flattened into word soup</td></tr>
<tr><td>"Different answers to the same question"</td><td>The same circular sits in three folders in three versions</td></tr>
<tr><td>"It showed me HR data I shouldn't see"</td><td>No access metadata on chunks, so no filter at query time</td></tr>
</tbody></table></div>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>When learners in the Advanced Generative AI Course at Ivy Professional School build their first RAG app, week one goes on prompts. By week two, nearly every bug they chase lives in parsing, chunking or refresh. That is why we push developers heading into GenAI to learn the data engineering side properly.</p></div>
</section>

<section class="card" id="what-does-a-data-pipeline-for-rag-look-like"><div class="pill">Architecture</div><h2>What does a data pipeline for RAG look like?</h2>
<p><strong>It is an ELT-style pipeline with three new stages at the end: chunking, embedding and loading a vector index with access metadata.</strong> Raw files land unchanged in a landing zone, parsed and cleaned text forms the next layer, and chunks with embeddings are the served layer. If you know the bronze, silver and gold layers of a <a href="/aihelpcenter/data-engineering/data-lake-vs-data-warehouse-vs-data-lakehouse">lakehouse</a>, this is the same pattern applied to documents, and the trade-offs from <a href="/aihelpcenter/data-engineering/etl-vs-elt-2026">ETL vs ELT</a> still apply.</p>
<figure class="diagram"><svg viewBox="0 0 720 300" role="img" aria-label="Pipeline diagram. Four sources, SharePoint, PDFs and scans, Tally or ERP exports, and CRM notes, feed five stages in order: extract and parse with OCR and tables, clean and deduplicate with PII masking, chunk with metadata such as access group, page and date, embed with the model name logged, and load into a vector index such as pgvector. The index serves a RAG app or agent. Underneath, Airflow schedules every step, quality checks run at each hand-off, and lineage links each chunk to its source file." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12" fill="#14202b">
<text x="0" y="18" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">From scattered files to a searchable, permission-aware index</text>
<rect x="0" y="44" width="118" height="34" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="59" y="66" text-anchor="middle">SharePoint</text>
<rect x="0" y="88" width="118" height="34" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="59" y="110" text-anchor="middle">PDFs &amp; scans</text>
<rect x="0" y="132" width="118" height="34" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="59" y="154" text-anchor="middle" font-size="11">Tally/ERP exports</text>
<rect x="0" y="176" width="118" height="34" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="59" y="198" text-anchor="middle">CRM notes</text>
<g stroke="#0b5394" stroke-width="2"><line x1="118" y1="61" x2="132" y2="61"/><line x1="118" y1="105" x2="132" y2="105"/><line x1="118" y1="149" x2="132" y2="149"/><line x1="118" y1="193" x2="132" y2="193"/><line x1="132" y1="61" x2="132" y2="193"/><line x1="132" y1="127" x2="146" y2="127"/></g><path d="M146 121 l7 6 l-7 6z" fill="#0b5394"/>
<text x="154" y="72" font-size="11" font-style="italic">Only changed files go through on each run</text>
<rect x="154" y="82" width="92" height="90" rx="9" fill="#0b5394"/><text x="200" y="114" text-anchor="middle" fill="#fff" font-weight="600" font-size="13">Extract</text><text x="200" y="131" text-anchor="middle" fill="#fff">&amp; parse</text><text x="200" y="154" text-anchor="middle" fill="#cfe6f5" font-size="10.5">OCR, tables</text>
<rect x="266" y="82" width="92" height="90" rx="9" fill="#0b5394"/><text x="312" y="114" text-anchor="middle" fill="#fff" font-weight="600" font-size="13">Clean</text><text x="312" y="131" text-anchor="middle" fill="#fff">&amp; dedup</text><text x="312" y="154" text-anchor="middle" fill="#f7a61b" font-size="10.5">mask PII</text>
<rect x="378" y="82" width="92" height="90" rx="9" fill="#5b4bd6"/><text x="424" y="114" text-anchor="middle" fill="#fff" font-weight="600" font-size="13">Chunk</text><text x="424" y="131" text-anchor="middle" fill="#fff">+ metadata</text><text x="424" y="154" text-anchor="middle" fill="#e2defa" font-size="10.5">ACL, page, date</text>
<rect x="490" y="82" width="92" height="90" rx="9" fill="#5b4bd6"/><text x="536" y="114" text-anchor="middle" fill="#fff" font-weight="600" font-size="13">Embed</text><text x="536" y="131" text-anchor="middle" fill="#fff">vectors</text><text x="536" y="154" text-anchor="middle" fill="#e2defa" font-size="10.5">model logged</text>
<rect x="602" y="82" width="92" height="90" rx="9" fill="#5b4bd6"/><text x="648" y="114" text-anchor="middle" fill="#fff" font-weight="600" font-size="13">Vector</text><text x="648" y="131" text-anchor="middle" fill="#fff">index</text><text x="648" y="154" text-anchor="middle" fill="#e2defa" font-size="10.5">pgvector etc.</text>
<g stroke="#0b5394" stroke-width="2"><line x1="246" y1="127" x2="259" y2="127"/><line x1="358" y1="127" x2="371" y2="127"/><line x1="470" y1="127" x2="483" y2="127"/><line x1="582" y1="127" x2="595" y2="127"/><line x1="648" y1="172" x2="648" y2="192"/></g>
<path d="M259 121 l7 6 l-7 6z M371 121 l7 6 l-7 6z M483 121 l7 6 l-7 6z M595 121 l7 6 l-7 6z M642 192 l6 8 l6 -8z" fill="#0b5394"/>
<rect x="602" y="200" width="92" height="36" rx="8" fill="#f7a61b"/><text x="648" y="223" text-anchor="middle" font-weight="600">RAG / agent</text>
<rect x="0" y="252" width="700" height="34" rx="8" fill="#eef7fc" stroke="#1a98cb"/><text x="350" y="274" text-anchor="middle">Airflow schedules every step · quality checks at each hand-off · lineage from chunk to source file</text>
</g></svg><figcaption>The first two stages are classic data engineering. The last three are new, and most production bugs hide in the hand-offs between them.</figcaption></figure>
<p>Those first two stages are the core of a data engineering job, and they are what learners practise in Ivy's <a href="/courses/data-engineering-course">data engineering course in India</a>: SQL and Python transformations, Spark and Kafka for volume and streams, and Azure Data Factory, Data Lake and Databricks for scheduled cloud pipelines, across 160 hours and 10+ industry projects. The chunk, embed and index stages belong to our <a href="/courses/generative-ai-course">Advanced Generative AI Course</a>, which covers RAG pipelines with vector database retrieval.</p>
</section>

<section class="card" id="how-do-you-extract-text-from-sharepoint-pdfs-erp-exports-and-crms"><div class="pill">Extraction</div><h2>How do you extract text from SharePoint, PDFs, ERP exports and CRMs?</h2>
<p><strong>Use an extraction method that fits each source's structure, and do not embed data that is better queried with SQL.</strong> For SharePoint, Microsoft Graph <a href="https://learn.microsoft.com/en-us/graph/delta-query-overview" target="_blank" rel="noopener">delta queries</a> return only files created, changed or deleted since your last sync. Open-source parsers such as Unstructured and pypdf handle PDFs, Word files and HTML.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Source</th><th scope="col">How to pull it</th><th scope="col">Common trap</th></tr></thead>
<tbody>
<tr><td>SharePoint / OneDrive</td><td>Microsoft Graph API with delta queries</td><td>Same file copied across sites; permissions live in SharePoint, not in the file</td></tr>
<tr><td>Digital PDFs</td><td>File sync, then a PDF parser</td><td>Tables flattened; headers and footers repeated on every page</td></tr>
<tr><td>Scanned PDFs (contracts, stamped letters)</td><td>OCR before parsing</td><td>Parser returns empty text without an error</td></tr>
<tr><td>Tally / ERP exports</td><td>Scheduled CSV or Excel export, or a database connection, into warehouse tables</td><td>Embedding ledger rows that should be queried with SQL</td></tr>
<tr><td>CRM (Salesforce, Zoho CRM and similar)</td><td>Vendor API, incremental on last-modified time</td><td>Free-text notes full of phone numbers and emails</td></tr>
</tbody></table></div>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>Do not embed your Tally ledger. Vector search finds similar text; it cannot total invoices by GSTIN or compare this quarter with last. Load structured data into tables and let the assistant query them through SQL (see <a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">connecting LLMs to SQL</a>). Embed the documents that explain the numbers: policies, contracts and SOPs.</p></div>
</section>

<section class="card" id="how-should-you-clean-deduplicate-and-mask-personal-data-before-embedding"><div class="pill">Cleaning &amp; privacy</div><h2>How should you clean, deduplicate and mask personal data before embedding?</h2>
<p><strong>Normalise the text, strip boilerplate and duplicates, and mask personal data before anything reaches the embedding model or the vector store.</strong></p>
<ul>
<li><strong>Clean:</strong> fix encoding errors, collapse whitespace, remove repeated headers, footers and page numbers, and drop near-empty pages.</li>
<li><strong>Deduplicate:</strong> exact duplicates via a content hash; near-duplicates ("v2", "v2-final", "v2-final-signed") by keeping only the latest version per document and flagging high-similarity pairs for review.</li>
<li><strong>Mask PII:</strong> regular expressions catch structured identifiers such as PAN, Aadhaar, mobile numbers and emails. Names and addresses need an entity-recognition tool such as Microsoft Presidio, plus a sampled manual audit.</li>
</ul>
<div class="callout warning"><div class="eyebrow">Watch out</div><p>Embedding is not anonymisation. The original chunk text sits next to every vector and comes back in answers and logs. India's Digital Personal Data Protection Act, 2023 applies to that text like any other personal data; the DPDP Rules notified in November 2025 bring most data fiduciary obligations into force 18 months later, around May 2027 (see <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener">MeitY's data protection page</a>). Index only what the assistant's purpose needs.</p></div>
</section>

<section class="card" id="how-do-you-chunk-documents-and-choose-embeddings"><div class="pill">Chunking</div><h2>How do you chunk documents and choose embeddings?</h2>
<p><strong>Split along the document's own structure (sections, clauses, FAQ entries) into pieces of a few hundred tokens with a small overlap, and attach metadata to every chunk.</strong> Keep tables whole, and prefix each chunk with its title and heading ("Travel Policy &gt; Hotel limits") so it makes sense on its own.</p>
<p>Every chunk should carry its source path, page, version date, access group and embedding model name. Vectors from different models are not comparable, so switching models means re-embedding everything; plan it as a migration. For the intuition behind vectors, read <a href="/aihelpcenter/genai-llm/what-an-embedding-actually-is">what an embedding actually is</a>. For storage, the pgvector extension used in the example below is often enough if you already run PostgreSQL.</p>
<div class="callout rule-of-thumb"><div class="eyebrow">Rule of thumb</div><p>Pick a chunk size, then read twenty random chunks aloud. If a colleague could not answer a question from one chunk alone, your chunks are too small or cut in the wrong place.</p></div>
</section>

<section class="card" id="how-do-you-keep-the-vector-index-fresh-without-re-embedding-everything"><div class="pill">Refresh</div><h2>How do you keep the vector index fresh without re-embedding everything?</h2>
<p><strong>Detect what changed at the source, re-process only those documents, and delete chunks for documents that were removed or replaced.</strong> Content hashes work for any file store. Delta queries suit SharePoint, last-modified watermarks suit CRMs, and change data capture suits databases. Replace each document's chunks inside one transaction so nobody retrieves a half-updated policy.</p>
<p>Deletions are the step teams most often forget. A withdrawn circular that stays in the index will keep being quoted, confidently, for months. The illustrative arithmetic below shows why incremental refresh matters:</p>
<div class="stats"><div><b>60,000</b><span>chunks in the index (illustrative)</span></div><div><b>~1,200</b><span>chunks changed per week, if 2% of documents change</span></div><div><b>1.8 million</b><span>embeddings a month with a nightly full rebuild</span></div><div><b>~5,200</b><span>embeddings a month with hash-based incremental refresh</span></div></div>
</section>

<section class="card" id="what-does-an-airflow-dag-for-a-rag-pipeline-look-like"><div class="pill">Code</div><h2>What does an Airflow DAG for a RAG pipeline look like?</h2>
<p><strong>An hourly DAG that finds changed files, then parses, checks, embeds and upserts each one as a separate mapped task, plus a task that removes deleted documents.</strong> The example uses Airflow 3's TaskFlow API (see the <a href="https://airflow.apache.org/docs/apache-airflow/stable/tutorial/taskflow.html" target="_blank" rel="noopener">official tutorial</a>), PostgreSQL with <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector</a> and an open-source embedding model. PDFs are synced from SharePoint into one folder per access group. Create the tables once:</p>
<div class="code"><div class="fname">schema.sql</div><pre><code>CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS rag_documents (
    source_path  text PRIMARY KEY,
    content_hash text NOT NULL,
    refreshed_at timestamptz NOT NULL
);

CREATE TABLE IF NOT EXISTS rag_chunks (
    id           bigserial PRIMARY KEY,
    source_path  text NOT NULL,
    access_group text NOT NULL,
    page         int  NOT NULL,
    chunk_no     int  NOT NULL,
    body         text NOT NULL,
    embedding    vector(384) NOT NULL,
    embed_model  text NOT NULL
);

CREATE INDEX IF NOT EXISTS rag_chunks_source_idx ON rag_chunks (source_path);
CREATE INDEX IF NOT EXISTS rag_chunks_group_idx  ON rag_chunks (access_group);
CREATE INDEX IF NOT EXISTS rag_chunks_hnsw_idx   ON rag_chunks USING hnsw (embedding vector_cosine_ops);</code></pre></div>
<div class="code"><div class="fname">dags/rag_refresh.py</div><pre><code>"""Hourly refresh of a policy-assistant index (Airflow 3.x).
On Airflow 2.x, use: from airflow.decorators import dag, task
pip install apache-airflow pypdf sentence-transformers "psycopg[binary]" pgvector
"""
from __future__ import annotations

import hashlib
import json
import re
from datetime import datetime
from pathlib import Path

from airflow.sdk import dag, task

LANDING = Path("/data/landing")            # synced from SharePoint: one folder per access group
STAGING = Path("/data/staging/chunks")
PG_DSN = "postgresql://rag:rag@pg:5432/knowledge"   # use an Airflow Connection in production
MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"  # 384-dimensional vectors

PII = [
    ("[PAN]", re.compile(r"\b[A-Z]{5}[0-9]{4}[A-Z]\b")),
    ("[AADHAAR]", re.compile(r"\b\d{4}\s?\d{4}\s?\d{4}\b")),
    ("[EMAIL]", re.compile(r"\b[\w.+-]+@[\w-]+\.[\w.-]+\b")),
    ("[PHONE]", re.compile(r"(?&lt;!\d)(?:\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}(?!\d)")),
]


def sha256_of(path: Path) -&gt; str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def clean(text: str) -&gt; str:
    for token, pattern in PII:
        text = pattern.sub(token, text)
    text = re.sub(r"[ \t]+", " ", text)
    return re.sub(r"\n{3,}", "\n\n", text).strip()


def split_text(text: str, size: int = 1200, overlap: int = 200) -&gt; list[str]:
    """Character-based splitter that prefers to cut at the end of a sentence."""
    chunks, start = [], 0
    while start &lt; len(text):
        end = min(start + size, len(text))
        if end &lt; len(text):
            cut = text.rfind(". ", start, end)
            if cut &gt; start + size // 2:
                end = cut + 1
        chunks.append(text[start:end].strip())
        if end == len(text):
            break
        start = end - overlap
    return [c for c in chunks if c]


def read_rows(chunk_file: str) -&gt; list[dict]:
    lines = Path(chunk_file).read_text(encoding="utf-8").splitlines()
    return [json.loads(line) for line in lines if line.strip()]


@dag(schedule="@hourly", start_date=datetime(2026, 11, 1), catchup=False,
     max_active_runs=1, tags=["genai", "rag"])
def rag_refresh():

    @task
    def find_changed_files() -&gt; list[str]:
        import psycopg
        current = {str(p): sha256_of(p) for p in LANDING.glob("*/*.pdf")}
        with psycopg.connect(PG_DSN) as conn:
            known = dict(conn.execute("SELECT source_path, content_hash FROM rag_documents").fetchall())
        return [path for path, digest in current.items() if known.get(path) != digest]

    @task
    def remove_deleted_files() -&gt; int:
        import psycopg
        present = {str(p) for p in LANDING.glob("*/*.pdf")}
        with psycopg.connect(PG_DSN) as conn:
            known = [row[0] for row in conn.execute("SELECT source_path FROM rag_documents")]
            gone = [path for path in known if path not in present]
            for path in gone:
                conn.execute("DELETE FROM rag_chunks WHERE source_path = %s", (path,))
                conn.execute("DELETE FROM rag_documents WHERE source_path = %s", (path,))
        return len(gone)

    @task
    def parse_clean_chunk(path: str) -&gt; str:
        from pypdf import PdfReader
        source = Path(path)
        digest, group = sha256_of(source), source.parent.name
        rows, seen = [], set()
        for page_no, page in enumerate(PdfReader(source).pages, start=1):
            for chunk in split_text(clean(page.extract_text() or "")):
                key = hashlib.sha1(chunk.lower().encode()).hexdigest()
                if key in seen:                      # repeated boilerplate inside the file
                    continue
                seen.add(key)
                rows.append({"source_path": path, "content_hash": digest, "access_group": group,
                             "page": page_no, "chunk_no": len(rows), "body": chunk})
        STAGING.mkdir(parents=True, exist_ok=True)
        out = STAGING / f"{digest}.jsonl"
        out.write_text("\n".join(json.dumps(r, ensure_ascii=False) for r in rows), encoding="utf-8")
        return str(out)

    @task
    def quality_check(chunk_file: str) -&gt; str:
        rows = read_rows(chunk_file)
        if not rows:
            raise ValueError(f"{chunk_file}: no text extracted (scanned PDF? route it to OCR)")
        text = " ".join(r["body"] for r in rows)
        unreadable = text.count("�") / len(text)
        if unreadable &gt; 0.01:
            raise ValueError(f"{chunk_file}: {unreadable:.1%} unreadable characters")
        tiny = sum(len(r["body"]) &lt; 50 for r in rows) / len(rows)
        if tiny &gt; 0.3:
            raise ValueError(f"{chunk_file}: {tiny:.0%} of chunks are under 50 characters")
        return chunk_file

    @task
    def embed_and_upsert(chunk_file: str) -&gt; int:
        import psycopg
        from pgvector.psycopg import register_vector
        from sentence_transformers import SentenceTransformer

        rows = read_rows(chunk_file)
        vectors = SentenceTransformer(MODEL_NAME).encode(
            [r["body"] for r in rows], batch_size=64, normalize_embeddings=True)
        doc = rows[0]
        with psycopg.connect(PG_DSN) as conn:
            register_vector(conn)
            with conn.transaction():                 # readers never see a half-replaced document
                conn.execute("DELETE FROM rag_chunks WHERE source_path = %s", (doc["source_path"],))
                with conn.cursor() as cur:
                    cur.executemany(
                        "INSERT INTO rag_chunks (source_path, access_group, page, chunk_no, body,"
                        " embedding, embed_model) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                        [(r["source_path"], r["access_group"], r["page"], r["chunk_no"], r["body"],
                          vec, MODEL_NAME) for r, vec in zip(rows, vectors)])
                conn.execute(
                    "INSERT INTO rag_documents (source_path, content_hash, refreshed_at)"
                    " VALUES (%s, %s, now()) ON CONFLICT (source_path)"
                    " DO UPDATE SET content_hash = EXCLUDED.content_hash, refreshed_at = now()",
                    (doc["source_path"], doc["content_hash"]))
        return len(rows)

    remove_deleted_files()
    chunk_files = parse_clean_chunk.expand(path=find_changed_files())
    checked = quality_check.expand(chunk_file=chunk_files)
    embed_and_upsert.expand(chunk_file=checked)


rag_refresh()</code></pre></div>
<p>Three design choices matter more than the code. Dynamic task mapping (<code>.expand</code>) gives each file its own task, so one corrupt PDF fails alone. Tasks pass file paths, not document text, which assumes every worker mounts the same <code>/data</code> volume (use object storage such as S3 or Azure Blob otherwise). And the quality check runs before embedding, where failures are cheap. New to Airflow? See <a href="/aihelpcenter/data-engineering/apache-airflow-python-data-pipelines">Airflow for Python data pipelines</a>.</p>
</section>

<section class="card" id="how-do-you-enforce-access-control-in-a-rag-pipeline"><div class="pill">Security</div><h2>How do you enforce access control in a RAG pipeline?</h2>
<p><strong>Copy each document's permissions into chunk metadata at ingestion, then filter on the user's groups inside the database query, never in the prompt.</strong> Telling the model "do not reveal HR documents" is a request, not a control. A filter in the query is a control: chunks the user may not see never reach the model at all.</p>
<div class="code"><div class="fname">retrieve.sql (parameters bound by psycopg)</div><pre><code>SELECT body, source_path, page
FROM rag_chunks
WHERE access_group = ANY(%(user_groups)s)
ORDER BY embedding &lt;=&gt; %(query_vector)s
LIMIT 5;</code></pre></div>
<p>One pgvector detail matters here: an HNSW index applies the <code>WHERE</code> filter after the approximate search, so a small access group can come back with fewer than five rows. From pgvector 0.8.0 you can run <code>SET hnsw.iterative_scan = strict_order;</code> so the index keeps scanning until enough rows pass the filter, as the <a href="https://github.com/pgvector/pgvector#iterative-index-scans" target="_blank" rel="noopener">pgvector README</a> explains.</p>
<p>Treat a permission change as a content change, and add test personas to your eval set: a sales trainee asking about salary bands should get a polite refusal.</p>
</section>

<section class="card" id="which-data-quality-checks-and-lineage-do-genai-pipelines-need"><div class="pill">Quality</div><h2>Which data quality checks and lineage do GenAI pipelines need?</h2>
<p><strong>Put a simple automated check at every hand-off, and record lineage so any answer can be traced back to a file, a version and a pipeline run.</strong></p>
<div class="tbl"><table>
<thead><tr><th scope="col">Stage</th><th scope="col">Check</th><th scope="col">Catches</th></tr></thead>
<tbody>
<tr><td>Extraction</td><td>Characters per page above a floor</td><td>Scanned PDFs that skipped OCR</td></tr>
<tr><td>Cleaning</td><td>Share of unreadable characters below 1%</td><td>Encoding and font problems</td></tr>
<tr><td>PII masking</td><td>Masked-token counts per file, plus a sampled manual audit</td><td>Identifier formats the regex missed</td></tr>
<tr><td>Chunking</td><td>Length distribution; no empty or tiny chunks</td><td>Splitter bugs</td></tr>
<tr><td>Embedding</td><td>Vector count equals chunk count; dimensions match</td><td>Partial batches, API failures</td></tr>
<tr><td>Index</td><td>No source older than the refresh target; no deleted sources present</td><td>A silently broken refresh</td></tr>
<tr><td>Retrieval</td><td>Golden questions return the expected document in the top five</td><td>Any of the above</td></tr>
</tbody></table></div>
<p>For lineage, store the source path, content hash, run ID and embedding model with each chunk. <a href="https://openlineage.io/docs/" target="_blank" rel="noopener">OpenLineage</a>, an open standard with an Airflow integration, can record which job read and wrote which dataset, so an auditor's "where did this answer come from?" takes minutes, not days.</p>
</section>

<section class="card" id="what-does-this-look-like-for-a-manufacturer-in-kolkata"><div class="pill">Worked example</div><h2>What does this look like for a manufacturer in Kolkata?</h2>
<p><strong>For a typical mid-sized manufacturer, the right design embeds SOPs, policies and contracts, queries Tally data through SQL, and masks CRM notes before indexing them.</strong> Picture a 600-person engineering goods company that wants one internal assistant for HR policies, shop-floor SOPs, vendor contracts and sales questions. The volumes below are illustrative.</p>
<figure class="diagram"><svg viewBox="0 0 720 250" role="img" aria-label="Illustrative chunk counts by source: CRM visit notes from the last 24 months 31,000; SOPs and manuals on SharePoint 22,000; scanned vendor contracts 6,000; HR and finance policies 4,500; Tally ledger exports zero, because they are queried with SQL instead of embedded." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="18" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Chunks in the index by source (illustrative)</text>
<text x="0" y="62">CRM visit notes (24 months)</text><rect x="240" y="44" width="380" height="26" rx="4" fill="#0b5394"/><text x="628" y="62" font-weight="600">31,000</text>
<text x="0" y="102">SOPs and manuals</text><rect x="240" y="84" width="269.7" height="26" rx="4" fill="#1a98cb"/><text x="518" y="102" font-weight="600">22,000</text>
<text x="0" y="142">Scanned vendor contracts</text><rect x="240" y="124" width="73.5" height="26" rx="4" fill="#5b4bd6"/><text x="322" y="142" font-weight="600">6,000</text>
<text x="0" y="182">HR and finance policies</text><rect x="240" y="164" width="55.2" height="26" rx="4" fill="#1f9d6b"/><text x="303" y="182" font-weight="600">4,500</text>
<text x="0" y="222">Tally ledger exports</text><text x="240" y="222" font-weight="600">0 (queried with SQL, not embedded)</text>
<text x="0" y="246" font-size="12" font-style="italic">Illustrative volumes for the worked example, not measured data.</text>
</g></svg><figcaption>The biggest source by volume is often the messiest one (CRM notes), and the most important numbers (Tally) should not be in the vector index at all.</figcaption></figure>
<ol>
<li><strong>SOPs and policies:</strong> synced hourly from SharePoint using delta queries; one access group per department plus "all staff".</li>
<li><strong>Vendor contracts:</strong> OCR first, then a weekly manual check of ten random pages, because a misread payment term is costly.</li>
<li><strong>CRM notes:</strong> only the last 24 months, phone numbers and emails masked, visible to the sales group only.</li>
<li><strong>Tally:</strong> nightly exports loaded into warehouse tables (a simple <a href="/aihelpcenter/data-engineering/star-schema-vs-snowflake-schema">star schema</a> of invoices, parties and dates); the assistant gets a read-only SQL tool for "outstanding from distributors above ₹5 lakh".</li>
</ol>
<p>When we run this exercise with enterprise teams, the source inventory (what exists, who owns it, who may see it) usually takes longer than the first pipeline. Time well spent.</p>
</section>

<section class="card concl" id="what-should-you-build-first"><div class="pill">Action checklist</div><h2>What should you build first?</h2>
<p><strong>Build the boring foundations before the clever retrieval tricks.</strong></p>
<div class="check"><ul>
<li>List every source, its owner, its refresh frequency and who may see it.</li>
<li>Route structured data (Tally, ERP, sales tables) to SQL; embed only documents.</li>
<li>Mask PAN, Aadhaar, phone and email before embedding, and audit a sample by hand.</li>
<li>Attach source, page, version, access group and model name to every chunk.</li>
<li>Refresh incrementally and handle deletions in the same run.</li>
<li>Add a quality check at every hand-off and alert on failures.</li>
<li>Keep 30 golden questions that must retrieve the right document, and run them after every refresh (our guide to <a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">evaluating LLM applications</a> shows how to grow them into a full eval set).</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>What is data engineering for generative AI?</h3><p>It is building the pipelines that collect company content, extract and clean the text, mask personal data, split it into chunks, embed the chunks and load them into a searchable index, then keep that index fresh and permission-aware so RAG systems and agents answer from current, allowed information.</p>
<h3>Do I need a vector database for RAG?</h3><p>You need somewhere to store and search embeddings, but it does not have to be a new product. If you already run PostgreSQL, the pgvector extension is often enough for small and mid-sized corpora. A few dozen documents may fit straight into the prompt with no retrieval layer at all.</p>
<h3>How often should a RAG index be refreshed?</h3><p>As often as the source changes in ways users care about. Policies and SOPs on SharePoint often justify hourly or daily incremental refresh, while archives can refresh weekly. Refresh only changed documents, handle deletions in the same run, and alert when any source is older than its agreed refresh target.</p>
<h3>Should I embed Excel files and ERP data?</h3><p>Usually not. Embeddings capture meaning, not arithmetic, so a vector search cannot total invoices or compare quarters reliably. Load spreadsheets and ERP exports into database tables and let the assistant query them with SQL. Embed the documents that explain the numbers, such as policies, contracts and process notes.</p>
<h3>How does the DPDP Act affect RAG pipelines in India?</h3><p>Personal data in documents, chunks, prompts and logs is still personal data under the Digital Personal Data Protection Act, 2023. Index only what the assistant's purpose needs, mask identifiers such as PAN and Aadhaar before embedding, control access with metadata filters, and set retention and deletion rules for both the index and logs.</p>
<h3>Do I need a course to learn data engineering for generative AI?</h3><p>No. If you already write SQL and Python, the Airflow and pgvector documentation plus one end-to-end project will teach you most of it. A course helps career switchers who want mentor feedback and deadlines. At Ivy Professional School the pipeline side sits in the Data Engineering Course and RAG with vector databases in the Advanced Generative AI Course. Compare any syllabus with real job descriptions first.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Lewis, P. et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." 2020. <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">https://arxiv.org/abs/2005.11401</a></li>
<li>Apache Airflow. "Pythonic DAGs with the TaskFlow API" tutorial. <a href="https://airflow.apache.org/docs/apache-airflow/stable/tutorial/taskflow.html" target="_blank" rel="noopener">https://airflow.apache.org/docs/apache-airflow/stable/tutorial/taskflow.html</a></li>
<li>Microsoft Learn. "Use delta query to track changes in Microsoft Graph data." <a href="https://learn.microsoft.com/en-us/graph/delta-query-overview" target="_blank" rel="noopener">https://learn.microsoft.com/en-us/graph/delta-query-overview</a></li>
<li>Unstructured. Open-source library overview (partitioning and chunking). <a href="https://docs.unstructured.io/open-source/introduction/overview" target="_blank" rel="noopener">https://docs.unstructured.io/open-source/introduction/overview</a></li>
<li>pgvector. Open-source vector similarity search for Postgres. <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">https://github.com/pgvector/pgvector</a></li>
<li>OpenLineage. "About OpenLineage." <a href="https://openlineage.io/docs/" target="_blank" rel="noopener">https://openlineage.io/docs/</a></li>
<li>Ministry of Electronics and Information Technology, Government of India. Data protection framework (DPDP Act, 2023 and DPDP Rules, 2025). <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener">https://www.meity.gov.in/data-protection-framework</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/how-to-become-an-ai-engineer">How to become an AI engineer in 2026</a></li>
<li><a href="/aihelpcenter/data-engineering/etl-vs-elt-2026">ETL vs ELT in 2026</a></li>
<li><a href="/aihelpcenter/data-engineering/apache-airflow-python-data-pipelines">Apache Airflow for Python data pipelines</a></li>
<li><a href="/aihelpcenter/data-engineering/data-lake-vs-data-warehouse-vs-data-lakehouse">Data lake vs data warehouse vs lakehouse</a></li>
<li><a href="/aihelpcenter/genai-llm/what-an-embedding-actually-is">What an embedding actually is</a></li>
<li><a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">How to evaluate LLM applications</a></li>
</ul>
<p>More in <a href="/aihelpcenter/data-engineering">Data Engineering</a>.</p>
<div class="cta"><p><strong>Analyst or developer who wants to build the pipelines AI products depend on?</strong> The Data Engineering Course at Ivy (160 hours) covers SQL and Python, Hadoop and Hive, Spark and Kafka, and Azure Data Factory, Data Lake and Databricks, with 10+ industry projects and placement support. Add the Advanced Generative AI Course later if you also want to build the RAG and agent layer on top.</p>
<a class="btn" href="/courses/data-engineering-course">See the data engineering syllabus</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Check your SQL and Python level free (PrepAI Diagnose)</a>
<p>Not ready to commit? Watch a free <a href="/bootcamp">live AI bootcamp</a> first. Ready to plan the move? <a href="/contact-us">Book a free demo class</a> or call a counsellor on +91 7676882222 (WhatsApp too). Ivy has learning hubs in Kolkata, Delhi, Bangalore and Pune, including a <a href="/courses/data-engineering-course-kolkata">data engineering course in Kolkata</a>.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#why-is-generative-ai-a-data-engineering-problem">Why GenAI is a data problem</a><a href="#what-does-a-data-pipeline-for-rag-look-like">The RAG data pipeline</a><a href="#how-do-you-extract-text-from-sharepoint-pdfs-erp-exports-and-crms">Extracting from each source</a><a href="#how-should-you-clean-deduplicate-and-mask-personal-data-before-embedding">Cleaning and PII masking</a><a href="#how-do-you-chunk-documents-and-choose-embeddings">Chunking and embeddings</a><a href="#how-do-you-keep-the-vector-index-fresh-without-re-embedding-everything">Keeping the index fresh</a><a href="#what-does-an-airflow-dag-for-a-rag-pipeline-look-like">Code: an Airflow DAG</a><a href="#how-do-you-enforce-access-control-in-a-rag-pipeline">Access control</a><a href="#which-data-quality-checks-and-lineage-do-genai-pipelines-need">Quality checks and lineage</a><a href="#what-does-this-look-like-for-a-manufacturer-in-kolkata">Worked example: a Kolkata manufacturer</a><a href="#what-should-you-build-first">What to build first</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
