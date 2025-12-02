import { useEffect } from "react";

export const useScrollReveal = (selector: string = "[data-reveal]") => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (!("IntersectionObserver" in window) || elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tfy-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => {
      el.classList.add("tfy-reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector]);
};


