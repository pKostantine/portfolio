"use client";

import PdfViewer from "@/components/pdf-viewer";

export default function ResumePage() {
  return (
    <div className="flex flex-col h-dvh bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b shrink-0 z-10">
        <h1 className="text-xl font-headline font-bold text-primary">Resume</h1>
      </header>
      <main className="flex-1 overflow-hidden">
        <PdfViewer />
      </main>
    </div>
  );
}
