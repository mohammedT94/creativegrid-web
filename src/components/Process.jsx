import React from "react";
import { motion } from "framer-motion";
import { CONTENT, pick } from "../data.js";
import { fadeUp, staggerParent, viewportOnce } from "../motion/variants.js";

function ProcessSection({ lang }) {
  const steps = CONTENT.process;
  const head = {
    eyebrow: { ar: "كيف نعمل", en: "How it works", fr: "Comment ça marche" },
    title: {
      ar: "أربع مراحل. لا مفاجآت.",
      en: "Four phases. Zero surprises.",
      fr: "Quatre phases. Zéro surprise.",
    },
  };
  return (
    <section id="process" className="section-cg">
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

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            className="border-t border-line"
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.k}
                variants={fadeUp}
                className="grid grid-cols-1 items-baseline gap-4 border-b border-line py-10 md:grid-cols-[80px,1fr]"
              >
                <span className="micro text-text-3">{s.k}</span>
                <div>
                  <h3 className="font-display text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.02em] text-text-1">
                    {pick(s.title, lang)}
                  </h3>
                  <p className="caption mt-2 max-w-[60ch] text-text-2">
                    {pick(s.desc, lang)}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

export { ProcessSection };
