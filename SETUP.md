# AI Voice Agent Demo Setup Guide

This guide will help you configure the AI voice agent demo with your own API keys.

## 🚀 Quick Setup

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd AI-Voice-Agent_demo
npm install
```

### 2. Get API Keys

#### VAPI Token (Required)
1. Sign up at [vapi.ai](https://vapi.ai)
2. Go to your dashboard
3. Copy your API token
4. Note: VAPI handles the OpenAI integration, so you might not need a separate OpenAI key

#### ElevenLabs Voice ID (Required)
1. Sign up at [elevenlabs.io](https://elevenlabs.io)
2. Browse voices in the Voice Library
3. Click on any voice you like
4. Copy the Voice ID (usually starts with letters/numbers like `21m00Tcm4TlvDq8ikWAM`)

### 3. Configure Environment Variables
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file with your API keys:
   ```bash
   # Required - Get from vapi.ai
   VITE_VAPI_TOKEN=your-actual-vapi-token-here
   
   # Required - Get from elevenlabs.io  
   VITE_ELEVENLABS_VOICE_ID=your-actual-voice-id-here
   ```

### 4. Start the Demo
```bash
npm run dev
```

Visit `http://localhost:5173` and test the voice agent!

## 🔧 Advanced Configuration

### Using Custom Business Configs
If you want to modify individual business configurations instead of using environment variables:

1. Edit the business config files in `src/config/`
2. Replace `"your-vapi-token-here"` with your actual VAPI token
3. Replace `"21m00Tcm4TlvDq8ikWAM"` with your ElevenLabs voice ID

### Troubleshooting

#### "Call Failed: Invalid VAPI token"
- Check that your VAPI token is correct
- Ensure you have credits in your VAPI account
- Verify the token is active and not expired

#### "Voice configuration error"
- Check that your ElevenLabs voice ID is correct
- Ensure the voice ID format is correct (no extra spaces or characters)
- Try using a different voice from ElevenLabs

#### "Microphone access denied"
- Make sure you're using HTTPS or localhost
- Clear browser cache and try again
- Check browser settings to allow microphone access

#### No microphone prompt appears
- Ensure you're using a secure connection (HTTPS or localhost)
- Some browsers block microphone on non-secure connections
- Try refreshing the page and clicking the call button again

## 💡 Tips

- **Free Tiers**: Both VAPI and ElevenLabs offer free tiers to get started
- **Voice Selection**: Different voices work better for different business types
- **Testing**: Start with one business demo before setting up all 20
- **Performance**: The voice agent works best with good internet connection

## 🆘 Need Help?

1. Check the browser console for detailed error messages
2. Verify all API keys are correctly formatted
3. Test each service individually (VAPI dashboard, ElevenLabs voice preview)
4. Make sure you have sufficient credits in your accounts

## 📚 Documentation Links

- [VAPI Documentation](https://docs.vapi.ai)
- [ElevenLabs API Documentation](https://elevenlabs.io/docs)
- [Voice Agent Demo Features](./TEMPLATE_README.md)
