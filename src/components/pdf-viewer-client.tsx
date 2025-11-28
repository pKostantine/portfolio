'use client';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

// This is the crucial part for Next.js 13+ App Router
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const pdfFile = "/Pierre_Kostantine_Resume_November_2025.pdf";

export default function PdfViewerClient() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { toast } = useToast();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error) {
    toast({
      variant: 'destructive',
      title: 'Failed to load PDF',
      description: `Error: ${error.message}. Please ensure the file exists in the /public folder.`,
    });
  }

  const goToPrevPage = () =>
    setPageNumber(prev => Math.max(prev - 1, 1));

  const goToNextPage = () =>
    setPageNumber(prev => Math.min(prev + 1, numPages || 1));

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100 dark:bg-gray-900">
      {numPages && (
        <nav className="flex items-center gap-4 p-2 bg-card border-b w-full justify-center sticky top-0 z-10">
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
             <span className="sr-only">Previous Page</span>
          </Button>
          <p className="text-sm font-medium text-muted-foreground">
            Page {pageNumber} of {numPages}
          </p>
          <Button onClick={goToNextPage} disabled={pageNumber >= numPages} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>
        </nav>
      )}
      <div className="flex-grow w-full overflow-y-auto pt-4 flex justify-center">
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
             <div className="flex justify-center items-center h-64">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
          }
          error={
            <div className="p-4 text-center text-red-500">
                <p>Failed to load PDF.</p>
                <p>Please make sure the file exists in the public folder.</p>
            </div>
          }
        >
          <Page pageNumber={pageNumber} width={800} />
        </Document>
      </div>
    </div>
  );
}
