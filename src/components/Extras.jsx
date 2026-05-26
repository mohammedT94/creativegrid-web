import React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CONTENT, pick, arDigits } from "../data.js";
import { fadeUp, staggerParent, viewportOnce, useCountUp } from "../motion/variants.js";
import { cn } from "../lib/cn.js";
import { track } from "../lib/analytics.js";

/* ─── Metrics ─────────────────────────────────────────────── */
function MetricsStrip({ lang }) {
  const metrics = CONTENT.metrics;
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="border-y border-line">
      <div className="container-cg">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:gap-y-0">
            {metrics.map((m, i) => (
              <MetricCell
                key={i}
                value={m.v}
                label={pick(m.l, lang)}
                run={inView}
                lang={lang}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCell({ value, label, run, lang, delay }) {
  const numMatch = String(value).match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = numMatch && numMatch.index > 0 ? String(value).slice(0, numMatch.index) : "";
  const suffix = numMatch ? String(value).slice(numMatch.index + numMatch[0].length) : "";
  const isFloat = num % 1 !== 0;
  const formatted = useCountUp(num, run, {
    duration: 1.4,
    format: (v) => `${prefix}${isFloat ? v.toFixed(1) : Math.round(v).toLocaleString()}${suffix}`,
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <div className="font-display text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-[-0.03em] text-text-1">
        {lang === "ar" ? (
          <span>{arDigits(`${prefix}${isFloat ? num.toFixed(1) : num}${suffix}`)}</span>
        ) : (
          <motion.span>{formatted}</motion.span>
        )}
      </div>
      <div className="caption mt-3 text-text-2">{label}</div>
    </motion.div>
  );
}

/* ─── Testimonials — plain stacked quotes (appg.co style) ─── */
function Testimonials({ lang }) {
  const items = CONTENT.testimonials;
  const head = {
    eyebrow: { ar: "آراء العملاء", en: "What clients say", fr: "Paroles de clients" },
  };
  return (
    <section className="section-cg">
      <div className="container-cg">
        <div className="mx-auto max-w-[1100px]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            className="caption mb-12 block text-text-3"
          >
            {pick(head.eyebrow, lang)}
          </motion.span>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            className="space-y-14"
          >
            {items.slice(0, 3).map((it, i) => (
              <motion.li key={i} variants={fadeUp}>
                <p className="font-display text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.35] tracking-[-0.015em] text-text-1">
                  "{pick(it.quote, lang)}"
                </p>
                <div className="caption mt-5 text-text-2">
                  — {pick(it.name, lang)}, {pick(it.role, lang)} · {it.country}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────── */
function FAQ({ lang }) {
  const items = CONTENT.faq;
  const [open, setOpen] = React.useState(-1);
  const head = {
    eyebrow: { ar: "أسئلة شائعة", en: "FAQ", fr: "FAQ" },
    title: {
      ar: "إجابات قبل أن تسأل",
      en: "Answers before you ask",
      fr: "Réponses avant la question",
    },
  };
  return (
    <section id="faq" className="section-cg">
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
            {items.map((it, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="border-b border-line"
              >
                <button
                  className="grid w-full grid-cols-[1fr,auto] items-baseline gap-6 py-6 text-start"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="font-display text-[clamp(17px,1.8vw,20px)] font-medium text-text-1">
                    {pick(it.q, lang)}
                  </span>
                  <span
                    className={cn(
                      "text-text-3 transition-transform duration-base",
                      open === i && "rotate-45 text-text-1"
                    )}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pe-12 text-[16px] leading-[1.6] text-text-2">
                        {pick(it.a, lang)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer — minimal ───────────────────────────────────── */
function Footer({ lang, onOpenContact }) {
  const f = CONTENT.footer;
  const a = CONTENT.agency;
  const [legal, setLegal] = React.useState(null); // "privacy" | "terms" | null
  return (
    <footer className="border-t border-line">
      <div className="container-cg pt-section pb-12">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr,auto]"
          >
            <h2
              className="font-display font-semibold tracking-[-0.035em] text-text-1"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1 }}
            >
              {pick(f.cta, lang)}
            </h2>
            <button className="btn btn-primary btn-lg" onClick={onOpenContact}>
              {pick(CONTENT.nav.contact, lang)}
              <span className="arrow">→</span>
            </button>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-4">
            <div className="min-w-0">
              <span className="caption text-text-3">CreativeGrid</span>
              <p className="caption mt-3 max-w-[26ch] text-text-2">
                {pick(a.tag, lang)}
              </p>
            </div>
            <FootCol
              label={pick(f.cols.company, lang)}
              items={[
                { href: "#work", label: pick(CONTENT.nav.work, lang) },
                { href: "#services", label: pick(CONTENT.nav.services, lang) },
                { href: "#process", label: pick(CONTENT.nav.process, lang) },
                { href: "#about", label: pick(CONTENT.nav.about, lang) },
              ]}
            />
            <FootCol
              label={pick(f.cols.contact, lang)}
              items={[
                { href: `mailto:${a.email}`, label: a.email },
                { href: `https://wa.me/${a.whatsapp}`, label: "WhatsApp" },
              ]}
            />
            <div className="min-w-0">
              <span className="caption text-text-3">
                {lang === "ar" ? "الموقع" : lang === "fr" ? "Localisation" : "Location"}
              </span>
              <p className="caption mt-3 break-words text-text-2">
                {pick(a.location, lang)}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-text-3">
            <p className="caption">{pick(f.rights, lang)}</p>
            <div className="flex gap-6">
              <button
                className="caption hover:text-text-1"
                onClick={() => setLegal("privacy")}
              >
                {lang === "ar" ? "الخصوصيّة" : lang === "fr" ? "Confidentialité" : "Privacy"}
              </button>
              <button
                className="caption hover:text-text-1"
                onClick={() => setLegal("terms")}
              >
                {lang === "ar" ? "الشروط" : lang === "fr" ? "Conditions" : "Terms"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <LegalModal kind={legal} lang={lang} onClose={() => setLegal(null)} />
    </footer>
  );
}

function FootCol({ label, items }) {
  return (
    <div>
      <span className="caption text-text-3">{label}</span>
      <ul className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={i}>
            <a href={it.href} className="caption text-text-2 hover:text-text-1">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Floating WhatsApp ──── */
function FloatingActions({ lang }) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      href={`https://wa.me/${CONTENT.agency.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      onClick={() => track("whatsapp_click", { location: "floating" })}
      className="fixed bottom-6 end-6 z-30 grid h-14 w-14 place-items-center rounded-full text-white shadow-el-2 transition-transform hover:scale-105"
      style={{ background: "#25D366" }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16.003 3.2C8.94 3.2 3.205 8.935 3.202 15.998c-.001 2.257.589 4.46 1.71 6.405L3.2 28.8l6.55-1.72a12.788 12.788 0 0 0 6.249 1.59h.005c7.062 0 12.798-5.736 12.8-12.799.001-3.42-1.33-6.638-3.747-9.057a12.717 12.717 0 0 0-9.054-3.614Zm0 23.59h-.004a10.62 10.62 0 0 1-5.413-1.482l-.388-.23-4.027 1.057 1.075-3.93-.253-.402a10.605 10.605 0 0 1-1.626-5.665c.002-5.869 4.778-10.643 10.643-10.643a10.55 10.55 0 0 1 7.519 3.119 10.567 10.567 0 0 1 3.118 7.526c-.003 5.871-4.778 10.65-10.644 10.65Zm5.836-7.971c-.32-.16-1.892-.933-2.184-1.04-.293-.107-.506-.16-.72.16-.213.32-.825 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.592-1.894-1.78-2.214-.186-.32-.02-.493.141-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.736-.987-2.376-.26-.625-.524-.54-.72-.55-.187-.009-.4-.011-.613-.011a1.176 1.176 0 0 0-.853.4c-.293.32-1.12 1.094-1.12 2.668 0 1.575 1.146 3.097 1.306 3.31.16.213 2.256 3.443 5.466 4.83.764.33 1.36.527 1.825.674.766.244 1.464.21 2.015.127.615-.092 1.892-.773 2.16-1.52.266-.747.266-1.387.186-1.52-.08-.133-.293-.213-.613-.373Z"/>
      </svg>
    </motion.a>
  );
}

/* ─── Legal modal (Privacy / Terms) ──────────────────────── */
const LEGAL = {
  privacy: {
    title: { ar: "سياسة الخصوصيّة", en: "Privacy Policy", fr: "Politique de confidentialité" },
    updated: { ar: "آخر تحديث: مايو 2026", en: "Last updated: May 2026", fr: "Dernière mise à jour : mai 2026" },
    sections: [
      {
        h: { ar: "من نحن", en: "Who we are", fr: "Qui sommes-nous" },
        p: {
          ar: "كرييتيف غريد ستوديو تطوير رقمي. عند تواصلك معنا عبر النموذج، نجمع فقط البيانات اللازمة للردّ على طلبك.",
          en: "CreativeGrid is a digital development studio. When you contact us via our form, we only collect the data needed to reply to your request.",
          fr: "CreativeGrid est un studio de développement numérique. Lorsque vous nous contactez via notre formulaire, nous ne collectons que les données nécessaires pour répondre à votre demande.",
        },
      },
      {
        h: { ar: "البيانات التي نجمعها", en: "Data we collect", fr: "Données collectées" },
        p: {
          ar: "الاسم، البريد الإلكتروني، رقم الهاتف (اختياري)، نوع المشروع، الميزانية، ووصف المشروع. تحفظ هذه البيانات لمدّة ٢٤ شهراً ثمّ تحذف.",
          en: "Name, email, phone (optional), project type, budget, and project description. Data is retained for 24 months then deleted.",
          fr: "Nom, email, téléphone (facultatif), type de projet, budget et description du projet. Les données sont conservées 24 mois puis supprimées.",
        },
      },
      {
        h: { ar: "كيف نستخدم البيانات", en: "How we use your data", fr: "Utilisation des données" },
        p: {
          ar: "للردّ على استفسارك، إعداد عرض، أو إدارة مشروعك. لا نبيع بياناتك ولا نشاركها مع أيّ طرف ثالث للإعلان.",
          en: "To reply to your inquiry, prepare a proposal, or run your project. We never sell or share your data with third parties for advertising.",
          fr: "Pour répondre à votre demande, préparer une proposition ou gérer votre projet. Nous ne vendons ni ne partageons vos données avec des tiers à des fins publicitaires.",
        },
      },
      {
        h: { ar: "Cookies & تحليلات", en: "Cookies & analytics", fr: "Cookies & analytique" },
        p: {
          ar: "نستخدم Google Analytics 4 لقياس استخدام الموقع. لا نستعمل ملفّات تعريف الارتباط للإعلان.",
          en: "We use Google Analytics 4 to measure site usage. No advertising cookies are used.",
          fr: "Nous utilisons Google Analytics 4 pour mesurer l'usage du site. Aucun cookie publicitaire n'est utilisé.",
        },
      },
      {
        h: { ar: "حقوقك", en: "Your rights", fr: "Vos droits" },
        p: {
          ar: "يمكنك طلب الاطّلاع على بياناتك أو تعديلها أو حذفها عبر contact@creativegrid.cloud.",
          en: "You can request access, correction, or deletion of your data at contact@creativegrid.cloud.",
          fr: "Vous pouvez demander l'accès, la correction ou la suppression de vos données via contact@creativegrid.cloud.",
        },
      },
    ],
  },
  terms: {
    title: { ar: "شروط الاستخدام", en: "Terms of Service", fr: "Conditions d'utilisation" },
    updated: { ar: "آخر تحديث: مايو 2026", en: "Last updated: May 2026", fr: "Dernière mise à jour : mai 2026" },
    sections: [
      {
        h: { ar: "قبول الشروط", en: "Acceptance", fr: "Acceptation" },
        p: {
          ar: "باستخدام موقع creativegrid.cloud أو طلب خدماتنا، فإنك توافق على هذه الشروط.",
          en: "By using creativegrid.cloud or requesting our services, you agree to these terms.",
          fr: "En utilisant creativegrid.cloud ou en sollicitant nos services, vous acceptez ces conditions.",
        },
      },
      {
        h: { ar: "الخدمات", en: "Services", fr: "Services" },
        p: {
          ar: "نقدّم خدمات تصميم وتطوير برمجي وفق عرض مكتوب يوقّع قبل بدء أي عمل. تفاصيل النطاق، السعر، والتسليمات تحدّد في كلّ عرض.",
          en: "We provide design and software development services per a signed written proposal before any work begins. Scope, price, and deliverables are defined in each proposal.",
          fr: "Nous fournissons des services de design et développement logiciel selon une proposition écrite signée avant tout début de travail. Le périmètre, le prix et les livrables sont définis dans chaque proposition.",
        },
      },
      {
        h: { ar: "الملكيّة الفكريّة", en: "IP & ownership", fr: "Propriété intellectuelle" },
        p: {
          ar: "كلّ كود وأصول تصميم نُنتجها لمشروعك تنتقل ملكيّتها إليك بعد التسديد الكامل. نحتفظ بحقّ عرض العمل في معرضنا.",
          en: "All code and design assets we produce for your project transfer to you upon full payment. We retain the right to showcase the work in our portfolio.",
          fr: "Tout code et tous les éléments de design produits pour votre projet vous sont transférés après paiement intégral. Nous conservons le droit de présenter le travail dans notre portfolio.",
        },
      },
      {
        h: { ar: "المسؤوليّة", en: "Liability", fr: "Responsabilité" },
        p: {
          ar: "مسؤوليّتنا الإجماليّة محدودة بقيمة المبلغ المدفوع للمشروع المعني. لا نتحمّل أيّ خسارة غير مباشرة.",
          en: "Our total liability is limited to the amount paid for the relevant project. We are not liable for indirect losses.",
          fr: "Notre responsabilité totale est limitée au montant payé pour le projet concerné. Nous ne sommes pas responsables des pertes indirectes.",
        },
      },
      {
        h: { ar: "القانون المعمول به", en: "Governing law", fr: "Droit applicable" },
        p: {
          ar: "تحكم هذه الشروط القوانين السارية في ولاية مونتانا، الولايات المتّحدة.",
          en: "These terms are governed by the laws of the State of Montana, United States.",
          fr: "Ces conditions sont régies par les lois de l'État du Montana, États-Unis.",
        },
      },
    ],
  },
};

function LegalModal({ kind, lang, onClose }) {
  React.useEffect(() => {
    if (kind) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [kind]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (kind) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [kind, onClose]);

  return (
    <AnimatePresence>
      {kind && LEGAL[kind] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-bg-base"
          role="dialog"
          aria-modal="true"
        >
          <div className="sticky top-0 z-10 border-b border-line bg-bg-base/90 backdrop-blur">
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
              <span className="micro">CreativeGrid</span>
            </div>
          </div>

          <motion.article
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="container-cg pb-section pt-14"
          >
            <div className="mx-auto max-w-[760px]">
              <span className="caption text-text-3">{pick(LEGAL[kind].updated, lang)}</span>
              <h1
                className="mt-3 font-display font-semibold tracking-[-0.03em] text-text-1"
                style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
              >
                {pick(LEGAL[kind].title, lang)}
              </h1>

              <div className="mt-12 space-y-10">
                {LEGAL[kind].sections.map((s, i) => (
                  <section key={i}>
                    <h2 className="font-display text-[clamp(20px,2.4vw,26px)] font-semibold tracking-[-0.02em] text-text-1">
                      {pick(s.h, lang)}
                    </h2>
                    <p className="mt-3 text-[16px] leading-[1.7] text-text-2">
                      {pick(s.p, lang)}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-16 border-t border-line pt-8 text-[14px] text-text-3">
                {lang === "ar" ? "لأي سؤال: " : lang === "fr" ? "Pour toute question : " : "For any question: "}
                <a href={`mailto:${CONTENT.agency.email}`} className="text-text-1 underline hover:no-underline">
                  {CONTENT.agency.email}
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { MetricsStrip, Testimonials, FAQ, Footer, FloatingActions };
