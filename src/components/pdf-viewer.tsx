import dynamic from 'next/dynamic';

const PdfViewerClient = dynamic(() => import('./pdf-viewer-client'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-full">Loading PDF...</div>
});

export default function PdfViewer({ url }: { url: string }) {
  return <PdfViewerClient url={url} />;
}
