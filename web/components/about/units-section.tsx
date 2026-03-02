import Image from "next/image"
import { MapPin } from "lucide-react"

const units = [
  {
    name: "Orlandia - SP",
    image: "/images/unit-orlandia.jpg",
    area: "256,000 m\u00B2",
    description:
      "Main manufacturing complex and headquarters, housing the primary production lines for connectors, terminals, and ground rods.",
  },
  {
    name: "Campinas - SP",
    image: "/images/unit-campinas.jpg",
    area: "42,000 m\u00B2",
    description:
      "Specialized facility focused on advanced cable manufacturing and bimetallic conductor production.",
  },
  {
    name: "Tres Lagoas - MS",
    image: "/images/unit-tres-lagoas.jpg",
    area: "45,000 m\u00B2",
    description:
      "Strategic plant serving the central-western region with cable and conductor manufacturing capabilities.",
  },
]

export function UnitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Presence
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Manufacturing Units
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Our plants cover a total area of 343,000 m&sup2; across the states of Sao Paulo and
            Mato Grosso do Sul, producing and meeting the requirements of our customers with top
            quality.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {units.map((unit) => (
            <div
              key={unit.name}
              className="group overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={unit.image}
                  alt={`VA ${unit.name} plant`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <h3 className="font-bold text-card-foreground">{unit.name}</h3>
                </div>
                <span className="mt-1 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {unit.area}
                </span>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {unit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
