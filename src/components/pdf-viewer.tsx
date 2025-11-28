"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Loader2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const loadingSpinner = (
    <div className="flex justify-center items-center p-10">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  );

  return (
    <div>
      <Document 
        file={pdfUrl} 
        onLoadSuccess={onDocumentLoadSuccess}
        loading={loadingSpinner}
        className="flex flex-col items-center"
      >
        {Array.from(new Array(numPages || 0), (el, index) => (
          <div key={`page_wrapper_${index + 1}`} className="mb-4 shadow-lg">
            <Page
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              loading=""
            />
          </div>
        ))}
      </Document>
    </div>
  );
}

export default PdfViewer;
