import type { ProductDetailData } from "@/lib/products-data"
import { ProductCard } from "./product-card"

interface CategorySectionProps {
  id: string
  label: string
  title: string
  subtitle: string
  products: ProductDetailData[]
  variant?: "default" | "alt"
}

export function CategorySection({
  id,
  label,
  title,
  subtitle,
  products,
  variant = "default",
}: CategorySectionProps) {
  return (
    <section
      id={id}
      className={`py-20 ${variant === "alt" ? "bg-secondary" : "bg-background"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {label}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
