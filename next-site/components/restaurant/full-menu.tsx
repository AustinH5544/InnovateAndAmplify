import { MenuSection } from "./menu-section"

const menuData = {
  appetizers: [
    {
      name: "Seared Foie Gras",
      price: "$32",
      description: "Caramelized apple, brioche toast, port wine reduction, micro greens",
      dietary: "SIGNATURE",
    },
    {
      name: "Oysters on the Half Shell",
      price: "$28",
      description: "Six selection of East & West coast oysters, champagne mignonette, fresh lemon",
      dietary: "GLUTEN FREE",
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      price: "$24",
      description: "Fresh burrata, aged balsamic, basil oil, grilled sourdough crostini",
      dietary: "VEGETARIAN",
    },
    {
      name: "Tuna Tartare",
      price: "$26",
      description: "Sushi-grade ahi, avocado mousse, sesame wonton crisps, wasabi aioli",
    },
    {
      name: "French Onion Soup",
      price: "$18",
      description: "Caramelized onions, rich beef broth, gruyère crouton gratinée",
    },
    {
      name: "Crispy Calamari",
      price: "$22",
      description: "Lightly fried calamari, cherry peppers, lemon chili glaze, garlic aioli",
    },
  ],
  entrees: [
    {
      name: "Wagyu Beef Tenderloin",
      price: "$95",
      description: "A5 Japanese Wagyu, truffle pomme purée, charred broccolini, aged balsamic",
      dietary: "CHEF'S MASTERPIECE",
    },
    {
      name: "Butter-Poached Lobster",
      price: "$78",
      description: "Maine lobster tail, saffron risotto, micro herbs, champagne beurre blanc",
      dietary: "GLUTEN FREE",
    },
    {
      name: "Pan-Seared Duck Breast",
      price: "$62",
      description: "Moulard duck, cherry gastrique, roasted root vegetables, foie gras mousse",
    },
    {
      name: "Seared Ribeye",
      price: "$68",
      description: "Prime 14oz ribeye, truffle butter, fondant potato, grilled asparagus",
    },
    {
      name: "Chilean Sea Bass",
      price: "$58",
      description: "Miso-glazed sea bass, bok choy, shiitake mushrooms, ginger-soy reduction",
      dietary: "GLUTEN FREE",
    },
    {
      name: "Herb-Crusted Rack of Lamb",
      price: "$72",
      description: "Colorado lamb, mint pesto, roasted fingerlings, natural jus",
    },
    {
      name: "Wild Mushroom Risotto",
      price: "$42",
      description: "Arborio rice, porcini, chanterelle, black truffle, aged parmesan",
      dietary: "VEGETARIAN",
    },
  ],
  handhelds: [
    {
      name: "Wagyu Burger",
      price: "$38",
      description: "Ground wagyu beef, aged cheddar, caramelized onions, truffle aioli, brioche bun",
      dietary: "LUNCH FAVORITE",
    },
    {
      name: "Lobster Roll",
      price: "$45",
      description: "Fresh Maine lobster, lemon butter, chives, toasted New England split-top roll",
    },
    {
      name: "Prime Rib French Dip",
      price: "$36",
      description: "Shaved prime rib, gruyère cheese, horseradish cream, au jus, ciabatta",
    },
    {
      name: "Grilled Chicken Club",
      price: "$28",
      description: "Free-range chicken breast, applewood bacon, avocado, herb aioli, sourdough",
    },
    {
      name: "Mediterranean Wrap",
      price: "$24",
      description: "Grilled vegetables, hummus, feta, mixed greens, tahini dressing, lavash",
      dietary: "VEGETARIAN",
    },
  ],
  desserts: [
    {
      name: "Chocolate Soufflé",
      price: "$18",
      description: "Valrhona dark chocolate, vanilla crème anglaise, gold leaf",
      dietary: "PLEASE ALLOW 20 MINUTES",
    },
    {
      name: "Crème Brûlée",
      price: "$14",
      description: "Madagascar vanilla bean custard, caramelized sugar, fresh berries",
      dietary: "GLUTEN FREE",
    },
    {
      name: "Tiramisu",
      price: "$16",
      description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting",
    },
    {
      name: "Seasonal Tart",
      price: "$15",
      description: "Rotating selection of fresh fruit tart, house-made pastry cream, chantilly",
    },
    {
      name: "Cheese Selection",
      price: "$28",
      description: "Curated artisanal cheeses, honeycomb, candied nuts, seasonal preserves",
      dietary: "SERVES TWO",
    },
    {
      name: "Affogato",
      price: "$12",
      description: "Vanilla bean gelato, fresh espresso, choice of amaretto or frangelico",
    },
  ],
}

export function FullMenu() {
  return (
    <section id="menu" className="menu-section py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs tracking-[0.4em] text-[oklch(0.75_0.15_75)]">CURATED SELECTIONS</p>
          <h2 className="mt-4 font-serif text-3xl tracking-wide text-[oklch(0.15_0_0)] sm:text-4xl">The Menu</h2>
          <div className="gold-line-center mt-6" />
          <p className="mx-auto mt-6 max-w-2xl text-[oklch(0.4_0_0)]">
            Our menu evolves with the seasons, showcasing the finest ingredients at their peak. Each dish is
            thoughtfully crafted to deliver an unforgettable dining experience.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <MenuSection title="Appetizers" subtitle="Begin Your Journey" items={menuData.appetizers} />
          <MenuSection title="Entrées" subtitle="Main Selections" items={menuData.entrees} />
          <MenuSection title="Handhelds" subtitle="Artisan Sandwiches" items={menuData.handhelds} />
          <MenuSection title="Desserts" subtitle="Sweet Finales" items={menuData.desserts} />
        </div>

        {/* Menu Note */}
        <div className="mt-16 text-center">
          <div className="gold-line-center mb-6" />
          <p className="text-xs leading-relaxed text-[oklch(0.5_0_0)]">
            *Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness.
            <br />
            Please inform your server of any allergies or dietary restrictions.
          </p>
        </div>
      </div>
    </section>
  )
}
