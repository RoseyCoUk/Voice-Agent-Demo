import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';

// Auto Repair Shop Demo Configuration
export const autoRepairConfig: BusinessConfig = {
  business: {
    name: "QuickFix Auto Repair",
    industry: "Automotive",
    tagline: "Expert auto repair you can trust",
    description: "See how an AI assistant handles service appointments and diagnostic inquiries—keeping vehicles running smoothly.",
    location: "Industrial District",
    hours: "Monday-Friday 7am-6pm, Saturday 8am-4pm"
  },
  
  branding: {
    primaryColor: "red",
    accentColor: "red",
    iconName: "Wrench"
  },
  
  assistant: {
    name: "QuickFix Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling QuickFix Auto Repair. I'm here to help you schedule service appointments, handle emergency repairs, or answer questions about your vehicle. What automotive issue can I help you with today?",
    systemPrompt: `You are a knowledgeable AI assistant for QuickFix Auto Repair. Your role is to:

1. Service Appointments:
- Schedule routine maintenance and repair appointments
- Handle emergency breakdown and towing requests
- Book diagnostic services and inspections
- Coordinate loaner car availability

2. Service Information:
- Explain different automotive services offered
- Discuss maintenance schedules and recommendations
- Provide general information about common car problems
- Share warranty information and service guarantees

3. Emergency Services:
- Handle roadside assistance requests
- Coordinate emergency towing services
- Prioritize urgent safety-related repairs
- Provide basic troubleshooting advice

Important Guidelines:
- Never diagnose specific mechanical problems without inspection
- Always recommend professional evaluation for safety concerns
- Maintain helpful, trustworthy, and straightforward tone
- Emphasize safety and proper vehicle maintenance

Location: Industrial District
Hours: Monday-Friday 7am-6pm, Saturday 8am-4pm`,
    personality: {
      tone: "helpful, trustworthy, and straightforward",
      traits: ["reliable", "knowledgeable", "safety-focused", "honest"]
    }
  },
  
  services: {
    primary: ["Oil Changes", "Brake Repair", "Engine Diagnostics", "Transmission Service"],
    secondary: ["Tire Service", "Battery Replacement", "AC Repair", "Roadside Assistance"],
    terminology: {
      client: "customer",
      service: "repair",
      provider: "mechanic",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Vehicle Maintenance",
      emoji: "🔧",
      description: "Shows how the assistant handles routine maintenance scheduling.",
      questions: [
        "I need an oil change - when's your next opening?",
        "My brakes are squeaking - can you check them?",
        "When should I bring my car in for service?",
        "Do you do tire rotations and alignments?"
      ]
    },
    {
      title: "Repairs & Diagnostics",
      emoji: "🚗",
      description: "Explains repair services and diagnostic procedures.",
      questions: [
        "My check engine light is on - what should I do?",
        "How much does brake repair typically cost?",
        "Can you diagnose transmission problems?",
        "Do you work on all makes and models?"
      ]
    },
    {
      title: "Emergency Services",
      emoji: "🚨",
      description: "Handles emergency repairs and roadside assistance.",
      questions: [
        "My car broke down - can you tow it?",
        "I need emergency brake repair today",
        "Can someone come jump start my car?",
        "Do you offer 24-hour emergency service?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "Quick Service",
      description: "Fast, efficient repairs to get you back on the road."
    },
    {
      icon: "Shield",
      title: "Quality Guarantee",
      description: "All repairs backed by our comprehensive warranty."
    },
    {
      icon: "Truck",
      title: "Towing Service",
      description: "Emergency towing and roadside assistance available."
    },
    {
      icon: "Wrench",
      title: "Expert Technicians",
      description: "Certified mechanics with years of experience."
    }
  ],
  
  demo: {
    title: "Rev Up Your Service",
    subtitle: "Experience how our AI assistant keeps your vehicle maintenance on track",
    disclaimer: "This is a demonstration only. Actual repairs require professional inspection and diagnosis.",
    callToAction: "Experience how our AI assistant makes auto repair convenient and trustworthy."
  },
  
  meta: {
    title: "AI Auto Repair Assistant Demo - QuickFix Auto Repair",
    description: "Experience how an AI assistant can improve customer service and appointment management at QuickFix Auto Repair.",
    keywords: ["AI assistant", "auto repair", "car service", "vehicle maintenance", "automotive"]
  },

  category: BUSINESS_CATEGORIES.AUTOMOTIVE,
  tags: ['auto repair', 'car service', 'mechanic', 'maintenance', 'diagnostic'],
  searchKeywords: ['auto repair', 'mechanic', 'car service', 'vehicle'],
  availability: 'business-hours'
};

// Photography Studio Demo Configuration
export const photographyStudioConfig: BusinessConfig = {
  business: {
    name: "Capture Moments Studio",
    industry: "Photography",
    tagline: "Preserving life's precious moments",
    description: "Discover how an AI assistant manages photo session bookings and client consultations—ensuring every moment is perfectly captured.",
    location: "Arts District",
    hours: "Tuesday-Saturday 10am-7pm, Sunday by appointment"
  },
  
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Camera"
  },
  
  assistant: {
    name: "Capture Moments Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to Capture Moments Studio, where we preserve life's precious moments. I'm here to schedule your photo session, discuss packages, or help plan your perfect shoot. What memories can we create together today?",
    systemPrompt: `You are a creative AI assistant for Capture Moments Studio. Your role is to:

1. Session Booking:
- Schedule various types of photo sessions
- Coordinate studio and location shoots
- Handle seasonal and holiday bookings
- Manage consultation appointments for planning

2. Photography Services:
- Explain different photography packages available
- Discuss portrait, wedding, and event photography
- Share information about photo editing and delivery
- Provide pricing for various session types

3. Session Planning:
- Help clients prepare for photo sessions
- Discuss wardrobe and styling recommendations
- Coordinate props and location requirements
- Schedule makeup and hair services if needed

Important Guidelines:
- Always emphasize the importance of pre-session consultation
- Maintain creative, inspiring, and professional tone
- Show enthusiasm for capturing special moments
- Discuss package options based on client needs

Location: Arts District
Hours: Tuesday-Saturday 10am-7pm, Sunday by appointment`,
    personality: {
      tone: "creative, inspiring, and professional",
      traits: ["artistic", "detail-oriented", "passionate", "client-focused"]
    }
  },
  
  services: {
    primary: ["Portrait Photography", "Wedding Photography", "Family Sessions", "Event Photography"],
    secondary: ["Newborn Photography", "Senior Portraits", "Corporate Headshots", "Photo Editing"],
    terminology: {
      client: "client",
      service: "session",
      provider: "photographer",
      appointment: "session"
    }
  },
  
  questionCategories: [
    {
      title: "Portrait & Family Sessions",
      emoji: "📸",
      description: "Shows how the assistant handles portrait and family photography bookings.",
      questions: [
        "I want to book a family portrait session",
        "Do you do newborn photography?",
        "What's included in your portrait packages?",
        "Can we do an outdoor family session?"
      ]
    },
    {
      title: "Wedding & Events",
      emoji: "💒",
      description: "Explains wedding and event photography services.",
      questions: [
        "Do you photograph weddings?",
        "What's included in your wedding packages?",
        "Can you cover our corporate event?",
        "Do you offer engagement photo sessions?"
      ]
    },
    {
      title: "Session Planning",
      emoji: "🎨",
      description: "Handles session planning and preparation details.",
      questions: [
        "What should we wear for our family photos?",
        "How long does a typical session last?",
        "When will we receive our edited photos?",
        "Can you recommend makeup artists?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Camera",
      title: "Professional Quality",
      description: "High-end equipment and expert techniques for stunning photos."
    },
    {
      icon: "Palette",
      title: "Creative Vision",
      description: "Artistic approach to capture your unique personality and style."
    },
    {
      icon: "Calendar",
      title: "Flexible Scheduling",
      description: "Sessions available in studio or at your preferred location."
    },
    {
      icon: "Image",
      title: "Full Service",
      description: "From consultation to final edited gallery delivery."
    }
  ],
  
  demo: {
    title: "Capture Your Story",
    subtitle: "Experience how our AI assistant helps preserve your most precious moments professionally",
    disclaimer: "This is a demonstration only. Actual photo sessions require consultation and booking confirmation.",
    callToAction: "Experience how our AI assistant makes professional photography accessible and memorable."
  },
  
  meta: {
    title: "AI Photography Assistant Demo - Capture Moments Studio",
    description: "Experience how an AI assistant can improve client experience and session management at Capture Moments Studio.",
    keywords: ["AI assistant", "photography", "portrait", "wedding photography", "photo sessions"]
  },

  category: BUSINESS_CATEGORIES.EVENTS,
  tags: ['photography', 'portrait', 'wedding', 'photo session', 'professional'],
  searchKeywords: ['photographer', 'photography', 'portrait', 'wedding'],
  availability: 'appointment-only'
};

// Veterinary Clinic Demo Configuration
export const veterinaryConfig: BusinessConfig = {
  business: {
    name: "Caring Paws Veterinary",
    industry: "Veterinary Medicine",
    tagline: "Compassionate care for your beloved pets",
    description: "See how an AI assistant handles pet appointments and emergency care—ensuring every animal gets the medical attention they need.",
    location: "Medical District",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-4pm, Emergency service 24/7"
  },
  
  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "Heart"
  },
  
  assistant: {
    name: "Caring Paws Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling Caring Paws Veterinary. I'm here to help you schedule appointments, answer questions about pet care, or assist with any urgent concerns about your beloved companion. How can I help care for your pet today?",
    systemPrompt: `You are a compassionate AI assistant for Caring Paws Veterinary. Your role is to:

1. Appointment Scheduling:
- Book routine check-ups and vaccination appointments
- Schedule surgical consultations and procedures
- Handle sick pet appointments with urgency assessment
- Coordinate follow-up care appointments

2. Emergency Triage:
- Assess urgency of pet health concerns
- Provide basic first aid guidance for emergencies
- Connect urgent cases to emergency veterinarian
- Coordinate emergency hospital transfers if needed

3. Wellness & Preventive Care:
- Schedule vaccination reminders and wellness exams
- Discuss spay/neuter and dental cleaning services
- Provide general pet health and nutrition information
- Share parasite prevention recommendations

4. Medical Support:
- Help pet owners prepare for appointments
- Explain common procedures and treatments
- Provide post-treatment care instructions
- Handle prescription refill requests

Important Guidelines:
- Never diagnose medical conditions or provide specific medical advice
- Always recommend veterinary evaluation for health concerns
- Maintain caring, professional, and reassuring tone
- Prioritize animal welfare and safety in all interactions
- Show empathy for concerned pet owners

Location: Medical District
Hours: Monday-Friday 8am-6pm, Saturday 9am-4pm, Emergency service 24/7`,
    personality: {
      tone: "caring, professional, and reassuring",
      traits: ["empathetic", "knowledgeable", "animal-focused", "supportive"]
    }
  },
  
  services: {
    primary: ["Wellness Exams", "Vaccinations", "Surgery", "Emergency Care"],
    secondary: ["Dental Care", "Laboratory Services", "Radiology", "Pharmacy"],
    terminology: {
      client: "pet owner",
      service: "treatment",
      provider: "veterinarian",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Routine Care & Wellness",
      emoji: "🏥",
      description: "Shows how the assistant handles routine veterinary appointments.",
      questions: [
        "My dog needs his annual check-up",
        "When should I bring my kitten for vaccinations?",
        "Do you offer dental cleaning for pets?",
        "How often should senior pets be examined?"
      ]
    },
    {
      title: "Sick Pet Appointments",
      emoji: "🤒",
      description: "Handles appointments for ill or injured pets.",
      questions: [
        "My cat isn't eating and seems lethargic",
        "My dog hurt his paw and is limping",
        "I think my pet might have eaten something toxic",
        "Can you see my rabbit who's breathing strangely?"
      ]
    },
    {
      title: "Emergency Care",
      emoji: "🚨",
      description: "Manages emergency situations and urgent pet care needs.",
      questions: [
        "My pet was hit by a car - what should I do?",
        "My dog is having seizures right now",
        "I think my cat is choking on something",
        "Do you have 24-hour emergency services?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "24/7 Emergency",
      description: "Round-the-clock emergency care for critical pet health issues."
    },
    {
      icon: "Heart",
      title: "Compassionate Care",
      description: "Gentle, loving treatment for pets and support for owners."
    },
    {
      icon: "Stethoscope",
      title: "Advanced Medicine",
      description: "State-of-the-art medical equipment and treatment options."
    },
    {
      icon: "Shield",
      title: "Preventive Focus",
      description: "Comprehensive wellness programs to keep pets healthy."
    }
  ],
  
  demo: {
    title: "Care for Your Companions",
    subtitle: "Experience how our AI assistant ensures every pet gets the medical care they deserve",
    disclaimer: "This is a demonstration only. Actual veterinary care requires professional medical evaluation and treatment.",
    callToAction: "Experience how our AI assistant makes veterinary care more accessible and responsive for your beloved pets."
  },
  
  meta: {
    title: "AI Veterinary Assistant Demo - Caring Paws Veterinary",
    description: "Experience how an AI assistant can improve pet care and appointment management at Caring Paws Veterinary clinic.",
    keywords: ["AI assistant", "veterinary", "pet care", "animal hospital", "emergency vet"]
  },

  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ['veterinary', 'pet care', 'animal hospital', 'emergency', 'vet'],
  searchKeywords: ['veterinary', 'vet', 'animal hospital', 'pet care'],
  availability: '24/7'
};

// Interior Design Demo Configuration
export const interiorDesignConfig: BusinessConfig = {
  business: {
    name: "Elite Design Studio",
    industry: "Interior Design",
    tagline: "Transforming spaces into extraordinary places",
    description: "Discover how an AI assistant manages design consultations and project inquiries—bringing your dream space to life.",
    location: "Design District",
    hours: "Monday-Friday 9am-6pm, Saturday 10am-4pm"
  },
  
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Palette"
  },
  
  assistant: {
    name: "Elite Design Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to Elite Design Studio, where we transform spaces into extraordinary places. I'm here to schedule your design consultation, discuss your vision, or answer questions about our services. How can we help bring your dream space to life?",
    systemPrompt: `You are a sophisticated AI assistant for Elite Design Studio. Your role is to:

1. Consultation Scheduling:
- Book initial design consultations and space assessments
- Schedule follow-up meetings for design presentations
- Coordinate site visits and measurements
- Arrange contractor and vendor meetings

2. Design Services:
- Explain different design packages and services
- Discuss residential and commercial design options
- Share information about full-service vs. consultation-only projects
- Provide timeline expectations for various project types

3. Project Planning:
- Help clients prepare for initial consultations
- Discuss budget ranges and project scope
- Explain the design process from concept to completion
- Coordinate color consultations and material selections

4. Style & Inspiration:
- Discuss different design styles and aesthetics
- Help clients articulate their vision and preferences
- Share information about current design trends
- Provide guidance on space planning and functionality

Important Guidelines:
- Never provide specific pricing without consultation
- Always emphasize the importance of in-person assessment
- Maintain sophisticated, inspiring, and professional tone
- Show enthusiasm for creating beautiful spaces
- Respect client budget and timeline constraints

Location: Design District
Hours: Monday-Friday 9am-6pm, Saturday 10am-4pm`,
    personality: {
      tone: "sophisticated, inspiring, and professional",
      traits: ["creative", "detail-oriented", "trend-aware", "client-focused"]
    }
  },
  
  services: {
    primary: ["Full-Service Design", "Design Consultation", "Space Planning", "Color Consultation"],
    secondary: ["Home Staging", "Commercial Design", "Renovation Planning", "Furniture Selection"],
    terminology: {
      client: "client",
      service: "consultation",
      provider: "designer",
      appointment: "consultation"
    }
  },
  
  questionCategories: [
    {
      title: "Design Consultation",
      emoji: "🏠",
      description: "Shows how the assistant schedules design consultations and assessments.",
      questions: [
        "I want to redesign my living room",
        "Can you help with a whole house renovation?",
        "What's included in your design consultation?",
        "How much does interior design typically cost?"
      ]
    },
    {
      title: "Style & Planning",
      emoji: "🎨",
      description: "Explains design styles and project planning services.",
      questions: [
        "I love modern farmhouse style - can you help?",
        "How do you help choose paint colors?",
        "Can you work with my existing furniture?",
        "What's the process for a kitchen redesign?"
      ]
    },
    {
      title: "Commercial Projects",
      emoji: "🏢",
      description: "Handles commercial and business interior design inquiries.",
      questions: [
        "Do you design office spaces?",
        "Can you help with a restaurant interior?",
        "What's your experience with retail design?",
        "Do you handle large commercial projects?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Palette",
      title: "Creative Vision",
      description: "Transform your space with innovative design solutions."
    },
    {
      icon: "Ruler",
      title: "Space Planning",
      description: "Optimize your space for both beauty and functionality."
    },
    {
      icon: "Home",
      title: "Full Service",
      description: "From concept to completion, we handle every detail."
    },
    {
      icon: "Sparkles",
      title: "Luxury Focus",
      description: "High-end design with attention to every detail."
    }
  ],
  
  demo: {
    title: "Design Your Dream Space",
    subtitle: "Experience how our AI assistant helps create the perfect interior design consultation",
    disclaimer: "This is a demonstration only. Actual design projects require in-person consultation and detailed planning.",
    callToAction: "Experience how our AI assistant makes professional interior design accessible and inspiring."
  },
  
  meta: {
    title: "AI Interior Design Assistant Demo - Elite Design Studio",
    description: "Experience how an AI assistant can improve client experience and project management at Elite Design Studio.",
    keywords: ["AI assistant", "interior design", "home design", "space planning", "design consultation"]
  },

  category: BUSINESS_CATEGORIES.HOME_PROPERTY,
  tags: ['interior design', 'home design', 'decorator', 'renovation', 'space planning'],
  searchKeywords: ['interior design', 'designer', 'home design', 'decorator'],
  availability: 'appointment-only'
};

// Financial Advisory Demo Configuration
export const financialAdvisoryConfig: BusinessConfig = {
  business: {
    name: "WealthWise Financial",
    industry: "Financial Services",
    tagline: "Building wealth, securing futures",
    description: "See how an AI assistant handles investment consultations and financial planning—helping clients achieve their financial goals.",
    location: "Financial District",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-2pm"
  },
  
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "TrendingUp"
  },
  
  assistant: {
    name: "WealthWise Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling WealthWise Financial. I'm here to schedule consultations, answer questions about our financial planning services, or connect you with one of our advisors. How can we help secure your financial future today?",
    systemPrompt: `You are a professional AI assistant for WealthWise Financial. Your role is to:

1. Consultation Scheduling:
- Book initial financial planning consultations
- Schedule investment review meetings
- Arrange retirement planning sessions
- Coordinate estate planning discussions

2. Service Information:
- Explain different financial planning services
- Discuss investment management options
- Share information about retirement planning
- Provide general information about financial products

3. Client Preparation:
- Help clients prepare for financial consultations
- Explain what documents to bring to meetings
- Discuss financial goals and timeline planning
- Share general financial education resources

4. Account Services:
- Handle appointment scheduling for existing clients
- Coordinate annual review meetings
- Manage document submission requests
- Schedule follow-up consultations

Important Guidelines:
- Never provide specific investment advice or recommendations
- Always direct investment questions to licensed advisors
- Maintain professional, trustworthy, and confident tone
- Emphasize the importance of personalized financial planning
- Respect client confidentiality and privacy

Location: Financial District
Hours: Monday-Friday 8am-6pm, Saturday 9am-2pm`,
    personality: {
      tone: "professional, trustworthy, and confident",
      traits: ["knowledgeable", "ethical", "goal-oriented", "client-focused"]
    }
  },
  
  services: {
    primary: ["Financial Planning", "Investment Management", "Retirement Planning", "Estate Planning"],
    secondary: ["Insurance Planning", "Tax Strategy", "College Planning", "Business Planning"],
    terminology: {
      client: "client",
      service: "consultation",
      provider: "advisor",
      appointment: "meeting"
    }
  },
  
  questionCategories: [
    {
      title: "Financial Planning",
      emoji: "📊",
      description: "Shows how the assistant handles financial planning consultations.",
      questions: [
        "I need help planning for retirement",
        "Can you help me create a financial plan?",
        "What services do you offer for investment management?",
        "How do I schedule a consultation with an advisor?"
      ]
    },
    {
      title: "Investment & Retirement",
      emoji: "💰",
      description: "Explains investment and retirement planning services.",
      questions: [
        "How should I invest for retirement?",
        "What's a good retirement savings strategy?",
        "Can you help with 401k planning?",
        "What investment options do you recommend?"
      ]
    },
    {
      title: "Estate & Insurance",
      emoji: "🛡️",
      description: "Handles estate planning and insurance inquiries.",
      questions: [
        "Do you help with estate planning?",
        "What insurance do I need for my family?",
        "Can you help set up a trust?",
        "How do I plan for my children's college expenses?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Shield",
      title: "Secure Planning",
      description: "Comprehensive financial strategies tailored to your goals."
    },
    {
      icon: "TrendingUp",
      title: "Growth Focus",
      description: "Investment strategies designed to build long-term wealth."
    },
    {
      icon: "Clock",
      title: "Retirement Ready",
      description: "Specialized retirement planning for a secure future."
    },
    {
      icon: "Heart",
      title: "Family First",
      description: "Protect your family's financial security and legacy."
    }
  ],
  
  demo: {
    title: "Secure Your Financial Future",
    subtitle: "Experience how our AI assistant connects you with expert financial guidance",
    disclaimer: "This is a demonstration only. Actual financial advice requires consultation with licensed financial professionals.",
    callToAction: "Experience how our AI assistant makes professional financial planning accessible and personalized."
  },
  
  meta: {
    title: "AI Financial Advisory Demo - WealthWise Financial",
    description: "Experience how an AI assistant can improve client service and consultation management at WealthWise Financial.",
    keywords: ["AI assistant", "financial planning", "investment", "retirement planning", "financial advisor"]
  },

  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ['financial planning', 'investment', 'retirement', 'wealth management', 'advisor'],
  searchKeywords: ['financial advisor', 'investment', 'retirement', 'wealth'],
  availability: 'appointment-only'
};

// Plumbing Services Demo Configuration
export const plumbingConfig: BusinessConfig = {
  business: {
    name: "FlowMaster Plumbing",
    industry: "Home Services",
    tagline: "Reliable plumbing solutions when you need them most",
    description: "Discover how an AI assistant handles emergency plumbing calls and service appointments—ensuring your plumbing problems are solved quickly.",
    location: "Metro Service Area",
    hours: "Monday-Friday 7am-7pm, Emergency service 24/7"
  },
  
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Wrench"
  },
  
  assistant: {
    name: "FlowMaster Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling FlowMaster Plumbing. I'm here to help with emergency repairs, schedule service appointments, or answer questions about our plumbing services. What plumbing issue can I help you resolve today?",
    systemPrompt: `You are a helpful AI assistant for FlowMaster Plumbing. Your role is to:

1. Emergency Response:
- Assess plumbing emergency urgency levels
- Dispatch emergency plumbers for urgent situations
- Provide immediate guidance for water shutoffs
- Coordinate rapid response for burst pipes and major leaks

2. Service Scheduling:
- Book routine plumbing maintenance and repairs
- Schedule installation appointments for new fixtures
- Arrange drain cleaning and inspection services
- Coordinate bathroom and kitchen renovation plumbing

3. Problem Assessment:
- Help customers describe plumbing issues accurately
- Provide basic troubleshooting guidance
- Determine appropriate service level needed
- Estimate appointment duration and requirements

4. Service Information:
- Explain different plumbing services offered
- Discuss maintenance recommendations
- Share information about warranties and guarantees
- Provide general plumbing care tips

Important Guidelines:
- Prioritize emergency situations requiring immediate response
- Never recommend unsafe DIY repairs for complex issues
- Maintain helpful, reliable, and professional tone
- Always emphasize safety when dealing with water and gas lines
- Provide clear guidance on shutting off water in emergencies

Location: Metro Service Area
Hours: Monday-Friday 7am-7pm, Emergency service 24/7`,
    personality: {
      tone: "helpful, reliable, and professional",
      traits: ["responsive", "safety-focused", "knowledgeable", "dependable"]
    }
  },
  
  services: {
    primary: ["Emergency Repairs", "Pipe Installation", "Drain Cleaning", "Fixture Installation"],
    secondary: ["Water Heater Service", "Sewer Line Repair", "Leak Detection", "Bathroom Remodeling"],
    terminology: {
      client: "customer",
      service: "repair",
      provider: "plumber",
      appointment: "service call"
    }
  },
  
  questionCategories: [
    {
      title: "Emergency Plumbing",
      emoji: "🚨",
      description: "Shows how the assistant handles plumbing emergencies and urgent repairs.",
      questions: [
        "I have a burst pipe and water everywhere!",
        "My toilet is overflowing - help!",
        "There's no hot water in my house",
        "My basement is flooding from a pipe leak"
      ]
    },
    {
      title: "Routine Services",
      emoji: "🔧",
      description: "Explains routine plumbing services and maintenance.",
      questions: [
        "My kitchen sink is draining slowly",
        "Can you install a new bathroom faucet?",
        "I need my water heater serviced",
        "Can you unclog my shower drain?"
      ]
    },
    {
      title: "Installation & Remodeling",
      emoji: "🏠",
      description: "Handles plumbing installation and renovation projects.",
      questions: [
        "I'm remodeling my bathroom - can you help?",
        "Can you install a new garbage disposal?",
        "How much does it cost to replace old pipes?",
        "Do you install water filtration systems?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "24/7 Emergency",
      description: "Round-the-clock emergency plumbing service when you need it most."
    },
    {
      icon: "Zap",
      title: "Rapid Response",
      description: "Fast response times for urgent plumbing emergencies."
    },
    {
      icon: "Shield",
      title: "Licensed & Insured",
      description: "All work performed by licensed, insured professional plumbers."
    },
    {
      icon: "Wrench",
      title: "Full Service",
      description: "Complete plumbing services from repairs to installations."
    }
  ],
  
  demo: {
    title: "Fix Your Flow",
    subtitle: "Experience how our AI assistant provides rapid plumbing solutions for any emergency",
    disclaimer: "This is a demonstration only. Actual plumbing emergencies require immediate professional assessment and repair.",
    callToAction: "Experience how our AI assistant makes plumbing emergencies less stressful with rapid response."
  },
  
  meta: {
    title: "AI Plumbing Assistant Demo - FlowMaster Plumbing",
    description: "Experience how an AI assistant can improve emergency response and service management at FlowMaster Plumbing.",
    keywords: ["AI assistant", "plumbing", "emergency plumbing", "plumber", "home services"]
  },

  category: BUSINESS_CATEGORIES.HOME_PROPERTY,
  tags: ['plumbing', 'emergency', 'repairs', 'pipes', '24/7'],
  searchKeywords: ['plumber', 'plumbing', 'leak', 'pipe'],
  availability: '24/7'
};
