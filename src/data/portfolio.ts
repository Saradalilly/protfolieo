export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'All' | 'AI / ML' | 'Full Stack' | 'Data & Analytics' | 'Web Apps';
  image: string;
  tags: string[];
  featured: boolean;
  github: string;
  demo: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Internship' | 'Project' | 'Freelance' | 'Education';
  description: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Vadali Sarada",
    firstName: "Sarada",
    lastName: "Vadali",
    roles: [
      "Full Stack Developer",
      "AI & Data Developer",
      "Machine Learning Specialist",
      "Python & SQL Analyst"
    ],
    tagline: "Bridging complex technical workflows, predictive AI models, and elegant web applications.",
    bio: "Detail-oriented Data & Full Stack Developer with strong technical proficiency in Python, SQL, PySpark, React, Next.js, and Machine Learning. Skilled in extracting trends, building predictive algorithms (like Support Vector Regression), and constructing real-time data pipelines & interactive Power BI / Tableau dashboards.",
    location: "Amalapuram, Andhra Pradesh, India",
    email: "vadalisarada2004@gmail.com",
    phone: "+91 9347495403",
    github: "https://github.com/Saradaballu/Sarada",
    linkedin: "https://www.linkedin.com/in/vadali-sarada-63550a419",
    status: "Open to Full-Time Roles & High-Impact Projects",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#contact"
  },

  about: {
    summary: "I specialize in transforming complex raw data into actionable insights and high-performance digital products. With hands-on experience in Machine Learning regression models, PySpark ETL pipelines, and modern React/Next.js frontend architectures, I create solutions that are both technically robust and user-centric.",
    objectives: [
      "Deliver scalable, production-ready web applications using Next.js and TypeScript.",
      "Architect intelligent AI & Machine Learning algorithms tailored to solve business problems.",
      "Optimize data pipelines and produce crisp, interactive BI dashboards (Power BI & Tableau).",
      "Collaborate with multi-disciplinary teams to drive innovation and technical excellence."
    ],
    education: {
      degree: "B.Tech in Computer Science & Engineering (CSE)",
      institution: "Bonam Venkata Chalamayya Institute of Technology and Science (BVCITS)",
      location: "Amalapuram, Andhra Pradesh",
      percentage: "68%",
      period: "2020 - 2024",
      coursework: ["Data Structures & Algorithms", "Database Management Systems (DBMS)", "Python & Machine Learning", "Web Technologies", "Software Engineering"]
    }
  },

  skills: [
    {
      title: "Frontend Development",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: 90, highlight: true },
        { name: "Next.js 15 (App Router)", level: 88, highlight: true },
        { name: "TypeScript", level: 85, highlight: true },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Framer Motion", level: 82 }
      ]
    },
    {
      title: "Backend & Programming",
      iconName: "Server",
      skills: [
        { name: "Python", level: 95, highlight: true },
        { name: "SQL", level: 90, highlight: true },
        { name: "Data Structures & Algorithms (DSA)", level: 85, highlight: true },
        { name: "Node.js & Express", level: 80 },
        { name: "Tkinter / GUI Design", level: 88 }
      ]
    },
    {
      title: "AI, ML & Data Engineering",
      iconName: "BrainCircuit",
      skills: [
        { name: "Support Vector Regression (SVR)", level: 92, highlight: true },
        { name: "PySpark", level: 88, highlight: true },
        { name: "Grid Search Cross-Validation", level: 90 },
        { name: "Pandas & NumPy", level: 94 },
        { name: "Matplotlib & Seaborn", level: 88 }
      ]
    },
    {
      title: "Data Visualization & Databases",
      iconName: "BarChart3",
      skills: [
        { name: "Power BI", level: 90, highlight: true },
        { name: "Tableau", level: 88, highlight: true },
        { name: "MySQL", level: 90, highlight: true },
        { name: "PostgreSQL", level: 82 }
      ]
    },
    {
      title: "Tools & DevOps",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", level: 90, highlight: true },
        { name: "VS Code", level: 95 },
        { name: "Vercel Deployment", level: 88 },
        { name: "MS Office Suite", level: 95 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "crude-oil-svr",
      title: "Prediction of Crude Oil Prices Using SVR & Grid Search CV",
      subtitle: "Machine Learning Crude Oil Price Forecast Algorithm & Interactive GUI",
      description: "A machine learning pipeline built with Support Vector Regression (SVR) and Grid Search Cross-Validation (GSCV) achieving an 87% prediction accuracy on non-linear volatile oil price data. Features a secure Tkinter GUI with Admin and User modules.",
      longDescription: "Developed an advanced forecasting engine to handle volatile commodities pricing. Utilized Grid Search CV to fine-tune gamma, C, and epsilon parameters. Processed historical datasets using Pandas & NumPy, presenting visual comparison charts via Matplotlib. Includes a multi-tier Python Tkinter desktop GUI for seamless data upload and forecast visualization.",
      category: "AI / ML",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "SVR", "Machine Learning", "Grid Search CV", "Tkinter", "Pandas", "Matplotlib"],
      featured: true,
      github: "https://github.com/Saradaballu/Sarada",
      demo: "https://github.com/Saradaballu/Sarada",
      metrics: [
        { label: "Accuracy Rate", value: "87%" },
        { label: "Algorithm", value: "SVR + GSCV" },
        { label: "Modules", value: "Admin & User" }
      ]
    },
    {
      id: "ai-support-analytics",
      title: "AI Customer Support & Interactive Analytics Hub",
      subtitle: "Next.js 15 + PySpark Real-time Data Analytics Platform",
      description: "A modern full stack analytics application integrating Next.js 15 App Router, Python FastAPI, and PySpark to visualize customer sentiment metrics and query trends with interactive chart modules.",
      longDescription: "Designed for high throughput data visualizer. Combines Next.js 15 client UI with PySpark back-end pipeline to stream data transformations directly into clean Recharts and Power BI embedded views.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js 15", "TypeScript", "Python", "PySpark", "Tailwind CSS", "Power BI"],
      featured: true,
      github: "https://github.com/Saradaballu/Sarada",
      demo: "https://github.com/Saradaballu/Sarada",
      metrics: [
        { label: "Framework", value: "Next.js 15" },
        { label: "Engine", value: "PySpark" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      id: "pyspark-bi-dashboard",
      title: "PySpark Data Pipeline & BI Dashboard",
      subtitle: "Large-scale Structured Data ETL & Tableau Dashboard",
      description: "Built automated data processing pipelines in PySpark & MySQL, generating rich Power BI and Tableau report cards for strategic decision making.",
      longDescription: "Engineered robust SQL and PySpark scripts to ingest raw CSV and transactional logs, cleaning nulls, enforcing schemas, and exporting structured aggregated tables directly consumed by Tableau dashboards.",
      category: "Data & Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      tags: ["PySpark", "SQL", "MySQL", "Power BI", "Tableau", "Python"],
      featured: false,
      github: "https://github.com/Saradaballu/Sarada",
      demo: "https://github.com/Saradaballu/Sarada",
      metrics: [
        { label: "Data Pipeline", value: "PySpark ETL" },
        { label: "BI Tools", value: "Power BI / Tableau" }
      ]
    },
    {
      id: "smart-portfolio-suite",
      title: "Smart Developer Portfolio & Resume Engine",
      subtitle: "Ultra-responsive Next.js Glassmorphism Web App",
      description: "A state-of-the-art developer portfolio with custom cursor trails, Framer Motion transitions, dark mode system, and interactive project deep-dives.",
      longDescription: "Crafted with Next.js 15, TypeScript, and Tailwind CSS. Features WCAG accessibility, zero layout shifts, dynamic SEO metadata, and one-click Vercel deployment.",
      category: "Web Apps",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: false,
      github: "https://github.com/Saradaballu/Sarada",
      demo: "https://github.com/Saradaballu/Sarada",
      metrics: [
        { label: "Performance", value: "100/100" },
        { label: "Design", value: "Glassmorphism" }
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Web Technologies & SQL Intern",
      company: "HCLTech",
      period: "Internship",
      location: "India",
      type: "Internship",
      description: [
        "Completed rigorous hands-on training in Web Technologies (HTML, CSS, JavaScript) and SQL database design.",
        "Developed web interface components and optimized complex relational queries for data extraction.",
        "Refined professional communication, time management, and collaborative software delivery methodologies."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "SQL", "Database Design", "Soft Skills"]
    },
    {
      id: "exp-2",
      role: "Lead Machine Learning Developer",
      company: "Academic Capstone Project",
      period: "2023 - 2024",
      location: "BVCITS, Amalapuram",
      type: "Project",
      description: [
        "Architected Support Vector Regression (SVR) model with Grid Search Cross Validation for oil price prediction.",
        "Built custom multi-role Python Tkinter GUI featuring separate Admin and User authentication portals.",
        "Achieved 87% prediction accuracy and created automated Matplotlib performance comparison graphs."
      ],
      skills: ["Python", "SVR", "Grid Search CV", "Pandas", "Matplotlib", "Tkinter"]
    },
    {
      id: "exp-3",
      role: "Community Survey & Data Analytics Lead",
      company: "Institutional Outreach Project",
      period: "Community Project",
      location: "Amalapuram",
      type: "Project",
      description: [
        "Executed field survey data collection, tabular sanitization, and structured aggregation.",
        "Created visual statistical reports identifying local socio-economic indicators and actionable insights."
      ],
      skills: ["Data Collection", "Excel Analytics", "Statistical Analysis", "Data Cleaning"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-1",
      title: "Web Technologies, SQL & Soft Skills Certification",
      issuer: "HCLTech",
      date: "Completed",
      description: "Certified proficiency in front-end web development, SQL query optimization, and technical teamwork."
    },
    {
      id: "cert-2",
      title: "NPTEL Online Certification - Python Programming",
      issuer: "NPTEL (IIT)",
      date: "Completed",
      description: "Comprehensive certification covering algorithmic Python, data structures, and computational logic."
    },
    {
      id: "cert-3",
      title: "Fundamentals of Computer & Computer Typing",
      issuer: "Mahatma Jyotiba Phule Institute of Excellence",
      date: "Completed",
      description: "Certification in computer fundamentals, Windows OS, MS Office suite (Word, Excel, PowerPoint), and professional touch typing."
    }
  ] as Certification[],

  services: [
    {
      id: "srv-1",
      title: "Web & UI Development",
      description: "Creating stunning, responsive, fast-loading web applications using Next.js 15, React, and Tailwind CSS with custom glassmorphism and animations.",
      icon: "Code",
      features: ["Next.js 15 App Router", "Responsive Tailwind CSS", "Framer Motion Animations", "SEO & Performance Optimization"]
    },
    {
      id: "srv-2",
      title: "Full Stack Engineering",
      description: "End-to-end full stack architecture connecting clean frontends to robust Python/Node.js backends and structured SQL databases.",
      icon: "Server",
      features: ["RESTful API Development", "MySQL & PostgreSQL", "Authentication & Security", "Client-Server Integration"]
    },
    {
      id: "srv-3",
      title: "AI & Machine Learning Solutions",
      description: "Custom machine learning algorithm development, Support Vector Regression, model tuning with Grid Search CV, and predictive modeling.",
      icon: "BrainCircuit",
      features: ["SVR & Predictive Models", "Hyperparameter Tuning", "Python Pandas & NumPy", "Tkinter Desktop GUI / Web Integration"]
    },
    {
      id: "srv-4",
      title: "Data Pipelines & BI Dashboards",
      description: "ETL data extraction with PySpark, SQL dataset manipulation, and creation of interactive Power BI & Tableau visual dashboards.",
      icon: "BarChart3",
      features: ["PySpark Data Transformation", "SQL Query Optimization", "Power BI & Tableau Reporting", "Insightful Data Visualization"]
    }
  ] as Service[],

  testimonials: [
    {
      id: "t-1",
      name: "Capstone Technical Evaluation Committee",
      role: "Project Review Panel",
      company: "BVCITS Dept. of CSE",
      content: "Sarada's SVR Crude Oil Price Prediction project was executed with great accuracy and meticulous parameter tuning. Her custom GUI made complex ML predictions easily accessible.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: "t-2",
      name: "HCLTech Program Lead",
      role: "Technical Trainer",
      company: "HCLTech Internship Program",
      content: "Sarada demonstrated exemplary commitment during the Web Technologies and SQL program. Her code is structured, well-documented, and executed on schedule.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ] as Testimonial[]
};
