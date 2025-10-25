import {
  chegg,
  payr,
  fliprobo,
  summarizeX,
  scriptsolve,
  plane,
  studio137,

} from "../assets/images";

import {
  contact,
  css,
  chat,
  dictionary,
  note,
  tictactoe,
  news,
  text,
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
    title: "Frontend Developer",
    company_name: "Evolve AI",
    icon: findiy,
    iconBg: "#ECF4E8",
    date: "May 2025 - Present",
    points: [
      "Led the end-to-end development of a comprehensive CPG platform using Next.js, architecting a scalable and modular frontend that improved performance and maintainability.",
      "Reduced backend API calls by 40% by implementing efficient state management, caching strategies, and API best practices.",
      "Built a real-time chat platform with integrated notification system, enabling instant communication between brands and retailers.",
      "Collaborated closely with backend and design teams to create a cohesive, high-performing product experience, ensuring accessibility and responsiveness across all devices.",
      "Designed and developed a conversational UI for AI-driven voice interactions, allowing users to autonomously contact retailers and brands — reducing manual call dependencies by 70%.",
      "Championed code quality, performance audits, and frontend deployment pipelines, resulting in faster load times and enhanced user engagement."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Studio 137 Digital Media Solutions",
    icon: studio137,
    iconBg: "#9c2a29",
    date: "May 2025 - Present",
    points: [
      "Designed and implemented 10+ interactive assessment screens using React enhancing user completion rates by 35%.",
      "Built dynamic, state-driven components for MCQs, progress tracking, and conditional flows, supporting multiple assessment types.",
      "Optimized performance and UX across devices with responsive layouts and custom hooks",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Payr",
    icon: payr,
    iconBg: "#000000",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Expedited and maintained responsive web application using Next.js, improving load times by 30%.",
      "Reduced server load by 20% by integrating AWS S3 for seamless media storage by offloading file handling to the cloud",
      "Spearheaded a multi-account login system, allowing users to seamlessly manage multiple accounts from a single platform, increasing user efficiency by 10%.",
      "Participated in code reviews, debugging sessions, and the deployment of updates in a fast-paced environment.",
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
    iconUrl: findiy,
    theme: "btn-back-white",
    name: "Findiy - AI Workforce for CPG Universe",
    description: [
      "Allows users to interact with 5+ specialized AI agents for business workflows including AI-driven voice calls.",
    ],
    link: "https://findiy-agentic.ai",
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
  {
    iconUrl: chat,
    theme: "btn-back-blue",
    name: "Converso - A Chat Application",
    description:
      "Engineered a messaging platform using MERN stack with real-time bi-directional communication between users.",
    link: "https://github.com/Mehak-Mattoo/chat-app",
  },
  {
    iconUrl: note,
    theme: "btn-back-pink",
    name: "Note Zen - A Note-Taking Application",
    description:
      "Developed a feature-rich note-taking platform with CRUD Functionality.",
    link: "https://github.com/Mehak-Mattoo/note-taking-site",
  },

  {
    iconUrl: dictionary,
    theme: "btn-back-blue",
    name: "English Dictionary",
    description:
      "Dive deep into the definitions of words and enrich your understanding of their meanings and pronounciation.",
    link: "https://mehak-dictionary.netlify.app",
  },

  {
    iconUrl: text,
    theme: "btn-back-orange",
    name: "Text-Utils",
    description: "Manipulate and format your desired text with just a click.",
    link: "https://mehak-text-utils.netlify.app",
  },

  {
    iconUrl: tictactoe,
    theme: "btn-back-green",
    name: "Tic -Tac -Toe",
    description:
      "Experience the timeless fun of Tic Tac Toe in a sleek and modern online format, perfect for players of all ages.",
    link: "https://mehak-tic-tac-toe.netlify.app",
  },
];
