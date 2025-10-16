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
import {
  physiotherapyConfig,
  chiropractorConfig,
  mentalHealthConfig,
  optometryConfig,
  podiatryConfig,
  dermatologyConfig,
  pediatricConfig,
  orthodontistConfig,
  cardiologyConfig,
  entConfig,
  fertilityConfig,
  painManagementConfig,
  urgentCareConfig,
  radiologyConfig,
  medicalSpaConfig,
  allergistConfig,
  rheumatologyConfig,
  endocrinologyConfig,
  gastroenterologyConfig,
  neurologyConfig
} from './config/healthcare-configs';
import {
  immigrationLawConfig,
  divorceAttorneyConfig,
  personalInjuryLawConfig,
  estatePlanningAttorneyConfig,
  criminalDefenseAttorneyConfig,
  bankruptcyAttorneyConfig,
  employmentLawConfig,
  intellectualPropertyLawConfig,
  realEstateAttorneyConfig,
  taxAttorneyConfig
} from './config/legal-configs';
import {
  hvacServicesConfig,
  electricalContractorConfig,
  pestControlConfig,
  roofingCompanyConfig,
  windowDoorInstallationConfig,
  carpetCleaningConfig,
  homeInspectionConfig,
  securitySystemConfig,
  landscapingConfig,
  houseCleaningConfig
} from './config/home-services-configs';
import {
  massageTherapyConfig,
  acupunctureConfig,
  nutritionConfig,
  nailSalonConfig,
  eyelashStudioConfig,
  microbladingConfig,
  barberShopConfig,
  tanningSalonConfig,
  floatTherapyConfig,
  ivTherapyConfig,
  cryotherapyConfig,
  yogaStudioConfig,
  pilatesStudioConfig
} from './config/wellness-beauty-configs';
import {
  autoBodyShopConfig,
  transmissionConfig,
  mobileMechanicConfig,
  motorcycleRepairConfig,
  autoDetailingConfig,
  tireBrakeConfig,
  glassRepairConfig
} from './config/automotive-configs';
import {
  drivingSchoolConfig,
  musicLessonsConfig,
  danceStudioConfig,
  martialArtsConfig,
  testPrepConfig,
  languageSchoolConfig,
  artSchoolConfig,
  codingBootcampConfig,
  swimmingLessonsConfig
} from './config/education-configs';
import {
  insuranceAgencyConfig,
  hrConsultingConfig,
  taxPreparationConfig,
  mortgageBrokerConfig,
  privateInvestigationConfig,
  notaryPublicConfig,
  businessConsultingConfig
} from './config/professional-configs';
import {
  dogTrainingConfig,
  petBoardingConfig,
  mobileVetConfig,
  petPhotographyConfig
} from './config/pet-configs';
import ErrorBoundary from './components/ErrorBoundary';
import BusinessSelector from './components/BusinessSelector';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

// Available business configurations
const availableBusinesses = {
  // Phase 1: Original 20 businesses
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
  },

  // Phase 2: Healthcare configs (20 businesses)
  'physiotherapy': {
    name: 'Physiotherapy Clinic',
    config: physiotherapyConfig
  },
  'chiropractor': {
    name: 'Chiropractor',
    config: chiropractorConfig
  },
  'mental_health': {
    name: 'Mental Health Counseling',
    config: mentalHealthConfig
  },
  'optometry': {
    name: 'Optometry Clinic',
    config: optometryConfig
  },
  'podiatry': {
    name: 'Podiatry Clinic',
    config: podiatryConfig
  },
  'dermatology': {
    name: 'Dermatology Clinic',
    config: dermatologyConfig
  },
  'pediatric': {
    name: 'Pediatric Clinic',
    config: pediatricConfig
  },
  'orthodontist': {
    name: 'Orthodontist',
    config: orthodontistConfig
  },
  'cardiology': {
    name: 'Cardiology Clinic',
    config: cardiologyConfig
  },
  'ent_specialist': {
    name: 'ENT Specialist',
    config: entConfig
  },
  'fertility_clinic': {
    name: 'Fertility Clinic',
    config: fertilityConfig
  },
  'pain_management': {
    name: 'Pain Management Clinic',
    config: painManagementConfig
  },
  'urgent_care': {
    name: 'Urgent Care Center',
    config: urgentCareConfig
  },
  'radiology': {
    name: 'Radiology Center',
    config: radiologyConfig
  },
  'medical_spa': {
    name: 'Medical Spa',
    config: medicalSpaConfig
  },
  'allergist': {
    name: 'Allergist',
    config: allergistConfig
  },
  'rheumatology': {
    name: 'Rheumatology Clinic',
    config: rheumatologyConfig
  },
  'endocrinology': {
    name: 'Endocrinology Clinic',
    config: endocrinologyConfig
  },
  'gastroenterology': {
    name: 'Gastroenterology Clinic',
    config: gastroenterologyConfig
  },
  'neurology': {
    name: 'Neurology Clinic',
    config: neurologyConfig
  },

  // Phase 2: Legal configs (10 businesses)
  'immigration_law': {
    name: 'Immigration Law',
    config: immigrationLawConfig
  },
  'divorce_attorney': {
    name: 'Divorce Attorney',
    config: divorceAttorneyConfig
  },
  'personal_injury_law': {
    name: 'Personal Injury Law',
    config: personalInjuryLawConfig
  },
  'estate_planning': {
    name: 'Estate Planning Attorney',
    config: estatePlanningAttorneyConfig
  },
  'criminal_defense': {
    name: 'Criminal Defense Attorney',
    config: criminalDefenseAttorneyConfig
  },
  'bankruptcy_attorney': {
    name: 'Bankruptcy Attorney',
    config: bankruptcyAttorneyConfig
  },
  'employment_law': {
    name: 'Employment Law',
    config: employmentLawConfig
  },
  'intellectual_property': {
    name: 'Intellectual Property Law',
    config: intellectualPropertyLawConfig
  },
  'real_estate_attorney': {
    name: 'Real Estate Attorney',
    config: realEstateAttorneyConfig
  },
  'tax_attorney': {
    name: 'Tax Attorney',
    config: taxAttorneyConfig
  },

  // Phase 2: Home Services configs (10 businesses)
  'hvac_services': {
    name: 'HVAC Services',
    config: hvacServicesConfig
  },
  'electrical_contractor': {
    name: 'Electrical Contractor',
    config: electricalContractorConfig
  },
  'pest_control': {
    name: 'Pest Control',
    config: pestControlConfig
  },
  'roofing_company': {
    name: 'Roofing Company',
    config: roofingCompanyConfig
  },
  'window_door_installation': {
    name: 'Window & Door Installation',
    config: windowDoorInstallationConfig
  },
  'carpet_cleaning': {
    name: 'Carpet Cleaning',
    config: carpetCleaningConfig
  },
  'home_inspection': {
    name: 'Home Inspection',
    config: homeInspectionConfig
  },
  'security_system': {
    name: 'Security System Installation',
    config: securitySystemConfig
  },
  'landscaping': {
    name: 'Landscaping Services',
    config: landscapingConfig
  },
  'house_cleaning': {
    name: 'House Cleaning',
    config: houseCleaningConfig
  },

  // Phase 3: Wellness & Beauty configs (13 businesses)
  'massage_therapy': {
    name: 'Massage Therapy',
    config: massageTherapyConfig
  },
  'acupuncture': {
    name: 'Acupuncture',
    config: acupunctureConfig
  },
  'nutrition_counseling': {
    name: 'Nutrition Counseling',
    config: nutritionConfig
  },
  'nail_salon': {
    name: 'Nail Salon',
    config: nailSalonConfig
  },
  'eyelash_extension': {
    name: 'Eyelash Extension Studio',
    config: eyelashStudioConfig
  },
  'microblading': {
    name: 'Microblading Studio',
    config: microbladingConfig
  },
  'barber_shop': {
    name: 'Barber Shop',
    config: barberShopConfig
  },
  'tanning_salon': {
    name: 'Tanning Salon',
    config: tanningSalonConfig
  },
  'float_therapy': {
    name: 'Float Therapy',
    config: floatTherapyConfig
  },
  'iv_therapy': {
    name: 'IV Therapy',
    config: ivTherapyConfig
  },
  'cryotherapy': {
    name: 'Cryotherapy',
    config: cryotherapyConfig
  },
  'yoga_studio': {
    name: 'Yoga Studio',
    config: yogaStudioConfig
  },
  'pilates_studio': {
    name: 'Pilates Studio',
    config: pilatesStudioConfig
  },

  // Phase 3: Automotive configs (7 businesses)
  'auto_body_shop': {
    name: 'Auto Body Shop',
    config: autoBodyShopConfig
  },
  'transmission_repair': {
    name: 'Transmission Repair',
    config: transmissionConfig
  },
  'mobile_mechanic': {
    name: 'Mobile Mechanic',
    config: mobileMechanicConfig
  },
  'motorcycle_repair': {
    name: 'Motorcycle Repair',
    config: motorcycleRepairConfig
  },
  'auto_detailing': {
    name: 'Auto Detailing',
    config: autoDetailingConfig
  },
  'tire_brake_service': {
    name: 'Tire & Brake Service',
    config: tireBrakeConfig
  },
  'auto_glass_repair': {
    name: 'Auto Glass Repair',
    config: glassRepairConfig
  },

  // Phase 3: Education configs (9 businesses)
  'driving_school': {
    name: 'Driving School',
    config: drivingSchoolConfig
  },
  'music_lessons': {
    name: 'Music Lessons',
    config: musicLessonsConfig
  },
  'dance_studio': {
    name: 'Dance Studio',
    config: danceStudioConfig
  },
  'martial_arts': {
    name: 'Martial Arts Dojo',
    config: martialArtsConfig
  },
  'test_prep': {
    name: 'SAT/ACT Test Prep',
    config: testPrepConfig
  },
  'language_school': {
    name: 'Language School',
    config: languageSchoolConfig
  },
  'art_school': {
    name: 'Art School',
    config: artSchoolConfig
  },
  'coding_bootcamp': {
    name: 'Coding Bootcamp',
    config: codingBootcampConfig
  },
  'swimming_lessons': {
    name: 'Swimming Lessons',
    config: swimmingLessonsConfig
  },

  // Phase 3: Professional Services configs (7 businesses)
  'insurance_agency': {
    name: 'Insurance Agency',
    config: insuranceAgencyConfig
  },
  'hr_consulting': {
    name: 'HR Consulting',
    config: hrConsultingConfig
  },
  'tax_preparation': {
    name: 'Tax Preparation',
    config: taxPreparationConfig
  },
  'mortgage_broker': {
    name: 'Mortgage Broker',
    config: mortgageBrokerConfig
  },
  'private_investigation': {
    name: 'Private Investigation',
    config: privateInvestigationConfig
  },
  'notary_public': {
    name: 'Notary Public',
    config: notaryPublicConfig
  },
  'business_consulting': {
    name: 'Business Consulting',
    config: businessConsultingConfig
  },

  // Phase 3: Pet Services configs (4 businesses)
  'dog_training': {
    name: 'Dog Training',
    config: dogTrainingConfig
  },
  'pet_boarding': {
    name: 'Pet Boarding',
    config: petBoardingConfig
  },
  'mobile_vet': {
    name: 'Mobile Veterinary',
    config: mobileVetConfig
  },
  'pet_photography': {
    name: 'Pet Photography',
    config: petPhotographyConfig
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
    <ErrorBoundary>
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
                  aria-label="Switch to different demo"
                  className="bg-blue-600 text-white shadow-lg rounded-lg px-4 py-2 border-2 border-blue-700 flex items-center gap-2 hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-medium min-h-[44px] focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <span className="text-sm">Switch Demo</span>
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
    </ErrorBoundary>
  );
}

export default App;