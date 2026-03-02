import Image from "next/image"
import { Factory, MapPin, Award } from "lucide-react"

const stats = [
  { value: "343,000", unit: "m\u00B2", label: "Total plant area" },
  { value: "3", unit: "", label: "Manufacturing units" },
  { value: "50+", unit: "", label: "Years of experience" },
]

export function CompanyOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Reliable partner in electrical connectivity solutions
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              VA serves transmission and distribution projects with wedge clamps, insulation
              piercing connectors, and installation tools for overhead and insulated cable
              networks. We focus on durable mechanical design, stable electrical contact, and
              repeatable field installation performance.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our portfolio is built for utility and contractor use, with emphasis on material
              consistency, controlled torque installation, and long-term outdoor reliability.
              We continue expanding technical documentation, test evidence, and delivery support
              for global customers.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                    <span className="text-lg">{stat.unit}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/about-factory.jpg"
                alt="VA manufacturing facility"
                width={640}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden overflow-hidden rounded-lg border-4 border-background shadow-xl lg:block">
              <Image
                src="/images/about-team.jpg"
                alt="VA team"
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
