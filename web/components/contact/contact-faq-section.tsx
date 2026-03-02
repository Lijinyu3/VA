import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqItems = [
  {
    id: "faq-1",
    question: "What information should I provide in my inquiry?",
    answer:
      "Please include cable type, conductor section size, voltage level, installation scenario, and estimated quantity. If exact values are not ready, describe your project context and our team will guide you.",
  },
  {
    id: "faq-2",
    question: "How quickly will VA reply?",
    answer:
      "We usually respond within one business day. For urgent requests, include your target deadline in the message.",
  },
  {
    id: "faq-3",
    question: "Can you help with model selection?",
    answer:
      "Yes. We can recommend suitable wedge clamp or piercing connector models based on your conductor and application requirements.",
  },
  {
    id: "faq-4",
    question: "Do you support OEM or customization?",
    answer:
      "Yes. We support OEM and project-level customization depending on technical feasibility and quantity requirements.",
  },
]

export function ContactFaqSection() {
  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader>
        <CardTitle>FAQ</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
