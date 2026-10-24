"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

export function PageMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const line = document.querySelector<HTMLElement>(".method-line");

    let frame = 0;
    function updateProgress() {
      frame = 0;
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        progress.style.transform = `scaleX(${value})`;
      }
      if (line?.classList.contains("line-pending") && line.getBoundingClientRect().top < window.innerHeight * 0.88) {
        line.classList.remove("line-pending");
      }
    }
    function requestProgress() {
      if (frame) return;
      frame = requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);
    const resizeObserver =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(requestProgress);
    resizeObserver?.observe(document.body);

    function cleanup() {
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    }

    if (reduce) {
      return cleanup;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const groupCounts = new Map<Element, number>();

    for (const element of elements) {
      const parent = element.parentElement;
      if (parent) {
        const index = groupCounts.get(parent) ?? 0;
        element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
        groupCounts.set(parent, index + 1);
      }
    }

    const pending: HTMLElement[] = [];
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight * 0.92) {
        element.classList.add("reveal-pending");
        if (element.dataset.reveal === "image") {
          element.classList.add("reveal-image");
        }
        pending.push(element);
      }
    }

    if (line && line.getBoundingClientRect().top > window.innerHeight * 0.92) {
      line.classList.add("line-pending");
    }
    requestProgress();

    if (typeof IntersectionObserver === "undefined") {
      for (const element of pending) element.classList.add("is-visible");
      line?.classList.remove("line-pending");
      return cleanup;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const element of elements) observer.observe(element);

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, []);

  return null;
}
