import Image from "next/image"
import type { ProductDetailData } from "@/lib/products-data"

interface DetailOverviewProps {
  product: ProductDetailData
}

export function DetailOverview({ product }: DetailOverviewProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative aspect-square bg-muted">
            <Image
              src={product.image}
              alt={`${product.name} overview image`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Product Overview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">
            {product.model}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 rounded-lg bg-secondary p-4">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i !== product.specs.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="py-2.5 pr-3 font-medium text-muted-foreground">
                      {spec.label}
                    </td>
                    <td className="py-2.5 text-right text-card-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
