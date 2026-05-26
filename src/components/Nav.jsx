import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CONTENT, pick } from "../data.js";
import { cn } from "../lib/cn.js";

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2" aria-label="CreativeGrid home">
      <span className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-1">
        CreativeGrid
      </span>
    </a>
  );
}

function LangSwitcher({ lang, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  const labels = { ar: "العربية", en: "English", fr: "Français" };
  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-1 px-2 py-1 text-[13px] text-text-2 transition hover:text-text-1"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <span className="font-mono tracking-wide">{lang.toUpperCase()}</span>
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 top-[calc(100%+6px)] z-50 min-w-[140px] border border-line bg-bg-elev p-1 shadow-el-1"
            style={{ borderRadius: 8 }}
          >
            {["ar", "en", "fr"].map((l) => (
              <button
                key={l}
                className={cn(
                  "flex w-full items-center justify-between rounded px-2.5 py-1.5 text-[13px] transition",
                  l === lang ? "text-text-1" : "text-text-2 hover:text-text-1"
                )}
                onClick={() => {
                  onChange(l);
                  setOpen(false);
                }}
              >
                <span>{labels[l]}</span>
                {l === lang && <span className="dot" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Nav({ lang, onLangChange, onOpenContact, onOpenMobile }) {
  const t = CONTENT.nav;
  const p = (k) => pick(t[k], lang);
  const links = [
    { id: "work", label: p("work") },
    { id: "services", label: p("services") },
    { id: "process", label: p("process") },
    { id: "about", label: p("about") },
  ];
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 60], [0.6, 0.95]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        aria-hidden
        className="absolute inset-0 backdrop-blur-md"
        style={{ background: "var(--bg-base)", opacity: bgOpacity }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "var(--line)", opacity: borderOpacity }}
      />
      <div className="container-cg relative">
        <div className="flex h-[64px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-[14px] text-text-2 transition-colors hover:text-text-1"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LangSwitcher lang={lang} onChange={onLangChange} />
            <button
              onClick={onOpenContact}
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              {p("contact")}
              <span className="arrow">→</span>
            </button>
            <button
              className="grid h-9 w-9 place-items-center text-text-1 md:hidden"
              onClick={onOpenMobile}
              aria-label="Open menu"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <path d="M1 2h16M1 7h16M1 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ lang, open, onClose, onLangChange, onOpenContact }) {
  const t = CONTENT.nav;
  const links = ["work", "services", "process", "about"];
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-bg-base"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-cg flex h-[64px] items-center justify-between">
            <Logo />
            <button
              className="grid h-9 w-9 place-items-center text-text-1"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="container-cg flex flex-1 flex-col justify-center gap-3">
            {links.map((k, i) => (
              <motion.a
                key={k}
                href={`#${k}`}
                onClick={onClose}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="font-display text-[clamp(28px,6vw,40px)] font-semibold tracking-[-0.02em] text-text-1"
              >
                {pick(t[k], lang)}
              </motion.a>
            ))}
          </nav>
          <div className="container-cg flex items-center justify-between border-t border-line py-5">
            <div className="flex gap-3">
              {["ar", "en", "fr"].map((l) => (
                <button
                  key={l}
                  className={cn(
                    "px-2 py-1 font-mono text-xs",
                    l === lang ? "text-text-1" : "text-text-3 hover:text-text-1"
                  )}
                  onClick={() => onLangChange(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
            >
              {pick(t.contact, lang)}
              <span className="arrow">→</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ServiceIcon({ id, size = 22 }) {
  const map = {
    web: <><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M3 8h18" stroke="currentColor" strokeWidth="1.5" /></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M10 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
    ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /></>,
    saas: <><path d="M4 8l8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 12l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></>,
    erp: <><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /></>,
    ext: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" /></>,
    bot: <><rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M12 4v3M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
    scrape: <><path d="M3 6h14M3 12h10M3 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      {map[id] || map.web}
    </svg>
  );
}

export { Nav, MobileMenu, ServiceIcon, Logo };
