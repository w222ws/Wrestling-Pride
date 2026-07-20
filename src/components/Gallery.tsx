import { useRef, useState, useEffect } from "react";
import FadeIn from "./FadeIn";

// Список фоток с возможностью точечного позиционирования кадра (objectPos)
const galleryImages = [
  {
    id: 1,
    src: "/1.avif",
    alt: "PRIDE — фото 1",
    objectPos: "object-center",
  },
  {
    id: 2,
    src: "/2.avif",
    alt: "PRIDE — фото 2",
    objectPos: "object-center",
  },
  {
    id: 3,
    src: "/3.avif",
    alt: "PRIDE — фото 3",
    objectPos: "object-center",
  },
  {
    id: 4,
    src: "/4.avif",
    alt: "PRIDE — фото 4",
    objectPos: "object-center",
  },
  {
    id: 5,
    src: "/5.avif",
    alt: "PRIDE — фото 5",
    objectPos: "object-center",
  },
  // 📸 ФОТО №6: Фокусировка по ВЕРХНЕМУ краю, чтобы лицо парня сверху не обрезалось!
  {
    id: 6,
    src: "/6.avif",
    alt: "PRIDE — фото 6",
    objectPos: "object-[center_top]",
  },
  {
    id: 7,
    src: "/7.avif",
    alt: "PRIDE — фото 7",
    objectPos: "object-center",
  },
  {
    id: 8,
    src: "/8.avif",
    alt: "PRIDE — фото 8",
    objectPos: "object-center",
  },
  {
    id: 9,
    src: "/9.avif",
    alt: "PRIDE — фото 9",
    objectPos: "object-center",
  },
  {
    id: 10,
    src: "/10.avif",
    alt: "PRIDE — фото 10",
    objectPos: "object-center",
  },
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    // Вычисляем прогресс для анимированной линии внизу
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((container.scrollLeft / maxScroll) * 100);
    }

    // Определяем текущую активную фотку
    const visibleCards =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const cardWidth = container.clientWidth / visibleCards;
    const currentIndex = Math.min(
      galleryImages.length,
      Math.max(1, Math.round(container.scrollLeft / cardWidth) + 1),
    );

    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollBySlide = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const visibleCards =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const slideWidth = container.clientWidth / visibleCards;

    container.scrollBy({
      left: direction === "left" ? -slideWidth : slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="club-life"
      className="py-12 sm:py-16 md:py-20 bg-bg-main relative overflow-hidden border-t border-white/[0.03]"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* ШАПКА РАЗДЕЛА (Строгий премиум стиль с референса) */}
        <FadeIn>
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* 🎯 ПРЯМОУГОЛЬНЫЙ БЭЙДЖ С РЕФЕРЕНСА */}
              <div className="inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.02] px-4 py-2 mb-4 rounded-none shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-brand rounded-full shrink-0" />
                <span className="font-display text-xs sm:text-sm tracking-[0.2em] uppercase text-white font-bold">
                  ПОЗА КИЛИМОМ
                </span>
              </div>

              {/* ЗАГОЛОВОК */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-text-main leading-none">
                КОМАНДНИЙ <span className="text-brand">ДУХ</span>
              </h2>

              {/* ФИРМЕННАЯ КРАСНАЯ ЛИНИЯ ПОЦЕНТРУ/СЛЕВА */}
              <div className="w-16 h-[3px] bg-brand mt-3.5 mb-2 rounded-none" />

              <p className="text-text-muted text-xs sm:text-sm font-light max-w-md leading-relaxed mt-1">
                Змагання, виїзди на природу, походи та спільний відпочинок.
                Формуємо справжнє братерство.
              </p>
            </div>

            {/* СТРЕЛКИ И СЧЕТЧИК (Десктоп) */}
            <div className="hidden md:flex items-center gap-4 self-end pb-1">
              <div className="font-display text-xs tracking-widest text-white/60 bg-white/[0.02] px-3.5 py-2 border border-white/10 rounded-none">
                <span className="text-brand font-bold">
                  {String(activeIndex).padStart(2, "0")}
                </span>
                <span className="text-white/20 mx-1.5">/</span>
                <span>{String(galleryImages.length).padStart(2, "0")}</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollBySlide("left")}
                  aria-label="Назад"
                  className="w-9 h-9 bg-[#202128] border border-white/10 hover:border-brand hover:text-brand text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer rounded-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => scrollBySlide("right")}
                  aria-label="Вперед"
                  className="w-9 h-9 bg-[#202128] border border-white/10 hover:border-brand hover:text-brand text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer rounded-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ГАЛЕРЕЯ */}
        <div>
          <FadeIn delay={0.15}>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1"
            >
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 snap-center sm:px-2"
                >
                  <div className="relative group aspect-[4/3] bg-[#202128] overflow-hidden border border-white/10 md:hover:border-brand/50 transition-all duration-500 rounded-sm">
                    {failedImages[img.id] ? (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-bg-main select-none">
                        <span className="font-display text-xs tracking-widest text-text-muted uppercase">
                          // {String(img.id).padStart(2, "0")}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={img.src}
                        alt={img.alt}
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [img.id]: true,
                          }))
                        }
                        loading={img.id > 3 ? "lazy" : "eager"}
                        /* 📸 Применяем индивидуальное позиционирование кадра (img.objectPos) */
                        className={`w-full h-full object-cover ${img.objectPos} brightness-95 contrast-[1.02] md:brightness-85 md:grayscale md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:scale-105 transition-all duration-500 ease-out select-none pointer-events-none`}
                      />
                    )}

                    {/* Градиент снизу */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    {/* Нумерация */}
                    <div className="absolute bottom-2.5 left-3 font-display text-[11px] font-bold tracking-widest text-white/60 md:group-hover:text-brand transition-colors duration-300">
                      // {String(img.id).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* МИНИМАЛИСТИЧНЫЙ ИНДИКАТОР ДЛЯ МОБИЛОК */}
        <div className="flex md:hidden flex-col gap-2.5 mt-4">
          {/* Тонкая прогресс-линия */}
          <div className="w-full h-[2px] bg-white/10 rounded-none overflow-hidden">
            <div
              className="h-full bg-brand transition-all duration-150 ease-out"
              style={{ width: `${Math.max(10, scrollProgress)}%` }}
            />
          </div>

          {/* Счетчик и подсказка */}
          <div className="flex items-center justify-between text-[11px] font-display tracking-widest text-text-muted">
            <div>
              <span className="text-brand font-bold text-sm">
                {String(activeIndex).padStart(2, "0")}
              </span>
              <span className="text-white/20 mx-1">/</span>
              <span>{String(galleryImages.length).padStart(2, "0")}</span>
            </div>

            <div className="text-[10px] uppercase text-white/40 font-semibold tracking-widest">
              СВАЙП →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
