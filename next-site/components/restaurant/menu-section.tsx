import { MenuItem, type MenuItemProps } from "./menu-item"

type MenuSectionProps = {
  title: string
  subtitle?: string
  items: MenuItemProps[]
}

export function MenuSection({ title, subtitle, items }: MenuSectionProps) {
  return (
    <div className="menu-category pb-8">
      <div className="mb-6 text-center">
        <h3 className="font-serif text-2xl tracking-wide text-[oklch(0.15_0_0)]">{title}</h3>
        {subtitle && <p className="mt-1 text-xs tracking-[0.2em] text-[oklch(0.5_0_0)]">{subtitle.toUpperCase()}</p>}
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}
