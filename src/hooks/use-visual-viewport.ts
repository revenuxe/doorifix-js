"use client";

import { useEffect, useState } from "react";

interface VisualViewportRect {
  height: number;
  offsetTop: number;
}

// Mobile keyboards shrink/pan the visual viewport without moving the layout
// viewport that `position: fixed` anchors to, so fixed bottom sheets can end
// up rendered behind the keyboard while a field has focus. Tracking
// window.visualViewport lets us pin fixed overlays to the area that's
// actually visible.
export function useVisualViewport(): VisualViewportRect | null {
  const [rect, setRect] = useState<VisualViewportRect | null>(null);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => setRect({ height: vv.height, offsetTop: vv.offsetTop });
    update();

    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, []);

  return rect;
}
