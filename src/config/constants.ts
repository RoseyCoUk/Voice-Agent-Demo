// Note: Using Vite's import.meta.env for environment variables

// Available voices
export const VOICES = {
  FEMALE: {
    id: 'XrExE9yKIg1WjnnlVkGX',
    name: 'Female Voice',
    description: 'Professional female voice'
  },
  MALE: {
    id: 'bIHbv24MWmeRgasZH58o',
    name: 'Male Voice',
    description: 'Professional male voice'
  }
} as const;

// Default voice (can be overridden by environment or user selection)
export const DEFAULT_VOICE = import.meta.env.VITE_DEFAULT_VOICE || 'FEMALE';
export const FALLBACK_VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Old Rachel voice

// Get voice ID by preference
export const getVoiceId = (preference: 'FEMALE' | 'MALE' = DEFAULT_VOICE as 'FEMALE' | 'MALE') => {
  return VOICES[preference].id;
};

// Validate on startup
if (!DEFAULT_VOICE) {
  console.warn('No default voice configured, using female voice');
}
