import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/products/page-hero"
import { CategoryCards } from "@/components/products/category-cards"
import { CategorySection } from "@/components/products/category-section"
import { CTABanner } from "@/components/products/cta-banner"
import { wedgeClamps, piercingClamps } from "@/lib/products-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - VA",
  description:
    "Explore VA wedge clamp and axial piercing connector models for overhead distribution and insulated cable branch connections.",
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <PageHero
          title="Our Products"
          subtitle="Self-locking wedge clamps and axial piercing connectors for practical utility installation scenarios"
          image="/images/brochure-grid-scene.jpg"
          breadcrumb="Products"
        />

        <CategoryCards />

        <CategorySection
          id="wedge-clamps"
          label="Category 01"
          title="Self-locking Wedge Clamps"
          subtitle="The 303, 505, and 707 series share the same self-locking wedge concept, hammer installation logic, and utility-focused application scope."
          products={wedgeClamps}
        />

        <CategorySection
          id="piercing-clamps"
          label="Category 02"
          title="Axial Piercing Connectors"
          subtitle="Current featured models cover insulated conductor branching without stripping, with single-bolt installation and 1 kV distribution use."
          products={piercingClamps}
          variant="alt"
        />

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
