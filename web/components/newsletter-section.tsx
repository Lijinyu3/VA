"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  return (
    <section id="newsletter" className="bg-primary py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Newsletter
        </h2>
        <p className="mt-3 text-pretty text-primary-foreground/70">
          Sign up and stay on top of the news.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="mt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
            />
            <Button
              type="submit"
              disabled={!agreed}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </div>

          <label className="mt-4 flex items-start justify-center gap-2 text-left text-xs leading-relaxed text-primary-foreground/60">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 accent-accent"
            />
            <span>
              I agree to share my information and I agree with the site&apos;s{" "}
              <a href="#" className="underline hover:text-primary-foreground/80">
                Privacy Policies
              </a>
              .
            </span>
          </label>
        </form>
      </div>
    </section>
  )
}
