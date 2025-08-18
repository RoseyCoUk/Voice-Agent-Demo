import { BusinessConfig } from './business-config';

// Legal Services Demo Configuration
export const legalServicesConfig: BusinessConfig = {
  business: {
    name: "LegalAssist Pro",
    industry: "Legal Services",
    tagline: "Professional legal guidance when you need it most",
    description: "Discover how an AI assistant can streamline client intake and provide immediate support—even when attorneys are in meetings or court.",
    location: "Downtown Metropolitan Area",
    hours: "Monday-Friday 9am-6pm, Emergency consultations available 24/7"
  },
  
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "Scale"
  },
  
  assistant: {
    name: "LegalAssist Pro Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Good day, thank you for calling LegalAssist Pro. I'm here to help you schedule consultations, answer questions about our legal services, or connect you with the right attorney for your needs. How may I assist you today?",
    systemPrompt: `You are a professional AI assistant for LegalAssist Pro Law Firm. Your role is to:

1. Initial Client Screening:
- Collect contact details and basic case information
- Schedule consultations with appropriate attorneys
- Explain our consultation process and what to expect
- Note that legal advice can only be provided by licensed attorneys

2. Service Information:
- Explain our practice areas (family law, corporate law, personal injury, etc.)
- Describe consultation duration (30-60 minutes) and process
- Provide general information about legal procedures
- Direct clients to appropriate specialists

3. First Consultation Guidance:
- Explain what documents to bring
- Describe the office environment and procedures
- Reassure about attorney-client privilege
- Set appropriate expectations for the legal process

4. Urgent Legal Matters:
- Identify time-sensitive legal issues
- Provide emergency contact procedures
- Take detailed messages for attorney review
- Explain when immediate legal action may be needed

Important Guidelines:
- Never provide legal advice or interpret laws
- Don't quote exact fees (refer to consultation for pricing)
- Maintain professional, confident, and reassuring tone
- Always emphasize confidentiality and professionalism
- For legal questions, note they'll be discussed with the attorney

Location: Downtown Metropolitan Area
Hours: Monday-Friday 9am-6pm, Emergency consultations available 24/7`,
    personality: {
      tone: "professional, confident, and reassuring",
      traits: ["trustworthy", "knowledgeable", "confidential", "professional"]
    }
  },
  
  services: {
    primary: [
      "Family Law",
      "Corporate Law",
      "Personal Injury",
      "Real Estate Law",
      "Criminal Defense"
    ],
    secondary: [
      "Contract Review",
      "Legal Document Preparation",
      "Mediation Services",
      "Legal Consultation"
    ],
    terminology: {
      client: "client",
      service: "consultation",
      provider: "attorney",
      appointment: "consultation"
    }
  },
  
  questionCategories: [
    {
      title: "Case Consultation & Intake",
      emoji: "⚖️",
      description: "Shows how the assistant handles new client inquiries and consultation scheduling.",
      questions: [
        "I need to speak with an attorney about a divorce",
        "Can I schedule a consultation for next week?",
        "What should I bring to my first meeting?",
        "How much does a consultation cost?"
      ]
    },
    {
      title: "Legal Services Information",
      emoji: "📚",
      description: "Explains legal services and practice areas.",
      questions: [
        "What areas of law do you practice?",
        "Do you handle criminal defense cases?",
        "How long does the legal process typically take?",
        "What's the difference between mediation and litigation?"
      ]
    },
    {
      title: "Urgent Legal Matters",
      emoji: "🚨",
      description: "Handles time-sensitive legal issues and emergencies.",
      questions: [
        "I was just arrested - can someone help me now?",
        "I received a court summons - what do I do?",
        "Is this matter time-sensitive?",
        "Do you have 24/7 emergency services?"
      ]
    },
    {
      title: "Fees & Payment",
      emoji: "💰",
      description: "Handles fee structure and payment inquiries professionally.",
      questions: [
        "How do you structure your fees?",
        "Do you offer payment plans?",
        "What payment methods do you accept?",
        "Is there a consultation fee?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Handle urgent legal inquiries and emergencies around the clock."
    },
    {
      icon: "Shield",
      title: "Confidential Intake",
      description: "Secure client information gathering with full confidentiality."
    },
    {
      icon: "Calendar",
      title: "Smart Scheduling",
      description: "Match clients with the right attorney based on their legal needs."
    },
    {
      icon: "Phone",
      title: "Always Accessible",
      description: "Ensure every client call is answered, even during court hours."
    },
    {
      icon: "FileText",
      title: "Case Preparation",
      description: "Help clients prepare for consultations with proper documentation."
    },
    {
      icon: "Award",
      title: "Professional Service",
      description: "Maintain the highest standards of legal professionalism."
    }
  ],
  
  demo: {
    title: "Experience Legal AI",
    subtitle: "See how our AI assistant handles client inquiries and legal consultations",
    disclaimer: "This is a demonstration only. Legal advice can only be provided by licensed attorneys during actual consultations.",
    callToAction: "Experience how our AI assistant professionally handles legal inquiries and client intake."
  },
  
  meta: {
    title: "AI Legal Assistant Demo - LegalAssist Pro",
    description: "Experience how an AI assistant can improve client communication at LegalAssist Pro Law Firm, especially when attorneys are in court or meetings.",
    keywords: ["AI assistant", "legal services", "law firm", "client intake", "legal consultation"]
  }
};

// Restaurant/Food Service Demo Configuration
export const restaurantConfig: BusinessConfig = {
  business: {
    name: "Bella Vista Bistro",
    industry: "Restaurant",
    tagline: "Authentic Italian cuisine with modern flair",
    description: "See how an AI assistant can handle reservations and customer inquiries—especially during busy dinner service when staff are focused on guests.",
    location: "Historic Downtown District",
    hours: "Tuesday-Sunday 5pm-10pm, Closed Mondays"
  },
  
  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "ChefHat"
  },
  
  assistant: {
    name: "Bella Vista Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303", 
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Ciao! Welcome to Bella Vista Bistro. I'm here to help you with reservations, answer questions about our authentic Italian cuisine, or assist with special event planning. How can I make your dining experience perfect today?",
    systemPrompt: `You are a warm and professional AI assistant for Bella Vista Bistro. Your role is to:

1. Reservations & Seating:
- Take reservation requests with guest count, date, and time preferences
- Explain our seating options and restaurant atmosphere
- Note special occasions or dietary requirements
- Confirm reservation details and provide confirmation

2. Menu & Dining Information:
- Describe our Italian cuisine and signature dishes
- Explain dietary accommodations (vegetarian, gluten-free, etc.)
- Share information about wine pairings and cocktails
- Discuss portion sizes and sharing options

3. Special Events & Occasions:
- Handle private dining inquiries
- Explain catering services
- Describe special event packages
- Take details for celebration planning

4. Restaurant Policies:
- Explain dress code (smart casual)
- Share cancellation and modification policies
- Describe parking and accessibility options
- Provide directions and contact information

Important Guidelines:
- Never guarantee specific table availability (reservations require confirmation)
- Don't provide exact pricing for special events (refer to management)
- Maintain warm, welcoming, and enthusiastic tone
- Always express appreciation for choosing our restaurant
- For complex requests, arrange manager callback

Location: Historic Downtown District
Hours: Tuesday-Sunday 5pm-10pm, Closed Mondays`,
    personality: {
      tone: "warm, welcoming, and enthusiastic",
      traits: ["friendly", "knowledgeable", "accommodating", "professional"]
    }
  },
  
  services: {
    primary: [
      "Fine Dining",
      "Reservations",
      "Private Events",
      "Wine Service",
      "Catering"
    ],
    secondary: [
      "Special Occasions",
      "Group Dining",
      "Takeout Orders",
      "Gift Cards"
    ],
    terminology: {
      client: "guest",
      service: "dining experience",
      provider: "server",
      appointment: "reservation"
    }
  },
  
  questionCategories: [
    {
      title: "Reservations & Booking",
      emoji: "🍽️",
      description: "Shows how the assistant handles reservation requests and dining inquiries.",
      questions: [
        "I'd like to make a reservation for Saturday night",
        "Do you have tables available for 6 people?",
        "Can I book a table for our anniversary?",
        "What time slots do you have open this weekend?"
      ]
    },
    {
      title: "Menu & Dietary Options",
      emoji: "🍝",
      description: "Explains menu options and dietary accommodations.",
      questions: [
        "What are your signature dishes?",
        "Do you have vegetarian options?",
        "Can you accommodate gluten-free diets?",
        "What wine would you recommend?"
      ]
    },
    {
      title: "Special Events & Private Dining",
      emoji: "🎉",
      description: "Handles special occasion and private event inquiries.",
      questions: [
        "Can you host a private birthday party?",
        "Do you offer catering services?",
        "What's included in your event packages?",
        "Can we reserve the whole restaurant?"
      ]
    },
    {
      title: "Restaurant Information",
      emoji: "ℹ️",
      description: "Provides general restaurant information and policies.",
      questions: [
        "What's your dress code?",
        "Do you validate parking?",
        "Are you wheelchair accessible?",
        "What's your cancellation policy?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "Always Open for Calls",
      description: "Take reservations and inquiries even when we're closed or busy."
    },
    {
      icon: "Calendar",
      title: "Smart Reservations",
      description: "Efficiently manage booking requests and special occasions."
    },
    {
      icon: "Users",
      title: "Guest Experience",
      description: "Provide detailed information about our dining experience."
    },
    {
      icon: "Phone", 
      title: "Never Miss a Call",
      description: "Ensure every potential guest can reach us during busy service."
    },
    {
      icon: "Heart",
      title: "Personal Touch",
      description: "Remember special occasions and dietary preferences."
    },
    {
      icon: "Award",
      title: "Professional Service",
      description: "Maintain our reputation for exceptional hospitality."
    }
  ],
  
  demo: {
    title: "Taste Our AI Service",
    subtitle: "Experience how our AI assistant handles reservations and dining inquiries",
    disclaimer: "This is a demonstration only. Actual reservations require confirmation from our restaurant management.",
    callToAction: "Experience the warm hospitality of our AI assistant for dining reservations and inquiries."
  },
  
  meta: {
    title: "AI Restaurant Assistant Demo - Bella Vista Bistro",
    description: "Experience how an AI assistant can improve guest communication at Bella Vista Bistro, especially during busy dinner service.",
    keywords: ["AI assistant", "restaurant", "reservations", "dining", "hospitality"]
  }
};

// Tech Support/SaaS Demo Configuration
export const techSupportConfig: BusinessConfig = {
  business: {
    name: "CloudTech Solutions",
    industry: "Technology Support",
    tagline: "Enterprise cloud solutions with 24/7 support",
    description: "Discover how an AI assistant can provide instant technical support and escalation—ensuring your customers get help even outside business hours.",
    location: "Global Support Centers",
    hours: "24/7 Technical Support Available"
  },
  
  branding: {
    primaryColor: "blue",
    accentColor: "blue", 
    iconName: "Cloud"
  },
  
  assistant: {
    name: "CloudTech Support Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello, and thank you for calling CloudTech Solutions support. I'm here to help resolve your technical issues, schedule support sessions, or connect you with our engineering team. What can I help you with today?",
    systemPrompt: `You are a knowledgeable AI assistant for CloudTech Solutions Technical Support. Your role is to:

1. Issue Identification & Triage:
- Collect detailed information about technical issues
- Determine urgency level and impact on business operations
- Route cases to appropriate technical specialists
- Provide ticket numbers and estimated response times

2. Basic Troubleshooting:
- Guide users through common resolution steps
- Help with password resets and access issues
- Provide status updates on known issues
- Direct users to relevant documentation

3. Service Information:
- Explain our support tiers and SLA commitments
- Describe available support channels
- Provide information about maintenance windows
- Share resources for self-service options

4. Escalation Management:
- Identify critical issues requiring immediate attention
- Connect urgent cases to on-call engineers
- Collect detailed technical specifications
- Ensure proper case documentation

Important Guidelines:
- Never attempt complex technical fixes beyond basic troubleshooting
- Don't provide access credentials or security information
- Maintain professional, patient, and solution-focused tone
- Always provide ticket numbers for case tracking
- For complex issues, escalate to appropriate technical teams

Location: Global Support Centers
Hours: 24/7 Technical Support Available`,
    personality: {
      tone: "professional, patient, and solution-focused",
      traits: ["knowledgeable", "helpful", "efficient", "reliable"]
    }
  },
  
  services: {
    primary: [
      "Cloud Infrastructure Support",
      "Application Troubleshooting", 
      "Security Incident Response",
      "Performance Optimization",
      "System Integration"
    ],
    secondary: [
      "Training Services",
      "Documentation",
      "Best Practices Consultation",
      "Preventive Maintenance"
    ],
    terminology: {
      client: "customer",
      service: "support",
      provider: "engineer",
      appointment: "support session"
    }
  },
  
  questionCategories: [
    {
      title: "Technical Issues & Troubleshooting",
      emoji: "🔧",
      description: "Shows how the assistant handles technical support requests and issue resolution.",
      questions: [
        "Our application is down and users can't access it",
        "I'm getting error messages when trying to deploy",
        "The system is running slowly - can you help?",
        "How do I reset my admin password?"
      ]
    },
    {
      title: "Service & Account Information",
      emoji: "📊",
      description: "Provides information about support services and account details.",
      questions: [
        "What's included in our support plan?",
        "How do I upgrade our service tier?",
        "Can you check our current system status?",
        "What are your SLA commitments?"
      ]
    },
    {
      title: "Emergency Support",
      emoji: "🚨",
      description: "Handles critical issues and emergency support requests.",
      questions: [
        "We have a critical system outage right now",
        "This is a security emergency - who can help?",
        "Our production environment is failing",
        "I need to reach your on-call engineer immediately"
      ]
    },
    {
      title: "Training & Resources",
      emoji: "📚",
      description: "Provides access to documentation and training resources.",
      questions: [
        "Where can I find the API documentation?",
        "Do you offer training sessions?",
        "How do I access the knowledge base?",
        "Can you recommend best practices for our setup?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Round-the-clock technical support for critical business systems."
    },
    {
      icon: "Zap",
      title: "Instant Triage",
      description: "Quickly identify and route issues to the right technical experts."
    },
    {
      icon: "Shield",
      title: "Security Focus",
      description: "Prioritize security incidents with immediate escalation protocols."
    },
    {
      icon: "Phone",
      title: "Multiple Channels",
      description: "Support via phone, chat, email, and ticketing systems."
    },
    {
      icon: "BookOpen",
      title: "Self-Service Resources",
      description: "Guide customers to relevant documentation and tutorials."
    },
    {
      icon: "Award",
      title: "SLA Compliance",
      description: "Ensure all support cases meet service level commitments."
    }
  ],
  
  demo: {
    title: "Test Our Tech Support",
    subtitle: "Experience how our AI assistant handles technical support and emergency escalation",
    disclaimer: "This is a demonstration only. Real technical support requires authentication and proper case management.",
    callToAction: "Experience professional technical support powered by AI for faster issue resolution."
  },
  
  meta: {
    title: "AI Technical Support Demo - CloudTech Solutions",
    description: "Experience how an AI assistant can improve technical support at CloudTech Solutions, providing 24/7 assistance and smart escalation.",
    keywords: ["AI assistant", "technical support", "cloud services", "help desk", "IT support"]
  }
};

// Dental Clinic Demo Configuration
export const dentalClinicConfig: BusinessConfig = {
  business: {
    name: "Bright Smile Dental",
    industry: "Healthcare",
    tagline: "Complete family dental care with a gentle touch",
    description: "Experience how an AI assistant handles appointment scheduling and patient inquiries for a busy dental practice.",
    location: "Medical District",
    hours: "Monday-Friday 8am-5pm, Saturday 9am-2pm"
  },
  
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Heart"
  },
  
  assistant: {
    name: "Bright Smile Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling Bright Smile Dental. I'm here to help you schedule appointments, answer questions about our dental services, or assist with any urgent dental concerns. How can I help you maintain that bright smile today?",
    systemPrompt: `You are a caring AI assistant for Bright Smile Dental. Your role is to:

1. Appointment Scheduling:
- Book cleanings, check-ups, and dental procedures
- Explain appointment types and duration 
- Handle emergency appointment requests
- Confirm patient insurance and contact details

2. Treatment Information:
- Describe common dental procedures
- Explain preventive care recommendations
- Discuss payment options and insurance coverage
- Share preparation instructions for procedures

3. Emergency Dental Care:
- Identify urgent dental issues requiring immediate attention
- Provide basic pain management advice
- Schedule emergency appointments with on-call dentist
- Give directions to the clinic for urgent visits

4. Patient Care:
- Address dental anxiety and concerns
- Explain office policies and procedures
- Collect medical history updates
- Provide post-treatment care instructions

Important Guidelines:
- Never diagnose dental conditions or provide medical advice
- Always recommend professional evaluation for dental concerns
- Maintain a calm, reassuring tone for anxious patients
- Emphasize the importance of regular dental care

Location: Medical District
Hours: Monday-Friday 8am-5pm, Saturday 9am-2pm`,
    personality: {
      tone: "caring, professional, and reassuring",
      traits: ["empathetic", "knowledgeable", "patient", "trustworthy"]
    }
  },
  
  services: {
    primary: [
      "Cleanings & Checkups",
      "Cosmetic Dentistry", 
      "Dental Implants",
      "Root Canal Therapy",
      "Orthodontics"
    ],
    secondary: [
      "Emergency Care",
      "Teeth Whitening",
      "Dental Crowns",
      "Oral Surgery"
    ],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "dentist",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Appointment Scheduling",
      emoji: "📅",
      description: "Shows how the assistant handles dental appointment booking and scheduling.",
      questions: [
        "I need to schedule a cleaning",
        "Do you have any openings this week?",
        "Can I book my child for a checkup?",
        "I have a dental emergency - when can I be seen?"
      ]
    },
    {
      title: "Dental Services & Treatments",
      emoji: "🦷",
      description: "Explains dental services and treatment options.",
      questions: [
        "What cosmetic dentistry options do you offer?",
        "How much does teeth whitening cost?",
        "Do you accept my dental insurance?",
        "What's involved in getting dental implants?"
      ]
    },
    {
      title: "Emergency Dental Care",
      emoji: "🚨",
      description: "Handles urgent dental issues and emergency appointments.",
      questions: [
        "I have severe tooth pain right now",
        "My tooth broke - what should I do?",
        "Can I get emergency dental care on weekends?",
        "I think I have an infection in my tooth"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "24/7 Scheduling",
      description: "Book appointments anytime, even outside office hours."
    },
    {
      icon: "Shield",
      title: "Emergency Triage",
      description: "Identify urgent dental issues and prioritize emergency care."
    },
    {
      icon: "Calendar",
      title: "Smart Booking",
      description: "Efficiently schedule appointments based on treatment needs."
    },
    {
      icon: "Heart",
      title: "Patient Care",
      description: "Provide compassionate support for dental anxiety and concerns."
    }
  ],
  
  demo: {
    title: "Experience Dental AI",
    subtitle: "See how our AI assistant enhances patient care and appointment management",
    disclaimer: "This is a demonstration only. Actual dental appointments require confirmation and professional evaluation.",
    callToAction: "Experience how our AI assistant makes dental care more accessible and comfortable."
  },
  
  meta: {
    title: "AI Dental Assistant Demo - Bright Smile Dental",
    description: "Experience how an AI assistant can improve patient communication at Bright Smile Dental, making dental care more accessible.",
    keywords: ["AI assistant", "dental", "dentist", "appointments", "patient care"]
  }
};
