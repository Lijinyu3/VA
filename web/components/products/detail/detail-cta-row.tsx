import Link from "next/link"
import { ArrowRight, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ProductDetailData } from "@/lib/products-data"

interface DetailCtaRowProps {
  product: ProductDetailData
}

export function DetailCtaRow({ product }: DetailCtaRowProps) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
            Need full technical documentation for {product.model}?
          </h2>
          <p className="mt-2 text-pretty text-primary-foreground/75">
            Continue to the datasheet page for structural close-ups and dimensional content, or
            contact our team for project-specific support.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/products/${product.slug}/datasheet`}>
              <FileText className="mr-2 h-4 w-4" />
              View Datasheet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
