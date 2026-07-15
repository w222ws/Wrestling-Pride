import { motion } from "framer-motion";

interface FadeInProps {
  children: any; // Працює всюди і не потребує імпортів
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Красива плавна крива
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
