"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import the PDF viewer client component.
const PdfViewerClient = dynamic(() => import("./pdf-viewer-client"), {
  ssr: false,
  loading: () => (
    <div className="p-4 w-full h-full flex flex-col items-center">
      <Skeleton className="h-10 w-48 mb-4" />
      <Skeleton className="w-full h-full max-w-4xl" />
    </div>
  ),
});

const PdfViewer = () => {
  return <PdfViewerClient />;
};
export default PdfViewer;
