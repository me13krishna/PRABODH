// Web Speech API Wrapper for Audio TTS & Speech-to-Text STT Engine

// Text-to-Speech (TTS)
export function speakText(text, lang = 'hi-IN', onEndCallback) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this browser.');
    if (onEndCallback) onEndCallback();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.88; // Slower rate for Grade 2-3 kids
  utterance.pitch = 1.05; // Slightly higher/friendly pitch

  // Try to find a Hindi voice if available
  const voices = window.speechSynthesis.getVoices();
  const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('HI'));
  if (hindiVoice) {
    utterance.voice = hindiVoice;
  }

  utterance.onend = () => {
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = (e) => {
    console.warn('TTS playback error:', e);
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.speak(utterance);
}

// Stop any active TTS audio
export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Speech Recognition (STT Engine)
export function startListening({ lang = 'hi-IN', onResult, onError, onEnd }) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn('SpeechRecognition API not supported natively in this browser.');
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = lang;

  recognition.onresult = (event) => {
    let transcript = '';
    let confidence = 0.85;

    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
      if (event.results[i][0].confidence) {
        confidence = event.results[i][0].confidence;
      }
    }

    if (onResult) {
      onResult({
        transcript: transcript.trim(),
        confidence: Math.round(confidence * 100) / 100,
        isFinal: event.results[event.results.length - 1].isFinal
      });
    }
  };

  recognition.onerror = (event) => {
    if (onError) onError(event.error);
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  try {
    recognition.start();
    return recognition;
  } catch (e) {
    console.warn('Error starting recognition:', e);
    if (onError) onError(e);
    return null;
  }
}
