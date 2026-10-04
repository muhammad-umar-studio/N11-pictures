"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    if (elements.length === 0) return;

    document.body.classList.add("scroll-reveal-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0 },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
