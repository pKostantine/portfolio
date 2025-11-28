import PdfViewer from '@/components/pdf-viewer';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function ResumePage() {
  const resumeFile = '/Pierre_Kostantine_Resume_November_2025.pdf';

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl flex-grow flex flex-col bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-headline font-bold text-primary">
            {PORTFOLIO_DATA.name}'s Resume
          </h1>
          <a
            href={resumeFile}
            download
            className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
          >
            Download
          </a>
        </div>
        <div className="flex-grow overflow-y-auto">
           <PdfViewer pdfUrl={resumeFile} />
        </div>
      </div>
    </main>
  );
}
