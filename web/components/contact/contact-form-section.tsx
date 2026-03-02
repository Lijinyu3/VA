"use client"

import { FormEvent, useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export type ContactFormData = {
  fullName: string
  company: string
  email: string
  phone: string
  country: string
  productInterest: string
  message: string
  privacyAgreed: boolean
}

const initialFormData: ContactFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  productInterest: "",
  message: "",
  privacyAgreed: false,
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  function updateField<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSubmitted(true)
    setFormData(initialFormData)
  }

  return (
    <div className="space-y-5">
      {submitted && (
        <div className="rounded-lg border border-primary/25 bg-primary/5 px-4 py-3 text-sm text-foreground">
          Thanks, we received your inquiry and will respond soon.
        </div>
      )}

      <Card className="border-border/80 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Send an Inquiry</CardTitle>
          <CardDescription>
            Share your project details and we will help match the right solution.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  placeholder="Company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+86 ..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  placeholder="Country / Region"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productInterest">Product Interest *</Label>
                <select
                  id="productInterest"
                  name="productInterest"
                  required
                  value={formData.productInterest}
                  onChange={(e) => updateField("productInterest", e.target.value)}
                  className="border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-[3px]"
                >
                  <option value="">Select one</option>
                  <option value="wedge-clamps">Wedge Clamps</option>
                  <option value="piercing-clamps">Piercing Clamps</option>
                  <option value="both">Both</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                required
                minLength={20}
                rows={6}
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Please share cable type, section size, voltage level, and quantity if available."
              />
              <p className="text-xs text-muted-foreground">Minimum 20 characters.</p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="privacyAgreed"
                checked={formData.privacyAgreed}
                onCheckedChange={(checked) => updateField("privacyAgreed", checked === true)}
              />
              <Label
                htmlFor="privacyAgreed"
                className="text-sm leading-relaxed text-muted-foreground"
              >
                I agree to share my information and accept the privacy policy. *
              </Label>
            </div>

            <Button
              type="submit"
              disabled={!formData.privacyAgreed}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
