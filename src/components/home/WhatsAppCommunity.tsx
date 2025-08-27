"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, CheckCircle } from 'lucide-react';

const WhatsAppCommunity = () => {
  const [chatMessage, setChatMessage] = useState('');

  const handleSendToWhatsApp = (message:any) => {
    const phoneNumber = '919748441111';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleJoinWhatsApp = () => {
    const defaultMessage = "Hello! I'm interested in joining the Ivy Pro School WhatsApp community.";
    handleSendToWhatsApp(defaultMessage);
  };

  const handleChatSubmit = (e:any) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      handleSendToWhatsApp(chatMessage);
      setChatMessage('');
    }
  };

  return (
    <section style={{ marginTop: 30 }} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              <MessageSquare className="mr-2 h-4 w-4" />
              Join Our Community
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can I Connect with Other Learners of Ivy Pro School?</h2>

            <p className="text-lg text-gray-700 mb-6">
              Be part of our thriving WhatsApp community where you can network with peers, get quick answers to your questions, and stay updated with the latest in data science and AI.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Get instant support</h3>
                  <p className="text-gray-600">Ask questions and get help from instructors and peers</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Network with professionals</h3>
                  <p className="text-gray-600">Build relationships with industry professionals and alumni</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Stay updated</h3>
                  <p className="text-gray-600">Receive notifications about events, webinars, and new opportunities</p>
                </div>
              </div>
            </div>

            <Button
              className="bg-green-600 hover:bg-green-700"
              size="lg"
              onClick={handleJoinWhatsApp}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join WhatsApp Community
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-green-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-green-100 rounded-lg -z-10"></div>

            <Card className="shadow-xl border-0 relative overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-600 p-5 text-white">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Ivy Data Science Community</h3>
                  </div>
                  <div className="flex items-center text-green-100 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    <span>3,450 members</span>
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold flex-shrink-0 mr-3">
                        I
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p className="font-semibold mb-1">Instructor</p>
                        <p>Hi everyone! We've just published a new tutorial on transformers. Check it out!</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold flex-shrink-0 mr-3">
                        S
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p className="font-semibold mb-1">Student</p>
                        <p>Thanks! I was just looking for resources on this topic. Really helpful!</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold flex-shrink-0 mr-3">
                        M
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p className="font-semibold mb-1">Mentor</p>
                        <p>Remember everyone, we have a live Q&A session tomorrow at 7PM!</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleChatSubmit} className="mt-4 flex items-center">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-100 border-0 rounded-full py-2 px-4 focus:ring-green-500 focus:ring-2 focus:outline-none"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <Button 
                      type="submit"
                      size="sm" 
                      variant="ghost" 
                      className="ml-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                      </svg>
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCommunity;