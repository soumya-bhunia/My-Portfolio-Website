import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 }, // Fixed typo here
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear", // lowercase 'linear'
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
        //viewport={{ once: true, margin: "-100px" }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[2.5, 3, 5, 2, 6, 4].map((duration, index) => (
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
              <DiRedis className="text-7xl text-red-700" />,
              <FaNodeJs className="text-7xl text-green-500" />,
              <BiLogoPostgresql className="text-7xl text-sky-700" />
            ][index]}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;