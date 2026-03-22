import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { HighlightsBanner } from "@/components/highlights-banner"
import { SolutionsSection } from "@/components/solutions-section"
import { ProductsSection } from "@/components/products-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroCarousel />
      <HighlightsBanner />
      <SolutionsSection />
      <ProductsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
