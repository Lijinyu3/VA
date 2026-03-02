import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DetailHero } from "@/components/products/detail/detail-hero"
import { DetailOverview } from "@/components/products/detail/detail-overview"
import { ImageGallerySection } from "@/components/products/detail/image-gallery-section"
import { DetailCtaRow } from "@/components/products/detail/detail-cta-row"
import { getAllProductSlugs, getProductBySlug } from "@/lib/products-data"

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found - VA",
    }
  }

  return {
    title: `${product.model} - ${product.name} | VA`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-14">
        <DetailHero product={product} />
        <DetailOverview product={product} />

        <ImageGallerySection
          title="Industrial Product Portraits"
          description="Primary visual assets for first-impression quality review, including full-view presentation, multi-angle perspective, and exploded structure context."
          items={product.detailImagesPortrait}
        />

        <ImageGallerySection
          title="Installation & Application Shots"
          description="Use-case visuals showing installation workflow and field deployment references in power distribution environments."
          items={product.detailImagesApplication}
          variant="alt"
        />

        <DetailCtaRow product={product} />
      </main>
      <Footer />
    </>
  )
}
