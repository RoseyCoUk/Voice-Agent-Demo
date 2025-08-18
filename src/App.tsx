import React, { useState, useEffect } from 'react';
import { ConfigProvider } from './config/config-context';
import { BusinessConfig, defaultOsteopathyConfig } from './config/business-config';
import { 
  legalServicesConfig, 
  restaurantConfig, 
  techSupportConfig, 
  dentalClinicConfig 
} from './config/example-configs';
import { 
  realEstateConfig, 
  fitnessStudioConfig, 
  accountingFirmConfig, 
  petGroomingConfig, 
  hairSalonConfig 
} from './config/additional-configs';
import { 
  autoRepairConfig, 
  photographyStudioConfig, 
  veterinaryConfig, 
  interiorDesignConfig, 
  financialAdvisoryConfig, 
  plumbingConfig 
} from './config/additional-configs-2';
import { 
  marketingAgencyConfig, 
  coffeeShopConfig, 
  tutoringConfig, 
  travelAgencyConfig 
} from './config/additional-configs-3';
import BusinessSelector from './components/BusinessSelector';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

// Available business configurations
const availableBusinesses = {
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
  },
  'dental': {
    name: 'Dental Clinic',
    config: dentalClinicConfig
  },
  'real_estate': {
    name: 'Real Estate Agency',
    config: realEstateConfig
  },
  'fitness': {
    name: 'Fitness Studio',
    config: fitnessStudioConfig
  },
  'accounting': {
    name: 'Accounting Firm',
    config: accountingFirmConfig
  },
  'pet_grooming': {
    name: 'Pet Grooming',
    config: petGroomingConfig
  },
  'hair_salon': {
    name: 'Hair Salon',
    config: hairSalonConfig
  },
  'auto_repair': {
    name: 'Auto Repair Shop',
    config: autoRepairConfig
  },
  'photography': {
    name: 'Photography Studio',
    config: photographyStudioConfig
  },
  'veterinary': {
    name: 'Veterinary Clinic',
    config: veterinaryConfig
  },
  'interior_design': {
    name: 'Interior Design',
    config: interiorDesignConfig
  },
  'financial_advisory': {
    name: 'Financial Advisory',
    config: financialAdvisoryConfig
  },
  'plumbing': {
    name: 'Plumbing Services',
    config: plumbingConfig
  },
  'marketing': {
    name: 'Marketing Agency',
    config: marketingAgencyConfig
  },
  'coffee_shop': {
    name: 'Coffee Shop',
    config: coffeeShopConfig
  },
  'tutoring': {
    name: 'Tutoring Service',
    config: tutoringConfig
  },
  'travel_agency': {
    name: 'Travel Agency',
    config: travelAgencyConfig
  }
};

function App() {
  const [currentConfig, setCurrentConfig] = useState<BusinessConfig>(defaultOsteopathyConfig);
  const [currentBusinessKey, setCurrentBusinessKey] = useState<string>('osteopathy');
  const [showBusinessSelector, setShowBusinessSelector] = useState(true);

  // Update document title and meta description when config changes
  useEffect(() => {
    document.title = currentConfig.meta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentConfig.meta.description);
    }
  }, [currentConfig]);

  const handleBusinessSelect = (businessKey: string, config: BusinessConfig) => {
    setCurrentBusinessKey(businessKey);
    setCurrentConfig(config);
    setShowBusinessSelector(false);
    // Scroll to hero section
    setTimeout(() => {
      const heroSection = document.querySelector('main');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackToSelector = () => {
    setShowBusinessSelector(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ConfigProvider config={currentConfig}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <Header />
        
        {showBusinessSelector ? (
          <BusinessSelector
            businesses={availableBusinesses}
            currentBusiness={currentBusinessKey}
            onBusinessSelect={handleBusinessSelect}
          />
        ) : (
          <>
            {/* Business switch button for when demo is active */}
            <div className="fixed top-20 right-4 z-50">
              <button
                onClick={handleBackToSelector}
                className="bg-blue-600 text-white shadow-lg rounded-lg px-4 py-2 border-2 border-blue-700 flex items-center gap-2 hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-medium"
              >
                <span className="text-sm">🔄 Switch Demo</span>
              </button>
            </div>
            
            <main>
              <Hero />
              <Features />
              <Demo />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;