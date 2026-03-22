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
          description="Technical detail visuals for locking geometry, internal contact structure, and visible hardware reference."
          items={product.datasheetImagesCloseup}
        />

        <DatasheetGallerySection
          title="Dimensional Technical Drawings"
          description="Engineering reference views for overall form, connector orientation, and structural relationship across the current model family."
          items={product.datasheetImagesDimension}
          variant="alt"
        />

        <DatasheetDownloadCard productSlug={product.slug} datasheetPdf={product.datasheetPdf} />
      </main>
      <Footer />
    </>
  )
}
