import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const AIAdvisor = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI career advisor from Ivy Professional School. Could you tell me about your current job or field of study?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingResponse, setStreamingResponse] = useState('');
  const [conversationPhase, setConversationPhase] = useState<'rapport' | 'guidance' | 'recommendation'>('rapport');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const [isMobile, setIsMobile] = useState(false)
  const [showNumber, setShowNumber] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])


  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

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
  };

  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    setStreamingResponse('');





    let systemPrompt = '';
    switch (conversationPhase) {
      case 'rapport':
        systemPrompt = `As IvyPro AI Career Advisor, you MUST:
- ONLY answer questions related to Ivy Professional School, its programs, courses, admissions, or career guidance at Ivy.
- If asked about anything unrelated to Ivy, politely inform the user that you can only assist with Ivy-related topics.
- Ask about their current job/education.
- Inquire about career goals (advancement, switch, specialization).
- Show genuine interest and empathy.
- NEVER recommend courses yet.
- Only proceed when you fully understand their background.`;
        break;
      case 'guidance':
        systemPrompt = `As IvyPro AI Career Advisor, you MUST:
1. ONLY answer questions related to Ivy Professional School, its programs, courses, admissions, or career guidance at Ivy.
2. If asked about anything unrelated to Ivy, politely inform the user that you can only assist with Ivy-related topics.
3. Share 1-2 alumni success stories matching their background.
4. Mention Ivy's Fortune 500 company connections.
5. Address concerns about time/money/job readiness if raised.
6. Build trust before mentioning any courses.
7. ONLY discuss course options if they show interest.`;

        break;
      case 'recommendation':
        systemPrompt = `As IvyPro AI Career Advisor, you MUST:
1. ONLY answer questions related to Ivy Professional School, its programs, courses, admissions, or career guidance at Ivy.
2. If asked about anything unrelated to Ivy, politely inform the user that you can only assist with Ivy-related topics.
3. Recommend ONLY these Ivy courses based on their needs:
   - Data Science Bootcamp (Python, ML, visualization)
   - Data Engineering Program (ETL, pipelines, cloud)
   - Business Analytics Course (SQL, Tableau, stats)
   - AI & ML Certification (advanced algorithms)
   - Generative AI Masterclass (LLMs, diffusion models)
4. For EACH recommendation:
   - Explain why it matches their goals
   - Mention an alumni with similar background
   - Offer LinkedIn profile or scheduling call
5. Maintain professional, non-pushy tone.`;

        break;
    }

    const messages = [
      { role: 'system', content: systemPrompt },
      ...chatHistory.map((msg) => ({ role: msg.role, content: msg.content })),
      { role: 'user', content: userMessage },
    ];

    try {
      const controller = new AbortController();
      controllerRef.current = controller;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4.1-nano',
          messages,
          temperature: 0.7,
          stream: true,
        }),
        signal: controller.signal,
      });

      if (!response.body) throw new Error('No response stream');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let fullResponse = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter((line) => line.trim().startsWith('data: '));

        for (const line of lines) {
          const message = line.replace(/^data: /, '');
          if (message === '[DONE]') break;

          if (!message || message === '[DONE]') continue;

          try {
            const json = JSON.parse(message);
            const content = json.choices?.[0]?.delta?.content;
            if (content) {
              fullResponse += content;
              setStreamingResponse((prev) => prev + content);
            }
          } catch (err) {
            console.warn('Skipping invalid JSON chunk:', message);
          }

        }
      }

      setChatHistory((prev) => [...prev, { role: 'assistant', content: fullResponse }]);

      if (
        conversationPhase === 'rapport' &&
        (userMessage.toLowerCase().includes('goal') ||
          userMessage.toLowerCase().includes('want') ||
          userMessage.toLowerCase().includes('aspire'))
      ) {
        setConversationPhase('guidance');
      } else if (
        conversationPhase === 'guidance' &&
        (fullResponse.includes('recommend') ||
          fullResponse.includes('suggest') ||
          fullResponse.includes('consider'))
      ) {
        setConversationPhase('recommendation');
      }
    } catch (error) {
      console.error('Streaming error:', error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    } finally {
      setIsTyping(false);
      controllerRef.current = null;
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setChatHistory((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    await generateAIResponse(userMessage);
  };

  useEffect(() => {
    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, []);

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
              <div className="h-80 overflow-y-auto p-4">
                {chatHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-wrap ${message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800'
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
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button size="icon" onClick={handleSendMessage} disabled={isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="flex items-center" onClick={handleClick}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Schedule a Call with Human Advisor
            </Button>
          </div>
          {showNumber && !isMobile && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 animate-fade-in">
              <div className="text-center">
                <p className="text-gray-700 font-medium">Call us at:</p>
                <a href="tel:7676882222" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  7676882222
                </a>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
