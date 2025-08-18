import React from 'react';
import * as LucideIcons from 'lucide-react';
import { useConfig, getColorClasses } from '../config/config-context';

const Features = () => {
  const { config } = useConfig();
  const colorClasses = getColorClasses(config.branding.primaryColor);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            How Our AI Assistant Can Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This smart voice agent enhances your {config.business.industry.toLowerCase()}'s {config.services.terminology.client} experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.features.map((feature, index) => {
            const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Star;
            return (
              <div 
                key={index} 
                className={`rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 ${colorClasses.background}`}
              >
                <div className="mb-4">
                  <IconComponent className={`h-8 w-8 ${colorClasses.accent}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;