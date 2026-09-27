import React, { useState, useEffect } from 'react';
import { Volume2, Star, CheckCircle, ArrowRight, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import MangoCountersTray from './MangoCountersTray';
import VoiceInputButton from './VoiceInputButton';
import { speakText, stopSpeaking } from '../services/speech';
import { saveTelemetryEvent } from '../services/db';

export default function StoryPlayer({ mission, onCompleteMission, onBackToMissions, soundEnabled }) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [stars, setStars] = useState(3);
  const [attempts, setAttempts] = useState(1);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [startTime] = useState(Date.now());
  const [trayAnswer, setTrayAnswer] = useState({ remainingCount: mission.steps[0].initial_count, subtractedCount: 0 });
  const [voiceResult, setVoiceResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [telemetryLog, setTelemetryLog] = useState(null);

  const currentStep = mission.steps[currentStepIdx];

  // TTS audio reader
  const handlePlayAudio = () => {
    if (currentStep && currentStep.question_text) {
      speakText(currentStep.question_text, 'hi-IN');
    }
  };

  useEffect(() => {
    // Auto-read prompt when step loads if soundEnabled is true
    if (soundEnabled && currentStep) {
      handlePlayAudio();
    }
    return () => stopSpeaking();
  }, [currentStepIdx, soundEnabled]);

  // Check correctness
  const handleVerifyAnswer = async (inputModeOverride) => {
    let isCorrect = false;
    let mode = inputModeOverride || currentStep.type;

    if (currentStep.type === 'DRAG_COUNTERS') {
      isCorrect = (trayAnswer.remainingCount === currentStep.expected_answer);
    } else if (currentStep.type === 'VOICE_OR_TAP') {
      if (selectedOption !== null) {
        isCorrect = (Number(selectedOption) === currentStep.expected_answer);
        mode = 'TOUCH';
      } else if (voiceResult && voiceResult.transcript) {
        isCorrect = voiceResult.transcript.includes('पाँच') || voiceResult.transcript.includes('5') || voiceResult.transcript.includes('3');
        mode = 'VOICE';
      }
    } else {
      isCorrect = true; // Reading fluency
    }

    if (!isCorrect) {
      setAttempts(prev => prev + 1);
      if (stars > 1) setStars(prev => prev - 1);
      alert('थोड़ा प्रयास और करें! सही उत्तर पाने के लिए संकेत (Hint) देखें।');
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch(e){}

    // Record stealth assessment telemetry
    const timeSpentMs = Date.now() - startTime;
    const sessionEvent = {
      session_id: `sess_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      student_id: "prabodh_anon_8832",
      mission_id: mission.id,
      task_id: currentStep.step_id,
      interaction_mode: mode,
      attempts: attempts,
      hints_used: hintsUsed,
      time_spent_ms: timeSpentMs,
      is_correct: true,
      raw_transcript: voiceResult ? voiceResult.transcript : `Tray remaining: ${trayAnswer.remainingCount}`,
      stt_confidence: voiceResult ? voiceResult.confidence : 0.95,
      explainable_tag: currentStep.explainable_tag
    };

    await saveTelemetryEvent(sessionEvent);
    setTelemetryLog(sessionEvent);

    if (currentStepIdx < mission.steps.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
      setShowHint(false);
      setSelectedOption(null);
      setVoiceResult(null);
    } else {
      setIsCompleted(true);
      if (onCompleteMission) onCompleteMission(sessionEvent);
    }
  };

  if (isCompleted) {
    return (
      <div style={{
        maxWidth: '700px',
        margin: '40px auto',
        padding: '32px',
        background: '#FFFFFF',
        borderRadius: '32px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '3px solid #DCFCE7'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🏆</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#166534', margin: '0 0 8px 0' }}>
          शाबाश! मिशन पूरा हुआ!
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: 600 }}>
          आपने {stars} सितारे ⭐ अर्जित किए!
        </p>

        {/* Stealth Assessment Log Summary Badge (Invisible assessment decoded for user review) */}
        {telemetryLog && (
          <div style={{
            background: '#F8FAFC',
            border: '2px dashed #CBD5E1',
            borderRadius: '20px',
            padding: '16px',
            margin: '24px 0',
            textAlign: 'left',
            fontSize: '0.9rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontWeight: 800, marginBottom: '8px' }}>
              <ShieldCheck size={18} />
              <span>प्रबोध AI Stealth Assessment Telemetry Logged:</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: '#334155', fontWeight: 600 }}>
              <div>• Interaction Mode: <b>{telemetryLog.interaction_mode}</b></div>
              <div>• Time Spent: <b>{(telemetryLog.time_spent_ms / 1000).toFixed(1)}s</b></div>
              <div>• STT Confidence: <b>{Math.round(telemetryLog.stt_confidence * 100)}%</b></div>
              <div>• FLN Skill Tag: <b style={{ color: '#16A34A' }}>{telemetryLog.explainable_tag}</b></div>
            </div>
          </div>
        )}

        <button
          onClick={onBackToMissions}
          className="child-btn"
          style={{ background: '#2563EB', color: '#FFFFFF', marginTop: '16px' }}
        >
          <span>अगला मिशन चुनें (Next Mission)</span>
          <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px' }}>
      {/* Wireframe Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        padding: '12px 20px',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '20px'
      }}>
        {/* Audio Listener Button */}
        <button
          onClick={handlePlayAudio}
          style={{
            background: '#EFF6FF',
            border: '2px solid #BFDBFE',
            color: '#2563EB',
            borderRadius: '16px',
            padding: '8px 16px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}
        >
          <Volume2 size={20} />
          <span>[ 🔊 Audio Listener ] {currentStep.character}</span>
        </button>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
          {mission.title}
        </h2>

        {/* Progress Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              size={24}
              color={i < stars ? '#F59E0B' : '#CBD5E1'}
              fill={i < stars ? '#F59E0B' : 'none'}
            />
          ))}
        </div>
      </div>

      {/* Story Question Box */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
        border: '3px solid #2563EB',
        borderRadius: '28px',
        padding: '24px',
        boxShadow: '0 12px 28px rgba(37, 99, 235, 0.12)',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-block',
          background: '#DBEAFE',
          color: '#1E40AF',
          fontWeight: 800,
          padding: '4px 14px',
          borderRadius: '16px',
          fontSize: '0.85rem',
          marginBottom: '12px'
        }}>
          {currentStep.character} संवाद (Dialog)
        </div>

        <p className="child-text" style={{ color: '#0F172A', fontWeight: 700, margin: 0 }}>
          "{currentStep.question_text}"
        </p>

        {showHint && (
          <div style={{
            marginTop: '16px',
            background: '#FEF3C7',
            color: '#92400E',
            padding: '10px 16px',
            borderRadius: '16px',
            fontWeight: 700,
            fontSize: '0.95rem',
            border: '1px solid #FCD34D'
          }}>
            💡 संकेत (Hint): {currentStep.hint}
          </div>
        )}
      </div>

      {/* Interactive Manipulative or Voice/Option Input based on Step Type */}
      {currentStep.type === 'DRAG_COUNTERS' && (
        <MangoCountersTray
          initialCount={currentStep.initial_count}
          subtractCount={currentStep.subtract_count}
          onAnswerChange={setTrayAnswer}
        />
      )}

      {currentStep.type === 'VOICE_OR_TAP' && (
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '20px',
          margin: '20px 0',
          boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#475569', marginBottom: '16px' }}>विकल्प चुनें (Tap Answer Option):</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {currentStep.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedOption(opt)}
                style={{
                  minWidth: '70px',
                  minHeight: '70px',
                  borderRadius: '20px',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  border: selectedOption === opt ? '3px solid #2563EB' : '2px solid #E2E8F0',
                  background: selectedOption === opt ? '#EFF6FF' : '#FFFFFF',
                  color: selectedOption === opt ? '#2563EB' : '#0F172A',
                  cursor: 'pointer'
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Multi-modal Action Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginTop: '20px'
      }}>
        <VoiceInputButton
          targetText={currentStep.target_text || currentStep.question_text}
          onVoiceResult={(res) => {
            setVoiceResult(res);
            handleVerifyAnswer('VOICE');
          }}
          soundEnabled={soundEnabled}
        />

        <div style={{ display: 'flex', gap: '12px' }}>
          {!showHint && (
            <button
              onClick={() => {
                setShowHint(true);
                setHintsUsed(prev => prev + 1);
              }}
              style={{
                background: '#FEF3C7',
                color: '#D97706',
                border: '2px solid #FCD34D',
                borderRadius: '16px',
                padding: '12px 20px',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              💡 Hint (संकेत)
            </button>
          )}

          <button
            onClick={() => handleVerifyAnswer('TOUCH')}
            className="child-btn"
            style={{
              background: '#16A34A',
              color: '#FFFFFF',
              boxShadow: '0 8px 20px rgba(22, 163, 74, 0.3)'
            }}
          >
            <CheckCircle size={22} />
            <span>उत्तर सबमिट करें (Submit)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
