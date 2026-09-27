<div align="center">
  <img src="public/logo.jpg" alt="PRABODH Logo" width="120" style="border-radius: 50%;" />
  <h1>PRABODH (प्रबोध)</h1>
  <p><strong>Offline-First Story-Led Stealth Assessment Companion for Grade 2–3 FLN</strong></p>

  <a href="https://prabodh-ch4y.onrender.com/"><img src="https://img.shields.io/badge/Live_Demo-Render-0284C7?style=for-the-badge&logo=render" alt="Live Demo" /></a>
  <a href="https://github.com/me13krishna/PRABODH"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repo" /></a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Offline--First-IndexedDB-16A34A?style=for-the-badge" alt="Offline First" />
</div>

---

## 🌟 Executive Overview

**PRABODH (प्रबोध)** transforms Foundational Literacy and Numeracy (FLN) evaluation in Indian primary schools from intimidating paper exams into interactive, joyful story adventures. 

Designed specifically for low-resource classroom environments and low-end mobile devices, PRABODH operates **100% offline**, assessing children implicitly while they play through contextual story missions using voice speech recognition and tactile drag-and-drop counters.

---

## ✨ Key Features

### 📖 Story-Driven Stealth Assessment
* **Contextual Story Missions**: 6 interactive modules including *Rani's Stall*, *Birbal's Khichdi*, *Jungle Safari*, *Meena's Pebbles*, *Market Math*, and *Clever Rabbit*.
* **Implicit Skill Tracking**: Evaluates addition, subtraction, place value, reading comprehension, and pronunciation without exam anxiety.
* **Interactive Manipulatives**: Tactile drag-and-drop mango counters powered by `@dnd-kit` alongside Web Audio SFX chimes and confetti animations.

### 🌐 Multi-Language & Voice-Enabled
* **1-Click Language Switch**: Seamless support across **Hindi (हिंदी)**, **English**, and **Marathi (मराठी)**.
* **Voice Speech Recognition**: Native Web Speech API integration (`hi-IN`, `en-IN`, `mr-IN`) for spoken response verification.

### 📴 100% Offline-First Architecture
* Powered by browser **IndexedDB** (`idb`) to locally persist all student progress, streak counters, telemetry logs, and assessment scores.
* Requires **zero active internet connection** during classroom hours.

### 👩‍🏫 Teacher Command Center
* **TaRL Level Heatmap**: Real-time student mastery matrix aligned with *Teaching at the Right Level* (Beginner, Letter, Word, Paragraph, Story / Math Levels).
* **"What Should I Teach Tomorrow?" Planner**: Automated 45-minute daily lesson recommendations targeted at classroom learning gaps.

### 📲 Parent Engagement Portal
* **5-Minute Household Activities**: Simple daily home learning prompts utilizing everyday objects (utensils, news items, flowers).
* **WhatsApp Progress Cards**: Exportable 1-click PNG progress summaries powered by `html-to-image` for parent communication.

---

## 📐 System Architecture & User Flow

### Technical Architecture
The application is structured into 5 decoupled layers:

```
┌─────────────────────────────────────────────────────────┐
│              FRONTEND PRESENTATION LAYER                │
│       React 19 • Vite Engine • Tailwind CSS • Framer    │
├─────────────────────────────────────────────────────────┤
│            APPLICATION CORE & MEDIA SERVICES            │
│     Story Engine • Web Speech Voice • Web Audio SFX     │
├─────────────────────────────────────────────────────────┤
│                OFFLINE DATA & TELEMETRY                 │
│         IndexedDB Cache • Offline-First Hydration        │
├─────────────────────────────────────────────────────────┤
│                 ANALYTICS & REPORTING                   │
│      Teacher FLN Heatmap • TaRL Evaluator Engine        │
├─────────────────────────────────────────────────────────┤
│             DEPLOYMENT & INFRASTRUCTURE                 │
│       Render Static Site • GitHub Actions Pipeline      │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher

### Local Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/me13krishna/PRABODH.git
   cd PRABODH
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Repository Structure

```
PRABODH/
├── public/
│   ├── logo.jpg               # Official PRABODH round logo asset
│   ├── _redirects             # Render SPA routing configuration
│   └── manifest.json          # Progressive Web App manifest
├── src/
│   ├── components/            # UI components (StoryPlayer, MissionSelector, etc.)
│   │   ├── TeacherDashboard/  # Heatmap & lesson planner
│   │   └── ui/                # Base UI primitives (Button, Card, Badge)
│   ├── data/                  # Story missions & mock student roster
│   ├── i18n/                  # Hindi, English, Marathi translations
│   ├── services/              # IndexedDB, Web Speech, Web Audio SFX
│   ├── App.jsx                # Core application entry
│   ├── main.jsx               # React DOM root
│   └── index.css              # Global Tailwind CSS styles
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions auto-deployment pipeline
├── render.yaml                # Render static site blueprint
├── vite.config.js             # Vite configuration with Render allowed hosts
└── package.json               # Project dependencies & build scripts
```

---

## ☁️ Deployment

PRABODH is deployed on **Render** as a Static Site.

* **Live Web App**: [https://prabodh-ch4y.onrender.com/](https://prabodh-ch4y.onrender.com/)
* **Continuous Integration**: GitHub Actions workflow automatically verifies build status and triggers deployment syncs.

---

## 📜 License

This project is open-source and built for educational empowerment in Indian primary schools (Grades 2–3 FLN literacy & numeracy).
