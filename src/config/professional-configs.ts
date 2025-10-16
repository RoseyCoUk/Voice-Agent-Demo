import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';
import { getVoiceId } from './constants';

// 1. Insurance Agency
export const insuranceAgencyConfig: BusinessConfig = {
  business: {
    name: "Premier Insurance Solutions",
    industry: "Insurance",
    tagline: "Protecting what matters most",
    description: "Full-service independent insurance agency offering comprehensive coverage solutions for individuals and businesses.",
    location: "Insurance District",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-1pm"
  },
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Shield"
  },
  assistant: {
    name: "Premier Insurance Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Premier Insurance Solutions. I'm here to help you with insurance quotes, policy questions, or claims assistance. How can I help you today?",
    systemPrompt: `You are a professional AI assistant for Premier Insurance Solutions. Your role is to:

1. Insurance Inquiries:
- Provide information about auto, home, life, health, and business insurance
- Explain different coverage types and policy options
- Discuss bundling discounts and multi-policy savings
- Answer questions about deductibles and premiums

2. Quote Requests:
- Gather information for insurance quotes
- Explain what factors affect insurance rates
- Schedule consultations with licensed agents
- Discuss coverage needs based on client situation

3. Policy Management:
- Help with policy changes and updates
- Explain renewal processes and timelines
- Assist with claims filing procedures
- Provide information about payment options

Important Guidelines:
- Never provide specific rate quotes without proper underwriting
- Recommend consulting with licensed agent for coverage advice
- Maintain professional, trustworthy demeanor
- Explain insurance terms in simple language

Location: Insurance District
Hours: Monday-Friday 8am-6pm, Saturday 9am-1pm`,
    personality: {
      tone: "professional, trustworthy, helpful",
      traits: ["knowledgeable", "patient", "detail-oriented", "reassuring"]
    }
  },
  services: {
    primary: ["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance"],
    secondary: ["Health Insurance", "Renters Insurance", "Umbrella Coverage", "Commercial Insurance"],
    terminology: {
      client: "policyholder",
      service: "coverage",
      provider: "agent",
      appointment: "consultation"
    }
  },
  questionCategories: [
    {
      title: "Coverage Options",
      emoji: "🛡️",
      description: "Insurance products and coverage types",
      questions: [
        "What types of insurance do you offer?",
        "Can you provide a quote for auto and home bundle?",
        "Do you offer commercial insurance for businesses?"
      ]
    },
    {
      title: "Policy Management",
      emoji: "📋",
      description: "Managing existing policies and claims",
      questions: [
        "How do I file a claim?",
        "Can I make changes to my policy?",
        "When is my policy up for renewal?"
      ]
    }
  ],
  features: [
    {
      icon: "Shield",
      title: "Multiple Carriers",
      description: "Compare rates from 50+ insurance carriers"
    },
    {
      icon: "DollarSign",
      title: "Bundle Savings",
      description: "Save money with multi-policy discounts"
    }
  ],
  demo: {
    title: "Try Our Insurance Assistant",
    subtitle: "Experience how our AI helps with insurance inquiries",
    disclaimer: "Demo only. Actual quotes require consultation with licensed agent.",
    callToAction: "See how our AI assists with insurance questions"
  },
  meta: {
    title: "AI Assistant Demo - Premier Insurance Solutions",
    description: "AI-powered support for insurance quotes and policy management",
    keywords: ["insurance", "auto insurance", "home insurance", "insurance quotes"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["insurance", "coverage", "quotes", "claims", "policies"],
  searchKeywords: ["insurance", "auto insurance", "home insurance", "life insurance", "business insurance", "quotes"],
  availability: "business-hours"
};

// 2. HR Consulting Firm
export const hrConsultingConfig: BusinessConfig = {
  business: {
    name: "TalentEdge HR Consulting",
    industry: "Human Resources",
    tagline: "Strategic HR solutions for growing businesses",
    description: "Full-service HR consulting firm specializing in talent management, compliance, and organizational development.",
    location: "Business District",
    hours: "Monday-Friday 8:30am-5:30pm"
  },
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "Users"
  },
  assistant: {
    name: "TalentEdge HR Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling TalentEdge HR Consulting. I'm here to help you with HR consulting services, compliance questions, or talent management needs. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for TalentEdge HR Consulting. Your role is to:

1. HR Services:
- Explain HR consulting services and solutions
- Discuss talent acquisition and recruitment support
- Describe employee relations and conflict resolution
- Share information about compliance and policy development

2. Client Support:
- Schedule consultations with HR consultants
- Provide information about service packages
- Discuss organizational development needs
- Explain performance management systems

3. Compliance & Training:
- Address HR compliance questions
- Discuss employee handbook creation
- Explain training and development programs
- Share information about workplace investigations

Important Guidelines:
- Never provide specific legal or HR advice
- Recommend consultation for complex situations
- Maintain professional, knowledgeable tone
- Emphasize customized solutions approach

Location: Business District
Hours: Monday-Friday 8:30am-5:30pm`,
    personality: {
      tone: "professional, strategic, supportive",
      traits: ["knowledgeable", "consultative", "strategic", "empowering"]
    }
  },
  services: {
    primary: ["HR Strategy", "Recruitment Support", "Compliance Services", "Training & Development"],
    secondary: ["Employee Relations", "Performance Management", "Policy Development", "Organizational Development"],
    terminology: {
      client: "client",
      service: "consulting",
      provider: "consultant",
      appointment: "consultation"
    }
  },
  questionCategories: [
    {
      title: "HR Services",
      emoji: "👥",
      description: "Consulting services and HR solutions",
      questions: [
        "What HR consulting services do you provide?",
        "Can you help with employee handbook creation?",
        "Do you offer recruitment support?"
      ]
    },
    {
      title: "Compliance & Training",
      emoji: "📚",
      description: "HR compliance and employee development",
      questions: [
        "How can you help with HR compliance?",
        "Do you provide training programs?",
        "What is your approach to performance management?"
      ]
    }
  ],
  features: [
    {
      icon: "Users",
      title: "Customized Solutions",
      description: "Tailored HR strategies for your business needs"
    },
    {
      icon: "ShieldCheck",
      title: "Compliance Expertise",
      description: "Stay compliant with employment laws and regulations"
    }
  ],
  demo: {
    title: "Try Our HR Consulting Assistant",
    subtitle: "Experience how our AI helps with HR inquiries",
    disclaimer: "Demo only. Actual consulting requires professional assessment.",
    callToAction: "See how our AI supports HR consulting needs"
  },
  meta: {
    title: "AI Assistant Demo - TalentEdge HR Consulting",
    description: "AI-powered support for HR consulting and talent management",
    keywords: ["HR consulting", "talent management", "employee relations", "compliance"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["HR", "consulting", "recruitment", "compliance", "training"],
  searchKeywords: ["HR consulting", "talent acquisition", "employee handbook", "HR compliance", "performance management"],
  availability: "appointment-only"
};

// 3. Tax Preparation Service
export const taxPreparationConfig: BusinessConfig = {
  business: {
    name: "ProTax Financial Services",
    industry: "Tax Services",
    tagline: "Maximum refunds, guaranteed accuracy",
    description: "Professional tax preparation and financial planning services for individuals and businesses with certified tax experts.",
    location: "Financial Center",
    hours: "Monday-Friday 9am-7pm, Saturday 10am-4pm"
  },
  branding: {
    primaryColor: "slate",
    accentColor: "slate",
    iconName: "Calculator"
  },
  assistant: {
    name: "ProTax Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling ProTax Financial Services. I'm here to help you with tax preparation, filing questions, or IRS matters. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for ProTax Financial Services. Your role is to:

1. Tax Services:
- Provide information about tax preparation services
- Explain filing requirements and deadlines
- Discuss business and personal tax returns
- Share information about tax planning strategies

2. Client Support:
- Schedule tax preparation appointments
- Explain required documentation (W-2, 1099, receipts)
- Discuss fees and service packages
- Provide information about IRS representation

3. Tax Questions:
- Address general tax filing questions
- Explain deductions and credits
- Discuss prior year returns and amendments
- Share information about audit support

Important Guidelines:
- Never provide specific tax advice without professional review
- Recommend consultation for complex tax situations
- Maintain confidential, professional demeanor
- Emphasize accuracy and maximum refund guarantee

Location: Financial Center
Hours: Monday-Friday 9am-7pm, Saturday 10am-4pm`,
    personality: {
      tone: "professional, detail-oriented, reassuring",
      traits: ["knowledgeable", "thorough", "accurate", "trustworthy"]
    }
  },
  services: {
    primary: ["Individual Tax Preparation", "Business Tax Returns", "Tax Planning", "IRS Representation"],
    secondary: ["Prior Year Returns", "Amended Returns", "Audit Support", "Bookkeeping Services"],
    terminology: {
      client: "taxpayer",
      service: "tax preparation",
      provider: "tax professional",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Tax Services",
      emoji: "📊",
      description: "Tax preparation and filing services",
      questions: [
        "What documents do I need for tax preparation?",
        "Do you handle business tax returns?",
        "Can you help with prior year returns?"
      ]
    },
    {
      title: "Support & Planning",
      emoji: "💼",
      description: "IRS support and tax planning",
      questions: [
        "Do you provide IRS audit representation?",
        "Can you help with tax planning?",
        "What are your fees for tax preparation?"
      ]
    }
  ],
  features: [
    {
      icon: "Award",
      title: "Maximum Refund",
      description: "Guaranteed maximum refund with certified professionals"
    },
    {
      icon: "Clock",
      title: "Year-Round Support",
      description: "Available for tax planning and IRS matters all year"
    }
  ],
  demo: {
    title: "Try Our Tax Preparation Assistant",
    subtitle: "Experience how our AI helps with tax inquiries",
    disclaimer: "Demo only. Actual tax advice requires professional consultation.",
    callToAction: "See how our AI assists with tax questions"
  },
  meta: {
    title: "AI Assistant Demo - ProTax Financial Services",
    description: "AI-powered support for tax preparation and planning",
    keywords: ["tax preparation", "tax filing", "IRS help", "tax planning"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["tax", "tax preparation", "IRS", "tax planning", "filing"],
  searchKeywords: ["tax filing", "tax returns", "tax preparation", "tax deductions", "IRS help"],
  availability: "business-hours"
};

// 4. Mortgage Broker
export const mortgageBrokerConfig: BusinessConfig = {
  business: {
    name: "HomeKey Mortgage Advisors",
    industry: "Mortgage Brokerage",
    tagline: "Finding your best home loan rates",
    description: "Licensed mortgage brokerage connecting homebuyers with competitive loan options from multiple lenders nationwide.",
    location: "Finance District",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-2pm"
  },
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Home"
  },
  assistant: {
    name: "HomeKey Mortgage Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling HomeKey Mortgage Advisors. I'm here to help you with home loans, refinancing, or pre-approval questions. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for HomeKey Mortgage Advisors. Your role is to:

1. Loan Information:
- Explain mortgage loan options (conventional, FHA, VA, USDA)
- Discuss current rate trends and loan programs
- Provide information about first-time buyer programs
- Explain refinancing benefits and options

2. Pre-Approval Process:
- Describe pre-approval requirements and documentation
- Explain credit score and income requirements
- Discuss down payment options and assistance
- Schedule pre-approval consultations

3. Loan Support:
- Answer questions about closing costs and fees
- Explain loan terms and payment structures
- Discuss jumbo loans and special programs
- Provide information about application timeline

Important Guidelines:
- Never quote specific rates without full application review
- Recommend consultation for personalized loan options
- Maintain professional, educational approach
- Emphasize multiple lender access advantage

Location: Finance District
Hours: Monday-Friday 8am-6pm, Saturday 9am-2pm`,
    personality: {
      tone: "professional, helpful, educational",
      traits: ["knowledgeable", "trustworthy", "patient", "supportive"]
    }
  },
  services: {
    primary: ["Home Purchase Loans", "Refinancing", "First-Time Buyers", "VA Loans"],
    secondary: ["FHA Loans", "Jumbo Loans", "Investment Property", "Pre-Approval"],
    terminology: {
      client: "borrower",
      service: "loan",
      provider: "mortgage advisor",
      appointment: "consultation"
    }
  },
  questionCategories: [
    {
      title: "Loan Options",
      emoji: "🏠",
      description: "Mortgage types and programs",
      questions: [
        "What types of mortgages do you offer?",
        "What are current mortgage rates?",
        "Do you work with first-time homebuyers?"
      ]
    },
    {
      title: "Application Process",
      emoji: "📝",
      description: "Getting pre-approved and applying",
      questions: [
        "How do I get pre-approved?",
        "What documents do I need?",
        "Can you help with refinancing?"
      ]
    }
  ],
  features: [
    {
      icon: "TrendingDown",
      title: "Multiple Lenders",
      description: "Access to 50+ lenders for competitive rates"
    },
    {
      icon: "UserCheck",
      title: "Personal Guidance",
      description: "Expert support through entire loan process"
    }
  ],
  demo: {
    title: "Try Our Mortgage Assistant",
    subtitle: "Experience how our AI helps with home loan inquiries",
    disclaimer: "Demo only. Actual rates require full loan application.",
    callToAction: "See how our AI assists with mortgage questions"
  },
  meta: {
    title: "AI Assistant Demo - HomeKey Mortgage Advisors",
    description: "AI-powered support for home loans and mortgage services",
    keywords: ["mortgage", "home loans", "refinancing", "mortgage rates"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["mortgage", "home loans", "refinancing", "pre-approval", "first-time buyer"],
  searchKeywords: ["mortgage rates", "home financing", "loan pre-approval", "refinance", "mortgage broker"],
  availability: "business-hours"
};

// 5. Private Investigation
export const privateInvestigationConfig: BusinessConfig = {
  business: {
    name: "Sentinel Investigation Services",
    industry: "Private Investigation",
    tagline: "Confidential investigative solutions",
    description: "Licensed private investigation firm providing confidential investigative services for legal, corporate, and personal matters.",
    location: "Investigation Center",
    hours: "Monday-Friday 9am-6pm, Saturday by appointment"
  },
  branding: {
    primaryColor: "slate",
    accentColor: "slate",
    iconName: "Search"
  },
  assistant: {
    name: "Sentinel Investigation Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Sentinel Investigation Services. I'm here to help you with confidential investigation services. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for Sentinel Investigation Services. Your role is to:

1. Investigation Services:
- Provide information about investigation services
- Explain background check procedures
- Discuss surveillance and monitoring services
- Share information about corporate investigations

2. Case Intake:
- Schedule confidential consultations
- Gather basic case information discreetly
- Explain investigation process and timelines
- Discuss reporting and documentation

3. Client Support:
- Address confidentiality concerns
- Explain legal investigation methods
- Discuss pricing and service packages
- Provide information about licensed investigators

Important Guidelines:
- Maintain strict confidentiality at all times
- Never discuss other cases or clients
- Recommend consultation for case details
- Emphasize legal and ethical investigation methods

Location: Investigation Center
Hours: Monday-Friday 9am-6pm, Saturday by appointment`,
    personality: {
      tone: "professional, discreet, trustworthy",
      traits: ["confidential", "thorough", "professional", "ethical"]
    }
  },
  services: {
    primary: ["Background Checks", "Surveillance Services", "Corporate Investigation", "Legal Support"],
    secondary: ["Due Diligence", "Fraud Investigation", "Missing Persons", "Asset Search"],
    terminology: {
      client: "client",
      service: "investigation",
      provider: "investigator",
      appointment: "consultation"
    }
  },
  questionCategories: [
    {
      title: "Investigation Services",
      emoji: "🔍",
      description: "Types of investigative services",
      questions: [
        "What types of investigations do you handle?",
        "Do you provide background checks?",
        "Can you help with corporate investigations?"
      ]
    },
    {
      title: "Process & Confidentiality",
      emoji: "🔒",
      description: "Investigation process and privacy",
      questions: [
        "How does your process work?",
        "Is my case kept confidential?",
        "What kind of reports do you provide?"
      ]
    }
  ],
  features: [
    {
      icon: "ShieldCheck",
      title: "Licensed Investigators",
      description: "Fully licensed with law enforcement backgrounds"
    },
    {
      icon: "Lock",
      title: "Complete Confidentiality",
      description: "All cases handled with strict discretion"
    }
  ],
  demo: {
    title: "Try Our Investigation Assistant",
    subtitle: "Experience how our AI handles confidential inquiries",
    disclaimer: "Demo only. Actual investigations require professional consultation.",
    callToAction: "See how our AI maintains confidential communication"
  },
  meta: {
    title: "AI Assistant Demo - Sentinel Investigation Services",
    description: "AI-powered support for confidential investigation services",
    keywords: ["private investigator", "background checks", "surveillance", "investigation"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["investigation", "background checks", "surveillance", "corporate", "legal"],
  searchKeywords: ["private investigator", "background check", "surveillance", "fraud investigation", "due diligence"],
  availability: "appointment-only"
};

// 6. Notary Public Service
export const notaryPublicConfig: BusinessConfig = {
  business: {
    name: "Swift Notary & Document Services",
    industry: "Notary Services",
    tagline: "Professional notary services when you need them",
    description: "Professional notary public services with mobile notary options available throughout the metro area.",
    location: "Document Center",
    hours: "Monday-Friday 8am-6pm, Saturday 9am-3pm"
  },
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "FileCheck"
  },
  assistant: {
    name: "Swift Notary Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Swift Notary & Document Services. I'm here to help you with notary services, mobile notary options, or document questions. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for Swift Notary & Document Services. Your role is to:

1. Notary Services:
- Explain notarization services and processes
- Discuss mobile notary availability
- Provide information about document types
- Share notary fee structure

2. Appointment Scheduling:
- Schedule notary appointments
- Arrange mobile notary visits
- Explain identification requirements
- Discuss loan signing services

3. Document Support:
- Answer questions about notarizable documents
- Explain apostille services
- Discuss real estate document signing
- Provide information about witness requirements

Important Guidelines:
- Never provide legal advice about documents
- Explain that signers must appear in person
- Emphasize valid ID requirements
- Maintain professional, efficient service

Location: Document Center
Hours: Monday-Friday 8am-6pm, Saturday 9am-3pm`,
    personality: {
      tone: "professional, efficient, helpful",
      traits: ["detail-oriented", "accommodating", "reliable", "professional"]
    }
  },
  services: {
    primary: ["Notary Services", "Mobile Notary", "Document Signing", "Loan Signing"],
    secondary: ["Apostille Services", "Witnessing", "Certified Copies", "Real Estate Closings"],
    terminology: {
      client: "client",
      service: "notarization",
      provider: "notary",
      appointment: "appointment"
    }
  },
  questionCategories: [
    {
      title: "Notary Services",
      emoji: "✍️",
      description: "Notarization and document services",
      questions: [
        "What documents can you notarize?",
        "Do you offer mobile notary services?",
        "How much do notary services cost?"
      ]
    },
    {
      title: "Appointments & Requirements",
      emoji: "📋",
      description: "Scheduling and ID requirements",
      questions: [
        "Do I need an appointment?",
        "What ID do I need to bring?",
        "Can you notarize real estate documents?"
      ]
    }
  ],
  features: [
    {
      icon: "MapPin",
      title: "Mobile Notary",
      description: "We come to you anywhere in the metro area"
    },
    {
      icon: "Clock",
      title: "Flexible Hours",
      description: "Extended hours and weekend availability"
    }
  ],
  demo: {
    title: "Try Our Notary Assistant",
    subtitle: "Experience how our AI helps with notary inquiries",
    disclaimer: "Demo only. Actual notarization requires in-person appearance.",
    callToAction: "See how our AI assists with notary questions"
  },
  meta: {
    title: "AI Assistant Demo - Swift Notary Services",
    description: "AI-powered support for notary and document services",
    keywords: ["notary public", "mobile notary", "document signing", "notarization"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["notary", "mobile notary", "document signing", "apostille", "loan signing"],
  searchKeywords: ["notary public", "mobile notary", "notarize documents", "loan signing", "document certification"],
  availability: "business-hours"
};

// 7. Business Consulting
export const businessConsultingConfig: BusinessConfig = {
  business: {
    name: "Catalyst Business Consulting",
    industry: "Business Consulting",
    tagline: "Strategic insights for sustainable growth",
    description: "Strategic business consulting firm helping companies optimize operations, drive growth, and achieve sustainable success.",
    location: "Business Center",
    hours: "Monday-Friday 8am-6pm"
  },
  branding: {
    primaryColor: "slate",
    accentColor: "slate",
    iconName: "Briefcase"
  },
  assistant: {
    name: "Catalyst Consulting Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Catalyst Business Consulting. I'm here to help you with strategic consulting, process improvement, or business growth questions. How can I assist you today?",
    systemPrompt: `You are a professional AI assistant for Catalyst Business Consulting. Your role is to:

1. Consulting Services:
- Explain business consulting services
- Discuss strategic planning and development
- Provide information about process improvement
- Share insights on organizational development

2. Client Engagement:
- Schedule initial consultations
- Gather information about business challenges
- Discuss consulting engagement process
- Explain success measurement approaches

3. Business Support:
- Address questions about change management
- Discuss performance optimization strategies
- Provide information about industry expertise
- Explain data-driven consulting approach

Important Guidelines:
- Never provide specific business advice without engagement
- Recommend consultation for detailed assessment
- Maintain professional, strategic communication
- Emphasize customized solutions approach

Location: Business Center
Hours: Monday-Friday 8am-6pm`,
    personality: {
      tone: "professional, strategic, analytical",
      traits: ["consultative", "strategic", "analytical", "solution-focused"]
    }
  },
  services: {
    primary: ["Strategy Development", "Process Improvement", "Change Management", "Performance Optimization"],
    secondary: ["Business Planning", "Organizational Development", "Market Analysis", "Operational Excellence"],
    terminology: {
      client: "client",
      service: "consulting",
      provider: "consultant",
      appointment: "consultation"
    }
  },
  questionCategories: [
    {
      title: "Consulting Services",
      emoji: "📊",
      description: "Business consulting and strategy",
      questions: [
        "What types of consulting do you provide?",
        "Can you help with strategic planning?",
        "Do you work with small businesses?"
      ]
    },
    {
      title: "Engagement Process",
      emoji: "🤝",
      description: "How consulting engagements work",
      questions: [
        "How does your consulting process work?",
        "What is the typical engagement duration?",
        "How do you measure success?"
      ]
    }
  ],
  features: [
    {
      icon: "TrendingUp",
      title: "Data-Driven Insights",
      description: "Actionable strategies based on thorough analysis"
    },
    {
      icon: "Users",
      title: "Industry Expertise",
      description: "Experienced consultants across multiple sectors"
    }
  ],
  demo: {
    title: "Try Our Business Consulting Assistant",
    subtitle: "Experience how our AI helps with consulting inquiries",
    disclaimer: "Demo only. Actual consulting requires professional engagement.",
    callToAction: "See how our AI supports business consulting needs"
  },
  meta: {
    title: "AI Assistant Demo - Catalyst Business Consulting",
    description: "AI-powered support for business consulting services",
    keywords: ["business consulting", "strategic planning", "process improvement", "business growth"]
  },
  category: BUSINESS_CATEGORIES.PROFESSIONAL,
  tags: ["consulting", "strategy", "business", "process improvement", "growth"],
  searchKeywords: ["business consultant", "strategic planning", "business growth", "operational efficiency", "management consulting"],
  availability: "appointment-only"
};
