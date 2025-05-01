import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPython } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        TechStack
      </motion.h2>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[2.5, 3, 5, 2, 6, 4, 3.5, 4].map((duration, index) => ( 
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{ once: true }}
            className="p-4"
          >
            {[
              <RiReactjsLine className="text-7xl text-cyan-400" />,
              <TbBrandNextjs className="text-7xl" />,
              <SiMongodb className="text-7xl text-cyan-500" />,
              <FaNodeJs className="text-7xl text-green-500" />,
              <FaJava className="text-7xl text-red-600" />,
              <SiPython className="text-7xl text-yellow-400" />,
              <SiPandas className="text-7xl text-blue-600" />
            ][index]}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;