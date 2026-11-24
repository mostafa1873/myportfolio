/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, Experience, Service, Testimonial } from "./types";
import globalNexusImg from "./assets/images/global-nexus.png";
import ezzExportImg from "./assets/images/ezz-export.png";
import pureLandImg from "./assets/images/pure-land.png";
import agroPalmImg from "./assets/images/agro-palm.png";
import agroMartImg from "./assets/images/agro-mart.png";
import mostafaAvatar from "./assets/images/mostafa_avatar.png";

export const PERSONAL_INFO = {
  name: "Mostafa Osama",
  title: "Front-End Developer · React.js / Next.js",
  location: "Alexandria, Egypt",
  email: "mostafa.osama.web@gmail.com",
  phone: "+20 01552753424",
  github: "https://github.com/mostafa1873",
  linkedin: "https://www.linkedin.com/in/mostafa-osama-b3674b32a",
  portfolio: "https://mostafa1873.github.io/My-Portfolio/",
  bio: "Front-End Developer with 1 year of professional experience at Global Nexus, preceded by 9 months of intensive self-directed training building practice projects, nearly two years of hands-on, continuous work with React.js and Next.js. I build clean, responsive, production-ready interfaces and integrate REST APIs into real client websites, including multi-language and multi-market platforms for international export businesses. I handle the full cycle: design from the brand identity, development, performance/accessibility/SEO optimization, production build and server deployment.",
  availability: "Available for freelance projects",
  avatar: mostafaAvatar,
};

export const PROJECTS: Project[] = [
  {
    id: "global-nexus",
    title: "Global Nexus",
    description: "Website for a digital marketing agency serving a global client base.",
    longDescription: "Designed the interface around the agency's own brand identity and built it with a fast, responsive layout and reusable components. Audited and fixed the site until it scored 100% on performance, accessibility, best practices and SEO, then built and deployed it to production.",
    technologies: ["Next.js", "React.js", "Responsive Design", "SEO"],
    image: globalNexusImg,
    demoUrl: "https://globalnexuseg.com",
    githubUrl: "https://github.com/mostafa1873",
    category: "Marketing",
  },
  {
    id: "ezz-export",
    title: "EZZ Export",
    description: "Corporate platform for premium agricultural exports.",
    longDescription: "Turned the company's brand identity into the visual direction and UI, then built the multi-language interface and dynamic product catalog. Refactored for clean code, speed and accessibility, with SEO tuned so B2B buyers find the company on Google. Handled the production build and server deployment.",
    technologies: ["Next.js", "React.js", "i18n", "SEO", "Tailwind CSS"],
    image: ezzExportImg,
    demoUrl: "https://ezzexport.com",
    githubUrl: "https://github.com/mostafa1873",
    category: "Enterprise",
  },
  {
    id: "pure-land",
    title: "Pure Land",
    description: "B2B website for an Egyptian supplier of fresh, pickled and frozen produce for European buyers.",
    longDescription: "Built the visual direction from the brand, then coded it end to end in English, Arabic (RTL) and Italian with a product catalog and RFQ form. Delivered clean, accessible, fast code with full SEO, plus the production build and server deployment.",
    technologies: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "i18n", "SEO"],
    image: pureLandImg,
    demoUrl: "https://pureland-eg.com",
    githubUrl: "https://github.com/mostafa1873",
    category: "B2B / Export",
  },
  {
    id: "agro-palm",
    title: "Agro Palm",
    description: "Fruit & vegetable export site for European markets.",
    longDescription: "Defined the visual direction from the brand, implemented Arabic, English, Spanish and Italian support, and integrated Google Analytics for traffic insights. Wrote clean, maintainable code with an SEO-first structure for search visibility, and managed the production build and upload to the server.",
    technologies: ["React.js", "JavaScript", "i18n", "Google Analytics", "SEO"],
    image: agroPalmImg,
    demoUrl: "https://agropalmegypt.com",
    githubUrl: "https://github.com/mostafa1873",
    category: "Export",
  },
  {
    id: "agro-mart",
    title: "Agro Mart",
    description: "Website for an export company dealing with international buyers.",
    longDescription: "Created the design from the company's visual identity and coded it with a high-performance responsive layout. Cleaned up the code and optimized accessibility and SEO for full marks in every audit category, then generated the production build and deployed it to the server.",
    technologies: ["React.js", "JavaScript", "Responsive Design", "SEO"],
    image: agroMartImg,
    demoUrl: "https://www.agromart-eg.com",
    githubUrl: "https://github.com/mostafa1873",
    category: "Export",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "React.js & Next.js",
    level: 96,
    category: "frontend",
    description: "Nearly two years of hands-on experience building clean, responsive, production-ready interfaces.",
  },
  {
    name: "JavaScript & TypeScript",
    level: 95,
    category: "frontend",
    description: "Clean modern JavaScript and TypeScript fundamentals, asynchronous logic, and state management.",
  },
  {
    name: "HTML5 & CSS3",
    level: 98,
    category: "frontend",
    description: "Developing semantic structures, modern layout engines, and accessible user interfaces.",
  },
  {
    name: "Tailwind CSS & Bootstrap",
    level: 95,
    category: "frontend",
    description: "Rapidly crafting precise, responsive UI components, grid layouts, and custom designs.",
  },
  {
    name: "Responsive Design & Media Queries",
    level: 98,
    category: "frontend",
    description: "Delivering seamless user experiences across smartphones, tablets, and desktop displays.",
  },
  {
    name: "jQuery & Vite",
    level: 92,
    category: "frontend",
    description: "DOM manipulation, legacy library integration, and blazing-fast modern build tooling.",
  },
  {
    name: "REST APIs",
    level: 94,
    category: "workflow",
    description: "Integrating REST APIs, managing dynamic data rendering, and handling real client workflows.",
  },
  {
    name: "Git & GitHub",
    level: 92,
    category: "workflow",
    description: "Managing version control securely and collaborating efficiently on production-ready projects.",
  },
  {
    name: "Figma & Brand UI Direction",
    level: 90,
    category: "workflow",
    description: "Turning brand identities and Figma mockups into pixel-perfect production code.",
  },
  {
    name: "Multi-Language (i18n & RTL)",
    level: 95,
    category: "frontend",
    description: "Building multilingual interfaces (Arabic, English, Spanish, Italian) with RTL support.",
  },
  {
    name: "SEO & Performance Optimization",
    level: 96,
    category: "workflow",
    description: "Semantic SEO structure, Google Analytics tracking, and 100% audit optimization.",
  },
  {
    name: "Problem Solving & Responsibility",
    level: 96,
    category: "workflow",
    description: "Teamwork, flexibility, creativity, and full ownership from design to server deployment.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    years: "Sep 2025 - Present",
    role: "Front-End Developer",
    company: "Global Nexus (Egypt)",
    description: "1 year of professional experience developing modern, responsive production websites using React and Next.js for international export and marketing clients.",
    achievements: [
      "Developed modern, responsive production websites using React and Next.js for international export and marketing clients.",
      "Built clean, scalable UIs with HTML, CSS and JavaScript, including multi-language interfaces (Arabic, English, Spanish, Italian).",
      "Integrated REST APIs, managed dynamic data rendering and Google Analytics tracking.",
      "Delivered 5+ production-ready client websites end to end: design from each company's brand identity and visual direction, implementation, clean-code refactoring, performance, accessibility and SEO optimization, production build and server deployment.",
    ],
  },
  {
    id: "exp-2",
    years: "Dec 2024 - Sep 2025",
    role: "Front-End Developer (Self-Directed Training)",
    company: "Independent Technical Training",
    description: "9 months of intensive self-directed training building practice projects, mastering React.js, Next.js, and core web technologies.",
    achievements: [
      "Trained independently on React.js, Next.js and JavaScript fundamentals through structured practice projects and online resources.",
      "Built personal projects to practice API integration and state management before moving into professional work.",
      "Graduated from Faculty of Commerce, Al-Azhar University (2024).",
      "Mastered responsive design, component architecture, and modern build tools.",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Front-End Development",
    description: "Building modern and responsive web applications using React.js and Next.js with clean, scalable code.",
    iconName: "Code",
  },
  {
    id: "srv-2",
    title: "Multi-Language & Global Platforms",
    description: "Delivering internationalized websites with RTL/LTR support (Arabic, English, Spanish, Italian) for export markets.",
    iconName: "Monitor",
  },
  {
    id: "srv-3",
    title: "REST API Integration",
    description: "Integrating REST APIs to create dynamic web experiences, dynamic catalogs, and real-time data handling.",
    iconName: "Workflow",
  },
  {
    id: "srv-4",
    title: "UI/UX & Brand Identity",
    description: "Translating brand identities into fast, intuitive UI with Tailwind CSS, Bootstrap, and responsive layouts.",
    iconName: "Layout",
  },
  {
    id: "srv-5",
    title: "SEO & Performance Audits",
    description: "Optimizing web platforms for 100% scores in performance, accessibility, best practices, and search visibility.",
    iconName: "Globe",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Management Team",
    role: "Executives",
    company: "EZZ Export",
    quote: "Mostafa delivered a premium platform for our agricultural export business. The multi-language interface and dynamic product catalog perfectly matched our need to attract global B2B leads. A highly professional developer.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "test-2",
    name: "Project Lead",
    role: "Operations",
    company: "Agro Mart",
    quote: "The responsive design and optimized UI/UX components Mostafa implemented for us made seamless navigation a reality for our international buyers. The performance of the website is exceptional.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "test-3",
    name: "Marketing Director",
    role: "Digital Strategy",
    company: "Global Nexus",
    quote: "Working with Mostafa has been an excellent experience. His proficiency in modern frontend technologies and dedication to clean, scalable code has elevated the digital solutions we provide to our clients.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
  },
];
