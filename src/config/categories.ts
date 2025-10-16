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
} as const;

export type BusinessCategory = typeof BUSINESS_CATEGORIES[keyof typeof BUSINESS_CATEGORIES];
