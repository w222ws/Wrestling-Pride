import { useState } from "react";
import { motion } from "framer-motion";
import logoSvg from "../assets/logo.svg";

export default function Footer() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const phoneNumber = "+380964411520";

  const handlePhoneClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Якщо користувач на ПК — замість виклику FaceTime просто копіюємо номер телефону
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(phoneNumber);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } catch (err) {
        console.error("Помилка копіювання телефону:", err);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // z-10 та без isolate — тепер шторка мобільного меню завжди буде зверху підвалу!
    <footer className="w-full bg-[#0A0A0C] text-neutral-400 font-sans relative z-10 border-t border-neutral-900/80 overflow-hidden">
      {/* ОПТИМІЗОВАНО: Легкий апаратний неон через CSS-градієнт замість важкого blur-фільтра */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none opacity-30 z-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(239, 68, 68, 0.08) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-x-8 gap-y-12 pb-10 border-b border-neutral-900/60">
          {/* ЛОГОТИП (Прибрано важкий blur з анімації) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-2 lg:col-span-auto flex items-center justify-start will-change-transform"
          >
            <a
              href="#hero"
              onClick={handleLogoClick}
              className="group block focus:outline-none active:scale-[0.97] transition-transform duration-200 touch-manipulation"
            >
              <img
                src={logoSvg}
                alt="PRIDE"
                className="h-20 lg:h-24 w-auto object-contain brightness-0 invert transition-all duration-500 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]"
              />
            </a>
          </motion.div>

          {/* НАВІГАЦІЯ (Прибрано важкий blur з анімації) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-1 lg:col-span-auto flex flex-col gap-4 will-change-transform"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-black text-neutral-600 block">
              Навігація
            </span>
            <nav className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-x-8 text-[13px] lg:text-[12px] font-bold tracking-wider uppercase text-neutral-300">
              <a
                href="#about"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit touch-manipulation"
              >
                Про нас
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#coaches"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit touch-manipulation"
              >
                Тренери
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#groups"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit touch-manipulation"
              >
                Групи
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#contacts"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit touch-manipulation"
              >
                Контакти
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
            </nav>
          </motion.div>

          {/* ЗВ'ЯЗОК (Прибрано важкий blur з анімації) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-1 lg:col-span-auto flex flex-col gap-4 will-change-transform"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-black text-neutral-600 block">
              Зв'язок
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${phoneNumber}`}
                onClick={handlePhoneClick}
                className={`text-[14px] lg:text-[15px] font-black tracking-wider uppercase transition-all duration-200 w-fit active:scale-[0.97] touch-manipulation ${
                  copiedPhone
                    ? "text-white"
                    : "text-brand lg:text-white lg:hover:text-brand"
                }`}
              >
                {copiedPhone ? "НОМЕР СКОПІЙОВАНО ✓" : "+38 (096) 441-15-20"}
              </a>
              <span className="text-[11px] text-neutral-600 uppercase tracking-widest font-medium">
                Дніпро
              </span>
            </div>
          </motion.div>
        </div>

        {/* НИЖНЯ ЛІНІЯ: КОПІРАЙТ ТА АВТОР */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-y-4 text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-600 will-change-transform"
        >
          {/* СТАБІЛЬНО: Зафіксовано 2026 рік без зайвих викликів JS для ідеальної гідратації */}
          <div>© 2026 ВСІ ПРАВА ЗАХИЩЕНІ.</div>

          <div className="flex items-center gap-1.5 text-neutral-500 text-[9px] lg:text-[10px]">
            РОЗРОБКА ТА ДИЗАЙН:
            <a
              href="https://t.me/off044"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand lg:text-neutral-400 lg:hover:text-white font-black transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand lg:hover:after:w-full after:transition-all after:duration-300 active:scale-[0.98] touch-manipulation"
            >
              TARASOV KYRYLO
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
