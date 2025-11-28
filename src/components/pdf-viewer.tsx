'use client';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const PdfViewerClient = dynamic(() => import('@/components/pdf-viewer-client'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-full w-full">
      <div className="text-center">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Loading PDF Viewer...</p>
      </div>
    </div>
  ),
});

const PdfViewer = () => {
  return <PdfViewerClient />;
};

export default PdfViewer;
