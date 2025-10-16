# Voice Agent Demo - 100 Business Implementation Plan

## Overview
This plan outlines the phased implementation of expanding the Voice Agent Demo from 20 to 100 businesses, adding advanced search/filtering capabilities, and updating the ElevenLabs voice ID.

## Key Objectives
1. ✅ Implement 80 new business configurations (reaching 100 total)
2. ✅ Add advanced search with category filtering
3. ✅ Change voice ID from `21m00Tcm4TlvDq8ikWAM` to `XrExE9yKIg1WjnnlVkGX`
4. ✅ Improve navigation for better user experience

---

## Phase 0: Pre-Implementation Setup & Voice Verification
**Goal**: Verify voices work and set up configuration (MUST complete before coding!)

### Tasks:
1. **CRITICAL: Verify Voice IDs with ElevenLabs**
   - Test API call with female voice ID `XrExE9yKIg1WjnnlVkGX`
   - Test API call with male voice ID `bIHbv24MWmeRgasZH58o`
   - Confirm both voices support multilingual capabilities
   - Document voice characteristics for team reference:
     - Female: Professional, clear, friendly
     - Male: Professional, clear, authoritative
   - **If either voice fails**: Stop implementation and choose alternatives
   - **Deliverable**: Documented voice test results

3. **Create Environment Example File** (`.env.example`)
   ```bash
   # ElevenLabs Voice Configuration
   # Default voice preference: FEMALE or MALE
   VITE_DEFAULT_VOICE=FEMALE

   # Voice IDs (already configured in constants.ts, but can override here)
   # VITE_FEMALE_VOICE_ID=XrExE9yKIg1WjnnlVkGX
   # VITE_MALE_VOICE_ID=bIHbv24MWmeRgasZH58o

   # VAPI Configuration
   VITE_VAPI_TOKEN=your-vapi-token-here

   # Optional: Override for development
   VITE_API_ENDPOINT=https://api.vapi.ai
   ```
   - Document all required environment variables
   - Include comments explaining each variable
   - Add to version control

4. **Centralize Voice Configuration** (`src/config/constants.ts`)
   ```typescript
   // Note: Using Vite's import.meta.env for environment variables

   // Available voices
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
   } as const;

   // Default voice (can be overridden by environment or user selection)
   export const DEFAULT_VOICE = import.meta.env.VITE_DEFAULT_VOICE || 'FEMALE';
   export const FALLBACK_VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Old Rachel voice

   // Get voice ID by preference
   export const getVoiceId = (preference: 'FEMALE' | 'MALE' = DEFAULT_VOICE) => {
     return VOICES[preference].id;
   };

   // Validate on startup
   if (!DEFAULT_VOICE) {
     console.warn('No default voice configured, using female voice');
   }
   ```
   - Update all configs to use voice selection
   - Add environment variable support for default voice
   - Include fallback mechanism

5. **Create Business Config Template & Prompt Guide** (`src/config/_template-config.ts`)
   ```typescript
   import { BusinessConfig } from './business-config';
   import { BUSINESS_CATEGORIES } from './categories';
   import { getVoiceId } from './constants';

   export const templateBusinessConfig: BusinessConfig = {
     business: {
       name: 'Business Name Here',
       industry: 'Industry Type',
       tagline: 'Brief description of services',
       description: 'Detailed description...'
     },
     assistant: {
       name: 'Assistant Name',
       vapiToken: import.meta.env.VITE_VAPI_TOKEN || '',
       voiceId: getVoiceId(), // Uses user's voice preference
       systemPrompt: `You are a professional receptionist for [Business Name]...

       Key responsibilities:
       1. Greet callers warmly
       2. Answer questions about services
       3. Help with appointment scheduling
       4. Provide pricing information

       Common questions:
       - Hours of operation
       - Services offered
       - Pricing
       - Appointment availability`,
       personality: 'Professional, friendly, helpful'
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
     // NEW FIELDS
     category: BUSINESS_CATEGORIES.HEALTHCARE, // Choose appropriate category
     tags: ['tag1', 'tag2', 'tag3'],
     searchKeywords: ['keyword1', 'keyword2'],
     availability: 'business-hours' // or '24/7' or 'appointment-only'
   };
   ```

   **Prompt Writing Guide:**
   - Be specific about services offered
   - Include common customer questions
   - Add industry-specific terminology
   - Mention unique selling points
   - Keep tone consistent with business type

6. **Simple Config Validation Script** (`scripts/validate-configs.js`)
   ```javascript
   // Medium validation - checks fields and types
   // npm run validate:configs

   const requiredFields = ['business', 'assistant', 'category', 'tags', 'searchKeywords', 'availability'];

   // Validation checks:
   // - All required fields present
   // - Correct data types (strings, arrays, objects)
   // - Voice IDs match constants
   // - Categories match BUSINESS_CATEGORIES
   // - Tags and keywords are non-empty arrays

   // Reports: missing fields, type mismatches, invalid values
   // Simple console output with file:line references
   ```

---

## Phase 1: Infrastructure Setup
**Goal**: Prepare the codebase for scaling to 100 businesses

### Tasks:
1. **Update BusinessConfig Type** (`src/config/business-config.ts`)
   ```typescript
   interface BusinessConfig {
     // Existing fields...
     category: BusinessCategory; // NEW - from categories.ts
     tags: string[]; // NEW - for filtering
     searchKeywords: string[]; // NEW - for search
     availability: 'business-hours' | '24/7' | 'appointment-only'; // NEW
   }
   ```
   - Update type definitions
   - Add JSDoc comments for new fields
   - Export helper types for categories and availability

2. **Manually Update Existing 20 Configs**
   - Open each of the 20 existing business config files
   - Add new required fields using template as reference:
     - `category`: Choose from BUSINESS_CATEGORIES
     - `tags`: Array of 3-5 relevant tags
     - `searchKeywords`: Array of related terms
     - `availability`: 'business-hours' | '24/7' | 'appointment-only'
   - Run `npm run validate:configs` after each file
   - Estimate: 2-3 minutes per config = 40-60 minutes total
   - Commit after all 20 are updated and validated

3. **Create Category Constants** (`src/config/categories.ts`)
   ```typescript
   export const BUSINESS_CATEGORIES = {
     HEALTHCARE: 'Healthcare & Medical',
     LEGAL: 'Legal Services',
     HOME_PROPERTY: 'Home & Property',
     BEAUTY_WELLNESS: 'Beauty & Wellness',
     AUTOMOTIVE: 'Automotive',
     EDUCATION: 'Education & Training',
     PROFESSIONAL: 'Professional Services',
     PET_SERVICES: 'Pet Services',
     EVENTS: 'Creative & Events',
     FOOD: 'Food & Hospitality',
     TECHNOLOGY: 'Technology',
     SPECIALIZED: 'Specialized Services'
   };
   ```

---

## Phase 2: Business Configuration Implementation (Part 1)
**Goal**: Implement first 40 new businesses

### File Structure:
- `src/config/healthcare-configs.ts` (20 businesses)
- `src/config/legal-configs.ts` (10 businesses)
- `src/config/home-services-configs.ts` (10 businesses)

### Healthcare Businesses (healthcare-configs.ts) - 20 total:
1. Physiotherapy Clinic
2. Chiropractor Office
3. Mental Health Practice
4. Optometry Clinic
5. Podiatry Clinic
6. Dermatology Clinic
7. Pediatric Clinic
8. Orthodontist Office
9. Cardiology Practice
10. ENT Specialist
11. Fertility Clinic
12. Pain Management Clinic
13. Urgent Care Center
14. Radiology Center
15. Medical Spa
16. Allergist/Immunologist
17. Rheumatology Clinic
18. Endocrinology Practice
19. Gastroenterology Clinic
20. Neurology Practice

### Legal Services (legal-configs.ts) - 10 total:
1. Immigration Law Firm
2. Divorce Attorney
3. Personal Injury Law
4. Estate Planning Attorney
5. Criminal Defense Attorney
6. Bankruptcy Attorney
7. Employment Law Firm
8. Intellectual Property Law
9. Real Estate Attorney
10. Tax Attorney

### Home & Property Services (home-services-configs.ts) - 10 total:
1. HVAC Services
2. Electrical Contractor
3. Pest Control Service
4. Roofing Company
5. Window & Door Installation
6. Carpet Cleaning Service
7. Home Inspection Service
8. Security System Installation
9. Landscaping Company
10. House Cleaning Service

---

## Phase 3: Business Configuration Implementation (Part 2)
**Goal**: Implement final 40 businesses to reach 100 total

### File Structure:
- `src/config/wellness-beauty-configs.ts` (13 businesses)
- `src/config/automotive-configs.ts` (7 businesses)
- `src/config/education-configs.ts` (9 businesses)
- `src/config/professional-configs.ts` (7 businesses)
- `src/config/pet-configs.ts` (4 businesses)

**Total Phase 3: 13 + 7 + 9 + 7 + 4 = 40 businesses ✓**

### Beauty & Wellness (wellness-beauty-configs.ts) - 13 total:
1. Massage Therapy Clinic
2. Acupuncture Clinic
3. Nutrition Counseling
4. Nail Salon
5. Eyelash Extension Studio
6. Microblading Studio
7. Barber Shop
8. Tanning Salon
9. Float Therapy Center
10. IV Therapy Clinic
11. Cryotherapy Center
12. Yoga Studio
13. Pilates Studio

### Automotive (automotive-configs.ts) - 7 total:
1. Auto Body Shop
2. Transmission Specialist
3. Mobile Mechanic Service
4. Motorcycle Repair Shop
5. Auto Detailing Service
6. Tire & Brake Service
7. Glass Repair/Windshield Service

### Education & Training (education-configs.ts) - 9 total:
1. Driving School
2. Music Lessons Studio
3. Dance Studio
4. Martial Arts Dojo
5. SAT/ACT Test Prep
6. Language School
7. Art School
8. Coding Bootcamp
9. Swimming Lessons

### Professional Services (professional-configs.ts) - 7 total:
1. Insurance Agency
2. HR Consulting Firm
3. Tax Preparation Service
4. Mortgage Broker
5. Private Investigation
6. Notary Public Service
7. Business Consulting

### Pet Services (pet-configs.ts) - 4 total:
1. Dog Training Service
2. Pet Boarding/Daycare
3. Mobile Vet Service
4. Pet Photography

---

## Phase 4: Enhanced Navigation & Voice Selection
**Goal**: Implement advanced search, filtering, and voice selection capabilities

### Tasks:

1. **Create Simple Search Utilities** (`src/utils/search.ts`)
   ```typescript
   // Simple, fast search - no over-engineering
   export const searchBusinesses = (
     businesses: BusinessConfig[],
     query: string
   ) => {
     if (!query || query.length < 2) return businesses;

     const lowerQuery = query.toLowerCase();
     return businesses.filter(b =>
       b.business.name.toLowerCase().includes(lowerQuery) ||
       b.category.toLowerCase().includes(lowerQuery) ||
       b.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
       b.searchKeywords.some(kw => kw.toLowerCase().includes(lowerQuery))
     );
   };

   // Debounced search hook (prevents lag while typing)
   export const useDebouncedSearch = (value: string, delay = 300) => {
     const [debouncedValue, setDebouncedValue] = useState(value);
     useEffect(() => {
       const timer = setTimeout(() => setDebouncedValue(value), delay);
       return () => clearTimeout(timer);
     }, [value, delay]);
     return debouncedValue;
   };
   ```
   - Simple `.includes()` matching (fast for 100 items)
   - Debouncing to prevent lag while typing
   - No fuzzy matching (unnecessary complexity)
   - Search across name, category, tags, keywords

2. **Update BusinessSelector Component** (`src/components/BusinessSelector.tsx`)
   ```typescript
   // Component updates
   - const [searchQuery, setSearchQuery] = useState('');
   + const debouncedQuery = useDebouncedSearch(searchQuery, 300);
   + const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   + const [selectedTags, setSelectedTags] = useState<string[]>([]);
   + const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'category'>('relevance');
   ```
   - Add loading skeleton during search
   - Implement empty state with suggestions
   - Add search result highlighting
   - Show match context (why result appeared)

3. **Implement Filter Logic** (`src/utils/filters.ts`)
   ```typescript
   export const applyFilters = (
     businesses: BusinessConfig[],
     filters: {
       categories: string[],
       tags: string[],
       availability: string[],
       searchQuery: string
     }
   ) => {
     // Apply each filter sequentially
     // Return filtered and sorted results
   };
   ```
   - Category filter (OR logic within categories)
   - Tag filter (OR logic within tags)
   - Availability filter
   - Combine with search results

4. **Add Category Icons Mapping** (`src/config/category-icons.ts`)
   ```typescript
   import { Stethoscope, Scale, Home, ... } from 'lucide-react';

   export const categoryIcons = {
     'Healthcare & Medical': Stethoscope,
     'Legal Services': Scale,
     'Home & Property': Home,
     // ... etc
   };
   ```

5. **Voice Selection Implementation** (`src/hooks/useVoiceSelection.ts`)
   ```typescript
   export const useVoiceSelection = () => {
     const [selectedVoice, setSelectedVoice] = useState<'FEMALE' | 'MALE'>('FEMALE');

     // Load preference from localStorage
     useEffect(() => {
       const saved = localStorage.getItem('voiceAgentDemo_voicePreference');
       if (saved === 'FEMALE' || saved === 'MALE') {
         setSelectedVoice(saved);
       }
     }, []);

     // Save preference when changed
     const changeVoice = (voice: 'FEMALE' | 'MALE') => {
       setSelectedVoice(voice);
       localStorage.setItem('voiceAgentDemo_voicePreference', voice);
     };

     return { selectedVoice, changeVoice, voiceId: getVoiceId(selectedVoice) };
   };
   ```

   **UI Implementation in Demo Component:**
   ```tsx
   // Add voice selector above call button
   <div className="voice-selector mb-4">
     <label className="text-sm font-medium text-gray-700 mb-2 block">
       Select Voice:
     </label>
     <div className="flex gap-3">
       <button
         onClick={() => changeVoice('FEMALE')}
         className={`flex-1 p-3 rounded-lg border-2 transition ${
           selectedVoice === 'FEMALE'
             ? 'border-blue-500 bg-blue-50'
             : 'border-gray-300 hover:border-gray-400'
         }`}
       >
         <div className="flex items-center justify-center gap-2">
           <User className="h-5 w-5" />
           <span>Female Voice</span>
           {selectedVoice === 'FEMALE' && <Check className="h-4 w-4 text-blue-600" />}
         </div>
       </button>
       <button
         onClick={() => changeVoice('MALE')}
         className={`flex-1 p-3 rounded-lg border-2 transition ${
           selectedVoice === 'MALE'
             ? 'border-blue-500 bg-blue-50'
             : 'border-gray-300 hover:border-gray-400'
         }`}
       >
         <div className="flex items-center justify-center gap-2">
           <User className="h-5 w-5" />
           <span>Male Voice</span>
           {selectedVoice === 'MALE' && <Check className="h-4 w-4 text-blue-600" />}
         </div>
       </button>
     </div>
   </div>
   ```

   **Behavior Specification:**
   - Voice selection persists across page reloads (localStorage)
   - When voice is changed, it applies to the next call immediately
   - Visual indicator shows which voice is currently selected
   - Simple two-button toggle interface
   - Placed above the "Start Call" button in the Demo component

---

## Phase 5: UI Polish & Optimization
**Goal**: Polish user experience and optimize performance (NO new businesses - already at 100!)

### Total Business Count Verification:
- **Existing**: 20 businesses
- **Phase 2**: 40 businesses (Healthcare: 20, Legal: 10, Home: 10)
- **Phase 3**: 40 businesses (Wellness: 10, Auto: 5, Education: 8, Professional: 7, Specialized: 10)
- **Total**: **100 businesses ✓** (Goal achieved!)

### Polish Tasks:

1. **UI/UX Enhancements**
   - Add loading states during search
   - Implement smooth transitions between views
   - Add keyboard navigation (arrow keys, Enter to select)
   - Optimize for mobile devices
   - Improve business card hover states

2. **Performance Optimization**
   - Verify search performs well with 100 businesses
   - Ensure smooth scrolling with CSS grid
   - Test on slower devices/connections
   - Optimize images if any

3. **Error Handling**
   - Add fallback for API failures
   - Handle network errors gracefully
   - Show user-friendly error messages
   - Implement voice fallback if primary fails

---

## Phase 6: Validation & Testing
**Goal**: Validate configs and perform manual testing

### Tasks:

1. **Run Config Validation**
   ```bash
   npm run validate:configs
   ```
   - Validates all 100 business configs
   - Checks required fields and types
   - Reports any errors with file:line references
   - Fix any issues found

2. **Manual Testing Checklist**
   - [ ] All 100 businesses appear in selector
   - [ ] Search works (try: "dental", "legal", "24/7")
   - [ ] Category filter works
   - [ ] Voice selection persists after page reload
   - [ ] Female voice works on test call
   - [ ] Male voice works on test call
   - [ ] Mobile responsive (test on phone)
   - [ ] Business cards display correctly
   - [ ] No console errors
   - [ ] Smooth transitions between demos

3. **Test Each Voice on 3 Different Business Types**
   - Healthcare (e.g., Dental Clinic) - both voices
   - Legal (e.g., Divorce Attorney) - both voices
   - Service (e.g., Plumbing) - both voices
   - Verify prompts make sense for each industry

4. **Update App.tsx**
   - Import all new config files
   - Update availableBusinesses object with all 100
   - Verify no import errors
   - Test dev server starts: `npm run dev`

5. **Documentation Update**
   - Update README with:
     - New business count (100)
     - Voice selection feature
     - Search & filter capabilities
     - How to add new businesses (use template)

---

## UI/UX Specifications
**Goal**: Clear visual and functional requirements for new features

### Search Bar Enhancement
```
[🔍] [Search businesses, services, or symptoms...     ]
      ↑ Placeholder updates based on category selected
```
- **Behavior**: Start searching after 3 characters
- **Visual**: Highlight matching text in results
- **Feedback**: Show "Searching..." during debounce
- **Empty state**: "No results for '{query}'. Try 'dental' or 'legal'"

### Category Filter UI
```
[All Categories ▼] [All Availability ▼] [Popular ⭐]
```
- **Multi-select**: Checkboxes in dropdown
- **Counts**: Show number of businesses per category
- **Icons**: Display category icon next to name
- **Clear**: X button when filters active

### Business Card Metadata Display
```
┌─────────────────────────┐
│ [Icon] Business Name    │
│ Category | Available 24/7│
│ Tags: #emergency #walk-in│
└─────────────────────────┘
```

### Acceptance Criteria for Search
- ✅ Returns results quickly (simple .includes() matching)
- ✅ Searches across name, category, tags, and keywords
- ✅ Debounces input (300ms delay prevents lag)
- ✅ Shows "No results" state with helpful message
- ✅ Works on mobile devices
- ✅ Clears search when business is selected

---

## Implementation Order Summary

### Week 1: Setup & Foundation
- **Day 1**: Phase 0 - Voice verification & setup
- **Day 2**: Phase 1 - Infrastructure & types
- **Day 3-5**: Start Phase 2 - Begin first 40 businesses

### Week 2-3: Content Creation
- **Week 2**: Complete Phase 2 (40 businesses)
- **Week 3**: Phase 3 (40 businesses)
  - Use template for consistency
  - Focus on quality prompts

### Week 4: Features & Polish
- **Day 1-2**: Phase 4 - Search & voice selection
- **Day 3-4**: Phase 5 - UI polish & error handling
- **Day 5**: Buffer for any delays

### Week 5: Testing & Buffer
- **Day 1-2**: Phase 6 - Testing & validation
- **Day 3-5**: Buffer week for unexpected issues

**Total: 4-5 weeks (realistic with buffer)**

---

## File Structure After Implementation
```
src/config/
├── business-config.ts (base types & default)
├── categories.ts (category constants)
├── constants.ts (voice configuration)
├── example-configs.ts (original 4)
├── additional-configs.ts (original 5)
├── additional-configs-2.ts (original 6)
├── additional-configs-3.ts (original 4)
├── healthcare-configs.ts (20 new - Phase 2)
├── legal-configs.ts (10 new - Phase 2)
├── home-services-configs.ts (10 new - Phase 2)
├── wellness-beauty-configs.ts (13 new - Phase 3)
├── automotive-configs.ts (7 new - Phase 3)
├── education-configs.ts (9 new - Phase 3)
├── professional-configs.ts (7 new - Phase 3)
└── pet-configs.ts (4 new - Phase 3)

Total: 20 (existing) + 40 (Phase 2) + 40 (Phase 3) = 100 businesses ✓
```

---

## Success Metrics
- ✅ 100 functional business demos
- ✅ Search returns relevant results in <100ms
- ✅ Category filtering reduces results appropriately
- ✅ All demos use new voice ID
- ✅ Mobile-responsive navigation
- ✅ User can find any business within 3 clicks/searches

---

## Developer Quick Reference

### Available Commands
```bash
# Validate all business configs
npm run validate:configs

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. Add your VAPI token: `VITE_VAPI_TOKEN=your-token`
3. (Optional) Set default voice: `VITE_DEFAULT_VOICE=FEMALE` or `MALE`
4. Run `npm install`
5. Run `npm run dev`

### Adding a New Business
1. Copy `src/config/_template-config.ts`
2. Fill in all fields (name, prompts, colors, etc.)
3. Add category, tags, searchKeywords
4. Import and add to `App.tsx` availableBusinesses object
5. Run `npm run validate:configs`
6. Test the demo

### Common Issues
- **Voice not working**: Verify voice IDs in `constants.ts` are correct
- **Config errors**: Run `npm run validate:configs` for details
- **Search not working**: Check tags and searchKeywords are arrays
- **Demo not appearing**: Verify it's added to availableBusinesses in App.tsx

## Notes
- Each business config should have unique, industry-specific prompts
- Maintain consistent structure across all configs
- Test each phase before moving to the next
- Scripts auto-generate search keywords from business names
- Keep file sizes manageable (split large categories if needed)
- All tracking is local-only for privacy

---

## Voice Configuration Details

### Voice Options
The demo now supports **two voice options** for user selection:

**Female Voice:**
- Voice ID: `XrExE9yKIg1WjnnlVkGX`
- Characteristics: Professional, clear, friendly tone
- Use case: General professional services, healthcare, customer service

**Male Voice:**
- Voice ID: `bIHbv24MWmeRgasZH58o`
- Characteristics: Professional, clear, authoritative tone
- Use case: Legal services, financial advisory, technical support

**Old Voice (Deprecated):**
- Voice ID: `21m00Tcm4TlvDq8ikWAM` (Rachel - old female voice)
- Status: Maintained as fallback only

### Implementation Approach
- Voice selection is **user-controlled** via UI toggle
- User preference persists in localStorage
- Default voice can be set via environment variable (`VITE_DEFAULT_VOICE`)
- Both voices should support multilingual capabilities
- Voice change applies immediately to next call

### Migration Path
1. Verify both new voice IDs with ElevenLabs
2. Update constants.ts with voice configuration
3. Implement voice selection hook
4. Add UI toggle to Demo component
5. Test both voices across multiple business types
6. Document voice characteristics for team