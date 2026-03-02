import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "Yueqing, Zhejiang, China",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 (000) 0000-0000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@va.com",
  },
  {
    icon: Clock3,
    label: "Response Time",
    value: "Usually within 1 business day.",
  },
]

export function ContactInfoPanel() {
  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactItems.map((item) => (
          <div key={item.label} className="flex items-start gap-3 rounded-md bg-secondary/60 p-3">
            <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
