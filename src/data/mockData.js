// Comprehensive Multi-Language Mock Dataset & 6 FLN Story Missions (Hindi, English, Marathi)

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
  },
  {
    id: "mission_birbals_khichdi",
    icon: "🍲",
    stars: 3,
    title: {
      hi: "बीरबल की खिचड़ी (Birbal's Khichdi)",
      en: "Birbal's Khichdi",
      mr: "बिरबलाची खिचडी (Birbal's Khichdi)"
    },
    category: {
      hi: "कहानी और तर्क (Logic & Subtraction)",
      en: "Logic & Subtraction",
      mr: "गोष्ट आणि तर्क (Logic & Subtraction)"
    },
    difficulty: {
      hi: "ठोस व अमूर्त घटाव (Subtraction Challenge)",
      en: "Subtraction Challenge",
      mr: "वजाबाकी आव्हान (Subtraction Challenge)"
    },
    description: {
      hi: "बीरबल को हांडी पकाने के लिए लकड़ियाँ गिनने और सही घटाव करने में मदद करें!",
      en: "Help Birbal count firewood logs to cook his famous khichdi!",
      mr: "बिरबलाला खिचडी शिजवण्यासाठी लाकडे मोजण्यात आणि वजाबाकी करण्यात मदत करा!"
    },
    steps: [
      {
        step_id: "step_1",
        character: {
          hi: "बीरबल (Birbal)",
          en: "Birbal",
          mr: "बिरबल (Birbal)"
        },
        characterAvatar: "👳‍♂️",
        dialog: {
          hi: "जहाँपनाह! मेरी खिचड़ी पक रही है। मेरे पास 9 सूखी लकड़ियाँ थीं!",
          en: "Your Majesty! My khichdi is cooking. I had 9 dry wooden logs!",
          mr: "महाराज! माझी खिचडी शिजत आहे. माझ्याजवळ ९ वाळलेली लाकडे होती!"
        },
        question_text: {
          hi: "बीरबल ने 9 में से 4 लकड़ियाँ आग में जलाईं। बताओ अब कितनी लकड़ियाँ बचीं?",
          en: "Birbal burned 4 out of 9 logs in the fire. How many logs remain?",
          mr: "बिरबलाने ९ पैकी ४ लाकडे आगीत जाळली. आता किती लाकडे उरली?"
        },
        type: "DRAG_COUNTERS",
        initial_count: 9,
        subtract_count: 4,
        expected_answer: 5,
        hint: {
          hi: "9 में से 4 लकड़ियों को टैप करके निकालें!",
          en: "Tap 4 logs out of the pile!",
          mr: "९ पैकी ४ लाकडे बाहेर काढा!"
        },
        explainable_tag: "math_num_sub_concrete"
      },
      {
        step_id: "step_2",
        character: {
          hi: "बादशाह अकबर (Emperor Akbar)",
          en: "Emperor Akbar",
          mr: "बादशहा अकबर (Emperor Akbar)"
        },
        characterAvatar: "👑",
        dialog: {
          hi: "वाह बीरबल! तुम्हारी खिचड़ी की खुशबू बहुत अच्छी आ रही है।",
          en: "Well done Birbal! Your khichdi smells delicious.",
          mr: "छान बिरबल! तुझ्या खिचडीचा छान वास येत आहे."
        },
        question_text: {
          hi: "बीरबल के पास 5 लकड़ियाँ थीं। अकबर ने 2 लकड़ियाँ और ले लीं। बताओ कितनी लकड़ियाँ बचीं?",
          en: "Birbal had 5 logs left. Emperor Akbar took 2 logs away. How many logs remain?",
          mr: "बिरबलाजवळ ५ लाकडे होती. अकबराने २ लाकडे घेतली. आता किती लाकडे उरली?"
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
    id: "mission_market_math",
    icon: "🛒",
    stars: 3,
    title: {
      hi: "बाज़ार का हिसाब (Market Math)",
      en: "Market Math",
      mr: "बाजाराचा हिशोब (Market Math)"
    },
    category: {
      hi: "दैनिक बाज़ार गणित (Daily Life Math)",
      en: "Daily Life Math",
      mr: "दैनंदिन बाजार गणित (Daily Life Math)"
    },
    difficulty: {
      hi: "मुद्रा घटाव (Currency Subtraction)",
      en: "Currency Subtraction",
      mr: "नाणी वजाबाकी (Currency Subtraction)"
    },
    description: {
      hi: "फलवाले काका से केल खरीदें और सिक्कों का हिसाब लगाएं!",
      en: "Buy fresh bananas at the village market and calculate your coin balance!",
      mr: "फळवाले काकांकडून केळी खरेदी करा आणि नाण्यांचा हिशोब करा!"
    },
    steps: [
      {
        step_id: "step_1",
        character: {
          hi: "काका फलवाले (Fruit Vendor Kaka)",
          en: "Fruit Vendor Kaka",
          mr: "काका फळवाले (Fruit Vendor Kaka)"
        },
        characterAvatar: "🍌",
        dialog: {
          hi: "ताज़े मीठे केले ले लो! ₹10 में 6 केले मिलेंगे!",
          en: "Fresh sweet bananas! Get bananas for ₹6!",
          mr: "ताजी गोड केळी घ्या! ₹६ मध्ये केळी मिळतील!"
        },
        question_text: {
          hi: "आरव के पास 10 सिक्के थे। उसने ₹6 के केले खरीदे। बताओ जेब में कितने सिक्के बचे?",
          en: "Aarav had 10 coins. He spent 6 coins on bananas. How many coins remain in his pocket?",
          mr: "आरवजवळ १० नाणी होती. तिने ६ नाणी केळ्यांवर खर्च केली. आता खिशात किती नाणी उरली?"
        },
        type: "DRAG_COUNTERS",
        initial_count: 10,
        subtract_count: 6,
        expected_answer: 4,
        hint: {
          hi: "10 में से 6 सिक्के बाहर टैप करें!",
          en: "Tap 6 coins out of the tray!",
          mr: "१० पैकी ६ नाणी बाहेर काढा!"
        },
        explainable_tag: "math_num_sub_concrete"
      }
    ]
  },
  {
    id: "mission_clever_rabbit",
    icon: "🐇",
    stars: 3,
    title: {
      hi: "चतुर खरगोश (Clever Rabbit)",
      en: "Clever Rabbit",
      mr: "हुशार ससा (Clever Rabbit)"
    },
    category: {
      hi: "पठन और कहानी (Fluency Reading)",
      en: "Fluency Reading",
      mr: "वाचन आणि गोष्ट (Fluency Reading)"
    },
    difficulty: {
      hi: "कहानी पठन गति (Story Fluency)",
      en: "Story Fluency",
      mr: "गोष्ट वाचन (Story Fluency)"
    },
    description: {
      hi: "चतुर खरगोश की समझदारी की कहानी बोलकर या पढ़कर सुनाएं!",
      en: "Read aloud the famous tale of the clever rabbit and the lion!",
      mr: "हुशार सश्याची गोष्ट मोठ्याने वाचा!"
    },
    steps: [
      {
        step_id: "step_1",
        character: {
          hi: "चतुर खरगोश (Clever Bunny)",
          en: "Clever Bunny",
          mr: "हुशार ससा (Clever Bunny)"
        },
        characterAvatar: "🐰",
        dialog: {
          hi: "मैंने अपनी बुद्धिमानी से जंगल के शेर को कुएँ में हरा दिया!",
          en: "With my clever thinking, I outsmarted the fierce lion at the well!",
          mr: "मी माझ्या हुशारीने जंगलातील सिंहाला विहिरीत हरवले!"
        },
        question_text: {
          hi: "नीचे लिखा वाक्य बोलकर या पढ़कर सुनाएं:\n'एक छोटा खरगोश गाजर खा रहा था। उसने कुएँ में पानी देखा।'",
          en: "Read this sentence aloud:\n'A little rabbit was eating a carrot. He looked into the well.'",
          mr: "खालील वाक्य मोठ्याने वाचा:\n'एक लहान ससा गाजर खात होता. त्याने विहिरीत पाणी पाहिले.'"
        },
        type: "VOICE_READING",
        target_text: {
          hi: "एक छोटा खरगोश गाजर खा रहा था उसने कुएँ में पानी देखा",
          en: "A little rabbit was eating a carrot He looked into the well",
          mr: "एक लहान ससा गाजर खात होता त्याने विहिरीत पाणी पाहिले"
        },
        hint: {
          hi: "स्पष्ट और मधुर आवाज़ में पढ़ें!",
          en: "Read clearly and smoothly!",
          mr: "स्पष्ट आणि गोड आवाजात वाचा!"
        },
        explainable_tag: "hi_lit_decoding_word"
      }
    ]
  }
];
