const signatureDishes = [
  {
    name: "Wagyu Beef Tenderloin",
    description: "A5 Japanese Wagyu, truffle pomme purée, charred broccolini, aged balsamic reduction",
    price: "$95",
    tag: "Chef's Masterpiece",
    image: "/wagyu-beef-fine-dining-plated.jpg",
  },
  {
    name: "Butter-Poached Lobster",
    description: "Maine lobster tail, saffron risotto, micro herbs, champagne beurre blanc",
    price: "$78",
    tag: "Guest Favorite",
    image: "/butter-poached-lobster-elegant-plate.jpg",
  },
  {
    name: "Pan-Seared Duck Breast",
    description: "Moulard duck, cherry gastrique, roasted root vegetables, foie gras mousse",
    price: "$62",
    tag: "Seasonal Selection",
    image: "/duck-breast-fine-dining-cherry-sauce.jpg",
  },
]

export function SignatureDishes() {
  return (
    <section id="signature" className="bg-luxury-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs tracking-[0.4em] text-[oklch(0.75_0.15_75)]">CULINARY EXCELLENCE</p>
          <h2 className="mt-4 font-serif text-3xl tracking-wide text-[oklch(0.15_0_0)] sm:text-4xl">
            Signature Creations
          </h2>
          <div className="gold-line-center mt-6" />
          <p className="mx-auto mt-6 max-w-2xl text-[oklch(0.4_0_0)]">
            Our most celebrated dishes, crafted with meticulous attention to detail and the finest ingredients from
            around the world.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish) => (
            <article
              key={dish.name}
              className="signature-card group overflow-hidden border border-[oklch(0.85_0.05_60)] bg-[oklch(1_0_0)]"
            >
              {/* Image */}
              <div
                className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${dish.image}')` }}
              />

              {/* Content */}
              <div className="p-6">
                <span className="text-[10px] tracking-[0.3em] text-[oklch(0.75_0.15_75)]">
                  {dish.tag.toUpperCase()}
                </span>
                <h3 className="mt-2 font-serif text-xl text-[oklch(0.15_0_0)]">{dish.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[oklch(0.45_0_0)]">{dish.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-[oklch(0.9_0_0)] pt-4">
                  <span className="font-serif text-2xl text-[oklch(0.75_0.15_75)]">{dish.price}</span>
                  <span className="text-[10px] tracking-[0.2em] text-[oklch(0.5_0_0)]">PER SERVING</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
