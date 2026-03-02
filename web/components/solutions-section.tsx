import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "Substations",
    image: "/images/substations.jpg",
    description: "Complete solutions for electrical substations.",
  },
  {
    title: "Underground Energy",
    image: "/images/underground-energy.jpg",
    description: "Underground cable systems for urban distribution.",
  },
  {
    title: "Rural Energy Distribution",
    image: "/images/rural-energy.jpg",
    description: "Power distribution for rural and remote areas.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Solutions
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-muted-foreground">
              See below some of VA's core application solutions.
            </p>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href="#"
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
          href="#"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
        >
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
