"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { allProducts } from "@/lib/products-data"

const featuredProducts = allProducts.map((product) => ({
  ...product,
  category: product.model.startsWith("JCX")
    ? "Axial Piercing Connector"
    : "Self-locking Wedge Clamp",
}))

export function ProductsSection() {
  const [page, setPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage)
  const displayed = useMemo(
    () => featuredProducts.slice(page * itemsPerPage, (page + 1) * itemsPerPage),
    [page],
  )

  return (
    <section id="products" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Featured Models
            </h2>
            <p className="mt-2 text-pretty text-muted-foreground">
              Selected models from the self-locking wedge clamp and axial piercing connector range.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {displayed.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {product.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-card-foreground">
                  {product.model}
                </h3>
                <p className="mt-2 text-sm font-medium text-card-foreground">{product.name}</p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous products"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={i === page ? "default" : "outline"}
              size="icon"
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next products"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Link
          href="/products"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
        >
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
