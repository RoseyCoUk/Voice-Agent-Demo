import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { useConfig, getColorClasses } from '../config/config-context';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { config } = useConfig();
  const colorClasses = getColorClasses(config.branding.primaryColor);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[config.branding.iconName] || LucideIcons.Building;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <IconComponent 
            className={`h-8 w-8 ${isScrolled ? colorClasses.accentDark : colorClasses.accent}`} 
            strokeWidth={2}
          />
          <span className={`font-semibold text-xl ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
            {config.business.name}
          </span>
        </div>
        <nav>
          <button className={`px-4 py-2 rounded-full text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${colorClasses.primary} ${colorClasses.primaryHover} ${colorClasses.ring}`}>
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;