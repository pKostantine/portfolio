'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function ResumePage() {
  const [viewerUrl, setViewerUrl] = useState('');

  useEffect(() => {
    setViewerUrl('https://drive.google.com/file/d/1txb90oGF7Sd31ezzKmSE9PkPqxwsU_xW/preview');
  }, []);

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
        {viewerUrl ? (
          <iframe src={viewerUrl} className="w-full h-full" style={{ minHeight: '80vh' }}/>
        ) : (
          <p>Loading PDF Viewer...</p>
        )}
      </main>
    </div>
  );
}
