const baseUrl = import.meta.env.BASE_URL;

export const portfolioData = {
  personalInfo: {
    name: "Yogesh Yadav",
    role: "Software Engineer",
    company: "DEPT/Teknopoint",
    bio: "Software Engineer as Full stack developer",
    social: {
      github: "hhttps://github.com/yogeshft",
      linkedin: "https://www.linkedin.com/in/yogeshft/",
      email: "yadavyogesh404@gmail.com",
    },
  },
  about: {
    profileImage: `${baseUrl}profile.jpg`,
    description: [
      `Full-stack engineer specializing in performance optimization and component-driven architecture. Delivered 33% API
performance gains and 40% faster feature development at Tekno Point through MongoDB optimization and reusable React
components. Experienced in building authentication systems, real-time dashboards, and payment integrations with React,
Node.js, and MongoDB.`,
    ],
  },
  experience: [
    {
      company: "DEPT/Teknopoint",
      logo: `${baseUrl}dept.png`,
      totalDuration: "2 year and 3 months",
      location: "Mumbai,India",
      roles: [
        {
          title: "Software Engineer",
          type: "Full-time",
          period: "March 2025 - March 2026",
          description: [
            "Improved backend performance by 33% (2.1s → 1.4s) by implementing MongoDB compound indexing and Redis caching for high-frequency API paths",
            "Reduced client-side load times by 50% through route-based code splitting, lazy loading, and script deferring, achieving “Good” Core Web Vitals",
            "Cut 60% redundant API calls by implementing debouncing and throttling strategies for search and scroll-heavy workflows",
            "Architected and delivered a lead-generation CRM with 15+ REST APIs, real-time dashboards using WebSockets, and duplicate-prevention logic",
          ],
        },
        {
          title: "Trainee Frontend Developer",
          type: "Full-time",
          period: "Dec 2023 - March 2024",
          description: [
            "Built a reusable React component library (forms, modals, date pickers, charts) adopted across multiple product features",
            "Modernized a legacy frontend by migrating React 16 → 18, refactoring class components to hooks and removing deprecated dependencies",
            "Implemented JWT-based authentication with RBAC and refresh token rotation, securing role-based access across the platform",
            "Authored and maintained API documentation using Swagger and Postman, reducing developer onboarding time by ~50%",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript/ES6+",
        "Tailwind CSS",
        "HTML5/CSS3",
        "Framer Motion",
        "Chakra UI",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Redis",
        "Typescript",
        "REST APIs",
        "Database Design",
        "MongoDB",
      ],
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Docker", "AWS", "VS Code", "Agile/Scrum"],
    },
  ],
  education: [
    {
      school: "VIVA Institute of Technology",
      degree: "Computer science Engineering, Computer Science",
      period: "2019-2023",
      logo: `${baseUrl}viva.jpg`,
      activities: "Class CR, Publication Head at CSI",
      skills: [
        "Object-Oriented Programming (OOP)",
        "Web Development",
        "Data Structures",
        "Algorithms",
        "Database Management",
      ],
    },
    {
      school: "Thakur College of Science & Commerce",
      degree: "Computer Science",
      period: "2017 - 2019",
      logo: `${baseUrl}thakur.jpg`,
      activities:
        "Debate, Elocution, Drawing. Sports: Cricket, Badminton, Football, Throwball, Basketball, Shot Put, Discus Throw, Dodgeball, Carrom.",
      skills: ["Leadership", "Teamwork", "Event Management"],
    },
  ],
  achievements: [
    {
      title: "The Complete JavaScript Course 2025: From Zero to Expert!",
      issuer: "Udemy",
      date: "Issued Feb 2026",
      credentialId: "UC-141e0f1e-dd53-4d9e-9af3-3ebcb17378fa",
      skills: "Javascript",
      logo: `${baseUrl}udemy_logo.png`,
      link: "https://www.udemy.com/certificate/UC-141e0f1e-dd53-4d9e-9af3-3ebcb17378fa/", // Placeholder link
    },
  ],
};
