import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';
import { getVoiceId } from './constants';

// 1. Driving School
export const drivingSchoolConfig: BusinessConfig = {
  business: {
    name: "SafeDrive Academy",
    industry: "Driving School",
    tagline: "Building confident, safe drivers for life",
    description: "Professional driving instruction for learners of all ages with flexible scheduling and experienced instructors.",
    location: "Metro Area",
    hours: "Monday-Saturday 7am-8pm, Sunday 9am-5pm"
  },
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Car"
  },
  assistant: {
    name: "SafeDrive Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling SafeDrive Academy. I'm here to help you schedule driving lessons, answer questions about our courses, or discuss instructor availability. How can I assist you today?",
    systemPrompt: `You are a friendly AI assistant for SafeDrive Academy driving school. Your role is to:

1. Course Information & Booking:
- Explain beginner, intermediate, and advanced driving courses
- Book lessons with certified instructors (1-hour or 2-hour sessions)
- Discuss package deals (10-lesson, 20-lesson, 30-lesson packages)
- Explain theory test preparation and road test preparation
- Share pricing: $50/hour individual, $400 for 10-lesson package
- Confirm student age requirements (minimum 15.5 years with permit)

2. Scheduling & Logistics:
- Arrange flexible lesson times across weekdays, evenings, and weekends
- Explain pickup/dropoff service within service area
- Discuss instructor preferences and matching process
- Schedule road test appointments and practice sessions
- Confirm vehicle availability (dual-control cars)

3. Student Support:
- Explain what to bring to first lesson (permit, ID)
- Address nervous student concerns with reassurance
- Describe lesson structure and learning progression
- Discuss progress tracking and parent communication
- Explain cancellation policy (24-hour notice required)

Important Guidelines:
- Emphasize safety-first approach and certified instructors
- Maintain encouraging, patient tone for nervous learners
- Never guarantee test pass rates
- Always confirm student has valid learner's permit
- Highlight flexible scheduling and pickup service

Location: Serving Metro Area with pickup service
Hours: Monday-Saturday 7am-8pm, Sunday 9am-5pm`,
    personality: {
      tone: "encouraging, patient, and professional",
      traits: ["supportive", "reliable", "safety-focused", "organized"]
    }
  },
  services: {
    primary: [
      "Beginner driving lessons",
      "Road test preparation",
      "Theory test prep",
      "Defensive driving courses",
      "Package deals"
    ],
    secondary: [
      "Highway driving lessons",
      "Parallel parking training",
      "Night driving instruction",
      "Refresher courses"
    ],
    terminology: {
      client: "student",
      service: "lesson",
      provider: "instructor",
      appointment: "lesson"
    }
  },
  questionCategories: [
    {
      title: "Course Information",
      emoji: "🚗",
      description: "Learn about driving courses, packages, and pricing options.",
      questions: [
        "What driving courses do you offer?",
        "How much does a lesson cost?",
        "Do you offer package deals?",
        "Can you help me prepare for my road test?"
      ]
    },
    {
      title: "Scheduling & Logistics",
      emoji: "📅",
      description: "Book lessons and arrange convenient pickup times.",
      questions: [
        "Can I schedule a lesson for this weekend?",
        "Do you pick up students?",
        "What are your evening lesson times?",
        "Can I choose my instructor?"
      ]
    }
  ],
  features: [
    {
      icon: "Shield",
      title: "Certified Instructors",
      description: "All instructors are professionally certified with years of teaching experience."
    },
    {
      icon: "Calendar",
      title: "Flexible Scheduling",
      description: "Book lessons that fit your schedule, including evenings and weekends."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles student inquiries and lesson scheduling",
    disclaimer: "This is a demo version showing how AI can streamline driving school operations and student support.",
    callToAction: "See how our AI assistant helps students book lessons and get information about our courses."
  },
  meta: {
    title: "AI Phone Assistant Demo - SafeDrive Academy",
    description: "Experience how an AI phone assistant improves student communication and lesson scheduling for driving schools.",
    keywords: ["AI assistant", "driving school", "lesson booking", "student support", "driver education"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['driving lessons', 'road test', 'driver education', 'teen drivers', 'DMV prep'],
  searchKeywords: ['driving', 'driver', 'lessons', 'road test', 'permit', 'license', 'DMV', 'student driver'],
  availability: 'business-hours'
};

// 2. Music Lessons Studio
export const musicLessonsConfig: BusinessConfig = {
  business: {
    name: "Harmony Music Studio",
    industry: "Music Lessons",
    tagline: "Nurturing musical talent at every level",
    description: "Professional music instruction for piano, guitar, violin, drums, and voice with qualified teachers and flexible programs.",
    location: "Arts District",
    hours: "Monday-Friday 2pm-9pm, Saturday 9am-6pm, Sunday 10am-4pm"
  },
  branding: {
    primaryColor: "purple",
    accentColor: "purple",
    iconName: "Music"
  },
  assistant: {
    name: "Harmony Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Harmony Music Studio. I'm here to help you schedule music lessons, discuss instrument options, or answer questions about our programs. How can I help you today?",
    systemPrompt: `You are an enthusiastic AI assistant for Harmony Music Studio. Your role is to:

1. Lesson Booking & Programs:
- Schedule lessons for piano, guitar, violin, drums, and voice
- Explain beginner, intermediate, and advanced programs
- Discuss lesson formats: 30-minute ($40), 45-minute ($55), 60-minute ($70)
- Share package pricing: 4-lesson monthly packages with 10% discount
- Confirm age groups: children (ages 5+), teens, adults, seniors
- Explain group classes vs. private instruction options

2. Student Placement & Goals:
- Assess student experience level and musical goals
- Match students with appropriate teachers
- Discuss practice expectations and materials needed
- Explain recital opportunities and performance programs
- Share information about music theory classes

3. Studio Information:
- Describe studio facilities and practice rooms
- Explain instrument rental/purchase guidance
- Discuss trial lesson policy (one discounted trial available)
- Share cancellation policy (24-hour notice, 2 make-ups per term)
- Explain family discount (15% off second student)

Important Guidelines:
- Show enthusiasm for music education at all levels
- Emphasize qualified, patient teachers
- Never pressure students into specific instruments
- Always offer trial lesson for new students
- Highlight performance opportunities and recitals

Location: Arts District studio with parking
Hours: Monday-Friday 2pm-9pm, Saturday 9am-6pm, Sunday 10am-4pm`,
    personality: {
      tone: "enthusiastic, encouraging, and knowledgeable",
      traits: ["passionate", "supportive", "creative", "patient"]
    }
  },
  services: {
    primary: [
      "Piano lessons",
      "Guitar lessons",
      "Violin lessons",
      "Drum lessons",
      "Voice lessons"
    ],
    secondary: [
      "Music theory classes",
      "Group ensembles",
      "Recital preparation",
      "Instrument selection guidance"
    ],
    terminology: {
      client: "student",
      service: "lesson",
      provider: "teacher",
      appointment: "lesson"
    }
  },
  questionCategories: [
    {
      title: "Instrument & Program Options",
      emoji: "🎹",
      description: "Explore available instruments and lesson programs.",
      questions: [
        "What instruments do you teach?",
        "Do you offer lessons for beginners?",
        "Can adults take lessons?",
        "What's the difference between 30 and 60-minute lessons?"
      ]
    },
    {
      title: "Pricing & Scheduling",
      emoji: "💰",
      description: "Learn about lesson costs and scheduling options.",
      questions: [
        "How much do piano lessons cost?",
        "Do you offer package deals?",
        "Can I schedule weekend lessons?",
        "Is there a trial lesson available?"
      ]
    }
  ],
  features: [
    {
      icon: "Award",
      title: "Qualified Teachers",
      description: "All instructors have music degrees and extensive teaching experience."
    },
    {
      icon: "Users",
      title: "All Ages Welcome",
      description: "Programs tailored for children, teens, adults, and seniors."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles student inquiries and lesson scheduling",
    disclaimer: "This is a demo version showing how AI can enhance music studio communication and enrollment.",
    callToAction: "Discover how our AI assistant helps students explore instruments and book their first lesson."
  },
  meta: {
    title: "AI Phone Assistant Demo - Harmony Music Studio",
    description: "Experience how an AI phone assistant streamlines music lesson inquiries and student enrollment.",
    keywords: ["AI assistant", "music lessons", "piano", "guitar", "voice lessons", "music education"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['music lessons', 'piano', 'guitar', 'voice', 'instrument instruction'],
  searchKeywords: ['music', 'piano', 'guitar', 'violin', 'drums', 'voice', 'singing', 'lessons', 'teacher'],
  availability: 'business-hours'
};

// 3. Dance Studio
export const danceStudioConfig: BusinessConfig = {
  business: {
    name: "Elevation Dance Studio",
    industry: "Dance Studio",
    tagline: "Where passion meets precision",
    description: "Professional dance instruction in ballet, jazz, hip-hop, contemporary, and more for all ages and skill levels.",
    location: "Downtown Arts Center",
    hours: "Monday-Friday 3pm-9pm, Saturday-Sunday 9am-5pm"
  },
  branding: {
    primaryColor: "pink",
    accentColor: "pink",
    iconName: "Drama"
  },
  assistant: {
    name: "Elevation Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Elevation Dance Studio. I'm here to help you register for classes, discuss dance styles, or answer questions about our programs. How can I assist you today?",
    systemPrompt: `You are an energetic AI assistant for Elevation Dance Studio. Your role is to:

1. Class Registration & Scheduling:
- Register students for ballet, jazz, hip-hop, contemporary, tap, and ballroom
- Explain age-appropriate classes: Tiny Dancers (3-5), Youth (6-12), Teen (13-17), Adult (18+)
- Share class levels: Beginner, Intermediate, Advanced, Pre-Professional
- Discuss class schedule: weekday evenings and weekend daytime
- Explain pricing: $20 drop-in, $75 monthly (1 class/week), $140 monthly (unlimited)
- Share registration process and trial class policy

2. Program Information:
- Describe different dance styles and their benefits
- Explain competitive team opportunities (audition required)
- Discuss performance opportunities and annual recital
- Share dress code and what to wear to class
- Explain progression path from beginner to advanced

3. Studio Facilities & Policies:
- Describe studio spaces, changing rooms, and viewing area
- Explain attendance and make-up class policies
- Discuss family discount (20% off second student)
- Share injury prevention and safe dance practices
- Explain recital costs and commitment ($150 recital fee)

Important Guidelines:
- Match enthusiasm to student's excitement about dance
- Emphasize fun, fitness, and artistic expression
- Never pressure students into competitive programs
- Always recommend appropriate level based on experience
- Highlight inclusive, supportive studio culture

Location: Downtown Arts Center with free parking
Hours: Monday-Friday 3pm-9pm, Saturday-Sunday 9am-5pm`,
    personality: {
      tone: "energetic, welcoming, and inspiring",
      traits: ["enthusiastic", "supportive", "creative", "inclusive"]
    }
  },
  services: {
    primary: [
      "Ballet classes",
      "Jazz dance",
      "Hip-hop classes",
      "Contemporary dance",
      "Tap dance"
    ],
    secondary: [
      "Competitive dance teams",
      "Private choreography",
      "Performance preparation",
      "Adult beginner classes"
    ],
    terminology: {
      client: "student",
      service: "class",
      provider: "instructor",
      appointment: "class"
    }
  },
  questionCategories: [
    {
      title: "Dance Styles & Classes",
      emoji: "💃",
      description: "Explore different dance styles and class options.",
      questions: [
        "What dance styles do you teach?",
        "Do you have classes for young children?",
        "Can beginners join your classes?",
        "What's the difference between jazz and contemporary?"
      ]
    },
    {
      title: "Registration & Pricing",
      emoji: "📋",
      description: "Learn about enrollment, pricing, and schedules.",
      questions: [
        "How much do dance classes cost?",
        "Can I try a class before committing?",
        "Do you have weekend classes?",
        "Is there a family discount?"
      ]
    }
  ],
  features: [
    {
      icon: "Sparkles",
      title: "Multiple Dance Styles",
      description: "Ballet, jazz, hip-hop, contemporary, tap, and ballroom classes available."
    },
    {
      icon: "Star",
      title: "Performance Opportunities",
      description: "Annual recital and showcase opportunities for all students."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles class inquiries and registration",
    disclaimer: "This is a demo version showing how AI can streamline dance studio enrollment and student support.",
    callToAction: "See how our AI assistant helps students find the perfect dance class and register easily."
  },
  meta: {
    title: "AI Phone Assistant Demo - Elevation Dance Studio",
    description: "Experience how an AI phone assistant enhances dance studio communication and class registration.",
    keywords: ["AI assistant", "dance studio", "ballet", "hip-hop", "dance classes", "dance education"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['dance classes', 'ballet', 'hip-hop', 'contemporary', 'youth dance'],
  searchKeywords: ['dance', 'ballet', 'jazz', 'hip-hop', 'contemporary', 'tap', 'classes', 'recital', 'performance'],
  availability: 'business-hours'
};

// 4. Martial Arts Dojo
export const martialArtsConfig: BusinessConfig = {
  business: {
    name: "Dragon Spirit Martial Arts",
    industry: "Martial Arts Dojo",
    tagline: "Building character through discipline and respect",
    description: "Traditional martial arts instruction in karate, taekwondo, and jiu-jitsu with focus on discipline, fitness, and self-defense.",
    location: "East Valley",
    hours: "Monday-Friday 4pm-9pm, Saturday 9am-3pm"
  },
  branding: {
    primaryColor: "red",
    accentColor: "red",
    iconName: "Trophy"
  },
  assistant: {
    name: "Dragon Spirit Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Dragon Spirit Martial Arts. I'm here to help you register for classes, discuss our martial arts programs, or answer questions about training. How can I assist you today?",
    systemPrompt: `You are a respectful AI assistant for Dragon Spirit Martial Arts. Your role is to:

1. Program Registration & Information:
- Register students for karate, taekwondo, and Brazilian jiu-jitsu programs
- Explain age divisions: Little Dragons (4-6), Youth (7-12), Teen (13-17), Adult (18+)
- Share belt ranking system and testing schedule (every 3 months)
- Discuss class frequency: 2x/week ($120/month), 3x/week ($160/month), unlimited ($200/month)
- Explain trial week offer (3 classes for $30)
- Describe family programs and sibling discounts (20% off second student)

2. Training Philosophy & Benefits:
- Emphasize character development: discipline, respect, confidence, focus
- Explain physical benefits: fitness, flexibility, coordination, strength
- Discuss self-defense skills and situational awareness
- Share tournament and competition opportunities (optional)
- Describe belt progression and achievement milestones
- Explain traditional values and modern training methods

3. Dojo Information & Policies:
- Describe facility, equipment, and training areas
- Explain uniform requirements (gi provided with enrollment)
- Share attendance expectations and make-up class policy
- Discuss safety protocols and supervised training
- Explain parent observation area and family involvement

Important Guidelines:
- Show respect for martial arts traditions and discipline
- Emphasize character development alongside physical training
- Never oversell self-defense capabilities
- Always assess student goals and recommend appropriate program
- Highlight inclusive, supportive community atmosphere

Location: East Valley facility with ample parking
Hours: Monday-Friday 4pm-9pm, Saturday 9am-3pm`,
    personality: {
      tone: "respectful, disciplined, and encouraging",
      traits: ["focused", "supportive", "traditional", "motivating"]
    }
  },
  services: {
    primary: [
      "Karate classes",
      "Taekwondo instruction",
      "Brazilian Jiu-Jitsu",
      "Kids martial arts",
      "Adult training programs"
    ],
    secondary: [
      "Self-defense workshops",
      "Tournament preparation",
      "Belt testing",
      "Private lessons"
    ],
    terminology: {
      client: "student",
      service: "class",
      provider: "instructor",
      appointment: "class"
    }
  },
  questionCategories: [
    {
      title: "Programs & Training",
      emoji: "🥋",
      description: "Learn about martial arts styles and training programs.",
      questions: [
        "What martial arts styles do you teach?",
        "Do you have classes for young children?",
        "How long does it take to earn a black belt?",
        "What are the benefits of martial arts training?"
      ]
    },
    {
      title: "Enrollment & Pricing",
      emoji: "🏆",
      description: "Discuss class schedules, pricing, and trial offers.",
      questions: [
        "How much do classes cost?",
        "Can I try a class before joining?",
        "What days do you have classes?",
        "Do you offer family discounts?"
      ]
    }
  ],
  features: [
    {
      icon: "Heart",
      title: "Character Development",
      description: "Focus on discipline, respect, and confidence building alongside physical training."
    },
    {
      icon: "Users",
      title: "Family Programs",
      description: "Classes for all ages from Little Dragons (4+) to adult training programs."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles enrollment and program inquiries",
    disclaimer: "This is a demo version showing how AI can support martial arts school operations and student communication.",
    callToAction: "Discover how our AI assistant helps families learn about our programs and start their martial arts journey."
  },
  meta: {
    title: "AI Phone Assistant Demo - Dragon Spirit Martial Arts",
    description: "Experience how an AI phone assistant streamlines martial arts school inquiries and student enrollment.",
    keywords: ["AI assistant", "martial arts", "karate", "taekwondo", "jiu-jitsu", "self-defense", "kids classes"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['martial arts', 'karate', 'self-defense', 'discipline', 'youth fitness'],
  searchKeywords: ['martial arts', 'karate', 'taekwondo', 'jiu-jitsu', 'self-defense', 'dojo', 'black belt', 'kids'],
  availability: 'business-hours'
};

// 5. SAT/ACT Test Prep
export const testPrepConfig: BusinessConfig = {
  business: {
    name: "Summit Test Prep",
    industry: "Test Preparation",
    tagline: "Elevating scores, opening doors",
    description: "Expert SAT, ACT, and college admissions test preparation with proven strategies and personalized instruction.",
    location: "Academic Center",
    hours: "Monday-Friday 3pm-8pm, Saturday-Sunday 9am-6pm"
  },
  branding: {
    primaryColor: "indigo",
    accentColor: "indigo",
    iconName: "GraduationCap"
  },
  assistant: {
    name: "Summit Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Summit Test Prep. I'm here to help you schedule test prep sessions, discuss our programs, or answer questions about SAT and ACT preparation. How can I assist you today?",
    systemPrompt: `You are a knowledgeable AI assistant for Summit Test Prep. Your role is to:

1. Program Information & Enrollment:
- Explain SAT and ACT prep programs (group classes and private tutoring)
- Discuss comprehensive course (12 weeks, $1,200) vs. crash course (4 weeks, $500)
- Share private tutoring rates ($80/hour, packages available)
- Explain diagnostic testing and personalized study plans
- Describe online and in-person class options
- Share success rates: average 150-point SAT increase, 4-point ACT increase

2. Test Preparation Strategy:
- Explain test format, timing, and scoring for SAT/ACT
- Discuss content areas: Math, Reading, Writing, Science (ACT)
- Share test-taking strategies and time management techniques
- Explain practice test schedule (weekly full-length tests)
- Discuss score goals and college admission requirements
- Provide test registration guidance and timeline

3. Student Support & Resources:
- Explain access to online practice materials and video lessons
- Discuss homework expectations and practice schedules
- Share college planning guidance and application support
- Explain progress tracking and parent communication
- Describe small group sizes (max 8 students) for personalized attention

Important Guidelines:
- Focus on proven strategies and realistic score improvements
- Never guarantee specific score increases
- Emphasize hard work and consistent practice
- Recommend appropriate program based on student needs and timeline
- Highlight experienced instructors with high test scores

Location: Academic Center with study spaces
Hours: Monday-Friday 3pm-8pm, Saturday-Sunday 9am-6pm`,
    personality: {
      tone: "knowledgeable, motivating, and results-focused",
      traits: ["strategic", "encouraging", "analytical", "supportive"]
    }
  },
  services: {
    primary: [
      "SAT preparation",
      "ACT preparation",
      "Private tutoring",
      "Group classes",
      "Diagnostic testing"
    ],
    secondary: [
      "College planning guidance",
      "Practice test administration",
      "Online prep courses",
      "Score analysis"
    ],
    terminology: {
      client: "student",
      service: "session",
      provider: "instructor",
      appointment: "session"
    }
  },
  questionCategories: [
    {
      title: "Test Prep Programs",
      emoji: "📚",
      description: "Learn about SAT/ACT preparation options and strategies.",
      questions: [
        "What's the difference between SAT and ACT prep?",
        "How long is your test prep course?",
        "Do you offer private tutoring?",
        "What's your average score improvement?"
      ]
    },
    {
      title: "Enrollment & Scheduling",
      emoji: "🎯",
      description: "Discuss program enrollment, pricing, and class schedules.",
      questions: [
        "How much does test prep cost?",
        "When do your next classes start?",
        "Can I take classes online?",
        "Do you offer a diagnostic test?"
      ]
    }
  ],
  features: [
    {
      icon: "TrendingUp",
      title: "Proven Results",
      description: "Average 150-point SAT increase and 4-point ACT improvement with our programs."
    },
    {
      icon: "BookOpen",
      title: "Comprehensive Materials",
      description: "Access to online practice materials, video lessons, and full-length practice tests."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles test prep inquiries and enrollment",
    disclaimer: "This is a demo version showing how AI can streamline test prep enrollment and student support.",
    callToAction: "See how our AI assistant helps students understand test prep options and enroll in the right program."
  },
  meta: {
    title: "AI Phone Assistant Demo - Summit Test Prep",
    description: "Experience how an AI phone assistant enhances test prep center communication and student enrollment.",
    keywords: ["AI assistant", "SAT prep", "ACT prep", "test preparation", "college admissions", "tutoring"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['SAT prep', 'ACT prep', 'test preparation', 'college admissions', 'tutoring'],
  searchKeywords: ['SAT', 'ACT', 'test prep', 'college', 'admissions', 'tutoring', 'score', 'exam'],
  availability: 'business-hours'
};

// 6. Language School
export const languageSchoolConfig: BusinessConfig = {
  business: {
    name: "WorldSpeak Language Academy",
    industry: "Language School",
    tagline: "Connect globally, communicate confidently",
    description: "Immersive language instruction in Spanish, French, Mandarin, German, and more with native-speaking teachers.",
    location: "International District",
    hours: "Monday-Friday 9am-9pm, Saturday 9am-5pm"
  },
  branding: {
    primaryColor: "green",
    accentColor: "green",
    iconName: "Globe"
  },
  assistant: {
    name: "WorldSpeak Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling WorldSpeak Language Academy. I'm here to help you enroll in language classes, discuss our programs, or answer questions about learning a new language. How can I assist you today?",
    systemPrompt: `You are a multilingual-friendly AI assistant for WorldSpeak Language Academy. Your role is to:

1. Course Information & Enrollment:
- Register students for Spanish, French, Mandarin, German, Italian, Japanese, and Arabic
- Explain proficiency levels: Beginner (A1-A2), Intermediate (B1-B2), Advanced (C1-C2)
- Discuss group classes ($250/month, 2x/week) vs. private lessons ($60/hour)
- Share immersion programs and conversation clubs (included with enrollment)
- Explain placement testing and level assessment (free)
- Describe class sizes: small groups (max 10 students) for interaction

2. Learning Programs & Methods:
- Explain communicative approach and immersion techniques
- Discuss business language courses and professional certification prep
- Share cultural events and language exchange opportunities
- Explain online and in-person class options
- Describe accelerated programs and intensive courses
- Discuss exam preparation (DELE, DELF, HSK, TestDaF)

3. Student Support & Resources:
- Explain access to online learning platform and mobile app
- Discuss homework expectations and practice schedules
- Share native-speaking teacher qualifications
- Explain progress tracking and proficiency certificates
- Describe study abroad partnership programs

Important Guidelines:
- Emphasize practical communication skills over grammar-only learning
- Recommend appropriate level based on student experience
- Highlight native-speaking teachers and cultural immersion
- Never promise fluency timelines (varies by student)
- Always offer free placement test for new students

Location: International District with cultural center
Hours: Monday-Friday 9am-9pm, Saturday 9am-5pm`,
    personality: {
      tone: "welcoming, culturally aware, and encouraging",
      traits: ["patient", "enthusiastic", "knowledgeable", "inclusive"]
    }
  },
  services: {
    primary: [
      "Spanish classes",
      "French instruction",
      "Mandarin Chinese",
      "German courses",
      "Private language tutoring"
    ],
    secondary: [
      "Business language courses",
      "Exam preparation",
      "Conversation clubs",
      "Cultural events"
    ],
    terminology: {
      client: "student",
      service: "class",
      provider: "instructor",
      appointment: "class"
    }
  },
  questionCategories: [
    {
      title: "Language Programs",
      emoji: "🌍",
      description: "Explore language options and learning programs.",
      questions: [
        "What languages do you teach?",
        "Do you have beginner Spanish classes?",
        "Are your teachers native speakers?",
        "How do I know which level is right for me?"
      ]
    },
    {
      title: "Classes & Pricing",
      emoji: "💬",
      description: "Learn about class schedules, formats, and pricing.",
      questions: [
        "How much do group classes cost?",
        "Do you offer private lessons?",
        "Can I take classes online?",
        "When do new sessions start?"
      ]
    }
  ],
  features: [
    {
      icon: "Users",
      title: "Native Speaking Teachers",
      description: "Learn from qualified native speakers with cultural expertise and teaching experience."
    },
    {
      icon: "MessageCircle",
      title: "Immersive Learning",
      description: "Communicative approach with conversation clubs and cultural events included."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles enrollment and language program inquiries",
    disclaimer: "This is a demo version showing how AI can streamline language school operations and student support.",
    callToAction: "Discover how our AI assistant helps students find the right language program and enroll easily."
  },
  meta: {
    title: "AI Phone Assistant Demo - WorldSpeak Language Academy",
    description: "Experience how an AI phone assistant enhances language school communication and student enrollment.",
    keywords: ["AI assistant", "language school", "Spanish classes", "French lessons", "language learning", "ESL"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['language learning', 'Spanish', 'French', 'Mandarin', 'ESL', 'multilingual'],
  searchKeywords: ['language', 'Spanish', 'French', 'Mandarin', 'German', 'Italian', 'classes', 'learn', 'fluency'],
  availability: 'business-hours'
};

// 7. Art School
export const artSchoolConfig: BusinessConfig = {
  business: {
    name: "Canvas & Clay Art School",
    industry: "Art School",
    tagline: "Unleash your creative potential",
    description: "Comprehensive art instruction in painting, drawing, sculpture, ceramics, and digital art for all ages and skill levels.",
    location: "Arts Quarter",
    hours: "Tuesday-Friday 1pm-8pm, Saturday-Sunday 10am-6pm"
  },
  branding: {
    primaryColor: "orange",
    accentColor: "orange",
    iconName: "Palette"
  },
  assistant: {
    name: "Canvas & Clay Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling Canvas & Clay Art School. I'm here to help you register for art classes, discuss our programs, or answer questions about our workshops. How can I assist you today?",
    systemPrompt: `You are a creative AI assistant for Canvas & Clay Art School. Your role is to:

1. Class Registration & Programs:
- Register students for painting, drawing, sculpture, ceramics, and digital art
- Explain age groups: Young Artists (6-12), Teen Studio (13-17), Adult Classes (18+)
- Discuss skill levels: Beginner Foundations, Intermediate Techniques, Advanced Studio
- Share class formats: weekly classes ($180/month), workshops ($75-150), open studio ($25/session)
- Explain term schedule: 8-week sessions, 4 terms per year
- Describe portfolio development programs for college-bound students

2. Medium & Technique Information:
- Explain different mediums: acrylics, oils, watercolor, charcoal, clay, digital
- Discuss technique classes: figure drawing, landscape painting, portrait, abstract
- Share specialized workshops: printmaking, mixed media, art history
- Explain equipment and materials (provided for classes, list available)
- Describe studio facilities and equipment access

3. Artistic Development & Support:
- Discuss individual artistic goals and interests
- Explain instructor expertise and professional backgrounds
- Share exhibition opportunities and student showcases (quarterly)
- Describe critique sessions and feedback process
- Explain supply lists and art materials guidance

Important Guidelines:
- Encourage artistic exploration and creative expression
- Emphasize supportive, non-judgmental learning environment
- Never criticize student skill level or artistic choices
- Always recommend appropriate class based on experience and interests
- Highlight community, exhibitions, and creative growth

Location: Arts Quarter with dedicated studio spaces
Hours: Tuesday-Friday 1pm-8pm, Saturday-Sunday 10am-6pm`,
    personality: {
      tone: "creative, encouraging, and inspiring",
      traits: ["artistic", "supportive", "enthusiastic", "patient"]
    }
  },
  services: {
    primary: [
      "Painting classes",
      "Drawing instruction",
      "Sculpture workshops",
      "Ceramics classes",
      "Digital art courses"
    ],
    secondary: [
      "Portfolio development",
      "Open studio sessions",
      "Private lessons",
      "Art exhibitions"
    ],
    terminology: {
      client: "student",
      service: "class",
      provider: "instructor",
      appointment: "class"
    }
  },
  questionCategories: [
    {
      title: "Art Classes & Mediums",
      emoji: "🎨",
      description: "Explore art classes and creative mediums offered.",
      questions: [
        "What types of art classes do you offer?",
        "Do you teach painting for beginners?",
        "Can I try ceramics without experience?",
        "Do you offer digital art classes?"
      ]
    },
    {
      title: "Registration & Scheduling",
      emoji: "🖌️",
      description: "Learn about enrollment, pricing, and class schedules.",
      questions: [
        "How much do art classes cost?",
        "When does the next session start?",
        "Do you have weekend classes?",
        "Are materials included in the class fee?"
      ]
    }
  ],
  features: [
    {
      icon: "Sparkles",
      title: "Multiple Art Forms",
      description: "Painting, drawing, sculpture, ceramics, and digital art classes available."
    },
    {
      icon: "Award",
      title: "Student Exhibitions",
      description: "Quarterly showcases and exhibition opportunities for all students."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles enrollment and art program inquiries",
    disclaimer: "This is a demo version showing how AI can streamline art school operations and student communication.",
    callToAction: "See how our AI assistant helps aspiring artists find the perfect class and begin their creative journey."
  },
  meta: {
    title: "AI Phone Assistant Demo - Canvas & Clay Art School",
    description: "Experience how an AI phone assistant enhances art school communication and class enrollment.",
    keywords: ["AI assistant", "art classes", "painting", "drawing", "ceramics", "art school", "creative education"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['art classes', 'painting', 'drawing', 'ceramics', 'creative arts'],
  searchKeywords: ['art', 'painting', 'drawing', 'sculpture', 'ceramics', 'digital art', 'classes', 'workshop'],
  availability: 'business-hours'
};

// 8. Coding Bootcamp
export const codingBootcampConfig: BusinessConfig = {
  business: {
    name: "CodeLaunch Academy",
    industry: "Coding Bootcamp",
    tagline: "Launch your tech career in weeks, not years",
    description: "Intensive coding bootcamp offering full-stack web development, data science, and mobile app development programs.",
    location: "Tech Hub Downtown",
    hours: "Monday-Friday 9am-6pm (classes run evenings/weekends)"
  },
  branding: {
    primaryColor: "cyan",
    accentColor: "cyan",
    iconName: "Code"
  },
  assistant: {
    name: "CodeLaunch Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling CodeLaunch Academy. I'm here to help you explore our coding bootcamp programs, discuss enrollment, or answer questions about launching your tech career. How can I assist you today?",
    systemPrompt: `You are a tech-savvy AI assistant for CodeLaunch Academy. Your role is to:

1. Program Information & Enrollment:
- Explain bootcamp tracks: Full-Stack Web Dev, Data Science, Mobile App Development
- Discuss program formats: Full-time (12 weeks, $14,000), Part-time (24 weeks, $12,000)
- Share curriculum: JavaScript/React, Python/Django, or Swift/iOS depending on track
- Explain prerequisites: basic computer literacy, pre-course prep work required
- Describe application process: coding assessment, interview, enrollment
- Share financing options: upfront payment, monthly installments, income share agreements

2. Career Preparation & Outcomes:
- Explain career services: resume building, portfolio development, mock interviews
- Share job placement rate: 85% within 6 months of graduation
- Discuss hiring partner network and job placement support
- Explain capstone projects and portfolio building
- Share average graduate salary ranges by role
- Describe mentorship and career coaching included

3. Learning Experience & Support:
- Explain immersive, project-based learning approach
- Discuss instructor qualifications (working developers with 5+ years experience)
- Share class sizes: small cohorts (max 20 students) for personalized attention
- Explain pair programming and collaborative learning
- Describe technical support and tutoring hours
- Share alumni network and continued learning resources

Important Guidelines:
- Emphasize career transformation and practical skills
- Never guarantee job placement or specific salaries
- Assess student commitment level and career goals
- Recommend appropriate track based on interests and background
- Highlight intensive nature and time commitment required
- Always mention free intro workshop for interested students

Location: Tech Hub Downtown with modern learning labs
Hours: Monday-Friday 9am-6pm (classes run evenings/weekends)`,
    personality: {
      tone: "energetic, tech-savvy, and motivating",
      traits: ["innovative", "supportive", "results-focused", "practical"]
    }
  },
  services: {
    primary: [
      "Full-Stack Web Development",
      "Data Science bootcamp",
      "Mobile App Development",
      "Career services",
      "Job placement support"
    ],
    secondary: [
      "Portfolio development",
      "Mock interviews",
      "Networking events",
      "Alumni mentorship"
    ],
    terminology: {
      client: "student",
      service: "program",
      provider: "instructor",
      appointment: "class"
    }
  },
  questionCategories: [
    {
      title: "Bootcamp Programs",
      emoji: "💻",
      description: "Learn about coding tracks and program formats.",
      questions: [
        "What coding languages do you teach?",
        "How long is the bootcamp?",
        "What's the difference between full-time and part-time?",
        "Do I need coding experience to apply?"
      ]
    },
    {
      title: "Career & Outcomes",
      emoji: "🚀",
      description: "Discuss job placement, career services, and outcomes.",
      questions: [
        "What's your job placement rate?",
        "Do you help with job searching?",
        "How much do graduates typically earn?",
        "What companies hire your graduates?"
      ]
    }
  ],
  features: [
    {
      icon: "Briefcase",
      title: "Career Services",
      description: "Comprehensive job placement support with 85% placement rate within 6 months."
    },
    {
      icon: "Users",
      title: "Expert Instructors",
      description: "Learn from working developers with 5+ years of industry experience."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles bootcamp inquiries and enrollment",
    disclaimer: "This is a demo version showing how AI can streamline coding bootcamp enrollment and student support.",
    callToAction: "Discover how our AI assistant helps aspiring developers learn about our programs and start their tech career."
  },
  meta: {
    title: "AI Phone Assistant Demo - CodeLaunch Academy",
    description: "Experience how an AI phone assistant enhances coding bootcamp communication and student enrollment.",
    keywords: ["AI assistant", "coding bootcamp", "web development", "data science", "career change", "tech education"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['coding bootcamp', 'web development', 'data science', 'career change', 'tech training'],
  searchKeywords: ['coding', 'bootcamp', 'web development', 'programming', 'JavaScript', 'Python', 'career', 'tech'],
  availability: 'business-hours'
};

// 9. Swimming Lessons
export const swimmingLessonsConfig: BusinessConfig = {
  business: {
    name: "AquaSkills Swim School",
    industry: "Swimming Lessons",
    tagline: "Building water confidence and lifelong skills",
    description: "Professional swim instruction for infants through adults with heated indoor pool and certified instructors.",
    location: "Aquatic Center",
    hours: "Monday-Friday 9am-8pm, Saturday-Sunday 8am-4pm"
  },
  branding: {
    primaryColor: "blue",
    accentColor: "blue",
    iconName: "Waves"
  },
  assistant: {
    name: "AquaSkills Assistant",
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(),
    greeting: "Hello! Thank you for calling AquaSkills Swim School. I'm here to help you register for swim lessons, discuss our programs, or answer questions about water safety. How can I assist you today?",
    systemPrompt: `You are a friendly AI assistant for AquaSkills Swim School. Your role is to:

1. Program Registration & Levels:
- Register students for age-appropriate programs: Parent & Tot (6mo-3yr), Preschool (3-5), Youth (6-12), Teen/Adult (13+)
- Explain skill levels: Water Discovery, Water Explorer, Swimmer, Advanced Swimmer
- Share lesson formats: group classes ($120/month, 4 lessons), semi-private ($180/month), private ($70/lesson)
- Discuss class duration: 30 minutes (ages 3-5), 45 minutes (ages 6+)
- Explain stroke development: freestyle, backstroke, breaststroke, butterfly
- Describe swim team preparation and competitive swimming pathway

2. Facility & Safety Information:
- Describe heated indoor pool (maintained at 84°F year-round)
- Explain small class sizes: max 4-6 students per instructor
- Share instructor certifications: Lifeguard, CPR, Water Safety Instructor
- Discuss safety protocols and parent observation areas
- Explain equipment provided (kickboards, noodles) vs. required swimwear
- Share pool rules and swimmer etiquette

3. Student Progress & Support:
- Explain skill assessment and level placement (complimentary)
- Discuss progress reports and skill badges
- Address water fear and anxiety with compassionate approach
- Share make-up lesson policy (one per month)
- Explain advancement criteria and testing process
- Describe family swim times and practice opportunities

Important Guidelines:
- Emphasize water safety as primary goal alongside skill development
- Show patience and understanding for water-anxious students/parents
- Never rush students through levels
- Always recommend trial lesson for new students (half-price)
- Highlight year-round warm water comfort
- Stress importance of consistent attendance for skill building

Location: Indoor Aquatic Center with heated pool and viewing area
Hours: Monday-Friday 9am-8pm, Saturday-Sunday 8am-4pm`,
    personality: {
      tone: "encouraging, patient, and safety-focused",
      traits: ["supportive", "reliable", "calm", "enthusiastic"]
    }
  },
  services: {
    primary: [
      "Infant swim lessons",
      "Youth swim instruction",
      "Adult swim lessons",
      "Stroke development",
      "Water safety training"
    ],
    secondary: [
      "Swim team prep",
      "Private lessons",
      "Lifeguard training",
      "Competitive swimming"
    ],
    terminology: {
      client: "student",
      service: "lesson",
      provider: "instructor",
      appointment: "lesson"
    }
  },
  questionCategories: [
    {
      title: "Swim Programs & Levels",
      emoji: "🏊",
      description: "Learn about age groups, skill levels, and lesson formats.",
      questions: [
        "What age can my child start swim lessons?",
        "How do you determine which level my child should be in?",
        "Do you teach adults who never learned to swim?",
        "How long does it take to learn to swim?"
      ]
    },
    {
      title: "Scheduling & Pricing",
      emoji: "💧",
      description: "Discuss class schedules, pricing, and registration.",
      questions: [
        "How much do swim lessons cost?",
        "What days and times do you have classes?",
        "Can I try a lesson before committing?",
        "Do you have weekend lessons?"
      ]
    }
  ],
  features: [
    {
      icon: "Thermometer",
      title: "Heated Indoor Pool",
      description: "Year-round comfortable swimming in heated pool maintained at 84°F."
    },
    {
      icon: "Shield",
      title: "Certified Instructors",
      description: "All instructors are lifeguard and CPR certified Water Safety Instructors."
    }
  ],
  demo: {
    title: "Try the Demo",
    subtitle: "Experience how our AI assistant handles enrollment and swim program inquiries",
    disclaimer: "This is a demo version showing how AI can streamline swim school operations and family communication.",
    callToAction: "See how our AI assistant helps families find the right swim lessons and register with confidence."
  },
  meta: {
    title: "AI Phone Assistant Demo - AquaSkills Swim School",
    description: "Experience how an AI phone assistant enhances swim school communication and lesson registration.",
    keywords: ["AI assistant", "swim lessons", "swimming", "water safety", "kids swimming", "swim school"]
  },
  category: BUSINESS_CATEGORIES.EDUCATION,
  tags: ['swim lessons', 'water safety', 'kids swimming', 'infant swim', 'stroke development'],
  searchKeywords: ['swim', 'swimming', 'lessons', 'pool', 'water safety', 'infant', 'kids', 'adult', 'learn'],
  availability: 'business-hours'
};
