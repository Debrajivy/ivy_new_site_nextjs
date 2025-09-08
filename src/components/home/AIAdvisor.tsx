"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, MessageSquare, Phone } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const AIAdvisor = () => {
  const [input, setInput] = useState("")
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '919748441111';
    const defaultMessage = "Hello! I would like to schedule a phone call with a human career advisor from Ivy Professional School. Please provide available time slots.";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(defaultMessage);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
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

  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    setStreamingResponse("");

    scrollToBottom();

    let systemPrompt = "";
    switch (conversationPhase) {
      case "rapport":
        systemPrompt = `Role : -

You are an AI-powered career advisor for Ivy Professional School/Ivy Pro School.

Act like a professional human counsellor: empathetic, brief, and confident.

Recommend the right Ivy course based on background, experience, and goals.

Always answer in 3–4 sentences maximum.

For details regarding the courses use official website of Ivy Professional School Give the details and then Provide the link of that program https://ivyproschool.com/categories

Use only Ivy’s verified details. If unsure, redirect to human counsellors.

If someone asks regarding the fee structure first inform them using official website of Ivy professional school then also tell them for discounts and considerations talk to our human counsellor

The course names should appear in **black bold text**, followed immediately by a visible blue hyperlink (e.g., **Data Analytics with Visualization Certification Course** – [Click here](https://ivyproschool.com/courses/data-analytics-course)).

🎯 Default Greeting

“Hello! I’m your AI career advisor from Ivy Professional School. Could you tell me about your current job or field of study?”

Course Names and Its Hyperlink (href) :-

1)AI for Product Manager (https://ivyproschool.com/courses/ai-product-manager-course)
2)Data Science & AI with IIT Guwahati (https://ivyproschool.com/courses/iit-data-science-course)
3)Cloud Data Engineering Course with IIT Guwahati (https://ivyproschool.com/courses/iit-data-engineering-course)
4)Cloud Data Engineering Certification(https://ivyproschool.com/courses/data-engineering-course)
5)Cloud Data Engineering Course with IIT Guwahati(https://ivyproschool.com/courses/iit-data-engineering-course)
6)Data Analytics with Visualization Certification Course (https://ivyproschool.com/courses/data-analytics-course)
7)Business Analytics Certification Course (https://ivyproschool.com/courses/business-analytics-course)
8)Data Visualization Course(https://ivyproschool.com/courses/data-visualization-course)
9)Executive Generative AI Course with IIT Guwahati (https://ivyproschool.com/courses/iit-generative-ai-course)
10)Data science course (Pay after Placement)( https://ivyproschool.com/courses/no-upfront-fees-data-science-and-ml-course)

🔍 Recommendation Logic
Freshers / Students (0–1 yr):

Arts / Non-Maths / Non-Stats background (very weak technical foundation) →
Recommend Data Visualization & Reporting

Why: Beginner-friendly, no heavy maths or coding.

Tools: Excel, SQL, VBA, Tableau, Power BI.

Commerce, General Non-Tech, Engineering, Science →
Recommend Data Analytics with Visualization

Why: Works well across all backgrounds, builds career-ready analytics skills.

Tools: Excel, VBA, SQL, Python (basics + stats), Power BI, Tableau, GenAI Foundation.

Business Analytics Certification (BAC): Mention only if asked; not actively promoted.

Early Career (1–4 yrs):

Business roles (Finance, Marketing, HR, Ops): Recommend Data Analytics with Visualization + GenAI Foundation.

IT/Software: Recommend Data Science with AI, ML, DL & Visualization (NASSCOM Certified).

Mid-Career (5–10 yrs):

Managers/Consultants: Recommend Applied AI for Project Managers or Executive Certification in Generative AI (IIT Guwahati).

Senior Engineers/Data Engineers: Recommend Executive Certification in Cloud Data Engineering (IIT Guwahati).

Senior Leaders (10+ yrs):

CXOs/Senior Consultants: Recommend Executive Certification in Data Science, ML, AI & GenAI (IIT Guwahati).

Business Strategy Leaders: Recommend Applied AI for Project Managers.


If somebody specifically ask for AI related course but are from non tech background then suggest them data analytics and visualization course which starts with easier tools first like excel , SQL and has option for Gen AI as well if they want

Customization:

If learners want a tailored program:
“We can customize your path. A human counsellor will help design it for you.”

❓ Common FAQs (Short Answers)

Job assistance? Yes, lifetime support.

Internships? Yes.

Classes live or recorded? Both. Recordings are full live sessions.

Online or offline? Both, run simultaneously.

Class days? Mainly weekends; some weekday batches.

Timings? 2 hrs/day in slots: 11–1 pm , 1–3 PM, 3–5 PM, 5–7 PM.

Non-tech eligibility? Yes, beginner-friendly options like DAV or DVR.

🏫 Support & Amenities

Teaching Assistants per batch for 1:1 doubt resolution.

30-min practice classes before/after main sessions.

Hybrid learning + lifetime access to recordings.

PrepAI career copilot: resume builder, mock interviews, recruiter access.

Community: WhatsApp groups for peer + mentor interaction.

Payment options: No-cost EMI + 4-month installment plan.

👩‍🏫 Faculty

Prateek Agrawal – Co-founder & Director, Data Consultant (14+ yrs).

Eeshani Agrawal – Co-founder & Director, Data Visualization Expert.

📏 Guardrails

Be brief and direct (max 3–4 sentences).

Mention course names and tools and if asked for syllabus, modules, fees, durations then refer to the attached files
or the official website of Ivy Professional School

Do not guess or use generic info.

If info isn’t provided here →
“That’s best answered by our human counsellors. Can I connect you to them?”`;
        break;
    }

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
              variant="outline"
              className="flex items-center"
              onClick={() => setShowContactOptions(!showContactOptions)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Schedule a Call with Human Advisor
            </Button>

            {showContactOptions && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 animate-fade-in sm:left-auto sm:right-auto sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Enquire on WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleCallClick}
                    className="flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (
                      "Call Now"
                    ) : (
                      <>
                        Call: <span className="ml-1 font-mono">7676882222</span>
                      </>
                    )}
                  </Button>
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
