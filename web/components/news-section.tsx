import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const newsItems = [
  {
    id: 1,
    image: "/images/news-athlete.jpg",
    category: "Beyond the podium",
    date: "11/22/2023",
    title: "Thiago Paulino secured his third consecutive championship at the Parapan in Santiago, Chile.",
    href: "#",
  },
  {
    id: 2,
    image: "/images/news-iso.jpg",
    category: "ESG",
    date: "11/14/2023",
    title: "VA maintains quality and process certifications.",
    href: "#",
  },
  {
    id: 3,
    image: "/images/news-athletics.jpg",
    category: "Beyond the podium",
    date: "10/23/2023",
    title: "It's gold again in masters athletics!",
    href: "#",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              News
            </h2>
            <p className="mt-2 text-pretty text-muted-foreground">
              Be aware of our main news
            </p>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {item.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-snug text-card-foreground">
                  {item.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="#"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
        >
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
