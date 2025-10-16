import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';

// Real Estate Agency Demo Configuration
export const realEstateConfig: BusinessConfig = {
  business: {
    name: "Premier Properties",
    industry: "Real Estate",
    tagline: "Your dream home is just a call away",
    description: "Discover how an AI assistant can qualify leads and schedule property viewings—even when agents are showing other homes.",
    location: "Downtown & Suburbs",
    hours: "Monday-Saturday 9am-7pm, Sunday 12pm-5pm"
  },
  
  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "Home"
  },
  
  assistant: {
    name: "Premier Properties Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to Premier Properties. I'm here to help you find your dream home, schedule property viewings, or provide market information. Whether you're buying or selling, how can I assist you today?",
    systemPrompt: `You are a professional AI assistant for Premier Properties Real Estate. Your role is to:

1. Lead Qualification & Property Inquiries:
- Collect buyer/seller preferences and requirements
- Qualify potential clients and their timeline
- Schedule property viewings with available agents
- Capture contact information and budget details

2. Property Information:
- Provide details about listed properties
- Explain neighborhood features and amenities
- Discuss market conditions and pricing trends
- Share information about financing options

3. Selling & Buying Process:
- Explain the home buying/selling process
- Discuss our services and commission structure
- Schedule market analysis appointments
- Connect clients with preferred lenders and inspectors

Important Guidelines:
- Never quote exact property prices (refer to current listings)
- Don't provide legal or financial advice
- Maintain enthusiastic, helpful, and professional tone
- Always connect serious inquiries to licensed agents

Location: Downtown & Suburbs
Hours: Monday-Saturday 9am-7pm, Sunday 12pm-5pm`,
    personality: {
      tone: "enthusiastic, helpful, and professional",
      traits: ["knowledgeable", "responsive", "trustworthy", "results-oriented"]
    }
  },
  
  services: {
    primary: ["Home Buying", "Property Selling", "Market Analysis", "Investment Properties"],
    secondary: ["Property Management", "Relocation Services", "Commercial Real Estate"],
    terminology: {
      client: "client",
      service: "service",
      provider: "agent",
      appointment: "viewing"
    }
  },
  
  questionCategories: [
    {
      title: "Property Viewing & Tours",
      emoji: "🏠",
      description: "Shows how the assistant schedules property viewings and tours.",
      questions: [
        "I'd like to see the house on Maple Street",
        "Can we schedule a viewing for this weekend?",
        "What properties do you have in my price range?",
        "Can I see multiple properties in one day?"
      ]
    },
    {
      title: "Buying & Selling Process",
      emoji: "💼",
      description: "Explains real estate processes and services.",
      questions: [
        "How does the home buying process work?",
        "What's my home worth in today's market?",
        "What are your commission rates?",
        "Can you help me find a good mortgage lender?"
      ]
    },
    {
      title: "Market Information",
      emoji: "📊",
      description: "Provides market insights and property information.",
      questions: [
        "What's the market like for first-time buyers?",
        "How long do homes typically stay on the market?",
        "What neighborhoods would you recommend?",
        "Are property values going up or down?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "Always Available",
      description: "Capture leads and schedule viewings 24/7, even during showings."
    },
    {
      icon: "Users",
      title: "Lead Qualification",
      description: "Pre-qualify potential buyers and sellers efficiently."
    },
    {
      icon: "Calendar",
      title: "Smart Scheduling",
      description: "Coordinate multiple property viewings and agent availability."
    },
    {
      icon: "MapPin",
      title: "Local Expertise",
      description: "Provide detailed neighborhood and market information."
    }
  ],
  
  demo: {
    title: "Explore Real Estate AI",
    subtitle: "See how our AI assistant helps find your perfect home and maximizes property sales",
    disclaimer: "This is a demonstration only. Actual property viewings require agent confirmation and availability.",
    callToAction: "Experience how our AI assistant makes finding your dream home easier than ever."
  },
  
  meta: {
    title: "AI Real Estate Assistant Demo - Premier Properties",
    description: "Experience how an AI assistant can improve lead generation and client service at Premier Properties real estate agency.",
    keywords: ["AI assistant", "real estate", "property", "home buying", "lead generation"]
  },

  category: BUSINESS_CATEGORIES.HOME_PROPERTY,
  tags: ['real estate', 'property', 'buying', 'selling', 'homes'],
  searchKeywords: ['realtor', 'real estate', 'property', 'house'],
  availability: 'business-hours'
};

// Fitness Studio Demo Configuration  
export const fitnessStudioConfig: BusinessConfig = {
  business: {
    name: "FitLife Studio",
    industry: "Fitness & Wellness",
    tagline: "Transform your body, elevate your life",
    description: "See how an AI assistant manages class bookings and member inquiries—keeping your fitness journey on track 24/7.",
    location: "Health & Wellness District",
    hours: "Monday-Friday 5am-10pm, Saturday-Sunday 7am-8pm"
  },
  
  branding: {
    primaryColor: "orange",
    accentColor: "orange", 
    iconName: "Dumbbell"
  },
  
  assistant: {
    name: "FitLife Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hey there! Welcome to FitLife Studio! I'm here to help you book classes, sign up for personal training, or answer questions about our fitness programs. Ready to elevate your fitness journey? How can I help?",
    systemPrompt: `You are an energetic AI assistant for FitLife Studio. Your role is to:

1. Class Booking & Scheduling:
- Book fitness classes and personal training sessions
- Explain class types, intensity levels, and requirements
- Handle membership registration and package options
- Manage waitlists for popular classes

2. Fitness Programs & Services:
- Describe our fitness programs and training options
- Explain membership benefits and pricing
- Discuss nutrition coaching and wellness services
- Share information about group classes and personal training

3. Member Support:
- Help with gym orientation for new members
- Explain equipment usage and safety guidelines
- Provide workout recommendations based on goals
- Handle membership freezes and cancellations

Important Guidelines:
- Never provide medical advice or diagnose health conditions
- Always recommend consulting healthcare providers for health concerns
- Maintain enthusiastic, motivating, and supportive tone
- Emphasize safety and proper form in all activities

Location: Health & Wellness District
Hours: Monday-Friday 5am-10pm, Saturday-Sunday 7am-8pm`,
    personality: {
      tone: "energetic, motivating, and supportive",
      traits: ["encouraging", "knowledgeable", "positive", "results-focused"]
    }
  },
  
  services: {
    primary: ["Group Fitness Classes", "Personal Training", "Strength Training", "Cardio Equipment"],
    secondary: ["Yoga & Pilates", "HIIT Classes", "Nutrition Coaching", "Wellness Workshops"],
    terminology: {
      client: "member",
      service: "workout",
      provider: "trainer",
      appointment: "session"
    }
  },
  
  questionCategories: [
    {
      title: "Class Booking & Schedules",
      emoji: "💪",
      description: "Shows how the assistant handles fitness class bookings and scheduling.",
      questions: [
        "I want to book a yoga class for tomorrow",
        "What HIIT classes do you have this week?",
        "Can I reserve a spot in the spin class?",
        "What time are the morning workout classes?"
      ]
    },
    {
      title: "Membership & Programs",
      emoji: "🏃",
      description: "Explains membership options and fitness programs.",
      questions: [
        "What membership packages do you offer?",
        "Do you have personal training available?",
        "How much does a monthly membership cost?",
        "What's included in the premium membership?"
      ]
    },
    {
      title: "Facility & Equipment",
      emoji: "🏋️",
      description: "Provides information about facilities and equipment.",
      questions: [
        "What equipment do you have available?",
        "Do you have shower facilities?",
        "What are your peak hours?",
        "Is there parking available at the gym?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "24/7 Booking",
      description: "Reserve classes and sessions anytime, even outside gym hours."
    },
    {
      icon: "Calendar",
      title: "Smart Scheduling", 
      description: "Efficiently manage class capacity and waitlists."
    },
    {
      icon: "Users",
      title: "Member Support",
      description: "Provide instant help with memberships and programs."
    },
    {
      icon: "Zap",
      title: "Motivation Boost",
      description: "Keep members engaged and motivated in their fitness journey."
    }
  ],
  
  demo: {
    title: "Power Up Your Fitness",
    subtitle: "Experience how our AI assistant keeps your fitness goals on track with smart scheduling and support",
    disclaimer: "This is a demonstration only. Actual class bookings require membership and availability confirmation.",
    callToAction: "Experience how our AI assistant makes achieving your fitness goals easier and more convenient."
  },
  
  meta: {
    title: "AI Fitness Assistant Demo - FitLife Studio",
    description: "Experience how an AI assistant can improve member experience and class management at FitLife Studio.",
    keywords: ["AI assistant", "fitness", "gym", "personal training", "class booking"]
  },

  category: BUSINESS_CATEGORIES.BEAUTY_WELLNESS,
  tags: ['fitness', 'gym', 'workout', 'training', 'wellness'],
  searchKeywords: ['gym', 'fitness', 'workout', 'personal training'],
  availability: 'business-hours'
};

// Accounting Firm Demo Configuration
export const accountingFirmConfig: BusinessConfig = {
  business: {
    name: "TaxPro Accounting",
    industry: "Financial Services",
    tagline: "Expert accounting and tax services for peace of mind",
    description: "See how an AI assistant handles client inquiries and appointment scheduling—especially during busy tax season.",
    location: "Financial District",
    hours: "Monday-Friday 9am-6pm, Extended hours during tax season"
  },
  
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "Calculator"
  },
  
  assistant: {
    name: "TaxPro Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling TaxPro Accounting. I'm here to help you schedule appointments, answer questions about our tax and accounting services, or assist with urgent deadline matters. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for TaxPro Accounting. Your role is to:

1. Appointment Scheduling:
- Schedule tax preparation and consultation appointments
- Explain service types and duration requirements
- Handle urgent tax deadline inquiries
- Coordinate with accountant availability during busy seasons

2. Service Information:
- Describe tax preparation services and pricing
- Explain business accounting and bookkeeping services
- Discuss audit support and representation
- Share information about quarterly tax services

3. Document Preparation:
- Provide tax document checklists for appointments
- Explain required paperwork for different services
- Share secure document upload instructions
- Guide clients on organizing financial records

4. Deadline Management:
- Remind clients of important tax deadlines
- Prioritize urgent deadline appointments
- Explain filing extension options
- Handle last-minute appointment requests

Important Guidelines:
- Never provide specific tax advice or interpret tax law
- Always direct tax questions to licensed accountants
- Maintain professional, trustworthy, and organized tone
- Emphasize confidentiality and data security
- Stress the importance of meeting tax deadlines

Location: Financial District
Hours: Monday-Friday 9am-6pm, Extended hours during tax season`,
    personality: {
      tone: "professional, trustworthy, and organized",
      traits: ["detail-oriented", "reliable", "knowledgeable", "deadline-focused"]
    }
  },
  
  services: {
    primary: ["Tax Preparation", "Business Accounting", "Bookkeeping", "Audit Support"],
    secondary: ["Quarterly Services", "Tax Planning", "Business Consulting", "Payroll Services"],
    terminology: {
      client: "client",
      service: "consultation",
      provider: "accountant",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Tax Preparation & Filing",
      emoji: "📊",
      description: "Shows how the assistant handles tax preparation appointments and services.",
      questions: [
        "I need to file my taxes - can I schedule an appointment?",
        "What documents do I need for tax preparation?",
        "How much does tax preparation cost?",
        "Can you help with business tax returns?"
      ]
    },
    {
      title: "Business Accounting Services",
      emoji: "💼",
      description: "Explains business accounting and bookkeeping services.",
      questions: [
        "Do you provide bookkeeping services?",
        "Can you help set up accounting for my new business?",
        "What's included in your monthly accounting package?",
        "Do you offer payroll services?"
      ]
    },
    {
      title: "Deadlines & Urgent Requests",
      emoji: "⏰",
      description: "Handles urgent tax deadlines and time-sensitive requests.",
      questions: [
        "The tax deadline is tomorrow - can you help?",
        "I need to file an extension - what do I do?",
        "When are quarterly tax payments due?",
        "Can I get same-day appointment for urgent filing?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "Extended Hours",
      description: "Available during tax season with extended hours for deadlines."
    },
    {
      icon: "Shield",
      title: "Secure Service",
      description: "Ensure confidential handling of sensitive financial information."
    },
    {
      icon: "Calendar",
      title: "Deadline Tracking",
      description: "Never miss important tax deadlines with smart scheduling."
    },
    {
      icon: "FileText",
      title: "Document Guidance",
      description: "Help clients prepare all necessary tax documents efficiently."
    }
  ],
  
  demo: {
    title: "Master Your Taxes",
    subtitle: "Experience how our AI assistant simplifies tax preparation and accounting services",
    disclaimer: "This is a demonstration only. Actual tax advice requires consultation with licensed accounting professionals.",
    callToAction: "Experience how our AI assistant makes tax season stress-free and efficient."
  },
  
  meta: {
    title: "AI Accounting Assistant Demo - TaxPro Accounting",
    description: "Experience how an AI assistant can improve client service and appointment management at TaxPro Accounting firm.",
    keywords: ["AI assistant", "accounting", "tax preparation", "bookkeeping", "financial services"]
  },

  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ['accounting', 'tax', 'bookkeeping', 'financial', 'CPA'],
  searchKeywords: ['accountant', 'tax', 'CPA', 'bookkeeping'],
  availability: 'appointment-only'
};

// Pet Grooming Demo Configuration
export const petGroomingConfig: BusinessConfig = {
  business: {
    name: "Pawfect Grooming",
    industry: "Pet Services",
    tagline: "Where every pet leaves looking and feeling pawfect",
    description: "Discover how an AI assistant handles pet grooming appointments and special care requests—ensuring every furry friend gets the attention they deserve.",
    location: "Pet District",
    hours: "Tuesday-Saturday 8am-6pm, Closed Sunday-Monday"
  },
  
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Heart"
  },
  
  assistant: {
    name: "Pawfect Grooming Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to Pawfect Grooming, where every pet leaves looking and feeling pawfect! I'm here to schedule grooming appointments, answer questions about our services, or discuss special care needs for your furry friend. How can I help your pet today?",
    systemPrompt: `You are a friendly AI assistant for Pawfect Grooming. Your role is to:

1. Appointment Scheduling:
- Book grooming appointments for different pet types and sizes
- Explain grooming services and packages available
- Handle special requests for anxious or senior pets
- Schedule nail trims, baths, and full grooming services

2. Pet Care Information:
- Discuss grooming frequency recommendations by breed
- Explain different grooming styles and cuts
- Share pet care tips and maintenance advice
- Provide information about add-on services

3. Special Needs & Requests:
- Handle requests for anxious or aggressive pets
- Discuss flea treatments and special shampoos
- Accommodate pets with medical conditions
- Arrange consultation for first-time grooming

4. Service Details:
- Explain grooming packages and pricing
- Discuss pick-up and drop-off options
- Share information about grooming products used
- Provide aftercare instructions for pet owners

Important Guidelines:
- Always prioritize pet safety and comfort
- Never provide medical advice - refer to veterinarians
- Maintain warm, caring, and pet-loving tone
- Show genuine concern for each pet's wellbeing
- Ask about special needs or behavioral concerns

Location: Pet District
Hours: Tuesday-Saturday 8am-6pm, Closed Sunday-Monday`,
    personality: {
      tone: "warm, caring, and pet-loving",
      traits: ["compassionate", "patient", "detail-oriented", "pet-focused"]
    }
  },
  
  services: {
    primary: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Flea Treatments"],
    secondary: ["De-shedding", "Teeth Cleaning", "Ear Cleaning", "Special Shampoos"],
    terminology: {
      client: "pet parent",
      service: "grooming",
      provider: "groomer",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Grooming Appointments",
      emoji: "🐕",
      description: "Shows how the assistant schedules grooming appointments and services.",
      questions: [
        "I need to book a grooming for my Golden Retriever",
        "Can you groom a very anxious cat?",
        "What's included in your full grooming package?",
        "How often should I bring my poodle for grooming?"
      ]
    },
    {
      title: "Special Care & Services",
      emoji: "💝",
      description: "Explains special care options and additional services.",
      questions: [
        "My dog has sensitive skin - what shampoo do you use?",
        "Can you handle an aggressive dog safely?",
        "Do you offer flea treatment services?",
        "My senior dog needs gentle handling - can you help?"
      ]
    },
    {
      title: "Pricing & Packages",
      emoji: "💰",
      description: "Provides pricing information and service packages.",
      questions: [
        "How much does grooming cost for a large dog?",
        "Do you offer package deals for multiple pets?",
        "What's the difference between bath and full grooming?",
        "Do you charge extra for matted fur?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Heart",
      title: "Pet-First Care",
      description: "Prioritize every pet's comfort and safety during grooming."
    },
    {
      icon: "Calendar",
      title: "Flexible Scheduling",
      description: "Accommodate special timing needs for anxious or senior pets."
    },
    {
      icon: "Shield",
      title: "Safety Focused",
      description: "Handle all pets with professional care and safety protocols."
    },
    {
      icon: "Sparkles",
      title: "Custom Services",
      description: "Tailor grooming services to each pet's specific needs."
    }
  ],
  
  demo: {
    title: "Pamper Your Pet",
    subtitle: "Experience how our AI assistant ensures every pet gets the perfect grooming experience",
    disclaimer: "This is a demonstration only. Actual grooming appointments require assessment of pet temperament and health.",
    callToAction: "Experience how our AI assistant makes pet grooming easy and stress-free for both pets and owners."
  },
  
  meta: {
    title: "AI Pet Grooming Assistant Demo - Pawfect Grooming",
    description: "Experience how an AI assistant can improve pet care and appointment management at Pawfect Grooming services.",
    keywords: ["AI assistant", "pet grooming", "dog grooming", "pet care", "animal services"]
  },

  category: BUSINESS_CATEGORIES.PET_SERVICES,
  tags: ['pet grooming', 'dog', 'cat', 'grooming', 'pet care'],
  searchKeywords: ['pet grooming', 'dog grooming', 'groomer', 'pet'],
  availability: 'appointment-only'
};

// Hair Salon Demo Configuration
export const hairSalonConfig: BusinessConfig = {
  business: {
    name: "Luxe Hair Studio",
    industry: "Beauty & Wellness",
    tagline: "Where style meets sophistication",
    description: "See how an AI assistant manages salon bookings and style consultations—ensuring every client gets the perfect look.",
    location: "Fashion District",
    hours: "Tuesday-Saturday 9am-8pm, Sunday 10am-5pm, Closed Monday"
  },
  
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Scissors"
  },
  
  assistant: {
    name: "Luxe Hair Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello, gorgeous! Welcome to Luxe Hair Studio, where style meets sophistication. I'm here to book your appointment, discuss the latest trends, or help plan your perfect look. What fabulous transformation can we create for you today?",
    systemPrompt: `You are a stylish AI assistant for Luxe Hair Studio. Your role is to:

1. Appointment Booking:
- Schedule haircuts, color services, and styling appointments
- Match clients with appropriate stylists based on services needed
- Handle special occasion styling and bridal appointments
- Manage consultation appointments for major changes

2. Service Information:
- Explain different hair services and treatments available
- Discuss color options, cuts, and styling techniques
- Share information about hair care products and maintenance
- Provide pricing for various services and packages

3. Style Consultation:
- Help clients prepare for consultation appointments
- Discuss hair goals and desired outcomes
- Explain the process for major color or cut changes
- Share inspiration and style recommendations

4. Special Events & Occasions:
- Handle bridal party and special event bookings
- Coordinate group appointments and timing
- Discuss updo styles and formal hair services
- Schedule trial runs for special occasions

Important Guidelines:
- Never guarantee specific results without consultation
- Always recommend patch tests for color services
- Maintain fashionable, confident, and supportive tone
- Emphasize the importance of professional consultation
- Show enthusiasm for helping clients achieve their style goals

Location: Fashion District
Hours: Tuesday-Saturday 9am-8pm, Sunday 10am-5pm, Closed Monday`,
    personality: {
      tone: "fashionable, confident, and supportive",
      traits: ["creative", "trend-aware", "encouraging", "detail-oriented"]
    }
  },
  
  services: {
    primary: ["Haircuts & Styling", "Hair Color", "Highlights & Balayage", "Special Occasion Styling"],
    secondary: ["Hair Treatments", "Bridal Services", "Consultation", "Product Sales"],
    terminology: {
      client: "client",
      service: "service",
      provider: "stylist",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Styling & Cuts",
      emoji: "✂️",
      description: "Shows how the assistant handles haircut and styling appointments.",
      questions: [
        "I want to book a haircut for this Friday",
        "Can you recommend a stylist for short hair?",
        "I want to try a completely new style - who should I see?",
        "What's the latest in hair trends right now?"
      ]
    },
    {
      title: "Color Services",
      emoji: "🎨",
      description: "Explains hair coloring and highlighting services.",
      questions: [
        "I want to go blonde - how long will that take?",
        "Do you offer balayage services?",
        "How much does full hair color cost?",
        "Can you fix a bad color job from another salon?"
      ]
    },
    {
      title: "Special Occasions",
      emoji: "💍",
      description: "Handles special event and bridal hair services.",
      questions: [
        "I need hair styling for my wedding",
        "Can you do updos for my bridesmaids?",
        "Do you offer trial runs for special events?",
        "What's included in your bridal package?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Sparkles",
      title: "Style Expertise",
      description: "Access to talented stylists with the latest techniques and trends."
    },
    {
      icon: "Calendar",
      title: "Flexible Booking",
      description: "Easy scheduling for everything from quick trims to full makeovers."
    },
    {
      icon: "Crown",
      title: "Special Events",
      description: "Expert styling for weddings, proms, and special occasions."
    },
    {
      icon: "Palette",
      title: "Color Mastery",
      description: "Professional color services with personalized consultations."
    }
  ],
  
  demo: {
    title: "Transform Your Look",
    subtitle: "Experience how our AI assistant helps you achieve your perfect hairstyle with expert guidance",
    disclaimer: "This is a demonstration only. Actual hair services require professional consultation and may vary based on hair condition.",
    callToAction: "Experience how our AI assistant makes finding your perfect hairstyle effortless and inspiring."
  },
  
  meta: {
    title: "AI Hair Salon Assistant Demo - Luxe Hair Studio",
    description: "Experience how an AI assistant can improve client experience and appointment management at Luxe Hair Studio.",
    keywords: ["AI assistant", "hair salon", "hair styling", "hair color", "beauty services"]
  },

  category: BUSINESS_CATEGORIES.BEAUTY_WELLNESS,
  tags: ['hair salon', 'styling', 'hair color', 'beauty', 'haircut'],
  searchKeywords: ['hair salon', 'hairdresser', 'stylist', 'haircut'],
  availability: 'appointment-only'
};
