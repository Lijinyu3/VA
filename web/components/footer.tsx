import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "All Products", href: "/products" },
  ],
  Products: [
    { label: "All Products", href: "/products" },
    { label: "Self-locking Wedge Clamps", href: "/products#wedge-clamps" },
    { label: "Axial Piercing Connectors", href: "/products#piercing-clamps" },
    { label: "Contact for Technical Pack", href: "/contact" },
  ],
  Applications: [
    { label: "Quality Process", href: "/about#quality-process" },
    { label: "Application Scenarios", href: "/about#application-scenarios" },
    { label: "Featured Models", href: "/products" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-wider">VA</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Power connection hardware focused on self-locking wedge clamps, axial piercing
              connectors, and practical field applications.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Yueqing, Zhejiang, China</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+86 (000) 0000-0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="h-4 w-4 shrink-0" />
                <span>sales@va.com</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background/80">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/50 transition-colors hover:text-background/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} VA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-background/40 hover:text-background/60">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-background/40 hover:text-background/60">
              Terms of Use
            </Link>
            <Link href="#" className="text-xs text-background/40 hover:text-background/60">
              Cookie Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
