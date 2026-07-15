import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

// Картка тренера з плавним кінематографічним входом та асиметрією
function CoachCard({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={`w-full max-w-[340px] sm:max-w-[360px] md:max-w-none mx-auto ${className}`}
    >
      {/* На мобілках тонкий сучасний червоний контур, на десктопі — м'який перехід при ховері */}
      <div className="relative group aspect-[3/4] bg-white/[0.01] border border-brand/15 md:border-white/5 overflow-hidden transition-all duration-500 md:hover:border-brand/35 md:hover:shadow-[0_0_50px_rgba(239,68,68,0.12)] active:scale-[0.98] touch-manipulation">
        {children}
      </div>
    </motion.div>
  );
}

export default function Coaches() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Паралакс-ефект для великих фонових текстів за допомогою скролу
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textLeftX = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const textRightX = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={containerRef}
      id="coaches"
      className="py-20 md:py-36 bg-bg-main relative overflow-hidden border-t border-white/[0.02]"
    >
      {/* Фоновий паралакс-текст 1 */}
      <motion.div
        style={{
          x: textRightX,
          WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)",
        }}
        className="absolute right-0 md:right-4 lg:right-12 top-[20%] md:top-[22%] text-[14vw] md:text-[9vw] lg:text-[10vw] font-black tracking-tighter text-transparent uppercase select-none pointer-events-none font-display leading-none whitespace-nowrap opacity-[0.02] md:opacity-[0.05] z-0 will-change-transform"
      >
        WRESTLING
      </motion.div>

      {/* Фоновий паралакс-текст 2 */}
      <motion.div
        style={{
          x: textLeftX,
          WebkitTextStroke: "1.5px #ef4444",
        }}
        className="absolute left-0 md:left-4 lg:left-12 bottom-[6%] md:bottom-[10%] text-[14vw] md:text-[9vw] lg:text-[10vw] font-black tracking-tighter text-transparent uppercase select-none pointer-events-none font-display leading-none whitespace-nowrap opacity-[0.02] md:opacity-[0.04] z-0 will-change-transform"
      >
        TEAM PRIDE
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* ЗАГОЛОВОК */}
        <FadeIn>
          <div className="mb-20 md:mb-32 text-center max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-none mb-4">
              <span className="w-1.5 h-1.5 bg-brand" />
              <span className="font-display text-xs tracking-widest uppercase text-text-muted font-medium">
                ТРЕНЕРСЬКИЙ СКЛАД
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-none">
              НАШІ <span className="text-brand">ТРЕНЕРИ</span>
            </h2>
            <div className="w-12 h-[2px] bg-brand mt-4" />
          </div>
        </FadeIn>

        {/* СІТКА ТРЕНЕРІВ З АСИМЕТРІЄЮ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 max-w-4xl mx-auto items-start">
          {/* ТРЕНЕР 1: ОЛЕКСІЙ НЕЧЕПУРЕНКО */}
          <CoachCard delay={0.1}>
            <img
              src="/coach1.avif"
              alt="Олексій Нечепуренко"
              className="w-full h-full object-cover contrast-[1.1] brightness-90 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:scale-105 md:group-hover:brightness-100 transition-all duration-700 ease-out"
            />

            {/* М'яке затемнення фону під текст */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-95 md:opacity-80 md:group-hover:opacity-95 transition-opacity duration-500" />

            {/* Личка-плашка регалій */}
            <div className="absolute top-4 left-4 bg-brand px-3 py-1 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
              МСМК З ВІЛЬНОЇ БОРЬБИ
            </div>

            {/* Контент картки: на мобільних стильне матове скло внизу, на десктопі плавний виїзд */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-all duration-500 bg-black/30 backdrop-blur-sm border-t border-white/5 md:border-none md:bg-transparent md:backdrop-blur-none md:translate-y-24 md:group-hover:translate-y-0">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-1">
                ГОЛОВНИЙ ТРЕНЕР / ЗАСНОВНИК
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide font-display mb-3">
                ОЛЕКСІЙ НЕЧЕПУРЕНКО
              </h3>

              <p className="text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 delay-100">
                Майстер спорту міжнародного класу (МСМК) з вільної боротьби.
                Багаторазовий чемпіон України, призер чемпіонатів Європи та
                Світу. Досвід понад 20 років.
              </p>

              <div className="w-8 h-[2px] bg-brand mt-4 transition-all duration-500 md:group-hover:w-16" />
            </div>
          </CoachCard>

          {/* ТРЕНЕР 2: ОЛЕКСАНДР СИДОРЕНКО (Зміщений вниз на десктопі `md:translate-y-20`) */}
          <CoachCard delay={0.2} className="md:translate-y-20">
            <img
              src="/coach2.avif"
              alt="Олександр Сидоренко"
              className="w-full h-full object-cover contrast-[1.1] brightness-90 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:scale-105 md:group-hover:brightness-100 transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-95 md:opacity-80 md:group-hover:opacity-95 transition-opacity duration-500" />

            <div className="absolute top-4 left-4 bg-brand px-3 py-1 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
              МС З ВІЛЬНОЇ БОРЬБИ
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-all duration-500 bg-black/30 backdrop-blur-sm border-t border-white/5 md:border-none md:bg-transparent md:backdrop-blur-none md:translate-y-24 md:group-hover:translate-y-0">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-1">
                ТРЕНЕР З ВІЛЬНОЇ БОРЬБИ
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide font-display mb-3">
                ОЛЕКСАНДР СИДОРЕНКО
              </h3>

              <p className="text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 delay-100">
                Майстер спорту України з вільної боротьби. Спеціаліст з глибокої
                фізичної підготовки, акробатики та дитячої адаптивної
                борцівської бази.
              </p>

              <div className="w-8 h-[2px] bg-brand mt-4 transition-all duration-500 md:group-hover:w-16" />
            </div>
          </CoachCard>
        </div>
      </div>
    </section>
  );
}
