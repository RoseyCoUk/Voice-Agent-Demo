# Voice Agent Demo - 100 Business Showcase

A comprehensive demonstration platform showcasing AI voice assistants across 100+ businesses spanning 12 different industries. This application demonstrates the versatility and power of VAPI (Voice AI Platform Integration) with ElevenLabs voice technology.

## Table of Contents
- [Features](#features)
- [Business Categories](#business-categories)
- [Search & Filtering](#search--filtering)
- [Voice Selection](#voice-selection)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Adding New Businesses](#adding-new-businesses)
- [Deployment](#deployment)
- [Technical Stack](#technical-stack)

---

## Features

### Core Capabilities
- **100+ Business Configurations** - Pre-configured AI voice assistants for businesses across 12 different industries
- **Advanced Search** - Fast, debounced search across business names, categories, tags, and keywords
- **Multi-Filter System** - Filter by category and availability with smart AND/OR logic
- **Three Sort Modes** - Sort by relevance, alphabetical name, or category grouping
- **Voice Selection** - Choose between female and male voices with persistent preference storage
- **Full Keyboard Navigation** - Complete keyboard accessibility with visible focus indicators
- **Mobile-Responsive Design** - Optimized layouts for mobile, tablet, and desktop devices
- **WCAG AA Accessibility** - Compliant with accessibility standards including screen reader support
- **Error Boundaries** - Graceful error handling prevents application crashes
- **Configuration Validation** - Built-in validation script ensures data integrity

### User Experience
- **Instant Search Results** - Debounced search with 300ms delay for smooth typing
- **Visual Feedback** - Loading states, hover effects, and clear action indicators
- **Persistent Preferences** - Voice selection and other preferences saved across sessions
- **No Results Handling** - Helpful empty states with suggestions
- **Responsive Touch Targets** - Mobile-optimized button sizes and spacing

---

## Business Categories

The demo includes 99+ businesses distributed across 12 categories:

| Category | Count | Examples |
|----------|-------|----------|
| **Healthcare & Medical** | 20 | Dental Clinic, Physiotherapy, Mental Health Practice, Urgent Care |
| **Legal Services** | 10 | Immigration Law, Divorce Attorney, Personal Injury, Estate Planning |
| **Home & Property** | 10 | HVAC Services, Plumbing, Electrical, Landscaping, Home Inspection |
| **Beauty & Wellness** | 13 | Massage Therapy, Nail Salon, Barbershop, Yoga Studio, Med Spa |
| **Automotive** | 7 | Auto Body Shop, Mobile Mechanic, Tire Service, Windshield Repair |
| **Education & Training** | 9 | Driving School, Music Lessons, Dance Studio, Coding Bootcamp |
| **Professional Services** | 7 | Accounting, Insurance, HR Consulting, Tax Preparation, Notary |
| **Pet Services** | 4 | Veterinary Clinic, Pet Grooming, Dog Training, Pet Photography |
| **Creative & Events** | 1+ | Event Planning, Photography Services |
| **Food & Hospitality** | 2+ | Restaurant Reservations, Catering Services |
| **Technology** | 1+ | IT Support, Software Services |
| **Specialized Services** | 1+ | Translation Services, Financial Advisory |

### Category Icons
Each category features a unique icon from the Lucide React library:
- Healthcare: Stethoscope
- Legal: Scale (Balance)
- Home & Property: Home
- Beauty & Wellness: Sparkles
- Automotive: Car
- Education: GraduationCap
- Professional: Briefcase
- Pet Services: PawPrint
- And more...

---

## Search & Filtering

### Search Functionality
The search bar provides intelligent, fast searching across multiple fields:

**Search Fields:**
- Business names (e.g., "Dental Clinic")
- Categories (e.g., "Healthcare")
- Service tags (e.g., "emergency", "24/7")
- Keywords (e.g., "doctor", "appointment", "urgent")

**Search Features:**
- **Debounced Input** - 300ms delay prevents lag while typing
- **Case-Insensitive** - Search works regardless of capitalization
- **Partial Matching** - "dent" finds "dental", "dentist", etc.
- **Real-Time Results** - Results update as you type
- **Clear Button** - Quick X icon to clear search

**Example Searches:**
```
"dental" → Finds dental clinics, orthodontists
"24/7" → Finds businesses with 24/7 availability
"emergency" → Finds urgent care, emergency services
"pet" → Finds veterinary, grooming, dog training
"legal" → Finds law firms, attorneys, legal services
```

### Filtering Options

**Category Filter:**
- Select one or multiple categories
- Uses OR logic (shows businesses from ANY selected category)
- Shows count for each category
- Clear filter button to reset

**Availability Filter:**
- **24/7** - Always available services
- **Business Hours** - Standard operating hours
- **Appointment Only** - By appointment scheduling

**Combined Filtering:**
- Search + Filters use AND logic
- Example: Search "emergency" + Category "Healthcare" + Availability "24/7" = Healthcare businesses with emergency services available 24/7

### Sort Options

**Relevance** (Default):
- Prioritizes exact matches
- Ranks by search query relevance
- Best for search results

**Name** (Alphabetical):
- A-Z sorting by business name
- Easy to find specific business
- Good for browsing

**Category**:
- Groups businesses by category
- Shows category headers
- Good for exploring industry types

---

## Voice Selection

### Available Voices

The application offers two professional voice options powered by ElevenLabs:

#### Female Voice (Default)
- **Voice ID**: `XrExE9yKIg1WjnnlVkGX`
- **Characteristics**: Professional, clear, friendly tone
- **Best For**: General professional services, healthcare, customer service, hospitality
- **Language Support**: Multilingual capabilities

#### Male Voice
- **Voice ID**: `bIHbv24MWmeRgasZH58o`
- **Characteristics**: Professional, clear, authoritative tone
- **Best For**: Legal services, financial advisory, technical support, automotive
- **Language Support**: Multilingual capabilities

### How to Select Voice

1. **Choose any business** from the selector
2. **Locate the voice selection** above the "Start Call" button
3. **Click your preferred voice**:
   - Female Voice (left button)
   - Male Voice (right button)
4. **Visual confirmation**: Selected voice is highlighted with a checkmark
5. **Start your call** - The selected voice will be used

### Voice Persistence

Your voice preference is automatically saved:
- **LocalStorage** - Stored in browser local storage
- **Persistent** - Remembered after page refresh
- **Cross-Session** - Maintained across browser sessions
- **Immediate Effect** - Next call uses newly selected voice

### Voice Configuration

Voices are centrally configured in `src/config/constants.ts`:

```typescript
export const VOICES = {
  FEMALE: {
    id: 'XrExE9yKIg1WjnnlVkGX',
    name: 'Female Voice',
    description: 'Professional female voice'
  },
  MALE: {
    id: 'bIHbv24MWmeRgasZH58o',
    name: 'Male Voice',
    description: 'Professional male voice'
  }
}
```

You can override the default voice with an environment variable:
```bash
VITE_DEFAULT_VOICE=MALE  # or FEMALE
```

---

## Accessibility

This application is built with accessibility as a core requirement, meeting WCAG AA standards.

### Keyboard Navigation

**Full Keyboard Support:**
- **Tab** - Navigate forward through interactive elements
- **Shift+Tab** - Navigate backward
- **Enter** - Activate buttons and select businesses
- **Arrow Keys** - Navigate dropdown options
- **Escape** - Close modals and dropdowns
- **Space** - Toggle checkboxes and buttons

**Navigation Order:**
1. Search bar
2. Category filter
3. Availability filter
4. Sort options
5. Business cards (in grid order)
6. Voice selection buttons
7. Start Call button

### Screen Reader Support

**Compatible With:**
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

**Accessible Features:**
- All interactive elements properly labeled
- ARIA attributes for dynamic content
- Live regions announce search results
- Button purposes clearly described
- Form labels properly associated
- Focus states announced

### Visual Accessibility

**Color Contrast:**
- All text meets WCAG AA standards (4.5:1 minimum)
- Large text meets 3:1 minimum
- Interactive elements have sufficient contrast
- Focus indicators are clearly visible

**Focus Indicators:**
- Visible focus outline on all interactive elements
- High contrast focus states
- Focus never lost during navigation
- Custom styled for clarity

**Text Scaling:**
- Supports up to 200% text size
- Layout adapts to larger text
- No content truncation
- No horizontal scrolling

### Semantic HTML

- Proper heading hierarchy (h1, h2, h3)
- Landmark regions (header, main, nav, footer)
- Semantic elements (button, a, input)
- Proper list markup (ul, ol, li)
- Valid HTML structure

---

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- VAPI account and API token
- Modern web browser

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Voice-Agent-Demo
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
```

Edit `.env` and add your VAPI token:
```bash
VITE_VAPI_TOKEN=your-vapi-token-here
VITE_DEFAULT_VOICE=FEMALE  # Optional: FEMALE or MALE
```

4. **Validate configurations:**
```bash
npm run validate:configs
```

5. **Start development server:**
```bash
npm run dev
```

6. **Open your browser:**
```
http://localhost:5173
```

---

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Validate all business configurations
npm run validate:configs
```

### Configuration Validation

The project includes a validation script to ensure all business configurations are correct:

```bash
npm run validate:configs
```

**What it checks:**
- All required fields present
- Correct data types (strings, arrays, objects)
- Voice IDs match constants
- Categories match BUSINESS_CATEGORIES enum
- Tags and keywords are non-empty arrays
- No missing or invalid values

**Output:**
```
🔍 Validating business configurations...

✅ healthcare-configs.ts: 20 config(s) valid
✅ legal-configs.ts: 10 config(s) valid
✅ home-services-configs.ts: 10 config(s) valid
...

==================================================
VALIDATION SUMMARY
==================================================
Total configs found: 99
Valid configs: 99
Configs with errors: 0

✅ All configurations are valid!
```

### Development Workflow

1. **Before starting work:**
   - Pull latest changes
   - Run `npm install` to update dependencies
   - Run `npm run validate:configs`

2. **During development:**
   - Use `npm run dev` for hot reload
   - Check console for errors
   - Test on multiple browsers

3. **Before committing:**
   - Run `npm run lint`
   - Run `npm run validate:configs`
   - Test new features manually
   - Update documentation if needed

---

## Project Structure

```
Voice-Agent-Demo/
├── src/
│   ├── config/                      # Business configurations
│   │   ├── business-config.ts       # Type definitions
│   │   ├── categories.ts            # Category constants
│   │   ├── constants.ts             # Voice and app constants
│   │   ├── category-icons.ts        # Icon mappings
│   │   ├── _template-config.ts      # Template for new businesses
│   │   │
│   │   ├── example-configs.ts       # Original 4 businesses (Phase 0)
│   │   ├── additional-configs.ts    # 5 businesses (Phase 1)
│   │   ├── additional-configs-2.ts  # 6 businesses (Phase 1)
│   │   ├── additional-configs-3.ts  # 4 businesses (Phase 1)
│   │   │
│   │   ├── healthcare-configs.ts    # 20 healthcare businesses (Phase 2)
│   │   ├── legal-configs.ts         # 10 legal businesses (Phase 2)
│   │   ├── home-services-configs.ts # 10 home service businesses (Phase 2)
│   │   │
│   │   ├── wellness-beauty-configs.ts # 13 beauty/wellness (Phase 3)
│   │   ├── automotive-configs.ts      # 7 automotive businesses (Phase 3)
│   │   ├── education-configs.ts       # 9 education businesses (Phase 3)
│   │   ├── professional-configs.ts    # 7 professional services (Phase 3)
│   │   └── pet-configs.ts             # 4 pet services (Phase 3)
│   │
│   ├── components/              # React components
│   │   ├── BusinessSelector.tsx # Business selection with search/filters
│   │   ├── Demo.tsx             # Voice call demo interface
│   │   ├── Header.tsx           # App header
│   │   ├── Hero.tsx             # Landing hero section
│   │   ├── Features.tsx         # Features showcase
│   │   ├── Footer.tsx           # App footer
│   │   └── ErrorBoundary.tsx    # Error handling wrapper
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useVoiceSelection.ts # Voice preference management
│   │
│   ├── utils/                   # Utility functions
│   │   ├── search.ts            # Search and debouncing logic
│   │   └── filters.ts           # Filtering and sorting logic
│   │
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts             # Shared types
│   │
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles
│   └── vite-env.d.ts            # Vite type declarations
│
├── scripts/
│   └── validate-configs.js      # Configuration validation script
│
├── public/                      # Static assets
├── dist/                        # Production build output
│
├── .env.example                 # Environment variables template
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── eslint.config.js             # ESLint configuration
│
├── README.md                    # This file
├── TESTING.md                   # Comprehensive testing checklist
├── IMPLEMENTATION_PLAN.md       # Phased implementation documentation
├── SETUP.md                     # Detailed setup instructions
└── TEMPLATE_README.md           # Original template documentation
```

### Configuration Files by Phase

**Phase 0 - Original (4 businesses):**
- `example-configs.ts` - Osteopathy, Legal, Restaurant, Tech Support

**Phase 1 - Expansion (15 businesses):**
- `additional-configs.ts` - 5 businesses
- `additional-configs-2.ts` - 6 businesses
- `additional-configs-3.ts` - 4 businesses

**Phase 2 - Major Addition (40 businesses):**
- `healthcare-configs.ts` - 20 healthcare businesses
- `legal-configs.ts` - 10 legal businesses
- `home-services-configs.ts` - 10 home service businesses

**Phase 3 - Completion to 100 (40 businesses):**
- `wellness-beauty-configs.ts` - 13 beauty & wellness
- `automotive-configs.ts` - 7 automotive businesses
- `education-configs.ts` - 9 education & training
- `professional-configs.ts` - 7 professional services
- `pet-configs.ts` - 4 pet services

**Total: 99 businesses** (with room for 1 more to reach exactly 100)

---

## Adding New Businesses

### Using the Template

1. **Copy the template:**
```bash
cp src/config/_template-config.ts src/config/my-business-config.ts
```

2. **Fill in all fields:**
```typescript
import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';
import { getVoiceId } from './constants';

export const myBusinessConfig: BusinessConfig = {
  business: {
    name: 'Your Business Name',
    industry: 'Industry Type',
    tagline: 'Brief description',
    description: 'Detailed description...'
  },
  assistant: {
    name: 'Assistant Name',
    vapiToken: import.meta.env.VITE_VAPI_TOKEN || '',
    voiceId: getVoiceId(), // Respects user's voice preference
    systemPrompt: `Professional receptionist prompt...`,
    personality: 'Professional, friendly'
  },
  branding: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      accent: '#60A5FA'
    },
    iconName: 'Building' // Lucide icon name
  },
  meta: {
    title: 'Business Name - AI Voice Agent Demo',
    description: 'Demo description'
  },
  category: BUSINESS_CATEGORIES.HEALTHCARE, // Choose appropriate
  tags: ['tag1', 'tag2', 'tag3'],
  searchKeywords: ['keyword1', 'keyword2'],
  availability: 'business-hours' // or '24/7' or 'appointment-only'
};
```

3. **Add to App.tsx:**
```typescript
// Import your new config
import { myBusinessConfig } from './config/my-business-config';

// Add to availableBusinesses object
const availableBusinesses = {
  // ... existing businesses
  'my_business': myBusinessConfig,
};
```

4. **Validate:**
```bash
npm run validate:configs
```

5. **Test:**
```bash
npm run dev
```

### Writing System Prompts

**Best Practices:**
- Be specific about services offered
- Include common customer questions
- Add industry-specific terminology
- Mention unique selling points
- Set boundaries (no medical/legal advice if applicable)
- Include escalation procedures
- Keep tone consistent with business type

**Example Structure:**
```
You are a professional receptionist for [Business Name].

Key responsibilities:
1. Greet callers warmly
2. Answer questions about services
3. Help with appointment scheduling
4. Provide pricing information

Common questions to address:
- Hours of operation
- Services offered
- Pricing and insurance
- Appointment availability
- Location and parking

Services offered:
- Service 1: Description
- Service 2: Description
- Service 3: Description

Important notes:
- Always be professional and courteous
- Do not provide medical/legal advice
- Offer to schedule appointments
- Provide business contact information
```

### Choosing Categories

Select from `BUSINESS_CATEGORIES`:
- `HEALTHCARE` - Healthcare & Medical
- `LEGAL` - Legal Services
- `HOME_PROPERTY` - Home & Property
- `BEAUTY_WELLNESS` - Beauty & Wellness
- `AUTOMOTIVE` - Automotive
- `EDUCATION` - Education & Training
- `PROFESSIONAL` - Professional Services
- `PET_SERVICES` - Pet Services
- `EVENTS` - Creative & Events
- `FOOD` - Food & Hospitality
- `TECHNOLOGY` - Technology
- `SPECIALIZED` - Specialized Services

### Choosing Icons

Browse [Lucide Icons](https://lucide.dev/icons/) and use the exact icon name:
- Common: `Phone`, `Mail`, `MapPin`, `Clock`, `User`
- Healthcare: `Heart`, `Stethoscope`, `Pill`, `Activity`
- Professional: `Briefcase`, `FileText`, `Calculator`
- Services: `Wrench`, `Scissors`, `Car`, `Home`

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

**Recommended Platforms:**
- **Netlify** - Automatic deployments from Git
- **Vercel** - Optimized for React applications
- **Cloudflare Pages** - Fast global CDN
- **AWS Amplify** - Full-featured hosting

### Environment Variables for Production

Ensure these are set in your hosting platform:
```bash
VITE_VAPI_TOKEN=your-production-vapi-token
VITE_DEFAULT_VOICE=FEMALE  # Optional
```

### Pre-Deployment Checklist

- [ ] All configs pass validation (`npm run validate:configs`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Environment variables configured
- [ ] Test on multiple devices and browsers
- [ ] Check mobile responsiveness
- [ ] Verify voice calls work
- [ ] Test search and filters
- [ ] Validate accessibility

---

## Technical Stack

### Core Technologies
- **React 18** - UI framework with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Voice & Communication
- **VAPI (Voice API)** - Voice AI platform integration
- **@vapi-ai/web** - VAPI Web SDK (v1.4.1)
- **@daily-co/daily-js** - WebRTC communication (v0.48.0)
- **ElevenLabs** - Voice synthesis

### UI Components & Icons
- **Lucide React** - Icon library (v0.344.0)
- **Custom Components** - Built with React and Tailwind

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Documentation

- **[TESTING.md](./TESTING.md)** - Comprehensive testing checklist for all features
- **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** - Phased implementation documentation
- **[SETUP.md](./SETUP.md)** - Detailed setup and configuration guide
- **[TEMPLATE_README.md](./TEMPLATE_README.md)** - Original template system documentation

---

## License

This project is proprietary software. All rights reserved.

---

## Support & Contact

For questions, issues, or support:
- Check existing documentation (TESTING.md, SETUP.md)
- Run validation: `npm run validate:configs`
- Review console errors in browser DevTools
- Test in different browsers/devices

---

## Acknowledgments

- **VAPI** - Voice AI platform
- **ElevenLabs** - Voice synthesis technology
- **Lucide** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI framework
- **Vite** - Build tool

---

**Version**: 1.0.0 (Phase 6 Complete)
**Last Updated**: October 2025
**Total Businesses**: 99+
**Categories**: 12
