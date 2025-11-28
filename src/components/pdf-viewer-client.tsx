"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

// Set up worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewerClient({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.5);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPrevPage() {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  }

  function goToNextPage() {
    if (numPages) {
      setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
    }
  }

  return (
    <div className="relative flex flex-col items-center gap-4 p-4">
      <div className="z-10 sticky top-2 flex items-center justify-center gap-2 p-2 bg-card rounded-lg shadow-md border">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span>
          Page {pageNumber} of {numPages || '--'}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextPage}
          disabled={numPages ? pageNumber >= numPages : true}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="ml-4 flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setScale(s => s - 0.1)}><ZoomOut className="h-4 w-4" /></Button>
            <span>{Math.round(scale*100)}%</span>
            <Button variant="outline" size="icon" onClick={() => setScale(s => s + 0.1)}><ZoomIn className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="p-4 bg-card rounded-lg shadow-lg border">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} renderTextLayer={true} />
        </Document>
      </div>
    </div>
  );
}
