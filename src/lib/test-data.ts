export interface Question {
  id: number;
  text: string;
  category: 'Concern' | 'Preparedness' | 'Exposure' | 'Barriers';
  options: { text: string; score: number }[];
}

export interface Course {
  id: string;
  title: string;
  date: string;
  speaker: string;
  description: string;
  objectives: string[];
  link: string;
  category: 'AI' | 'Business';
}

export const QUESTIONS: Question[] = [
  // Concern
  {
    id: 1,
    text: "How often do you worry that AI will make your current job skills obsolete within the next 3 years?",
    category: 'Concern',
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },
  {
    id: 2,
    text: "Do you feel a sense of unease when you hear about new AI breakthroughs in your industry?",
    category: 'Concern',
    options: [
      { text: "Not at all", score: 1 },
      { text: "Slightly", score: 2 },
      { text: "Moderately", score: 3 },
      { text: "Significantly", score: 4 },
      { text: "Extremely", score: 5 }
    ]
  },
  {
    id: 3,
    text: "How concerned are you about the ethical implications of AI in your professional field?",
    category: 'Concern',
    options: [
      { text: "Not concerned", score: 1 },
      { text: "Low concern", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "High concern", score: 4 },
      { text: "Very high concern", score: 5 }
    ]
  },
  {
    id: 4,
    text: "Do you feel that AI is a threat to your personal identity as a professional?",
    category: 'Concern',
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 }
    ]
  },
  {
    id: 5,
    text: "How much do you agree: 'I feel overwhelmed by the pace of AI development'?",
    category: 'Concern',
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 }
    ]
  },
  {
    id: 6,
    text: "Do you worry that AI will reduce the human connection in your work?",
    category: 'Concern',
    options: [
      { text: "Not at all", score: 1 },
      { text: "A little", score: 2 },
      { text: "Somewhat", score: 3 },
      { text: "Quite a bit", score: 4 },
      { text: "Very much", score: 5 }
    ]
  },

  // Preparedness
  {
    id: 7,
    text: "How confident are you in your ability to learn and use new AI tools?",
    category: 'Preparedness',
    options: [
      { text: "Very Confident", score: 1 },
      { text: "Confident", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Unconfident", score: 4 },
      { text: "Very Unconfident", score: 5 }
    ]
  },
  {
    id: 8,
    text: "Have you taken any formal or informal training on AI in the last 6 months?",
    category: 'Preparedness',
    options: [
      { text: "Yes, multiple courses", score: 1 },
      { text: "Yes, one course", score: 2 },
      { text: "Self-taught basics", score: 3 },
      { text: "Very little", score: 4 },
      { text: "None at all", score: 5 }
    ]
  },
  {
    id: 9,
    text: "Do you have a clear plan for how to adapt your career to AI?",
    category: 'Preparedness',
    options: [
      { text: "Definite plan", score: 1 },
      { text: "General idea", score: 2 },
      { text: "Vague thoughts", score: 3 },
      { text: "No plan", score: 4 },
      { text: "I'm avoiding it", score: 5 }
    ]
  },
  {
    id: 10,
    text: "How often do you experiment with AI tools (like ChatGPT, Claude, etc.) for work?",
    category: 'Preparedness',
    options: [
      { text: "Daily", score: 1 },
      { text: "Weekly", score: 2 },
      { text: "Monthly", score: 3 },
      { text: "Rarely", score: 4 },
      { text: "Never", score: 5 }
    ]
  },
  {
    id: 11,
    text: "Do you know which AI skills are most in-demand in your industry?",
    category: 'Preparedness',
    options: [
      { text: "Very well", score: 1 },
      { text: "Somewhat", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Not really", score: 4 },
      { text: "Not at all", score: 5 }
    ]
  },
  {
    id: 12,
    text: "How prepared do you feel to collaborate with AI systems in your daily tasks?",
    category: 'Preparedness',
    options: [
      { text: "Fully prepared", score: 1 },
      { text: "Mostly prepared", score: 2 },
      { text: "Somewhat prepared", score: 3 },
      { text: "Unprepared", score: 4 },
      { text: "Completely unprepared", score: 5 }
    ]
  },

  // Exposure
  {
    id: 13,
    text: "How much of your daily work could potentially be automated by AI today?",
    category: 'Exposure',
    options: [
      { text: "0-10%", score: 1 },
      { text: "11-30%", score: 2 },
      { text: "31-50%", score: 3 },
      { text: "51-70%", score: 4 },
      { text: "71-100%", score: 5 }
    ]
  },
  {
    id: 14,
    text: "Is your company actively implementing AI solutions?",
    category: 'Exposure',
    options: [
      { text: "Yes, extensively", score: 1 },
      { text: "Yes, in some areas", score: 2 },
      { text: "Planning to", score: 3 },
      { text: "No", score: 4 },
      { text: "I don't know", score: 5 }
    ]
  },
  {
    id: 15,
    text: "How often do your colleagues or peers talk about using AI?",
    category: 'Exposure',
    options: [
      { text: "Constantly", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Occasionally", score: 3 },
      { text: "Rarely", score: 4 },
      { text: "Never", score: 5 }
    ]
  },
  {
    id: 16,
    text: "Do you see AI-generated content or tools being used by your competitors?",
    category: 'Exposure',
    options: [
      { text: "Everywhere", score: 1 },
      { text: "Often", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Rarely", score: 4 },
      { text: "Never", score: 5 }
    ]
  },
  {
    id: 17,
    text: "How much pressure do you feel to use AI from your management or clients?",
    category: 'Exposure',
    options: [
      { text: "No pressure", score: 1 },
      { text: "Low pressure", score: 2 },
      { text: "Moderate pressure", score: 3 },
      { text: "High pressure", score: 4 },
      { text: "Extreme pressure", score: 5 }
    ]
  },
  {
    id: 18,
    text: "How visible is AI's impact on your industry's job market currently?",
    category: 'Exposure',
    options: [
      { text: "Very visible", score: 1 },
      { text: "Somewhat visible", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Hardly visible", score: 4 },
      { text: "Invisible", score: 5 }
    ]
  },

  // Barriers
  {
    id: 19,
    text: "How difficult is it for you to find time to learn about AI?",
    category: 'Barriers',
    options: [
      { text: "Very Easy", score: 1 },
      { text: "Easy", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Difficult", score: 4 },
      { text: "Very Difficult", score: 5 }
    ]
  },
  {
    id: 20,
    text: "Do you feel you have access to the right resources to learn AI?",
    category: 'Barriers',
    options: [
      { text: "Abundant resources", score: 1 },
      { text: "Sufficient", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Lacking", score: 4 },
      { text: "No resources", score: 5 }
    ]
  },
  {
    id: 21,
    text: "How much does the cost of AI tools or courses prevent you from learning?",
    category: 'Barriers',
    options: [
      { text: "Not at all", score: 1 },
      { text: "Slightly", score: 2 },
      { text: "Moderately", score: 3 },
      { text: "Significantly", score: 4 },
      { text: "Completely", score: 5 }
    ]
  },
  {
    id: 22,
    text: "Do you feel supported by your organization in your AI learning journey?",
    category: 'Barriers',
    options: [
      { text: "Fully supported", score: 1 },
      { text: "Somewhat supported", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Unsupported", score: 4 },
      { text: "Active resistance", score: 5 }
    ]
  },
  {
    id: 23,
    text: "How complex do you find AI concepts to be?",
    category: 'Barriers',
    options: [
      { text: "Very Simple", score: 1 },
      { text: "Simple", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Complex", score: 4 },
      { text: "Extremely Complex", score: 5 }
    ]
  },
  {
    id: 24,
    text: "Does a lack of technical background hinder your AI adoption?",
    category: 'Barriers',
    options: [
      { text: "Not at all", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },
  {
    id: 25,
    text: "How much do you agree: 'I don't know where to start with AI'?",
    category: 'Barriers',
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 }
    ]
  }
];

export const COURSES: Course[] = [
  // AI Mastery Series (Original)
  {
    id: "pro-webinar",
    title: "Use AI Like a Pro: Save 5–10 Hours Every Week",
    date: "March 27, 2026",
    speaker: "Joanne Sison",
    description: "Learn practical ways to use AI to save time each week, even if you're not techy.",
    objectives: [
      "Understand what AI can and cannot do",
      "Learn practical time-saving hacks",
      "Write better prompts for ChatGPT",
      "Use AI confidently without a technical background"
    ],
    link: "#",
    category: 'AI'
  },
  {
    id: "assistant-webinar",
    title: "Stop Doing Everything Yourself: Build Your Personal AI Assistant",
    date: "April 10, 2026",
    speaker: "Joanne Sison",
    description: "Identify tasks that can be delegated to AI and build simple workflows.",
    objectives: [
      "Identify tasks for AI delegation",
      "Learn AI for planning and research",
      "Build repeatable AI workflows",
      "Support writing and organization"
    ],
    link: "#",
    category: 'AI'
  },
  {
    id: "income-webinar",
    title: "Turn AI Into Income: Validate and Launch a Side Hustle",
    date: "May 8, 2026",
    speaker: "Joanne Sison",
    description: "Use AI to brainstorm, test, and launch a side hustle in one weekend.",
    objectives: [
      "Choose a side hustle idea",
      "Validate demand quickly",
      "Create launch materials with AI",
      "Smart and ethical AI use in business"
    ],
    link: "#",
    category: 'AI'
  },
  {
    id: "jobs-webinar",
    title: "AI Is Changing Jobs: How to Stay Valuable",
    date: "June 12, 2026",
    speaker: "Joanne Sison",
    description: "Identify skills that will remain valuable in the next 5 years and stay competitive.",
    objectives: [
      "Understand workplace changes",
      "Identify future-proof skills",
      "AI apps for career growth",
      "Human strengths AI cannot replace"
    ],
    link: "#",
    category: 'AI'
  },
  // Business Growth Series (New)
  {
    id: "marketing-conversion",
    title: "Why Your Marketing Isn’t Converting — And How to Fix It in 30 Days",
    date: "March 26, 2026",
    speaker: "Gretchen Veran",
    description: "Expect a refreshed lens, and a rescue plan. We won’t be discussing MBA-level abstract marketing theories; we are going to look at the common mistakes Filipino mSMEs make that cost them sales, and how to pivot quickly.",
    objectives: [
      "Stop the 'marketing blame game' by pinpointing exactly where you are losing potential customers.",
      "Shift your mindset from doing random acts of marketing just based on what’s trending, to building a conversion-focused system.",
      "Walk away with a realistic, 30-day action plan to plug the leaks in your sales process."
    ],
    link: "#",
    category: 'Business'
  },
  {
    id: "growth-plan",
    title: "The 6-Month Growth Plan for Small Businesses Ready to Scale",
    date: "April 9, 2026",
    speaker: "Gretchen Veran",
    description: "You will learn to zoom out from the daily grind and look at the big picture. This session is all about structure. We will help you organize your ideas and goals into a timeline that makes sense, ensuring you don't burn out your team (or yourself) while trying to grow.",
    objectives: [
      "Transition your business from day-to-day survival mode into strategic, predictable growth.",
      "Learn the essential marketing structures and team accountabilities needed before you scale.",
      "Draft a clear, 6-month roadmap that aligns your core mission with actual profitability."
    ],
    link: "#",
    category: 'Business'
  },
  {
    id: "social-media-conversion",
    title: "Turn Social Media Followers Into Paying Customers",
    date: "May 6, 2026",
    speaker: "Gretchen Veran",
    description: "Expect an enlightening shift in how you view social media. We will untangle the confusion between 'building an audience' and 'building a customer base.' You’ll learn how to talk to your followers authentically so they naturally want to support your business and buy what you offer.",
    objectives: [
      "Break the addiction to 'vanity metrics' (likes, shares, virality) and focus on metrics that matter to your business bank account.",
      "Understand the psychology of the customer journey—how to move someone from casually scrolling to actively buying, and buying again.",
      "Learn how to communicate your brand's mission in a way that creates loyal believers, not just one-time buyers."
    ],
    link: "#",
    category: 'Business'
  },
  {
    id: "profitable-ads",
    title: "How Small Businesses Can Run Profitable Ads Without Wasting Money",
    date: "June 4, 2026",
    speaker: "Gretchen Veran",
    description: "We are going to demystify the scary world of paid ads. You won't be overwhelmed with complex, agency-level jargon. Instead, you will learn the safe, smart, and structured way for a small business owner to spend their hard-earned money on ads and actually see a predictable return.",
    objectives: [
      "Stop blindly clicking the 'Boost Post' button and hoping for the best.",
      "Understand the simple, core metrics that dictate whether an ad is making or losing you money.",
      "Learn a structured, budget-friendly approach to launching ads that generate a real Return on Investment (ROI)."
    ],
    link: "#",
    category: 'Business'
  }
];

export const calculateScores = (answers: Record<number, number>) => {
  const categories = {
    Concern: { total: 0, count: 0 },
    Preparedness: { total: 0, count: 0 },
    Exposure: { total: 0, count: 0 },
    Barriers: { total: 0, count: 0 }
  };

  QUESTIONS.forEach(q => {
    if (answers[q.id]) {
      categories[q.category].total += answers[q.id];
      categories[q.category].count += 1;
    }
  });

  const finalScores = {
    Concern: 0,
    Preparedness: 0,
    Exposure: 0,
    Barriers: 0,
    Overall: 0
  };

  Object.keys(categories).forEach(cat => {
    const c = cat as keyof typeof categories;
    finalScores[c] = Math.round((categories[c].total / (categories[c].count * 5)) * 100);
  });

  finalScores.Overall = Math.round(
    (finalScores.Concern + finalScores.Preparedness + finalScores.Exposure + finalScores.Barriers) / 4
  );

  return finalScores;
};

export const getRecommendation = (scores: any) => {
  if (scores.Barriers > 70) return COURSES[0]; // AI Pro Webinar for high barriers
  if (scores.Preparedness > 60) return COURSES[1]; // AI Assistant for those needing preparedness
  if (scores.Exposure > 60) return COURSES[3]; // AI Jobs for high exposure
  if (scores.Concern > 60) return COURSES[2]; // AI Income for high concern/opportunity
  return COURSES[0]; // Default
};
