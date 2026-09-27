// Initial Mock Data and Story Missions for PRABODH AI

export const INITIAL_STUDENTS = [
  {
    student_id: "prabodh_anon_8832",
    name: "Aarav",
    grade: 3,
    language: "hi",
    literacy_level: "LETTER",
    numeracy_level: "CONCRETE_SUBTRACTION",
    micro_skills: {
      hi_decoding_2letter: 0.92,
      hi_oral_fluency_wpm: 18,
      math_sub_single_digit: 0.85,
      math_sub_with_borrowing: 0.30
    },
    interest_tags: {
      animals: 0.88,
      building: 0.45,
      puzzles: 0.62
    },
    primary_error_pattern: "Struggles with abstract subtraction symbols (-); succeeds when using physical objects.",
    last_assessed: "2026-09-27T10:15:00Z"
  },
  {
    student_id: "prabodh_anon_1042",
    name: "Priya",
    grade: 2,
    language: "hi",
    literacy_level: "BEGINNER",
    numeracy_level: "COUNTING",
    micro_skills: {
      hi_decoding_2letter: 0.40,
      hi_oral_fluency_wpm: 8,
      math_sub_single_digit: 0.45,
      math_sub_with_borrowing: 0.10
    },
    interest_tags: {
      animals: 0.95,
      puzzles: 0.40
    },
    primary_error_pattern: "Needs visual counting aids for single digit numbers.",
    last_assessed: "2026-09-27T09:30:00Z"
  },
  {
    student_id: "prabodh_anon_9921",
    name: "Rohit",
    grade: 3,
    language: "hi",
    literacy_level: "WORD",
    numeracy_level: "CONCRETE_SUBTRACTION",
    micro_skills: {
      hi_decoding_2letter: 0.98,
      hi_oral_fluency_wpm: 32,
      math_sub_single_digit: 0.90,
      math_sub_with_borrowing: 0.55
    },
    interest_tags: {
      building: 0.82,
      puzzles: 0.75
    },
    primary_error_pattern: "Requires support on 2-digit subtraction with borrowing.",
    last_assessed: "2026-09-26T14:20:00Z"
  },
  {
    student_id: "prabodh_anon_4412",
    name: "Meera",
    grade: 3,
    language: "hi",
    literacy_level: "PARAGRAPH",
    numeracy_level: "ABSTRACT_SUBTRACTION",
    micro_skills: {
      hi_decoding_2letter: 0.99,
      hi_oral_fluency_wpm: 45,
      math_sub_single_digit: 0.98,
      math_sub_with_borrowing: 0.88
    },
    interest_tags: {
      animals: 0.70,
      art: 0.92
    },
    primary_error_pattern: "Fluent reader and abstract math master.",
    last_assessed: "2026-09-27T11:00:00Z"
  },
  {
    student_id: "prabodh_anon_7731",
    name: "Karan",
    grade: 2,
    language: "hi",
    literacy_level: "LETTER",
    numeracy_level: "COUNTING",
    micro_skills: {
      hi_decoding_2letter: 0.75,
      hi_oral_fluency_wpm: 15,
      math_sub_single_digit: 0.60,
      math_sub_with_borrowing: 0.20
    },
    interest_tags: {
      puzzles: 0.80
    },
    primary_error_pattern: "Confuses 2-syllable Hindi word sounds.",
    last_assessed: "2026-09-25T16:10:00Z"
  }
];

// Generate synthetic class stats (32 students total matching PRD Wireframe B)
export const CLASS_SUMMARY = {
  total_students: 32,
  synced_ago: "2m ago",
  literacy_clusters: {
    Beginner: { count: 6, color: "badge-beginner" },
    "Letter Reader": { count: 10, color: "badge-letter" },
    "Word Reader": { count: 12, color: "badge-word" },
    Paragraph: { count: 4, color: "badge-paragraph" }
  },
  numeracy_clusters: {
    Counting: { count: 8 },
    "Concrete Subtraction": { count: 16 },
    "Abstract Subtraction": { count: 8 }
  }
};

export const STORY_MISSIONS = [
  {
    id: "mission_ranis_stall",
    title: "रानी की दुकान (Rani's Stall)",
    category: "Maths & Story Branching",
    grade: "Grades 2-3",
    difficulty: "Concrete Subtraction",
    icon: "🥭",
    description: "रानी के फलों के स्टॉल में मदद करें और घटाव (Subtraction) सीखें!",
    initial_stars: 3,
    steps: [
      {
        step_id: "step_1",
        character: "रानी (Rani)",
        dialog: "नमस्ते! मेरी दुकान में आपका स्वागत है। आज मेरे पास मीठे-मीठे आम हैं!",
        question_text: "रानी के पास 8 आम थे। उसने 3 आम बेचे। बताओ, अब रानी के पास कितने आम बचे?",
        type: "DRAG_COUNTERS",
        initial_count: 8,
        subtract_count: 3,
        expected_answer: 5,
        audio_prompt: "रानी के पास आठ आम थे। उसने तीन आम बेचे। कितने आम बचे?",
        hint: "ट्रे में से 3 आमों को हटाकर गिनें कि कितने बचे हैं!",
        explainable_tag: "math_num_sub_concrete"
      },
      {
        step_id: "step_2",
        character: "बंदर रामू (Ramu Monkey)",
        dialog: "अरे वाह! आम देखकर मेरे पेट में चूहे कूद रहे हैं!",
        question_text: "टोकरी में 5 आम थे। रामू बंदर ने 2 आम और खा लिए। अब टोकरी में कितने आम बचे?",
        type: "VOICE_OR_TAP",
        initial_count: 5,
        subtract_count: 2,
        expected_answer: 3,
        options: [2, 3, 4, 5],
        audio_prompt: "टोकरी में पाँच आम थे। रामू बंदर ने दो आम खा लिए। कितने आम बचे?",
        hint: "5 में से 2 कम करें!",
        explainable_tag: "math_num_sub_abstract"
      }
    ]
  },
  {
    id: "mission_jungle_safari",
    title: "जंगल की सैर (Jungle Tour)",
    category: "Fluency & Reading",
    grade: "Grades 2-3",
    difficulty: "Oral Decoding & Fluency",
    icon: "🐯",
    description: "शेर राजा और बंदर रामू के साथ कहानी पढ़ें और अपनी पठन गति बढ़ाएं!",
    initial_stars: 3,
    steps: [
      {
        step_id: "step_1",
        character: "शेर राजा (King Lion)",
        dialog: "जंगल में आज बड़ा उत्सव है!",
        question_text: "नीचे लिखे वाक्य को बोलकर या पढ़कर सुनाएं:\n'एक बड़ा हाथी नदी के पास पानी पी रहा था।'",
        type: "VOICE_READING",
        target_text: "एक बड़ा हाथी नदी के पास पानी पी रहा था",
        audio_prompt: "एक बड़ा हाथी नदी के पास पानी पी रहा था।",
        hint: "हर शब्द को ध्यान से धीरे-धीरे पढ़ें!",
        explainable_tag: "hi_lit_decoding_word"
      }
    ]
  },
  {
    id: "mission_meenas_pebbles",
    title: "मीना के मोती (Meena's Pebbles)",
    category: "Concrete Math & Home Items",
    grade: "Grades 2-3",
    difficulty: "Concrete Subtraction",
    icon: "🔮",
    description: "मोतियों की माला बनाएं और 10 से उल्टी गिनती सीखें!",
    initial_stars: 3,
    steps: [
      {
        step_id: "step_1",
        character: "मीना (Meena)",
        dialog: "मेरे पास 10 रंग-बिरंगे सुंदर मोती हैं!",
        question_text: "मीना के पास 10 मोती थे। उसने 4 मोती अपनी सहेली को दिए। उसके पास कितने मोती बचे?",
        type: "DRAG_COUNTERS",
        initial_count: 10,
        subtract_count: 4,
        expected_answer: 6,
        audio_prompt: "मीना के पास दस मोती थे। उसने चार मोती सहेली को दिए। कितने मोती बचे?",
        hint: "10 में से 4 मोती बाहर खींचें!",
        explainable_tag: "math_num_sub_concrete"
      }
    ]
  }
];

export const PRESET_ACTIVITIES = [
  {
    id: "act_1",
    target_level: "CONCRETE_SUBTRACTION",
    group_name: "Group B (Letter Readers / Concrete Subtraction)",
    skill_focus: "Single-Digit Concrete Subtraction using Pebbles/Counters",
    activity_title: "10-Minute Dal Grain Subtraction Race",
    materials_needed: "20 Dal Grains or Pebbles, Paper Cup",
    step_by_step_instructions: [
      "Ask children to lay 8 grains on the desk.",
      "Tell them a story: 'A bird ate 3 grains. Slide 3 grains into the cup.'",
      "Ask them to count aloud how many grains remain on the desk."
    ],
    interest_connection: "Framed around bird & forest stories (Animals Interest)",
    why_recommended: "Recommended because 8 students in Class 3A master visual subtraction but struggle when writing numerical signs (-)."
  }
];
