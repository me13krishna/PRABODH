import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, HeartHandshake } from 'lucide-react';
import { generateParentPrompt } from '../services/aiService';

export default function WhatsAppPromptGenerator({ apiKey }) {
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
      language: 'Hindi',
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
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '24px' }}>
      {/* Parent Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
        borderRadius: '32px',
        padding: '32px',
        color: '#FFFFFF',
        boxShadow: '0 16px 32px rgba(22, 163, 74, 0.25)',
        marginBottom: '32px'
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
          👨‍👩‍👧 WhatsApp Home Activity Prompt Generator (अभिभावक व्हाट्सएप सुझाव)
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          5-मिनट घरेलू शिक्षण गतिविधियां
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, margin: 0, fontWeight: 500 }}>
          कम साक्षरता वाले माता-पिता के लिए घर के सामान (दाल के दाने, सिक्के, कंकड़) से सीखने वाले बिना किसी तनाव के संदेश तैयार करें।
        </p>
      </div>

      {/* Input Form Box */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        marginBottom: '28px'
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
          पैरामेट्रिक चयन (Select Parameters):
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
              बच्चे का नाम (Child Name):
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
              कौशल गैप (Target Skill Gap):
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
              <option value="Counting backwards from 10 to 1">10 से 1 तक उल्टी गिनती (Counting Backwards)</option>
              <option value="Single Digit Concrete Subtraction">10 में से घटाव (Concrete Subtraction)</option>
              <option value="2-Syllable Hindi Word Reading">2-अक्षर वाले शब्द पढ़ना (Word Reading)</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
              घरेलू वस्तु (Household Object):
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
              <option value="playing with pebbles/dal (दाल/कंकड़)">दाल के दाने / राजमा (Dal Grains)</option>
              <option value="counting coins (सिक्के)">1 और 2 रुपये के सिक्के (Coins)</option>
              <option value="matching flashcard stones (छोटे पत्थर)">छोटे कंकड़/पत्थर (Pebbles)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          style={{
            background: '#16A34A',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '16px',
            padding: '12px 24px',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(22, 163, 74, 0.3)'
          }}
        >
          <Sparkles size={18} />
          <span>{isGenerating ? 'AI जनरेट हो रहा है...' : 'व्हाट्सएप संदेश जनरेट करें (Generate Prompt)'}</span>
        </button>
      </div>

      {/* Generated WhatsApp Message Preview Card */}
      <div style={{
        background: '#DCFCE7',
        border: '2px solid #86EFAC',
        borderRadius: '28px',
        padding: '24px',
        boxShadow: '0 12px 24px rgba(22, 163, 74, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#15803D', fontWeight: 800 }}>
            <span style={{ fontSize: '1.4rem' }}>💬</span>
            <span>जनरेट किया गया व्हाट्सएप संदेश (WhatsApp Message Preview):</span>
          </div>

          <span style={{ background: '#FFFFFF', color: '#15803D', fontWeight: 800, padding: '2px 10px', borderRadius: '10px', fontSize: '0.8rem' }}>
            Non-Judgmental & Encouraging
          </span>
        </div>

        <div style={{
          background: '#FFFFFF',
          border: '1px solid #BBF7D0',
          borderRadius: '20px',
          padding: '20px',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#0F172A',
          lineHeight: '1.8',
          marginBottom: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
        }}>
          "{promptText}"
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={handleCopy}
            style={{
              background: '#FFFFFF',
              color: '#15803D',
              border: '2px solid #86EFAC',
              borderRadius: '14px',
              padding: '12px 20px',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {copied ? <Check size={18} color="#16A34A" /> : <Copy size={18} />}
            <span>{copied ? 'कॉपी हो गया! (Copied)' : 'संदेश कॉपी करें (Copy Message)'}</span>
          </button>

          <button
            onClick={handleSendWhatsApp}
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '14px',
              padding: '12px 24px',
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
            <span>व्हाट्सएप पर शेयर करें (Share on WhatsApp)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
