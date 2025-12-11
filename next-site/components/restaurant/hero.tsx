export function Hero() {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      <img
        src="/elegant-fine-dining-restaurant-interior-with-warm-.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[oklch(0.08_0_0_/_0.85)]" />

      <div className="hero-content relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        {/* Tagline */}
        <p className="animate-fade-in-up text-xs tracking-[0.4em] text-[oklch(0.75_0.15_75)] opacity-0">
          FINE DINING EXPERIENCE
        </p>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up animation-delay-200 mt-6 font-serif text-4xl leading-tight tracking-wide text-[oklch(0.95_0_0)] opacity-0 sm:text-5xl md:text-6xl lg:text-7xl">
          Where Culinary
          <br />
          <span className="italic text-[oklch(0.75_0.15_75)]">Artistry</span>
          <br />
          Meets the River
        </h1>

        {/* Decorative Line */}
        <div className="animate-fade-in-up animation-delay-400 mx-auto mt-8 opacity-0">
          <div className="gold-line-center" />
        </div>

        {/* Description */}
        <p className="animate-fade-in-up animation-delay-400 mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[oklch(0.6_0_0)] opacity-0 sm:text-base">
          Indulge in an extraordinary dining experience where locally-sourced ingredients are transformed into masterful
          creations, accompanied by breathtaking riverside views.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row sm:gap-6">
          <a
            href="#reservations"
            className="btn-gold inline-flex items-center rounded-none px-10 py-4 text-xs tracking-[0.2em]"
          >
            RESERVE YOUR TABLE
          </a>
          <a
            href="#menu"
            className="btn-outline inline-flex items-center rounded-none px-10 py-4 text-xs tracking-[0.2em]"
          >
            EXPLORE MENU
          </a>
        </div>

        {/* Rating */}
        <div className="animate-fade-in-up animation-delay-600 mt-16 opacity-0">
          <div className="inline-flex items-center gap-3 border border-[oklch(0.75_0.15_75_/_0.3)] bg-[oklch(0.1_0_0_/_0.5)] px-6 py-3 backdrop-blur-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[oklch(0.75_0.15_75)]">
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs tracking-wider text-[oklch(0.7_0_0)]">MICHELIN RECOMMENDED • 4.9 RATING</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-[oklch(0.5_0_0)]">SCROLL</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-[oklch(0.75_0.15_75)] to-transparent" />
        </div>
      </div>
    </section>
  )
}
