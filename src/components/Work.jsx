import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT, pick } from "../data.js";
import { fadeUp, staggerParent, viewportOnce } from "../motion/variants.js";
import { track } from "../lib/analytics.js";

function WorkSection({ lang, onOpenCase }) {
  const cases = CONTENT.cases;

  const head = {
    eyebrow: { ar: "أعمالنا", en: "Selected works", fr: "Réalisations" },
    title: {
      ar: "منتجات شُحنت. نتائج قِيست.",
      en: "Shipped. Measured.",
      fr: "Livré. Mesuré.",
    },
  };

  return (
    <section id="work" className="section-cg">
      <div className="container-cg">
        <div className="mx-auto max-w-[1200px]">
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
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cases.map((c) => (
              <WorkCard
                key={c.id}
                c={c}
                lang={lang}
                onClick={() => {
                  track("case_view", { case_id: c.id, client: c.client });
                  onOpenCase(c);
                }}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ c, lang, onClick }) {
  return (
    <motion.li variants={fadeUp}>
      <button
        type="button"
        onClick={onClick}
        className="group block w-full text-start"
      >
        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-r-3 border border-line bg-bg-elev-2 transition-shadow duration-300 group-hover:shadow-el-2"
          style={{ borderRadius: "var(--r-3)" }}
        >
          {c.image && (
            <img
              src={c.image}
              alt={pick(c.title, lang)}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {/* Year chip */}
          <span className="absolute top-3 end-3 rounded-full bg-bg-base/85 px-3 py-1 text-[11px] font-medium text-text-2 backdrop-blur">
            {c.year}
          </span>
          {/* Hover arrow */}
          <span className="absolute bottom-3 end-3 grid h-9 w-9 place-items-center rounded-full bg-bg-base text-text-1 opacity-0 shadow-el-1 transition-opacity duration-300 group-hover:opacity-100">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-4-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="mt-4">
          <div className="caption text-text-3">
            {c.client} · {pick(c.industry, lang)}
          </div>
          <h3 className="mt-1.5 font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] text-text-1 transition-colors group-hover:text-accent">
            {pick(c.title, lang)}
          </h3>
          {c.outcome && (
            <div className="mt-1.5 text-[13px] text-text-2">
              {pick(c.outcome, lang)}
            </div>
          )}
        </div>
      </button>
    </motion.li>
  );
}

function CaseDetail({ caseData, lang, onClose, onOpenContact }) {
  const c = caseData;
  React.useEffect(() => {
    if (c) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [c]);

  const labels = {
    challenge: { ar: "التحدّي", en: "Challenge", fr: "Défi" },
    approach: { ar: "منهجيّتنا", en: "Approach", fr: "Approche" },
    results: { ar: "النتائج", en: "Results", fr: "Résultats" },
    stack: { ar: "البنية التقنيّة", en: "Stack", fr: "Stack" },
    next: { ar: "ابدأ مشروعك", en: "Start your project", fr: "Démarrer" },
    duration: { ar: "المدّة", en: "Duration", fr: "Durée" },
    team: { ar: "الفريق", en: "Team", fr: "Équipe" },
    industry: { ar: "القطاع", en: "Industry", fr: "Secteur" },
    year: { ar: "السنة", en: "Year", fr: "Année" },
  };

  return (
    <AnimatePresence>
      {c && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-bg-base"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sticky top-0 z-10 border-b border-line bg-bg-base/85 backdrop-blur"
          >
            <div className="container-cg flex h-[64px] items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-text-2 hover:text-text-1"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                {lang === "ar" ? "إغلاق" : lang === "fr" ? "Fermer" : "Close"}
              </button>
              <span className="micro">{c.client} / {c.year}</span>
            </div>
          </div>

          <motion.article
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="container-cg pb-section pt-14"
          >
            <div className="mx-auto max-w-[1000px]">
              <span className="caption text-text-3">
                {c.country} · {pick(c.industry, lang)}
              </span>
              <h1
                className="mt-3 font-display font-semibold tracking-[-0.035em] text-text-1"
                style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1 }}
              >
                {pick(c.title, lang)}
              </h1>
              <p className="mt-6 max-w-[68ch] text-[18px] leading-[1.55] text-text-2">
                {pick(c.summary, lang)}
              </p>

              {c.image && (
                <CaseHeroImage src={c.image} />
              )}

              <div className="mt-12 grid grid-cols-2 gap-8 border-y border-line py-8 md:grid-cols-4">
                <Fact label={pick(labels.duration, lang)} value={pick(c.duration, lang)} />
                <Fact label={pick(labels.team, lang)} value={pick(c.team, lang)} />
                <Fact label={pick(labels.industry, lang)} value={pick(c.industry, lang)} />
                <Fact label={pick(labels.year, lang)} value={c.year} />
              </div>

              {c.metrics?.length > 0 && (
                <section className="mt-14">
                  <span className="caption text-text-3">{pick(labels.results, lang)}</span>
                  <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
                    {c.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="font-display text-[clamp(28px,3.2vw,40px)] font-semibold tracking-[-0.025em] text-text-1">
                          {m.v}
                        </div>
                        <div className="caption mt-2 text-text-2">{pick(m.l, lang)}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {c.stack?.length > 0 && (
                <section className="mt-14">
                  <span className="caption text-text-3">{pick(labels.stack, lang)}</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span key={s} className="codechip">{s}</span>
                    ))}
                  </div>
                </section>
              )}

              {c.links?.length > 0 && (
                <section className="mt-14">
                  <span className="caption text-text-3">
                    {lang === "ar" ? "جرّب التطبيق" : lang === "fr" ? "Essayer l'app" : "Try the app"}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {c.links.map((l) => (
                      <StoreButton key={l.url} link={l} lang={lang} />
                    ))}
                  </div>
                </section>
              )}

              <div className="mt-16 border-t border-line pt-10">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    onClose();
                    setTimeout(onOpenContact, 220);
                  }}
                >
                  {pick(labels.next, lang)}
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseHeroImage({ src }) {
  const [dim, setDim] = React.useState({ w: 0, h: 0 });
  React.useEffect(() => {
    const img = new Image();
    img.onload = () => setDim({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = src;
  }, [src]);
  const isPortrait = dim.h > dim.w * 1.1;
  const isSquareish = !isPortrait && Math.abs(dim.w - dim.h) < dim.w * 0.15;

  return (
    <div
      className="mt-12 flex items-start justify-center overflow-hidden border border-line"
      style={{
        background: "var(--bg-elev-2)",
        padding: isPortrait ? 24 : 0,
      }}
    >
      <img
        src={src}
        alt=""
        loading="eager"
        decoding="async"
        className="block"
        style={{
          maxWidth: "100%",
          maxHeight: isPortrait ? "88vh" : isSquareish ? "78vh" : "none",
          width: isPortrait || isSquareish ? "auto" : "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

function StoreButton({ link, lang }) {
  const meta = {
    appstore: {
      label: { ar: "App Store", en: "Download on the App Store", fr: "Télécharger sur l'App Store" },
      sub: { ar: "متجر آبل", en: "App Store", fr: "App Store" },
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      ),
    },
    playstore: {
      label: { ar: "Google Play", en: "Get it on Google Play", fr: "Disponible sur Google Play" },
      sub: { ar: "متجر جوجل بلاي", en: "Google Play", fr: "Google Play" },
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <defs>
            <linearGradient id="gp-blue" x1="3.5" y1="3.4" x2="13" y2="12.9" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00A0FF" />
              <stop offset="1" stopColor="#00E2FF" />
            </linearGradient>
            <linearGradient id="gp-yellow" x1="17.6" y1="12" x2="2.4" y2="12" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFE000" />
              <stop offset="1" stopColor="#FFBD00" />
            </linearGradient>
            <linearGradient id="gp-red" x1="13.85" y1="13.85" x2="2.4" y2="25.3" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient id="gp-green" x1="3.5" y1="2.7" x2="9.7" y2="8.9" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#32A071" />
              <stop offset="0.5" stopColor="#15CF74" />
              <stop offset="1" stopColor="#00F076" />
            </linearGradient>
          </defs>
          <path fill="url(#gp-blue)" d="M3.43 3.27c-.27.28-.43.72-.43 1.29v14.88c0 .57.16 1.01.43 1.29l.05.05L12 12.1v-.2L3.48 3.22l-.05.05z" />
          <path fill="url(#gp-yellow)" d="M14.83 14.93 12 12.1v-.2l2.83-2.83.06.04 3.36 1.91c.96.54.96 1.43 0 1.98l-3.36 1.91-.06.02z" />
          <path fill="url(#gp-red)" d="M14.89 14.91 12 12 3.43 20.73c.31.33.83.37 1.41.05l10.05-5.87" />
          <path fill="url(#gp-green)" d="M14.89 9.09 4.84 3.22c-.58-.33-1.1-.29-1.41.04L12 12l2.89-2.91z" />
        </svg>
      ),
    },
  };
  const m = meta[link.kind];
  if (!m) return null;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-r-2 border border-line bg-bg-elev px-5 py-3 transition hover:border-line-strong hover:shadow-el-1"
      style={{ borderRadius: "var(--r-2)" }}
    >
      <span className="text-text-1">{m.icon}</span>
      <span className="flex flex-col text-start">
        <span className="caption text-text-3">{pick(m.sub, lang)}</span>
        <span className="font-display text-[14px] font-semibold text-text-1">
          {pick(m.label, lang)}
        </span>
      </span>
      <span className="ms-2 text-text-3 transition group-hover:text-text-1">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <span className="caption text-text-3">{label}</span>
      <div className="mt-2 font-display text-[18px] font-medium text-text-1">{value}</div>
    </div>
  );
}

export { WorkSection, CaseDetail };
