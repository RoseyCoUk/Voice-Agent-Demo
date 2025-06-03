import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, AlertCircle, ChevronDown } from 'lucide-react';
import { QuestionCategory } from '../types';
import Vapi from '@vapi-ai/web';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('questions');
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  useEffect(() => {
    const vapiInstance = new Vapi("a74aeeee-0668-4269-8b7f-f249f24fa303");
    setVapi(vapiInstance);

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);
  
  const questionCategories: QuestionCategory[] = [
    {
      title: "Initial Assessment & Booking",
      emoji: "🎯",
      description: "Shows how the assistant handles new patient inquiries and booking requests.",
      questions: [
        "Can you take my details for a first appointment?",
        "I have lower back pain - can you help?",
        "Are there any appointments available next week?",
        "What should I expect during my first visit?"
      ]
    },
    {
      title: "Treatment Information",
      emoji: "🦴",
      description: "Explains osteopathic treatments and services offered.",
      questions: [
        "What conditions do you treat?",
        "How long does a treatment session last?",
        "Do you offer sports injury treatment?",
        "What's the difference between osteopathy and physiotherapy?"
      ]
    },
    {
      title: "Patient Experience",
      emoji: "👤",
      description: "Simulates common patient scenarios and concerns.",
      questions: [
        "Is treatment painful?",
        "Do you treat elderly patients?",
        "What should I wear to my appointment?",
        "Do I need a referral from my GP?"
      ]
    },
    {
      title: "After-Hours Handling",
      emoji: "⏰",
      description: "Shows how urgent inquiries and after-hours calls are managed.",
      questions: [
        "I'm in pain now - can I get an emergency appointment?",
        "Can someone call me back tomorrow?",
        "What are your opening hours?"
      ]
    },
    {
      title: "Insurance & Payments",
      emoji: "💳",
      description: "Handles payment and insurance-related inquiries professionally.",
      questions: [
        "Do you accept health insurance?",
        "What payment methods do you accept?",
        "Can I get a receipt for my insurance?"
      ]
    }
  ];

  const handleCallStart = async () => {
    if (!vapi || isCallActive) return;
    
    try {
      setIsCallActive(true);
      await vapi.start({
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en-US",
        },
        model: {
          provider: "openai",
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are an empathetic AI assistant for Spinal Solutions Osteopathy Clinic. Your role is to:

1. Initial Assessment & Booking:
- Collect contact details (name, phone) for appointments
- Ask about preferred appointment times
- Explain the initial consultation process
- Note that specific appointment times need practitioner confirmation

2. Service Information:
- Explain our osteopathic treatments and services
- Describe conditions we treat (back pain, neck pain, sports injuries, etc.)
- Share session duration (45 minutes) and frequency options
- Mention we offer both treatment and prevention

3. First Visit Guidance:
- Explain the initial assessment process
- Mention what to wear (loose, comfortable clothing)
- Describe the clinic environment
- Reassure about professional standards and care

4. Urgent Care & After-Hours:
- For acute pain, provide guidance on immediate self-care
- Take messages for next-day callback
- Explain emergency procedures

Important Guidelines:
- Never provide clinical advice or diagnoses
- Don't quote exact prices (say we'll discuss during callback)
- Maintain professional, warm, and reassuring tone
- Always offer to take contact details for follow-up
- For clinical questions, note they'll be discussed with the osteopath

Location: Central London (fictional address)
Hours: Monday-Friday 8am-7pm, Saturday 9am-2pm`
            },
          ],
        },
        voice: {
          provider: "11labs",
          voiceId: "21m00Tcm4TlvDq8ikWAM" // Rachel voice from ElevenLabs
        },
        name: "Spinal Solutions Assistant",
      });

      vapi.on("call-end", () => {
        setIsCallActive(false);
      });

      vapi.on("error", (error) => {
        console.error("Call error:", error);
        setIsCallActive(false);
      });
    } catch (error) {
      console.error("Failed to start call:", error);
      setIsCallActive(false);
    }
  };

  const handleCallEnd = () => {
    if (vapi && isCallActive) {
      vapi.stop();
      setIsCallActive(false);
    }
  };

  return (
    <section id="demo-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Try the Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how our AI assistant handles patient inquiries and appointments
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Tab navigation for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setActiveTab('call')}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'call' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Call Demo
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'questions' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Sample Questions
              </button>
            </div>
            
            {/* Left side (Call section) */}
            <div className={`md:w-1/2 p-8 ${activeTab === 'call' ? 'block' : 'hidden md:block'}`}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-6">
                  <Phone className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Call Our AI Assistant
                </h3>
                <p className="text-gray-600 mb-8">
                  Experience firsthand how our AI phone assistant handles patient inquiries with professionalism and empathy.
                </p>
                <button 
                  onClick={isCallActive ? handleCallEnd : handleCallStart}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md ${
                    isCallActive 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">
                    {isCallActive ? 'End Call' : 'Start Call'}
                  </span>
                </button>
                {isCallActive && (
                  <p className="mt-4 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                    Start speaking now! The AI assistant is listening and will respond to your questions.
                  </p>
                )}
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold block text-gray-800 mb-1">Note:</span>
                    This is a demo version only. It's designed to show how AI can support real patient needs, not replace clinical conversations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side (Questions section) */}
            <div className={`md:w-1/2 bg-blue-50 p-8 ${activeTab === 'questions' ? 'block' : 'hidden md:block'}`}>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Sample Questions to Ask
                </h3>
              </div>
              
              <div className="space-y-4">
                {questionCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.emoji}</span>
                        <span className="font-medium text-gray-800">{category.title}</span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          activeCategory === category.title ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {activeCategory === category.title && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-gray-600 mb-4 pt-2 border-t border-gray-100">
                          {category.description}
                        </p>
                        <div className="space-y-3">
                          {category.questions.map((question, qIndex) => (
                            <div
                              key={qIndex}
                              className="p-3 bg-blue-50 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors duration-200"
                            >
                              "{question}"
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;