import Image from "next/image"
import { ArrowDown } from "lucide-react"

const categories = [
  {
    id: "wedge-clamps",
    name: "Self-locking Wedge Clamps",
    nameCN: "楔形线夹",
    description:
      "Self-locking wedge clamp family built around the 303, 505, and 707 series with elastic C-component design and hammer knock-type installation.",
    image: "/images/brochure-wedge-main.jpg",
    count: 3,
  },
  {
    id: "piercing-clamps",
    name: "Axial Piercing Connectors",
    nameCN: "穿刺线夹",
    description:
      "Axial piercing connector range for insulated conductor branching without stripping, currently featured here with JCX-1150, JCX-1250, and JCX-1550.",
    image: "/images/brochure-piercing-main.jpg",
    count: 3,
  },
]

export function CategoryCards() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Product Lines
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Current Featured Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Our current featured range focuses on two connector families for utility connection
            work.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={720}
                  height={405}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-background lg:text-3xl">{cat.name}</h3>
                  <span className="rounded-md bg-background/20 px-2.5 py-1 text-xs font-medium text-background backdrop-blur-sm">
                    {cat.nameCN}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-background/70">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                  <span>{cat.count} Featured Models</span>
                  <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
