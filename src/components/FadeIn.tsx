import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode; // Правильная современная типизация для React 19
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }} // Снизили сдвиг с 20px до 15px (на мобилках выглядит аккуратнее и рендерится быстрее)
      whileInView={{ opacity: 1, y: 0 }}
      // Оптимизировали маргин для мобилок (особенно для Android с длинными экранами)
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5, // Чуть ускорили анимацию для более отзывчивого интерфейса
        ease: [0.16, 1, 0.3, 1], // Обновили кривую на более мягкую "easeOutExpo"
        delay,
      }}
      // Магия 2026 года: заставляем GPU обрабатывать появление обернутых блоков
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
