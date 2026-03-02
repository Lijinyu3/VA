import Link from "next/link"
import { ArrowRight, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              Need help choosing the right product?
            </h2>
            <p className="mt-2 text-pretty text-primary-foreground/70">
              Our engineering team is ready to assist you with technical specifications,
              custom configurations, and project-specific recommendations.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Link href="#">
                <FileText className="mr-2 h-4 w-4" />
                Download Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
