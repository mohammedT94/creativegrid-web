import React from "react";
import { motion } from "framer-motion";
import { CONTENT, pick } from "../data.js";
import {
  fadeUp,
  lineMask,
  staggerParentSlow,
} from "../motion/variants.js";
import { track } from "../lib/analytics.js";

function Hero({ lang, onOpenContact }) {
  const t = CONTENT.hero;
  const p = (k) => pick(t[k], lang);
  const title = t.title[lang] || t.title.en;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const mask = lineMask(dir);

  // For Arabic, italic looks awkward — use the elegant Reem Kufi instead.
  const accentStyle =
    lang === "ar"
      ? {
          fontFamily: "'Reem Kufi', 'IBM Plex Sans Arabic', sans-serif",
          fontWeight: 500,
          fontStyle: "normal",
          letterSpacing: "-0.01em",
        }
      : {
          fontFamily: "'Instrument Serif', 'Times New Roman', serif",
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "-0.02em",
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[max(96px,14vh)] pb-[clamp(120px,18vh,200px)]"
    >
      {/* Simple blurred color background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, color-mix(in srgb, var(--accent) 10%, var(--bg-base)) 0%, var(--bg-base) 70%)",
        }}
      />

      {/* Soft fade at the bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[25%]"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--bg-base) 100%)",
        }}
      />

      {/* Faint dot grid for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--text-3, #94a3b8) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Horizon line at the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px]"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent, #6366f1) 50%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      <div className="container-cg relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerParentSlow}
          className="mx-auto flex max-w-[960px] flex-col items-center text-center"
        >
          {/* Centered pill */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elev/80 px-4 py-1.5 text-[12px] font-medium text-text-2 shadow-el-1 backdrop-blur"
          >
            <span className="dot pulse" />
            <span className="tracking-[0.04em]">
              {lang === "ar"
                ? "نقبل مشاريع Q3 2026"
                : lang === "fr"
                ? "Disponible — Projets Q3 2026"
                : "Booking — Q3 2026 projects"}
            </span>
          </motion.span>

          {/* Headline — line 1 sans, line 2 accent (serif italic for Latin, Reem Kufi for Arabic) */}
          <motion.h1
            variants={staggerParentSlow}
            className="mt-8 font-display font-semibold leading-[1.02] tracking-[-0.035em] text-text-1"
            style={{ fontSize: "clamp(46px, 8vw, 112px)" }}
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                variants={mask}
                className="inline-block will-change-transform"
              >
                {title[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={mask}
                className="inline-block will-change-transform"
                style={accentStyle}
              >
                {title[1]}
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[58ch] text-[17px] leading-[1.6] text-text-2 md:text-[19px]"
          >
            {p("sub")}
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={fadeUp} className="mt-9">
            <button
              onClick={() => {
                track("cta_book_call", { location: "hero", lang });
                onOpenContact();
              }}
              className="btn btn-primary btn-lg shadow-el-2"
            >
              {pick(t.ctaPrimary, lang)}
              <span className="arrow">→</span>
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-7 text-[13px] tracking-[0.04em] text-text-3"
          >
            {p("tagline")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* TrustBand kept exported for backward compat — no longer rendered. */
function TrustBand() { return null; }

export { Hero, TrustBand };
