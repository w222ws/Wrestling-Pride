import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-bg-main relative overflow-hidden border-t border-white/[0.03]"
    >
      {/* М'яке кінематографічне фонове світіння (пульсуюче) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand/5 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10 lg:space-y-0">
            <FadeIn>
              <div className="space-y-6 md:space-y-8">
                {/* Бейдж */}
                <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 bg-brand" />
                  <span className="font-display text-[10px] sm:text-xs tracking-widest uppercase text-text-main font-semibold">
                    ФІЛОСОФІЯ КЛУБУ
                  </span>
                </div>

                {/* Заголовок */}
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-[0.95]">
                  БІЛЬШЕ НІЖ ЗАЛ.
                  <br />
                  <span className="text-brand font-slab text-3xl sm:text-4xl lg:text-5xl tracking-normal block mt-3">
                    PRIDE IS LIFE
                  </span>
                </h2>

                {/* Текст */}
                <div className="space-y-6 font-sans text-text-muted text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
                  <p>
                    Тут гартують характер. Ми діємо як{" "}
                    <span className="text-white font-medium">
                      міська спортивно-молодіжна та дитяча громадська
                      організація
                    </span>{" "}
                    у центрі Дніпра. Наша мета — об'єднати тих, хто готовий
                    працювати на результат, незалежно від віку чи рівня
                    підготовки.
                  </p>
                  <p className="border-l-2 border-brand pl-4 py-1.5 bg-white/[0.01]">
                    У нас немає комерційних абонементів чи фіксованої плати.
                    Натомість діє принцип{" "}
                    <span className="text-white font-medium">
                      добровільних внесків
                    </span>
                    : кожен учасник підтримує розвиток зали та команди виключно
                    за власною можливістю.
                  </p>
                </div>
              </div>

              {/* Кнопка дії з тач-відгуком */}
              <div className="pt-10 lg:pt-14">
                <a
                  href="#groups"
                  className="btn-premium inline-block w-full sm:w-auto text-center px-10 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-350 hover:bg-brand/90 active:scale-95 shadow-[0_0_40px_rgba(239,68,68,0.05)]"
                >
                  ПОДИВИТИСЬ ГРУПИ
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ПРАВАЯ КОЛОНКА (Анімована, без помилок типізації) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between w-full">
            {/* КАРТКА 1: ЕКСПЕРТНІСТЬ */}
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1"
            >
              <div className="bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 p-6 relative group hover:border-brand/25 transition-all duration-500 h-full flex flex-col justify-center active:scale-[0.99] touch-manipulation">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-display tracking-wide uppercase group-hover:text-brand md:group-hover:translate-x-1 transition-all duration-300">
                  ЕКСПЕРТНІСТЬ
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-brand font-semibold mb-2">
                  Глибокий тренерський досвід
                </div>
                <div className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Потужна база та знання, перевірені роками. Наші ментори
                  знають, як вибудувати правильну техніку безпечно та
                  результативно.
                </div>
              </div>
            </motion.div>

            {/* КАРТКА 2: КОМ’ЮНІТІ */}
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1"
            >
              <div className="bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 p-6 relative group hover:border-brand/25 transition-all duration-500 h-full flex flex-col justify-center active:scale-[0.99] touch-manipulation">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-display tracking-wide uppercase group-hover:text-brand md:group-hover:translate-x-1 transition-all duration-300">
                  КОМ’ЮНІТІ
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-brand font-semibold mb-2">
                  Формат для кожного
                </div>
                <div className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Розвиваємо дитячий спорт від 4 років та проводимо адаптовані
                  тренування для дорослих. Твій рівень підготовки не має
                  значення.
                </div>
              </div>
            </motion.div>

            {/* КАРТКА 3: ІНФРАСТРУКТУРА */}
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1"
            >
              <div className="bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 p-6 relative group hover:border-brand/25 transition-all duration-500 h-full flex flex-col justify-center active:scale-[0.99] touch-manipulation">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-display tracking-wide uppercase group-hover:text-brand md:group-hover:translate-x-1 transition-all duration-300">
                  ІНФРАСТРУКТУРА
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-brand font-semibold mb-2">
                  350 м² професійного простору
                </div>
                <div className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Топове амортизаційне татамі, ергономічне зонування та все
                  необхідне для безкомпромісного тренувального процесу.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
