import { Factory, MessageSquare, ShieldCheck } from "lucide-react"

const cards = [
  {
    icon: Factory,
    title: "Product Focus",
    content:
      "The current product structure centers on self-locking wedge clamps and axial piercing connectors, with each family organized around clear model names and application use.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workflow",
    content:
      "Incoming inspection, process control, finished testing, and outbound audit define the quality checkpoints behind the product range.",
  },
  {
    icon: MessageSquare,
    title: "Technical Support",
    content:
      "Product detail pages, datasheet views, and direct contact paths help move technical conversations forward once a model has been identified.",
  },
]

export function MissionVisionValues() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Clear structure for technical review
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col rounded-lg bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">{card.title}</h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
