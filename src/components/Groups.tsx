import React from "react";
import { Zap, Flame } from "lucide-react";

export default function Groups() {
  return (
    <section
      id="groups"
      className="py-20 md:py-28 bg-bg-main relative overflow-hidden border-t border-white/[0.03]"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-none mb-4">
            <span className="w-1.5 h-1.5 bg-brand" />
            <span className="font-display text-xs tracking-widest uppercase text-text-muted font-medium">
              НАПРЯМКИ ТА ГРУПИ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-none">
            ТРЕНУВАЛЬНІ <span className="text-brand">ПРОГРАМИ</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto items-stretch">
          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 md:p-12 flex flex-col items-center text-center relative group transition-all duration-300 touch-manipulation border-brand/20 shadow-[0_4px_20px_rgba(239,68,68,0.02)] md:border-white/5 md:shadow-none md:hover:border-brand/20 active:scale-[0.98] active:border-brand/40">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 md:mb-8 select-none transition-all duration-300 border-brand/30 bg-brand/5 shadow-[0_0_15px_rgba(239,68,68,0.05)] md:border-white/10 md:bg-white/[0.01] md:shadow-none md:group-hover:border-brand/40 md:group-hover:bg-brand/5 md:group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
              <Zap
                className="w-9 h-9 md:w-10 md:h-10 transition-colors duration-300 text-brand/90 md:text-white/40 md:group-hover:text-brand"
                strokeWidth={1.5}
              />
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display tracking-wide uppercase mb-2">
                PRIDE KIDS
              </h3>
              <span className="font-sans text-[11px] font-bold tracking-widest text-brand uppercase bg-brand/10 px-3 py-1 inline-block">
                4–13 РОКІВ
              </span>
            </div>

            <p className="text-text-muted font-sans text-sm md:text-base font-light leading-relaxed mb-8 md:mb-12 max-w-sm">
              Закладаємо борцівську базу та непохитний характер змалечку.
              Тренування розвивають координацію, гнучкість, швидкість мислення
              та ОФП. Тут дитина вчиться дисципліні та повазі.
            </p>

            <div className="w-full border-t border-white/5 pt-6 md:pt-8 mt-auto max-w-xs">
              <span className="text-[11px] uppercase tracking-widest text-brand font-bold block mb-4 md:mb-6">
                РОЗКЛАД ТРЕНУВАНЬ
              </span>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
                  <span className="text-xs text-text-muted uppercase tracking-wider font-light">
                    Будні (Пн–Пт)
                  </span>
                  <span className="font-display font-black text-white text-lg tracking-wide">
                    15:00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-xs text-text-muted uppercase tracking-wider font-light">
                    Субота
                  </span>
                  <span className="font-display font-black text-white text-lg tracking-wide">
                    12:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 md:p-12 flex flex-col items-center text-center relative group transition-all duration-300 touch-manipulation border-brand/20 shadow-[0_4px_20px_rgba(239,68,68,0.02)] md:border-white/5 md:shadow-none md:hover:border-brand/20 active:scale-[0.98] active:border-brand/40">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 md:mb-8 select-none transition-all duration-300 border-brand/30 bg-brand/5 shadow-[0_0_15px_rgba(239,68,68,0.05)] md:border-white/10 md:bg-white/[0.01] md:shadow-none md:group-hover:border-brand/40 md:group-hover:bg-brand/5 md:group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
              <Flame
                className="w-9 h-9 md:w-10 md:h-10 transition-colors duration-300 text-brand/90 md:text-white/40 md:group-hover:text-brand"
                strokeWidth={1.5}
              />
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display tracking-wide uppercase mb-2">
                PRIDE ADULTS
              </h3>
              <span className="font-sans text-[11px] font-bold tracking-widest text-brand uppercase bg-brand/10 px-3 py-1 inline-block">
                14–49+ РОКІВ
              </span>
            </div>

            <p className="text-text-muted font-sans text-sm md:text-base font-light leading-relaxed mb-8 md:mb-12 max-w-sm">
              Потужна робота в стійці та партері для будь-якого рівня
              підготовки. Вивчення реального арсеналу прийомів, адаптивне
              навантаження та жорсткий фокус для зняття стресу.
            </p>

            <div className="w-full border-t border-white/5 pt-6 md:pt-8 mt-auto max-w-xs">
              <span className="text-[11px] uppercase tracking-widest text-brand font-bold block mb-4 md:mb-6">
                РОЗКЛАД ТРЕНУВАНЬ
              </span>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
                  <span className="text-xs text-text-muted uppercase tracking-wider font-light">
                    Будні (Пн–Пт)
                  </span>
                  <span className="font-display font-black text-white text-lg tracking-wide">
                    17:00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-xs text-white/20 uppercase tracking-wider font-light">
                    Субота
                  </span>
                  <span className="font-display font-medium text-white/20 text-sm tracking-wide uppercase">
                    Вихідний
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
