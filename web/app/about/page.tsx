import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyOverview } from "@/components/about/company-overview"
import { MissionVisionValues } from "@/components/about/mission-vision-values"
import { TimelineSection } from "@/components/about/timeline-section"
import { CertificationsSection } from "@/components/about/certifications-section"
import { UnitsSection } from "@/components/about/units-section"
import { NewsletterSection } from "@/components/newsletter-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - VA",
  description:
    "Learn about VA's wedge clamps, axial piercing connectors, and utility application context.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <AboutHero />
        <CompanyOverview />
        <MissionVisionValues />
        <TimelineSection />
        <CertificationsSection />
        <UnitsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
