'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function FixedPointMACProjectPage() {
  const [viewerUrl, setViewerUrl] = useState('');

  useEffect(() => {
    setViewerUrl('https://drive.google.com/file/d/1_VRm0ReetBCiotN4ZLAmEmtHYTd6QJTn/preview');
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b bg-card flex-shrink-0">
        <h1 className="text-xl font-headline">Fixed-Point MAC Unit for Machine Learning Inference</h1>
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
      </header>
      <main className="flex-grow flex flex-col">
        {viewerUrl ? (
          <iframe src={viewerUrl} className="w-full h-full flex-grow border-0" title="Fixed-Point MAC Unit PDF" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Loading PDF...</p>
          </div>
        )}
      </main>
    </div>
  );
}
