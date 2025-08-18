import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Heart } from 'lucide-react';
import { useConfig, getColorClasses } from '../config/config-context';

const Footer = () => {
  const { config } = useConfig();
  const colorClasses = getColorClasses(config.branding.primaryColor);
  
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[config.branding.iconName] || LucideIcons.Building;

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <IconComponent className={`h-6 w-6 ${colorClasses.accent.replace('-500', '-400')}`} />
            <span className="font-semibold text-xl text-white">
              {config.business.name}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <a href="#" className={`transition-colors duration-200 ${colorClasses.hover.replace('bg-', 'hover:text-').replace('-100', '-300')}`}>
              Home
            </a>
            <a href="#" className={`transition-colors duration-200 ${colorClasses.hover.replace('bg-', 'hover:text-').replace('-100', '-300')}`}>
              About Us
            </a>
            <a href="#" className={`transition-colors duration-200 ${colorClasses.hover.replace('bg-', 'hover:text-').replace('-100', '-300')}`}>
              Services
            </a>
            <a href="#" className={`transition-colors duration-200 ${colorClasses.hover.replace('bg-', 'hover:text-').replace('-100', '-300')}`}>
              Resources
            </a>
            <a href="#" className={`transition-colors duration-200 ${colorClasses.hover.replace('bg-', 'hover:text-').replace('-100', '-300')}`}>
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {config.business.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
            <span>for better service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;