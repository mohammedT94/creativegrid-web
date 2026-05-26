import React from "react";
import { motion } from "framer-motion";
import { CONTENT, pick } from "../data.js";
import { fadeUp, staggerParent, viewportOnce } from "../motion/variants.js";

function ServicesSection({ lang }) {
  const services = CONTENT.services;
  const head = {
    eyebrow: { ar: "ما نقدّمه", en: "What we do", fr: "Ce que nous faisons" },
    title: {
      ar: "ثماني خدمات. هندسة موحّدة.",
      en: "Eight services. One bar.",
      fr: "Huit services. Une exigence.",
    },
  };

  return (
    <section id="services" className="section-cg">
      <div className="container-cg">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            className="mb-14"
          >
            <motion.span variants={fadeUp} className="caption text-text-3">
              {pick(head.eyebrow, lang)}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display font-semibold tracking-[-0.03em] text-text-1"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
            >
              {pick(head.title, lang)}
            </motion.h2>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            className="border-t border-line"
          >
            {services.map((s, i) => (
              <ServiceRow key={s.id} s={s} lang={lang} idx={i} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ s, lang, idx }) {
  return (
    <motion.li
      variants={fadeUp}
      className="group border-b border-line"
    >
      <a
        href={`#service-${s.id}`}
        className="grid grid-cols-[40px,1fr,auto] items-baseline gap-6 py-8 transition-colors hover:bg-bg-glass"
      >
        <span className="micro text-text-3">/{String(idx + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="font-display text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.02em] text-text-1">
            {pick(s.title, lang)}
          </h3>
          <p className="caption mt-2 max-w-[60ch] text-text-2">
            {pick(s.desc, lang)}
          </p>
        </div>
        <span className="text-text-3 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-4-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </motion.li>
  );
}

export { ServicesSection };
