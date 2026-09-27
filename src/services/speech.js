// Web Speech API Wrapper supporting Hindi (hi-IN), English (en-IN), and Marathi (mr-IN)

const LANG_MAP = {
  hi: 'hi-IN',
  en: 'en-IN',
  mr: 'mr-IN'
};

// Text-to-Speech (TTS)
export function speakText(text, lang = 'hi', onEndCallback) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this browser.');
    if (onEndCallback) onEndCallback();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const targetLang = LANG_MAP[lang] || lang || 'hi-IN';
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = targetLang;
  utterance.rate = 0.88; // Friendly pace for kids
  utterance.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const matchingVoice = voices.find(v => v.lang.toLowerCase().includes(targetLang.toLowerCase().substring(0, 2)));
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  }

  utterance.onend = () => {
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = () => {
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Speech Recognition (STT Engine)
export function startListening({ lang = 'hi', onResult, onError, onEnd }) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn('SpeechRecognition API not supported natively.');
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = LANG_MAP[lang] || lang || 'hi-IN';

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
    if (onError) onError(e);
    return null;
  }
}
