import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan, 2025 - Mar, 2025",
    role: "Android Developer Virtual Intern",
    company: "AICTE (EduSkills Program)",
    description: `Gained hands-on experience in Android app development through Google's training platform. Developed and tested Android applications following industry best practices directly in Android Studio. Learned to implement modern Android development techniques using Kotlin and Jetpack components.`,
    technologies: ["Android Studio", "Kotlin", "Jetpack Components", "Mobile Development", "Google Developers Tools"]
  },
  {
    year: "Nov, 2024 - Jan, 2025",
    role: "Advanced Software Engineering Simulation",
    company: "Walmart Global Tech (via Forage)",
    description: `Successfully completed an intensive virtual simulation tackling real-world software engineering challenges faced by Walmart's global tech teams. Designed and implemented a novel heap data structure in Java to optimize shipping logistics, demonstrating advanced algorithmic problem-solving. Created comprehensive UML diagrams for complex data processing systems and designed relational database schemas meeting specific business requirements.`,
    technologies: ["Java", "Data Structures", "UML", "ER Diagrams", "Database Design", "Software Architecture", "Problem Solving"],
  },
  {
    year: "Oct, 2024 - Jan, 2025",
    role: "ML Model Developer (Team Project)",
    company: "College Academic Project",
    description: `Collaborated in a 3-member team to develop an emotion detection system using EEG signals. Led the implementation of machine learning pipelines including data preprocessing of raw EEG data, feature extraction using statistical methods, and trained classification models (SVM, Random Forest) achieving 80% accuracy. Our work demonstrated practical applications of AI in neurotechnology and emotional computing.`,
    technologies: ["Python", "Machine Learning", "EEG Data Processing", "Scikit-learn", "Pandas", "NumPy", "Feature Extraction", "Data Visualization"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
