import { useEffect } from "react";

/**
 * Locks body scroll when `locked` is true — works on iOS + Safari too.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    const body = document.body;
    const scrollY = window.scrollY;

    if (locked) {
      // Prevent scroll + preserve scroll position
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
      body.style.width = "100%";
    } else {
      // Restore scroll position
      const y = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      body.style.width = "";
      window.scrollTo(0, parseInt(y || "0") * -1);
    }

    // Cleanup when component unmounts
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      body.style.width = "";
    };
  }, [locked]);
}
