import Image from "next/image"

const scenarios = [
  {
    name: "Factory context",
    image: "/images/about-factory.jpg",
    area: "Production environment",
    description:
      "Factory imagery keeps the product presentation tied to a real manufacturing setting.",
  },
  {
    name: "Live utility environment",
    image: "/images/brochure-live-grid.jpg",
    area: "Field validation",
    description:
      "These visuals show the products discussed in energized utility environments and line-work contexts.",
  },
  {
    name: "Substation and network context",
    image: "/images/brochure-grid-scene.jpg",
    area: "Utility infrastructure",
    description:
      "Application imagery covers outgoing line work and broader utility network connection points.",
  },
]

export function UnitsSection() {
  return (
    <section id="application-scenarios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Field and Utility Context
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Real visuals for practical use cases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            The current presentation combines factory, utility, and testing imagery to show where
            the product range fits in real work.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.name}
              className="group overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={scenario.image}
                  alt={scenario.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {scenario.area}
                </span>
                <h3 className="mt-3 font-bold text-card-foreground">{scenario.name}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {scenario.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
