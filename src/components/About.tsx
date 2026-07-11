export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-bg-main relative overflow-hidden border-t border-white/[0.03]"
    >
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:space-y-0">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-none">
                <span className="w-1.5 h-1.5 bg-brand" />
                <span className="font-display text-xs tracking-widest uppercase text-text-main font-medium">
                  ФІЛОСОФІЯ КЛУБУ
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-none">
                БІЛЬШЕ НІЖ ЗАЛ.
                <br />
                <span className="text-brand font-slab text-3xl md:text-5xl lg:text-5xl tracking-normal block mt-2">
                  PRIDE — ЦЕ ЖИТТЯ
                </span>
              </h2>

              <div className="space-y-5 font-sans text-text-muted text-base md:text-lg font-light leading-relaxed max-w-xl">
                <p>
                  Тут гартують характер. У центрі Дніпра ми об'єднуємо тих, хто
                  викладається на максимум. Це простір вільної боротьби для
                  будь-якого віку — від малечі до професіоналів.
                </p>
                <p>
                  Ми залишили тільки головне: безпеку, повагу та дисципліну. Це
                  місце для твого фокусу, перезавантаження та виховання нового
                  покоління лідерів.
                </p>
              </div>
            </div>

            <div className="pt-6 lg:pt-0">
              <a
                href="#groups"
                className="btn-premium inline-block px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:bg-brand/90 active:scale-95"
              >
                ПОДИВИТИСЬ ГРУПИ
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 justify-between w-full">
            <div className="bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 p-6 relative group hover:border-brand/20 transition-colors duration-300 flex-1">
              <div className="text-2xl font-bold text-white mb-1 font-display tracking-wide uppercase">
                ЕКСПЕРТНІСТЬ
              </div>
              <div className="text-xs uppercase tracking-wider text-brand font-medium mb-1.5">
                Глибокий тренерський досвід
              </div>
              <div className="text-xs text-text-muted font-light leading-relaxed">
                Потужна база та знання, перевірені роками. Наші ментори знають,
                як вибудувати правильну техніку безпечно та результативно.
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 p-6 relative group hover:border-brand/20 transition-colors duration-300 flex-1">
              <div className="text-2xl font-bold text-white mb-1 font-display tracking-wide uppercase">
                КОМ’ЮНІТІ
              </div>
              <div className="text-xs uppercase tracking-wider text-brand font-medium mb-1.5">
                Формат для кожного
              </div>
              <div className="text-xs text-text-muted font-light leading-relaxed">
                Розвиваємо дитячий спорт від 4 років та проводимо адаптовані
                тренування для дорослих. Твій рівень підготовки не має значення.
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 p-6 relative group hover:border-brand/20 transition-colors duration-300 flex-1">
              <div className="text-2xl font-bold text-white mb-1 font-display tracking-wide uppercase">
                ІНФРАСТРУКТУРА
              </div>
              <div className="text-xs uppercase tracking-wider text-brand font-medium mb-1.5">
                350 м² професійного простору
              </div>
              <div className="text-xs text-text-muted font-light leading-relaxed">
                Топове амортизаційне татамі, ергономічне зонування та все
                необхідне для безкомпромісного тренувального процесу.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
