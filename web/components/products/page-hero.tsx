import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  breadcrumb: string
}

export function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[36vh] min-h-[280px] w-full overflow-hidden lg:h-[44vh]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <h1 className="text-balance text-center text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-pretty text-center text-base text-background/70 md:text-lg">
          {subtitle}
        </p>
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex items-center gap-2 text-sm text-background/70"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-background"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-background">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  )
}
