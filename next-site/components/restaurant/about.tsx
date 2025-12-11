export function About() {
  const highlights = [
    "Michelin-recommended excellence",
    "Locally-sourced, seasonal ingredients",
    "Award-winning wine collection",
    "Panoramic riverside terrace",
    "Private dining experiences",
    "Executive Chef with 20+ years experience",
  ]

  return (
    <section id="about" className="bg-luxury-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.4em] text-[oklch(0.75_0.15_75)]">OUR STORY</p>
            <h2 className="mt-4 font-serif text-3xl tracking-wide text-[oklch(0.95_0_0)] sm:text-4xl">
              A Legacy of
              <br />
              <span className="italic text-[oklch(0.75_0.15_75)]">Culinary Excellence</span>
            </h2>
            <div className="gold-line mt-6" />
            <p className="mt-8 leading-relaxed text-[oklch(0.6_0_0)]">
              Nestled along the serene riverfront, our establishment has been a beacon of fine dining since 2008. We
              believe in the transformative power of exceptional cuisine — where every dish tells a story of passion,
              precision, and the finest ingredients.
            </p>
            <p className="mt-4 leading-relaxed text-[oklch(0.6_0_0)]">
              Under the guidance of our Executive Chef, each plate is a canvas for culinary artistry, blending classical
              techniques with innovative presentations that delight both the palate and the eye.
            </p>

            {/* Highlights Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 text-[oklch(0.75_0.15_75)]">◆</span>
                  <span className="text-sm text-[oklch(0.7_0_0)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/elegant-plated-dish-fine-dining.jpg')",
                }}
              />
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/chef-plating-gourmet-food.jpg')",
                }}
              />
            </div>
            <div className="mt-8 space-y-4">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/luxury-restaurant-wine-cellar.jpg')",
                }}
              />
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/riverside-dining-terrace-evening.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
