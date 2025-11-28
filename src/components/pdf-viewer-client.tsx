'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfViewerClient({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const { toast } = useToast();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadError(error: Error) {
    toast({
      variant: 'destructive',
      title: 'Error loading PDF',
      description: `Failed to load the PDF file. Please try downloading it instead. Error: ${error.message}`,
    });
  }

  function goToPrevPage() {
    setPageNumber(prevPageNumber => (prevPageNumber - 1 > 0 ? prevPageNumber - 1 : 1));
  }

  function goToNextPage() {
    setPageNumber(prevPageNumber => (numPages && prevPageNumber + 1 <= numPages ? prevPageNumber + 1 : prevPageNumber));
  }
  
  const handleZoomIn = () => setScale(prev => prev + 0.1);
  const handleZoomOut = () => setScale(prev => (prev - 0.1 > 0.1 ? prev - 0.1 : 0.1));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm p-2 rounded-b-lg border-x border-b mb-4">
        <div className="flex items-center justify-center gap-2">
           <Button variant="outline" size="sm" onClick={goToPrevPage} disabled={pageNumber <= 1}>
            <ChevronLeft className="h-4 w-4" />
            Prev
          </Button>
          <span className="text-sm font-medium">
            Page {pageNumber} of {numPages || '--'}
          </span>
           <Button variant="outline" size="sm" onClick={goToNextPage} disabled={!numPages || pageNumber >= numPages}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-border mx-2"></div>
           <Button variant="outline" size="icon-sm" onClick={handleZoomOut}><ZoomOut className="h-4 w-4"/></Button>
           <Button variant="outline" size="icon-sm" onClick={handleZoomIn}><ZoomIn className="h-4 w-4"/></Button>
           <Button variant="outline" size="icon-sm" onClick={handleRotate}><RotateCw className="h-4 w-4"/></Button>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center overflow-auto">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
          <Page 
            pageNumber={pageNumber} 
            scale={scale}
            rotate={rotation}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>
  );
}
