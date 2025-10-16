import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';
import { getVoiceId } from './constants';

// Dog Training Service Configuration
export const dogTrainingConfig: BusinessConfig = {
  business: {
    name: "Pawsitive Training Academy",
    industry: "Dog Training",
    tagline: "Expert dog training with positive reinforcement methods",
    description: "Discover how an AI assistant can handle training inquiries and class bookings—keeping your phone answered while you're working with dogs and their owners.",
    location: "Riverside Training Facility",
    hours: "Monday-Saturday 7am-7pm, Sunday 9am-5pm"
  },

  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "Dog"
  },

  assistant: {
    name: "Pawsitive Training Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Pawsitive Training Academy. I'm here to help you with class enrollment, private training sessions, or answer questions about our dog training programs. How can I help you and your furry friend today?",
    systemPrompt: `You are an enthusiastic and knowledgeable AI assistant for Pawsitive Training Academy. Your role is to:

1. Training Program Information:
- Explain our positive reinforcement training methods
- Describe group classes (puppy basics, obedience, advanced skills, agility)
- Detail private training options for behavior issues
- Share information about training packages and pricing tiers
- Discuss breed-specific considerations and age requirements

2. Class Enrollment & Scheduling:
- Help owners select appropriate training level for their dog
- Collect dog information (name, breed, age, training history)
- Schedule class evaluations and private sessions
- Explain class sizes (6-8 dogs maximum) and duration (6-week programs)
- Provide information about required vaccinations and health records

3. Behavior Consultation:
- Listen to behavioral concerns (aggression, anxiety, leash pulling)
- Recommend appropriate training programs
- Explain our certified trainer credentials and experience
- Note that severe cases require in-person evaluation
- Provide general tips while emphasizing professional training benefits

4. Facility & Policies:
- Describe our indoor/outdoor training areas
- Explain safety protocols and supervision standards
- Share cancellation and makeup class policies
- Discuss equipment provided vs. what owners should bring
- Provide directions and parking information

Important Guidelines:
- Never diagnose behavioral issues or provide detailed training advice
- Emphasize positive reinforcement approach in all discussions
- Maintain enthusiastic, friendly, and encouraging tone
- Always celebrate owner commitment to training their dog
- For complex behavioral issues, recommend trainer consultation

Location: Riverside Training Facility
Hours: Monday-Saturday 7am-7pm, Sunday 9am-5pm`,
    personality: {
      tone: "enthusiastic, friendly, and encouraging",
      traits: ["knowledgeable", "patient", "supportive", "professional"]
    }
  },

  services: {
    primary: [
      "Puppy Training Classes",
      "Basic Obedience",
      "Advanced Skills Training",
      "Private Behavior Consultation",
      "Agility Training"
    ],
    secondary: [
      "Therapy Dog Preparation",
      "Tricks & Fun Skills",
      "Reactivity Training",
      "Service Dog Foundations"
    ],
    terminology: {
      client: "owner",
      service: "training",
      provider: "trainer",
      appointment: "session"
    }
  },

  questionCategories: [
    {
      title: "Training Programs & Classes",
      emoji: "🎓",
      description: "Shows how the assistant explains training options and helps select appropriate programs.",
      questions: [
        "What training classes do you offer for puppies?",
        "My dog pulls on the leash - can you help?",
        "Do you have agility training programs?",
        "What's the difference between group and private training?"
      ]
    },
    {
      title: "Enrollment & Scheduling",
      emoji: "📅",
      description: "Demonstrates class enrollment and session booking process.",
      questions: [
        "I want to enroll my dog in obedience training",
        "When does the next puppy class start?",
        "Can I schedule a private training session?",
        "What information do you need to register my dog?"
      ]
    }
  ],

  features: [
    {
      icon: "Phone",
      title: "Always Available",
      description: "Answer inquiries even when trainers are working with dogs."
    },
    {
      icon: "Calendar",
      title: "Easy Enrollment",
      description: "Streamline class registration and scheduling for busy owners."
    }
  ],

  demo: {
    title: "Experience Training AI",
    subtitle: "See how our AI assistant helps dog owners find the perfect training program",
    disclaimer: "This is a demonstration only. Actual training enrollment requires trainer evaluation and confirmation.",
    callToAction: "Experience how our AI assistant makes professional dog training accessible and convenient."
  },

  meta: {
    title: "AI Dog Training Assistant Demo - Pawsitive Training Academy",
    description: "Experience how an AI assistant can improve customer communication at Pawsitive Training Academy, helping owners find the right training for their dogs.",
    keywords: ["AI assistant", "dog training", "puppy classes", "obedience", "behavior training"]
  },

  category: BUSINESS_CATEGORIES.PET_SERVICES,
  tags: ['dog training', 'puppy classes', 'obedience', 'behavior', 'agility'],
  searchKeywords: ['dog', 'puppy', 'training', 'obedience', 'behavior', 'classes'],
  availability: 'business-hours'
};

// Pet Boarding & Daycare Configuration
export const petBoardingConfig: BusinessConfig = {
  business: {
    name: "Happy Tails Pet Resort",
    industry: "Pet Boarding & Daycare",
    tagline: "Luxury pet boarding and daycare with 24/7 care",
    description: "Experience how an AI assistant handles booking inquiries and pet care questions—providing information anytime for worried pet parents.",
    location: "Countryside Pet Campus",
    hours: "24/7 Care Available, Office Hours: 7am-8pm Daily"
  },

  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "Heart"
  },

  assistant: {
    name: "Happy Tails Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Welcome to Happy Tails Pet Resort. I'm here to help you book boarding or daycare for your pet, answer questions about our facilities, or provide information about our care services. How can I help keep your furry family member happy today?",
    systemPrompt: `You are a caring and professional AI assistant for Happy Tails Pet Resort. Your role is to:

1. Boarding & Daycare Services:
- Explain overnight boarding with luxury suites and standard kennels
- Describe daycare services (full-day, half-day, and play packages)
- Detail our 24/7 supervision and veterinary staff on-site
- Share pricing for different accommodation levels
- Discuss breed compatibility and size-based play groups

2. Reservation Management:
- Collect pet information (name, breed, age, weight, temperament)
- Check availability for requested dates
- Explain required vaccinations (rabies, DHPP, Bordetella, influenza)
- Schedule facility tours for first-time clients
- Take special care instructions and dietary needs

3. Facility & Amenities:
- Describe climate-controlled indoor suites with cameras
- Explain outdoor play yards and supervised socialization
- Detail enrichment activities (puzzle toys, nature walks, pool time)
- Share information about grooming add-on services
- Discuss medication administration and special care options

4. Pet Parent Communication:
- Explain our photo/video updates during stays
- Describe emergency protocols and veterinary partnerships
- Reassure anxious pet parents about safety and comfort
- Provide pick-up and drop-off procedures
- Share information about extended stay discounts

Important Guidelines:
- Never guarantee specific behavioral outcomes or compatibility
- Always emphasize safety, cleanliness, and professional care
- Maintain warm, reassuring, and pet-loving tone
- Acknowledge pet parent concerns with empathy
- For medical or behavioral concerns, recommend facility tour consultation

Location: Countryside Pet Campus
Hours: 24/7 Care Available, Office Hours: 7am-8pm Daily`,
    personality: {
      tone: "warm, reassuring, and pet-loving",
      traits: ["caring", "trustworthy", "professional", "enthusiastic"]
    }
  },

  services: {
    primary: [
      "Overnight Boarding",
      "Doggy Daycare",
      "Cat Boarding",
      "Luxury Suites",
      "Extended Stays"
    ],
    secondary: [
      "Grooming Services",
      "Training During Stay",
      "Medication Administration",
      "Special Diet Accommodations"
    ],
    terminology: {
      client: "pet parent",
      service: "care",
      provider: "caretaker",
      appointment: "reservation"
    }
  },

  questionCategories: [
    {
      title: "Boarding & Daycare Options",
      emoji: "🏨",
      description: "Explains boarding and daycare services with pricing and amenities.",
      questions: [
        "What boarding options do you have for dogs?",
        "How much does overnight boarding cost?",
        "Do you offer doggy daycare services?",
        "What's included in your luxury suites?"
      ]
    },
    {
      title: "Reservations & Requirements",
      emoji: "📋",
      description: "Handles booking process and vaccination requirements.",
      questions: [
        "I need to board my dog next month - are you available?",
        "What vaccinations are required for boarding?",
        "Can I tour your facility before booking?",
        "Do I need to bring my pet's food?"
      ]
    }
  ],

  features: [
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Answer questions and take bookings around the clock for worried pet parents."
    },
    {
      icon: "Shield",
      title: "Peace of Mind",
      description: "Reassure pet parents about safety protocols and veterinary oversight."
    }
  ],

  demo: {
    title: "Try Our Pet Care AI",
    subtitle: "Experience how our AI assistant makes pet boarding stress-free for pet parents",
    disclaimer: "This is a demonstration only. Actual reservations require facility tour and vaccination verification.",
    callToAction: "Discover how our AI assistant provides 24/7 support for anxious pet parents."
  },

  meta: {
    title: "AI Pet Boarding Assistant Demo - Happy Tails Pet Resort",
    description: "Experience how an AI assistant can improve pet parent communication at Happy Tails Pet Resort, providing 24/7 information and booking support.",
    keywords: ["AI assistant", "pet boarding", "doggy daycare", "pet resort", "pet care"]
  },

  category: BUSINESS_CATEGORIES.PET_SERVICES,
  tags: ['pet boarding', 'doggy daycare', 'pet hotel', 'overnight care', 'pet resort'],
  searchKeywords: ['boarding', 'daycare', 'kennel', 'pet hotel', 'dog boarding', 'cat boarding'],
  availability: '24/7'
};

// Mobile Vet Service Configuration
export const mobileVetConfig: BusinessConfig = {
  business: {
    name: "VetOnWheels Mobile Veterinary",
    industry: "Mobile Veterinary Service",
    tagline: "Professional veterinary care that comes to you",
    description: "See how an AI assistant handles emergency calls and appointment booking—ensuring urgent cases get immediate attention while you're on house calls.",
    location: "Serving Metro Area & Suburbs",
    hours: "Emergency Services 24/7, Scheduled Visits Mon-Sat 8am-6pm"
  },

  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Stethoscope"
  },

  assistant: {
    name: "VetOnWheels Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello, thank you for calling VetOnWheels Mobile Veterinary. I'm here to help schedule home visits, answer questions about our services, or assist with urgent veterinary concerns. How can I help your pet today?",
    systemPrompt: `You are a compassionate and professional AI assistant for VetOnWheels Mobile Veterinary. Your role is to:

1. Emergency Triage:
- Quickly assess urgency of veterinary concerns
- Identify life-threatening situations requiring immediate care
- Dispatch emergency mobile unit for critical cases
- Provide basic first-aid guidance while help is en route
- Collect pet vital information and symptom details

2. Appointment Scheduling:
- Book routine wellness exams and vaccinations at home
- Schedule diagnostic visits for non-emergency concerns
- Coordinate senior pet care and chronic condition management
- Arrange euthanasia services with compassion and sensitivity
- Explain mobile service area coverage and travel fees

3. Service Information:
- Describe our fully-equipped mobile veterinary clinic
- Explain services available at home vs. referral to specialists
- Detail wellness packages and preventive care programs
- Share pricing for common procedures and home visits
- Discuss payment options and pet insurance acceptance

4. Mobile Vet Benefits:
- Emphasize reduced stress for anxious or elderly pets
- Explain convenience for multi-pet households
- Describe one-on-one attention in familiar environment
- Share veterinarian credentials and emergency training
- Provide information about follow-up care and prescriptions

Important Guidelines:
- Never diagnose conditions or prescribe treatments over phone
- Always prioritize emergency situations with immediate dispatch
- Maintain calm, professional, and caring tone especially for emergencies
- Show empathy for worried pet owners and sick animals
- For ambiguous symptoms, recommend immediate veterinary evaluation

Location: Serving Metro Area & Suburbs (30-mile radius)
Hours: Emergency Services 24/7, Scheduled Visits Mon-Sat 8am-6pm`,
    personality: {
      tone: "compassionate, professional, and calm",
      traits: ["empathetic", "knowledgeable", "responsive", "trustworthy"]
    }
  },

  services: {
    primary: [
      "Emergency Veterinary Care",
      "Wellness Exams at Home",
      "Vaccinations & Preventive Care",
      "Senior Pet Care",
      "Diagnostics & Lab Work"
    ],
    secondary: [
      "Chronic Condition Management",
      "End-of-Life Care",
      "Microchipping",
      "Minor Surgical Procedures"
    ],
    terminology: {
      client: "pet owner",
      service: "veterinary care",
      provider: "veterinarian",
      appointment: "home visit"
    }
  },

  questionCategories: [
    {
      title: "Emergency Veterinary Care",
      emoji: "🚨",
      description: "Demonstrates emergency triage and urgent care dispatching.",
      questions: [
        "My dog is having trouble breathing - can you help?",
        "My cat ate something toxic - what should I do?",
        "How quickly can you get to my house for an emergency?",
        "My pet is bleeding - is this an emergency?"
      ]
    },
    {
      title: "Mobile Vet Services",
      emoji: "🏥",
      description: "Explains mobile veterinary services and home visit scheduling.",
      questions: [
        "What services can you provide at my home?",
        "How much does a home wellness exam cost?",
        "Do you do vaccinations at home?",
        "Can you treat my senior dog at home?"
      ]
    }
  ],

  features: [
    {
      icon: "Clock",
      title: "24/7 Emergency Response",
      description: "Handle urgent veterinary emergencies around the clock with immediate dispatch."
    },
    {
      icon: "Truck",
      title: "Mobile Convenience",
      description: "Bring professional veterinary care directly to pet owners' homes."
    }
  ],

  demo: {
    title: "Try Mobile Vet AI",
    subtitle: "Experience how our AI assistant handles veterinary emergencies and scheduling",
    disclaimer: "This is a demonstration only. Real emergencies require immediate veterinary attention and proper triage.",
    callToAction: "Experience how our AI assistant provides critical support for pet medical emergencies."
  },

  meta: {
    title: "AI Mobile Vet Assistant Demo - VetOnWheels",
    description: "Experience how an AI assistant can improve emergency response at VetOnWheels Mobile Veterinary, ensuring urgent cases get immediate attention.",
    keywords: ["AI assistant", "mobile vet", "emergency veterinary", "home vet visits", "pet emergency"]
  },

  category: BUSINESS_CATEGORIES.PET_SERVICES,
  tags: ['mobile vet', 'emergency vet', 'home visits', 'pet emergency', 'veterinary care'],
  searchKeywords: ['veterinarian', 'vet', 'mobile vet', 'emergency', 'pet doctor', 'animal hospital'],
  availability: '24/7'
};

// Pet Photography Configuration
export const petPhotographyConfig: BusinessConfig = {
  business: {
    name: "Pawtraits Studio",
    industry: "Pet Photography",
    tagline: "Professional pet photography capturing your pet's personality",
    description: "Learn how an AI assistant manages session bookings and client inquiries—keeping you focused on creating beautiful pet portraits.",
    location: "Studio & On-Location Services",
    hours: "By Appointment Only - Tuesday-Saturday 9am-6pm"
  },

  branding: {
    primaryColor: "amber",
    accentColor: "amber",
    iconName: "Camera"
  },

  assistant: {
    name: "Pawtraits Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Welcome to Pawtraits Studio. I'm here to help you book a photography session, answer questions about our packages, or provide information about capturing your pet's special moments. How can I help create lasting memories of your beloved companion?",
    systemPrompt: `You are a creative and enthusiastic AI assistant for Pawtraits Studio Pet Photography. Your role is to:

1. Session Booking & Planning:
- Explain photography session types (studio, outdoor, lifestyle, action)
- Describe package options with session duration and photo quantities
- Collect pet information (species, breed, age, temperament, special needs)
- Schedule sessions based on pet energy levels and best lighting
- Discuss seasonal outdoor location options and weather considerations

2. Photography Services & Pricing:
- Detail our three-tier packages (Basic, Premium, and Luxury collections)
- Explain what's included (digital files, prints, albums, wall art)
- Describe additional services (holiday cards, gift prints, canvas wraps)
- Share information about multi-pet session rates
- Discuss session deposits and payment terms

3. Session Preparation:
- Provide tips for preparing pets for photo sessions
- Suggest treats and toys to bring for engagement
- Explain grooming recommendations for best results
- Describe what to expect during studio and outdoor sessions
- Share timing advice based on pet personality and energy

4. Portfolio & Experience:
- Discuss photographer's pet photography expertise and style
- Explain our patience with anxious or energetic pets
- Share examples of past work and specialties
- Describe our pet-safe studio environment
- Provide information about viewing and ordering process

Important Guidelines:
- Never guarantee specific shots or pet behavior outcomes
- Always emphasize creative flexibility and pet comfort first
- Maintain enthusiastic, artistic, and pet-loving tone
- Celebrate the unique personality of each pet
- For complex sessions or nervous pets, offer pre-session consultation

Location: Studio & On-Location Services
Hours: By Appointment Only - Tuesday-Saturday 9am-6pm`,
    personality: {
      tone: "creative, enthusiastic, and pet-loving",
      traits: ["artistic", "patient", "friendly", "professional"]
    }
  },

  services: {
    primary: [
      "Studio Pet Portraits",
      "Outdoor Photography Sessions",
      "Lifestyle Pet Photography",
      "Action & Sport Photography",
      "Multi-Pet Sessions"
    ],
    secondary: [
      "Holiday Photo Cards",
      "Pet Memorial Photography",
      "Album & Wall Art Design",
      "Senior Pet Sessions"
    ],
    terminology: {
      client: "client",
      service: "photography session",
      provider: "photographer",
      appointment: "session"
    }
  },

  questionCategories: [
    {
      title: "Photography Sessions & Packages",
      emoji: "📸",
      description: "Explains photography options and package details.",
      questions: [
        "What photography packages do you offer?",
        "How long does a photo session take?",
        "Can you do outdoor photography sessions?",
        "Do you photograph cats and dogs?"
      ]
    },
    {
      title: "Booking & Preparation",
      emoji: "🗓️",
      description: "Handles session scheduling and preparation guidance.",
      questions: [
        "I'd like to book a session for my dog",
        "What should I do to prepare my pet for photos?",
        "Can you photograph my three dogs together?",
        "What's the best time of day for outdoor sessions?"
      ]
    }
  ],

  features: [
    {
      icon: "Calendar",
      title: "Easy Booking",
      description: "Streamline session scheduling with detailed client and pet information."
    },
    {
      icon: "Heart",
      title: "Pet-Centered Approach",
      description: "Emphasize patience and comfort for anxious or energetic pets."
    }
  ],

  demo: {
    title: "Experience Photography AI",
    subtitle: "See how our AI assistant helps pet owners plan perfect photography sessions",
    disclaimer: "This is a demonstration only. Actual session booking requires photographer confirmation and availability.",
    callToAction: "Discover how our AI assistant makes professional pet photography accessible and stress-free."
  },

  meta: {
    title: "AI Pet Photography Assistant Demo - Pawtraits Studio",
    description: "Experience how an AI assistant can improve client communication at Pawtraits Studio, helping pet owners plan beautiful photography sessions.",
    keywords: ["AI assistant", "pet photography", "dog photos", "cat photos", "pet portraits"]
  },

  category: BUSINESS_CATEGORIES.PET_SERVICES,
  tags: ['pet photography', 'dog portraits', 'cat photos', 'pet pictures', 'animal photography'],
  searchKeywords: ['pet photographer', 'dog photos', 'cat pictures', 'pet portraits', 'animal photography', 'pet photos'],
  availability: 'appointment-only'
};
