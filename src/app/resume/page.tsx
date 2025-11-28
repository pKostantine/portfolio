'use client';

import PdfViewer from '@/components/pdf-viewer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

const pdfFile = "/Pierre_Kostantine_Resume_November_2025.pdf";

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-card shadow-sm p-4 flex justify-between items-center border-b shrink-0">
        <h1 className="text-xl font-headline font-bold text-primary">Resume</h1>
        <Button asChild variant="outline">
          <Link href={pdfFile} download="Pierre_Kostantine_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Link>
        </Button>
      </header>
      <main className="flex-1 overflow-auto">
        <PdfViewer />
      </main>
    </div>
  );
}
