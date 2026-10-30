export const assistantSuggestions = [
  "Who is Saksham?",
  "Tell me about his education.",
  "What are his technical skills?",
  "Tell me about his AI projects.",
  "What is Quorum?",
  "What is WIBLY?",
  "What is his experience?",
  "How can I contact him?",
];

export const assistantKnowledge = [
  {
    id: "introduction",
    keywords: ["who", "saksham", "background", "introduce", "परिचय", "कौन"],
    answer:
      "Saksham Singh is a Computer Science undergraduate at KIET Group of Institutions, Ghaziabad, graduating in 2027. He is a web developer, AI and automation enthusiast, and Agentic AI explorer who enjoys building practical products while continuously learning.",
  },
  {
    id: "education",
    keywords: ["education", "college", "university", "degree", "kiet", "btech", "b.tech", "graduation", "पढ़ाई", "कॉलेज"],
    answer:
      "Saksham is pursuing a Bachelor of Technology in Computer Science at KIET Group of Institutions in Ghaziabad, Uttar Pradesh, India. He is expected to graduate in 2027 and currently has a CGPA of 8.4.",
  },
  {
    id: "skills",
    keywords: [
      "skill", "skills", "stack", "technology", "technologies", "tech", "programming",
      "python", "javascript", "react", "fastapi", "django", "ai", "rag", "langchain",
      "docker", "sql", "कौशल", "टेक्नोलॉजी",
    ],
    answer:
      "Saksham actively builds with Python, JavaScript, C++, SQL, HTML, CSS, React, FastAPI, Django, REST APIs, Docker, Git/GitHub, LangChain, ChromaDB, Whisper, Mistral AI, and AWS. He has also explored Next.js, TypeScript, Node.js, SQLModel, MySQL, SQLite, OpenAI APIs, Hugging Face Embeddings, Vercel, Google AI Studio, and AI-assisted development tools. These should be understood as a mix of hands-on work and ongoing exploration, not claims of expert-level proficiency.",
  },
  {
    id: "ai-projects",
    keywords: ["ai project", "ai projects", "agent", "agentic", "multi-agent", "generative", "automation", "rag"],
    answer:
      "His AI-focused work includes Quorum, a multi-agent research assistant; AI Video Assistant, which turns media into searchable insights; AI Thumbnail Generator, a full-stack image workflow; and Mikasa, an experimental personal assistant built with Google AI Studio. Mikasa is a work in progress, not a finished production product.",
  },
  {
    id: "quorum",
    keywords: ["quorum", "research assistant", "research project"],
    answer:
      "Quorum is a Multi-Agent AI Research Assistant exploring how specialized agents can collaborate to discover information, analyze findings, and produce structured research outputs. Its documented stack includes Python, LangGraph, Mistral AI, Tavily, and Streamlit, with Search, Reader, Writer, and Critic roles.",
    link: "https://quorum-multi-agent.streamlit.app/",
    linkLabel: "Open Quorum",
  },
  {
    id: "wibly",
    keywords: ["wibly", "agency", "freelance", "business", "entrepreneur", "brand", "client"],
    answer:
      "WIBLY (We Inspire, Build, Launch, Your Brand) is Saksham's freelance web design and development agency initiative. It focuses on business websites, landing pages, web development, and helping small businesses build a digital presence. It reflects his entrepreneurial and client-oriented mindset; I won't invent clients or business results.",
    link: "https://wibly.in/",
    linkLabel: "Visit WIBLY",
  },
  {
    id: "other-projects",
    keywords: ["samtrack", "productivity", "focuslist", "thumbnail", "video assistant", "projects"],
    answer:
      "Other portfolio projects include SamTrack OS, a productivity dashboard for goals, tasks, DSA progress, focus sessions, and analytics; AI Video Assistant, for transcripts, summaries, insights, and transcript Q&A; AI Thumbnail Generator, for asynchronous thumbnail generation; and FocusList, a lightweight task manager.",
    link: "https://sam-track-os.vercel.app/",
    linkLabel: "Open SamTrack OS",
  },
  {
    id: "experience",
    keywords: ["experience", "internship", "primeor", "infosys", "professional", "work history", "काम", "अनुभव"],
    answer:
      "Saksham completed a remote internship with Primeor Solutions from 30 May 2026 to 30 June 2026. He also has Infosys Springboard learning and internship exposure, practical web development work, freelance agency building, and independent AI projects. I won't infer responsibilities or achievements that are not documented.",
  },
  {
    id: "interests",
    keywords: ["interest", "interests", "passion", "enjoy", "learning", "working style", "likes"],
    answer:
      "He is especially interested in Agentic AI, multi-agent architectures, AI and workflow automation, Generative AI, full-stack development, SaaS products, AI-powered productivity tools, developer tools, entrepreneurship, and emerging technologies. His approach is learning by building and using AI-assisted development thoughtfully.",
  },
  {
    id: "career",
    keywords: ["career", "role", "job", "aspiration", "goal", "opportunity", "sde", "future", "recruiter"],
    answer:
      "Saksham is interested in Software Development Engineering, Python development, full-stack development, AI engineering, Agentic AI development, AI automation, and Generative AI applications. He is especially excited by opportunities combining software engineering, AI, automation, and practical product development.",
  },
  {
    id: "resume-link",
    keywords: ["resume", "cv"],
    answer: "Here is Saksham's resume:",
    links: [{ label: "Open Resume", href: "https://drive.google.com/file/d/19CV5m5Q8xqSXc9bTUketu5SJV8ez7d1U/view?usp=sharing" }],
  },
  {
    id: "github-link",
    keywords: ["github"],
    answer: "Here is Saksham's GitHub:",
    links: [{ label: "Open GitHub", href: "https://github.com/sakshamsingh22" }],
  },
  {
    id: "linkedin-link",
    keywords: ["linkedin"],
    answer: "Here is Saksham's LinkedIn:",
    links: [{ label: "Open LinkedIn", href: "https://www.linkedin.com/in/saksham-singh-5b2627290/" }],
  },
  {
    id: "portfolio-link",
    keywords: ["portfolio link", "website link", "portfolio website", "portfolio"],
    answer: "Here is Saksham's portfolio:",
    links: [{ label: "Open Portfolio", href: "https://saksham-singh.in/" }],
  },
  {
    id: "wibly-link",
    keywords: ["wibly link", "wibly website"],
    answer: "Here is the WIBLY agency website:",
    links: [{ label: "Open WIBLY", href: "https://wibly.in/" }],
  },
  {
    id: "samtrack-link",
    keywords: ["samtrack link", "samtrack website"],
    answer: "Here is SamTrack OS:",
    links: [{ label: "Open SamTrack OS", href: "https://sam-track-os.vercel.app/" }],
  },
  {
    id: "all-links",
    keywords: ["all links", "every link", "all urls", "all websites", "links"],
    answer: "Here are Saksham's verified links:",
    links: [
      { label: "Resume", href: "https://drive.google.com/file/d/19CV5m5Q8xqSXc9bTUketu5SJV8ez7d1U/view?usp=sharing" },
      { label: "Portfolio", href: "https://saksham-singh.in/" },
      { label: "GitHub", href: "https://github.com/sakshamsingh22" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/saksham-singh-5b2627290/" },
      { label: "WIBLY agency", href: "https://wibly.in/" },
      { label: "SamTrack OS", href: "https://sam-track-os.vercel.app/" },
    ],
  },
  {
    id: "contact",
    keywords: ["contact", "hire", "email", "reach", "linkedin", "github", "resume", "connect", "संपर्क"],
    answer:
      "You can contact Saksham at saksham22.dev@gmail.com, connect on LinkedIn, or view his GitHub. He is open to internships, collaborations, and product conversations.",
    link: "mailto:saksham22.dev@gmail.com",
    linkLabel: "Email Saksham",
  },
];

export function getAssistantResponse(message) {
  const normalizedMessage = message.toLowerCase().trim();
  const rankedMatches = assistantKnowledge
    .map((entry) => {
      const score = entry.keywords.reduce(
        (total, keyword) => total + (normalizedMessage.includes(keyword) ? (keyword.includes(" ") ? 3 : 1) : 0),
        0
      );
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score);

  if (rankedMatches.length > 0) return rankedMatches[0].entry;

  return {
    answer:
      "I can help with Saksham's education, skills, projects, experience, interests, career goals, or contact links. Try asking about Quorum, WIBLY, or his technical stack.",
  };
}
