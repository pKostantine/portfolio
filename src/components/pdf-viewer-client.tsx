"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PDFViewerClient = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      numPages && pageNumber + 1 >= numPages ? numPages : pageNumber + 1
    );

  const pdfFile = "/Pierre_Kostantine_Resume_November_2025.pdf";

  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-4 mb-4 p-2 rounded-lg bg-secondary sticky top-0 z-10">
        <Button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          variant="outline"
          size="icon"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous Page</span>
        </Button>
        <p className="text-sm font-medium text-secondary-foreground select-none">
          Page {pageNumber} of {numPages || "..."}
        </p>
        <Button
          onClick={goToNextPage}
          disabled={!numPages || pageNumber >= numPages}
          variant="outline"
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next Page</span>
        </Button>
      </div>

      <div className="flex justify-center">
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center p-10 h-full">
                <div className="text-center">
                    <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading PDF...</p>
                </div>
            </div>
          }
          error={
            <div className="p-10 text-center text-destructive-foreground bg-destructive rounded-md">
                <p className="font-bold">Failed to load PDF.</p>
                <p className="text-sm">Please make sure the file exists in the public folder.</p>
            </div>
          }
        >
          <div className="max-w-full overflow-x-auto">
             <Page
                pageNumber={pageNumber}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="shadow-lg"
             />
          </div>
        </Document>
      </div>
    </div>
  );
};

export default PDFViewerClient;
