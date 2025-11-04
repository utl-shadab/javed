// "use client";
// import { useEffect } from "react";
// import Lenis from "lenis";

// export const useLenisScroll = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2, // scroll speed
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
//       gestureOrientation: "vertical",
//       smoothWheel: true,
//       syncTouch: true, 
//       touchMultiplier: 1.2,
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);
// };

"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const useLenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Helper: detect any touch-capable device
    const isTouchDevice = () => {
      if (typeof window === "undefined") return false;

      const nav = navigator as Navigator & { msMaxTouchPoints?: number };

      return (
        "ontouchstart" in window ||
        nav.maxTouchPoints > 0 ||
        (nav.msMaxTouchPoints ?? 0) > 0
      );
    };

    const initLenis = () => {
      const isDesktop = window.innerWidth >= 1024;
      const isTouch = isTouchDevice();

      const shouldEnable = isDesktop && !isTouch;

      if (shouldEnable && !lenisRef.current) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          gestureOrientation: "vertical",
          smoothWheel: true,
          syncTouch: false, // disable for touch devices
          touchMultiplier: 1.2,
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } else if (!shouldEnable && lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        document.body.style.overflow = "auto"; // restore scroll
      }
    };

    initLenis();

    window.addEventListener("resize", initLenis);
    window.addEventListener("orientationchange", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);
      window.removeEventListener("orientationchange", initLenis);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);
};
