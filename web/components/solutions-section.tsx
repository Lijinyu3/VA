import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "Overhead Line Connections",
    image: "/images/brochure-live-grid.jpg",
    description:
      "Application reference for aerial distribution lines and field-installed connection points.",
  },
  {
    title: "Street Lighting & Service Branching",
    image: "/images/brochure-field-testing.jpg",
    description:
      "Suitable for building T-connections, lighting branches, and insulated service tap scenarios.",
  },
  {
    title: "Substation Outgoing Lines",
    image: "/images/brochure-grid-scene.jpg",
    description:
      "Utility-facing application context for outgoing lines and broader network connection work.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Application Scenarios
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-muted-foreground">
              Focused on overhead distribution, service branching, and utility outgoing line use.
            </p>
          </div>
          <Link
            href="/about#application-scenarios"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href="/products"
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-background">{solution.title}</h3>
                  <p className="mt-1 text-sm text-background/70">{solution.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/about#application-scenarios"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
