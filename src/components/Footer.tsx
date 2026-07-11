import logoSvg from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0C] text-neutral-400 font-sans relative z-50 isolate overflow-hidden border-t border-neutral-900/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand/5 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-x-8 gap-y-12 pb-10 border-b border-neutral-900/60">
          <div className="col-span-2 lg:col-span-auto flex items-center justify-start">
            <a href="#hero" className="group block focus:outline-none">
              <img
                src={logoSvg}
                alt="PRIDE"
                className="h-20 lg:h-24 w-auto object-contain brightness-0 invert transition-all duration-500 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.12)]"
              />
            </a>
          </div>

          <div className="col-span-1 lg:col-span-auto flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.25em] uppercase font-black text-neutral-600 block">
              Навігація
            </span>
            <nav className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-x-8 text-[13px] lg:text-[12px] font-bold tracking-wider uppercase text-neutral-300">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200 relative group py-0.5"
              >
                Про club
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#coaches"
                className="hover:text-white transition-colors duration-200 relative group py-0.5"
              >
                Тренери
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#groups"
                className="hover:text-white transition-colors duration-200 relative group py-0.5"
              >
                Групи
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#prices"
                className="hover:text-white transition-colors duration-200 relative group py-0.5"
              >
                Ціни
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
              <a
                href="#contacts"
                className="hover:text-white transition-colors duration-200 relative group py-0.5"
              >
                Контакти
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full hidden lg:block" />
              </a>
            </nav>
          </div>

          <div className="col-span-1 lg:col-span-auto flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.25em] uppercase font-black text-neutral-600 block">
              Зв'язок
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+380964411520"
                className="text-white hover:text-brand text-[14px] lg:text-[15px] font-black tracking-wider uppercase transition-colors duration-200 w-fit"
              >
                +38 (096) 441-15-20
              </a>
              <span className="text-[11px] text-neutral-600 uppercase tracking-widest font-medium">
                Дніпро
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-y-4 text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-600">
          <div>© {new Date().getFullYear()} ВСІ ПРАВА ЗАХИЩЕНІ.</div>

          <div className="flex items-center gap-1.5 text-neutral-500 text-[9px] lg:text-[10px]">
            DEVELOPED BY
            <a
              href="https://t.me/off044"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white font-black transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand hover:after:w-full after:transition-all after:duration-300"
            >
              TARASOV KYRYLO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
