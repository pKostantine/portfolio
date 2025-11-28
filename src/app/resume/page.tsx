import PdfViewer from "@/components/pdf-viewer";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Download, Home } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const pdfFile = "/Pierre_Kostantine_Resume_November_2025.pdf";

  return (
    <div className="flex flex-col h-screen bg-muted">
       <header className="flex items-center justify-between p-4 border-b bg-card">
        <h1 className="text-xl font-headline font-bold text-primary">Resume</h1>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <a href={pdfFile} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <PdfViewer url={pdfFile} />
      </main>
    </div>
  )
}
