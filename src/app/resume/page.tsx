'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Download } from 'lucide-react';

const pdfUrl = '/Pierre_Kostantine_Resume_November_2025.pdf';

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b bg-card flex-shrink-0">
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
      <main className="flex-1 overflow-hidden">
        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title="Pierre Kostantine's Resume"
          aria-label="PDF viewer for Pierre Kostantine's Resume"
        />
      </main>
    </div>
  );
}
