import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { ProductDetailData } from "@/lib/products-data"

interface DetailHeroProps {
  product: ProductDetailData
}

export function DetailHero({ product }: DetailHeroProps) {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden lg:h-[48vh]">
      <Image src={product.image} alt={product.name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-foreground/65" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-widest text-accent-foreground">
          {product.model}
        </span>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl">
          {product.name}
        </h1>
        <p className="mt-3 max-w-3xl text-pretty text-base text-background/75 md:text-lg">
          {product.description}
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
          <span className="text-background">{product.model}</span>
        </nav>
      </div>
    </section>
  )
}
