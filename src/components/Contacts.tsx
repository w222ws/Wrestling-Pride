import { useState } from "react";

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const fullAddress = "Успенська площа, 11, Дніпро";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Помилка копіювання:", err);
    }
  };

  return (
    <section
      id="contacts"
      className="py-20 md:py-36 bg-bg-main relative overflow-hidden border-t-2 border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-brand animate-pulse" />
            <span className="font-display text-xs tracking-widest uppercase text-white font-black">
              ЗВ'ЯЗОК ТА ЛОКАЦІЯ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-white leading-none">
            ЧЕКАЄМО ТЕБЕ <span className="text-brand">НА КИЛИМІ</span>
          </h2>
          <div className="w-20 h-[3px] bg-brand mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          <div className="lg:col-span-7 bg-white/[0.01] border-2 border-white/10 p-8 md:p-10 flex flex-col justify-between relative h-auto">
            <div className="absolute top-0 right-0 bg-white/5 px-4 py-1 text-[9px] font-black tracking-widest text-text-muted uppercase border-b border-l border-white/10">
              ДНІПРО
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-3xl font-black text-white uppercase font-display tracking-widest text-center mb-8">
                ЛОКАЦІЯ
              </h3>

              <div className="space-y-8 border-t border-white/10 pt-8">
                <div className="text-center mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase block mb-1.5">
                    ФІЗИЧНА АДРЕСА
                  </span>
                  <p className="text-white text-xl font-black tracking-wide">
                    Успенська площа, 11
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-white/[0.03] pb-4">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-text-muted uppercase block mb-0.5">
                        ПОНЕДІЛОК — П'ЯТНИЦЯ
                      </span>
                      <p className="text-white text-base font-black uppercase">
                        ТРЕНУВАННЯ ГРУП
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-white/80 font-bold block">
                        Дорослі та Дитячі
                      </span>
                      <span className="text-[11px] text-white/40 block">
                        5 днів на тиждень
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-brand uppercase block mb-0.5">
                        СУБОТА · 12:00
                      </span>
                      <p className="text-brand text-base font-black uppercase">
                        ДИТЯЧЕ ТРЕНУВАННЯ
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-brand/90 font-bold block">
                        Спеціальна програма
                      </span>
                      <span className="text-[11px] text-white/40 block">
                        Суботній інтенсив
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <button
                onClick={handleCopy}
                className={`w-full py-4 text-xs font-black tracking-widest uppercase transition-all duration-500 border ${
                  copied
                    ? "bg-white text-black border-white"
                    : "bg-transparent border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                }`}
              >
                <span>
                  {copied ? "АДРЕСУ ЗБЕРЕЖЕНО В БУФЕР ✓" : "СКОПІЮВАТИ АДРЕСУ"}
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 h-auto justify-between">
            <div className="flex-1 bg-gradient-to-b from-brand/[0.08] to-transparent border-2 border-brand p-8 flex flex-col justify-between shadow-[0_0_60px_rgba(239,68,68,0.07)] text-center lg:text-left">
              <div className="mb-6">
                <span className="text-[10px] font-black tracking-widest text-brand uppercase block mb-1">
                  ШВИДКИЙ ЗАПИС
                </span>
                <h4 className="text-xl font-black text-white uppercase font-display">
                  ЗАТЕЛЕФОНУВАТИ
                </h4>
                <p className="text-xs text-white/40 mt-1">
                  Прямий зв'язок з тренером для запису
                </p>
              </div>

              <a
                href="tel:+380964411520"
                className="w-full bg-brand text-white py-4 px-4 text-base font-black tracking-widest uppercase transition-all duration-300 hover:bg-brand/90 flex items-center justify-center gap-3 shadow-lg active:scale-[0.99]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
                +38 (096) 441-15-20
              </a>
            </div>

            <div className="flex-1 bg-white/[0.01] border-2 border-white/10 p-8 flex flex-col justify-between text-center lg:text-left">
              <div className="mb-6">
                <span className="text-[10px] font-black tracking-widest text-text-muted uppercase block mb-1">
                  НАВІГАЦІЯ В ДОДАТКУ
                </span>
                <h4 className="text-xl font-black text-white uppercase font-display">
                  МАРШРУТ ДО ЗАЛУ
                </h4>
                <p className="text-xs text-white/40 mt-1">
                  Відкрити розташування клубу в Google Maps
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/FTtTpAuuja2CquwQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent border-2 border-white text-white text-center py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black block active:scale-[0.99]"
              >
                ПРОКЛАСТИ МАРШРУТ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
