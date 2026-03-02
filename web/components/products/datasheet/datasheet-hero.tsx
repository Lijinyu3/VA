import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { ProductDetailData } from "@/lib/products-data"

interface DatasheetHeroProps {
  product: ProductDetailData
}

export function DatasheetHero({ product }: DatasheetHeroProps) {
  return (
    <section className="relative h-[38vh] min-h-[300px] w-full overflow-hidden lg:h-[44vh]">
      <Image
        src={product.image}
        alt={`${product.name} datasheet background`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-widest text-accent-foreground">
          Technical Documentation
        </span>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-background md:text-5xl">
          {product.model} Datasheet
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-background/75">
          Structural details and engineering dimensions for technical review.
        </p>

        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex items-center gap-2 text-sm text-background/70"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-background"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="transition-colors hover:text-background">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href={`/products/${product.slug}`}
            className="transition-colors hover:text-background"
          >
            {product.model}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-background">Datasheet</span>
        </nav>
      </div>
    </section>
  )
}
