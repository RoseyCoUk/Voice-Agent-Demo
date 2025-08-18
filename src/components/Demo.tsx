import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, AlertCircle, ChevronDown } from 'lucide-react';
import { QuestionCategory } from '../types';
import Vapi from '@vapi-ai/web';
import { useConfig, getColorClasses } from '../config/config-context';

const Demo = () => {
  const { config } = useConfig();
  const colorClasses = getColorClasses(config.branding.primaryColor);
  const [activeTab, setActiveTab] = useState('questions');
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  useEffect(() => {
    const vapiInstance = new Vapi(config.assistant.vapiToken);
    setVapi(vapiInstance);

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);
  
  // Use question categories from config
  const questionCategories = config.questionCategories;

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
              content: config.assistant.systemPrompt
            },
          ],
        },
        voice: {
          provider: "11labs",
          voiceId: config.assistant.voiceId
        },
        name: config.assistant.name,
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
            {config.demo.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {config.demo.subtitle}
          </p>
          <div className={`mt-6 p-6 rounded-lg text-left max-w-2xl mx-auto ${colorClasses.background}`}>
            <p className="text-gray-700 mb-4">
              ⚡️ This is a demo VAPI agent. It's here to show what's possible. The final version will be fully customized to your business—tone, answers, booking flow, everything. It'll understand your services, speak like your brand, and only offer available time slots from your calendar.
            </p>
            <p className="text-gray-700">
              You control what it says and how it works.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Tab navigation for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setActiveTab('call')}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'call' 
                    ? `${colorClasses.primary} text-white` 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Call Demo
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'questions' 
                    ? `${colorClasses.primary} text-white` 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Sample Questions
              </button>
            </div>
            
            {/* Left side (Call section) */}
            <div className={`md:w-1/2 p-8 ${activeTab === 'call' ? 'block' : 'hidden md:block'}`}>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center h-20 w-20 rounded-full mb-6 ${colorClasses.light}`}>
                  <Phone className={`h-10 w-10 ${colorClasses.accentDark}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Call Our AI Assistant
                </h3>
                <p className="text-gray-600 mb-8">
                  {config.demo.callToAction}
                </p>
                <button 
                  onClick={isCallActive ? handleCallEnd : handleCallStart}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-white ${
                    isCallActive 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : `${colorClasses.primary} ${colorClasses.primaryHover}`
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">
                    {isCallActive ? 'End Call' : 'Start Call'}
                  </span>
                </button>
                {isCallActive && (
                  <div className={`mt-4 p-4 rounded-lg ${colorClasses.background}`}>
                    <p className="text-sm text-gray-700 font-medium">
                      Start speaking now! The AI assistant is listening and will respond to your questions.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Try asking about {config.services.terminology.appointment}s, {config.services.terminology.service}s, or any questions from the sample list.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold block text-gray-800 mb-1">Note:</span>
                    {config.demo.disclaimer}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side (Questions section) */}
            <div className={`md:w-1/2 p-8 ${activeTab === 'questions' ? 'block' : 'hidden md:block'} ${colorClasses.background}`}>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className={`h-6 w-6 ${colorClasses.accentDark}`} />
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
                                className={`p-3 rounded-lg text-gray-700 transition-colors duration-200 ${colorClasses.background} ${colorClasses.hover}`}
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