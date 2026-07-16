import { useState } from "react";
import logoSvg from "../assets/logo2.svg";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "ПРО НАC", href: "#about" },
  { label: "ГРУПИ", href: "#groups" },
  { label: "ТРЕНЕРИ", href: "#coaches" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-[#18191e]/95 backdrop-blur-md border-b border-white/[0.03] will-change-transform transform-gpu">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between relative z-50 bg-[#18191e]">
        {/* Логотип */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="flex items-center h-full active:scale-[0.97] transition-transform duration-200 logo-glow-effect"
        >
          <img
            src={logoSvg}
            alt="PRIDE"
            className="h-10 md:h-11 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Десктопна навігація */}
        <nav className="hidden md:flex items-center gap-10 h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-[13px] tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-200 uppercase font-bold py-2 nav-link-effect"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Десктопна кнопка Контакти */}
        <div className="hidden md:flex items-center h-full">
          <a
            href="#contacts"
            onClick={(e) => handleLinkClick(e, "#contacts")}
            className="btn-premium px-8 py-2.5 rounded-none text-[11px] font-black tracking-[0.2em] flex items-center justify-center h-10"
          >
            КОНТАКТИ
          </a>
        </div>

        {/* ПРОСТИЙ СИМЕТРИЧНИЙ БУРГЕР (Крестик без костылей и перекосов) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 relative focus:outline-none z-50 touch-manipulation"
          aria-label="Меню"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center w-6 h-5">
            <span
              className={`h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-[0.16,1,0.3,1] will-change-transform ${
                isOpen ? "translate-y-[8px] rotate-45 !bg-brand" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white rounded-full transition-all duration-200 ease-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-[0.16,1,0.3,1] will-change-transform ${
                isOpen ? "-translate-y-[8px] -rotate-45 !bg-brand" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ЗВИЧАЙНЕ КЛАСИЧНЕ МЕНЮ — Випадає вниз під шапкою */}
      <div
        className={`absolute left-0 w-full bg-[#18191e]/98 border-b border-brand/30 shadow-2xl transition-all duration-300 ease-[0.16,1,0.3,1] md:hidden flex flex-col items-center justify-center gap-6 pt-8 pb-8 z-40 will-change-transform ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        }`}
        style={{
          top: "80px", // Четко под границей шапки
          maxWidth: "100%",
        }}
      >
        <nav className="flex flex-col items-center gap-6 w-full px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-base tracking-[0.15em] text-white/80 hover:text-brand active:text-brand transition-colors duration-200 uppercase font-bold"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacts"
            onClick={(e) => handleLinkClick(e, "#contacts")}
            className="btn-premium px-10 py-3 mt-2 w-full max-w-[240px] text-center text-xs font-black tracking-[0.2em] block"
          >
            КОНТАКТИ
          </a>
        </nav>
      </div>
    </header>
  );
}
