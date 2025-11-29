'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import resumeUrl from '@/assets/Pierre_Kostantine_Resume_November_2025.pdf';

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b bg-card flex-shrink-0">
        <h1 className="text-xl font-headline">My Resume</h1>
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit">
              <FileText className="h-12 w-12" />
            </div>
            <CardTitle className="mt-4">Pierre Kostantine's Resume</CardTitle>
            <CardDescription>
              Click the button below to download the latest version of my resume as a PDF.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="w-full">
              <a href={resumeUrl} download="Pierre_Kostantine_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              The document will open in a new tab if your browser supports it, otherwise it will be downloaded.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
