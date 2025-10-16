import {
  Stethoscope,
  Scale,
  Home,
  Sparkles,
  Car,
  GraduationCap,
  Briefcase,
  PawPrint,
  Camera,
  UtensilsCrossed,
  Code,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { BUSINESS_CATEGORIES } from './categories';

/**
 * Maps business categories to their corresponding Lucide React icon components
 */
export const categoryIcons: Record<string, LucideIcon> = {
  [BUSINESS_CATEGORIES.HEALTHCARE]: Stethoscope,
  [BUSINESS_CATEGORIES.LEGAL]: Scale,
  [BUSINESS_CATEGORIES.HOME_PROPERTY]: Home,
  [BUSINESS_CATEGORIES.BEAUTY_WELLNESS]: Sparkles,
  [BUSINESS_CATEGORIES.AUTOMOTIVE]: Car,
  [BUSINESS_CATEGORIES.EDUCATION]: GraduationCap,
  [BUSINESS_CATEGORIES.PROFESSIONAL]: Briefcase,
  [BUSINESS_CATEGORIES.PET_SERVICES]: PawPrint,
  [BUSINESS_CATEGORIES.EVENTS]: Camera,
  [BUSINESS_CATEGORIES.FOOD]: UtensilsCrossed,
  [BUSINESS_CATEGORIES.TECHNOLOGY]: Code,
  [BUSINESS_CATEGORIES.SPECIALIZED]: Star,
};

/**
 * Gets the icon component for a given category
 * Falls back to Star icon if category not found
 *
 * @param category - Business category string
 * @returns Lucide icon component
 */
export function getCategoryIcon(category: string): LucideIcon {
  return categoryIcons[category] || Star;
}
