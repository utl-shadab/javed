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
    const isTouchDevice = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const initLenis = () => {
      const shouldEnable = window.innerWidth >= 1024 && !isTouchDevice();

      if (shouldEnable && !lenisRef.current) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          gestureOrientation: "vertical",
          smoothWheel: true,
          syncTouch: false,
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
      }
    };

    initLenis();
    window.addEventListener("resize", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);
};

