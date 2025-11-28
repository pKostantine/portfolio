"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const pdfFile = "/Pierre_Kostantine_Resume_November_2025.pdf";

const PdfViewerClient = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDocumentLoading, setIsDocumentLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsDocumentLoading(false);
  };

  const onDocumentLoadStart = () => {
    setIsDocumentLoading(true);
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () => {
    if (numPages) {
      setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
    }
  }

  return (
    <div className="p-4 h-full flex flex-col items-center gap-4">
      <Card className="p-2 flex gap-2 items-center sticky top-4 z-10">
        <Button onClick={goToPrevPage} disabled={pageNumber <= 1} variant="ghost" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span className="font-medium text-sm tabular-nums text-muted-foreground">
          Page {pageNumber} of {numPages ?? '...'}
        </span>
        <Button onClick={goToNextPage} disabled={!numPages || pageNumber >= numPages} variant="ghost" size="icon">
          <ChevronRight className="h-5 w-5" />
        </Button>
        <Button asChild variant="outline" size="sm" className="ml-4">
            <Link href={pdfFile} download="Pierre_Kostantine_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download
            </Link>
        </Button>
      </Card>
      
      <div className="w-full flex justify-center flex-1 overflow-auto">
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadStart={onDocumentLoadStart}
          loading={<Skeleton className="w-full max-w-4xl h-[1122px]" />}
          error={
            <div className="p-8 text-center text-destructive-foreground bg-destructive rounded-md">
                <p className="font-bold">Failed to load PDF.</p>
                <p className="text-sm">Please make sure the file exists in the public folder.</p>
            </div>
          }
        >
          {!isDocumentLoading && (
            <Page
                pageNumber={pageNumber}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="[&_.react-pdf__Page__canvas]:!w-full [&_.react-pdf__Page__canvas]:!h-auto"
                width={1000}
            />
          )}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewerClient;
