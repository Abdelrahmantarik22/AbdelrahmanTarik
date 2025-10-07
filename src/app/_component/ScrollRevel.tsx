"use client";
import { useEffect, useRef } from "react";

export default function ScrollRevealWrapper({
  children,
  delay = 200,
  distance = "60px",
  origin = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: string;
  origin?: "top" | "bottom" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    // ✅ import inside useEffect to avoid SSR window error
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();
      sr.reveal(ref.current!, {
        delay,
        distance,
        origin,
        duration: 1000,
        easing: "ease-in-out",
        cleanup: true,
        reset: true,
      });
    });
  }, [delay, distance, origin]);

  return <div ref={ref}>{children}</div>;
}
