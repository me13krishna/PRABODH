import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, HeartHandshake, Award, BookOpen, Calendar, Star } from 'lucide-react';
import { generateParentPrompt } from '../services/aiService';
import { t } from '../i18n/translations';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ProgressBar } from './ui/ProgressBar';

export default function WhatsAppPromptGenerator({ apiKey, lang = 'hi' }) {
  const [childName, setChildName] = useState('Aarav (आरव)');
  const [skillGap, setSkillGap] = useState('Counting backwards from 10 to 1');
  const [householdItem, setHouseholdItem] = useState('playing with pebbles/dal (दाल/कंकड़)');
  const [promptText, setPromptText] = useState('नमस्ते! आज आरव के साथ 10 राजमा/दाल के दाने लें। एक-एक दाना हटाते हुए 10 से 1 तक उल्टी गिनती गिनने का खेल खेलें। सिर्फ 5 मिनट दें! - प्रबोध टीम');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generateParentPrompt({
      childName,
      skillGap,
      interest: householdItem,
      language: lang === 'mr' ? 'Marathi' : lang === 'en' ? 'English' : 'Hindi',
      apiKey
    });
    setPromptText(result);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(promptText)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 16px' }}>
      {/* Parent Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
        borderRadius: '32px',
        padding: '32px 28px',
        color: '#FFFFFF',
        boxShadow: '0 16px 32px rgba(22, 163, 74, 0.22)',
        marginBottom: '28px'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '4px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 800,
          marginBottom: '12px'
        }}>
          {t('parentTitle', lang)}
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          {lang === 'mr' ? '५-मिनिट गृहकृती आणि प्रगती अहवाल' : lang === 'en' ? '5-Min Home Learning & Progress Reports' : '5-मिनट घरेलू गतिविधि और प्रगति रिपोर्ट'}
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.95, margin: 0, fontWeight: 500 }}>
          {t('parentSubtitle', lang)}
        </p>
      </div>

      {/* "What Did My Child Learn Today?" Summary Card */}
      <Card variant="sunrise" style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.8rem' }}>🌟</span>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {lang === 'mr' ? 'माझ्या मुलाने आज काय शिकले?' : lang === 'en' ? 'What Did My Child Learn Today?' : 'आज मेरे बच्चे ने क्या सीखा?'}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0, fontWeight: 600 }}>
                Child Profile: <b>{childName}</b> • Grade 3
              </p>
            </div>
          </div>
          <Badge variant="growth">Completed 2 Missions Today</Badge>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: '16px', border: '1px solid #FCD34D' }}>
            <strong style={{ fontSize: '0.8rem', color: '#92400E' }}>STRENGTHS:</strong>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginTop: '2px' }}>Concrete Subtraction (8 - 3 = 5) 🥭</div>
          </div>
          <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: '16px', border: '1px solid #FCD34D' }}>
            <strong style={{ fontSize: '0.8rem', color: '#92400E' }}>PRACTICE AREA:</strong>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginTop: '2px' }}>Counting backwards (10 to 1) 🔢</div>
          </div>
        </div>

        <ProgressBar value={78} max={100} color="#F59E0B" height="10px" label="Weekly Learning Goal Progress" />
      </Card>

      {/* Input Form Box */}
      <Card style={{ marginBottom: '28px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
          Generate WhatsApp Household Activity:
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
              {t('childNameLabel', lang)}
            </label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
              {t('skillGapLabel', lang)}
            </label>
            <select
              value={skillGap}
              onChange={(e) => setSkillGap(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            >
              <option value="Counting backwards from 10 to 1">Counting backwards (10 to 1)</option>
              <option value="Single Digit Concrete Subtraction">Single Digit Subtraction</option>
              <option value="2-Syllable Word Reading">2-Syllable Word Reading</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
              {t('householdItemLabel', lang)}
            </label>
            <select
              value={householdItem}
              onChange={(e) => setHouseholdItem(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            >
              <option value="playing with pebbles/dal (दाल/कंकड़)">Dal Grains / Rajma</option>
              <option value="counting coins (सिक्के)">Coins (₹1, ₹2)</option>
              <option value="matching flashcard stones (छोटे पत्थर)">Pebbles / Stones</option>
            </select>
          </div>
        </div>

        <Button variant="growth" size="md" onClick={handleGenerate} disabled={isGenerating}>
          <Sparkles size={18} />
          <span>{isGenerating ? 'Generating...' : t('generatePrompt', lang)}</span>
        </Button>
      </Card>

      {/* Generated WhatsApp Message Preview Card */}
      <div style={{
        background: '#DCFCE7',
        border: '2px solid #86EFAC',
        borderRadius: '28px',
        padding: '24px',
        boxShadow: '0 12px 24px rgba(22, 163, 74, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#15803D', fontWeight: 800 }}>
            <span style={{ fontSize: '1.4rem' }}>💬</span>
            <span>WhatsApp Message Preview ({lang.toUpperCase()}):</span>
          </div>

          <Badge variant="growth">Non-Judgmental & Encouraging</Badge>
        </div>

        <div style={{
          background: '#FFFFFF',
          border: '1px solid #BBF7D0',
          borderRadius: '20px',
          padding: '20px',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#0F172A',
          lineHeight: '1.8',
          marginBottom: '20px'
        }}>
          "{promptText}"
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="secondary" size="md" onClick={handleCopy}>
            {copied ? <Check size={18} color="#16A34A" /> : <Copy size={18} />}
            <span>{copied ? t('copied', lang) : t('copyMessage', lang)}</span>
          </Button>

          <button
            onClick={handleSendWhatsApp}
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '18px',
              padding: '10px 20px',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
            }}
          >
            <Send size={18} />
            <span>{t('shareWhatsApp', lang)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
