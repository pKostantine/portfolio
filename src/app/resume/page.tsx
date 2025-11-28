import PdfViewer from '@/components/pdf-viewer';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumePage() {
  const resumeFile = '/Pierre_Kostantine_Resume_November_2025.pdf';

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-5xl flex-grow flex flex-col bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-headline font-bold text-primary">
            {PORTFOLIO_DATA.name}'s Resume
          </h1>
          <Button asChild>
            <a href={resumeFile} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
        <div className="flex-grow overflow-y-auto">
           <PdfViewer />
        </div>
      </div>
    </main>
  );
}
