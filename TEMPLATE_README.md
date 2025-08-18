# VAPI Demo Template System

This project has been transformed into a flexible template system that can generate VAPI demos for any business niche. You can create customized AI phone assistant demos by simply providing business context in a prompt.

## 🚀 Quick Start

### Method 1: Use Existing Examples
The template comes with pre-configured examples for different industries:

1. **Clone the project**
2. **Open `src/App.tsx`** 
3. **Import a different config:**
```typescript
import { legalServicesConfig } from './config/example-configs';
// or
import { restaurantConfig } from './config/example-configs';
// or  
import { techSupportConfig } from './config/example-configs';
```
4. **Replace the default config:**
```typescript
const [currentConfig, setCurrentConfig] = useState<BusinessConfig>(legalServicesConfig);
```

### Method 2: Generate New Config with AI
Use the prompt templates to generate a new business configuration:

1. **Use the prompt generator:**
```typescript
import { generateBusinessConfigPrompt } from './config/prompt-templates';

const prompt = generateBusinessConfigPrompt(
  "A veterinary clinic specializing in small animal care with emergency services",
  "healthcare"
);
```

2. **Feed this prompt to ChatGPT/Claude** to generate a new `BusinessConfig` object

3. **Create a new config file** and import it in your app

## 📁 Project Structure

```
src/
├── config/
│   ├── business-config.ts      # Main configuration interface and default
│   ├── config-context.tsx     # React context and color utilities  
│   ├── example-configs.ts     # Pre-built configurations
│   ├── prompt-templates.ts    # AI prompt templates
│   └── config-selector.tsx    # UI component to switch configs
├── components/               # All components are now data-driven
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Demo.tsx
│   └── Footer.tsx
└── types/
    └── index.ts
```

## 🎯 Available Examples

The template includes ready-to-use configurations for:

- **🦴 Osteopathy Clinic** - Healthcare/wellness focused
- **⚖️ Legal Services** - Professional legal practice  
- **🍽️ Restaurant** - Hospitality and dining
- **💻 Tech Support** - Technical support services

## 🛠️ Creating Custom Configurations

### 1. Business Information
```typescript
business: {
  name: "Your Business Name",
  industry: "Your Industry", 
  tagline: "Your tagline",
  description: "How AI helps your business...",
  location: "Your location",
  hours: "Your operating hours"
}
```

### 2. Visual Branding
```typescript
branding: {
  primaryColor: "blue" | "green" | "purple" | "red" | "orange" | "indigo",
  accentColor: "blue", // Usually same as primary
  iconName: "ValidLucideIconName" // e.g., "Phone", "Heart", "Building"
}
```

### 3. AI Assistant Configuration  
```typescript
assistant: {
  name: "Your Assistant Name",
  vapiToken: "your-vapi-token-here",
  voiceId: "elevenlabs-voice-id", 
  systemPrompt: "Detailed instructions for the AI...",
  personality: {
    tone: "professional, warm, helpful",
    traits: ["empathetic", "knowledgeable", "efficient"]
  }
}
```

### 4. Services & Terminology
```typescript
services: {
  primary: ["Service 1", "Service 2"],
  secondary: ["Additional Service 1"],
  terminology: {
    client: "patient" | "customer" | "client",
    service: "treatment" | "consultation" | "service", 
    provider: "doctor" | "specialist" | "consultant",
    appointment: "appointment" | "session" | "consultation"
  }
}
```

### 5. Question Categories
Create 3-5 categories with sample questions:
```typescript
questionCategories: [
  {
    title: "Category Name",
    emoji: "🎯",
    description: "What this category demonstrates",
    questions: [
      "Sample question 1?",
      "Sample question 2?",
      "Sample question 3?"
    ]
  }
]
```

### 6. Features/Benefits
```typescript
features: [
  {
    icon: "Clock", // Lucide icon name
    title: "Feature Title", 
    description: "How this feature helps the business"
  }
]
```

## 🤖 AI Generation Process

### 1. Choose Your Business Type
Think about:
- What industry/niche?
- What services do they offer?
- Who are their customers?
- What's their tone/personality?
- What challenges does AI solve for them?

### 2. Generate the Prompt
```typescript
import { generateBusinessConfigPrompt, PRESET_BUSINESS_EXAMPLES } from './config/prompt-templates';

// For a custom business:
const prompt = generateBusinessConfigPrompt(
  "Your detailed business description here",
  "healthcare" // or "professional_services", "retail_hospitality", etc.
);

// Or use a preset:
import { getPresetPrompt } from './config/prompt-templates';
const prompt = getPresetPrompt('dental_clinic');
```

### 3. Get AI-Generated Config
- Copy the prompt to ChatGPT/Claude
- Ask it to generate a BusinessConfig object
- Copy the result into a new file

### 4. Integrate the Config
```typescript
// Create: src/config/your-business-config.ts
import { BusinessConfig } from './business-config';

export const yourBusinessConfig: BusinessConfig = {
  // Paste AI-generated config here
};

// Update: src/App.tsx
import { yourBusinessConfig } from './config/your-business-config';
const [currentConfig, setCurrentConfig] = useState(yourBusinessConfig);
```

## 🎨 Customization Tips

### Colors
- **Blue**: Professional, trustworthy (healthcare, finance)
- **Green**: Growth, health (wellness, environmental)  
- **Purple**: Creative, premium (beauty, luxury)
- **Orange**: Energetic, friendly (food, fitness)
- **Red**: Urgent, powerful (emergency, automotive)
- **Indigo**: Sophisticated, tech (legal, consulting)

### Icons
Use [Lucide React icons](https://lucide.dev/icons/). Popular choices:
- **Healthcare**: `Heart`, `Stethoscope`, `Pill`
- **Legal**: `Scale`, `FileText`, `Shield`
- **Food**: `ChefHat`, `Utensils`, `Coffee`
- **Tech**: `Computer`, `Smartphone`, `Cloud`
- **Fitness**: `Dumbbell`, `Activity`, `Target`

### System Prompts
Make them:
- **Industry-specific** with proper terminology
- **Clear about boundaries** (no medical/legal advice)
- **Helpful and professional** in tone
- **Detailed about services** offered
- **Specific about escalation** procedures

## 🧪 Testing Your Configuration

1. **Start the development server:**
```bash
npm run dev
```

2. **Test the config switcher** in the top-right corner

3. **Try different scenarios:**
   - Call the AI assistant
   - Ask sample questions from each category
   - Test different business flows

4. **Validate the config:**
```typescript
import { validateBusinessConfig } from './config/prompt-templates';
const result = validateBusinessConfig(yourConfig);
console.log(result.isValid, result.errors);
```

## 📋 Deployment Checklist

Before deploying your customized demo:

- [ ] **Update VAPI token** to your actual token
- [ ] **Choose appropriate voice ID** for your industry
- [ ] **Test all question categories** thoroughly  
- [ ] **Verify color scheme** looks professional
- [ ] **Check all terminology** is industry-appropriate
- [ ] **Update meta tags** for SEO
- [ ] **Test on mobile devices**
- [ ] **Validate configuration** has no errors

## 🔄 Switching Between Configs

The template supports live configuration switching. Users can see how the same template adapts to different business types using the config selector in the top-right corner.

To add more configs to the selector, update `src/config/config-selector.tsx`:

```typescript
const availableConfigs = {
  'your_business': {
    name: 'Your Business Type',
    config: yourBusinessConfig
  },
  // ... other configs
};
```

## 💡 Advanced Customization

### Custom Color Schemes
Add new colors in `src/config/config-context.tsx`:

```typescript
export const getColorClasses = (color: string) => {
  const colorMap = {
    // ... existing colors
    'teal': {
      primary: 'bg-teal-500',
      primaryHover: 'hover:bg-teal-600',
      // ... other teal classes
    }
  };
}
```

### Custom Features
Create industry-specific features that highlight unique value propositions for that business type.

### Advanced System Prompts
Include industry regulations, specific workflows, integration details, and sophisticated escalation logic.

## 🤝 Contributing

To add more example configurations:

1. Create the config in `src/config/example-configs.ts`
2. Add it to the config selector
3. Create a preset in `prompt-templates.ts` 
4. Update this README with the new example

## 📞 Support

For questions about customizing this template:
- Check existing configurations for examples
- Use the validation function to debug issues
- Test with the AI prompt templates for new industries

---

This template system makes it easy to create professional VAPI demos for any business niche. The key is providing good business context to the AI and fine-tuning the generated configuration to match your exact needs.
