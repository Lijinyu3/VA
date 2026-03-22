"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, FileText, HardHat, ShieldCheck } from "lucide-react"

const tabs = [
  { id: "quality", label: "Quality Control" },
  { id: "references", label: "Reference Files" },
  { id: "applications", label: "Applications" },
] as const

const quality = [
  {
    icon: ShieldCheck,
    name: "IQC",
    issuer: "Incoming inspection",
    description: "Incoming materials are checked against internal and customer requirements.",
  },
  {
    icon: HardHat,
    name: "IPQC",
    issuer: "Process control",
    description: "Key quality checkpoints are monitored during assembly.",
  },
  {
    icon: ShieldCheck,
    name: "FQC",
    issuer: "Finished product review",
    description: "Critical parameters are checked before release from the line.",
  },
  {
    icon: Award,
    name: "OQC",
    issuer: "Packaging audit",
    description: "A final outbound check is completed before warehouse entry and shipment.",
  },
]

const references = [
  {
    icon: FileText,
    name: "Selection guide",
    issuer: "Technical data",
    description:
      "Current 1 kV selection data covers JCX-1150, JCX-1250, JCX-1350, JCX-1450, and JCX-1550.",
  },
  {
    icon: FileText,
    name: "Reference visuals",
    issuer: "Supporting material",
    description:
      "Patent, innovation, and quality-document visuals support technical communication and product review.",
  },
  {
    icon: FileText,
    name: "Model datasheet flow",
    issuer: "Model pages",
    description:
      "Product detail pages now lead into datasheet pages so technical follow-up can happen model by model.",
  },
]

const applications = [
  {
    icon: Award,
    name: "Aerial line connections",
    issuer: "Application scenario",
    description: "Used for overhead line connection work and general utility branching.",
  },
  {
    icon: Award,
    name: "Building and street-light branches",
    issuer: "Application scenario",
    description:
      "Building branch connections and street-light tapping remain part of the application mix.",
  },
  {
    icon: Award,
    name: "Substation outgoing lines",
    issuer: "Application scenario",
    description: "Substation outgoing lines remain one of the highlighted utility use cases.",
  },
]

const tabContent: Record<string, typeof quality> = {
  quality,
  references,
  applications,
}

export function CertificationsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("quality")

  return (
    <section id="quality-process" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Validation & Materials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Supporting detail behind the product lines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Quality checkpoints, reference files, and application scenarios are organized into a
            cleaner structure for technical review.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
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

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {tabContent[activeTab].map((item) => (
                <div key={item.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-card-foreground">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.issuer}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src="/images/brochure-patents-grid.jpg"
                alt="Patent and certificate visual grid"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Reference visual set</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Quality, patent, and innovation visuals now sit alongside the rest of the company
                overview as supporting material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
