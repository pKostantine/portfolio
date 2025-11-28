'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Download } from 'lucide-react';
import { Suspense } from 'react';

const PdfViewerClient = dynamic(() => import('@/components/pdf-viewer-client'), {
  ssr: false,
});

const pdfUrl = '/Pierre_Kostantine_Resume_November_2025.pdf';

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b bg-card">
        <h1 className="text-xl font-headline">My Resume</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button asChild variant="default">
            <a href={pdfUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Suspense fallback={<div className="flex justify-center items-center h-full">Loading PDF...</div>}>
          <PdfViewerClient url={pdfUrl} />
        </Suspense>
      </main>
    </div>
  );
}
