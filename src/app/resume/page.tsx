// Only render the SDK on the client side.
"use client";

import React, { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let cleanup = () => {};

    (async () => {
      const NutrientViewer = (await import("@nutrient-sdk/viewer")).default;

      // Ensure there's only one `NutrientViewer` instance.
      NutrientViewer.unload(container);

      if (container && NutrientViewer) {
        NutrientViewer.load({
          container,
          document: "https://www.nutrient.io/downloads/nutrient-web-demo.pdf",
        });
      }

      cleanup = () => {
        NutrientViewer.unload(container);
      };
    })();

    return cleanup;
  }, []);

  // You must set the container height and width.
  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100%",
      }}
    />
  );
}