"use client"

const timelineEvents = [
  {
    year: "1973",
    title: "The Beginning",
    description:
      "The first production line starts with electrical connectors and copper terminals for power infrastructure projects.",
  },
  {
    year: "1985",
    title: "Expansion",
    description:
      "First major plant expansion, adding ground rod manufacturing and increasing production capacity significantly.",
  },
  {
    year: "1995",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001 quality management certification, establishing new standards for the Brazilian electrical industry.",
  },
  {
    year: "2003",
    title: "Portfolio Expansion",
    description:
      "Product coverage expands into wider connection and conductor-support categories for utility networks.",
  },
  {
    year: "2010",
    title: "International Reach",
    description:
      "Products receive UL, CSA and Q-Cert certifications, opening doors to markets across the Americas and beyond.",
  },
  {
    year: "2018",
    title: "VA Brand",
    description:
      "Operations are consolidated under the VA brand with multi-plant manufacturing capability.",
  },
  {
    year: "Today",
    title: "Industry Leader",
    description:
      "National leader in ground rods, connectors and terminals, with a comprehensive portfolio serving the entire energy sector.",
  },
]

export function TimelineSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Timeline
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {event.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{event.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
