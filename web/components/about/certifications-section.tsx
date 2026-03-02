"use client"

import { useState } from "react"
import { ShieldCheck, Award, Leaf, HardHat, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "social", label: "Social Recognition" },
] as const

const certifications = [
  {
    icon: ShieldCheck,
    name: "ISO 9001:2015",
    issuer: "Fundacao Vanzolini",
    description:
      "Quality Certificate ISO 9001:2015 provided by the Vanzolini Foundation and ratified by The International Certification Network - IQNET.",
    hasDownload: true,
  },
  {
    icon: Leaf,
    name: "ISO 14001:2015",
    issuer: "Fundacao Vanzolini",
    description:
      "Environmental Management Certificate ISO 14001:2015 issued by the Vanzolini Foundation and ratified by the International Certification Network - IQNET.",
    hasDownload: true,
  },
  {
    icon: HardHat,
    name: "ISO 45001",
    issuer: "FQC - First Quality Certification",
    description:
      "Safety and Occupational Health Certificate issued by FQC (First Quality Certification).",
    hasDownload: false,
  },
  {
    icon: Award,
    name: "UL Certification",
    issuer: "Underwriters Laboratories Inc.",
    description:
      "Issued by Underwriters Laboratories Inc. for copper coated ground rods, grounding accessories and split bolt connectors.",
    hasDownload: false,
  },
  {
    icon: Award,
    name: "CSA Certificate",
    issuer: "Canadian Standards Association",
    description:
      "Quality and safety certificate issued by CSA for ground rods and grounding equipment, as well as split bolts.",
    hasDownload: false,
  },
]

const awards = [
  {
    icon: Award,
    name: "Top Electrical Manufacturer",
    issuer: "Industry Association of Brazil",
    description:
      "Recognized as the top electrical connector manufacturer in Brazil for consistent quality and innovation.",
    hasDownload: false,
  },
  {
    icon: Award,
    name: "Export Excellence",
    issuer: "Brazilian Trade & Investment",
    description:
      "Awarded for outstanding export performance and expanding Brazilian electrical products to international markets.",
    hasDownload: false,
  },
]

const social = [
  {
    icon: Award,
    name: "Paralympic Sports Sponsor",
    issuer: "Paralympic Committee of Brazil",
    description:
      "Proud sponsor supporting Brazilian athletes in international Paralympic competitions.",
    hasDownload: false,
  },
  {
    icon: Award,
    name: "Community Engagement Award",
    issuer: "Orlandia Municipality",
    description:
      "Recognized for contributions to local community development, education, and social programs in Orlandia, SP.",
    hasDownload: false,
  },
]

const tabContent: Record<string, typeof certifications> = {
  certifications,
  awards,
  social,
}

export function CertificationsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("certifications")

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Quality Assurance
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            The certifications assure the quality of our products and services.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tabContent[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-lg bg-card p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-card-foreground">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.issuer}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.hasDownload && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 self-start"
                >
                  <Download className="mr-2 h-3.5 w-3.5" />
                  View / Download
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
