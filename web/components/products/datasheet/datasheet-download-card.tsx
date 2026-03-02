import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DatasheetDownloadCardProps {
  productSlug: string
  datasheetPdf?: string | null
}

export function DatasheetDownloadCard({
  productSlug,
  datasheetPdf,
}: DatasheetDownloadCardProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Card className="border-border/80 shadow-sm">
          <CardHeader>
            <CardTitle>Datasheet Download</CardTitle>
            <CardDescription>
              PDF download is prepared as a placeholder in this release and will be updated with
              final certified files.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            {datasheetPdf ? (
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={datasheetPdf}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Datasheet
                </Link>
              </Button>
            ) : (
              <Button disabled>
                <Download className="mr-2 h-4 w-4" />
                Download Datasheet (Coming Soon)
              </Button>
            )}

            <Button asChild variant="outline">
              <Link href={`/products/${productSlug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product Detail
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
