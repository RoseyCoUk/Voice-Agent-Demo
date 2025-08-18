export interface BusinessConfig {
  // Basic Business Information
  business: {
    name: string;
    industry: string;
    tagline: string;
    description: string;
    location: string;
    hours: string;
  };

  // Visual Branding
  branding: {
    primaryColor: string;
    accentColor: string;
    iconName: string; // Lucide icon name
    logo?: string; // Optional logo URL
  };

  // AI Assistant Configuration
  assistant: {
    name: string;
    vapiToken: string;
    voiceId: string; // ElevenLabs voice ID
    systemPrompt: string;
    greeting: string; // First message the AI says when call starts
    personality: {
      tone: string;
      traits: string[];
    };
  };

  // Service/Industry Specific
  services: {
    primary: string[];
    secondary: string[];
    terminology: {
      client: string; // patient, customer, client, etc.
      service: string; // treatment, consultation, service, etc.
      provider: string; // practitioner, specialist, consultant, etc.
      appointment: string; // appointment, session, consultation, etc.
    };
  };

  // Question Categories for Demo
  questionCategories: {
    title: string;
    emoji: string;
    description: string;
    questions: string[];
  }[];

  // Features/Benefits
  features: {
    icon: string; // Lucide icon name
    title: string;
    description: string;
  }[];

  // Demo Configuration
  demo: {
    title: string;
    subtitle: string;
    disclaimer: string;
    callToAction: string;
  };

  // Meta Information
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Default configuration for Osteopathy Clinic (current example)
export const defaultOsteopathyConfig: BusinessConfig = {
  business: {
    name: "Spinal Solutions",
    industry: "Osteopathy Clinic",
    tagline: "Professional osteopathic care for optimal spinal health",
    description: "Exploring how an AI phone assistant can improve the way we handle patient calls—especially when our practitioners are with patients.",
    location: "Central London",
    hours: "Monday-Friday 8am-7pm, Saturday 9am-2pm"
  },
  
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Spline"
  },
  
  assistant: {
    name: "Spinal Solutions Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Thank you for calling Spinal Solutions Osteopathy Clinic. I'm here to help you with appointments, answer questions about our treatments, or connect you with Dr. Sarah. How can I assist you today?",
    systemPrompt: `You are an empathetic AI assistant for Spinal Solutions Osteopathy Clinic. Your role is to:

1. Initial Assessment & Booking:
- Collect contact details (name, phone) for appointments
- Ask about preferred appointment times
- Explain the initial consultation process
- Note that specific appointment times need practitioner confirmation

2. Service Information:
- Explain our osteopathic treatments and services
- Describe conditions we treat (back pain, neck pain, sports injuries, etc.)
- Share session duration (45 minutes) and frequency options
- Mention we offer both treatment and prevention

3. First Visit Guidance:
- Explain the initial assessment process
- Mention what to wear (loose, comfortable clothing)
- Describe the clinic environment
- Reassure about professional standards and care

4. Urgent Care & After-Hours:
- For acute pain, provide guidance on immediate self-care
- Take messages for next-day callback
- Explain emergency procedures

Important Guidelines:
- Never provide clinical advice or diagnoses
- Don't quote exact prices (say we'll discuss during callback)
- Maintain professional, warm, and reassuring tone
- Always offer to take contact details for follow-up
- For clinical questions, note they'll be discussed with the osteopath

Location: Central London (fictional address)
Hours: Monday-Friday 8am-7pm, Saturday 9am-2pm`,
    personality: {
      tone: "professional, warm, and reassuring",
      traits: ["empathetic", "knowledgeable", "helpful", "professional"]
    }
  },
  
  services: {
    primary: [
      "Osteopathic treatments",
      "Back pain treatment",
      "Neck pain treatment", 
      "Sports injury treatment",
      "Initial consultations"
    ],
    secondary: [
      "Prevention advice",
      "Exercise guidance",
      "Posture assessment",
      "Wellness consultation"
    ],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "osteopath",
      appointment: "appointment"
    }
  },
  
  questionCategories: [
    {
      title: "Initial Assessment & Booking",
      emoji: "🎯",
      description: "Shows how the assistant handles new patient inquiries and booking requests.",
      questions: [
        "Can you take my details for a first appointment?",
        "I have lower back pain - can you help?",
        "Are there any appointments available next week?",
        "What should I expect during my first visit?"
      ]
    },
    {
      title: "Treatment Information",
      emoji: "🦴",
      description: "Explains osteopathic treatments and services offered.",
      questions: [
        "What conditions do you treat?",
        "How long does a treatment session last?",
        "Do you offer sports injury treatment?",
        "What's the difference between osteopathy and physiotherapy?"
      ]
    },
    {
      title: "Patient Experience",
      emoji: "👤",
      description: "Simulates common patient scenarios and concerns.",
      questions: [
        "Is treatment painful?",
        "Do you treat elderly patients?",
        "What should I wear to my appointment?",
        "Do I need a referral from my GP?"
      ]
    },
    {
      title: "After-Hours Handling",
      emoji: "⏰",
      description: "Shows how urgent inquiries and after-hours calls are managed.",
      questions: [
        "I'm in pain now - can I get an emergency appointment?",
        "Can someone call me back tomorrow?",
        "What are your opening hours?"
      ]
    },
    {
      title: "Insurance & Payments",
      emoji: "💳",
      description: "Handles payment and insurance-related inquiries professionally.",
      questions: [
        "Do you accept health insurance?",
        "What payment methods do you accept?",
        "Can I get a receipt for my insurance?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Clock",
      title: "Extended Hours",
      description: "Answer calls and handle appointment requests even outside clinic hours."
    },
    {
      icon: "FileText",
      title: "Treatment Information",
      description: "Clearly explain our osteopathic services and treatment approaches."
    },
    {
      icon: "Calendar",
      title: "Easy Scheduling",
      description: "Help patients book appointments or arrange practitioner callbacks."
    },
    {
      icon: "Phone",
      title: "Always Available",
      description: "Ensure every patient call is answered, even during treatment hours."
    },
    {
      icon: "Settings",
      title: "Efficient Care",
      description: "Save time by automating responses to common patient questions."
    },
    {
      icon: "Award",
      title: "Professional Service",
      description: "Enhance your clinic's reputation with consistent, professional communication."
    }
  ],
  
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles patient inquiries and appointments",
    disclaimer: "This is a demo version only. It's designed to show how AI can support real patient needs, not replace clinical conversations.",
    callToAction: "Experience firsthand how our AI phone assistant handles patient inquiries with professionalism and empathy."
  },
  
  meta: {
    title: "AI Phone Assistant Demo - Spinal Solutions",
    description: "Experience how an AI phone assistant can improve client calls at Spinal Solutions Osteopathy Clinic, especially when practitioners are with patients.",
    keywords: ["AI assistant", "osteopathy", "phone system", "patient care", "clinic automation"]
  }
};
