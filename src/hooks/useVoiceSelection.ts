import { useState, useEffect } from 'react';
import { getVoiceId } from '../config/constants';

/**
 * Voice preference type
 */
export type VoicePreference = 'FEMALE' | 'MALE';

/**
 * Local storage key for voice preference
 */
const VOICE_PREFERENCE_KEY = 'voiceAgentDemo_voicePreference';

/**
 * Custom hook for managing voice selection with localStorage persistence
 *
 * @returns Object containing selectedVoice, changeVoice function, and voiceId
 */
export function useVoiceSelection() {
  const [selectedVoice, setSelectedVoice] = useState<VoicePreference>('FEMALE');

  // Load voice preference from localStorage on mount
  useEffect(() => {
    try {
      const savedVoice = localStorage.getItem(VOICE_PREFERENCE_KEY);
      if (savedVoice === 'FEMALE' || savedVoice === 'MALE') {
        setSelectedVoice(savedVoice);
      }
    } catch (error) {
      console.warn('Failed to load voice preference from localStorage:', error);
      // Fallback to default voice if localStorage is not available
    }
  }, []);

  /**
   * Changes the voice preference and saves to localStorage
   * @param voice - New voice preference ('FEMALE' or 'MALE')
   */
  const changeVoice = (voice: VoicePreference) => {
    setSelectedVoice(voice);
    try {
      localStorage.setItem(VOICE_PREFERENCE_KEY, voice);
    } catch (error) {
      console.warn('Failed to save voice preference to localStorage:', error);
      // Continue anyway - the voice will still work for this session
    }
  };

  // Get the current voice ID based on selection
  const voiceId = getVoiceId(selectedVoice);

  return {
    selectedVoice,
    changeVoice,
    voiceId,
  };
}
