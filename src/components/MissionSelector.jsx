import React from 'react';
import { Play, Star, Sparkles, MapPin, Award, Compass, Flame, CheckCircle2, Shield } from 'lucide-react';
import { STORY_MISSIONS } from '../data/mockData';
import { t } from '../i18n/translations';
import { sfx } from '../services/soundEffects';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ProgressBar } from './ui/ProgressBar';

export default function MissionSelector({ onSelectMission, lang = 'hi' }) {
  const totalStars = 9;
  const earnedStars = 7;
  const streakDays = 5;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 16px' }}>
      {/* Hero Welcome Learning Journey Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
        borderRadius: '32px',
        padding: '32px 28px',
        color: '#FFFFFF',
        boxShadow: '0 16px 32px rgba(2, 132, 199, 0.22)',
        marginBottom: '28px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            <Compass size={16} />
            <span>{t('storyMapTitle', lang)}</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            {t('storyMapSubtitle', lang)}
          </h2>

          <p style={{ fontSize: '1.05rem', opacity: 0.95, maxWidth: '650px', margin: 0, fontWeight: 500 }}>
            "Bachcha game khelega; PRABODH samjhega ki woh kya jaanta hai aur aage kya seekhne ke liye ready hai."
          </p>
        </div>
      </div>

      {/* Child Gamification Stats Strip: XP, Streak & Stars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {/* Streak Counter */}
        <Card variant="sunrise" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            background: '#FEF3C7',
            color: '#D97706',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Flame size={28} color="#F59E0B" />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#92400E' }}>{streakDays} Day Streak 🔥</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#B45309' }}>Keep learning every day!</div>
          </div>
        </Card>

        {/* Stars Progress */}
        <Card style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#475569', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={16} fill="#F59E0B" color="#F59E0B" /> Star Mastery Progress
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#F59E0B' }}>{earnedStars}/{totalStars} ⭐</span>
          </div>
          <ProgressBar value={earnedStars} max={totalStars} color="#F59E0B" height="10px" />
        </Card>

        {/* Badges Strip */}
        <Card style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B' }}>Badges Unlocked</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              <span title="Story Explorer" style={{ fontSize: '1.4rem' }}>🏅</span>
              <span title="Math Master" style={{ fontSize: '1.4rem' }}>🥭</span>
              <span title="Jungle Reader" style={{ fontSize: '1.4rem' }}>🦁</span>
            </div>
          </div>
          <Badge variant="growth">3 Badges</Badge>
        </Card>
      </div>

      {/* Story Adventure Map Nodes */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MapPin color="#0284C7" size={22} />
        <span>{t('chooseMission', lang)}</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {STORY_MISSIONS.map((m, idx) => {
          const titleText = m.title[lang] || m.title.hi;
          const diffText = m.difficulty[lang] || m.difficulty.hi;
          const descText = m.description[lang] || m.description.hi;

          return (
            <Card
              key={m.id}
              variant={idx === 0 ? "accent" : "default"}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={() => {
                sfx.playClick();
                onSelectMission(m);
              }}
            >
              {/* Level Badge Number */}
              <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                <Badge variant={idx === 0 ? "sky" : "neutral"}>LEVEL {idx + 1}</Badge>
              </div>

              <div>
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '24px',
                  background: '#FEF3C7',
                  border: '3px solid #F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.8rem',
                  marginBottom: '16px',
                  boxShadow: '0 6px 14px rgba(245, 158, 11, 0.2)'
                }} className="bounce-anim">
                  {m.icon}
                </div>

                <Badge variant="sunrise" style={{ marginBottom: '8px' }}>
                  {diffText}
                </Badge>

                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  {titleText}
                </h4>

                <p style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500, lineHeight: '1.6', marginBottom: '20px' }}>
                  {descText}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid #F1F5F9'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <Button variant="primary" size="md">
                  <span>{t('playMission', lang)}</span>
                  <Play size={16} />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
