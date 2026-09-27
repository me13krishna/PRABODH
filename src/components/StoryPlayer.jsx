import React, { useState, useEffect } from 'react';
import { Volume2, Star, CheckCircle, ArrowRight, RotateCcw, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import MangoCountersTray from './MangoCountersTray';
import VoiceInputButton from './VoiceInputButton';
import { speakText, stopSpeaking } from '../services/speech';
import { saveTelemetryEvent } from '../services/db';
import { sfx } from '../services/soundEffects';
import { t } from '../i18n/translations';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export default function StoryPlayer({ mission, onCompleteMission, onBackToMissions, soundEnabled, lang = 'hi' }) {
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

  const getLoc = (field) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.hi || field.en || '';
  };

  const handlePlayAudio = () => {
    const textToSpeak = getLoc(currentStep.question_text) || getLoc(currentStep.dialog);
    if (textToSpeak) {
      speakText(textToSpeak, lang);
    }
  };

  useEffect(() => {
    if (soundEnabled && currentStep) {
      handlePlayAudio();
    }
    return () => stopSpeaking();
  }, [currentStepIdx, soundEnabled, lang]);

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
        isCorrect = true;
        mode = 'VOICE';
      }
    } else {
      isCorrect = true;
    }

    if (!isCorrect) {
      setAttempts(prev => prev + 1);
      if (stars > 1) setStars(prev => prev - 1);
      sfx.playHint();
      alert(lang === 'mr' ? 'अजून थोडे प्रयत्न करा! सुगावा (Hint) पहा.' : lang === 'en' ? 'Try once more! Check hint for help.' : 'थोड़ा प्रयास और करें! संकेत (Hint) देखें।');
      return;
    }

    sfx.playVictory();
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch(e){}

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
      explainable_tag: currentStep.explainable_tag,
      language: lang
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
      <Card style={{
        maxWidth: '700px',
        margin: '40px auto',
        padding: '36px 28px',
        textAlign: 'center',
        border: '3px solid #DCFCE7'
      }}>
        <div style={{ fontSize: '4.5rem', marginBottom: '12px' }} className="bounce-anim">🏆</div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#166534', margin: '0 0 8px 0' }}>
          {t('missionCompleted', lang)}
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: 600 }}>
          {t('starsEarned', lang)}: {stars} ⭐
        </p>

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284C7', fontWeight: 800, marginBottom: '8px' }}>
              <ShieldCheck size={18} />
              <span>PRABODH Stealth Assessment Telemetry:</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: '#334155', fontWeight: 600 }}>
              <div>• Interaction Mode: <b>{telemetryLog.interaction_mode}</b></div>
              <div>• Time Spent: <b>{(telemetryLog.time_spent_ms / 1000).toFixed(1)}s</b></div>
              <div>• Language: <b>{telemetryLog.language.toUpperCase()}</b></div>
              <div>• FLN Skill Tag: <b style={{ color: '#16A34A' }}>{telemetryLog.explainable_tag}</b></div>
            </div>
          </div>
        )}

        <Button variant="primary" size="lg" onClick={onBackToMissions} style={{ marginTop: '16px' }}>
          <span>{t('nextMission', lang)}</span>
          <ArrowRight size={20} />
        </Button>
      </Card>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px' }}>
      {/* Storybook Header Control Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        padding: '14px 20px',
        borderRadius: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        marginBottom: '20px'
      }}>
        <Button variant="secondary" size="sm" onClick={handlePlayAudio}>
          <Volume2 size={18} />
          <span>[ 🔊 {t('audioListener', lang)} ] {getLoc(currentStep.character)}</span>
        </Button>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
          {getLoc(mission.title)}
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              size={22}
              color={i < stars ? '#F59E0B' : '#CBD5E1'}
              fill={i < stars ? '#F59E0B' : 'none'}
            />
          ))}
        </div>
      </div>

      {/* Storybook Dialogue Scene Card */}
      <Card variant="accent" style={{ textAlign: 'center', position: 'relative', marginBottom: '24px' }}>
        <div style={{
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          background: '#E0F2FE',
          border: '3px solid #0284C7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.6rem',
          margin: '-52px auto 12px auto',
          boxShadow: '0 6px 16px rgba(2, 132, 199, 0.2)'
        }} className="bounce-anim">
          {currentStep.characterAvatar || '👩‍🌾'}
        </div>

        <Badge variant="sky" style={{ marginBottom: '12px' }}>
          {getLoc(currentStep.character)}
        </Badge>

        <p style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 600, margin: '0 0 12px 0' }}>
          "{getLoc(currentStep.dialog)}"
        </p>

        <p className="child-text" style={{ color: '#0F172A', fontWeight: 800, margin: 0 }}>
          {getLoc(currentStep.question_text)}
        </p>

        {showHint && (
          <div style={{
            marginTop: '16px',
            background: '#FEF3C7',
            color: '#92400E',
            padding: '12px 18px',
            borderRadius: '16px',
            fontWeight: 700,
            fontSize: '0.95rem',
            border: '1px solid #FCD34D'
          }}>
            💡 {t('hint', lang)}: {getLoc(currentStep.hint)}
          </div>
        )}
      </Card>

      {/* Manipulatives or Answer Choices */}
      {currentStep.type === 'DRAG_COUNTERS' && (
        <MangoCountersTray
          initialCount={currentStep.initial_count}
          subtractCount={currentStep.subtract_count}
          onAnswerChange={setTrayAnswer}
          lang={lang}
        />
      )}

      {currentStep.type === 'VOICE_OR_TAP' && (
        <Card style={{ textAlign: 'center', margin: '20px 0' }}>
          <h4 style={{ color: '#475569', marginBottom: '16px', fontWeight: 700 }}>Select Answer:</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {currentStep.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  sfx.playPop();
                  setSelectedOption(opt);
                }}
                style={{
                  minWidth: '70px',
                  minHeight: '70px',
                  borderRadius: '20px',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  border: selectedOption === opt ? '3px solid #0284C7' : '2px solid #E2E8F0',
                  background: selectedOption === opt ? '#E0F2FE' : '#FFFFFF',
                  color: selectedOption === opt ? '#0284C7' : '#0F172A',
                  cursor: 'pointer'
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* Action Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginTop: '20px'
      }}>
        <VoiceInputButton
          targetText={getLoc(currentStep.target_text) || getLoc(currentStep.question_text)}
          onVoiceResult={(res) => {
            setVoiceResult(res);
            handleVerifyAnswer('VOICE');
          }}
          soundEnabled={soundEnabled}
        />

        <div style={{ display: 'flex', gap: '12px' }}>
          {!showHint && (
            <Button
              variant="sunrise"
              size="md"
              onClick={() => {
                sfx.playHint();
                setShowHint(true);
                setHintsUsed(prev => prev + 1);
              }}
            >
              💡 {t('hint', lang)}
            </Button>
          )}

          <Button
            variant="growth"
            size="md"
            onClick={() => handleVerifyAnswer('TOUCH')}
          >
            <CheckCircle size={22} />
            <span>{t('submitAnswer', lang)}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
