export type MenuItemProps = {
  name: string
  price: string
  description: string
  dietary?: string
}

export function MenuItem({ name, price, description, dietary }: MenuItemProps) {
  return (
    <div className="menu-item group border-b border-[oklch(0.9_0.02_60)] py-5 last:border-none">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="font-serif text-lg text-[oklch(0.15_0_0)] transition-colors group-hover:text-[oklch(0.55_0.12_65)]">
          {name}
        </h4>
        <span className="font-serif text-lg text-[oklch(0.75_0.15_75)]">{price}</span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-[oklch(0.45_0_0)]">{description}</p>
      {dietary && (
        <span className="mt-2 inline-block text-[10px] tracking-[0.2em] text-[oklch(0.55_0.12_65)]">
          {dietary.toUpperCase()}
        </span>
      )}
    </div>
  )
}
