import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

// Картка тренера з покращеним кінематографічним дизайном та нульовим навантаженням
function CoachCard({
  children,
  delay,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-[350px] sm:max-w-[380px] md:max-w-none mx-auto will-change-transform ${className}`}
    >
      {/* Контейнер картки: на десктопі ефектне м'яке свічення зсередини, на мобілках — преміальний мінімалізм */}
      <div className="relative group aspect-[3/4.2] md:aspect-[3/4] bg-neutral-950 border border-white/[0.04] md:border-white/5 overflow-hidden transition-all duration-500 md:hover:border-brand/40 md:hover:shadow-[inset_0_0_30px_rgba(239,68,68,0.15)] active:scale-[0.99] touch-manipulation">
        {children}
      </div>
    </motion.div>
  );
}

export default function Coaches() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Паралакс для десктопів
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textLeftX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const textRightX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="coaches"
      className="py-24 md:py-36 bg-bg-main relative overflow-hidden border-t border-white/[0.02]"
    >
      {/* КРАСИВЕ РІШЕННЯ: CSS-анімація для мобілок (float-text), JS-паралакс для десктопу */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes floatTextLeft {
          0% { transform: translateX(-5%); }
          50% { transform: translateX(5%); }
          100% { transform: translateX(-5%); }
        }
        @keyframes floatTextRight {
          0% { transform: translateX(5%); }
          50% { transform: translateX(-5%); }
          100% { transform: translateX(5%); }
        }
        .animate-float-left {
          animation: floatTextLeft 25s ease-in-out infinite;
        }
        .animate-float-right {
          animation: floatTextRight 25s ease-in-out infinite;
        }
      `,
        }}
      />

      {/* Фоновий паралакс-текст 1 */}
      <motion.div
        style={{
          x:
            typeof window !== "undefined" && window.innerWidth >= 768
              ? textRightX
              : undefined,
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
        }}
        className="absolute right-0 md:right-4 lg:right-12 top-[18%] md:top-[22%] text-[15vw] md:text-[9vw] lg:text-[10vw] font-black tracking-tighter text-transparent uppercase select-none pointer-events-none font-display leading-none whitespace-nowrap opacity-[0.03] md:opacity-[0.06] z-0 will-change-transform animate-float-right md:animate-none"
      >
        WRESTLING
      </motion.div>

      {/* Фоновий паралакс-текст 2 */}
      <motion.div
        style={{
          x:
            typeof window !== "undefined" && window.innerWidth >= 768
              ? textLeftX
              : undefined,
          WebkitTextStroke: "1px rgba(239, 68, 68, 0.25)",
        }}
        className="absolute left-0 md:left-4 lg:left-12 bottom-[8%] md:bottom-[12%] text-[15vw] md:text-[9vw] lg:text-[10vw] font-black tracking-tighter text-transparent uppercase select-none pointer-events-none font-display leading-none whitespace-nowrap opacity-[0.03] md:opacity-[0.05] z-0 will-change-transform animate-float-left md:animate-none"
      >
        TEAM PRIDE
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* ЗАГОЛОВОК */}
        <FadeIn>
          <div className="mb-20 md:mb-32 text-center max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-1.5 mb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 lg:gap-24 max-w-4xl mx-auto items-start">
          {/* ТРЕНЕР 1: ОЛЕКСІЙ НЕЧЕПУРЕНКО */}
          <CoachCard delay={0.1}>
            <img
              src="/coach1 (2).avif"
              alt="Олексій Нечепуренко"
              className="w-full h-full object-cover contrast-[1.05] brightness-95 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:scale-[1.03] md:group-hover:brightness-100 transition-all duration-700 ease-out will-change-transform"
            />

            {/* Кінематографічний градієнт: надійний та легкий захист тексту */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95 md:opacity-85 md:group-hover:opacity-95 transition-opacity duration-500" />

            {/* Червона стрічка регалій — стильна, строга геометрія */}
            <div className="absolute top-4 left-4 bg-brand px-3 py-1.5 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
              МСМК З ВІЛЬНОЇ БОРЬБИ
            </div>

            {/* Контент: на мобільних відразу читабельний на тлі градієнту, на десктопі виїжджає */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:from-transparent md:bg-none md:translate-y-24 md:group-hover:translate-y-0">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-1">
                ГОЛОВНИЙ ТРЕНЕР / ЗАСНОВНИК
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide font-display mb-3">
                ОЛЕКСІЙ НЕЧЕПУРЕНКО
              </h3>

              <p className="text-white/80 md:text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed transition-all duration-500 md:opacity-0 md:group-hover:opacity-100 delay-100">
                Майстер спорту міжнародного класу (МСМК) з вільної боротьби.
                Багаторазовий чемпіон України, призер чемпіонатів Європи та
                Світу. Досвід понад 20 років.
              </p>

              <div className="w-8 h-[2px] bg-brand mt-4 transition-all duration-500 md:group-hover:w-16" />
            </div>
          </CoachCard>

          {/* ТРЕНЕР 2: ОЛЕКСАНДР СИДОРЕНКО */}
          <div className="md:pt-24">
            {" "}
            {/* Зміщення на десктопі без конфліктів у Framer Motion */}
            <CoachCard delay={0.25}>
              <img
                src="/coach2 (1).avif"
                alt="Олександр Сидоренко"
                className="w-full h-full object-cover contrast-[1.05] brightness-95 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:scale-[1.03] md:group-hover:brightness-100 transition-all duration-700 ease-out will-change-transform"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95 md:opacity-85 md:group-hover:opacity-95 transition-opacity duration-500" />

              <div className="absolute top-4 left-4 bg-brand px-3 py-1.5 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
                МС З ВІЛЬНОЇ БОРЬБИ
              </div>

              {/* Контент */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:from-transparent md:bg-none md:translate-y-24 md:group-hover:translate-y-0">
                <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-1">
                  ТРЕНЕР З ВІЛЬНОЇ БОРЬБИ
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide font-display mb-3">
                  ОЛЕКСАНДР СИДОРЕНКО
                </h3>

                <p className="text-white/80 md:text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed transition-all duration-500 md:opacity-0 md:group-hover:opacity-100 delay-100">
                  Майстер спорту України з вільної боротьби. Спеціаліст з
                  глибокої фізичної підготовки, акробатики та дитячої адаптивної
                  борцівської бази.
                </p>

                <div className="w-8 h-[2px] bg-brand mt-4 transition-all duration-500 md:group-hover:w-16" />
              </div>
            </CoachCard>
          </div>
        </div>
      </div>
    </section>
  );
}
