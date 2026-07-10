import { useState } from "react";
import logoSvg from "../assets/logo2.svg";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "ПРО НАC", href: "#about" },
  { label: "ТРЕНЕРИ", href: "#trainers" },
  { label: "ЦІНИ", href: "#prices" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-bg-main border-b-2 border-brand">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between relative bg-bg-main z-50">
        <a href="#hero" className="flex items-center h-full">
          <img
            src={logoSvg}
            alt="Lyon Gym"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10 h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-base tracking-widest text-text-main hover:text-brand transition-colors duration-200 uppercase font-medium relative py-2 nav-link-effect"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center h-full">
          <a
            href="#contacts"
            className="btn-premium px-8 py-3 rounded-none text-sm font-bold tracking-widest flex items-center justify-center h-11"
          >
            КОНТАКТИ
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-end w-10 h-10 relative focus:outline-none"
          aria-label="Меню"
        >
          <div className="flex flex-col gap-1.5 items-end justify-center w-6">
            <span
              className={`burger-line h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out ${
                isOpen ? "w-6 rotate-45 translate-y-[9px] !bg-brand" : "w-6"
              }`}
            />

            <span
              className={`burger-line h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out ${
                isOpen ? "w-0 opacity-0" : "w-6"
              }`}
            />

            <span
              className={`burger-line h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out ${
                isOpen ? "w-6 -rotate-45 -translate-y-[9px] !bg-brand" : "w-6"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`absolute left-0 w-full bg-bg-main border-b border-brand shadow-2xl transition-all duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 pt-12 pb-12 z-40 ${
          isOpen
            ? "top-20 opacity-100 visible"
            : "-top-[450px] opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-xl tracking-widest text-text-main hover:text-brand transition-colors duration-200 uppercase font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacts"
            onClick={() => setIsOpen(false)}
            className="btn-premium px-10 py-4 mt-4 w-full max-w-[280px] text-center text-base font-bold tracking-widest"
          >
            КОНТАКТИ
          </a>
        </nav>
      </div>
    </header>
  );
}
