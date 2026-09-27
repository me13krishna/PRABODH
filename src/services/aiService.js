// AI Service Layer (Claude API Relay & Guardrailed Offline Generator)

export async function generateTeacherActivity({ targetLevel, studentCount, errorPattern, dominantInterest, apiKey }) {
  // If API Key is provided, call Claude API endpoint
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1000,
          system: `You are an expert pedagogy advisor specializing in Pratham's Teaching at the Right Level (TaRL) framework for primary schools in rural India. Generate a simple, glanceable 10-minute micro-coaching activity for a teacher. Output JSON ONLY with keys: "group_name", "skill_focus", "activity_title", "materials_needed", "step_by_step_instructions" (max 3 simple steps array), "interest_connection", "why_recommended". Do not include markdown headers or preamble.`,
          messages: [
            {
              role: 'user',
              content: JSON.stringify({
                target_level: targetLevel,
                student_count: studentCount,
                primary_error_pattern: errorPattern,
                dominant_interest: dominantInterest,
                language: 'Hindi'
              })
            }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const rawContent = data.content[0].text;
        const cleanedJson = rawContent.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedJson);
      }
    } catch (err) {
      console.warn('Claude API request failed, falling back to local TaRL engine:', err);
    }
  }

  // Bounded Guardrailed Rule-Based Fallback Engine
  return generateOfflineTeacherActivity(targetLevel, studentCount, errorPattern, dominantInterest);
}

function generateOfflineTeacherActivity(targetLevel, studentCount, errorPattern, dominantInterest) {
  const activitiesByLevel = {
    BEGINNER: {
      group_name: `Group A (Beginners / Letter Discovery - ${studentCount} Students)`,
      skill_focus: "Hindi Vowel & Two-Letter Syllable Sound Matching",
      activity_title: "10-Min Flashcard Animal Sound Race",
      materials_needed: "Chalkboard, 5 Syllable Cards ('क', 'म', 'ल', 'स', 'र')",
      step_by_step_instructions: [
        "Draw a playful jungle animal on the board and write 5 target letters.",
        "Have students clap twice every time they hear the sound 'क' (Ka).",
        "Form pairs and let students match picture cards with the starting letter sound."
      ],
      interest_connection: dominantInterest ? `Uses animal themes ('${dominantInterest}') to boost engagement.` : "Uses local village animal stories.",
      why_recommended: `Recommended for ${studentCount} children who need 5 mins of letter-sound decoding before reading full words.`
    },
    LETTER: {
      group_name: `Group B (Letter Readers - ${studentCount} Students)`,
      skill_focus: "2-Syllable Word Blending & Concrete Subtraction Prep",
      activity_title: "10-Min Syllable Hop & Count Game",
      materials_needed: "Chalk, 10 Small Pebbles or Sticks",
      step_by_step_instructions: [
        "Draw 3 chalk circles on the floor labeled 'क', 'म', 'ल'.",
        "Have children hop into each circle while pronouncing the syllable clearly.",
        "Place 5 pebbles in a circle and take away 2, asking children to state the remaining count."
      ],
      interest_connection: "Integrates movement with concrete counting.",
      why_recommended: `Triggers: ${studentCount} students master letter recognition but need practice combining letters into 2-syllable words.`
    },
    CONCRETE_SUBTRACTION: {
      group_name: `Group C (Concrete Subtraction - ${studentCount} Students)`,
      skill_focus: "Single-Digit Subtraction using Mangoes / Pebbles",
      activity_title: "10-Min 'Rani's Stall' Concrete Subtraction",
      materials_needed: "20 Grains of Rajma / Dal or Mango Counters",
      step_by_step_instructions: [
        `Divide ${studentCount} children into pairs with 10 dal grains per pair.`,
        "Narrate story: 'Rani had 8 mangoes. Ramu monkey took 3 away. How many stay in the tray?'",
        "Children physically remove 3 grains and count the remaining 5 aloud."
      ],
      interest_connection: "Story-led animal helper motif.",
      why_recommended: `Triggers: ${errorPattern || 'Succeeds with physical manipulatives but struggles with abstract minus (-) symbols.'}`
    },
    ABSTRACT_SUBTRACTION: {
      group_name: `Group D (Abstract Subtraction Masters - ${studentCount} Students)`,
      skill_focus: "2-Digit Subtraction with Borrowing & Fluency",
      activity_title: "10-Min Mental Math Secret Code Solver",
      materials_needed: "Slate & Chalk",
      step_by_step_instructions: [
        "Write 3 subtraction puzzles on the board (e.g. 15 - 7, 24 - 8).",
        "Challenge children to breakdown 15 as (10 + 5) and subtract 7.",
        "Pair fluent children to explain their mental shortcut to each other."
      ],
      interest_connection: "Puzzle solver and mystery detective mode.",
      why_recommended: `Triggers: ${studentCount} children are ready for abstract numerical challenges without visual counters.`
    }
  };

  return activitiesByLevel[targetLevel] || activitiesByLevel.CONCRETE_SUBTRACTION;
}

export async function generateParentPrompt({ childName, skillGap, interest, language, apiKey }) {
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 300,
          system: `You are a friendly community educator in rural India. Write a non-judgmental, encouraging 3-line WhatsApp prompt for a parent with no formal education. Use low-cost household objects (dal, pebbles, coins). Do not use deficit language. Do not output preamble.`,
          messages: [
            {
              role: 'user',
              content: JSON.stringify({
                child_name: childName,
                skill_gap: skillGap,
                interest: interest,
                language: language || 'Hindi'
              })
            }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.content[0].text.trim();
      }
    } catch (e) {
      console.warn('Claude API request error:', e);
    }
  }

  // Bounded Non-judgmental Parent WhatsApp Prompt Generator
  const name = childName || 'आरव';
  const item = interest?.includes('pebbles') ? 'कंकड़/पत्थर' : 'राजमा/दाल के दाने';
  return `नमस्ते! आज ${name} के साथ 10 ${item} लें। एक-एक दाना हटाते हुए 10 से 1 तक उल्टी गिनती गिनने का खेल खेलें। सिर्फ 5 मिनट दें! - प्रबोध टीम`;
}
