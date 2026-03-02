import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DatasheetHero } from "@/components/products/datasheet/datasheet-hero"
import { DatasheetGallerySection } from "@/components/products/datasheet/datasheet-gallery-section"
import { DatasheetDownloadCard } from "@/components/products/datasheet/datasheet-download-card"
import { getAllProductSlugs, getProductBySlug } from "@/lib/products-data"

interface ProductDatasheetPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProductDatasheetPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Datasheet Not Found - VA",
    }
  }

  return {
    title: `${product.model} Datasheet | VA`,
    description: `Technical datasheet visuals and engineering details for ${product.name}.`,
  }
}

export default async function ProductDatasheetPage({ params }: ProductDatasheetPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-14">
        <DatasheetHero product={product} />

        <DatasheetGallerySection
          title="Detail Close-ups"
          description="Technical close-up visuals for blade edges, locking mechanism quality, and model marking readability."
          items={product.datasheetImagesCloseup}
        />

        <DatasheetGallerySection
          title="Dimensional Technical Drawings"
          description="Engineering visuals focused on L / W / H dimensions, bolt specification, and sectional contact reliability."
          items={product.datasheetImagesDimension}
          variant="alt"
        />

        <DatasheetDownloadCard productSlug={product.slug} datasheetPdf={product.datasheetPdf} />
      </main>
      <Footer />
    </>
  )
}
