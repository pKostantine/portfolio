import { PORTFOLIO_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function ResumePage() {
  const resumePdfUrl = '/pierre-resume-placeholder.pdf';

  return (
    <div className="flex flex-col h-screen bg-muted">
      <header className="flex items-center justify-between p-4 border-b bg-card">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <h1 className="text-lg font-headline font-semibold text-primary">
          {PORTFOLIO_DATA.name}'s Resume
        </h1>
        <Button asChild>
          <a href={resumePdfUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
      </header>
      <main className="flex-1 flex justify-center items-center p-4">
        <div className="w-full h-full max-w-5xl bg-background shadow-lg rounded-lg overflow-hidden">
          <object
            data={resumePdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            className="border-none"
          >
            <p className="p-4 text-center text-muted-foreground">
              It appears you don't have a PDF plugin for this browser.
              You can <a href={resumePdfUrl} download className="text-primary underline">click here to download the PDF file.</a>
            </p>
          </object>
        </div>
      </main>
    </div>
  );
}
