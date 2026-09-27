// IndexedDB Local Storage Service for PRABODH AI
const DB_NAME = 'PrabodhAIDB';
const DB_VERSION = 1;

export function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Store for Game Telemetry Events
      if (!db.objectStoreNames.contains('telemetry')) {
        const telemetryStore = db.createObjectStore('telemetry', { keyPath: 'session_id' });
        telemetryStore.createIndex('student_id', 'student_id', { unique: false });
        telemetryStore.createIndex('timestamp', 'timestamp', { unique: false });
      }

      // Store for Student Skill & Interest Profiles
      if (!db.objectStoreNames.contains('students')) {
        const studentStore = db.createObjectStore('students', { keyPath: 'student_id' });
        studentStore.createIndex('literacy_level', 'literacy_level', { unique: false });
      }

      // Store for Pre-cached Teacher Micro-coaching Cards
      if (!db.objectStoreNames.contains('activity_cards')) {
        db.createObjectStore('activity_cards', { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Save a stealth assessment session telemetry event
export async function saveTelemetryEvent(eventData) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('telemetry', 'readwrite');
    const store = tx.objectStore('telemetry');
    const payload = {
      ...eventData,
      timestamp: new Date().toISOString()
    };
    const req = store.put(payload);
    req.onsuccess = () => resolve(payload);
    req.onerror = () => reject(req.error);
  });
}

// Get all telemetry events
export async function getAllTelemetryEvents() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('telemetry', 'readonly');
    const store = tx.objectStore('telemetry');
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

// Save or update student profile
export async function saveStudentProfile(student) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('students', 'readwrite');
    const store = tx.objectStore('students');
    const req = store.put(student);
    req.onsuccess = () => resolve(student);
    req.onerror = () => reject(req.error);
  });
}

// Seed initial offline students if database is empty
export async function seedInitialStudentsIfEmpty(initialStudents) {
  const db = await openDB();
  const tx = db.transaction('students', 'readonly');
  const store = tx.objectStore('students');
  const countReq = store.count();

  return new Promise((resolve, reject) => {
    countReq.onsuccess = async () => {
      if (countReq.result === 0) {
        const writeTx = db.transaction('students', 'readwrite');
        const writeStore = writeTx.objectStore('students');
        for (const s of initialStudents) {
          writeStore.put(s);
        }
        writeTx.oncomplete = () => resolve(initialStudents);
      } else {
        const getAllReq = store.getAll();
        getAllReq.onsuccess = () => resolve(getAllReq.result);
      }
    };
    countReq.onerror = () => reject(countReq.error);
  });
}
