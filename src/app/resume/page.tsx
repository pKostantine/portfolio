import { PORTFOLIO_DATA } from '@/lib/data';

export default function ResumePage() {
  const resumeFile = '/Pierre_Kostantine_Resume_November_2025.pdf';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-4xl flex-grow flex flex-col">
        <h1 className="text-2xl font-headline font-bold text-primary mb-4">
          {PORTFOLIO_DATA.name}'s Resume
        </h1>
        <div className="flex-grow border rounded-lg overflow-hidden">
          <object
            data={resumeFile}
            type="application/pdf"
            width="100%"
            height="100%"
            aria-label="Resume PDF Viewer"
          >
            <div className="p-8">
              <p className="text-muted-foreground mb-4">
                Your browser does not support embedding PDFs. You can download the resume instead.
              </p>
              <a 
                href={resumeFile} 
                download 
                className="inline-flex items-center justify-center h-10 px-8 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
              >
                Download Resume
              </a>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
