import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';
import { getVoiceId } from './constants';

// 1. Physiotherapy Clinic
export const physiotherapyConfig: BusinessConfig = {
  business: {
    name: "ActiveLife Physiotherapy",
    industry: "Physiotherapy",
    tagline: "Restoring movement, rebuilding strength",
    description: "Specialized physiotherapy services helping patients recover from injuries and improve mobility through evidence-based treatment.",
    location: "Health District",
    hours: "Monday-Friday 7am-7pm, Saturday 8am-2pm"
  },
  branding: {
    primaryColor: "teal",
    accentColor: "teal",
    iconName: "Activity"
  },
  assistant: {
    name: "ActiveLife Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling ActiveLife Physiotherapy. I'm here to help you schedule appointments, answer questions about our treatments, or discuss your recovery goals. How can I assist you today?",
    systemPrompt: `You are a caring AI assistant for ActiveLife Physiotherapy. Your role is to:

1. Appointment Scheduling:
- Book initial assessments and follow-up sessions
- Collect information about injuries or conditions
- Explain treatment session duration (45-60 minutes)
- Confirm insurance coverage and referral requirements

2. Treatment Information:
- Describe physiotherapy services and techniques
- Explain conditions treated (sports injuries, post-surgery, chronic pain, mobility issues)
- Share what to expect during sessions
- Discuss treatment plans and frequency

3. Patient Support:
- Provide pre-appointment preparation guidance
- Address concerns about pain or discomfort
- Explain home exercise programs
- Handle post-treatment questions

Important Guidelines:
- Never diagnose conditions or provide medical advice
- Always recommend professional assessment
- Maintain encouraging, supportive tone
- Emphasize evidence-based treatment approach

Location: Health District
Hours: Monday-Friday 7am-7pm, Saturday 8am-2pm`,
    personality: {
      tone: "encouraging, professional, supportive",
      traits: ["empathetic", "knowledgeable", "motivating", "patient"]
    }
  },
  services: {
    primary: ["Sports Injury Rehabilitation", "Post-Surgery Recovery", "Chronic Pain Management", "Mobility Assessment"],
    secondary: ["Manual Therapy", "Exercise Programs", "Injury Prevention", "Workplace Ergonomics"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "physiotherapist",
      appointment: "session"
    }
  },
  questionCategories: [
    {
      title: "Injury Assessment",
      emoji: "🏃",
      description: "Initial injury evaluation and treatment planning",
      questions: [
        "I injured my knee playing sports - can you help?",
        "What should I bring to my first appointment?",
        "Do I need a referral from my doctor?"
      ]
    },
    {
      title: "Treatment Options",
      emoji: "💪",
      description: "Available physiotherapy services and techniques",
      questions: [
        "What types of treatment do you offer?",
        "How long does recovery typically take?",
        "Do you provide home exercise programs?"
      ]
    }
  ],
  features: [
    {
      icon: "Clock",
      title: "Flexible Hours",
      description: "Early morning and evening appointments available"
    },
    {
      icon: "Heart",
      title: "Personalized Care",
      description: "Individualized treatment plans for your recovery goals"
    }
  ],
  demo: {
    title: "Try Our Physiotherapy Assistant",
    subtitle: "Experience how our AI helps patients with rehabilitation and recovery",
    disclaimer: "Demo only. Actual treatment requires professional assessment.",
    callToAction: "See how our AI assistant supports your physiotherapy journey"
  },
  meta: {
    title: "AI Assistant Demo - ActiveLife Physiotherapy",
    description: "Experience AI-powered patient support for physiotherapy services",
    keywords: ["physiotherapy", "rehabilitation", "sports injury", "physical therapy"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["physiotherapy", "rehabilitation", "sports injury", "pain management", "mobility"],
  searchKeywords: ["physio", "physical therapy", "rehabilitation", "sports injury", "recovery", "pain"],
  availability: "business-hours"
};

// 2. Chiropractor Office
export const chiropractorConfig: BusinessConfig = {
  business: {
    name: "Align Chiropractic Center",
    industry: "Chiropractic",
    tagline: "Natural healing through spinal health",
    description: "Expert chiropractic care focusing on spinal adjustments and holistic wellness.",
    location: "Wellness District",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-1pm"
  },
  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "Bone"
  },
  assistant: {
    name: "Align Chiropractic Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Welcome to Align Chiropractic Center. I'm here to help you schedule adjustments, answer questions about chiropractic care, or discuss how we can help with your spinal health. How can I assist you?",
    systemPrompt: `You are a professional AI assistant for Align Chiropractic Center. Your role is to:

1. Appointment Management:
- Schedule chiropractic adjustments and consultations
- Ask about pain location and symptoms
- Explain what to expect during first visit
- Confirm insurance acceptance

2. Chiropractic Information:
- Describe adjustment techniques and benefits
- Explain conditions treated (back pain, neck pain, headaches, sciatica)
- Share wellness and prevention approaches
- Discuss treatment frequency and plans

3. Patient Care:
- Address concerns about adjustment procedures
- Provide pre-visit instructions
- Explain holistic wellness philosophy
- Handle questions about X-rays if needed

Important Guidelines:
- Never diagnose or provide medical advice
- Emphasize natural, drug-free approach
- Maintain professional, reassuring tone
- Recommend in-person evaluation for specific advice

Location: Wellness District
Hours: Monday-Friday 8am-6pm, Saturday 9am-1pm`,
    personality: {
      tone: "reassuring, professional, holistic",
      traits: ["knowledgeable", "caring", "patient-focused", "wellness-oriented"]
    }
  },
  services: {
    primary: ["Spinal Adjustments", "Neck Pain Treatment", "Back Pain Relief", "Wellness Care"],
    secondary: ["Sports Chiropractic", "Headache Treatment", "Sciatica Relief", "Posture Correction"],
    terminology: {
      client: "patient",
      service: "adjustment",
      provider: "chiropractor",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Chiropractic Services",
      emoji: "🦴",
      description: "Spinal health and adjustment services",
      questions: [
        "What is a chiropractic adjustment?",
        "Can you help with my lower back pain?",
        "Is chiropractic care safe?"
      ]
    },
    {
      title: "Treatment Plans",
      emoji: "📋",
      description: "Care plans and visit frequency",
      questions: [
        "How many visits will I need?",
        "Do you accept my insurance?",
        "What should I wear to my appointment?"
      ]
    }
  ],
  features: [
    {
      icon: "Heart",
      title: "Natural Healing",
      description: "Drug-free approach to pain relief and wellness"
    },
    {
      icon: "Calendar",
      title: "Flexible Scheduling",
      description: "Same-day appointments often available"
    }
  ],
  demo: {
    title: "Experience Chiropractic AI",
    subtitle: "See how our AI assistant helps with spinal health inquiries",
    disclaimer: "Demo only. Actual care requires professional evaluation.",
    callToAction: "Discover how our AI supports your chiropractic journey"
  },
  meta: {
    title: "AI Assistant Demo - Align Chiropractic",
    description: "AI-powered support for chiropractic care and spinal health",
    keywords: ["chiropractor", "back pain", "spinal adjustment", "neck pain"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["chiropractic", "back pain", "spinal health", "adjustment", "wellness"],
  searchKeywords: ["chiropractor", "back pain", "spine", "adjustment", "neck pain", "sciatica"],
  availability: "business-hours"
};

// 3. Mental Health Practice
export const mentalHealthConfig: BusinessConfig = {
  business: {
    name: "Mindful Healing Therapy",
    industry: "Mental Health",
    tagline: "Compassionate care for mental wellness",
    description: "Professional counseling and therapy services for individuals and families seeking mental health support.",
    location: "Medical Center",
    hours: "Monday-Friday 9am-8pm, Saturday 10am-4pm"
  },
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Brain"
  },
  assistant: {
    name: "Mindful Healing Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello, and thank you for calling Mindful Healing Therapy. I'm here to help you schedule a confidential consultation, answer questions about our services, or provide information about getting started with therapy. How can I support you today?",
    systemPrompt: `You are a compassionate AI assistant for Mindful Healing Therapy. Your role is to:

1. Appointment Scheduling:
- Schedule initial consultations and therapy sessions
- Match clients with appropriate therapists
- Explain confidentiality and privacy policies
- Collect insurance information sensitively

2. Service Information:
- Describe therapy modalities (CBT, DBT, EMDR, family therapy)
- Explain specializations (anxiety, depression, trauma, relationships)
- Share session duration (45-60 minutes) and frequency
- Discuss telehealth and in-person options

3. Crisis Support:
- Identify crisis situations requiring immediate help
- Provide crisis hotline numbers when appropriate
- Prioritize urgent appointments
- Maintain calm, supportive presence

Important Guidelines:
- Never provide therapy or mental health advice
- Show maximum empathy and non-judgment
- Protect confidentiality at all times
- For crises, provide 988 Suicide & Crisis Lifeline
- Maintain warm, supportive, professional tone

Location: Medical Center
Hours: Monday-Friday 9am-8pm, Saturday 10am-4pm`,
    personality: {
      tone: "compassionate, non-judgmental, supportive",
      traits: ["empathetic", "confidential", "respectful", "caring"]
    }
  },
  services: {
    primary: ["Individual Therapy", "Couples Counseling", "Family Therapy", "Anxiety Treatment"],
    secondary: ["Depression Support", "Trauma Therapy", "Grief Counseling", "Stress Management"],
    terminology: {
      client: "client",
      service: "session",
      provider: "therapist",
      appointment: "session"
    }
  },
  questionCategories: [
    {
      title: "Getting Started",
      emoji: "🌱",
      description: "Beginning your therapy journey",
      questions: [
        "How do I know if I need therapy?",
        "What should I expect in my first session?",
        "Do you accept my insurance?"
      ]
    },
    {
      title: "Therapy Options",
      emoji: "💭",
      description: "Available therapeutic approaches",
      questions: [
        "What types of therapy do you offer?",
        "Can I do sessions via video call?",
        "How often should I come to therapy?"
      ]
    }
  ],
  features: [
    {
      icon: "Shield",
      title: "Confidential Care",
      description: "Complete privacy and confidentiality guaranteed"
    },
    {
      icon: "Video",
      title: "Telehealth Available",
      description: "Convenient online therapy sessions from home"
    }
  ],
  demo: {
    title: "Mental Health Support Demo",
    subtitle: "Experience compassionate AI assistance for therapy services",
    disclaimer: "Demo only. For actual therapy, please schedule with a licensed professional.",
    callToAction: "See how our AI provides supportive, confidential assistance"
  },
  meta: {
    title: "AI Assistant Demo - Mindful Healing Therapy",
    description: "Compassionate AI support for mental health and therapy services",
    keywords: ["therapy", "counseling", "mental health", "anxiety", "depression"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["mental health", "therapy", "counseling", "anxiety", "depression"],
  searchKeywords: ["therapist", "counseling", "mental health", "therapy", "psychologist", "anxiety"],
  availability: "business-hours"
};

// 4. Optometry Clinic
export const optometryConfig: BusinessConfig = {
  business: {
    name: "ClearView Optometry",
    industry: "Optometry",
    tagline: "Your vision is our focus",
    description: "Comprehensive eye care services including eye exams, contact lens fittings, and vision correction solutions.",
    location: "Vision Care Plaza",
    hours: "Monday-Friday 9am-6pm, Saturday 9am-3pm"
  },
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Eye"
  },
  assistant: {
    name: "ClearView Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling ClearView Optometry. I'm here to help you schedule eye exams, answer questions about our vision services, or assist with contact lens and eyewear needs. How can I help you today?",
    systemPrompt: `You are a helpful AI assistant for ClearView Optometry. Your role is to:

1. Appointment Scheduling:
- Book comprehensive eye exams and vision screenings
- Schedule contact lens fittings and follow-ups
- Arrange pediatric eye exams
- Confirm insurance coverage for vision care

2. Vision Services Information:
- Explain eye exam procedures and what to expect
- Describe contact lens options (daily, monthly, specialty)
- Share information about eyewear selection
- Discuss vision correction options
- Explain conditions detected (glaucoma, cataracts, dry eye)

3. Patient Support:
- Provide pre-exam instructions (medication list, current eyewear)
- Answer questions about contact lens care
- Explain prescription validity and refills
- Help with eyewear styling and lens options

Important Guidelines:
- Never diagnose eye conditions or provide medical advice
- Recommend professional eye examination for concerns
- Maintain friendly, knowledgeable tone
- Emphasize importance of regular eye health checkups

Location: Vision Care Plaza
Hours: Monday-Friday 9am-6pm, Saturday 9am-3pm`,
    personality: {
      tone: "friendly, informative, detail-oriented",
      traits: ["knowledgeable", "patient", "helpful", "precise"]
    }
  },
  services: {
    primary: ["Comprehensive Eye Exams", "Contact Lens Fitting", "Eyewear Selection", "Vision Screening"],
    secondary: ["Pediatric Eye Care", "Dry Eye Treatment", "Emergency Eye Care", "LASIK Consultation"],
    terminology: {
      client: "patient",
      service: "exam",
      provider: "optometrist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Eye Exams",
      emoji: "👁️",
      description: "Comprehensive vision and eye health examinations",
      questions: [
        "When should I get my eyes examined?",
        "What's included in a comprehensive eye exam?",
        "Do you accept vision insurance?"
      ]
    },
    {
      title: "Eyewear & Contacts",
      emoji: "👓",
      description: "Glasses, contact lenses, and vision correction",
      questions: [
        "Can I try contact lenses before buying?",
        "How do I choose the right frames?",
        "Do you have designer eyewear brands?"
      ]
    }
  ],
  features: [
    {
      icon: "Eye",
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise vision care"
    },
    {
      icon: "ShoppingBag",
      title: "Eyewear Gallery",
      description: "Wide selection of frames and designer brands"
    }
  ],
  demo: {
    title: "Try Our Optometry Assistant",
    subtitle: "Experience AI-powered support for eye care and vision services",
    disclaimer: "Demo only. Actual eye care requires professional examination.",
    callToAction: "See how our AI assistant helps with your vision needs"
  },
  meta: {
    title: "AI Assistant Demo - ClearView Optometry",
    description: "AI-powered patient support for comprehensive eye care services",
    keywords: ["optometry", "eye exam", "contact lenses", "eyewear", "vision"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["optometry", "eye care", "vision", "contact lenses", "eyewear"],
  searchKeywords: ["optometrist", "eye exam", "glasses", "contacts", "vision test", "eye doctor"],
  availability: "business-hours"
};

// 5. Podiatry Clinic
export const podiatryConfig: BusinessConfig = {
  business: {
    name: "StepRight Podiatry",
    industry: "Podiatry",
    tagline: "Expert care from the ground up",
    description: "Specialized foot and ankle care treating everything from common conditions to complex surgical needs.",
    location: "Medical Plaza",
    hours: "Monday-Friday 8am-5pm, Saturday 9am-1pm"
  },
  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "Footprints"
  },
  assistant: {
    name: "StepRight Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Welcome to StepRight Podiatry. I'm here to help you schedule appointments for foot and ankle concerns, answer questions about our treatments, or discuss how we can help you stay mobile. How can I assist you?",
    systemPrompt: `You are a professional AI assistant for StepRight Podiatry. Your role is to:

1. Appointment Management:
- Schedule consultations for foot and ankle problems
- Book follow-up appointments and wound care visits
- Arrange diabetic foot screenings
- Confirm insurance and Medicare acceptance

2. Podiatric Information:
- Explain common foot conditions (plantar fasciitis, bunions, ingrown toenails, heel pain)
- Describe treatment options (orthotics, minor surgery, wound care)
- Share information about diabetic foot care
- Discuss sports-related foot injuries

3. Patient Care:
- Address concerns about foot pain and mobility
- Provide pre-appointment instructions
- Explain what to bring (current footwear, medical history)
- Handle questions about custom orthotics

Important Guidelines:
- Never diagnose foot conditions or provide medical advice
- Emphasize importance of proper foot care for overall health
- Maintain professional, caring tone
- Recommend in-person evaluation for specific conditions

Location: Medical Plaza
Hours: Monday-Friday 8am-5pm, Saturday 9am-1pm`,
    personality: {
      tone: "professional, caring, knowledgeable",
      traits: ["empathetic", "thorough", "patient-focused", "reassuring"]
    }
  },
  services: {
    primary: ["Foot Pain Treatment", "Ankle Care", "Diabetic Foot Care", "Custom Orthotics"],
    secondary: ["Bunion Treatment", "Ingrown Toenail Care", "Sports Injuries", "Wound Care"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "podiatrist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Foot Conditions",
      emoji: "🦶",
      description: "Common foot and ankle problems",
      questions: [
        "What causes heel pain?",
        "Can you help with my bunion?",
        "I have an ingrown toenail - what should I do?"
      ]
    },
    {
      title: "Treatment Options",
      emoji: "⚕️",
      description: "Available podiatric treatments",
      questions: [
        "Do you make custom orthotics?",
        "What is plantar fasciitis treatment?",
        "Do you perform foot surgery?"
      ]
    }
  ],
  features: [
    {
      icon: "Stethoscope",
      title: "Specialized Care",
      description: "Expert treatment for all foot and ankle conditions"
    },
    {
      icon: "Activity",
      title: "Sports Medicine",
      description: "Get back to your active lifestyle faster"
    }
  ],
  demo: {
    title: "Experience Podiatry AI",
    subtitle: "See how our AI assistant helps with foot and ankle care",
    disclaimer: "Demo only. Actual treatment requires professional evaluation.",
    callToAction: "Discover how our AI supports your foot health journey"
  },
  meta: {
    title: "AI Assistant Demo - StepRight Podiatry",
    description: "AI-powered support for foot and ankle care services",
    keywords: ["podiatry", "foot pain", "ankle care", "orthotics", "heel pain"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["podiatry", "foot care", "ankle", "orthotics", "heel pain"],
  searchKeywords: ["podiatrist", "foot doctor", "heel pain", "bunion", "foot pain", "ankle"],
  availability: "business-hours"
};

// 6. Dermatology Clinic
export const dermatologyConfig: BusinessConfig = {
  business: {
    name: "Radiant Skin Dermatology",
    industry: "Dermatology",
    tagline: "Healthy skin, confident you",
    description: "Comprehensive dermatology services for medical, surgical, and cosmetic skin care needs.",
    location: "Dermatology Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "pink",
    accentColor: "pink",
    iconName: "Sparkles"
  },
  assistant: {
    name: "Radiant Skin Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Radiant Skin Dermatology. I'm here to help you schedule skin consultations, answer questions about our dermatology services, or assist with cosmetic treatment inquiries. How can I help you today?",
    systemPrompt: `You are a knowledgeable AI assistant for Radiant Skin Dermatology. Your role is to:

1. Appointment Scheduling:
- Book skin cancer screenings and mole checks
- Schedule acne consultations and follow-ups
- Arrange cosmetic procedure consultations
- Book pediatric dermatology appointments

2. Dermatology Information:
- Explain skin conditions (acne, eczema, psoriasis, rosacea)
- Describe cosmetic procedures (Botox, fillers, laser treatments)
- Share information about skin cancer detection
- Discuss treatment options for various skin concerns

3. Patient Support:
- Provide pre-appointment skin care instructions
- Answer questions about procedure preparation
- Explain what to expect during skin exams
- Help understand treatment options and timelines

Important Guidelines:
- Never diagnose skin conditions or provide medical advice
- Emphasize importance of professional skin evaluation
- Maintain professional, informative tone
- For suspicious moles or lesions, prioritize urgent appointments

Location: Dermatology Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, informative, reassuring",
      traits: ["knowledgeable", "detail-oriented", "caring", "patient"]
    }
  },
  services: {
    primary: ["Skin Cancer Screening", "Acne Treatment", "Cosmetic Procedures", "Medical Dermatology"],
    secondary: ["Laser Treatments", "Mole Removal", "Eczema Care", "Anti-Aging Treatments"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "dermatologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Medical Dermatology",
      emoji: "🔬",
      description: "Skin conditions and medical treatments",
      questions: [
        "Should I get my moles checked?",
        "Can you help with my acne?",
        "What causes eczema flare-ups?"
      ]
    },
    {
      title: "Cosmetic Services",
      emoji: "✨",
      description: "Aesthetic and anti-aging treatments",
      questions: [
        "Do you offer Botox treatments?",
        "What laser treatments do you provide?",
        "How do dermal fillers work?"
      ]
    }
  ],
  features: [
    {
      icon: "Shield",
      title: "Cancer Screening",
      description: "Comprehensive skin cancer detection and treatment"
    },
    {
      icon: "Sparkles",
      title: "Cosmetic Expertise",
      description: "Advanced aesthetic treatments for youthful skin"
    }
  ],
  demo: {
    title: "Try Our Dermatology Assistant",
    subtitle: "Experience AI-powered support for skin care services",
    disclaimer: "Demo only. Actual care requires professional dermatological evaluation.",
    callToAction: "See how our AI helps with your skin health needs"
  },
  meta: {
    title: "AI Assistant Demo - Radiant Skin Dermatology",
    description: "AI-powered patient support for comprehensive dermatology services",
    keywords: ["dermatology", "skin care", "acne", "skin cancer", "cosmetic"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["dermatology", "skin care", "acne", "cosmetic", "skin cancer"],
  searchKeywords: ["dermatologist", "skin doctor", "acne", "mole check", "botox", "skin"],
  availability: "business-hours"
};

// 7. Pediatric Clinic
export const pediatricConfig: BusinessConfig = {
  business: {
    name: "Little Stars Pediatrics",
    industry: "Pediatrics",
    tagline: "Caring for your little stars",
    description: "Comprehensive pediatric care from newborns to adolescents, focusing on health, growth, and development.",
    location: "Children's Health Center",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-2pm"
  },
  branding: {
    primaryColor: "yellow",
    accentColor: "yellow",
    iconName: "Star"
  },
  assistant: {
    name: "Little Stars Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Little Stars Pediatrics. I'm here to help you schedule appointments for your child, answer questions about our pediatric services, or assist with urgent care needs. How can I help you today?",
    systemPrompt: `You are a warm, caring AI assistant for Little Stars Pediatrics. Your role is to:

1. Appointment Scheduling:
- Book well-child checkups and physical exams
- Schedule sick visits and same-day appointments
- Arrange newborn care and vaccinations
- Coordinate adolescent health visits

2. Pediatric Information:
- Explain well-child visit schedules and developmental milestones
- Describe vaccination schedules and importance
- Share information about common childhood illnesses
- Discuss growth and developmental concerns
- Provide newborn care guidance

3. Parent Support:
- Address parent concerns with empathy and patience
- Provide pre-visit preparation tips
- Explain what to bring (insurance, medical records, comfort items)
- Handle urgent vs. non-urgent triage questions
- Offer reassurance to worried parents

Important Guidelines:
- Never diagnose conditions or provide medical advice
- For urgent symptoms, recommend immediate care
- Maintain warm, family-friendly, professional tone
- Be especially patient and understanding with worried parents

Location: Children's Health Center
Hours: Monday-Friday 8am-6pm, Saturday 9am-2pm`,
    personality: {
      tone: "warm, reassuring, family-friendly",
      traits: ["caring", "patient", "understanding", "knowledgeable"]
    }
  },
  services: {
    primary: ["Well-Child Visits", "Vaccinations", "Sick Visits", "Newborn Care"],
    secondary: ["Sports Physicals", "Developmental Screening", "Adolescent Health", "Urgent Care"],
    terminology: {
      client: "patient",
      service: "visit",
      provider: "pediatrician",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Well-Child Care",
      emoji: "👶",
      description: "Routine checkups and preventive care",
      questions: [
        "When should my child have checkups?",
        "What vaccines does my child need?",
        "Is my child's development on track?"
      ]
    },
    {
      title: "Sick Visits",
      emoji: "🤒",
      description: "Illness and urgent care needs",
      questions: [
        "My child has a fever - should I come in?",
        "Can you see my child today?",
        "What symptoms require immediate attention?"
      ]
    }
  ],
  features: [
    {
      icon: "Heart",
      title: "Family-Centered Care",
      description: "Compassionate care for your whole family's peace of mind"
    },
    {
      icon: "Clock",
      title: "Same-Day Sick Visits",
      description: "Quick appointments when your child needs care"
    }
  ],
  demo: {
    title: "Pediatric Care Assistant Demo",
    subtitle: "Experience AI-powered support for children's health services",
    disclaimer: "Demo only. For actual medical care, please consult with our pediatricians.",
    callToAction: "See how our AI helps families with pediatric care"
  },
  meta: {
    title: "AI Assistant Demo - Little Stars Pediatrics",
    description: "AI-powered support for comprehensive pediatric healthcare",
    keywords: ["pediatrics", "children's health", "well-child", "vaccinations", "pediatrician"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["pediatrics", "children", "well-child", "vaccinations", "family"],
  searchKeywords: ["pediatrician", "children's doctor", "kids doctor", "vaccinations", "well-child", "pediatrics"],
  availability: "business-hours"
};

// 8. Orthodontist Office
export const orthodontistConfig: BusinessConfig = {
  business: {
    name: "Perfect Smile Orthodontics",
    industry: "Orthodontics",
    tagline: "Creating confident smiles",
    description: "Expert orthodontic care providing braces, Invisalign, and smile transformation for all ages.",
    location: "Dental Arts Building",
    hours: "Monday-Thursday 8am-5pm, Friday 8am-2pm"
  },
  branding: {
    primaryColor: "cyan",
    accentColor: "cyan",
    iconName: "Smile"
  },
  assistant: {
    name: "Perfect Smile Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Perfect Smile Orthodontics. I'm here to help you schedule consultations, answer questions about braces and Invisalign, or discuss your smile transformation journey. How can I assist you today?",
    systemPrompt: `You are an enthusiastic AI assistant for Perfect Smile Orthodontics. Your role is to:

1. Appointment Scheduling:
- Book complimentary initial consultations
- Schedule adjustment appointments
- Arrange emergency visits for broken brackets or wires
- Coordinate family appointments

2. Orthodontic Information:
- Explain treatment options (traditional braces, clear braces, Invisalign)
- Describe treatment duration and process
- Share information about adult orthodontics
- Discuss payment plans and insurance coverage
- Explain retention phase after braces

3. Patient Support:
- Address concerns about discomfort and adjustment period
- Provide care instructions for braces and aligners
- Explain what to expect during visits
- Help with questions about eating restrictions
- Offer encouragement throughout treatment journey

Important Guidelines:
- Never provide orthodontic advice or diagnosis
- Maintain enthusiastic, positive tone about smile transformation
- Emphasize life-changing benefits of straight teeth
- Recommend professional consultation for treatment planning

Location: Dental Arts Building
Hours: Monday-Thursday 8am-5pm, Friday 8am-2pm`,
    personality: {
      tone: "enthusiastic, encouraging, positive",
      traits: ["friendly", "motivating", "knowledgeable", "patient"]
    }
  },
  services: {
    primary: ["Traditional Braces", "Invisalign", "Clear Braces", "Adult Orthodontics"],
    secondary: ["Early Treatment", "Retainers", "Emergency Care", "Smile Consultations"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "orthodontist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Treatment Options",
      emoji: "😁",
      description: "Braces, Invisalign, and orthodontic solutions",
      questions: [
        "Should I get braces or Invisalign?",
        "How long will I need braces?",
        "Do you treat adults too?"
      ]
    },
    {
      title: "Getting Started",
      emoji: "🦷",
      description: "Consultations and treatment planning",
      questions: [
        "Is the consultation free?",
        "Do you offer payment plans?",
        "What age should my child see an orthodontist?"
      ]
    }
  ],
  features: [
    {
      icon: "Smile",
      title: "Multiple Options",
      description: "Traditional braces, clear braces, and Invisalign available"
    },
    {
      icon: "DollarSign",
      title: "Flexible Payment",
      description: "Affordable payment plans to fit your budget"
    }
  ],
  demo: {
    title: "Orthodontic Assistant Demo",
    subtitle: "Experience AI-powered support for smile transformation",
    disclaimer: "Demo only. Actual treatment requires professional orthodontic evaluation.",
    callToAction: "Discover how our AI helps create perfect smiles"
  },
  meta: {
    title: "AI Assistant Demo - Perfect Smile Orthodontics",
    description: "AI-powered patient support for braces and Invisalign services",
    keywords: ["orthodontics", "braces", "Invisalign", "smile", "teeth straightening"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["orthodontics", "braces", "Invisalign", "smile", "teeth"],
  searchKeywords: ["orthodontist", "braces", "Invisalign", "teeth straightening", "clear braces", "smile"],
  availability: "business-hours"
};

// 9. Cardiology Practice
export const cardiologyConfig: BusinessConfig = {
  business: {
    name: "HeartCare Cardiology",
    industry: "Cardiology",
    tagline: "Your heart health is our priority",
    description: "Comprehensive cardiovascular care including diagnostics, treatment, and prevention of heart disease.",
    location: "Cardiac Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "red",
    accentColor: "red",
    iconName: "Heart"
  },
  assistant: {
    name: "HeartCare Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling HeartCare Cardiology. I'm here to help you schedule cardiovascular consultations, answer questions about our cardiac services, or assist with test scheduling. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for HeartCare Cardiology. Your role is to:

1. Appointment Scheduling:
- Book cardiology consultations and follow-ups
- Schedule diagnostic tests (EKG, echocardiogram, stress tests, Holter monitors)
- Arrange urgent appointments for chest pain or cardiac symptoms
- Coordinate with referring physicians

2. Cardiology Information:
- Explain cardiovascular conditions (hypertension, arrhythmia, heart disease, heart failure)
- Describe diagnostic procedures and what to expect
- Share information about heart health and prevention
- Discuss treatment options and cardiac rehabilitation

3. Patient Support:
- Provide pre-test instructions (fasting, medication guidelines)
- Address concerns about cardiac procedures
- Explain importance of medication compliance
- Handle urgent cardiac symptom triage appropriately

Important Guidelines:
- Never diagnose cardiac conditions or provide medical advice
- For chest pain or cardiac emergency symptoms, direct to 911
- Maintain calm, professional, reassuring tone
- Emphasize importance of heart health and regular monitoring

Location: Cardiac Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, reassuring, thorough",
      traits: ["knowledgeable", "calm", "detail-oriented", "caring"]
    }
  },
  services: {
    primary: ["Cardiac Consultation", "EKG Testing", "Echocardiogram", "Stress Testing"],
    secondary: ["Holter Monitoring", "Hypertension Management", "Heart Disease Prevention", "Cardiac Rehabilitation"],
    terminology: {
      client: "patient",
      service: "consultation",
      provider: "cardiologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Heart Health",
      emoji: "❤️",
      description: "Cardiovascular conditions and prevention",
      questions: [
        "When should I see a cardiologist?",
        "What are signs of heart disease?",
        "How can I improve my heart health?"
      ]
    },
    {
      title: "Testing & Treatment",
      emoji: "📊",
      description: "Cardiac diagnostics and procedures",
      questions: [
        "What is an echocardiogram?",
        "How do I prepare for a stress test?",
        "Do you treat high blood pressure?"
      ]
    }
  ],
  features: [
    {
      icon: "Activity",
      title: "Advanced Diagnostics",
      description: "State-of-the-art cardiac testing and monitoring"
    },
    {
      icon: "Heart",
      title: "Preventive Care",
      description: "Comprehensive heart disease prevention programs"
    }
  ],
  demo: {
    title: "Cardiology Assistant Demo",
    subtitle: "Experience AI-powered support for heart health services",
    disclaimer: "Demo only. For cardiac emergencies, call 911 immediately.",
    callToAction: "See how our AI supports your cardiovascular health"
  },
  meta: {
    title: "AI Assistant Demo - HeartCare Cardiology",
    description: "AI-powered patient support for comprehensive cardiac care",
    keywords: ["cardiology", "heart health", "cardiologist", "cardiac", "heart disease"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["cardiology", "heart health", "cardiac", "cardiovascular", "hypertension"],
  searchKeywords: ["cardiologist", "heart doctor", "cardiac", "heart health", "hypertension", "EKG"],
  availability: "business-hours"
};

// 10. ENT Specialist
export const entConfig: BusinessConfig = {
  business: {
    name: "ClearPath ENT Specialists",
    industry: "Otolaryngology",
    tagline: "Expert ear, nose, and throat care",
    description: "Comprehensive ENT services treating conditions affecting hearing, breathing, voice, and sinus health.",
    location: "Medical Specialists Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "Ear"
  },
  assistant: {
    name: "ClearPath ENT Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling ClearPath ENT Specialists. I'm here to help you schedule consultations for ear, nose, and throat concerns, answer questions about our services, or assist with hearing test appointments. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for ClearPath ENT Specialists. Your role is to:

1. Appointment Scheduling:
- Book ENT consultations for ear, nose, and throat issues
- Schedule hearing tests and balance evaluations
- Arrange sinus and allergy assessments
- Coordinate pediatric ENT appointments

2. ENT Information:
- Explain common conditions (sinusitis, hearing loss, tonsillitis, sleep apnea, vertigo)
- Describe diagnostic procedures (hearing tests, endoscopy, allergy testing)
- Share information about treatment options (medical and surgical)
- Discuss hearing aid consultations

3. Patient Support:
- Address concerns about ENT symptoms
- Provide pre-appointment preparation instructions
- Explain what to expect during examinations
- Handle questions about surgical procedures

Important Guidelines:
- Never diagnose ENT conditions or provide medical advice
- For severe symptoms (breathing difficulty, severe bleeding), recommend urgent care
- Maintain professional, reassuring tone
- Emphasize comprehensive evaluation by specialist

Location: Medical Specialists Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, knowledgeable, reassuring",
      traits: ["thorough", "patient", "understanding", "detail-oriented"]
    }
  },
  services: {
    primary: ["ENT Consultation", "Hearing Tests", "Sinus Treatment", "Allergy Management"],
    secondary: ["Sleep Apnea Treatment", "Tonsillectomy", "Voice Disorders", "Balance Testing"],
    terminology: {
      client: "patient",
      service: "consultation",
      provider: "ENT specialist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Common Conditions",
      emoji: "👂",
      description: "Ear, nose, and throat problems",
      questions: [
        "Can you help with chronic sinus infections?",
        "I have hearing loss - what can be done?",
        "What causes vertigo and dizziness?"
      ]
    },
    {
      title: "Treatments",
      emoji: "⚕️",
      description: "Available ENT treatments and procedures",
      questions: [
        "Do you perform sinus surgery?",
        "Can you fit hearing aids?",
        "What are treatment options for sleep apnea?"
      ]
    }
  ],
  features: [
    {
      icon: "Stethoscope",
      title: "Comprehensive Care",
      description: "Full-spectrum ENT services for all ages"
    },
    {
      icon: "Volume2",
      title: "Hearing Services",
      description: "Complete hearing evaluation and hearing aid fitting"
    }
  ],
  demo: {
    title: "ENT Assistant Demo",
    subtitle: "Experience AI-powered support for ear, nose, and throat care",
    disclaimer: "Demo only. Actual treatment requires professional ENT evaluation.",
    callToAction: "Discover how our AI helps with ENT health needs"
  },
  meta: {
    title: "AI Assistant Demo - ClearPath ENT Specialists",
    description: "AI-powered patient support for comprehensive ENT services",
    keywords: ["ENT", "ear nose throat", "hearing", "sinus", "otolaryngology"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["ENT", "hearing", "sinus", "ear nose throat", "otolaryngology"],
  searchKeywords: ["ENT", "ear doctor", "sinus", "hearing test", "otolaryngologist", "hearing loss"],
  availability: "business-hours"
};

// 11. Fertility Clinic
export const fertilityConfig: BusinessConfig = {
  business: {
    name: "New Beginnings Fertility",
    industry: "Reproductive Medicine",
    tagline: "Helping dreams of family come true",
    description: "Compassionate fertility care offering IVF, IUI, and comprehensive reproductive health services.",
    location: "Reproductive Health Center",
    hours: "Monday-Friday 7am-4pm, Saturday 7am-12pm"
  },
  branding: {
    primaryColor: "rose",
    accentColor: "rose",
    iconName: "Baby"
  },
  assistant: {
    name: "New Beginnings Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello, and thank you for calling New Beginnings Fertility. I'm here to help you schedule consultations, answer questions about our fertility services, or provide information about getting started on your family-building journey. How can I support you today?",
    systemPrompt: `You are a compassionate AI assistant for New Beginnings Fertility. Your role is to:

1. Appointment Scheduling:
- Book initial fertility consultations
- Schedule IVF and IUI treatment cycles
- Arrange fertility testing and evaluations
- Coordinate monitoring appointments

2. Fertility Information:
- Explain fertility treatments (IVF, IUI, egg freezing, donor programs)
- Describe diagnostic testing (hormone levels, ultrasound, semen analysis)
- Share information about treatment timelines and processes
- Discuss financial options and insurance coverage

3. Patient Support:
- Provide compassionate, sensitive communication
- Address emotional concerns with empathy
- Explain pre-treatment preparation
- Handle questions about medications and protocols
- Offer encouragement and hope

Important Guidelines:
- Never provide medical advice or diagnose infertility
- Show maximum sensitivity and compassion
- Maintain confidential, supportive tone
- Recognize the emotional nature of fertility treatment
- Emphasize individualized treatment plans

Location: Reproductive Health Center
Hours: Monday-Friday 7am-4pm, Saturday 7am-12pm`,
    personality: {
      tone: "compassionate, supportive, hopeful",
      traits: ["empathetic", "patient", "understanding", "encouraging"]
    }
  },
  services: {
    primary: ["IVF Treatment", "IUI Procedures", "Fertility Testing", "Egg Freezing"],
    secondary: ["Donor Programs", "Genetic Testing", "Male Infertility", "LGBTQ+ Family Building"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "fertility specialist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Getting Started",
      emoji: "🌱",
      description: "Beginning your fertility journey",
      questions: [
        "When should I see a fertility specialist?",
        "What happens at the first appointment?",
        "What fertility testing will I need?"
      ]
    },
    {
      title: "Treatment Options",
      emoji: "💝",
      description: "Available fertility treatments",
      questions: [
        "What's the difference between IVF and IUI?",
        "How long does IVF treatment take?",
        "Do you accept my insurance?"
      ]
    }
  ],
  features: [
    {
      icon: "Heart",
      title: "Compassionate Care",
      description: "Supportive, personalized approach to your family-building journey"
    },
    {
      icon: "Award",
      title: "High Success Rates",
      description: "Advanced technology and experienced specialists"
    }
  ],
  demo: {
    title: "Fertility Care Assistant Demo",
    subtitle: "Experience compassionate AI support for reproductive health",
    disclaimer: "Demo only. Actual fertility treatment requires professional medical evaluation.",
    callToAction: "See how our AI provides supportive fertility care assistance"
  },
  meta: {
    title: "AI Assistant Demo - New Beginnings Fertility",
    description: "Compassionate AI support for fertility and reproductive health services",
    keywords: ["fertility", "IVF", "IUI", "reproductive health", "infertility"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["fertility", "IVF", "reproductive health", "infertility", "family building"],
  searchKeywords: ["fertility clinic", "IVF", "IUI", "infertility", "reproductive medicine", "egg freezing"],
  availability: "business-hours"
};

// 12. Pain Management Clinic
export const painManagementConfig: BusinessConfig = {
  business: {
    name: "Relief Pain Management",
    industry: "Pain Medicine",
    tagline: "Restoring comfort, improving quality of life",
    description: "Comprehensive pain management services offering interventional procedures and multidisciplinary treatment approaches.",
    location: "Pain Care Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "amber",
    accentColor: "amber",
    iconName: "Shield"
  },
  assistant: {
    name: "Relief Pain Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Relief Pain Management. I'm here to help you schedule consultations, answer questions about our pain treatment options, or assist with existing treatment needs. How can I help you today?",
    systemPrompt: `You are an empathetic AI assistant for Relief Pain Management. Your role is to:

1. Appointment Scheduling:
- Book pain management consultations
- Schedule interventional procedures (injections, nerve blocks)
- Arrange follow-up appointments
- Coordinate multidisciplinary treatment plans

2. Pain Management Information:
- Explain treatment approaches (interventional, medication, physical therapy)
- Describe common pain conditions treated (chronic back pain, arthritis, neuropathy, migraines)
- Share information about procedures (epidural injections, radiofrequency ablation)
- Discuss comprehensive pain management strategies

3. Patient Support:
- Show empathy for chronic pain struggles
- Provide pre-procedure instructions
- Address concerns about pain treatments
- Explain what to expect during procedures
- Encourage hope for pain relief

Important Guidelines:
- Never diagnose pain conditions or prescribe treatments
- Show compassion for chronic pain patients
- Maintain supportive, understanding tone
- Emphasize multidisciplinary approach to pain management
- For emergency pain or severe symptoms, recommend appropriate care

Location: Pain Care Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "empathetic, supportive, understanding",
      traits: ["compassionate", "patient", "knowledgeable", "encouraging"]
    }
  },
  services: {
    primary: ["Pain Consultation", "Epidural Injections", "Nerve Blocks", "Chronic Pain Management"],
    secondary: ["Radiofrequency Ablation", "Joint Injections", "Medication Management", "Physical Therapy"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "pain specialist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Pain Conditions",
      emoji: "🩹",
      description: "Chronic pain and treatment options",
      questions: [
        "Can you help with chronic back pain?",
        "What causes nerve pain?",
        "Do you treat arthritis pain?"
      ]
    },
    {
      title: "Procedures",
      emoji: "💉",
      description: "Interventional pain treatments",
      questions: [
        "What are epidural injections?",
        "How do nerve blocks work?",
        "Are the procedures painful?"
      ]
    }
  ],
  features: [
    {
      icon: "Heart",
      title: "Compassionate Care",
      description: "Understanding approach to chronic pain management"
    },
    {
      icon: "Activity",
      title: "Advanced Treatments",
      description: "State-of-the-art interventional pain procedures"
    }
  ],
  demo: {
    title: "Pain Management Assistant Demo",
    subtitle: "Experience AI-powered support for pain treatment services",
    disclaimer: "Demo only. Actual pain management requires professional medical evaluation.",
    callToAction: "See how our AI helps patients find pain relief"
  },
  meta: {
    title: "AI Assistant Demo - Relief Pain Management",
    description: "AI-powered patient support for comprehensive pain management services",
    keywords: ["pain management", "chronic pain", "pain clinic", "interventional pain", "pain relief"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["pain management", "chronic pain", "interventional", "pain relief", "back pain"],
  searchKeywords: ["pain management", "chronic pain", "pain clinic", "back pain", "nerve pain", "pain doctor"],
  availability: "business-hours"
};

// 13. Urgent Care Center
export const urgentCareConfig: BusinessConfig = {
  business: {
    name: "QuickCare Urgent Care",
    industry: "Urgent Care",
    tagline: "Fast care when you need it most",
    description: "Walk-in urgent care treating non-life-threatening injuries and illnesses with no appointment needed.",
    location: "Main Street Medical",
    hours: "Open 24/7"
  },
  branding: {
    primaryColor: "red",
    accentColor: "red",
    iconName: "Zap"
  },
  assistant: {
    name: "QuickCare Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling QuickCare Urgent Care. We're open 24/7 with no appointment needed. I'm here to answer questions about our services, provide directions, or help you understand if urgent care is right for your needs. How can I help you today?",
    systemPrompt: `You are an efficient AI assistant for QuickCare Urgent Care. Your role is to:

1. Service Information:
- Explain urgent care vs. emergency room differences
- Describe conditions treated (minor injuries, infections, flu, sprains, cuts)
- Share walk-in availability and estimated wait times
- Provide directions and parking information

2. Triage Guidance:
- Help patients determine if urgent care is appropriate
- Identify true emergencies requiring 911 or ER
- Explain what to bring (ID, insurance, medication list)
- Share preparation tips for visit

3. Services Overview:
- Describe available services (X-rays, lab tests, stitches, IV fluids)
- Explain insurance and payment options
- Discuss occupational health services
- Share information about follow-up care

Important Guidelines:
- For life-threatening emergencies (chest pain, severe bleeding, breathing difficulty), direct to 911
- Never diagnose conditions or provide medical advice
- Maintain quick, efficient, professional tone
- Emphasize no-appointment walk-in convenience
- Always clarify urgent care limitations vs. ER capabilities

Location: Main Street Medical
Hours: Open 24/7`,
    personality: {
      tone: "efficient, helpful, reassuring",
      traits: ["quick", "professional", "knowledgeable", "accessible"]
    }
  },
  services: {
    primary: ["Walk-in Care", "Minor Injuries", "Illness Treatment", "X-rays & Lab Tests"],
    secondary: ["Stitches & Wound Care", "Flu Testing", "Sports Physicals", "Occupational Health"],
    terminology: {
      client: "patient",
      service: "visit",
      provider: "urgent care provider",
      appointment: "visit"
    }
  },
  questionCategories: [
    {
      title: "When to Visit",
      emoji: "⚡",
      description: "Urgent care vs. emergency room",
      questions: [
        "Should I go to urgent care or the ER?",
        "What conditions do you treat?",
        "How long is the wait time?"
      ]
    },
    {
      title: "Services & Billing",
      emoji: "🏥",
      description: "Available services and payment",
      questions: [
        "Do you take my insurance?",
        "Can you do X-rays?",
        "What should I bring with me?"
      ]
    }
  ],
  features: [
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Always open when you need care, day or night"
    },
    {
      icon: "UserCheck",
      title: "No Appointment Needed",
      description: "Walk right in for fast, convenient care"
    }
  ],
  demo: {
    title: "Urgent Care Assistant Demo",
    subtitle: "Experience AI-powered support for urgent care services",
    disclaimer: "Demo only. For medical emergencies, call 911 immediately.",
    callToAction: "See how our AI helps patients access fast care"
  },
  meta: {
    title: "AI Assistant Demo - QuickCare Urgent Care",
    description: "AI-powered support for 24/7 urgent care services",
    keywords: ["urgent care", "walk-in clinic", "24/7 care", "minor emergency", "no appointment"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["urgent care", "walk-in", "24/7", "emergency", "no appointment"],
  searchKeywords: ["urgent care", "walk-in clinic", "emergency care", "24 hour clinic", "no appointment", "ER alternative"],
  availability: "24/7"
};

// 14. Radiology Center
export const radiologyConfig: BusinessConfig = {
  business: {
    name: "ClearView Imaging Center",
    industry: "Radiology",
    tagline: "Advanced imaging for accurate diagnosis",
    description: "Comprehensive diagnostic imaging services with state-of-the-art technology and expert radiologists.",
    location: "Medical Imaging Plaza",
    hours: "Monday-Friday 7am-7pm, Saturday 8am-4pm"
  },
  branding: {
    primaryColor: "slate",
    accentColor: "slate",
    iconName: "Scan"
  },
  assistant: {
    name: "ClearView Imaging Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling ClearView Imaging Center. I'm here to help you schedule imaging appointments, answer questions about our services, or provide preparation instructions for your scan. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for ClearView Imaging Center. Your role is to:

1. Appointment Scheduling:
- Schedule imaging appointments (MRI, CT, X-ray, ultrasound, mammography)
- Coordinate with referring physicians
- Arrange urgent imaging when needed
- Confirm insurance pre-authorization

2. Imaging Information:
- Explain different imaging types and purposes
- Describe what to expect during each procedure
- Share preparation requirements (fasting, contrast, clothing)
- Discuss exam duration and results timeline

3. Patient Support:
- Provide detailed pre-exam instructions
- Address concerns about contrast dye or radiation
- Explain claustrophobia management for MRI
- Handle questions about results and reports
- Coordinate urgent reads when needed

Important Guidelines:
- Never interpret imaging results or diagnose conditions
- Results go to ordering physician first
- Maintain professional, reassuring tone
- Emphasize importance of preparation compliance
- Address safety concerns about radiation and contrast

Location: Medical Imaging Plaza
Hours: Monday-Friday 7am-7pm, Saturday 8am-4pm`,
    personality: {
      tone: "professional, thorough, reassuring",
      traits: ["detail-oriented", "patient", "knowledgeable", "organized"]
    }
  },
  services: {
    primary: ["MRI Scans", "CT Scans", "X-rays", "Ultrasound"],
    secondary: ["Mammography", "DEXA Bone Density", "Interventional Radiology", "3D Imaging"],
    terminology: {
      client: "patient",
      service: "scan",
      provider: "radiologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Imaging Services",
      emoji: "🔬",
      description: "Available diagnostic imaging types",
      questions: [
        "What's the difference between MRI and CT?",
        "Do you do mammograms?",
        "How long does an MRI take?"
      ]
    },
    {
      title: "Preparation",
      emoji: "📋",
      description: "Getting ready for your imaging exam",
      questions: [
        "Do I need to fast before my CT scan?",
        "Can I have an MRI with metal implants?",
        "When will I get my results?"
      ]
    }
  ],
  features: [
    {
      icon: "Activity",
      title: "Advanced Technology",
      description: "State-of-the-art imaging equipment for accurate diagnosis"
    },
    {
      icon: "Clock",
      title: "Fast Results",
      description: "Quick turnaround time for imaging reports"
    }
  ],
  demo: {
    title: "Radiology Assistant Demo",
    subtitle: "Experience AI-powered support for diagnostic imaging services",
    disclaimer: "Demo only. Actual imaging requires physician referral and professional evaluation.",
    callToAction: "See how our AI helps with imaging appointments"
  },
  meta: {
    title: "AI Assistant Demo - ClearView Imaging Center",
    description: "AI-powered patient support for comprehensive diagnostic imaging",
    keywords: ["radiology", "MRI", "CT scan", "X-ray", "ultrasound", "medical imaging"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["radiology", "imaging", "MRI", "CT scan", "diagnostic"],
  searchKeywords: ["radiology", "MRI", "CT scan", "X-ray", "ultrasound", "imaging center", "mammogram"],
  availability: "business-hours"
};

// 15. Medical Spa
export const medicalSpaConfig: BusinessConfig = {
  business: {
    name: "Renewal Medical Spa",
    industry: "Medical Aesthetics",
    tagline: "Where wellness meets beauty",
    description: "Luxurious medical spa offering aesthetic treatments, anti-aging procedures, and wellness services.",
    location: "Spa & Wellness District",
    hours: "Monday-Saturday 9am-7pm, Sunday 10am-5pm"
  },
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Sparkles"
  },
  assistant: {
    name: "Renewal Spa Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Welcome to Renewal Medical Spa. I'm here to help you schedule aesthetic consultations, answer questions about our treatments, or discuss customized wellness plans. How can I help you look and feel your best today?",
    systemPrompt: `You are a sophisticated AI assistant for Renewal Medical Spa. Your role is to:

1. Appointment Scheduling:
- Book aesthetic consultations and treatments
- Schedule Botox, filler, and laser appointments
- Arrange skincare treatments and facials
- Coordinate treatment packages and series

2. Treatment Information:
- Explain aesthetic procedures (Botox, dermal fillers, laser treatments, chemical peels)
- Describe skincare treatments (facials, microneedling, hydrafacials)
- Share information about body contouring and wellness services
- Discuss treatment benefits, duration, and recovery

3. Client Support:
- Provide pre-treatment and post-treatment care instructions
- Address concerns about procedures and results
- Explain pricing and package options
- Help select appropriate treatments for goals
- Maintain luxurious, professional atmosphere

Important Guidelines:
- Never provide medical advice or guarantee results
- Emphasize medical-grade quality and safety
- Maintain upscale, sophisticated tone
- Recommend professional consultation for treatment planning
- Respect privacy and confidentiality

Location: Spa & Wellness District
Hours: Monday-Saturday 9am-7pm, Sunday 10am-5pm`,
    personality: {
      tone: "sophisticated, welcoming, polished",
      traits: ["knowledgeable", "professional", "attentive", "refined"]
    }
  },
  services: {
    primary: ["Botox & Fillers", "Laser Treatments", "Facials", "Body Contouring"],
    secondary: ["Chemical Peels", "Microneedling", "IPL Photofacial", "Wellness IV Therapy"],
    terminology: {
      client: "client",
      service: "treatment",
      provider: "specialist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Aesthetic Treatments",
      emoji: "✨",
      description: "Anti-aging and enhancement procedures",
      questions: [
        "How long does Botox last?",
        "What areas can dermal fillers treat?",
        "Is there downtime after laser treatments?"
      ]
    },
    {
      title: "Skincare Services",
      emoji: "💆",
      description: "Facials and skin rejuvenation",
      questions: [
        "What is a hydrafacial?",
        "Can you help with acne scarring?",
        "Do you offer customized skincare plans?"
      ]
    }
  ],
  features: [
    {
      icon: "Star",
      title: "Medical-Grade Quality",
      description: "Advanced treatments administered by licensed professionals"
    },
    {
      icon: "Sparkles",
      title: "Luxury Experience",
      description: "Relaxing, spa-like environment with premium amenities"
    }
  ],
  demo: {
    title: "Medical Spa Assistant Demo",
    subtitle: "Experience AI-powered support for aesthetic and wellness services",
    disclaimer: "Demo only. Actual treatments require professional consultation.",
    callToAction: "Discover how our AI enhances your spa experience"
  },
  meta: {
    title: "AI Assistant Demo - Renewal Medical Spa",
    description: "AI-powered support for medical aesthetics and wellness services",
    keywords: ["medical spa", "Botox", "fillers", "laser treatment", "aesthetic", "skincare"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["medical spa", "aesthetics", "Botox", "skincare", "wellness"],
  searchKeywords: ["medical spa", "Botox", "fillers", "laser", "facial", "aesthetic treatment", "anti-aging"],
  availability: "business-hours"
};

// 16. Allergist/Immunologist
export const allergistConfig: BusinessConfig = {
  business: {
    name: "Breathe Easy Allergy & Immunology",
    industry: "Allergy & Immunology",
    tagline: "Relief from allergies and immune conditions",
    description: "Specialized allergy and immunology care providing testing, treatment, and immunotherapy for allergic conditions.",
    location: "Allergy Care Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "Wind"
  },
  assistant: {
    name: "Breathe Easy Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Breathe Easy Allergy & Immunology. I'm here to help you schedule allergy consultations, answer questions about testing and treatments, or discuss immunotherapy options. How can I assist you today?",
    systemPrompt: `You are a knowledgeable AI assistant for Breathe Easy Allergy & Immunology. Your role is to:

1. Appointment Scheduling:
- Book allergy and immunology consultations
- Schedule allergy testing (skin tests, blood tests)
- Arrange immunotherapy (allergy shots, sublingual tablets)
- Coordinate asthma management appointments

2. Allergy Information:
- Explain common allergies (seasonal, food, pet, environmental)
- Describe allergy testing procedures
- Share information about treatment options (medications, immunotherapy)
- Discuss asthma and immune system conditions

3. Patient Support:
- Provide pre-test preparation instructions
- Address concerns about allergic reactions
- Explain immunotherapy schedules and commitment
- Help understand allergy triggers and avoidance
- Coordinate emergency action plans for severe allergies

Important Guidelines:
- Never diagnose allergies or provide medical advice
- For severe allergic reactions (anaphylaxis), direct to emergency care
- Maintain professional, reassuring tone
- Emphasize comprehensive testing for accurate diagnosis
- Educate about long-term allergy management

Location: Allergy Care Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "knowledgeable, supportive, thorough",
      traits: ["understanding", "patient", "informative", "caring"]
    }
  },
  services: {
    primary: ["Allergy Testing", "Immunotherapy", "Asthma Management", "Food Allergy Care"],
    secondary: ["Skin Testing", "Allergy Shots", "Eczema Treatment", "Immune Deficiency"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "allergist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Allergy Testing",
      emoji: "🌸",
      description: "Identifying your allergy triggers",
      questions: [
        "What types of allergy tests do you offer?",
        "How do I prepare for allergy testing?",
        "Can you test for food allergies?"
      ]
    },
    {
      title: "Treatment Options",
      emoji: "💉",
      description: "Managing and treating allergies",
      questions: [
        "What is immunotherapy?",
        "How effective are allergy shots?",
        "Can allergies be cured?"
      ]
    }
  ],
  features: [
    {
      icon: "Activity",
      title: "Comprehensive Testing",
      description: "Complete allergy evaluation to identify all triggers"
    },
    {
      icon: "Heart",
      title: "Immunotherapy",
      description: "Long-term relief through allergy desensitization"
    }
  ],
  demo: {
    title: "Allergy Care Assistant Demo",
    subtitle: "Experience AI-powered support for allergy and immunology services",
    disclaimer: "Demo only. Actual allergy care requires professional evaluation and testing.",
    callToAction: "See how our AI helps patients manage allergies"
  },
  meta: {
    title: "AI Assistant Demo - Breathe Easy Allergy",
    description: "AI-powered patient support for comprehensive allergy and immunology care",
    keywords: ["allergist", "allergy testing", "immunology", "allergy shots", "asthma"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["allergy", "immunology", "allergy testing", "asthma", "immunotherapy"],
  searchKeywords: ["allergist", "allergy testing", "allergy shots", "immunotherapy", "asthma", "food allergy"],
  availability: "business-hours"
};

// 17. Rheumatology Clinic
export const rheumatologyConfig: BusinessConfig = {
  business: {
    name: "Joint Health Rheumatology",
    industry: "Rheumatology",
    tagline: "Expert care for autoimmune and joint conditions",
    description: "Specialized rheumatology services treating arthritis, autoimmune diseases, and musculoskeletal conditions.",
    location: "Specialty Care Building",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "violet",
    accentColor: "violet",
    iconName: "Activity"
  },
  assistant: {
    name: "Joint Health Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Joint Health Rheumatology. I'm here to help you schedule consultations for arthritis and autoimmune conditions, answer questions about our services, or assist with treatment coordination. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for Joint Health Rheumatology. Your role is to:

1. Appointment Scheduling:
- Book rheumatology consultations and follow-ups
- Schedule infusion therapy appointments
- Arrange diagnostic testing and lab work
- Coordinate care with other specialists

2. Rheumatology Information:
- Explain rheumatic conditions (rheumatoid arthritis, lupus, psoriatic arthritis, gout)
- Describe treatment options (DMARDs, biologics, steroids)
- Share information about infusion therapy
- Discuss disease management and monitoring

3. Patient Support:
- Address concerns about chronic autoimmune conditions
- Provide pre-appointment preparation guidance
- Explain lab work and diagnostic procedures
- Help understand complex treatment regimens
- Show empathy for chronic disease challenges

Important Guidelines:
- Never diagnose rheumatic conditions or provide medical advice
- Show compassion for chronic disease patients
- Maintain professional, supportive tone
- Emphasize importance of regular monitoring
- Coordinate comprehensive, multidisciplinary care

Location: Specialty Care Building
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, empathetic, thorough",
      traits: ["knowledgeable", "patient", "supportive", "understanding"]
    }
  },
  services: {
    primary: ["Arthritis Treatment", "Autoimmune Disease Care", "Infusion Therapy", "Joint Care"],
    secondary: ["Lupus Treatment", "Osteoporosis Management", "Gout Treatment", "Disease Monitoring"],
    terminology: {
      client: "patient",
      service: "treatment",
      provider: "rheumatologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Conditions Treated",
      emoji: "🦴",
      description: "Arthritis and autoimmune diseases",
      questions: [
        "What is rheumatoid arthritis?",
        "Do you treat lupus?",
        "Can you help with my joint pain?"
      ]
    },
    {
      title: "Treatment Options",
      emoji: "💊",
      description: "Managing rheumatic conditions",
      questions: [
        "What are biologic medications?",
        "Do you offer infusion therapy?",
        "How often will I need appointments?"
      ]
    }
  ],
  features: [
    {
      icon: "Stethoscope",
      title: "Specialized Expertise",
      description: "Board-certified rheumatologists for complex conditions"
    },
    {
      icon: "Activity",
      title: "Infusion Center",
      description: "Comfortable on-site infusion therapy services"
    }
  ],
  demo: {
    title: "Rheumatology Assistant Demo",
    subtitle: "Experience AI-powered support for rheumatology services",
    disclaimer: "Demo only. Actual rheumatology care requires professional medical evaluation.",
    callToAction: "See how our AI supports rheumatology patients"
  },
  meta: {
    title: "AI Assistant Demo - Joint Health Rheumatology",
    description: "AI-powered patient support for comprehensive rheumatology care",
    keywords: ["rheumatology", "arthritis", "autoimmune", "lupus", "rheumatoid arthritis"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["rheumatology", "arthritis", "autoimmune", "joint health", "lupus"],
  searchKeywords: ["rheumatologist", "arthritis", "rheumatoid arthritis", "lupus", "autoimmune disease", "joint pain"],
  availability: "business-hours"
};

// 18. Endocrinology Practice
export const endocrinologyConfig: BusinessConfig = {
  business: {
    name: "Balance Endocrinology",
    industry: "Endocrinology",
    tagline: "Hormonal health and metabolic wellness",
    description: "Comprehensive endocrinology services treating diabetes, thyroid disorders, and hormonal imbalances.",
    location: "Endocrine Health Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "emerald",
    accentColor: "emerald",
    iconName: "Activity"
  },
  assistant: {
    name: "Balance Endocrinology Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Balance Endocrinology. I'm here to help you schedule consultations for diabetes, thyroid, or hormone-related concerns, answer questions about our services, or assist with ongoing care coordination. How can I help you today?",
    systemPrompt: `You are a knowledgeable AI assistant for Balance Endocrinology. Your role is to:

1. Appointment Scheduling:
- Book endocrinology consultations and follow-ups
- Schedule diabetes management appointments
- Arrange thyroid evaluations and monitoring
- Coordinate hormone testing and treatments

2. Endocrinology Information:
- Explain endocrine conditions (diabetes, thyroid disorders, PCOS, osteoporosis, pituitary disorders)
- Describe diagnostic testing (blood work, hormone panels, imaging)
- Share information about treatment approaches
- Discuss diabetes management and technology (CGM, insulin pumps)

3. Patient Support:
- Provide pre-appointment preparation instructions
- Address concerns about hormone treatments
- Explain medication management and monitoring
- Help understand lab results and testing schedules
- Support lifestyle and dietary changes

Important Guidelines:
- Never diagnose endocrine conditions or adjust medications
- Show understanding for chronic condition management
- Maintain professional, educational tone
- Emphasize importance of regular monitoring
- Coordinate comprehensive metabolic care

Location: Endocrine Health Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, educational, supportive",
      traits: ["knowledgeable", "patient", "thorough", "encouraging"]
    }
  },
  services: {
    primary: ["Diabetes Management", "Thyroid Treatment", "Hormone Therapy", "Metabolic Care"],
    secondary: ["PCOS Treatment", "Osteoporosis Care", "Pituitary Disorders", "Adrenal Conditions"],
    terminology: {
      client: "patient",
      service: "consultation",
      provider: "endocrinologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Common Conditions",
      emoji: "⚖️",
      description: "Diabetes, thyroid, and hormonal disorders",
      questions: [
        "What is Type 2 diabetes?",
        "Do you treat thyroid problems?",
        "Can you help with PCOS?"
      ]
    },
    {
      title: "Treatment & Testing",
      emoji: "🔬",
      description: "Managing endocrine conditions",
      questions: [
        "How do you test hormone levels?",
        "What diabetes technology do you offer?",
        "Do I need to fast for blood work?"
      ]
    }
  ],
  features: [
    {
      icon: "Activity",
      title: "Diabetes Expertise",
      description: "Advanced diabetes management and technology support"
    },
    {
      icon: "Stethoscope",
      title: "Comprehensive Care",
      description: "Full-spectrum endocrine and metabolic services"
    }
  ],
  demo: {
    title: "Endocrinology Assistant Demo",
    subtitle: "Experience AI-powered support for hormone and metabolic health",
    disclaimer: "Demo only. Actual endocrinology care requires professional medical evaluation.",
    callToAction: "See how our AI helps manage endocrine health"
  },
  meta: {
    title: "AI Assistant Demo - Balance Endocrinology",
    description: "AI-powered patient support for comprehensive endocrinology services",
    keywords: ["endocrinology", "diabetes", "thyroid", "hormones", "metabolism"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["endocrinology", "diabetes", "thyroid", "hormones", "metabolism"],
  searchKeywords: ["endocrinologist", "diabetes", "thyroid", "hormone doctor", "PCOS", "metabolic"],
  availability: "business-hours"
};

// 19. Gastroenterology Clinic
export const gastroenterologyConfig: BusinessConfig = {
  business: {
    name: "DigestiveHealth Gastroenterology",
    industry: "Gastroenterology",
    tagline: "Comprehensive digestive health care",
    description: "Expert gastroenterology services treating digestive disorders with advanced diagnostics and procedures.",
    location: "Digestive Care Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "Activity"
  },
  assistant: {
    name: "DigestiveHealth Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling DigestiveHealth Gastroenterology. I'm here to help you schedule consultations for digestive concerns, answer questions about procedures like colonoscopy, or assist with ongoing GI care. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for DigestiveHealth Gastroenterology. Your role is to:

1. Appointment Scheduling:
- Book gastroenterology consultations
- Schedule colonoscopy and endoscopy procedures
- Arrange follow-up appointments
- Coordinate diagnostic testing

2. Gastroenterology Information:
- Explain GI conditions (IBS, IBD, GERD, celiac disease, liver disease)
- Describe procedures (colonoscopy, endoscopy, ERCP)
- Share screening guidelines (colon cancer screening)
- Discuss treatment approaches for digestive disorders

3. Patient Support:
- Provide detailed colonoscopy prep instructions
- Address concerns about procedures and sedation
- Explain pre-procedure dietary restrictions
- Help understand digestive symptoms and conditions
- Coordinate referrals and specialized testing

Important Guidelines:
- Never diagnose GI conditions or provide medical advice
- Emphasize importance of colorectal cancer screening
- Maintain professional, reassuring tone
- Ensure patients understand prep instructions thoroughly
- For severe symptoms (bleeding, severe pain), recommend urgent care

Location: Digestive Care Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, reassuring, thorough",
      traits: ["patient", "detail-oriented", "understanding", "knowledgeable"]
    }
  },
  services: {
    primary: ["Colonoscopy", "Endoscopy", "GI Consultation", "Colon Cancer Screening"],
    secondary: ["IBD Treatment", "Liver Disease Care", "GERD Management", "Celiac Testing"],
    terminology: {
      client: "patient",
      service: "procedure",
      provider: "gastroenterologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Procedures",
      emoji: "🔬",
      description: "Colonoscopy, endoscopy, and diagnostics",
      questions: [
        "When should I get a colonoscopy?",
        "How do I prepare for the procedure?",
        "Will I be sedated during colonoscopy?"
      ]
    },
    {
      title: "Digestive Conditions",
      emoji: "🏥",
      description: "GI disorders and treatments",
      questions: [
        "Can you treat IBS and IBD?",
        "What causes acid reflux?",
        "Do you test for celiac disease?"
      ]
    }
  ],
  features: [
    {
      icon: "Shield",
      title: "Cancer Screening",
      description: "Life-saving colorectal cancer screening and prevention"
    },
    {
      icon: "Activity",
      title: "Advanced Procedures",
      description: "State-of-the-art endoscopy suite with expert specialists"
    }
  ],
  demo: {
    title: "Gastroenterology Assistant Demo",
    subtitle: "Experience AI-powered support for digestive health services",
    disclaimer: "Demo only. Actual GI care requires professional medical evaluation.",
    callToAction: "See how our AI helps with digestive health needs"
  },
  meta: {
    title: "AI Assistant Demo - DigestiveHealth Gastroenterology",
    description: "AI-powered patient support for comprehensive gastroenterology services",
    keywords: ["gastroenterology", "colonoscopy", "endoscopy", "digestive health", "GI doctor"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["gastroenterology", "colonoscopy", "digestive health", "endoscopy", "GI"],
  searchKeywords: ["gastroenterologist", "colonoscopy", "endoscopy", "GI doctor", "digestive", "colon screening"],
  availability: "business-hours"
};

// 20. Neurology Practice
export const neurologyConfig: BusinessConfig = {
  business: {
    name: "NeuroHealth Neurology",
    industry: "Neurology",
    tagline: "Advanced care for brain and nervous system",
    description: "Comprehensive neurology services treating disorders of the brain, spine, and nervous system.",
    location: "Neuroscience Center",
    hours: "Monday-Friday 8am-5pm"
  },
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "Brain"
  },
  assistant: {
    name: "NeuroHealth Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling NeuroHealth Neurology. I'm here to help you schedule neurology consultations, answer questions about our services, or assist with diagnostic testing appointments. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for NeuroHealth Neurology. Your role is to:

1. Appointment Scheduling:
- Book neurology consultations and follow-ups
- Schedule diagnostic testing (EEG, EMG, nerve studies)
- Arrange urgent appointments for neurological symptoms
- Coordinate infusion therapy for MS and other conditions

2. Neurology Information:
- Explain neurological conditions (migraine, epilepsy, MS, Parkinson's, neuropathy, stroke)
- Describe diagnostic procedures and what to expect
- Share information about treatment approaches
- Discuss medication management and therapies

3. Patient Support:
- Address concerns about neurological symptoms
- Provide pre-test preparation instructions
- Explain what to bring (medication list, symptom diary)
- Help understand complex neurological conditions
- Show empathy for chronic neurological disorders

Important Guidelines:
- Never diagnose neurological conditions or provide medical advice
- For stroke symptoms (FAST signs), direct to 911 immediately
- For seizures in progress, recommend emergency care
- Maintain professional, compassionate tone
- Emphasize importance of neurological evaluation

Location: Neuroscience Center
Hours: Monday-Friday 8am-5pm`,
    personality: {
      tone: "professional, compassionate, knowledgeable",
      traits: ["empathetic", "thorough", "patient", "understanding"]
    }
  },
  services: {
    primary: ["Neurology Consultation", "EEG Testing", "Migraine Treatment", "MS Care"],
    secondary: ["Epilepsy Management", "Parkinson's Treatment", "Stroke Prevention", "Neuropathy Care"],
    terminology: {
      client: "patient",
      service: "consultation",
      provider: "neurologist",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Neurological Conditions",
      emoji: "🧠",
      description: "Brain and nervous system disorders",
      questions: [
        "Can you treat chronic migraines?",
        "What are symptoms of MS?",
        "Do you treat Parkinson's disease?"
      ]
    },
    {
      title: "Testing & Diagnosis",
      emoji: "⚡",
      description: "Neurological diagnostics and evaluation",
      questions: [
        "What is an EEG test?",
        "How do you diagnose neurological conditions?",
        "Do I need an MRI?"
      ]
    }
  ],
  features: [
    {
      icon: "Brain",
      title: "Specialized Expertise",
      description: "Board-certified neurologists for complex conditions"
    },
    {
      icon: "Activity",
      title: "Advanced Diagnostics",
      description: "Comprehensive neurological testing and evaluation"
    }
  ],
  demo: {
    title: "Neurology Assistant Demo",
    subtitle: "Experience AI-powered support for neurological care services",
    disclaimer: "Demo only. For neurological emergencies like stroke, call 911 immediately.",
    callToAction: "See how our AI helps with neurological health"
  },
  meta: {
    title: "AI Assistant Demo - NeuroHealth Neurology",
    description: "AI-powered patient support for comprehensive neurology services",
    keywords: ["neurology", "neurologist", "migraine", "epilepsy", "MS", "brain health"]
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE,
  tags: ["neurology", "brain health", "migraine", "epilepsy", "MS"],
  searchKeywords: ["neurologist", "brain doctor", "migraine", "epilepsy", "MS", "Parkinson's", "neurology"],
  availability: "business-hours"
};
