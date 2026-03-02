import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/products/page-hero"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { ContactInfoPanel } from "@/components/contact/contact-info-panel"
import { ContactFaqSection } from "@/components/contact/contact-faq-section"

export const metadata: Metadata = {
  title: "Contact - VA",
  description:
    "Contact VA for product inquiries, model selection support, and project-specific connector recommendations.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <PageHero
          title="Contact VA"
          subtitle="Tell us your project needs and our team will get back to you."
          image="/images/hero-portfolio.jpg"
          breadcrumb="Contact"
        />

        <section className="bg-background py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactFormSection />
            </div>
            <div className="space-y-6 lg:col-span-5">
              <ContactInfoPanel />
              <ContactFaqSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
