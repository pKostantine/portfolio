"use client";

import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

export default function ResumePage() {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: any;
    if (viewer.current) {
       WebViewer(
        {
          path: "/webviewer",
          initialDoc: "/Pierre_Kostantine_Resume_November_2025.pdf",
          licenseKey: "your_license_key", // sign up to get a key at https://dev.apryse.com
        },
        viewer.current
      ).then((i) => {
        instance = i;
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
    }

    return () => {
      if (instance) {
        instance.cleanup();
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-dvh bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b shrink-0 z-10">
        <h1 className="text-xl font-headline font-bold text-primary">Resume</h1>
      </header>
      <main className="flex-1 overflow-hidden">
        <div className="webviewer h-full" ref={viewer}></div>
      </main>
    </div>
  );
}
