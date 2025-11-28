'use client';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import Link from 'next/link';

const PdfViewer = dynamic(() => import('@/components/pdf-viewer'), {
  ssr: false,
  loading: () => (
     <div className="flex justify-center items-center h-full">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
     </div>
  ),
});

const pdfFile = "/Pierre_Kostantine_Resume_November_2025.pdf";

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-card shadow-sm p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-headline font-bold text-primary">Resume</h1>
        <Button asChild variant="outline">
          <Link href={pdfFile} download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Link>
        </Button>
      </header>
      <main className="flex-1 overflow-auto">
        <PdfViewer pdfUrl={pdfFile} />
      </main>
    </div>
  );
}
