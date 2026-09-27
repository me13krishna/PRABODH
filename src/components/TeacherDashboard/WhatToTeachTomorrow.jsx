import React, { useState } from 'react';
import { Calendar, Sparkles, Users, BookOpen, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { t } from '../../i18n/translations';

export default function WhatToTeachTomorrow({ students, lang = 'hi' }) {
  const [activeTab, setActiveTab] = useState('plan');

  const tomorrowPlan = {
    date: "Tomorrow (कक्षा 3A - 45 Min Session)",
    warmup: {
      time: "10 Minutes",
      title: lang === 'mr' ? '१०-मिनिट संपूर्ण वर्ग सराव (Whole Class Warmup)' : lang === 'en' ? '10-Min Whole Class Story Warmup' : '10-मिनट संपूर्ण कक्षा कहानी वार्म-अप',
      description: lang === 'mr' ? 'सिंह आणि माकडाची गोष्ट सांगून १० ते १ उलटी मोजणी करा.' : lang === 'en' ? 'Tell the King Lion story and count backwards from 10 to 1 together.' : 'शेर राजा की कहानी सुनाकर 10 से 1 तक उल्टी गिनती सभी बच्चों के साथ मिलकर गिनें।'
    },
    groups: [
      {
        name: lang === 'mr' ? 'गट अ (आरंभिक - ६ विद्यार्थी)' : lang === 'en' ? 'Group A (Beginners - 6 Students)' : 'समूह अ (आरंभिक - 6 छात्र)',
        focus: 'Letter Sound Matching & 2-Syllable Decoding',
        materials: 'Chalkboard, 5 Letter Cards',
        activity: lang === 'mr' ? 'झाडाच्या पानांवर अक्षरे लिहून जोड्या जुळवा.' : lang === 'en' ? 'Match letter cards with leaves and clap on sound.' : 'अक्षर कार्ड का पत्तों के साथ मिलान करें और ध्वनि पर ताली बजाएं।'
      },
      {
        name: lang === 'mr' ? 'गट ब (प्रत्यक्ष वजाबाकी - १६ विद्यार्थी)' : lang === 'en' ? 'Group B (Concrete Subtraction - 16 Students)' : 'समूह ब (ठोस घटाव - 16 छात्र)',
        focus: 'Single-Digit Concrete Subtraction',
        materials: 'Dal Grains / Pebbles',
        activity: lang === 'mr' ? '१० डाळीचे दाने ठेवून राणीच्या दुकानातील वजाबाकी करा.' : lang === 'en' ? 'Use 10 dal grains to solve Rani\'s stall subtraction story.' : '10 दाल के दाने रखकर रानी की दुकान की कहानी का घटाव करें।'
      },
      {
        name: lang === 'mr' ? 'गट क (अमूर्त वजाबाकी - ८ विद्यार्थी)' : lang === 'en' ? 'Group C (Abstract Subtraction - 8 Students)' : 'समूह क (अमूर्त घटाव - 8 छात्र)',
        focus: 'Mental Math 2-Digit Borrowing',
        materials: 'Slates & Chalk',
        activity: lang === 'mr' ? 'पाटीवर गुप्त कोड सोडवून दोन अंकी वजाबाकी करा.' : lang === 'en' ? 'Solve mental math secret codes on slates.' : 'पार्टी पर गुप्त कोड सुलझाकर 2-अंकीय घटाव करें।'
      }
    ],
    peerBuddying: {
      time: "15 Minutes",
      title: lang === 'mr' ? '१५-मिनिट मित्र मदत (Peer Buddying)' : lang === 'en' ? '15-Min Peer Buddying & Practice' : '15-मिनट सहपाठी शिक्षण (Peer Buddying)',
      description: lang === 'mr' ? 'गट क मधील हुशार विद्यार्थ्यांना गट अ मधील मित्रांना मदत करू द्या.' : lang === 'en' ? 'Pair Group C abstract masters with Group A letter readers for peer mentoring.' : 'समूह क के छात्रों को समूह अ के साथियों के साथ जोड़ी बनाकर अभ्यास कराएं।'
    }
  };

  return (
    <div style={{
      background: '#FFFFFF',
      border: '2px solid #2563EB',
      borderRadius: '28px',
      padding: '28px',
      boxShadow: '0 12px 32px rgba(37, 99, 235, 0.1)',
      marginBottom: '32px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            background: '#EFF6FF',
            color: '#2563EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Sparkles size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              {t('whatToTeachTomorrow', lang)}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0, fontWeight: 600 }}>
              AI-Generated 45-Minute Classroom Plan tailored to Class 3A's live TaRL levels
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ background: '#DCFCE7', color: '#15803D', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800 }}>
            Ready for Tomorrow
          </span>
        </div>
      </div>

      {/* 3 Step Lesson Flow Timeline */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {/* Phase 1: Warmup */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontWeight: 800, fontSize: '0.85rem', marginBottom: '8px' }}>
            <Clock size={16} />
            <span>STEP 1: {tomorrowPlan.warmup.time}</span>
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
            {tomorrowPlan.warmup.title}
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 500, margin: 0 }}>
            {tomorrowPlan.warmup.description}
          </p>
        </div>

        {/* Phase 2: TaRL Group Breakout */}
        <div style={{ background: '#EFF6FF', border: '2px solid #BFDBFE', borderRadius: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E40AF', fontWeight: 800, fontSize: '0.85rem', marginBottom: '8px' }}>
            <Users size={16} />
            <span>STEP 2: 20 Minutes (TaRL Group Breakout)</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {tomorrowPlan.groups.map((g, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '10px 14px', borderRadius: '12px', border: '1px solid #DBEAFE' }}>
                <strong style={{ fontSize: '0.85rem', color: '#2563EB', display: 'block' }}>{g.name}:</strong>
                <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>{g.activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 3: Peer Buddying */}
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', fontWeight: 800, fontSize: '0.85rem', marginBottom: '8px' }}>
            <CheckCircle2 size={16} />
            <span>STEP 3: {tomorrowPlan.peerBuddying.time}</span>
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#14532D', marginBottom: '6px' }}>
            {tomorrowPlan.peerBuddying.title}
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 500, margin: 0 }}>
            {tomorrowPlan.peerBuddying.description}
          </p>
        </div>
      </div>
    </div>
  );
}
