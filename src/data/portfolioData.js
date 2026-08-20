export const PERSONAL_INFO = {
  name: "Shaan Dabhi",
  title: "Computer Engineering Student @ CHARUSAT DEPSTAR",
  tagline: "Building Efficient Software, Algorithms & Web Interfaces in C++, Java & JavaScript",
  university: "CHARUSAT — DEPSTAR",
  degree: "B.Tech, Computer Engineering",
  graduation: "Expected Graduation: 2029",
  location: "Gujarat, India",
  phone: "9408487768",
  email: "shaandabhi@gmail.com",
  status: "Seeking Software Development Internship",
  photo: "/shaan-photo.jpg",
  bio: "Computer Engineering student with a strong foundation in C and C++ and hands-on coursework in object-oriented programming, currently expanding into web development (HTML, CSS, JavaScript) and Java. Motivated to apply problem-solving and programming skills in a Software Development Internship, with a focus on writing clean, efficient code and continuously learning new tools and frameworks.",
  socials: {
    github: "https://github.com/shaandabhi1578",
    linkedin: "https://linkedin.com/in/shaan-dabhi",
    email: "mailto:shaandabhi@gmail.com"
  },
  stats: [
    { label: "University", value: "CHARUSAT" },
    { label: "Institute", value: "DEPSTAR" },
    { label: "Degree", value: "B.Tech CE" },
    { label: "Primary Stack", value: "C++ / Web" }
  ],
  languages: ["English", "Hindi", "Gujarati"]
};

export const ABOUT_DETAILS = {
  headline: "Computer Engineering Student Motivated by Problem Solving & Software Quality",
  story: "I am a Computer Engineering student at CHARUSAT DEPSTAR with a solid foundation in low-level and high-level programming (C, C++, OOP, Java). I love writing algorithmic software, exploring web technologies (HTML, CSS, JavaScript), and creating interactive projects.",
  values: [
    { title: "Clean & Efficient Code", desc: "Focusing on optimal algorithmic logic, clean structure, and readability." },
    { title: "Algorithmic Problem Solving", desc: "Building algorithms for scale detection, score matching, and data structures." },
    { title: "Continuous Learning", desc: "Expanding skills daily across Java, Object-Oriented Programming, and Web Tech." },
    { title: "Software Quality", desc: "Using Git version control, colorized terminal output, and modern UI practices." }
  ],
  funFacts: [
    { label: "Phone", value: "+91 9408487768" },
    { label: "University", value: "CHARUSAT DEPSTAR" },
    { label: "Primary Language", value: "C++ (Proficient)" },
    { label: "OS Mastery", value: "Windows & macOS" }
  ]
};

export const PROJECTS = [
  {
    id: "music-scale-detector",
    title: "Music Scale Detector",
    category: "C++ Console Application",
    shortDesc: "Interactive C++17 command-line tool identifying the musical key of a song from user-entered chords using a database of 24 major and minor scales.",
    fullDesc: "Built an interactive C++17 command-line application that analyzes user-entered chords and matches them against diatonic and 7th-chord scale variants. Features chord input normalization, enharmonic spelling handling, progression recognition (e.g. I-IV-V-I), and guitar capo position suggestions with colorized terminal output.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    tags: ["C++17", "Data Structures", "CLI", "Algorithms", "OOP"],
    metrics: ["24 Major & Minor Scales", "Capo Suggestion", "Colorized Output"],
    architecture: [
      { step: "Input Normalization", desc: "Handles 'min', 'maj7', enharmonic spellings & capitalization" },
      { step: "Scoring Algorithm", desc: "Matches chords against diatonic & 7th-chord variants" },
      { step: "Progression Recognizer", desc: "Identifies patterns like I-IV-V-I & calculates capo positions" },
      { step: "Menu UI", desc: "Colorized terminal interface with detailed score breakdowns" }
    ],
    demoUrl: "https://github.com/shaandabhi1578",
    githubUrl: "https://github.com/shaandabhi1578",
    featured: true
  },
  {
    id: "code-obsidian",
    title: "Code Obsidian Web Workspace",
    category: "Web Application",
    shortDesc: "Modern interactive web development workspace with dynamic UI components, state graph visualizer, and custom themes.",
    fullDesc: "A web application exploring modern frontend architecture, glassmorphism design systems, and responsive layout performance using HTML, CSS, and JavaScript.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML5", "CSS3", "Vite", "React.js"],
    metrics: ["Fast Render", "Glassmorphism UI", "Responsive"],
    architecture: [
      { step: "UI Layer", desc: "Glassmorphism components & CSS design tokens" },
      { step: "State Tree", desc: "React hooks & modular event handling" }
    ],
    demoUrl: "https://shaandabhi.netlify.app",
    githubUrl: "https://github.com/shaandabhi1578",
    featured: true
  }
];

export const CERTIFICATIONS = [
  {
    title: "Object Oriented Programming — Specialization",
    issuer: "University of London / Goldsmiths, University of London (Coursera)",
    date: "Apr 2026",
    skills: "Object-Oriented Design, C++, Program Architecture"
  },
  {
    title: "Introduction to Basic Game Development using Scratch",
    issuer: "Coursera Project Network",
    date: "Mar 2026",
    skills: "Logic & Game Loops, Interactive Design"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "C & C++", level: 92, exp: "Proficient" },
      { name: "Java", level: 75, exp: "Learning" },
      { name: "HTML5 & CSS3", level: 85, exp: "Active" },
      { name: "JavaScript", level: 80, exp: "Learning" }
    ]
  },
  {
    name: "Tools & OS",
    icon: "Server",
    skills: [
      { name: "Visual Studio Code", level: 90, exp: "Daily Tool" },
      { name: "Git & GitHub", level: 88, exp: "Version Control" },
      { name: "Windows & macOS", level: 95, exp: "Operating Systems" }
    ]
  }
];

export const TIMELINE = [
  {
    period: "EXPECTED GRADUATION: 2029",
    role: "B.Tech, Computer Engineering",
    company: "CHARUSAT — DEPSTAR",
    location: "Anand, Gujarat",
    description: "Hands-on coursework in C, C++, Object-Oriented Programming, Data Structures, and expanding into Web Development and Java.",
    highlights: [
      "Built Music Scale Detector C++17 algorithmic CLI tool",
      "Completed Object Oriented Programming Specialization by University of London",
      "Focusing on clean, efficient code & software development internship readiness"
    ]
  }
];

export const TERMINAL_COMMANDS = {
  help: "Available commands:\n  • resume   - Display full resume summary & contact\n  • about    - Shaan Dabhi bio & CHARUSAT DEPSTAR details\n  • skills   - Technical skills & programming breakdown\n  • projects - List of C++ & Web projects\n  • certs    - Coursera & University certifications\n  • contact  - Phone: 9408487768 | Email: shaandabhi@gmail.com\n  • matrix   - Run interactive matrix code stream effect\n  • clear    - Clear terminal buffer",
  resume: "SHAAN DABHI | Computer Engineering Student @ CHARUSAT DEPSTAR\nPhone: 9408487768 | Email: shaandabhi@gmail.com\nLinkedIn: linkedin.com/in/shaan-dabhi\nGitHub: github.com/shaandabhi1578",
  about: "Computer Engineering student with a strong foundation in C and C++ and hands-on coursework in object-oriented programming, expanding into Web Development and Java.",
  skills: "Technical Skills:\n  Programming: C, C++ (proficient), Java (learning)\n  Web Tech: HTML, CSS, JavaScript (learning)\n  Tools: VS Code, Git, GitHub\n  OS: Windows, macOS",
  projects: "Projects:\n  1. Music Scale Detector — C++17 Console Application\n  2. Code Obsidian Web Workspace",
  certs: "Certifications:\n  • Object Oriented Programming Specialization (University of London, Coursera)\n  • Basic Game Development (Scratch, Coursera)",
  contact: "Phone: 9408487768\nEmail: shaandabhi@gmail.com\nLinkedIn: linkedin.com/in/shaan-dabhi\nGitHub: github.com/shaandabhi1578"
};
