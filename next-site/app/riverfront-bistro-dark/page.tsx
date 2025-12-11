import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Riverfront Bistro | Demo Restaurant",
    description: "Modern comfort food and cocktails along the river.",
};

export default function RiverfrontBistroPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-50">
            {/* If you already have a site-wide nav in layout.tsx, you can remove this header */}
            <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em]">
                        Riverfront <span className="text-amber-400">Bistro</span>
                    </div>
                    <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
                        <a href="#about" className="hover:text-slate-50">
                            About
                        </a>
                        <a href="#dishes" className="hover:text-slate-50">
                            Signature Dishes
                        </a>
                        <a href="#menu" className="hover:text-slate-50">
                            Menu
                        </a>
                        <a href="#reservations" className="hover:text-slate-50">
                            Reservations
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-slate-700/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200 hover:border-slate-500 hover:text-slate-50"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="border-b border-slate-900/70 bg-gradient-to-b from-slate-950 via-slate-950 to-black py-14 sm:py-16">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_minmax(0,1fr)] lg:items-center lg:px-8">
                    <div>
                        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                            Modern comfort food on the river.
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            Riverfront Bistro blends locally sourced ingredients with bold, modern flavors.
                            Join us for craft cocktails, seasonal plates, and a warm, relaxed atmosphere.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#reservations"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_12px_35px_rgba(251,191,36,0.35)] transition hover:translate-y-0.5 hover:shadow-[0_18px_45px_rgba(251,191,36,0.45)]"
                            >
                                Reserve a Table
                            </a>
                            <a
                                href="#menu"
                                className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                            >
                                View Menu
                            </a>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                            <span>Open daily • 4 PM – 11 PM</span>
                            <span className="text-slate-600">•</span>
                            <span>Downtown Riverside</span>
                        </div>
                    </div>

                    {/* Hero image card */}
                    <div className="relative rounded-3xl border border-slate-800/70 bg-slate-950/80 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.75)]">
                        <div
                            className="h-64 rounded-2xl bg-cover bg-center sm:h-72"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('/restaurant-hero.png')",
                            }}
                        />
                        <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-white/20 bg-slate-950/90 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur">
                            ★ Rated 4.8/5 by local diners
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className="border-b border-slate-900/60 bg-slate-950/70 py-12 sm:py-14"
            >
                <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:px-8">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            About Riverfront Bistro
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                            We&apos;re a neighborhood restaurant focused on elevated comfort food, seasonal
                            ingredients, and genuine hospitality. From slow-braised short ribs to scratch-made
                            desserts, every plate is crafted with care.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                            Our bar features small-batch spirits, local beers, and a rotating cocktail list that
                            changes with the seasons.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
                        <h3 className="text-sm font-semibold tracking-wide text-slate-100">
                            Highlights
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <span>Locally sourced ingredients</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <span>Seasonal, rotating menu</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <span>Craft cocktails &amp; mocktails</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <span>Cozy river-view seating</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Signature Dishes */}
            <section
                id="dishes"
                className="border-b border-slate-900/60 bg-slate-950 py-12 sm:py-14"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl">
                        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            Signature Dishes
                        </h2>
                        <p className="mt-2 text-sm text-slate-300 sm:text-base">
                            A few guest favorites from our current seasonal menu.
                        </p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Smoked Maple Glazed Salmon",
                                description:
                                    "Charred lemon, herb quinoa, and crispy Brussels sprouts.",
                                tag: "$28 • Gluten Free",
                            },
                            {
                                name: "Riverfront Short Rib",
                                description:
                                    "Slow-braised beef, creamy horseradish mash, and roasted root vegetables.",
                                tag: "$32 • House Favorite",
                            },
                            {
                                name: "Roasted Mushroom Gnocchi",
                                description:
                                    "Pan-seared gnocchi, wild mushrooms, garlic cream, and arugula.",
                                tag: "$24 • Vegetarian",
                            },
                        ].map((dish) => (
                            <article
                                key={dish.name}
                                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.7)]"
                            >
                                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                                    {dish.name}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                                    {dish.description}
                                </p>
                                <span className="mt-3 inline-flex w-fit rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
                                    {dish.tag}
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Preview */}
            <section id="menu" className="border-b border-slate-900/60 bg-slate-950/70 py-12 sm:py-14">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl">
                        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            Menu Preview
                        </h2>
                        <p className="mt-2 text-sm text-slate-300 sm:text-base">
                            Our full menu changes seasonally — here&apos;s a sample of what we&apos;re
                            serving this month.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Column: Starters */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                                Starters
                            </h3>
                            <div className="mt-4 space-y-3">
                                <MenuItem
                                    name="Charred Shishito Peppers"
                                    price="$12"
                                    description="Smoked sea salt, citrus aioli."
                                />
                                <MenuItem
                                    name="Crispy Calamari"
                                    price="$14"
                                    description="Lemon chili glaze, garlic aioli."
                                />
                                <MenuItem
                                    name="Burrata & Heirloom Tomatoes"
                                    price="$16"
                                    description="Fresh basil, balsamic reduction, grilled sourdough."
                                />
                            </div>
                        </div>

                        {/* Column: Mains */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                                Mains
                            </h3>
                            <div className="mt-4 space-y-3">
                                <MenuItem
                                    name="Herb-Roasted Chicken"
                                    price="$26"
                                    description="Garlic mash, roasted carrots, pan jus."
                                />
                                <MenuItem
                                    name="Seared Ribeye (12oz)"
                                    price="$38"
                                    description="Truffle fries, grilled asparagus, herb butter."
                                />
                                <MenuItem
                                    name="Coconut Curry Bowl"
                                    price="$22"
                                    description="Jasmine rice, roasted vegetables, toasted peanuts."
                                />
                            </div>
                        </div>

                        {/* Column: Cocktails */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                                Cocktails
                            </h3>
                            <div className="mt-4 space-y-3">
                                <MenuItem
                                    name="Riverfront Old Fashioned"
                                    price="$13"
                                    description="Smoked bourbon, demerara, orange, bitters."
                                />
                                <MenuItem
                                    name="Cucumber Glow"
                                    price="$12"
                                    description="Gin, cucumber, elderflower, lime."
                                />
                                <MenuItem
                                    name="Spiced Pear Spritz"
                                    price="$11"
                                    description="Pear, prosecco, cinnamon, lemon (NA option available)."
                                />
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 text-xs text-slate-400">
                        *Menu items and pricing are subject to change based on seasonal availability.
                    </p>
                </div>
            </section>

            {/* Reservations */}
            <section
                id="reservations"
                className="border-b border-slate-900/70 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 py-12 sm:py-14"
            >
                <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            Reserve Your Table
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                            Date night, celebration, or casual drinks with friends — we&apos;d love to host
                            you. Use the form to request a reservation and we&apos;ll confirm by email or
                            text.
                        </p>
                        <ul className="mt-4 space-y-2 text-xs text-slate-300 sm:text-sm">
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <span>Parties of 8+ — please call the restaurant directly.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <span>Walk-ins are welcome based on availability.</span>
                            </li>
                        </ul>
                    </div>

                    <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/95 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.85)]">
                        <Field label="Name" id="name">
                            <input
                                id="name"
                                type="text"
                                placeholder="Alex Smith"
                                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50"
                            />
                        </Field>

                        <Field label="Email" id="email">
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50"
                            />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Date" id="date">
                                <input
                                    id="date"
                                    type="date"
                                    className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50"
                                />
                            </Field>
                            <Field label="Time" id="time">
                                <input
                                    id="time"
                                    type="time"
                                    className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50"
                                />
                            </Field>
                        </div>

                        <Field label="Guests" id="guests">
                            <select
                                id="guests"
                                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50"
                            >
                                <option>2</option>
                                <option>3–4</option>
                                <option>5–6</option>
                                <option>7–8</option>
                                <option>9+</option>
                            </select>
                        </Field>

                        <Field label="Notes (optional)" id="notes">
                            <textarea
                                id="notes"
                                rows={3}
                                placeholder="Allergies, special occasion, seating preference..."
                                className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50"
                            />
                        </Field>

                        <button
                            type="submit"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_12px_35px_rgba(251,191,36,0.35)] transition hover:translate-y-0.5 hover:shadow-[0_18px_45px_rgba(251,191,36,0.45)]"
                        >
                            Request Reservation
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact / footer-ish section (can be removed if you use your global footer) */}
            <section
                id="contact"
                className="bg-black/95 py-10 text-sm text-slate-300 sm:text-[0.9rem]"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-200">
                                Riverfront <span className="text-amber-400">Bistro</span>
                            </div>
                            <p className="mt-3 max-w-xs text-xs text-slate-400 sm:text-sm">
                                Modern comfort food and cocktails on the river. Gather, unwind, and stay
                                awhile.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                                Visit Us
                            </h4>
                            <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                                123 Riverfront Way
                                <br />
                                Riverside, WA 99201
                            </p>
                            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                                Phone: (509) 555-0123
                                <br />
                                Email: hello@riverfrontbistro.com
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                                Hours
                            </h4>
                            <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                                Mon–Thu: 4 PM – 10 PM
                                <br />
                                Fri–Sat: 4 PM – 11 PM
                                <br />
                                Sun: 4 PM – 9 PM
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
                        © {new Date().getFullYear()} Riverfront Bistro (Demo). Built for Innovate &amp;
                        Amplify.
                    </div>
                </div>
            </section>
        </main>
    );
}

/* --- Small presentational components --- */

type FieldProps = {
    label: string;
    id: string;
    children: React.ReactNode;
};

function Field({ label, id, children }: FieldProps) {
    return (
        <div className="space-y-1.5">
            <label
                htmlFor={id}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
                {label}
            </label>
            {children}
        </div>
    );
}

type MenuItemProps = {
    name: string;
    price: string;
    description: string;
};

function MenuItem({ name, price, description }: MenuItemProps) {
    return (
        <div className="border-b border-slate-800/70 pb-3 last:border-none last:pb-0">
            <div className="flex items-baseline justify-between gap-3 text-[13px] font-medium text-slate-100">
                <span>{name}</span>
                <span className="text-xs font-semibold text-amber-300">{price}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{description}</p>
        </div>
    );
}
