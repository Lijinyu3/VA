"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    category: "Piercing Connectors",
    name: "CDP - Piercing Connector",
    image: "/images/product-piercing-connector.jpg",
    purpose:
      "Tap of Insulated Cables, suitable for combinations aluminum to aluminum, aluminum to copper and copper to copper in overhead power distribution lines.",
  },
  {
    id: 2,
    category: "Compression Copper",
    name: "TM - Copper Compression Terminal",
    image: "/images/product-copper-terminal.jpg",
    purpose:
      "Termination of copper conductors. High electrical conductivity and corrosion resistance.",
  },
  {
    id: 3,
    category: "Compression Connectors",
    name: "SACG - Grounding System",
    image: "/images/product-grounding.jpg",
    purpose:
      "Connection between ground rod to cable and cable to cable. Suitable for copper-clad steel and copper wires and cables.",
  },
  {
    id: 4,
    category: "Ring Type",
    name: "TP - Ring Type Pre-insulated Terminals",
    image: "/images/product-ring-terminal.jpg",
    purpose:
      "Termination of rigid or flexible copper cables. Compression connection with high electrical conductivity.",
  },
  {
    id: 5,
    category: "Bimetallic Terminals",
    name: "TBTA - Bimetallic Compression Terminal",
    image: "/images/product-bimetallic.jpg",
    purpose:
      "Bimetallic cable to busbar termination. Prevents the formation of galvanic corrosion.",
  },
  {
    id: 6,
    category: "Grounding Clamps",
    name: "GTDU - U-Bolt Grounding Clamp",
    image: "/images/product-grounding-clamp.jpg",
    purpose:
      "Connection between ground rod to cable or IPS tube-cable. High electrical conductivity and corrosion resistant.",
  },
]

export function ProductsSection() {
  const [page, setPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const displayed = products.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  return (
    <section id="products" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Most Accessed
            </h2>
            <p className="mt-2 text-pretty text-muted-foreground">
              Check some of the most viewed products
            </p>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {displayed.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {product.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-card-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {product.purpose}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  See Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous products"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={i === page ? "default" : "outline"}
              size="icon"
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next products"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Link
          href="/products"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
        >
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
