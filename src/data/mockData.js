// Comprehensive Multi-Language Mock Dataset & Story Missions (Hindi, English, Marathi)

export const INITIAL_STUDENTS = [
  {
    student_id: "prabodh_anon_8832",
    name: "Aarav (आरव / आरव)",
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
    remediation_activity: "10-Minute Dal Grain Subtraction Race (using 10 grains of dal/pebbles).",
    last_assessed: "2026-09-27T10:15:00Z"
  },
  {
    student_id: "prabodh_anon_1042",
    name: "Priya (प्रिया / प्रिया)",
    grade: 2,
    language: "mr",
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
    remediation_activity: "Syllable Hop & Stick Count Game.",
    last_assessed: "2026-09-27T09:30:00Z"
  },
  {
    student_id: "prabodh_anon_9921",
    name: "Rohit (रोहित / रोहित)",
    grade: 3,
    language: "en",
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
    remediation_activity: "2-Digit Chalk Grouping with Sticks.",
    last_assessed: "2026-09-26T14:20:00Z"
  },
  {
    student_id: "prabodh_anon_4412",
    name: "Meera (मीरा / मीरा)",
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
    remediation_activity: "Mental Math Secret Code Challenge.",
    last_assessed: "2026-09-27T11:00:00Z"
  }
];

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

export const STORY_MISSIONS = [
  {
    id: "mission_ranis_stall",
    icon: "🥭",
    stars: 3,
    title: {
      hi: "रानी की दुकान (Rani's Stall)",
      en: "Rani's Stall",
      mr: "राणीचे दुकान (Rani's Stall)"
    },
    category: {
      hi: "गणित और कहानी (Math & Story)",
      en: "Maths & Story Branching",
      mr: "गणित आणि गोष्ट (Math & Story)"
    },
    difficulty: {
      hi: "ठोस घटाव (Concrete Subtraction)",
      en: "Concrete Subtraction",
      mr: "प्रत्यक्ष वजाबाकी (Concrete Subtraction)"
    },
    description: {
      hi: "रानी के फलों के स्टॉल में मदद करें और आमों को गिनकर घटाव सीखें!",
      en: "Help Rani at her fruit stall and learn subtraction using draggable mangoes!",
      mr: "राणीच्या फळांच्या दुकानात मदत करा आणि आंबे मोजून वजाबाकी शिका!"
    },
    steps: [
      {
        step_id: "step_1",
        character: {
          hi: "रानी (Rani)",
          en: "Rani",
          mr: "राणी (Rani)"
        },
        characterAvatar: "👩‍🌾",
        dialog: {
          hi: "नमस्ते! मेरी दुकान में आपका स्वागत है। आज मेरे पास 8 ताज़े आम हैं!",
          en: "Hello! Welcome to my stall. Today I have 8 fresh mangoes!",
          mr: "नमस्कार! माझ्या दुकानात तुमचे स्वागत आहे. आज माझ्याजवळ ८ ताजे आंबे आहेत!"
        },
        question_text: {
          hi: "रानी के पास 8 आम थे। उसने 3 आम बेचे। बताओ, अब टोकरी में कितने आम बचे?",
          en: "Rani had 8 mangoes. She sold 3. How many mangoes remain in the basket?",
          mr: "राणीजवळ ८ आंबे होते. तिने ३ आंबे विकले. आता टोपलीत किती आंबे उरले?"
        },
        type: "DRAG_COUNTERS",
        initial_count: 8,
        subtract_count: 3,
        expected_answer: 5,
        hint: {
          hi: "टोकरी में से 3 आमों को टैप करके बाहर निकालें और बचे हुए आम गिनें!",
          en: "Tap 3 mangoes to remove them from the tray and count the remaining ones!",
          mr: "टोपलीतून ३ आंबे टॅप करून बाहेर काढा आणि उरलेले आंबे मोजा!"
        },
        explainable_tag: "math_num_sub_concrete"
      },
      {
        step_id: "step_2",
        character: {
          hi: "बंदर रामू (Ramu Monkey)",
          en: "Ramu Monkey",
          mr: "रामू माकड (Ramu Monkey)"
        },
        characterAvatar: "🐒",
        dialog: {
          hi: "अरे वाह! आम देखकर मेरे पेट में चूहे कूद रहे हैं!",
          en: "Wow! Seeing mangoes makes me so hungry!",
          mr: "अरे वा! आंबे पाहून माझ्या पोटात कावळे ओरडत आहेत!"
        },
        question_text: {
          hi: "टोकरी में 5 आम थे। रामू बंदर ने 2 आम खा लिए। बताओ अब कितने आम बचे?",
          en: "There were 5 mangoes in the tray. Ramu monkey ate 2. How many remain?",
          mr: "टोपलीत ५ आंबे होते. रामू माकडाने २ आंबे खाल्ले. आता किती आंबे उरले?"
        },
        type: "VOICE_OR_TAP",
        initial_count: 5,
        subtract_count: 2,
        expected_answer: 3,
        options: [2, 3, 4, 5],
        hint: {
          hi: "5 में से 2 कम करें!",
          en: "Subtract 2 from 5!",
          mr: "५ मधून २ कमी करा!"
        },
        explainable_tag: "math_num_sub_abstract"
      }
    ]
  },
  {
    id: "mission_jungle_safari",
    icon: "🐯",
    stars: 3,
    title: {
      hi: "जंगल की सैर (Jungle Safari)",
      en: "Jungle Safari",
      mr: "जंगलाची सफर (Jungle Safari)"
    },
    category: {
      hi: "पठन और उच्चारण (Fluency & Reading)",
      en: "Oral Fluency & Reading",
      mr: "वाचन आणि उच्चार (Fluency & Reading)"
    },
    difficulty: {
      hi: "मौखिक पठन गति (Oral Decoding)",
      en: "Oral Decoding",
      mr: "तोंडी वाचन (Oral Decoding)"
    },
    description: {
      hi: "शेर राजा और बंदर के साथ कहानी पढ़ें और अपनी पठन गति बढ़ाएं!",
      en: "Read aloud with King Lion and boost your oral reading fluency!",
      mr: "सिंह राजा आणि माकडासोबत गोष्ट वाचा आणि वाचन वेग वाढवा!"
    },
    steps: [
      {
        step_id: "step_1",
        character: {
          hi: "शेर राजा (King Lion)",
          en: "King Lion",
          mr: "सिंह राजा (King Lion)"
        },
        characterAvatar: "🦁",
        dialog: {
          hi: "जंगल में आज बड़ा उत्सव है! सभी जानवर आए हैं।",
          en: "Today is a big festival in the jungle! All animals have gathered.",
          mr: "जंगलात आज मोठा उत्सव आहे! सर्व प्राणी जमले आहेत."
        },
        question_text: {
          hi: "नीचे लिखे वाक्य को बोलकर या पढ़कर सुनाएं:\n'एक बड़ा हाथी नदी के पास पानी पी रहा था।'",
          en: "Read this sentence aloud:\n'A big elephant was drinking water near the river.'",
          mr: "खालील वाक्य मोठ्याने वाचा:\n'एक मोठा हत्ती नदीजवळ पाणी पीत होता.'"
        },
        type: "VOICE_READING",
        target_text: {
          hi: "एक बड़ा हाथी नदी के पास पानी पी रहा था",
          en: "A big elephant was drinking water near the river",
          mr: "एक मोठा हत्ती नदीजवळ पाणी पीत होता"
        },
        hint: {
          hi: "हर शब्द को ध्यान से धीरे-धीरे पढ़ें!",
          en: "Read each word carefully and clearly!",
          mr: "प्रत्येक शब्द लक्षपूर्वक आणि हळूहळू वाचा!"
        },
        explainable_tag: "hi_lit_decoding_word"
      }
    ]
  },
  {
    id: "mission_meenas_pebbles",
    icon: "🔮",
    stars: 3,
    title: {
      hi: "मीना के मोती (Meena's Pebbles)",
      en: "Meena's Pebbles",
      mr: "मीनाचे मणी (Meena's Pebbles)"
    },
    category: {
      hi: "ठोस गणित (Concrete Math)",
      en: "Concrete Math",
      mr: "प्रत्यक्ष गणित (Concrete Math)"
    },
    difficulty: {
      hi: "घटाव पैटर्न (Subtraction Pattern)",
      en: "Subtraction Pattern",
      mr: "वजाबाकी नमुना (Subtraction Pattern)"
    },
    description: {
      hi: "मोतियों की माला बनाएं और 10 से उल्टी गिनती सीखें!",
      en: "Make a pebble necklace and master counting backwards from 10!",
      mr: "मण्यांची माळ बनवा आणि १० पासून उलटी मोजणी शिका!"
    },
    steps: [
      {
        step_id: "step_1",
        character: {
          hi: "मीना (Meena)",
          en: "Meena",
          mr: "मीना (Meena)"
        },
        characterAvatar: "👧",
        dialog: {
          hi: "मेरे पास 10 रंग-बिरंगे सुंदर मोती हैं!",
          en: "I have 10 colorful shiny pebbles!",
          mr: "माझ्याजवळ १० रंगीबेरंगी सुंदर मणी आहेत!"
        },
        question_text: {
          hi: "मीना के पास 10 मोती थे। उसने 4 मोती अपनी सहेली को दिए। बताओ उसके पास कितने मोती बचे?",
          en: "Meena had 10 pebbles. She gave 4 to her friend. How many pebbles remain?",
          mr: "मीनाजवळ १० मणी होते. तिने ४ मणी तिच्या मैत्रिणीला दिले. आता तिच्याजवळ किती मणी उरले?"
        },
        type: "DRAG_COUNTERS",
        initial_count: 10,
        subtract_count: 4,
        expected_answer: 6,
        hint: {
          hi: "10 में से 4 मोतियों को टैप करके बाहर निकालें!",
          en: "Tap 4 pebbles out of the tray!",
          mr: "१० पैकी ४ मणी बाहेर काढा!"
        },
        explainable_tag: "math_num_sub_concrete"
      }
    ]
  }
];
