import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to top
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          const id = sorted[0].target.id;
          setActiveId(`#${id}`);
          // Update hash without scrolling
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
