import { motion } from "framer-motion";
import heroBg from "../assets/hero-gym.avif";

export default function Hero() {
  return (
    <section
      id="hero"
      /* Убрали w-screen и дикие сдвиги -ml-[50vw]. Теперь тут просто w-full, который занимает ровно 100% без вылетов за экран */
      className="relative min-h-screen h-[100dvh] w-full bg-[#18191e] flex items-center justify-center overflow-hidden m-0 p-0"
    >
      {/* ФОН: Растянут жестко по границам через inset-0 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu will-change-[transform,opacity] m-0 p-0"
      >
        <img
          src={heroBg}
          alt="PRIDE"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.32] object-[93%_35%] md:object-center block border-none outline-none m-0 p-0"
          fetchPriority="high"
        />
        {/* Плавные градиенты */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18191e] via-transparent to-transparent m-0 p-0" />
        <div className="absolute inset-0 bg-black/10 m-0 p-0" />
      </motion.div>

      {/* КОНТЕНТ: Сетка внутри ровная, а сам контейнер не мешает фону */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 text-left pt-24 pb-12 md:pt-28">
        <div className="max-w-3xl w-full">
          {/* БЕЙДЖ */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-3.5 py-1.5 mb-5 md:mb-6 rounded-none transform-gpu"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="font-display text-[10px] sm:text-xs tracking-widest uppercase text-white font-medium">
              У САМОМУ ЦЕНТРІ ДНІПРА
            </span>
          </motion.div>

          {/* ЗАГОЛОВОК */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 uppercase text-white transform-gpu"
          >
            ХАРАКТЕР.
            <span className="block mt-2 flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
              СИЛА.
              <span className="text-brand font-slab text-6xl md:text-[88px] lg:text-[116px] tracking-tight uppercase leading-none select-none">
                PRIDE
              </span>
            </span>
          </motion.h1>

          {/* ТЕКСТ */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-text-muted text-sm sm:text-lg md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed font-light transform-gpu"
          >
            Сучасний простір вільної боротьби для дорослих та дітей. Об'єднуємо
            однодумців навколо спільних цінностей, дисципліни та взаємоповаги
            під керівництвом досвідчених тренерів.
          </motion.p>

          {/* КНОПКИ */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 transform-gpu"
          >
            <a
              href="#contacts"
              className="btn-premium w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold tracking-widest text-center transition-transform active:scale-95"
            >
              ПЕРШЕ ТРЕНУВАННЯ
            </a>
            <a
              href="#coaches"
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold tracking-widest text-center uppercase font-display border-2 border-white text-white hover:bg-white hover:text-bg-main transition-all duration-300 active:scale-95"
            >
              НАШІ ТРЕНЕРИ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
