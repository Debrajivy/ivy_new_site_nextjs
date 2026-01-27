"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, MessageSquare, Phone, ShieldCheck } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const AIAdvisor = () => {
  const [input, setInput] = useState("")
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI career advisor from Ivy Professional School. Could you tell me about your current job or field of study?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [streamingResponse, setStreamingResponse] = useState("")
  const [conversationPhase, setConversationPhase] = useState<"rapport" | "guidance" | "recommendation">("rapport")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const controllerRef = useRef<AbortController | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showNumber, setShowNumber] = useState(false)
  const [showContactOptions, setShowContactOptions] = useState(false);

  // your original WhatsApp function but gated by captcha
  const handleWhatsAppClick = () => {
    if (userInput !== captchaCode) {
      alert("Verification failed. Please try again.");
      generateCaptcha();
      setUserInput("");
      return;
    }

    const phoneNumber = "919748441111";
    const defaultMessage =
      "Hello! I would like to schedule a phone call with a human career advisor from Ivy Professional School. Please provide available time slots.";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(defaultMessage);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // reset captcha state
    setShowCaptcha(false);
    setUserInput("");
  };

  const handleCallClick = () => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:7676882222`;
    }
  };


  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatHistory, streamingResponse, isTyping])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:7676882222"
    } else {
      setShowNumber(true)
      const timer = setTimeout(() => {
        setShowNumber(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }

  // generate random captcha code like a4T6bY7
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 7; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true)
    setStreamingResponse("")
    scrollToBottom()

    const systemPrompt = `You are an AI-powered career advisor for Ivy Professional School.
Act like a professional human counselor: empathetic, brief, and confident.

🎯 Your Core Responsibilities

Recommend the most suitable Ivy course based on the user’s background, experience, and goals.

Always reply in 3–4 concise sentences.

Use only verified details from Ivy’s official website.

When unsure or information is unavailable, politely refer to human counsellors.

🔗 Course Name Format
Always format course recommendations as:
Course Name in bold black – Click here (blue hyperlink).
Example: Data Analytics With Visualization – Click here

📍 Course Directory (Name + Link)

AI for Product Managers – Click here

Data Science with Machine Learning & AI Certification – Click here

Cloud Data Engineering Course with IIT Guwahati – Click here

 Data Engineering Course – Click here

Data Analytics With Visualization – Click here

Data Analytics and Generative AI Course – Click here

Data Analytics and Generative AI Course – Click here

Generative AI Course – Click here

Data Science Course (Pay after Placement) – Click here

👋 Default Greeting
“Hello! I’m your AI career advisor from Ivy Professional School. Could you tell me about your current job or field of study?”

🔍 Recommendation Logic
Freshers / Students (0–1 yr)

Arts / Non-Maths / Non-Stats background → Data Analytics and Generative AI Course – Click here
Beginner-friendly. Tools: Excel, SQL, VBA, Tableau, Power BI.

Commerce / Engineering / Science → Data Analytics With Visualization – Click here
Strong foundation for all backgrounds. Tools: Excel, SQL, Python (basic + stats), Power BI, Tableau, GenAI.

Early Career (1–4 yrs)

Business Roles (Finance, Marketing, HR, Ops) → Data Analytics With Visualization – Click here

IT / Software → Data Science with Machine Learning & AI Certification – Click here

Mid-Career (5–10 yrs)

Managers / Consultants →

AI for Product Managers – Click here

or Generative AI Course – Click here

Senior Engineers → Cloud Data Engineering Course with IIT Guwahati – Click here

Senior Leaders (10+ yrs)

CXOs / Senior Consultants → Data Science with Machine Learning & AI Certification – Click here

Business Strategists → AI for Product Managers – Click here

Special Note (Non-Tech Asking for AI)
If someone from a non-tech background asks for an AI-related course, suggest:
Data Analytics With Visualization – Click here
This course starts with beginner-friendly tools and includes an optional GenAI module.

🎓 Customization
If user asks for a custom path:

“We can customize your path. A human counsellor will help design it for you.”

💬 Common FAQs (Give short, confident responses)

Job Assistance? Yes, lifetime support.

Internships? Yes.

Live or Recorded Classes? Both – recordings of full live sessions.

Online or Offline? Both available.

Class Days? Mainly weekends; some weekday batches.

Timings? 2-hour sessions: 11–1 PM, 1–3 PM, 3–5 PM, or 5–7 PM.

Non-tech eligible? Yes – beginner-friendly options available.

💡 Fees and Discounts
If asked:

“You can find the fee details on the official Ivy website. For any discounts or considerations, please speak to a human counsellor.”
Visit Website

🏫 Support & Facilities

Dedicated Teaching Assistants for 1:1 doubt resolution

Pre/post-session practice classes

Hybrid mode + lifetime access to recordings

PrepAI Copilot: resume builder, mock interviews, recruiter access

Active WhatsApp community groups

No-cost EMI & installment plans available

👩‍🏫 Faculty

  The faculty includes the top 1% of industry experts, with experience at companies like Amazon, Microsoft, Capgemini, Accenture, and HSBC. Many hold degrees from leading institutions such as IITs, IIMs, and top US universities. The team brings a blend of real-world experience and academic excellence to every program.  

🚧 Important Guardrails

Always be brief and professional (max 3–4 sentences).

Mention tools or skills only if relevant.

Never guess or create content not provided here.

If unsure:

“That’s best answered by our human counsellors. Can I connect you to them?”
**Always use markdown for formatting lists of courses or features.**`

    const messages = [
      { role: "system", content: systemPrompt },
      ...chatHistory.map((msg) => ({ role: msg.role, content: msg.content })),
      { role: "user", content: userMessage },
    ];

    try {
      const controller = new AbortController();
      controllerRef.current = controller;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
          conversationPhase,
        }),
        signal: controller.signal,
      });

      if (!response.body) throw new Error("No response stream");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullResponse = "";
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const message = line.replace(/^data: /, "").trim();
          if (!message || message === "[DONE]") continue;
          try {
            const json = JSON.parse(message);
            const content = json.choices?.[0]?.delta?.content;
            if (content) {
              fullResponse += content;
              setStreamingResponse((prev) => prev + content);
            }
          } catch (err) {
            console.warn("Skipping invalid JSON chunk:", message);
          }
        }
      }

      if (buffer) {
        const message = buffer.replace(/^data: /, "").trim();
        try {
          const json = JSON.parse(message);
          const content = json.choices?.[0]?.delta?.content;
          if (content) {
            fullResponse += content;
          }
        } catch (err) {
          console.warn("Skipping invalid JSON chunk:", message);
        }
      }

      setChatHistory((prev) => [...prev, { role: "assistant", content: fullResponse.trim() }]);

      if (
        conversationPhase === "rapport" &&
        (userMessage.toLowerCase().includes("goal") ||
          userMessage.toLowerCase().includes("want") ||
          userMessage.toLowerCase().includes("aspire"))
      ) {
        setConversationPhase("guidance");
      } else if (
        conversationPhase === "guidance" &&
        (fullResponse.toLowerCase().includes("recommend") || fullResponse.toLowerCase().includes("suggest") || fullResponse.toLowerCase().includes("consider"))
      ) {
        setConversationPhase("recommendation");
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
      setStreamingResponse("");
      controllerRef.current = null;
    }
  };
  const handleSendMessage = async () => {
    if (!input.trim()) return
    const userMessage = input
    setChatHistory((prev) => [...prev, { role: "user", content: userMessage }])
    setInput("")
    await generateAIResponse(userMessage)
  }

  useEffect(() => {
    return () => {
      if (controllerRef.current) controllerRef.current.abort()
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">AI Career Advisor</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get personalized course recommendations from Ivy Professional School
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-primary/5 border-b flex flex-row items-center space-x-2 pb-4">
              <Bot className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">IvyPro AI Career Advisor</h3>
            </CardHeader>
            <CardContent className="p-0">
              <div ref={chatContainerRef} className="h-80 overflow-y-auto p-4">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-wrap ${message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                      <ReactMarkdown>{streamingResponse}</ReactMarkdown>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="border-t p-4 flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tell me about your background..."
                  className="flex-grow"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button size="icon" onClick={handleSendMessage} disabled={isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-center relative">
            <Button
              className="flex items-center bg-[#009fda] text-white hover:bg-[#009fda]"
              onClick={() => setShowContactOptions(!showContactOptions)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Schedule a Call with Human Advisor
            </Button>


            {showContactOptions && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 animate-fade-in sm:left-auto sm:right-auto sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp button triggers captcha modal */}
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      generateCaptcha();
                      setShowCaptcha(true);
                    }}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Enquire on WhatsApp
                  </Button>

                  {/* Call button */}
                  <Button
                    variant="outline"
                    className="flex items-center justify-center"
                    onClick={() => {
                      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                        window.open("tel:7676882222");
                      }
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                      ? "Call Now"
                      : (
                        <>
                          Call: <span className="ml-1 font-mono">7676882222</span>
                        </>
                      )}
                  </Button>
                </div>
              </div>
            )}

            {/* Captcha Modal */}
            {showCaptcha && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                  <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Verification Required</h3>
                  <p className="text-sm text-gray-600 mb-4">Enter the code below to continue</p>

                  <div className="font-mono text-lg tracking-widest bg-gray-100 px-4 py-2 rounded-lg mb-3">
                    {captchaCode}
                  </div>

                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter the code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 mb-4"
                  />

                  <div className="flex justify-between gap-2">
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleWhatsAppClick}
                    >
                      Verify & Continue
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowCaptcha(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {showNumber && !isMobile && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 animate-fade-in">
              <div className="text-center">
                <p className="text-gray-700 font-medium">Call us at:</p>
                <a
                  href="tel:7676882222"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  7676882222
                </a>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AIAdvisor
