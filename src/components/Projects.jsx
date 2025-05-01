import { motion } from "framer-motion";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A sleek, modern portfolio built with React and Framer Motion. Features smooth animations, responsive design, and a clean UI to showcase my projects and skills effectively. Developed with Vite for optimal performance.",
            image: project1,
            technologies: ["React", "Vite", "Framer Motion","TailwindCSS"]
        },
        {
            title: "Movie Watching Platform",
            description: "Movie discovery app using TMDB API to dynamically fetch and display films. Features clean UI for browsing, searching, and viewing ratings/descriptions.",
            image: project3,
            technologies: ["HTML", "CSS", "React","TMDB API"]
        },
        {
            title: "Emotion Detection Model",
            description: "Built an emotion recognition system analyzing EEG signals with machine learning, demonstrating strong skills in data processing and AI model development.",
            image: project4,
            technologies: ["Python", "Numpy/Pandas", "TensorFlow/PyTorch","SVM/Random Forest"]
        }
    ];

    return (
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div className="space-y-16"> 
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col lg:flex-row gap-8 items-center lg:justify-center"> 
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center"
                        >
                            <img 
                                src={project.image} 
                                width={200} 
                                height={200}
                                alt={project.title}
                                className="rounded-lg object-cover w-[200px] h-[200px] shadow-lg border border-stone-800"
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-2/4" 
                        >
                            <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3> 
                            <p className="mb-6 text-stone-400">{project.description}</p> 
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300 border border-stone-700" 
                                        key={techIndex}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;