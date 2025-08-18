import React, { createContext, useContext, ReactNode } from 'react';
import { BusinessConfig, defaultOsteopathyConfig } from './business-config';

interface ConfigContextType {
  config: BusinessConfig;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

interface ConfigProviderProps {
  children: ReactNode;
  config?: BusinessConfig;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ 
  children, 
  config = defaultOsteopathyConfig 
}) => {
  return (
    <ConfigContext.Provider value={{ config }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): ConfigContextType => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

// Utility function to get dynamic Tailwind classes for colors
export const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: any } = {
    blue: {
      primary: 'bg-blue-500',
      primaryHover: 'hover:bg-blue-600',
      accent: 'text-blue-500',
      accentDark: 'text-blue-600',
      background: 'bg-blue-50',
      light: 'bg-blue-100',
      hover: 'hover:bg-blue-100',
      border: 'border-blue-500',
      ring: 'focus:ring-blue-500'
    },
    green: {
      primary: 'bg-green-500',
      primaryHover: 'hover:bg-green-600',
      accent: 'text-green-500',
      accentDark: 'text-green-600',
      background: 'bg-green-50',
      light: 'bg-green-100',
      hover: 'hover:bg-green-100',
      border: 'border-green-500',
      ring: 'focus:ring-green-500'
    },
    purple: {
      primary: 'bg-purple-500',
      primaryHover: 'hover:bg-purple-600',
      accent: 'text-purple-500',
      accentDark: 'text-purple-600',
      background: 'bg-purple-50',
      light: 'bg-purple-100',
      hover: 'hover:bg-purple-100',
      border: 'border-purple-500',
      ring: 'focus:ring-purple-500'
    },
    red: {
      primary: 'bg-red-500',
      primaryHover: 'hover:bg-red-600',
      accent: 'text-red-500',
      accentDark: 'text-red-600',
      background: 'bg-red-50',
      light: 'bg-red-100',
      hover: 'hover:bg-red-100',
      border: 'border-red-500',
      ring: 'focus:ring-red-500'
    },
    orange: {
      primary: 'bg-orange-500',
      primaryHover: 'hover:bg-orange-600',
      accent: 'text-orange-500',
      accentDark: 'text-orange-600',
      background: 'bg-orange-50',
      light: 'bg-orange-100',
      hover: 'hover:bg-orange-100',
      border: 'border-orange-500',
      ring: 'focus:ring-orange-500'
    },
    indigo: {
      primary: 'bg-indigo-500',
      primaryHover: 'hover:bg-indigo-600',
      accent: 'text-indigo-500',
      accentDark: 'text-indigo-600',
      background: 'bg-indigo-50',
      light: 'bg-indigo-100',
      hover: 'hover:bg-indigo-100',
      border: 'border-indigo-500',
      ring: 'focus:ring-indigo-500'
    }
  };

  return colorMap[color] || colorMap.blue;
};
