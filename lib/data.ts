export const profile = {
  name: "Shriyash Gaikwad",
  fullName: "Shriyash Vishnu Gaikwad",
  title: "Software Engineer",
  email: "shriyashgaikwad.sae.comp@gmail.com",
  altEmail: "shriyashgaikwad007@gmail.com",
  phone: "+91 9156299545",
  birthday: "Aug 26, 2004",
  location: "Pune, Maharashtra, India",
  initials: "SG",
  socials: {
    linkedin: "https://linkedin.com/in/shriyash-gaikwad-4a6865245",
    github: "https://github.com/shriyashgaikwad007",
    instagram: "https://www.instagram.com/shriyashhh_007",
    x: "https://x.com/shriyashgaikwad007",
  },
};

export const about = {
  paragraphs: [
    "I'm Shriyash Gaikwad, a motivated Computer Science & Engineering student and backend / full-stack developer with a strong interest in software development, Big Data technologies, and problem-solving. I'm currently pursuing my B.E. in Computer Science & Engineering at Sinhgad Academy of Engineering, Pune.",
    "I work confidently across Java, Python, C++, JavaScript and SQL, and enjoy building real-world applications — from Java desktop systems with JDBC and MySQL to MERN-based web apps and AI-powered tools. My internships at InternPe and Globeminds Technology helped me sharpen practical engineering and teamwork skills.",
    "Beyond code, I've led and coordinated student events, which grew my leadership, communication and organizational abilities. I'm looking to start my professional career in a growth-oriented organization where I can keep learning, contribute to team success, and gain hands-on industry experience.",
  ],
};

export const services = [
  {
    icon: "Server",
    title: "Backend Development",
    text: "Building applications with Java, JDBC, Node.js and Express, backed by MySQL and MongoDB with clean, maintainable structure.",
  },
  {
    icon: "Layers",
    title: "Full Stack Projects",
    text: "Crafting complete web apps with HTML, CSS, JavaScript and the MERN stack, including responsive UIs and REST APIs.",
  },
  {
    icon: "Code2",
    title: "Problem Solving",
    text: "Strengthening data structures and algorithm skills to write efficient, reliable and optimized solutions.",
  },
  {
    icon: "Coffee",
    title: "Java Engineering",
    text: "Developing object-oriented Java systems — student, banking and payroll modules with exception and file handling.",
  },
  {
    icon: "Database",
    title: "Database Management",
    text: "Designing and querying relational and NoSQL databases using MySQL, MongoDB and PostgreSQL fundamentals.",
  },
  {
    icon: "Sparkles",
    title: "Big Data & AI Interest",
    text: "Exploring Hadoop, distributed data processing and AI-powered tools to build intelligent, data-driven features.",
  },
];

export const achievements = [
  {
    emoji: "🎓",
    title: "EAS Scholarship",
    text: "Awarded the Educational Assistance Scheme (EAS) Scholarship for academic performance.",
  },
  {
    emoji: "🏅",
    title: "10th Board — 94%",
    text: "Scored 94% in the MSBSHSE 10th board examination.",
  },
  {
    emoji: "📈",
    title: "Diploma — 87.27%",
    text: "Completed Diploma in Information Technology (MSBTE) with 87.27%.",
  },
  {
    emoji: "🤝",
    title: "Event Coordinator",
    text: "Led student engagement and coordination programs as part of Vidyarthi Vikas Kendra.",
  },
  {
    emoji: "💡",
    title: "Big Data Seminar",
    text: "Presented and participated in an Infosys seminar on Hadoop and Big Data technologies.",
  },
];

export const education = [
  {
    school: "Sinhgad Academy of Engineering",
    period: "2023 — 2027",
    detail: "B.E. in Computer Science & Engineering — CGPA: 7.94 / 10",
  },
  {
    school: "Government Polytechnic Pune",
    period: "2021 — 2024",
    detail: "Diploma in Information Technology (MSBTE) — 87.27%",
  },
  {
    school: "R. M. Dhariwal English Medium School, Pune",
    period: "2021",
    detail: "10th (MSBSHSE) — 94%",
  },
];

export const experience = [
  {
    role: "Graduate Intern — InternPe",
    period: "Dec 2025 — Jan 2026",
    detail:
      "Java Programming internship. Implemented Student Information System, Bank Account System, Inheritance, Exception Handling and File Handling programs while strengthening core OOP concepts.",
  },
  {
    role: "Diploma Trainee Engineer — Globeminds Technology Pvt. Ltd.",
    period: "Jun 2023 — Jul 2023",
    detail:
      "Built a Hospital Management Software using Java, JDBC and MySQL on the NetBeans platform. Collaborated in a 3-member remote team to streamline workflows and optimize code quality.",
  },
];

export const certifications = [
  {
    title: "PHP & MySQL Training",
    provider: "IIT Bombay",
    score: "70.83 / 100",
  },
  { title: "C++ (CPP) Training", provider: "IIT Bombay", score: "72.50 / 100" },
  {
    title: "RDBMS PostgreSQL Training",
    provider: "IIT Bombay",
    score: "85 / 100",
  },
  {
    title: "Fundamentals of Information Security",
    provider: "Infosys",
    score: "Completed",
  },
  { title: "Network Fundamentals", provider: "Infosys", score: "Completed" },
];

export type Project = {
  title: string;
  category: "Applications" | "Web development";
  image: string;
  stack: string;
  points: string[];
};

export const projects: Project[] = [
  {
    title: "Payroll Management System",
    category: "Applications",
    image: "/projects/payroll.png",
    stack: "Java, MySQL, JDBC",
    points: [
      "Manage employee payments and leave records",
      "Automates payroll to maximize efficiency",
      "Reduces time taken for payroll activities",
    ],
  },
  {
    title: "Voice Translator Using AI",
    category: "Applications",
    image: "/projects/voice-translator.png",
    stack: "Python, APIs, Machine Translation",
    points: [
      "Real-time voice input translation",
      "Generates translated voice output",
      "Uses AI translation libraries and APIs",
    ],
  },
  {
    title: "Hospital Management Software",
    category: "Web development",
    image: "/projects/hospital.png",
    stack: "Java, JDBC, MySQL, NetBeans",
    points: [
      "Patient and record management with a clean UI",
      "Backend built with Java, JDBC and MySQL",
      "Built collaboratively in a 3-member team",
    ],
  },
];

export const projectFilters = [
  "All",
  "Applications",
  "Web development",
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "C", "C++", "Python", "JavaScript", "PHP"],
  },
  {
    label: "Frontend",
    items: ["HTML5", "CSS", "JavaScript"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "JDBC"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "NetBeans"],
  },
  {
    label: "Concepts & Soft Skills",
    items: [
      "Problem Solving",
      "Big Data / Hadoop",
      "Team Leadership",
      "Communication",
      "Event Planning",
      "Teamwork",
    ],
  },
];

export const seminars = [
  {
    title: "Big Data Processing using Hadoop",
    provider: "Infosys",
    date: "Feb 2024",
    detail:
      "Covered the Hadoop ecosystem, HDFS architecture, the MapReduce processing model and real-world applications of scalable distributed data processing.",
  },
];
