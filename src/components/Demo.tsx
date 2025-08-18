import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, AlertCircle, ChevronDown, Mic, MicOff } from 'lucide-react';
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
  const [micPermission, setMicPermission] = useState<'unknown' | 'granted' | 'denied' | 'requesting'>('unknown');
  const [callError, setCallError] = useState<string | null>(null);
  const [showSetupGuide, setShowSetupGuide] = useState(false);
  
  useEffect(() => {
    console.log('Initializing VAPI with token:', config.assistant.vapiToken?.substring(0, 8) + '...');
    const vapiInstance = new Vapi(config.assistant.vapiToken);
    setVapi(vapiInstance);

    // Check initial microphone permission status
    checkMicrophonePermission();

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, [config.assistant.vapiToken]);

  const checkMicrophonePermission = async () => {
    try {
      if (navigator.permissions) {
        const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setMicPermission(permission.state as 'granted' | 'denied');
        
        // Listen for permission changes
        permission.onchange = () => {
          setMicPermission(permission.state as 'granted' | 'denied');
        };
      }
    } catch (error) {
      console.log('Permission API not available, will request on first use');
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      setMicPermission('requesting');
      setCallError(null);
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Stop the stream immediately as we just needed permission
      stream.getTracks().forEach(track => track.stop());
      
      setMicPermission('granted');
      return true;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      setMicPermission('denied');
      setCallError('Microphone access is required for voice calls. Please allow microphone access and try again.');
      return false;
    }
  };
  
  // Use question categories from config
  const questionCategories = config.questionCategories;

  const isConfigurationValid = () => {
    return config.assistant.vapiToken && 
           config.assistant.vapiToken !== "your-vapi-token-here" &&
           config.assistant.voiceId &&
           config.assistant.voiceId !== "your-voice-id-here";
  };

  const handleCallStart = async () => {
    if (!vapi || isCallActive) return;
    
    // Check if configuration is valid
    if (!isConfigurationValid()) {
      setCallError('Demo configuration incomplete. VAPI token and voice ID need to be configured.');
      setShowSetupGuide(true);
      return;
    }
    
    // Check and request microphone permission first
    if (micPermission !== 'granted') {
      const permissionGranted = await requestMicrophonePermission();
      if (!permissionGranted) {
        return;
      }
    }
    
    try {
      setIsCallActive(true);
      setCallError(null);
      setShowSetupGuide(false);
      
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
        firstMessage: config.assistant.greeting,
      });

      vapi.on("call-end", () => {
        setIsCallActive(false);
        setCallError(null);
      });

      vapi.on("error", (error) => {
        console.error("Call error:", error);
        console.error("Call error details:", JSON.stringify(error, null, 2));
        setIsCallActive(false);
        
        let errorMessage = 'Unknown error occurred';
        
        if (error && typeof error === 'object') {
          if (error.message) {
            errorMessage = error.message;
          } else if (error.error) {
            errorMessage = error.error;
          } else if (error.toString && error.toString() !== '[object Object]') {
            errorMessage = error.toString();
          } else {
            errorMessage = `Error type: ${error.type || 'unknown'}, Code: ${error.code || 'unknown'}`;
          }
        } else if (error) {
          errorMessage = String(error);
        }
        
        if (errorMessage.includes('401') || errorMessage.includes('unauthorized') || errorMessage.includes('invalid token')) {
          setCallError('Invalid VAPI token. Please check your VAPI configuration.');
          setShowSetupGuide(true);
        } else if (errorMessage.includes('voice') || errorMessage.includes('11labs')) {
          setCallError('Voice configuration error. Please check your ElevenLabs voice ID.');
          setShowSetupGuide(true);
        } else if (errorMessage.includes('credits') || errorMessage.includes('billing')) {
          setCallError('VAPI account issue. Please check your VAPI account credits and billing.');
        } else if (errorMessage.includes('network') || errorMessage.includes('connection')) {
          setCallError('Network connection error. Please check your internet connection.');
        } else {
          setCallError(`Call failed: ${errorMessage}`);
        }
      });
    } catch (error: any) {
      console.error("Failed to start call:", error);
      console.error("Start call error details:", JSON.stringify(error, null, 2));
      setIsCallActive(false);
      
      let errorMessage = 'Unknown error occurred';
      
      if (error && typeof error === 'object') {
        if (error.message) {
          errorMessage = error.message;
        } else if (error.error) {
          errorMessage = error.error;
        } else if (error.toString && error.toString() !== '[object Object]') {
          errorMessage = error.toString();
        } else {
          errorMessage = `Error type: ${error.type || 'unknown'}, Code: ${error.code || 'unknown'}`;
        }
      } else if (error) {
        errorMessage = String(error);
      }
      
      if (errorMessage.includes('401') || errorMessage.includes('unauthorized') || errorMessage.includes('invalid token')) {
        setCallError('Invalid VAPI token. Please check your VAPI configuration.');
        setShowSetupGuide(true);
      } else if (errorMessage.includes('voice') || errorMessage.includes('11labs')) {
        setCallError('Voice configuration error. Please check your ElevenLabs voice ID.');
        setShowSetupGuide(true);
      } else if (errorMessage.includes('credits') || errorMessage.includes('billing')) {
        setCallError('VAPI account issue. Please check your VAPI account credits and billing.');
      } else if (errorMessage.includes('network') || errorMessage.includes('connection')) {
        setCallError('Network connection error. Please check your internet connection.');
      } else if (errorMessage.includes('microphone') || errorMessage.includes('audio') || errorMessage.includes('media')) {
        setCallError('Audio access error. Please ensure microphone permissions are granted.');
      } else {
        setCallError(`Failed to start call: ${errorMessage}`);
      }
    }
  };

  const handleCallEnd = () => {
    if (vapi && isCallActive) {
      vapi.stop();
      setIsCallActive(false);
      setCallError(null);
    }
  };

  const getMicrophoneStatusIcon = () => {
    switch (micPermission) {
      case 'granted':
        return <Mic className="h-4 w-4 text-green-600" />;
      case 'denied':
        return <MicOff className="h-4 w-4 text-red-600" />;
      case 'requesting':
        return <div className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />;
      default:
        return <Mic className="h-4 w-4 text-gray-400" />;
    }
  };

  const getMicrophoneStatusText = () => {
    switch (micPermission) {
      case 'granted':
        return 'Microphone ready';
      case 'denied':
        return 'Microphone access denied';
      case 'requesting':
        return 'Requesting microphone access...';
      default:
        return 'Microphone access needed';
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
              ⚡️ This is a demo voice agent. It's here to show what's possible. The final version will be fully customized to your business—tone, answers, booking flow, everything. It'll understand your services, speak like your brand, and only offer available time slots from your calendar.
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
                
                {/* Microphone Status */}
                <div className="mb-6 flex items-center justify-center gap-2">
                  {getMicrophoneStatusIcon()}
                  <span className={`text-sm font-medium ${
                    micPermission === 'granted' ? 'text-green-700' :
                    micPermission === 'denied' ? 'text-red-700' :
                    micPermission === 'requesting' ? 'text-blue-700' :
                    'text-gray-600'
                  }`}>
                    {getMicrophoneStatusText()}
                  </span>
                </div>

                <button 
                  onClick={isCallActive ? handleCallEnd : handleCallStart}
                  disabled={micPermission === 'requesting'}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isCallActive 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : isConfigurationValid() 
                        ? `${colorClasses.primary} ${colorClasses.primaryHover}`
                        : 'bg-amber-500 hover:bg-amber-600'
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">
                    {isCallActive ? 'End Call' : 
                     micPermission === 'requesting' ? 'Requesting Permission...' : 
                     !isConfigurationValid() ? 'Setup Required' : 'Start Call'}
                  </span>
                </button>
                
                {/* Error Display */}
                {callError && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-red-700 font-medium mb-1">Call Failed</p>
                        <p className="text-sm text-red-600">{callError}</p>
                        {micPermission === 'denied' && (
                          <button
                            onClick={requestMicrophonePermission}
                            className="mt-2 text-sm text-red-700 underline hover:text-red-800"
                          >
                            Try requesting microphone access again
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Setup Guide */}
                {showSetupGuide && (
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-amber-700 font-medium mb-2">Setup Required</p>
                        <p className="text-sm text-amber-600 mb-3">
                          To enable voice calls, you need to configure your API keys:
                        </p>
                        <div className="text-xs text-amber-600 space-y-2">
                          <div>
                            <p className="font-medium">1. Check VAPI Account:</p>
                            <p>• Log in to <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700">vapi.ai</a></p>
                            <p>• Verify you have credits in your account</p>
                            <p>• Ensure your API token is active</p>
                            <p>• Current token: <code className="bg-amber-100 px-1 rounded text-xs">{config.assistant.vapiToken?.substring(0, 8)}...</code></p>
                          </div>
                          <div>
                            <p className="font-medium">2. Check ElevenLabs Voice:</p>
                            <p>• Log in to <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700">elevenlabs.io</a></p>
                            <p>• Verify the voice ID exists and is accessible</p>
                            <p>• Current voice ID: <code className="bg-amber-100 px-1 rounded text-xs">{config.assistant.voiceId}</code></p>
                          </div>
                          <div>
                            <p className="font-medium">3. Common Issues:</p>
                            <p>• Insufficient VAPI credits</p>
                            <p>• Invalid or expired API tokens</p>
                            <p>• Network connectivity issues</p>
                            <p>• Browser blocking microphone access</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowSetupGuide(false)}
                          className="mt-3 text-sm text-amber-700 underline hover:text-amber-800"
                        >
                          Hide setup guide
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isCallActive && (
                  <div className={`mt-4 p-4 rounded-lg ${colorClasses.background}`}>
                    <p className="text-sm text-gray-700 font-medium">
                      🎤 Connected! The AI assistant will greet you first, then you can start speaking.
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
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <span className="font-semibold block text-gray-800 mb-1">Note:</span>
                      {config.demo.disclaimer}
                    </p>
                    <p className="text-xs text-gray-500">
                      💡 <strong>Microphone tip:</strong> If the microphone permission prompt doesn't appear, make sure you're using HTTPS (not HTTP) or localhost. Some browsers block microphone access on non-secure connections.
                    </p>
                  </div>
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