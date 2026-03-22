const timelineEvents = [
  {
    year: "01",
    title: "Incoming inspection",
    description:
      "Incoming materials are checked against internal and customer requirements before assembly begins.",
  },
  {
    year: "02",
    title: "Assembly control",
    description:
      "Key process points are reviewed during assembly to keep locking hardware and contact structures consistent.",
  },
  {
    year: "03",
    title: "Finished testing",
    description:
      "Critical parameters are checked before products move forward to the next stage.",
  },
  {
    year: "04",
    title: "Packaging audit",
    description:
      "A final outbound review is completed before warehouse entry and shipment.",
  },
  {
    year: "05",
    title: "Application matching",
    description:
      "These products are positioned for aerial lines, building branches, street lighting, and substation outgoing lines.",
  },
  {
    year: "06",
    title: "Technical follow-up",
    description:
      "After a first review, model discussion, datasheet sharing, and inquiry handling keep the project conversation moving.",
  },
]

export function TimelineSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Process Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From Inspection to Application
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>

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
