import { BusinessConfig } from './business-config';

// Base prompt template for generating business configurations
export const BUSINESS_CONFIG_PROMPT_TEMPLATE = `
You are an expert at creating AI voice assistant configurations for different business types. Generate a complete BusinessConfig object for the business described below.

BUSINESS CONTEXT:
{businessDescription}

REQUIREMENTS:
1. Create a professional system prompt for the AI assistant that matches the business industry and tone
2. Choose appropriate question categories (3-5 categories) with relevant sample questions 
3. Select features that make sense for this type of business
4. Use appropriate terminology for the industry (client vs customer vs patient, etc.)
5. Choose a suitable primary color and Lucide icon that fits the business
6. Ensure all content is professional and industry-appropriate

RESPONSE FORMAT:
Return a valid TypeScript object that matches the BusinessConfig interface exactly. Do not include any explanation or markdown formatting - just the raw object.

The object should include:
- business: {name, industry, tagline, description, location, hours}
- branding: {primaryColor (blue/green/purple/red/orange/indigo), iconName (valid Lucide icon)}
- assistant: {name, vapiToken: "your-vapi-token-here", voiceId: "21m00Tcm4TlvDq8ikWAM", systemPrompt, personality}
- services: {primary[], secondary[], terminology}
- questionCategories: [{title, emoji, description, questions[]}]
- features: [{icon (Lucide icon name), title, description}]
- demo: {title, subtitle, disclaimer, callToAction}
- meta: {title, description, keywords[]}

EXAMPLE BUSINESS DESCRIPTIONS TO MATCH:
- "A dental clinic specializing in family dentistry and cosmetic procedures"
- "A boutique fitness studio offering personal training and group classes"
- "An accounting firm providing tax services and business consulting"
- "A pet grooming service with mobile and in-store options"
- "A real estate agency focusing on residential properties"
`;

export const INDUSTRY_SPECIFIC_PROMPTS = {
  healthcare: `
Focus on:
- Professional, empathetic tone
- HIPAA compliance awareness
- Clear boundaries about medical advice
- Appointment scheduling and patient intake
- Emergency vs non-emergency handling
- Insurance and payment information
- Patient comfort and care standards
`,

  professional_services: `
Focus on:
- Authoritative, trustworthy tone
- Confidentiality and professionalism
- Consultation scheduling and preparation
- Service explanations and expertise
- Clear fee structure communication
- Professional credentials and experience
`,

  retail_hospitality: `
Focus on:
- Warm, welcoming tone
- Customer service excellence
- Booking and reservation management
- Product/service information
- Special offers and loyalty programs
- Location and hours information
- Customer satisfaction focus
`,

  technology: `
Focus on:
- Knowledgeable, efficient tone
- Technical support and troubleshooting
- Service tier explanations
- Escalation procedures for complex issues
- Documentation and self-service options
- SLA and response time commitments
`,

  fitness_wellness: `
Focus on:
- Motivational, supportive tone
- Class schedules and membership options
- Fitness goals and program recommendations
- Facility information and amenities
- Health and safety protocols
- Personal training and specialized services
`
};

// Function to generate a complete prompt for a specific business
export function generateBusinessConfigPrompt(businessDescription: string, industry?: keyof typeof INDUSTRY_SPECIFIC_PROMPTS): string {
  let prompt = BUSINESS_CONFIG_PROMPT_TEMPLATE.replace('{businessDescription}', businessDescription);
  
  if (industry && INDUSTRY_SPECIFIC_PROMPTS[industry]) {
    prompt += `\n\nINDUSTRY-SPECIFIC GUIDELINES:\n${INDUSTRY_SPECIFIC_PROMPTS[industry]}`;
  }
  
  return prompt;
}

// Preset examples for quick generation
export const PRESET_BUSINESS_EXAMPLES = {
  dental_clinic: {
    description: "Modern Family Dental Practice offering comprehensive dental care including cleanings, fillings, crowns, cosmetic dentistry, and emergency services. Located in suburban area with convenient parking.",
    industry: "healthcare" as const
  },
  
  fitness_studio: {
    description: "Boutique fitness studio specializing in high-intensity interval training, yoga classes, personal training, and nutrition coaching. Small group classes with personalized attention.",
    industry: "fitness_wellness" as const
  },
  
  accounting_firm: {
    description: "Full-service accounting firm providing tax preparation, bookkeeping, payroll services, and business consulting for small to medium-sized businesses and individuals.",
    industry: "professional_services" as const
  },
  
  pet_grooming: {
    description: "Professional pet grooming service offering full-service grooming, nail trimming, bath services, and mobile grooming options for dogs and cats of all sizes.",
    industry: "retail_hospitality" as const
  },
  
  real_estate: {
    description: "Residential real estate agency helping buyers and sellers in the metropolitan area. Specializing in first-time homebuyers, luxury properties, and investment properties.",
    industry: "professional_services" as const
  },
  
  tech_support: {
    description: "Managed IT services company providing 24/7 technical support, cloud solutions, cybersecurity, and system maintenance for small and medium businesses.",
    industry: "technology" as const
  },
  
  restaurant: {
    description: "Upscale casual dining restaurant featuring farm-to-table American cuisine with seasonal menus, craft cocktails, and extensive wine selection. Available for private events.",
    industry: "retail_hospitality" as const
  },
  
  law_firm: {
    description: "General practice law firm specializing in family law, estate planning, personal injury, and small business legal services. Experienced attorneys with personalized service.",
    industry: "professional_services" as const
  },
  
  spa_wellness: {
    description: "Day spa offering massage therapy, facial treatments, body treatments, and wellness services. Focus on relaxation, stress relief, and natural healing approaches.",
    industry: "fitness_wellness" as const
  },
  
  auto_repair: {
    description: "Full-service auto repair shop providing engine diagnostics, brake service, oil changes, tire installation, and general automotive maintenance for all vehicle types.",
    industry: "professional_services" as const
  }
};

// Helper function to get a preset prompt
export function getPresetPrompt(presetKey: keyof typeof PRESET_BUSINESS_EXAMPLES): string {
  const preset = PRESET_BUSINESS_EXAMPLES[presetKey];
  return generateBusinessConfigPrompt(preset.description, preset.industry);
}

// Validation function to check if a generated config is valid
export function validateBusinessConfig(config: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check required fields
  if (!config.business?.name) errors.push("business.name is required");
  if (!config.business?.industry) errors.push("business.industry is required");
  if (!config.assistant?.systemPrompt) errors.push("assistant.systemPrompt is required");
  if (!config.questionCategories || config.questionCategories.length === 0) {
    errors.push("questionCategories must have at least one category");
  }
  if (!config.features || config.features.length === 0) {
    errors.push("features must have at least one feature");
  }
  
  // Check color validity
  const validColors = ['blue', 'green', 'purple', 'red', 'orange', 'indigo'];
  if (!validColors.includes(config.branding?.primaryColor)) {
    errors.push(`branding.primaryColor must be one of: ${validColors.join(', ')}`);
  }
  
  // Check question categories structure
  if (config.questionCategories) {
    config.questionCategories.forEach((cat: any, index: number) => {
      if (!cat.title) errors.push(`questionCategories[${index}].title is required`);
      if (!cat.questions || cat.questions.length === 0) {
        errors.push(`questionCategories[${index}].questions must have at least one question`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
