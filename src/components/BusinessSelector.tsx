import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Filter, Grid, List, ChevronDown, SortAsc, Loader2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { BusinessConfig } from '../config/business-config';
import { useDebouncedSearch, searchBusinesses, sortBusinesses, getUniqueCategories, getUniqueAvailability, type SortType } from '../utils/search';
import { getCategoryIcon } from '../config/category-icons';

interface BusinessSelectorProps {
  businesses: { [key: string]: { name: string; config: BusinessConfig } };
  currentBusiness: string;
  onBusinessSelect: (businessKey: string, config: BusinessConfig) => void;
}

const BusinessSelector: React.FC<BusinessSelectorProps> = ({
  businesses,
  currentBusiness,
  onBusinessSelect,
}) => {
  const { value: searchTerm, debouncedValue: debouncedSearchTerm, setValue: setSearchTerm } = useDebouncedSearch('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [sortBy, setSortBy] = useState<SortType>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isAvailabilityDropdownOpen, setIsAvailabilityDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const businessRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Track if debouncing is active
  const isSearching = searchTerm !== debouncedSearchTerm;

  // Convert businesses object to array for search utilities
  const businessArray = useMemo(() => {
    return Object.values(businesses).map((b) => b.config);
  }, [businesses]);

  // Get unique categories and availability options
  const categories = useMemo(() => ['all', ...getUniqueCategories(businessArray)], [businessArray]);
  const availabilityOptions = useMemo(() => ['all', ...getUniqueAvailability(businessArray)], [businessArray]);

  // Filter and sort businesses
  const filteredBusinesses = useMemo(() => {
    console.time('Business filtering');
    // First, apply search
    let filtered = searchBusinesses(businessArray, debouncedSearchTerm);

    // Then apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(b => b.category === selectedCategory);
    }

    // Then apply availability filter
    if (selectedAvailability !== 'all') {
      filtered = filtered.filter(b => b.availability === selectedAvailability);
    }

    // Finally, apply sorting
    filtered = sortBusinesses(filtered, sortBy, debouncedSearchTerm);

    // Convert back to entries format
    const result = Object.entries(businesses).filter(([_, business]) =>
      filtered.some(f => f.business.name === business.config.business.name)
    );
    console.timeEnd('Business filtering');
    return result;
  }, [businesses, businessArray, debouncedSearchTerm, selectedCategory, selectedAvailability, sortBy]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close dropdowns on Escape
      if (e.key === 'Escape') {
        setIsCategoryDropdownOpen(false);
        setIsAvailabilityDropdownOpen(false);
        setIsSortDropdownOpen(false);
        if (isCategoryDropdownOpen || isAvailabilityDropdownOpen || isSortDropdownOpen) {
          e.preventDefault();
          return;
        }
        // Clear search if no dropdowns are open
        if (searchTerm) {
          setSearchTerm('');
          searchInputRef.current?.focus();
          e.preventDefault();
          return;
        }
      }

      // Only handle arrow keys and Enter when not in dropdowns
      if (!isCategoryDropdownOpen && !isAvailabilityDropdownOpen && !isSortDropdownOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setFocusedIndex(prev => {
            const next = prev < filteredBusinesses.length - 1 ? prev + 1 : 0;
            return next;
          });
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setFocusedIndex(prev => {
            const next = prev > 0 ? prev - 1 : filteredBusinesses.length - 1;
            return next;
          });
        } else if (e.key === 'Enter' && focusedIndex >= 0) {
          e.preventDefault();
          const [businessKey, business] = filteredBusinesses[focusedIndex];
          onBusinessSelect(businessKey, business.config);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, filteredBusinesses, isCategoryDropdownOpen, isAvailabilityDropdownOpen, isSortDropdownOpen, searchTerm, setSearchTerm, onBusinessSelect]);

  // Focus the business card when keyboard navigating
  useEffect(() => {
    if (focusedIndex >= 0 && businessRefs.current[focusedIndex]) {
      businessRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // Reset focused index when filters change
  useEffect(() => {
    setFocusedIndex(-1);
  }, [debouncedSearchTerm, selectedCategory, selectedAvailability, sortBy]);

  const BusinessCard = React.memo(({ businessKey, business, index }: { businessKey: string; business: { name: string; config: BusinessConfig }; index: number }) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[business.config.branding.iconName] || LucideIcons.Building;
    const CategoryIcon = getCategoryIcon(business.config.category);
    const isSelected = businessKey === currentBusiness;
    const isFocused = focusedIndex === index;

    return (
      <button
        ref={el => businessRefs.current[index] = el}
        onClick={() => onBusinessSelect(businessKey, business.config)}
        aria-label={`Select ${business.name} - ${business.config.category}`}
        aria-pressed={isSelected}
        className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200'
            : isFocused
            ? 'border-blue-400 bg-blue-50/50 shadow-lg ring-2 ring-blue-300'
            : 'border-gray-200 bg-white hover:border-blue-300'
        }`}
        style={{
          animationDelay: `${index * 50}ms`,
          animation: 'fadeInUp 0.4s ease-out forwards',
          opacity: 0
        }}
      >
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1 font-medium">
            Current
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <IconComponent className={`h-6 w-6 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-lg mb-1 ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
              {business.name}
            </h3>
            <div className={`text-xs font-medium mb-2 inline-flex items-center gap-1 px-2 py-1 rounded-full ${
              isSelected ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-700'
            }`}>
              <CategoryIcon className="h-3 w-3" />
              <span>{business.config.category}</span>
            </div>
            <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'} line-clamp-2`}>
              {business.config.business.tagline}
            </p>
            <div className="mt-2">
              <span className={`text-xs ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                {business.config.availability === 'business-hours' && '🕐 Business Hours'}
                {business.config.availability === '24/7' && '🌐 24/7 Available'}
                {business.config.availability === 'appointment-only' && '📅 By Appointment'}
              </span>
            </div>
          </div>
        </div>
      </button>
    );
  });

  const BusinessListItem = React.memo(({ businessKey, business, index }: { businessKey: string; business: { name: string; config: BusinessConfig }; index: number }) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[business.config.branding.iconName] || LucideIcons.Building;
    const CategoryIcon = getCategoryIcon(business.config.category);
    const isSelected = businessKey === currentBusiness;
    const isFocused = focusedIndex === index;

    return (
      <button
        ref={el => businessRefs.current[index] = el}
        onClick={() => onBusinessSelect(businessKey, business.config)}
        aria-label={`Select ${business.name} - ${business.config.category}`}
        aria-pressed={isSelected}
        className={`w-full p-4 rounded-lg border transition-all duration-200 text-left flex items-center gap-4 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md'
            : isFocused
            ? 'border-blue-400 bg-blue-50/50 shadow-md ring-2 ring-blue-300'
            : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
        }`}
        style={{
          animationDelay: `${index * 40}ms`,
          animation: 'fadeInUp 0.3s ease-out forwards',
          opacity: 0
        }}
      >
        <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
          <IconComponent className={`h-5 w-5 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={`font-medium ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
              {business.name}
            </h3>
            <span className={`text-xs inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${
              isSelected ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-700'
            }`}>
              <CategoryIcon className="h-3 w-3" />
              <span>{business.config.category}</span>
            </span>
          </div>
          <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
            {business.config.business.tagline}
          </p>
          <div className="mt-1">
            <span className={`text-xs ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
              {business.config.availability === 'business-hours' && '🕐 Business Hours'}
              {business.config.availability === '24/7' && '🌐 24/7 Available'}
              {business.config.availability === 'appointment-only' && '📅 By Appointment'}
            </span>
          </div>
        </div>

        {isSelected && (
          <div className="text-blue-500 font-medium text-sm">
            Current Demo
          </div>
        )}
      </button>
    );
  });

  const formatAvailability = (availability: string) => {
    if (availability === 'all') return 'All Availability';
    if (availability === 'business-hours') return 'Business Hours';
    if (availability === '24/7') return '24/7';
    if (availability === 'appointment-only') return 'By Appointment';
    return availability;
  };

  const formatSortBy = (sort: SortType) => {
    if (sort === 'relevance') return 'Relevance';
    if (sort === 'name') return 'Name';
    if (sort === 'category') return 'Category';
    return sort;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Business Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore AI voice assistants tailored for different industries. See how the same technology adapts to various business needs.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              {isSearching ? (
                <Loader2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 animate-spin" />
              ) : (
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              )}
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search businesses, categories, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search businesses"
                aria-describedby="search-help"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <span id="search-help" className="sr-only">
                Search by business name, category, or tags. Press Escape to clear.
              </span>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-4 lg:flex-nowrap">
              {/* Category Filter */}
              <div className="relative flex-1 lg:flex-initial min-w-[200px]">
                <button
                  onClick={() => {
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                    setIsAvailabilityDropdownOpen(false);
                    setIsSortDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700 truncate">
                      {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
                    </span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform flex-shrink-0 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                    {categories.map((category) => {
                      const CategoryIcon = category !== 'all' ? getCategoryIcon(category) : Filter;
                      return (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsCategoryDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                            selectedCategory === category ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <CategoryIcon className="h-4 w-4" />
                          <span>{category === 'all' ? 'All Categories' : category}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Availability Filter */}
              <div className="relative flex-1 lg:flex-initial min-w-[180px]">
                <button
                  onClick={() => {
                    setIsAvailabilityDropdownOpen(!isAvailabilityDropdownOpen);
                    setIsCategoryDropdownOpen(false);
                    setIsSortDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors justify-between"
                >
                  <span className="text-gray-700 truncate">
                    {formatAvailability(selectedAvailability)}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform flex-shrink-0 ${isAvailabilityDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAvailabilityDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {availabilityOptions.map((availability) => (
                      <button
                        key={availability}
                        onClick={() => {
                          setSelectedAvailability(availability);
                          setIsAvailabilityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedAvailability === availability ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {formatAvailability(availability)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative flex-1 lg:flex-initial min-w-[150px]">
                <button
                  onClick={() => {
                    setIsSortDropdownOpen(!isSortDropdownOpen);
                    setIsCategoryDropdownOpen(false);
                    setIsAvailabilityDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors justify-between"
                >
                  <div className="flex items-center gap-2">
                    <SortAsc className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700 truncate">
                      {formatSortBy(sortBy)}
                    </span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform flex-shrink-0 ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSortDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {(['relevance', 'name', 'category'] as SortType[]).map((sort) => (
                      <button
                        key={sort}
                        onClick={() => {
                          setSortBy(sort);
                          setIsSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          sortBy === sort ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {formatSortBy(sort)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  title="List view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count & Active Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <p className="text-gray-600">
            Showing {filteredBusinesses.length} of {Object.keys(businesses).length} businesses
          </p>
          {(searchTerm || selectedCategory !== 'all' || selectedAvailability !== 'all') && (
            <>
              <span className="text-gray-400">•</span>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedAvailability('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Clear all filters
              </button>
            </>
          )}
        </div>

        {/* Business Grid/List */}
        {isSearching ? (
          // Loading skeleton
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className={`rounded-xl border-2 border-gray-200 bg-gray-50 animate-pulse ${
                  viewMode === 'grid' ? 'p-6' : 'p-4 flex items-center gap-4'
                }`}
              >
                <div className={`rounded-lg bg-gray-200 ${viewMode === 'grid' ? 'h-12 w-12' : 'h-10 w-10'}`} />
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredBusinesses.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredBusinesses.map(([businessKey, business], index) =>
              viewMode === 'grid' ? (
                <BusinessCard key={businessKey} businessKey={businessKey} business={business} index={index} />
              ) : (
                <BusinessListItem key={businessKey} businessKey={businessKey} business={business} index={index} />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600 mb-2">
              Try adjusting your search terms or filters.
            </p>
            {(searchTerm || selectedCategory !== 'all' || selectedAvailability !== 'all') ? (
              <>
                <p className="text-sm text-gray-500 mb-4">
                  Active filters: {searchTerm && `"${searchTerm}"`} {selectedCategory !== 'all' && `Category: ${selectedCategory}`} {selectedAvailability !== 'all' && `Availability: ${formatAvailability(selectedAvailability)}`}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedAvailability('all');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Clear all filters
                </button>
              </>
            ) : (
              <p className="text-sm text-gray-500 mt-4">
                Try searching for different keywords or browse all categories.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessSelector;
