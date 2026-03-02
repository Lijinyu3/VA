import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ProductDetailData } from "@/lib/products-data"

export function ProductCard({ product }: { product: ProductDetailData }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={360}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1 text-xs font-bold tracking-wide text-primary-foreground">
          {product.model}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <h3 className="text-lg font-semibold text-card-foreground">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Specs Table */}
        <div className="mt-4 rounded-lg bg-secondary p-3">
          <table className="w-full text-sm">
            <tbody>
              {product.specs.map((spec, i) => (
                <tr
                  key={spec.label}
                  className={i !== product.specs.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="py-1.5 pr-3 font-medium text-muted-foreground">
                    {spec.label}
                  </td>
                  <td className="py-1.5 text-right text-card-foreground">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-5">
          <Button
            asChild
            variant="outline"
            className="w-full justify-between border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href={`/products/${product.slug}`}>
              <span>View Details</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
