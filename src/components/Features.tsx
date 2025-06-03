import React from 'react';
import { Clock, Calendar, Phone, FileText, Award, Settings } from 'lucide-react';
import { Feature } from '../types';

const Features = () => {
  const features: Feature[] = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Extended Hours",
      description: "Answer calls and handle appointment requests even outside clinic hours."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Treatment Information",
      description: "Clearly explain our osteopathic services and treatment approaches."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "Easy Scheduling",
      description: "Help patients book appointments or arrange practitioner callbacks."
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Always Available",
      description: "Ensure every patient call is answered, even during treatment hours."
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Efficient Care",
      description: "Save time by automating responses to common patient questions."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Professional Service",
      description: "Enhance your clinic's reputation with consistent, professional communication."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            How Our AI Assistant Can Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This smart voice agent enhances your osteopathy clinic's patient experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;