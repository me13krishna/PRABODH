import React, { useState, useEffect } from 'react';
import { Database, Trash2, RefreshCw, Key, ShieldAlert } from 'lucide-react';
import { getAllTelemetryEvents } from '../services/db';

export default function TelemetryInspector({ apiKey, setApiKey }) {
  const [telemetryEvents, setTelemetryEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    const events = await getAllTelemetryEvents();
    setTelemetryEvents(events);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px' }}>
      <div style={{
        background: '#0F172A',
        color: '#FFFFFF',
        borderRadius: '28px',
        padding: '28px',
        marginBottom: '28px',
        boxShadow: '0 12px 28px rgba(15, 23, 42, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ background: '#334155', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800, color: '#38BDF8' }}>
              ⚙️ SYSTEM TELEMETRY & CLAUDE AI CONFIG
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '8px', margin: '8px 0 0 0' }}>
              IndexedDB Telemetry & API Inspector
            </h2>
          </div>

          <button
            onClick={fetchEvents}
            style={{
              background: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              padding: '8px 16px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RefreshCw size={14} /> Refresh Logs
          </button>
        </div>
      </div>

      {/* Claude API Key Configuration Box */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '24px',
        marginBottom: '28px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: 800, marginBottom: '8px' }}>
          <Key size={18} color="#2563EB" />
          <span>Anthropic Claude API Key (Server Relay / Client Sandbox):</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '0 0 12px 0' }}>
          If provided, PRABODH will send JSON prompts directly to Claude 3.5 Sonnet. If empty, the system uses the bounded offline TaRL rule engine.
        </p>

        <input
          type="password"
          placeholder="sk-ant-api03-..."
          value={apiKey || ''}
          onChange={(e) => setApiKey(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid #CBD5E1',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}
        />
      </div>

      {/* Raw Telemetry JSON Events List */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
        Captured Stealth Assessment Telemetry Events ({telemetryEvents.length}):
      </h3>

      {telemetryEvents.length === 0 ? (
        <div style={{
          background: '#FFFFFF',
          border: '2px dashed #CBD5E1',
          borderRadius: '24px',
          padding: '40px',
          textAlign: 'center',
          color: '#64748B'
        }}>
          <Database size={32} color="#94A3B8" />
          <p style={{ fontWeight: '700', marginTop: '8px' }}>अभी तक कोई टेलीमेट्री लॉग नहीं मिला।</p>
          <p style={{ fontSize: '0.85rem' }}>"Child Story" tab में जाकर किसी मिशन को खेलें!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {telemetryEvents.map((evt, idx) => (
            <div key={idx} style={{
              background: '#0F172A',
              color: '#38BDF8',
              borderRadius: '20px',
              padding: '20px',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#94A3B8', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                <span>SESSION ID: <b>{evt.session_id}</b></span>
                <span>TIMESTAMP: <b>{evt.timestamp}</b></span>
              </div>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#F1F5F9' }}>
                {JSON.stringify(evt, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
