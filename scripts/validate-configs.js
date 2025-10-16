#!/usr/bin/env node

/**
 * Business Config Validation Script
 *
 * Medium validation level - checks fields and types
 * Run with: npm run validate:configs
 */

import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONFIG_DIR = join(__dirname, '../src/config');

// Required fields for BusinessConfig
const REQUIRED_FIELDS = [
  'business',
  'assistant',
  'branding',
  'services',
  'questionCategories',
  'features',
  'demo',
  'meta',
  'category',
  'tags',
  'searchKeywords',
  'availability'
];

// Valid availability values
const VALID_AVAILABILITY = ['business-hours', '24/7', 'appointment-only'];

// Valid voice IDs
const VALID_VOICE_IDS = [
  'XrExE9yKIg1WjnnlVkGX', // Female
  'bIHbv24MWmeRgasZH58o', // Male
  '21m00Tcm4TlvDq8ikWAM'  // Old Rachel (fallback)
];

let totalConfigs = 0;
let validConfigs = 0;
let errors = [];

/**
 * Validate a single config object
 */
function validateConfig(config, fileName) {
  const configErrors = [];

  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!(field in config)) {
      configErrors.push(`Missing required field: ${field}`);
    }
  }

  // Validate field types
  if (config.business && typeof config.business !== 'object') {
    configErrors.push('Field "business" must be an object');
  }

  if (config.assistant && typeof config.assistant !== 'object') {
    configErrors.push('Field "assistant" must be an object');
  }

  if (config.category && typeof config.category !== 'string') {
    configErrors.push('Field "category" must be a string');
  }

  if (config.tags) {
    if (!Array.isArray(config.tags)) {
      configErrors.push('Field "tags" must be an array');
    } else if (config.tags.length === 0) {
      configErrors.push('Field "tags" must not be empty');
    }
  }

  if (config.searchKeywords) {
    if (!Array.isArray(config.searchKeywords)) {
      configErrors.push('Field "searchKeywords" must be an array');
    } else if (config.searchKeywords.length === 0) {
      configErrors.push('Field "searchKeywords" must not be empty');
    }
  }

  if (config.availability && !VALID_AVAILABILITY.includes(config.availability)) {
    configErrors.push(`Field "availability" must be one of: ${VALID_AVAILABILITY.join(', ')}`);
  }

  // Validate voice ID (if present)
  if (config.assistant && config.assistant.voiceId) {
    const voiceId = config.assistant.voiceId;
    // Check if it's a direct voice ID or a function call
    if (typeof voiceId === 'string' && !VALID_VOICE_IDS.includes(voiceId)) {
      configErrors.push(`Invalid voiceId "${voiceId}". Must be one of: ${VALID_VOICE_IDS.join(', ')}, or use getVoiceId()`);
    }
  }

  return configErrors;
}

/**
 * Extract config objects from file content
 */
function extractConfigsFromContent(content, fileName) {
  const configs = [];

  // Look for exported config objects
  const exportPattern = /export\s+const\s+(\w+)\s*:\s*BusinessConfig\s*=\s*{/g;
  let match;

  while ((match = exportPattern.exec(content)) !== null) {
    configs.push({ name: match[1], hasConfig: true });
  }

  return configs;
}

/**
 * Main validation function
 */
async function validateConfigs() {
  console.log('🔍 Validating business configurations...\n');

  try {
    const files = await readdir(CONFIG_DIR);
    const configFiles = files.filter(f =>
      f.endsWith('.ts') &&
      f !== 'business-config.ts' &&
      f !== 'categories.ts' &&
      f !== 'constants.ts' &&
      f !== 'prompt-templates.ts' &&
      f !== '_template-config.ts'
    );

    console.log(`Found ${configFiles.length} config files to validate\n`);

    for (const file of configFiles) {
      const filePath = join(CONFIG_DIR, file);
      const content = await readFile(filePath, 'utf-8');

      // Extract config names from file
      const configs = extractConfigsFromContent(content, file);

      if (configs.length === 0) {
        console.log(`⚠️  ${file}: No config objects found`);
        continue;
      }

      // Check for required fields in content
      let fileHasErrors = false;

      for (const field of REQUIRED_FIELDS) {
        if (!content.includes(`${field}:`)) {
          errors.push({
            file,
            error: `Missing required field: ${field}`
          });
          fileHasErrors = true;
        }
      }

      // Check for valid availability values
      const availabilityMatch = content.match(/availability:\s*['"]([^'"]+)['"]/g);
      if (availabilityMatch) {
        availabilityMatch.forEach(match => {
          const value = match.match(/['"]([^'"]+)['"]/)[1];
          if (!VALID_AVAILABILITY.includes(value)) {
            errors.push({
              file,
              error: `Invalid availability value: "${value}". Must be one of: ${VALID_AVAILABILITY.join(', ')}`
            });
            fileHasErrors = true;
          }
        });
      }

      // Check for tags and searchKeywords arrays
      if (!content.includes('tags:') || !content.match(/tags:\s*\[/)) {
        errors.push({
          file,
          error: 'Missing or invalid "tags" array'
        });
        fileHasErrors = true;
      }

      if (!content.includes('searchKeywords:') || !content.match(/searchKeywords:\s*\[/)) {
        errors.push({
          file,
          error: 'Missing or invalid "searchKeywords" array'
        });
        fileHasErrors = true;
      }

      totalConfigs += configs.length;

      if (!fileHasErrors) {
        validConfigs += configs.length;
        console.log(`✅ ${file}: ${configs.length} config(s) valid`);
      } else {
        console.log(`❌ ${file}: Has validation errors`);
      }
    }

    // Print summary
    console.log('\n' + '='.repeat(50));
    console.log('VALIDATION SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total configs found: ${totalConfigs}`);
    console.log(`Valid configs: ${validConfigs}`);
    console.log(`Configs with errors: ${totalConfigs - validConfigs}`);

    if (errors.length > 0) {
      console.log('\n❌ ERRORS FOUND:\n');
      errors.forEach(({ file, error }) => {
        console.log(`  ${file}: ${error}`);
      });
      process.exit(1);
    } else {
      console.log('\n✅ All configurations are valid!');
      process.exit(0);
    }

  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  }
}

// Run validation
validateConfigs();
