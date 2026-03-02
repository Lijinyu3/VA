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
    "Explore our full range of wedge clamps and piercing clamps for overhead power line and insulated cable applications. Engineered for reliability.",
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <PageHero
          title="Our Products"
          subtitle="Precision-engineered clamps and connectors trusted by utilities across the globe"
          image="/images/hero-portfolio.jpg"
          breadcrumb="Products"
        />

        <CategoryCards />

        <CategorySection
          id="wedge-clamps"
          label="Category 01"
          title="Wedge Clamps"
          subtitle="Self-locking wedge mechanism clamps for dead-end, strain, and service drop applications on overhead conductors. Available in aluminum alloy and galvanized steel for a wide range of cable sizes and voltage ratings."
          products={wedgeClamps}
        />

        <CategorySection
          id="piercing-clamps"
          label="Category 02"
          title="Piercing Clamps"
          subtitle="Insulation piercing connectors that create reliable electrical contact without stripping cable insulation. Torque-controlled shear bolts guarantee consistent clamping force for long-term performance."
          products={piercingClamps}
          variant="alt"
        />

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
