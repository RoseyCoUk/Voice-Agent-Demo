import React, { useState, useEffect } from 'react';
import { ConfigProvider } from './config/config-context';
import { BusinessConfig, defaultOsteopathyConfig } from './config/business-config';
import ConfigSelector from './config/config-selector';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  const [currentConfig, setCurrentConfig] = useState<BusinessConfig>(defaultOsteopathyConfig);

  // Update document title and meta description when config changes
  useEffect(() => {
    document.title = currentConfig.meta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentConfig.meta.description);
    }
  }, [currentConfig]);

  return (
    <ConfigProvider config={currentConfig}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <ConfigSelector 
          currentConfig={currentConfig} 
          onConfigChange={setCurrentConfig} 
        />
        <Header />
        <main>
          <Hero />
          <Features />
          <Demo />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;