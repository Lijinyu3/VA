import { Factory, FileText, Hammer } from "lucide-react"

const highlights = [
  {
    icon: Factory,
    title: "Integrated Manufacturing",
    description:
      "Connector-focused development and production for utility distribution hardware.",
  },
  {
    icon: Hammer,
    title: "Featured Wedge Series",
    description:
      "The self-locking wedge range now starts with the 303, 505, and 707 series.",
  },
  {
    icon: FileText,
    title: "Structured IPC Selection",
    description:
      "Current axial piercing model pages start with JCX-1150, JCX-1250, and JCX-1550.",
  },
]

export function HighlightsBanner() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
          Key Focus
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
