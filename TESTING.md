# Voice Agent Demo - Testing Checklist

This document provides a comprehensive manual testing checklist for all Phase 4-6 features of the Voice Agent Demo application.

## Table of Contents
1. [Configuration Validation](#1-configuration-validation)
2. [Business Display](#2-business-display)
3. [Search Functionality](#3-search-functionality)
4. [Filter Tests](#4-filter-tests)
5. [Voice Selection Tests](#5-voice-selection-tests)
6. [Keyboard Navigation Tests](#6-keyboard-navigation-tests)
7. [Mobile Responsiveness Tests](#7-mobile-responsiveness-tests)
8. [Performance Tests](#8-performance-tests)
9. [Accessibility Tests](#9-accessibility-tests)

---

## 1. Configuration Validation

### Test Case 1.1: Validate All Business Configs
**Objective**: Ensure all 99+ business configurations are valid

**Steps**:
1. Run `npm run validate:configs` from the project root
2. Review the output for any errors or warnings

**Expected Results**:
- All configurations pass validation
- No missing required fields
- No type mismatches
- Voice IDs match constants
- Categories match BUSINESS_CATEGORIES

**Status**: ✅ VERIFIED (99 configs valid as of implementation)

---

## 2. Business Display

### Test Case 2.1: Display All Businesses
**Objective**: Verify all 99+ businesses appear in the selector

**Steps**:
1. Start the application with `npm run dev`
2. Navigate to the business selector
3. Scroll through the entire list of businesses
4. Count the total number of business cards displayed

**Expected Results**:
- All 99+ businesses are visible
- Business cards display correctly with:
  - Business name
  - Category badge
  - Availability status
  - Industry icon
  - Description/tagline
- No duplicate business cards
- No missing or broken cards

### Test Case 2.2: Business Card Information
**Objective**: Verify each business card displays complete information

**Steps**:
1. Select 10 random businesses from different categories
2. Review each card for complete information

**Expected Results**:
Each card should display:
- Business name (clear and readable)
- Category badge (with correct icon)
- Availability indicator (24/7, Business Hours, or Appointment Only)
- Industry-specific icon (from Lucide React)
- Brief description or tagline
- Hover effect shows additional details
- Click action selects the business

### Test Case 2.3: Category Distribution
**Objective**: Verify businesses are distributed across all 12 categories

**Steps**:
1. Note the category counts in the selector
2. Verify each category has businesses

**Expected Category Counts** (approximate):
- Healthcare & Medical: 20+ businesses
- Legal Services: 10+ businesses
- Home & Property: 10+ businesses
- Beauty & Wellness: 13+ businesses
- Automotive: 7+ businesses
- Education & Training: 9+ businesses
- Professional Services: 7+ businesses
- Pet Services: 4+ businesses
- Creative & Events: 1+ businesses
- Food & Hospitality: 1+ businesses
- Technology: 1+ businesses
- Specialized Services: 1+ businesses

**Expected Results**:
- All 12 categories have at least one business
- Category counts match the distribution above
- No empty categories

---

## 3. Search Functionality

### Test Case 3.1: Basic Search
**Objective**: Verify search returns relevant results

**Test Queries and Expected Results**:

| Query | Expected Results | Notes |
|-------|------------------|-------|
| "dental" | Dental clinics, orthodontists | Should match business names and keywords |
| "legal" | Law firms, attorneys | Should match category and tags |
| "24/7" | Businesses with 24/7 availability | Should search availability field |
| "pet" | Pet grooming, vet, dog training | Should match category and keywords |
| "massage" | Massage therapy, wellness centers | Should match services |
| "car" | Auto shops, mechanics | Should match automotive businesses |
| "doctor" | Medical practices, clinics | Should match healthcare keywords |
| "emergency" | Urgent care, 24/7 services | Should match tags |

**Steps for Each Query**:
1. Enter the query in the search bar
2. Wait for debounced results (300ms)
3. Review the returned businesses

**Expected Results**:
- Results appear within 300ms of typing
- Only relevant businesses are shown
- Search is case-insensitive
- Partial matches work (e.g., "dent" finds "dental")
- No irrelevant results
- Empty search shows all businesses

### Test Case 3.2: Search Debouncing
**Objective**: Verify search debouncing prevents lag

**Steps**:
1. Type quickly in the search bar: "healthcare"
2. Observe the search behavior

**Expected Results**:
- Search does NOT trigger on every keystroke
- Results appear approximately 300ms after stopping typing
- No performance lag or UI freezing
- Smooth typing experience

### Test Case 3.3: No Results State
**Objective**: Verify empty search state displays correctly

**Steps**:
1. Enter a query that returns no results (e.g., "zzzzz")
2. Review the empty state message

**Expected Results**:
- Clear "No results found" message
- Helpful suggestions for alternative searches
- Option to clear search
- No error messages in console

### Test Case 3.4: Search Clearing
**Objective**: Verify search can be cleared

**Steps**:
1. Enter a search query
2. Click the clear button (X icon)
3. Verify all businesses reappear

**Expected Results**:
- Search input is cleared
- All businesses are displayed again
- No residual filtering

### Test Case 3.5: Special Characters in Search
**Objective**: Verify search handles special characters

**Test Queries**:
- "dr." (should find doctor-related businesses)
- "24/7" (should find 24-hour services)
- "nail & spa" (should handle ampersand)

**Expected Results**:
- Special characters are handled gracefully
- No errors or crashes
- Relevant results returned

---

## 4. Filter Tests

### Test Case 4.1: Category Filter
**Objective**: Verify category filtering works correctly

**Steps**:
1. Click the "Category" filter dropdown
2. Select "Healthcare & Medical"
3. Verify only healthcare businesses are shown
4. Select additional category "Legal Services"
5. Verify both healthcare and legal businesses are shown (OR logic)
6. Clear category filter
7. Verify all businesses reappear

**Expected Results**:
- Category filter dropdown lists all 12 categories
- Each category shows count in parentheses
- Selecting a category filters the list immediately
- Multiple categories use OR logic
- Clear filter button works
- Category icons display correctly

### Test Case 4.2: Availability Filter
**Objective**: Verify availability filtering works correctly

**Steps**:
1. Click the "Availability" filter dropdown
2. Select "24/7"
3. Verify only 24/7 businesses are shown
4. Change to "Business Hours"
5. Verify only business-hours businesses are shown
6. Clear availability filter

**Expected Results**:
- Availability filter shows three options:
  - 24/7
  - Business Hours
  - Appointment Only
- Filtering is immediate
- Correct businesses are shown for each filter
- Clear filter works

### Test Case 4.3: Combined Filters
**Objective**: Verify multiple filters work together

**Steps**:
1. Enter search query: "emergency"
2. Select category filter: "Healthcare & Medical"
3. Select availability filter: "24/7"
4. Verify results match ALL criteria (AND logic)

**Expected Results**:
- Filters combine with AND logic
- Only businesses matching ALL filters are shown
- Search + filters work together
- Results update immediately
- Clear all filters works

### Test Case 4.4: Sort Options
**Objective**: Verify sort functionality works correctly

**Sort Options to Test**:

**Relevance Sort** (default):
1. Enter a search query
2. Verify results are sorted by relevance

**Name Sort**:
1. Select "Sort by Name"
2. Verify businesses are alphabetically sorted

**Category Sort**:
1. Select "Sort by Category"
2. Verify businesses are grouped by category

**Expected Results**:
- Sort options are clearly labeled
- Sorting is immediate
- Visual indicator shows current sort
- Sort persists during search/filtering

---

## 5. Voice Selection Tests

### Test Case 5.1: Voice Selection UI
**Objective**: Verify voice selection interface works

**Steps**:
1. Select any business
2. Locate the voice selection toggle
3. Verify both options are displayed

**Expected Results**:
- Voice selector is visible above "Start Call" button
- Two options displayed:
  - Female Voice
  - Male Voice
- Selected voice is visually highlighted
- Icons display correctly (User icons)
- Check mark shows on selected option

### Test Case 5.2: Female Voice Selection
**Objective**: Verify female voice works correctly

**Steps**:
1. Select "Female Voice"
2. Choose a business (e.g., Dental Clinic)
3. Click "Start Call"
4. Listen to the voice

**Expected Results**:
- Voice ID used: `XrExE9yKIg1WjnnlVkGX`
- Voice is professional, clear, and friendly
- Female voice is audible and natural
- Greeting matches business context
- No audio issues or glitches

### Test Case 5.3: Male Voice Selection
**Objective**: Verify male voice works correctly

**Steps**:
1. Select "Male Voice"
2. Choose a business (e.g., Law Firm)
3. Click "Start Call"
4. Listen to the voice

**Expected Results**:
- Voice ID used: `bIHbv24MWmeRgasZH58o`
- Voice is professional, clear, and authoritative
- Male voice is audible and natural
- Greeting matches business context
- No audio issues or glitches

### Test Case 5.4: Voice Persistence
**Objective**: Verify voice selection persists across sessions

**Steps**:
1. Select "Male Voice"
2. Start a call and end it
3. Refresh the page (F5)
4. Verify "Male Voice" is still selected
5. Close browser tab
6. Reopen application
7. Verify "Male Voice" is still selected

**Expected Results**:
- Voice selection persists in localStorage
- Selected voice is remembered after page refresh
- Selected voice is remembered after browser restart
- Correct voice is used for subsequent calls

### Test Case 5.5: Voice Switching Mid-Session
**Objective**: Verify switching voices between calls

**Steps**:
1. Select "Female Voice"
2. Start and complete a call
3. Switch to "Male Voice"
4. Start another call
5. Verify voice changed

**Expected Results**:
- Voice switch takes effect immediately
- New call uses the newly selected voice
- No need to refresh page
- Smooth transition between voices

### Test Case 5.6: Voice Across Different Business Types
**Objective**: Verify both voices work across various business types

**Test Matrix**:

| Business Type | Female Voice | Male Voice |
|---------------|--------------|------------|
| Healthcare (Dental) | Test | Test |
| Legal (Law Firm) | Test | Test |
| Home Service (Plumbing) | Test | Test |
| Beauty (Salon) | Test | Test |
| Professional (Accounting) | Test | Test |

**Steps for Each**:
1. Select business
2. Choose voice
3. Start call
4. Verify voice quality and appropriateness

**Expected Results**:
- Both voices work for all business types
- Voice quality is consistent
- Context and prompts make sense
- Professional tone maintained

---

## 6. Keyboard Navigation Tests

### Test Case 6.1: Tab Navigation
**Objective**: Verify keyboard tab navigation works

**Steps**:
1. Load the application
2. Press Tab key repeatedly
3. Navigate through all interactive elements

**Expected Results**:
- Tab moves focus to next interactive element
- Focus order is logical (top to bottom, left to right)
- Focus indicator is visible
- Can navigate through:
  - Search bar
  - Filter dropdowns
  - Business cards
  - Voice selection buttons
  - Start Call button

### Test Case 6.2: Enter Key Selection
**Objective**: Verify Enter key activates selected elements

**Steps**:
1. Tab to a business card
2. Press Enter
3. Verify business is selected

**Expected Results**:
- Enter key selects business
- Business demo view opens
- Focus moves to demo area

### Test Case 6.3: Arrow Key Navigation
**Objective**: Verify arrow keys work in dropdowns

**Steps**:
1. Click category filter dropdown
2. Use arrow keys (up/down) to navigate options
3. Press Enter to select

**Expected Results**:
- Arrow keys move through dropdown options
- Visual highlight follows keyboard focus
- Enter key selects option
- Escape key closes dropdown

### Test Case 6.4: Escape Key
**Objective**: Verify Escape key closes modals/dropdowns

**Steps**:
1. Open category filter dropdown
2. Press Escape
3. Verify dropdown closes

**Expected Results**:
- Escape closes dropdowns
- Escape cancels selections
- Focus returns to trigger element

---

## 7. Mobile Responsiveness Tests

### Test Case 7.1: Mobile Layout (320px - 480px)
**Objective**: Verify application works on small mobile devices

**Test Devices/Viewports**:
- iPhone SE (375x667)
- Small Android (360x640)

**Steps**:
1. Open application in mobile viewport
2. Test all features

**Expected Results**:
- Single column layout
- Business cards stack vertically
- Search bar is full width
- Filters are accessible (dropdown or drawer)
- Voice selection buttons are touch-friendly
- All text is readable (no overflow)
- No horizontal scrolling
- Images/icons scale appropriately

### Test Case 7.2: Tablet Layout (768px - 1024px)
**Objective**: Verify application works on tablets

**Test Devices/Viewports**:
- iPad (768x1024)
- iPad Pro (1024x1366)

**Expected Results**:
- 2-3 column grid layout
- Filters visible and accessible
- Touch targets are appropriately sized
- Landscape and portrait modes work

### Test Case 7.3: Touch Interactions
**Objective**: Verify touch gestures work on mobile

**Steps**:
1. Use mobile device or browser touch emulation
2. Test all interactive elements

**Expected Results**:
- Tap to select business works
- Tap to toggle voice selection works
- Swipe to scroll works smoothly
- Touch targets are at least 44x44px
- No accidental clicks
- Hover states are replaced with active states

### Test Case 7.4: Mobile Search
**Objective**: Verify search works well on mobile

**Steps**:
1. Open search on mobile device
2. Type a query
3. Review results

**Expected Results**:
- Virtual keyboard doesn't obscure results
- Search is responsive to touch input
- Clear button is easily tappable
- Results scroll smoothly

### Test Case 7.5: Mobile Filters
**Objective**: Verify filters are usable on mobile

**Steps**:
1. Open filter dropdowns on mobile
2. Select multiple options
3. Apply filters

**Expected Results**:
- Filters open in mobile-friendly format
- Options are easily selectable
- Clear visual feedback on selection
- Filters can be easily cleared

---

## 8. Performance Tests

### Test Case 8.1: Initial Load Time
**Objective**: Verify application loads quickly

**Steps**:
1. Clear browser cache
2. Load application
3. Measure time to interactive

**Expected Results**:
- Page loads in < 3 seconds (on good connection)
- No blocking JavaScript
- Progressive rendering
- Smooth transition to interactive state

### Test Case 8.2: Search Performance
**Objective**: Verify search is fast with 99+ businesses

**Steps**:
1. Enter various search queries
2. Measure time from input to results display

**Expected Results**:
- Results appear within 300-400ms (including debounce)
- No lag or freezing during typing
- Smooth results rendering
- No performance degradation with complex queries

### Test Case 8.3: Filter Performance
**Objective**: Verify filtering is instant

**Steps**:
1. Apply category filters
2. Apply availability filters
3. Combine multiple filters

**Expected Results**:
- Filter results appear instantly (< 100ms)
- No visible lag
- Smooth transitions
- Can rapidly change filters without issues

### Test Case 8.4: Scrolling Performance
**Objective**: Verify smooth scrolling with many businesses

**Steps**:
1. Display all 99+ businesses
2. Scroll rapidly through the list
3. Observe performance

**Expected Results**:
- Smooth 60fps scrolling
- No janky or stuttering motion
- Business cards render smoothly
- No layout shifts during scroll

### Test Case 8.5: Memory Usage
**Objective**: Verify application doesn't leak memory

**Steps**:
1. Open browser DevTools > Performance
2. Use application for 5 minutes
3. Search, filter, select multiple businesses
4. Monitor memory usage

**Expected Results**:
- Memory usage remains stable
- No continuous growth in memory
- No excessive garbage collection
- Application remains responsive over time

---

## 9. Accessibility Tests

### Test Case 9.1: Screen Reader Compatibility
**Objective**: Verify application works with screen readers

**Test with**:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

**Steps**:
1. Enable screen reader
2. Navigate through application
3. Verify all content is announced

**Expected Results**:
- All interactive elements are announced
- Business names are read clearly
- Filter states are announced
- Voice selection is announced
- Button purposes are clear
- Form labels are associated correctly
- Focus changes are announced

### Test Case 9.2: Keyboard-Only Navigation
**Objective**: Verify entire application is usable with keyboard only

**Steps**:
1. Unplug mouse or disable trackpad
2. Navigate entire application using only keyboard
3. Complete all major tasks

**Expected Results**:
- All features accessible via keyboard
- Can search businesses
- Can apply filters
- Can select voice
- Can start/end calls
- Focus is always visible
- Logical focus order

### Test Case 9.3: Color Contrast
**Objective**: Verify text meets WCAG AA contrast requirements

**Steps**:
1. Use browser extension (e.g., WAVE, axe DevTools)
2. Check color contrast ratios

**Expected Results**:
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18pt+): minimum 3:1 contrast ratio
- No contrast errors reported
- Text is readable on all backgrounds

### Test Case 9.4: Focus Indicators
**Objective**: Verify focus states are visible

**Steps**:
1. Tab through all interactive elements
2. Verify focus indicator on each

**Expected Results**:
- All interactive elements have visible focus
- Focus indicator has sufficient contrast
- Focus indicator is not hidden by outlines
- Custom focus styles are clear

### Test Case 9.5: ARIA Labels and Roles
**Objective**: Verify proper ARIA implementation

**Steps**:
1. Inspect HTML with browser DevTools
2. Check for ARIA attributes

**Expected Results**:
- Buttons have aria-label where needed
- Regions have appropriate roles
- Live regions announce dynamic changes
- Hidden elements have aria-hidden
- No invalid ARIA usage

### Test Case 9.6: Form Labels
**Objective**: Verify all form inputs have labels

**Steps**:
1. Inspect search input
2. Inspect filter dropdowns
3. Verify labels are associated

**Expected Results**:
- All inputs have associated labels
- Labels are programmatically linked (id/for)
- Placeholder text doesn't replace labels
- Error messages are associated with fields

### Test Case 9.7: Text Scaling
**Objective**: Verify application works at 200% text size

**Steps**:
1. Set browser text size to 200%
2. Navigate application
3. Verify all content is usable

**Expected Results**:
- Text scales properly
- No text overflow or truncation
- Layout adapts to larger text
- All content remains accessible
- No overlapping elements

### Test Case 9.8: Semantic HTML
**Objective**: Verify proper HTML structure

**Steps**:
1. Validate HTML with W3C validator
2. Check heading hierarchy
3. Verify landmark regions

**Expected Results**:
- Proper heading hierarchy (h1, h2, h3...)
- Landmark regions defined (header, main, nav, footer)
- Lists use proper markup (ul/ol/li)
- Buttons are `<button>` elements
- Links are `<a>` elements
- No invalid HTML

---

## Test Execution Notes

### Pre-Testing Setup
- [ ] Latest code pulled from repository
- [ ] Dependencies installed (`npm install`)
- [ ] Application runs without errors (`npm run dev`)
- [ ] Config validation passes (`npm run validate:configs`)

### Testing Environment
- **Operating System**:
- **Browser**: Chrome, Firefox, Safari, Edge (test on primary browser)
- **Screen Resolution**:
- **Network Speed**:

### Bug Reporting Template
When a test fails, document:
- **Test Case ID**: (e.g., 3.1, 5.2)
- **Description**: Brief description of the issue
- **Steps to Reproduce**: Exact steps to reproduce
- **Expected Result**: What should happen
- **Actual Result**: What actually happened
- **Screenshots**: If applicable
- **Console Errors**: Any JavaScript errors
- **Severity**: Critical / Major / Minor
- **Workaround**: If available

---

## Sign-Off

### Tester Information
- **Name**:
- **Date**:
- **Version Tested**:

### Test Results Summary
- **Total Test Cases**:
- **Passed**:
- **Failed**:
- **Blocked**:
- **Not Tested**:

### Overall Assessment
- [ ] Ready for production
- [ ] Needs minor fixes
- [ ] Needs major fixes
- [ ] Not ready for release

### Notes
