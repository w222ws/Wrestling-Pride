import heroBg from "../assets/hero-gym.avif";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen h-[100dvh] w-full bg-bg-main flex items-center justify-center overflow-hidden"
    >
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <img
          src={heroBg}
          alt="PRIDE2"
          className="w-full h-full object-cover grayscale brightness-30 object-[75%_85%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/60" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 text-left pt-3 pb-8">
        <div className="max-w-3xl w-full">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-4 py-1.5 mb-5 md:mb-6 rounded-none">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="font-display text-xs tracking-widest uppercase text-text-main font-medium">
              У САМОМУ ЦЕНТРІ ДНІПРА
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 uppercase text-white">
            ХАРАКТЕР.
            <span className="block mt-2 flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
              СИЛА.
              {/* 
      Мы принудительно завысили размеры в пикселях для каждого экрана,
      чтобы плоский брусковый шрифт физически дотянулся до высоты Oswald.
    */}
              <span className="text-brand font-slab text-6xl md:text-[88px] lg:text-[116px] tracking-tight uppercase leading-none select-none">
                PRIDE
              </span>
            </span>
          </h1>

          <p className="font-sans text-text-muted text-base md:text-xl max-w-xl mb-6 md:mb-10 leading-relaxed font-light">
            Преміальний зал боротьби у центрі Дніпра. Професійний підхід, топове
            обладнання та безкомпромісна дисципліна. Тренування для дорослих і
            дітей під керівництвом найкращих майстрів.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contacts"
              className="btn-premium w-full sm:w-auto px-10 py-4 text-base font-bold tracking-widest text-center transition-transform active:scale-95"
            >
              ПЕРШЕ ТРЕНУВАННЯ
            </a>
            <a
              href="#contacts"
              className="w-full sm:w-auto px-10 py-4 text-base font-bold tracking-widest text-center uppercase font-display border-2 border-white text-white hover:bg-white hover:text-bg-main transition-colors duration-200"
            >
              НАШІ ЦІНИ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
