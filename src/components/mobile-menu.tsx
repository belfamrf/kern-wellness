"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#screen", label: "Screen" },
  { href: "#method", label: "Method" },
  { href: "#studio", label: "Studio" },
  { href: "#faq", label: "FAQ" },
  { href: "#booking", label: "Book intro" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function closeOutside(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function closeOnWideScreen() {
      if (window.matchMedia("(min-width: 801px)").matches) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    window.addEventListener("resize", closeOnWideScreen);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("resize", closeOnWideScreen);
    };
  }, [open]);

  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    const hash = event.currentTarget.hash;
    setOpen(false);

    const section = hash ? document.querySelector(hash) : null;
    if (!(section instanceof HTMLElement)) return;

    const target = section.querySelector<HTMLElement>("h1, h2") ?? section;

    requestAnimationFrame(() => {
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.addEventListener(
          "blur",
          () => target.removeAttribute("tabindex"),
          { once: true },
        );
      }
      target.focus({ preventScroll: true });
    });
  }

  return (
    <div className="mobile-menu" ref={menuRef}>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
        ref={buttonRef}
      >
        <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
        <span className="menu-bars" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      <div
        className="mobile-panel"
        id="mobile-menu-panel"
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
