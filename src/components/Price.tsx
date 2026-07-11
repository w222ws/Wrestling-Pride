export default function Price() {
  return (
    <section
      id="prices"
      className="py-20 md:py-36 bg-bg-main relative overflow-hidden border-t border-white/[0.02]"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-none mb-4">
            <span className="w-1.5 h-1.5 bg-brand" />
            <span className="font-display text-xs tracking-widest uppercase text-text-muted font-medium">
              ВАРТІСТЬ ЗАНЯТЬ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-none">
            ТАРИФИ ТА <span className="text-brand">АБОНЕМЕНТИ</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          <div className="bg-gradient-to-b from-white/[0.01] to-transparent border border-white/5 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 md:hover:border-white/10 relative group">
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase block mb-2">
                ПЕРШИЙ КРОК
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide font-display mb-6">
                ПРОБНЕ ТРЕНУВАННЯ
              </h3>

              <div className="flex items-baseline h-12 md:h-14 mb-8">
                <span className="text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand font-display uppercase leading-none tracking-tight">
                  БЕЗКОШТОВНО
                </span>
              </div>

              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 pt-6 flex-1">
                Чудова можливість познайомитися з тренерським складом, оцінити
                якість нашого залу та обрати оптимальну групу для регулярних
                занять.
              </p>
            </div>

            <a
              href="#contacts"
              className="w-full mt-8 block text-center bg-brand text-white py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 md:bg-white/[0.03] md:border md:border-white/10 md:hover:bg-brand md:hover:border-brand"
            >
              СПРОБУВАТИ
            </a>
          </div>

          <div className="bg-gradient-to-b from-white/[0.01] to-transparent border border-white/5 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 md:hover:border-white/10 relative group">
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase block mb-2">
                ГНУЧКИЙ ФОРМАТ
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide font-display mb-6">
                РАЗОВЕ ЗАНЯТТЯ
              </h3>

              <div className="flex items-baseline gap-1 h-12 md:h-14 mb-8">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider mr-1">
                  від
                </span>
                <span className="text-4xl md:text-5xl font-black text-white font-display leading-none">
                  150
                </span>
                <span className="text-sm font-medium text-text-muted uppercase tracking-wider ml-1">
                  грн
                </span>
              </div>

              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 pt-6 flex-1">
                Разове відвідування будь-якого тренування згідно з розкладом.
                Оптимальний варіант для занять за вільним графіком.
              </p>
            </div>

            <a
              href="#contacts"
              className="w-full mt-8 block text-center bg-brand text-white py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 md:bg-white/[0.03] md:border md:border-white/10 md:hover:bg-brand md:hover:border-brand"
            >
              ЗАПИСАТИСЬ
            </a>
          </div>

          <div className="bg-gradient-to-b from-brand/[0.02] to-transparent border-2 border-brand p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_0_50px_rgba(239,68,68,0.03)] group">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand px-3 py-1 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
              ВИГІДНО
            </div>

            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase block mb-2">
                ПОСТІЙНІ ТРЕНУВАННЯ
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide font-display mb-6">
                АБОНЕМЕНТ НА МІСЯЦЬ
              </h3>

              <div className="flex items-baseline gap-1 h-12 md:h-14 mb-8">
                <span className="text-xs font-medium text-brand uppercase tracking-wider mr-1">
                  від
                </span>
                <span className="text-4xl md:text-5xl font-black text-white font-display leading-none">
                  1500
                </span>
                <span className="text-sm font-medium text-text-muted uppercase tracking-wider ml-1">
                  грн
                </span>
              </div>

              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed border-t border-brand/20 pt-6 flex-1">
                Повноцінний місячний курс тренувань. Повне занурення в
                тренувальний процес, стабільна робота на результат та закріплене
                місце в групі.
              </p>
            </div>

            <a
              href="#contacts"
              className="w-full mt-8 block text-center bg-brand text-white py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 border border-transparent hover:bg-transparent hover:border-brand"
            >
              ОБРАТИ АБОНЕМЕНТ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
