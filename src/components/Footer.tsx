import { motion } from "framer-motion";
import logoSvg from "../assets/logo.svg";

export default function Footer() {
  return (
    // z-10 та без isolate — тепер шторка мобільного меню завжди буде зверху підвалу!
    <footer className="w-full bg-[#0A0A0C] text-neutral-400 font-sans relative z-10 border-t border-neutral-900/80 overflow-hidden">
      {/* Фоновий неон у центрі */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand/5 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-x-8 gap-y-12 pb-10 border-b border-neutral-900/60">
          {/* ЛОГОТИП */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="col-span-2 lg:col-span-auto flex items-center justify-start"
          >
            <a
              href="#hero"
              className="group block focus:outline-none active:scale-[0.97] transition-transform duration-200"
            >
              <img
                src={logoSvg}
                alt="PRIDE"
                className="h-20 lg:h-24 w-auto object-contain brightness-0 invert transition-all duration-500 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.12)]"
              />
            </a>
          </motion.div>

          {/* НАВІГАЦІЯ */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="col-span-1 lg:col-span-auto flex flex-col gap-4"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-black text-neutral-600 block">
              Навігація
            </span>
            <nav className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-x-8 text-[13px] lg:text-[12px] font-bold tracking-wider uppercase text-neutral-300">
              <a
                href="#about"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit"
              >
                Про нас
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#coaches"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit"
              >
                Тренери
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#groups"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit"
              >
                Групи
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#contacts"
                className="hover:text-white active:text-white transition-colors duration-200 relative group py-0.5 active:scale-[0.98] block w-fit"
              >
                Контакти
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
            </nav>
          </motion.div>

          {/* ЗВ'ЯЗОК */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="col-span-1 lg:col-span-auto flex flex-col gap-4"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-black text-neutral-600 block">
              Зв'язок
            </span>
            <div className="flex flex-col gap-2">
              {/* На мобілці (до lg) завжди червоний (text-brand), на десктопі — білий, що червоніє при наведенні */}
              <a
                href="tel:+380964411520"
                className="text-brand lg:text-white lg:hover:text-brand text-[14px] lg:text-[15px] font-black tracking-wider uppercase transition-colors duration-200 w-fit active:scale-[0.97]"
              >
                +38 (096) 441-15-20
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-y-4 text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-600"
        >
          <div>© {new Date().getFullYear()} ВСІ ПРАВА ЗАХИЩЕНІ.</div>

          <div className="flex items-center gap-1.5 text-neutral-500 text-[9px] lg:text-[10px]">
            РОЗРОБКА ТА ДИЗАЙН:
            {/* Твій нік на мобілці червоний, на ПК — сірий з плавним ефектом підкреслення */}
            <a
              href="https://t.me/off044"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand lg:text-neutral-400 lg:hover:text-white font-black transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand lg:hover:after:w-full after:transition-all after:duration-300 active:scale-[0.98]"
            >
              TARASOV KYRYLO
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
