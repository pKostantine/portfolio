'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Download, FileText, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getResumeDataUri } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export default function ResumePage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setLoading(true);
    const response = await getResumeDataUri();
    setLoading(false);

    if (response.success && response.data) {
      const link = document.createElement('a');
      link.href = response.data;
      link.download = 'Pierre_Kostantine_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error || 'Could not download resume.',
      });
    }
  };

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
            <Button size="lg" className="w-full" onClick={handleDownload} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Preparing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Your resume will be downloaded directly to your device.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
