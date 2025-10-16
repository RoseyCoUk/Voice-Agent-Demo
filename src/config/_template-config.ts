import { BusinessConfig } from './business-config';
import { BUSINESS_CATEGORIES } from './categories';
import { getVoiceId } from './constants';

/**
 * BUSINESS CONFIG TEMPLATE
 *
 * Use this template when creating new business configurations.
 * Copy this file and replace all placeholder values with actual business information.
 *
 * PROMPT WRITING GUIDE:
 * - Be specific about services offered
 * - Include common customer questions and scenarios
 * - Add industry-specific terminology
 * - Mention unique selling points
 * - Keep tone consistent with business type
 * - Include hours, pricing policy, and booking process
 * - Add safety/emergency protocols if relevant
 */

export const templateBusinessConfig: BusinessConfig = {
  business: {
    name: 'Business Name Here',
    industry: 'Industry Type (e.g., Dental Clinic, Law Firm, Plumbing Service)',
    tagline: 'Brief one-line description of services',
    description: 'Detailed description of what this business does and how the AI assistant helps...',
    location: 'City, State/Region',
    hours: 'Monday-Friday 9am-5pm, Saturday 10am-2pm'
  },

  branding: {
    primaryColor: 'blue', // Tailwind color name
    accentColor: 'blue',
    iconName: 'Building' // Lucide icon name - see https://lucide.dev
  },

  assistant: {
    name: 'Assistant Name (e.g., "Bright Smile Dental Assistant")',
    vapiToken: "a74aeeee-0668-4269-8b7f-f249f24fa303",
    voiceId: getVoiceId(), // Uses user's voice preference (FEMALE/MALE)

    greeting: 'Hello! Thank you for calling [Business Name]. I\'m here to help you with [main services]. How can I assist you today?',

    systemPrompt: `You are a professional AI receptionist for [Business Name], a [industry type] serving [location].

Your role is to:

1. Initial Contact & Booking:
   - Greet callers warmly and professionally
   - Collect contact details (name, phone, email) for appointments
   - Ask about preferred appointment times
   - Explain the booking process (e.g., we'll call back to confirm)
   - Note that specific times need [provider] confirmation

2. Service Information:
   - Explain our primary services: [list main services]
   - Describe what customers can expect during visits
   - Share typical session/appointment duration
   - Mention any preparation needed (what to bring, what to wear, etc.)

3. Common Questions:
   - Hours of operation: [business hours]
   - Location and parking information
   - Payment methods accepted
   - Insurance acceptance (if applicable)
   - Pricing policy (general ranges or "we'll discuss during callback")
   - Cancellation/rescheduling policy

4. Urgent/Emergency Handling:
   - [If applicable] For emergencies, provide immediate guidance
   - Take detailed messages for priority callback
   - Explain after-hours procedures

Important Guidelines:
- Never provide [medical/legal/professional] advice or diagnoses
- Don't quote exact prices (say "we'll discuss pricing during your callback")
- Maintain [professional/friendly/warm] tone throughout
- Always offer to take contact details for follow-up
- For complex questions, note them for [provider] to address
- Be empathetic and patient-focused

Business Details:
- Location: [address or area]
- Hours: [business hours]
- Specialties: [unique offerings or specializations]`,

    personality: {
      tone: 'professional, friendly, helpful',
      traits: ['empathetic', 'knowledgeable', 'patient', 'professional']
    }
  },

  services: {
    primary: [
      'Primary Service 1',
      'Primary Service 2',
      'Primary Service 3'
    ],
    secondary: [
      'Secondary Service 1',
      'Secondary Service 2',
      'Additional offerings'
    ],
    terminology: {
      client: 'customer', // or: patient, client, guest, etc.
      service: 'service', // or: treatment, consultation, appointment, etc.
      provider: 'specialist', // or: doctor, attorney, technician, etc.
      appointment: 'appointment' // or: session, consultation, visit, etc.
    }
  },

  questionCategories: [
    {
      title: 'Booking & Scheduling',
      emoji: '📅',
      description: 'Shows how the assistant handles appointment requests.',
      questions: [
        'Can I book an appointment for next week?',
        'What times are available?',
        'How do I schedule my first visit?'
      ]
    },
    {
      title: 'Services & Information',
      emoji: 'ℹ️',
      description: 'Explains services and what customers can expect.',
      questions: [
        'What services do you offer?',
        'How long does a typical appointment take?',
        'What should I bring to my appointment?'
      ]
    },
    {
      title: 'Pricing & Payment',
      emoji: '💳',
      description: 'Handles payment and pricing questions.',
      questions: [
        'How much does it cost?',
        'Do you accept insurance?',
        'What payment methods do you accept?'
      ]
    }
  ],

  features: [
    {
      icon: 'Clock',
      title: '24/7 Availability',
      description: 'Answer calls anytime, even outside business hours.'
    },
    {
      icon: 'Calendar',
      title: 'Easy Scheduling',
      description: 'Help customers book appointments quickly and efficiently.'
    },
    {
      icon: 'Phone',
      title: 'Never Miss a Call',
      description: 'Ensure every customer inquiry is handled professionally.'
    },
    {
      icon: 'MessageSquare',
      title: 'Detailed Information',
      description: 'Provide comprehensive answers to common questions.'
    }
  ],

  demo: {
    title: 'Try the Demo',
    subtitle: 'Experience how our AI assistant handles customer inquiries',
    disclaimer: 'This is a demo version showcasing how AI can support real customer interactions.',
    callToAction: 'Click "Start Call" to experience how our AI assistant handles inquiries professionally.'
  },

  meta: {
    title: 'AI Phone Assistant Demo - [Business Name]',
    description: 'Experience how an AI phone assistant can improve customer calls for [Business Name].',
    keywords: ['AI assistant', 'industry keyword', 'phone system', 'automation']
  },

  // NEW FIELDS - Phase 1 Infrastructure
  category: BUSINESS_CATEGORIES.HEALTHCARE, // Choose appropriate category
  tags: ['tag1', 'tag2', 'tag3', 'tag4'], // 3-5 relevant tags
  searchKeywords: ['keyword1', 'keyword2', 'keyword3'], // Related search terms
  availability: 'business-hours' // or '24/7' or 'appointment-only'
};
