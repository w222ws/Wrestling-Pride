export default function Coaches() {
  return (
    <section
      id="coaches"
      className="py-20 md:py-36 bg-bg-main relative overflow-hidden border-t border-white/[0.02]"
    >
      <div
        className="absolute right-0 md:right-4 lg:right-12 top-[22%] md:top-[23%] text-[14vw] md:text-[9vw] lg:text-[10vw] font-black tracking-tighter text-transparent uppercase select-none pointer-events-none font-display leading-none whitespace-nowrap opacity-[0.025] md:opacity-[0.06] z-0"
        style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.4)" }}
      >
        WRESTLING
      </div>

      <div
        className="absolute left-0 md:left-4 lg:left-12 bottom-[4%] md:bottom-[8%] text-[14vw] md:text-[9vw] lg:text-[10vw] font-black tracking-tighter text-transparent uppercase select-none pointer-events-none font-display leading-none whitespace-nowrap opacity-[0.025] md:opacity-[0.05] z-0"
        style={{ WebkitTextStroke: "1.5px #ef4444" }}
      >
        TEAM PRIDE
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-28 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-none mb-4">
            <span className="w-1.5 h-1.5 bg-brand" />
            <span className="font-display text-xs tracking-widest uppercase text-text-muted font-medium">
              ТРЕНЕРСЬКИЙ СКЛАД
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-none">
            НАШІ <span className="text-brand">ТРЕНЕРИ</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 max-w-4xl mx-auto items-start">
          <div className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-none mx-auto relative group aspect-[3/4] bg-white/[0.01] border border-white/5 overflow-hidden transition-all duration-500 md:hover:border-brand/30 md:hover:shadow-[0_0_50px_rgba(239,68,68,0.1)]">
            <img
              src="/coach1.avif"
              alt="Олександр Яковенко"
              className="w-full h-full object-cover md:grayscale contrast-[1.15] brightness-95 md:brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 md:opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

            <div className="absolute top-4 left-4 bg-brand px-3 py-1 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
              МСМК З ВІЛЬНОЇ БОРЬБИ
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-transform duration-500 md:translate-y-24 md:group-hover:translate-y-0">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-1">
                ГОЛОВНИЙ ТРЕНЕР / ЗАСНОВНИК
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide font-display mb-3">
                ОЛЕКСІЙ НЕЧЕПУРЕНКО
              </h3>
              <p className="text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 delay-100">
                Майстер спорту міжнародного класу (МСМК) з вільної боротьби.
                Багаторазовий чемпіон України, призер чемпіонатів Європи та
                Світу. Досвід понад 20 років.
              </p>
              <div className="w-8 h-[2px] bg-brand mt-4 transition-all duration-500 md:group-hover:w-16" />
            </div>
          </div>

          <div className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-none mx-auto relative group aspect-[3/4] bg-white/[0.01] border border-white/5 overflow-hidden transition-all duration-500 md:translate-y-20 md:hover:border-brand/30 md:hover:shadow-[0_0_50px_rgba(239,68,68,0.1)]">
            <img
              src="/coach2.avif"
              alt="Дмитро Коваленко"
              className="w-full h-full object-cover md:grayscale contrast-[1.15] brightness-95 md:brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 md:opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

            <div className="absolute top-4 left-4 bg-brand px-3 py-1 text-[9px] font-black tracking-widest uppercase text-white shadow-md z-20">
              МС З ВІЛЬНОЇ БОРЬБИ
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-transform duration-500 md:translate-y-24 md:group-hover:translate-y-0">
              <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-1">
                ТРЕНЕР З ВІЛЬНОЇ БОРЬБИ
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide font-display mb-3">
                ОЛЕКСАНДР СИДОРЕНКО
              </h3>
              <p className="text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 delay-100">
                Майстер спорту України з вільної боротьби. Спеціаліст з глибокої
                фізичної підготовки, акробатики та дитячої адаптивної
                борцівської бази.
              </p>
              <div className="w-8 h-[2px] bg-brand mt-4 transition-all duration-500 md:group-hover:w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
