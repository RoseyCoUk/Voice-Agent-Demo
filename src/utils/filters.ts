import { BusinessConfig, AvailabilityType } from '../config/business-config';

/**
 * Filter options interface
 */
export interface FilterOptions {
  categories?: string[];
  tags?: string[];
  availability?: AvailabilityType[];
  searchQuery?: string;
}

/**
 * Applies multiple filters to an array of businesses
 * Uses OR logic within each filter type (any match passes)
 * Uses AND logic between filter types (must pass all filter types)
 *
 * @param businesses - Array of business configurations to filter
 * @param filters - Filter options object
 * @returns Filtered array of businesses
 */
export function applyFilters(
  businesses: BusinessConfig[],
  filters: FilterOptions
): BusinessConfig[] {
  let filtered = [...businesses];

  // Filter by categories (OR logic - match any selected category)
  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter((business) =>
      filters.categories!.includes(business.category)
    );
  }

  // Filter by tags (OR logic - match any selected tag)
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((business) =>
      business.tags.some((tag) => filters.tags!.includes(tag))
    );
  }

  // Filter by availability (OR logic - match any selected availability)
  if (filters.availability && filters.availability.length > 0) {
    filtered = filtered.filter((business) =>
      filters.availability!.includes(business.availability)
    );
  }

  // Filter by search query
  if (filters.searchQuery && filters.searchQuery.trim() !== '') {
    const normalizedQuery = filters.searchQuery.toLowerCase().trim();

    filtered = filtered.filter((business) => {
      // Search in business name
      if (business.business.name.toLowerCase().includes(normalizedQuery)) {
        return true;
      }

      // Search in category
      if (business.category.toLowerCase().includes(normalizedQuery)) {
        return true;
      }

      // Search in tags
      if (business.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))) {
        return true;
      }

      // Search in searchKeywords
      if (business.searchKeywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery))) {
        return true;
      }

      return false;
    });
  }

  return filtered;
}
