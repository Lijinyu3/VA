import Image from "next/image"
import { ImageOff } from "lucide-react"
import type { ProductImageItem } from "@/lib/products-data"

interface DatasheetGallerySectionProps {
  title: string
  description: string
  items: ProductImageItem[]
  variant?: "default" | "alt"
}

export function DatasheetGallerySection({
  title,
  description,
  items,
  variant = "default",
}: DatasheetGallerySectionProps) {
  return (
    <section className={`py-20 ${variant === "alt" ? "bg-secondary" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${title}-${item.caption}`}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              {item.status === "ready" ? (
                <div className="relative aspect-[4/3] bg-muted">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-muted/70 px-6 text-center">
                  <div>
                    <ImageOff className="mx-auto h-6 w-6 text-muted-foreground" />
                    <p className="mt-2 text-sm font-medium text-foreground">Image pending</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Contact VA for the latest datasheet pack.
                    </p>
                  </div>
                </div>
              )}

              <div className="p-4">
                <p className="text-sm leading-relaxed text-card-foreground">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
