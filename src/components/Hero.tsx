import React from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { useConfig, getColorClasses } from '../config/config-context';

const Hero = () => {
  const { config } = useConfig();
  const colorClasses = getColorClasses(config.branding.primaryColor);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            AI Phone Assistant Demo
            <span className={`block mt-2 ${colorClasses.accent}`}>{config.business.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {config.business.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-12 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={scrollToDemo}
            aria-label="Try the demo"
            className={`px-8 py-4 text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[52px] focus:outline-none focus:ring-4 focus:ring-blue-300 ${colorClasses.primary} ${colorClasses.primaryHover}`}
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Try the Demo</span>
          </button>

          <button
            onClick={scrollToDemo}
            aria-label="Learn more about the demo"
            className={`px-8 py-4 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300 border-2 shadow-md hover:shadow-lg min-h-[52px] focus:outline-none focus:ring-4 focus:ring-gray-300 ${colorClasses.accent} ${colorClasses.border}`}
          >
            <ArrowDown className="h-5 w-5" />
            <span className="font-medium">Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;