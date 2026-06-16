import {
  payr,
  summarizeX,
  plane,
  studio137,
  luna,
} from "../assets/images";

import {
  css,
  chat,
  news,
  express,
  git,
  github,
  bootstrap,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  react,
  redux,
  java,
  tailwindcss,
  figma,
  typescript,
  next,
  findiy,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Animation",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: typescript,
    name: "Typescript",
    type: "Frontend",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },

  {
    imageUrl: next,
    name: "NextJs",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Lead Frontend Developer",
    company_name: "Evolve AI",
    icon: findiy,
    iconBg: "#ECF4E8",
    date: "May 2025 - Present",
    points: [
      "Led the entire frontend architecture of an agentic CPG platform, improving SEO and reducing UI-related defects by 30%",
      "Built a dynamic Sell Sheet Generator that auto-populates product data from user profiles and applies it to pre-designed templates, reducing manual creation time by 70%.",
      "Integrated streaming agentic chat interface, handling SSE-based response rendering and CNAME-based conversation tagging — increasing message retrieval efficiency by 45%.",
      "Built a stakeholder relationship workflow (send/accept connection requests), resulting in a 40% increase in cross-team engagement on the platform",
      "Designed and developed a conversational UI for AI-driven voice interactions, allowing users to autonomously contact retailers and brands — reducing manual call dependencies by 70%.",
      "Improved perceived load speed by 40% through aggressive prefetching, route-level caching, and polished skeleton screens for a smoother user experience.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Studio 137 Digital Media Solutions",
    icon: studio137,
    iconBg: "#9c2a29",
    date: "May 2025 - December 2025",
    points: [
      "Designed and implemented 10+ interactive assessment screens using React enhancing user completion rates by 35%.",
      "Built dynamic, state-driven components for MCQs, progress tracking, and conditional flows, supporting multiple assessment types.",
      "Improved performance and cross-device UX through responsive layouts and custom hooks, reducing load time by 25%",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Payr",
    icon: payr,
    iconBg: "#000000",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Increased partner engagement by 40% by building seamless API integrations that enabled external organizations to contribute content directly to the platform.",
      "Reduced server load by 20% by integrating AWS S3 for seamless media storage by offloading file handling to the cloud",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Mehak-Mattoo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mehak-mattoo",
  },
];

export const projects = [
  {
    iconUrl: luna,
    theme: "btn-back-red",
    name: "AI Workspace",
    description: [
      "AI Workspace brings notes, documents, and a context-aware AI assistant into a single, seamless interface — with real-time sync, secure auth, and a frontend tuned for speed.",
    ],
    link: "https://myai-workspace.vercel.app/",
  },

  {
    iconUrl: plane,
    theme: "btn-back-blue",
    name: "TicketParse - Plane Ticket Data Parser",
    description: [
      "Devised an application to process plane ticket data from PDFs into a flexible ticket template that adapts to different ticket inputs.",
    ],
    link: "https://github.com/Mehak-Mattoo/Ticket-Parse",
  },
  {
    iconUrl: chat,
    theme: "btn-back-blue",
    name: "Converso - A Chat Application",
    description:
      "Engineered a messaging platform using MERN stack with real-time bi-directional communication between users.",
    link: "https://github.com/Mehak-Mattoo/chat-app",
  },
  {
    iconUrl: summarizeX,
    theme: "btn-back-black",
    name: "SummarizeX - AI Article Summarizer",
    description:
      "Developed an AI-powered summarizer with features like PDF/DOC downloads, handling over 100+ summaries monthly.",
    link: "https://summarize-x.vercel.app/",
  },

  {
    iconUrl: news,
    theme: "btn-back-yellow",
    name: "News Verse",
    description:
      "Built a responsive news website serving real-time updates across 10+ categories, ensuring the website provides the latest information with no delays.",
    link: "https://news-verse-mu.vercel.app/",
  },
 

  // {
  //   iconUrl: dictionary,
  //   theme: "btn-back-blue",
  //   name: "English Dictionary",
  //   description:
  //     "Dive deep into the definitions of words and enrich your understanding of their meanings and pronounciation.",
  //   link: "https://mehak-dictionary.netlify.app",
  // },

 

];
