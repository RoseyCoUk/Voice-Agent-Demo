import React, { useState } from 'react';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { BusinessConfig } from '../config/business-config';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);

  // Get unique industries for filtering
  const industries = ['all', ...new Set(Object.values(businesses).map(b => b.config.business.industry))];

  // Filter businesses based on search and industry
  const filteredBusinesses = Object.entries(businesses).filter(([key, business]) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.config.business.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.config.business.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || business.config.business.industry === selectedIndustry;
    
    return matchesSearch && matchesIndustry;
  });

  const BusinessCard = ({ businessKey, business }: { businessKey: string; business: { name: string; config: BusinessConfig } }) => {
    const IconComponent = (LucideIcons as any)[business.config.branding.iconName] || LucideIcons.Building;
    const isSelected = businessKey === currentBusiness;

    return (
      <button
        onClick={() => onBusinessSelect(businessKey, business.config)}
        className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
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
            <div className={`text-xs font-medium mb-2 inline-block px-2 py-1 rounded-full ${
              isSelected ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-700'
            }`}>
              {business.config.business.industry}
            </div>
            <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'} line-clamp-2`}>
              {business.config.business.tagline}
            </p>
          </div>
        </div>
      </button>
    );
  };

  const BusinessListItem = ({ businessKey, business }: { businessKey: string; business: { name: string; config: BusinessConfig } }) => {
    const IconComponent = (LucideIcons as any)[business.config.branding.iconName] || LucideIcons.Building;
    const isSelected = businessKey === currentBusiness;

    return (
      <button
        onClick={() => onBusinessSelect(businessKey, business.config)}
        className={`w-full p-4 rounded-lg border transition-all duration-200 text-left flex items-center gap-4 ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-sm'
            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
        }`}
      >
        <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
          <IconComponent className={`h-5 w-5 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
            {business.name}
          </h3>
          <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
            {business.config.business.industry} • {business.config.business.tagline}
          </p>
        </div>
        
        {isSelected && (
          <div className="text-blue-500 font-medium text-sm">
            Current Demo
          </div>
        )}
      </button>
    );
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
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search businesses or industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Industry Filter */}
            <div className="relative">
              <button
                onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-48 justify-between"
              >
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">
                    {selectedIndustry === 'all' ? 'All Industries' : selectedIndustry}
                  </span>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isIndustryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isIndustryDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => {
                        setSelectedIndustry(industry);
                        setIsIndustryDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedIndustry === industry ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {industry === 'all' ? 'All Industries' : industry}
                    </button>
                  ))}
                </div>
              )}
            </div>
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBusinesses.length} of {Object.keys(businesses).length} businesses
            {searchTerm && ` for "${searchTerm}"`}
            {selectedIndustry !== 'all' && ` in ${selectedIndustry}`}
          </p>
        </div>

        {/* Business Grid/List */}
        {filteredBusinesses.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredBusinesses.map(([businessKey, business]) =>
              viewMode === 'grid' ? (
                <BusinessCard key={businessKey} businessKey={businessKey} business={business} />
              ) : (
                <BusinessListItem key={businessKey} businessKey={businessKey} business={business} />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or industry filter.
            </p>
            {(searchTerm || selectedIndustry !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('all');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessSelector;
