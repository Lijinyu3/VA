import { Target, Eye, Heart } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Mission",
    content:
      "Develop and sell quality products at reasonable prices, valuing service excellence and continuous improvement processes to provide customer satisfaction, all based on ethics and commitment to employees, suppliers and society.",
  },
  {
    icon: Eye,
    title: "Vision",
    content:
      "Be a world market leader, based on sustainability, distinguishing itself by the level of the relationships it establishes, consolidating the institution\u2019s perpetuity while offering excellent and profitable solutions to its clients.",
  },
  {
    icon: Heart,
    title: "Values",
    content: null,
    list: [
      "To be a customer\u2019s preference",
      "Ethical commitment",
      "People\u2019s safety first",
      "Integrity and transparency in actions",
      "Respected, committed and fulfilled people",
      "Focus on results",
      "Economic, social and environmental sustainability",
    ],
  },
]

export function MissionVisionValues() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Foundation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Mission, Vision & Values
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
              {card.content && (
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {card.content}
                </p>
              )}
              {card.list && (
                <ul className="mt-3 flex flex-1 flex-col gap-2">
                  {card.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
