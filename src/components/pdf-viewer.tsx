"use client";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the PDF viewer client component.
const PdfViewerClient = dynamic(() => import("./pdf-viewer-client"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center p-10 h-full">
      <div className="text-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">Loading PDF Viewer...</p>
      </div>
    </div>
  ),
});

const PdfViewer = () => {
  return <PdfViewerClient />;
};
export default PdfViewer;
