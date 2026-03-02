"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero-portfolio.jpg",
    title: "Our Portfolio",
    subtitle: "Comprehensive electrical infrastructure solutions for a connected world.",
  },
  {
    image: "/images/hero-legacy.jpg",
    title: "Our Legacy",
    subtitle: "Decades of innovation in electrical connectivity and distribution.",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden lg:h-[85vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl px-6 text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-background md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-4 text-pretty text-lg text-background/80 md:text-xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-2 text-background backdrop-blur-sm transition-colors hover:bg-background/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-2 text-background backdrop-blur-sm transition-colors hover:bg-background/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-8 bg-background" : "w-2 bg-background/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
