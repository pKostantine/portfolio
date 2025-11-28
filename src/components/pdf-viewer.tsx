'use client';

import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { toast } = useToast();

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    toast({
      variant: 'destructive',
      title: 'Failed to load PDF',
      description: `Please ensure the file exists at ${pdfUrl}. Error: ${error.message}`,
    });
  }, [toast, pdfUrl]);

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));

  return (
    <div className="w-full h-full flex flex-col items-center">
      {numPages && (
        <nav className="flex items-center gap-4 p-2 bg-card border-b w-full justify-center sticky top-0 z-10">
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <p className="text-sm font-medium text-muted-foreground">
            Page {pageNumber} of {numPages}
          </p>
          <Button onClick={goToNextPage} disabled={pageNumber >= numPages} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </nav>
      )}
      <div className="flex-grow w-full overflow-y-auto pt-4">
        <div className="flex justify-center">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              className="flex justify-center"
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
