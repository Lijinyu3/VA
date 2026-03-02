import { Zap, Shield, Award } from "lucide-react"

const highlights = [
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Cutting-edge electrical infrastructure products",
  },
  {
    icon: Shield,
    title: "ISO Certified",
    description: "Quality management systems certified to international standards",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Decades of excellence in electrical connectivity",
  },
]

export function HighlightsBanner() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
          Our highlights
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
