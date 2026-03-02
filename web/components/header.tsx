"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider">VA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-full p-2 transition-colors hover:bg-primary-foreground/10"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          <button className="hidden items-center gap-1 rounded-full p-2 text-sm transition-colors hover:bg-primary-foreground/10 lg:flex">
            <Globe className="h-4 w-4" />
            <span className="text-xs">EN</span>
            <ChevronDown className="h-3 w-3" />
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary px-6 py-3">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <Search className="h-4 w-4 text-primary-foreground/60" />
            <input
              type="text"
              placeholder="Search by keyword"
              className="w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-primary-foreground/60 hover:text-primary-foreground"
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 pt-2 text-sm text-primary-foreground/80">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
