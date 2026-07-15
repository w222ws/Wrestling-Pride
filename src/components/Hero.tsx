import { motion } from "framer-motion";
import heroBg from "../assets/hero-gym.avif";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen h-[100dvh] w-full bg-bg-main flex items-center justify-center overflow-hidden"
    >
      {/* ФОН С ПЛАВНЫМ ПРОЯВЛЕНИЕМ ПРИ ЗАГРУЗКЕ */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
      >
        <img
          src={heroBg}
          alt="PRIDE"
          className="w-full h-full object-cover grayscale brightness-35 object-[75%_85%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/65" />
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-left pt-12 pb-8">
        <div className="max-w-3xl w-full">
          {/* 1. БЕЙДЖ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-3.5 py-1.5 mb-5 md:mb-6 rounded-none"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="font-display text-[10px] sm:text-xs tracking-widest uppercase text-text-main font-medium">
              У САМОМУ ЦЕНТРІ ДНІПРА
            </span>
          </motion.div>

          {/* 2. ЗАГОЛОВОК (ТВОЇ ОРИГІНАЛЬНІ ТОПОВІ РОЗМІРИ) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 uppercase text-white"
          >
            ХАРАКТЕР.
            <span className="block mt-2 flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
              СИЛА.
              <span className="text-brand font-slab text-6xl md:text-[88px] lg:text-[116px] tracking-tight uppercase leading-none select-none">
                PRIDE
              </span>
            </span>
          </motion.h1>

          {/* 3. ТЕКСТ */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-text-muted text-sm sm:text-lg md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed font-light"
          >
            Сучасний простір вільної боротьби для дорослих та дітей. Об'єднуємо
            однодумців навколо спільних цінностей, дисципліни та взаємоповаги
            під керівництвом досвідчених тренерів.
          </motion.p>

          {/* 4. КНОПКИ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#contacts"
              className="btn-premium w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold tracking-widest text-center transition-transform active:scale-95"
            >
              ПЕРШЕ ТРЕНУВАННЯ
            </a>
            <a
              href="#coaches"
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold tracking-widest text-center uppercase font-display border-2 border-white text-white hover:bg-white hover:text-bg-main transition-all duration-300"
            >
              НАШІ ТРЕНЕРИ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
