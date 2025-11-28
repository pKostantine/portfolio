"use client";

import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Download, Home, Loader2 } from "lucide-react";
import Link from "next/link";

const PdfViewerClient = dynamic(() => import('@/components/pdf-viewer-client'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-full flex-col gap-4">
      <Loader2 className="h-8 w-8 animate-spin" />
      <p>Loading PDF...</p>
    </div>
  ),
});

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
        <PdfViewerClient url={pdfFile} />
      </main>
    </div>
  )
}
