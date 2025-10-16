import { useState, useEffect } from 'react';
import { BusinessConfig } from '../config/business-config';

/**
 * Filters businesses by search query across name, category, tags, and keywords
 * @param businesses - Array of business configurations to search through
 * @param query - Search query string
 * @returns Filtered array of businesses matching the query
 */
export function searchBusinesses(businesses: BusinessConfig[], query: string): BusinessConfig[] {
  if (!query || query.trim() === '') {
    return businesses;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return businesses.filter((business) => {
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

/**
 * Custom hook for debounced search with 300ms delay
 * @param initialValue - Initial search value
 * @returns Object containing debounced value, current value, and setter function
 */
export function useDebouncedSearch(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return {
    value,
    debouncedValue,
    setValue,
  };
}

/**
 * Sort type for businesses
 */
export type SortType = 'relevance' | 'name' | 'category';

/**
 * Sorts businesses based on the specified sort type
 * @param businesses - Array of business configurations to sort
 * @param sortBy - Sort criteria ('relevance', 'name', or 'category')
 * @param searchQuery - Optional search query for relevance sorting
 * @returns Sorted array of businesses
 */
export function sortBusinesses(
  businesses: BusinessConfig[],
  sortBy: SortType,
  searchQuery?: string
): BusinessConfig[] {
  const sorted = [...businesses];

  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.business.name.localeCompare(b.business.name));

    case 'category':
      return sorted.sort((a, b) => {
        const categoryCompare = a.category.localeCompare(b.category);
        if (categoryCompare !== 0) return categoryCompare;
        // Secondary sort by name within same category
        return a.business.name.localeCompare(b.business.name);
      });

    case 'relevance':
      if (!searchQuery || searchQuery.trim() === '') {
        // If no search query, sort by name
        return sorted.sort((a, b) => a.business.name.localeCompare(b.business.name));
      }

      const normalizedQuery = searchQuery.toLowerCase().trim();

      return sorted.sort((a, b) => {
        const scoreA = calculateRelevanceScore(a, normalizedQuery);
        const scoreB = calculateRelevanceScore(b, normalizedQuery);
        return scoreB - scoreA; // Higher score first
      });

    default:
      return sorted;
  }
}

/**
 * Calculates relevance score for a business based on search query
 * Higher score = more relevant
 */
function calculateRelevanceScore(business: BusinessConfig, normalizedQuery: string): number {
  let score = 0;

  // Exact match in business name (highest priority)
  if (business.business.name.toLowerCase() === normalizedQuery) {
    score += 100;
  } else if (business.business.name.toLowerCase().includes(normalizedQuery)) {
    score += 50;
  }

  // Match in category
  if (business.category.toLowerCase().includes(normalizedQuery)) {
    score += 30;
  }

  // Match in tags
  business.tags.forEach((tag) => {
    if (tag.toLowerCase() === normalizedQuery) {
      score += 20;
    } else if (tag.toLowerCase().includes(normalizedQuery)) {
      score += 10;
    }
  });

  // Match in search keywords
  business.searchKeywords.forEach((keyword) => {
    if (keyword.toLowerCase() === normalizedQuery) {
      score += 15;
    } else if (keyword.toLowerCase().includes(normalizedQuery)) {
      score += 5;
    }
  });

  return score;
}

/**
 * Extracts unique categories from an array of businesses
 * @param businesses - Array of business configurations
 * @returns Sorted array of unique categories
 */
export function getUniqueCategories(businesses: BusinessConfig[]): string[] {
  const categories = new Set(businesses.map((b) => b.category));
  return Array.from(categories).sort();
}

/**
 * Extracts unique tags from an array of businesses
 * @param businesses - Array of business configurations
 * @returns Sorted array of unique tags
 */
export function getUniqueTags(businesses: BusinessConfig[]): string[] {
  const tags = new Set<string>();
  businesses.forEach((business) => {
    business.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Extracts unique availability types from an array of businesses
 * @param businesses - Array of business configurations
 * @returns Sorted array of unique availability types
 */
export function getUniqueAvailability(businesses: BusinessConfig[]): string[] {
  const availability = new Set(businesses.map((b) => b.availability));
  return Array.from(availability).sort();
}
