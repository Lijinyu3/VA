import Image from "next/image"

const stats = [
  { value: "303 / 505 / 707", label: "Featured wedge series" },
  { value: "JCX-1150 to 1550", label: "Featured IPC models" },
  { value: "1 kV", label: "Current published IPC range" },
]

export function CompanyOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Power connection products with a clear technical structure
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              VA focuses on connector hardware for overhead distribution and insulated conductor
              branching. The current product presentation centers on self-locking wedge clamps,
              axial piercing connectors, and the application context needed to explain how those
              products are used.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We emphasize model-based detail pages, application imagery, and datasheet routes
              that keep product review practical for engineers, buyers, and project teams.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-sm lg:text-left"
                >
                  <p className="text-lg font-bold text-primary md:text-xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/brochure-grid-scene.jpg"
                alt="VA utility application and infrastructure reference"
                width={640}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden overflow-hidden rounded-lg border-4 border-background shadow-xl lg:block">
              <Image
                src="/images/brochure-piercing-main.jpg"
                alt="VA piercing connector product visual"
                width={260}
                height={180}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
