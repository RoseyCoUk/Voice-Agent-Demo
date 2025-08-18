import { BusinessConfig } from './business-config';

// Marketing Agency Demo Configuration
export const marketingAgencyConfig: BusinessConfig = {
  business: {
    name: "GrowthGenius Marketing",
    industry: "Digital Marketing",
    tagline: "Accelerating business growth through strategic marketing",
    description: "See how an AI assistant handles client inquiries and strategy consultations—driving business growth through smart marketing solutions.",
    location: "Business District",
    hours: "Monday-Friday 9am-6pm, Consultation calls by appointment"
  },
  
  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "TrendingUp"
  },
  
  assistant: {
    name: "GrowthGenius Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to GrowthGenius Marketing. I'm here to discuss your digital marketing needs, schedule strategy consultations, or explore how we can accelerate your business growth. What marketing challenges can we help you solve today?",
    systemPrompt: `You are a dynamic AI assistant for GrowthGenius Marketing Agency. Your role is to:

1. Strategy Consultations:
- Schedule marketing strategy consultations
- Book digital marketing audits and assessments
- Arrange campaign planning meetings
- Coordinate brand development sessions

2. Service Information:
- Explain digital marketing services and packages
- Discuss SEO, social media, and content marketing
- Share information about paid advertising campaigns
- Provide general marketing strategy insights

3. Lead Qualification:
- Assess potential client needs and business goals
- Determine budget ranges and timeline expectations
- Identify priority marketing channels and objectives
- Qualify leads for appropriate service levels

4. Campaign Support:
- Schedule campaign review meetings for existing clients
- Coordinate content creation and approval sessions
- Arrange performance review and reporting meetings
- Handle urgent campaign optimization requests

Important Guidelines:
- Never guarantee specific marketing results or ROI
- Always emphasize the importance of strategy consultation
- Maintain enthusiastic, knowledgeable, and results-focused tone
- Show understanding of current digital marketing trends
- Respect client confidentiality and competitive information

Location: Business District
Hours: Monday-Friday 9am-6pm, Consultation calls by appointment`,
    personality: {
      tone: "enthusiastic, knowledgeable, and results-focused",
      traits: ["strategic", "creative", "data-driven", "growth-oriented"]
    }
  },
  
  services: {
    primary: ["Digital Strategy", "SEO & SEM", "Social Media Marketing", "Content Creation"],
    secondary: ["Brand Development", "Web Design", "Email Marketing", "Analytics & Reporting"],
    terminology: {
      client: "client",
      service: "campaign",
      provider: "strategist",
      appointment: "consultation"
    }
  },
  
  questionCategories: [
    {
      title: "Digital Strategy",
      emoji: "📈",
      description: "Shows how the assistant handles marketing strategy consultations.",
      questions: [
        "I need help growing my business online",
        "Can you create a digital marketing strategy?",
        "How can I improve my website's search ranking?",
        "What's the best way to reach my target audience?"
      ]
    },
    {
      title: "Campaign Management",
      emoji: "🎯",
      description: "Explains campaign creation and management services.",
      questions: [
        "Can you manage our social media accounts?",
        "I need help with Google Ads campaigns",
        "How do you measure marketing success?",
        "Can you create content for our blog?"
      ]
    },
    {
      title: "Brand & Web Development",
      emoji: "🚀",
      description: "Handles branding and website development inquiries.",
      questions: [
        "We need to rebrand our company",
        "Can you redesign our website?",
        "How do you help with brand positioning?",
        "Do you create logos and visual identity?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Target",
      title: "Strategic Focus",
      description: "Data-driven marketing strategies tailored to your business goals."
    },
    {
      icon: "TrendingUp",
      title: "Growth Results",
      description: "Proven track record of accelerating business growth."
    },
    {
      icon: "Zap",
      title: "Full-Service",
      description: "Complete marketing solutions from strategy to execution."
    },
    {
      icon: "BarChart",
      title: "Performance Tracking",
      description: "Detailed analytics and reporting to measure campaign success."
    }
  ],
  
  demo: {
    title: "Accelerate Your Growth",
    subtitle: "Experience how our AI assistant connects you with marketing strategies that drive real results",
    disclaimer: "This is a demonstration only. Actual marketing strategies require detailed consultation and analysis.",
    callToAction: "Experience how our AI assistant makes professional marketing strategy accessible and effective."
  },
  
  meta: {
    title: "AI Marketing Assistant Demo - GrowthGenius Marketing",
    description: "Experience how an AI assistant can improve lead generation and client service at GrowthGenius Marketing Agency.",
    keywords: ["AI assistant", "digital marketing", "marketing agency", "SEO", "social media marketing"]
  }
};

// Coffee Shop Demo Configuration
export const coffeeShopConfig: BusinessConfig = {
  business: {
    name: "Brew & Bean Café",
    industry: "Food & Beverage",
    tagline: "Artisan coffee, community connection",
    description: "Discover how an AI assistant handles orders and customer inquiries—keeping the perfect coffee experience brewing 24/7.",
    location: "Downtown Arts Quarter",
    hours: "Monday-Friday 6am-9pm, Saturday-Sunday 7am-10pm"
  },
  
  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "Coffee"
  },
  
  assistant: {
    name: "Brew & Bean Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to Brew & Bean Café, where artisan coffee meets community connection. I'm here to take your order, answer questions about our menu, or help with catering services. What delicious coffee creation can I help you with today?",
    systemPrompt: `You are a friendly AI assistant for Brew & Bean Café. Your role is to:

1. Order Management:
- Take coffee and food orders over the phone
- Handle special dietary requests and customizations
- Manage pickup times and order preparation
- Process catering orders for events and meetings

2. Menu Information:
- Describe coffee drinks, specialty beverages, and food items
- Explain brewing methods and coffee bean origins
- Discuss seasonal menu items and daily specials
- Share information about dairy alternatives and dietary options

3. Event & Catering:
- Handle catering requests for offices and events
- Schedule coffee cart services for special occasions
- Coordinate large group orders and delivery times
- Discuss event packages and pricing

4. Community Engagement:
- Share information about café events and live music
- Discuss study spaces and WiFi availability
- Provide details about loyalty programs and specials
- Handle feedback and suggestions from customers

Important Guidelines:
- Never guarantee exact pickup times during peak hours
- Always confirm dietary restrictions and allergies
- Maintain warm, welcoming, and coffee-enthusiastic tone
- Show knowledge and passion for quality coffee
- Emphasize community atmosphere and local focus

Location: Downtown Arts Quarter
Hours: Monday-Friday 6am-9pm, Saturday-Sunday 7am-10pm`,
    personality: {
      tone: "warm, welcoming, and coffee-enthusiastic",
      traits: ["friendly", "knowledgeable", "community-focused", "energetic"]
    }
  },
  
  services: {
    primary: ["Artisan Coffee", "Fresh Pastries", "Light Meals", "Catering Services"],
    secondary: ["Coffee Beans Retail", "Event Hosting", "Study Space", "Live Music Venue"],
    terminology: {
      client: "customer",
      service: "order",
      provider: "barista",
      appointment: "pickup time"
    }
  },
  
  questionCategories: [
    {
      title: "Coffee & Menu",
      emoji: "☕",
      description: "Shows how the assistant handles coffee orders and menu inquiries.",
      questions: [
        "What's your signature coffee drink?",
        "Can I get a latte with oat milk?",
        "What pastries do you have fresh today?",
        "Do you have any vegan food options?"
      ]
    },
    {
      title: "Orders & Pickup",
      emoji: "📞",
      description: "Explains ordering process and pickup arrangements.",
      questions: [
        "I'd like to place an order for pickup",
        "How long will my order take to prepare?",
        "Can I order ahead for tomorrow morning?",
        "Do you deliver to nearby offices?"
      ]
    },
    {
      title: "Catering & Events",
      emoji: "🎉",
      description: "Handles catering services and event inquiries.",
      questions: [
        "Can you cater our office meeting?",
        "Do you have coffee cart services?",
        "What's included in your catering packages?",
        "Can you handle a large group order?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Coffee",
      title: "Artisan Quality",
      description: "Premium coffee beans roasted to perfection by expert baristas."
    },
    {
      icon: "Clock",
      title: "Quick Service",
      description: "Fast, efficient service to keep your day energized."
    },
    {
      icon: "Users",
      title: "Community Hub",
      description: "A welcoming space for work, study, and social connection."
    },
    {
      icon: "Heart",
      title: "Local Focus",
      description: "Supporting local suppliers and fostering community connections."
    }
  ],
  
  demo: {
    title: "Fuel Your Day",
    subtitle: "Experience how our AI assistant keeps the perfect coffee experience brewing around the clock",
    disclaimer: "This is a demonstration only. Actual orders require confirmation and may vary based on availability.",
    callToAction: "Experience how our AI assistant makes getting your perfect coffee effortless and convenient."
  },
  
  meta: {
    title: "AI Coffee Shop Assistant Demo - Brew & Bean Café",
    description: "Experience how an AI assistant can improve customer service and order management at Brew & Bean Café.",
    keywords: ["AI assistant", "coffee shop", "café", "coffee orders", "catering services"]
  }
};

// Tutoring Service Demo Configuration
export const tutoringConfig: BusinessConfig = {
  business: {
    name: "BrightMinds Tutoring",
    industry: "Education",
    tagline: "Unlocking potential, building confidence, achieving success",
    description: "See how an AI assistant manages tutoring appointments and student inquiries—helping students achieve academic excellence.",
    location: "Education Center",
    hours: "Monday-Friday 3pm-9pm, Saturday 9am-5pm, Sunday 1pm-6pm"
  },
  
  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "GraduationCap"
  },
  
  assistant: {
    name: "BrightMinds Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to BrightMinds Tutoring, where we unlock potential and build confidence. I'm here to schedule tutoring sessions, discuss our programs, or answer questions about academic support. How can we help you achieve success today?",
    systemPrompt: `You are an encouraging AI assistant for BrightMinds Tutoring. Your role is to:

1. Session Scheduling:
- Book individual and group tutoring sessions
- Match students with appropriate subject specialists
- Schedule test preparation and exam review sessions
- Coordinate online and in-person tutoring options

2. Academic Support:
- Explain tutoring services for different subjects and grade levels
- Discuss test preparation for SAT, ACT, and other standardized tests
- Share information about homework help and study skills coaching
- Provide guidance on college application and essay support

3. Student Assessment:
- Help assess student learning needs and academic goals
- Discuss learning styles and preferred tutoring approaches
- Coordinate initial assessments and progress evaluations
- Handle parent consultations about student progress

4. Program Information:
- Explain different tutoring packages and pricing options
- Discuss group classes and intensive programs
- Share information about summer programs and camps
- Provide details about college prep and career counseling

Important Guidelines:
- Never guarantee specific grade improvements or test scores
- Always emphasize the importance of student effort and practice
- Maintain encouraging, supportive, and education-focused tone
- Show understanding of academic pressures and learning challenges
- Respect student privacy and learning difficulties

Location: Education Center
Hours: Monday-Friday 3pm-9pm, Saturday 9am-5pm, Sunday 1pm-6pm`,
    personality: {
      tone: "encouraging, supportive, and education-focused",
      traits: ["patient", "knowledgeable", "motivating", "student-centered"]
    }
  },
  
  services: {
    primary: ["Subject Tutoring", "Test Preparation", "Study Skills", "College Prep"],
    secondary: ["Group Classes", "Online Tutoring", "Summer Programs", "Academic Coaching"],
    terminology: {
      client: "student",
      service: "session",
      provider: "tutor",
      appointment: "session"
    }
  },
  
  questionCategories: [
    {
      title: "Subject Tutoring",
      emoji: "📚",
      description: "Shows how the assistant handles subject-specific tutoring appointments.",
      questions: [
        "My child needs help with algebra",
        "Can you provide chemistry tutoring?",
        "I'm struggling with AP History - can you help?",
        "Do you tutor elementary reading and writing?"
      ]
    },
    {
      title: "Test Preparation",
      emoji: "🎯",
      description: "Explains test prep services and exam preparation.",
      questions: [
        "I need SAT prep - when can I start?",
        "Do you offer ACT test preparation?",
        "Can you help with AP exam preparation?",
        "How long does test prep usually take?"
      ]
    },
    {
      title: "Study Skills & College Prep",
      emoji: "🎓",
      description: "Handles study skills coaching and college preparation services.",
      questions: [
        "My child needs better study habits",
        "Can you help with college application essays?",
        "Do you offer study skills coaching?",
        "What college prep services do you provide?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Users",
      title: "Expert Tutors",
      description: "Qualified educators with expertise in specific subjects."
    },
    {
      icon: "Target",
      title: "Personalized Learning",
      description: "Customized tutoring approaches for each student's learning style."
    },
    {
      icon: "TrendingUp",
      title: "Proven Results",
      description: "Track record of helping students improve grades and test scores."
    },
    {
      icon: "Clock",
      title: "Flexible Scheduling",
      description: "Convenient scheduling to fit busy student and family schedules."
    }
  ],
  
  demo: {
    title: "Unlock Academic Success",
    subtitle: "Experience how our AI assistant connects students with the perfect tutoring support",
    disclaimer: "This is a demonstration only. Actual tutoring results depend on student effort and commitment.",
    callToAction: "Experience how our AI assistant makes finding academic support easy and effective."
  },
  
  meta: {
    title: "AI Tutoring Assistant Demo - BrightMinds Tutoring",
    description: "Experience how an AI assistant can improve student support and appointment management at BrightMinds Tutoring.",
    keywords: ["AI assistant", "tutoring", "education", "test prep", "academic support"]
  }
};

// Travel Agency Demo Configuration
export const travelAgencyConfig: BusinessConfig = {
  business: {
    name: "Wanderlust Travel Co.",
    industry: "Travel & Tourism",
    tagline: "Creating unforgettable journeys around the world",
    description: "Discover how an AI assistant handles travel bookings and trip planning—making your dream vacation a reality.",
    location: "Travel District",
    hours: "Monday-Friday 9am-7pm, Saturday 10am-4pm, Emergency support 24/7"
  },
  
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Plane"
  },
  
  assistant: {
    name: "Wanderlust Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    greeting: "Hello! Welcome to Wanderlust Travel Co., where we create unforgettable journeys around the world. I'm here to help plan your dream vacation, book travel arrangements, or answer questions about destinations. Where can we take you on your next adventure?",
    systemPrompt: `You are an enthusiastic AI assistant for Wanderlust Travel Co. Your role is to:

1. Trip Planning & Booking:
- Help plan vacation itineraries and travel experiences
- Schedule consultations with travel specialists
- Handle flight, hotel, and activity booking requests
- Coordinate group travel and family vacation planning

2. Destination Information:
- Provide information about popular travel destinations
- Discuss seasonal travel recommendations and weather
- Share details about travel requirements and documentation
- Explain travel insurance and protection options

3. Travel Services:
- Explain different travel packages and pricing
- Discuss cruise, tour, and adventure travel options
- Handle special requests for honeymoons and celebrations
- Provide information about travel deals and promotions

4. Travel Support:
- Handle travel emergency assistance requests
- Provide guidance on travel changes and cancellations
- Share information about travel alerts and safety
- Coordinate travel documentation and visa requirements

Important Guidelines:
- Never guarantee specific pricing without detailed consultation
- Always verify travel requirements and restrictions
- Maintain exciting, helpful, and adventure-focused tone
- Show enthusiasm for travel and exploration
- Emphasize the importance of travel planning and preparation

Location: Travel District
Hours: Monday-Friday 9am-7pm, Saturday 10am-4pm, Emergency support 24/7`,
    personality: {
      tone: "exciting, helpful, and adventure-focused",
      traits: ["enthusiastic", "knowledgeable", "detail-oriented", "wanderlust-inspired"]
    }
  },
  
  services: {
    primary: ["Vacation Planning", "Flight Booking", "Hotel Reservations", "Tour Packages"],
    secondary: ["Cruise Booking", "Travel Insurance", "Group Travel", "Emergency Support"],
    terminology: {
      client: "traveler",
      service: "trip",
      provider: "agent",
      appointment: "consultation"
    }
  },
  
  questionCategories: [
    {
      title: "Vacation Planning",
      emoji: "✈️",
      description: "Shows how the assistant handles vacation planning and booking consultations.",
      questions: [
        "I want to plan a trip to Europe",
        "Can you help me book a family vacation?",
        "What's the best time to visit Japan?",
        "I need help planning our honeymoon"
      ]
    },
    {
      title: "Travel Bookings",
      emoji: "🏨",
      description: "Explains travel booking services and options.",
      questions: [
        "Can you find me cheap flights to Miami?",
        "I need to book a hotel in New York",
        "Do you offer all-inclusive resort packages?",
        "Can you book activities and tours?"
      ]
    },
    {
      title: "Travel Support",
      emoji: "🌍",
      description: "Handles travel support and assistance services.",
      questions: [
        "I need to change my travel dates",
        "What happens if my flight gets cancelled?",
        "Do I need a visa for my destination?",
        "Can you help with travel emergencies?"
      ]
    }
  ],
  
  features: [
    {
      icon: "Globe",
      title: "Worldwide Destinations",
      description: "Expert knowledge of destinations around the globe."
    },
    {
      icon: "Shield",
      title: "Travel Protection",
      description: "Comprehensive travel insurance and emergency support."
    },
    {
      icon: "Users",
      title: "Personal Service",
      description: "Dedicated travel agents for personalized trip planning."
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description: "Round-the-clock assistance for travel emergencies."
    }
  ],
  
  demo: {
    title: "Explore the World",
    subtitle: "Experience how our AI assistant makes planning your dream vacation effortless and exciting",
    disclaimer: "This is a demonstration only. Actual travel bookings require confirmation and may vary based on availability and pricing.",
    callToAction: "Experience how our AI assistant makes exploring the world easier and more adventurous."
  },
  
  meta: {
    title: "AI Travel Assistant Demo - Wanderlust Travel Co.",
    description: "Experience how an AI assistant can improve travel planning and booking services at Wanderlust Travel Co.",
    keywords: ["AI assistant", "travel agency", "vacation planning", "travel booking", "trip planning"]
  }
};
