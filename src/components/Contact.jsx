import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className="border-t □border-stone-900 pb-20">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get in Touch</motion.h2>
                <div className="text-center tracking-tighter">
                    <motion.p 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="my-4">KiiT University, Bhubaneshwar, Odisha, India
                    </motion.p>
                    <motion.p 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="my-4">
                        +91 7077966561
                    </motion.p>
                    <a href="#" className="border-b">soumyabhn@gmail.com</a>          
                </div>
        </div>
    )
}

export default Contact