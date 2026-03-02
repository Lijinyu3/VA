import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden lg:h-[50vh]">
      <Image
        src="/images/about-hero.jpg"
        alt="VA manufacturing complex"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl">
          About Us
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-4 flex items-center gap-2 text-sm text-background/70"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-background"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-background">About Us</span>
        </nav>
      </div>
    </section>
  )
}
