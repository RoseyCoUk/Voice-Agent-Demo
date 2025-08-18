import React, { useState } from 'react';
import { BusinessConfig, defaultOsteopathyConfig } from './business-config';
import { legalServicesConfig, restaurantConfig, techSupportConfig } from './example-configs';
import { ChevronDown } from 'lucide-react';

interface ConfigSelectorProps {
  currentConfig: BusinessConfig;
  onConfigChange: (config: BusinessConfig) => void;
}

const availableConfigs = {
  'osteopathy': {
    name: 'Osteopathy Clinic',
    config: defaultOsteopathyConfig
  },
  'legal': {
    name: 'Legal Services',
    config: legalServicesConfig
  },
  'restaurant': {
    name: 'Restaurant',
    config: restaurantConfig
  },
  'tech_support': {
    name: 'Tech Support',
    config: techSupportConfig
  }
};

export const ConfigSelector: React.FC<ConfigSelectorProps> = ({ currentConfig, onConfigChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentConfigKey = Object.keys(availableConfigs).find(
    key => availableConfigs[key as keyof typeof availableConfigs].config.business.name === currentConfig.business.name
  ) || 'osteopathy';

  const handleConfigSelect = (configKey: keyof typeof availableConfigs) => {
    console.log('Config selected:', configKey); // Debug log
    onConfigChange(availableConfigs[configKey].config);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-20 right-4 z-[100]">
      <div className="relative">
        <button
          onClick={() => {
            console.log('Toggle button clicked, isOpen:', isOpen); // Debug log
            setIsOpen(!isOpen);
          }}
          className="bg-blue-600 text-white shadow-lg rounded-lg px-4 py-2 border-2 border-blue-700 flex items-center gap-2 hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-medium relative"
        >
          <span className="text-sm">
            🔄 Switch Demo: {availableConfigs[currentConfigKey as keyof typeof availableConfigs].name}
          </span>
          <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {Object.keys(availableConfigs).length}
          </div>
        </button>
        
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-200 min-w-56 overflow-hidden z-[110]">
            <div className="py-1">
              {Object.entries(availableConfigs).map(([key, { name, config }]) => (
                <button
                  key={key}
                  onClick={() => handleConfigSelect(key as keyof typeof availableConfigs)}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors duration-200 ${
                    key === currentConfigKey ? 'bg-blue-100 text-blue-800 font-medium' : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  <div className="font-medium">{name}</div>
                  <div className="text-xs text-gray-500">{config.business.industry}</div>
                </button>
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
              <p className="text-xs text-gray-600">
                Switch between demo configurations to see how the template adapts to different business types.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigSelector;
