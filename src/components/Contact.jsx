import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT, pick } from "../data.js";
import { fadeUp, staggerParent, viewportOnce } from "../motion/variants.js";
import { cn } from "../lib/cn.js";
import { track } from "../lib/analytics.js";
import { sendBrief } from "../lib/sendBrief.js";

function ContactSection({ lang, openSignal }) {
  const c = CONTENT.contact;
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState("");
  const [form, setForm] = React.useState({
    name: "", email: "", phone: "",
    projectType: [], budget: "",
    details: "",
  });
  const [errors, setErrors] = React.useState({});
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    if (openSignal && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openSignal]);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validateStep = (s) => {
    const e = {};
    if (s === 0) {
      if (!form.name || form.name.length < 2)
        e.name = lang === "ar" ? "الاسم مطلوب" : lang === "fr" ? "Nom requis" : "Name required";
      if (!form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
        e.email = lang === "ar" ? "بريد إلكتروني صحيح مطلوب" : lang === "fr" ? "Email valide requis" : "Valid email required";
      if (!form.projectType.length)
        e.projectType = lang === "ar" ? "اختر نوعاً واحداً على الأقل" : lang === "fr" ? "Choisissez au moins un type" : "Pick at least one type";
    }
    if (s === 1) {
      if (!form.budget)
        e.budget = lang === "ar" ? "اختر نطاق الميزانية" : lang === "fr" ? "Choisissez un budget" : "Pick a budget range";
      if (!form.details || form.details.length < 20)
        e.details = lang === "ar"
          ? "تفاصيل أكثر من فضلك (٢٠ حرفاً على الأقل)"
          : lang === "fr"
          ? "Plus de détails svp (20 caractères min)"
          : "More detail please (20 char min)";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep(step)) setStep((s) => Math.min(s + 1, 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const submit = async () => {
    if (!validateStep(step)) return;
    setSending(true);
    setSendError("");
    try {
      await sendBrief({ form, lang });
      track("contact_submit", {
        project_type: form.projectType.join(","),
        budget: form.budget,
      });
      setSent(true);
    } catch (err) {
      const base =
        lang === "ar"
          ? "تعذّر الإرسال. حاول مجدّداً أو راسلنا مباشرة."
          : lang === "fr"
          ? "Envoi impossible. Réessayez ou contactez-nous directement."
          : "Could not send. Please try again or email us directly.";
      setSendError(`${base} (${err?.message || "error"})`);
      console.error("sendBrief failed:", err);
    } finally {
      setSending(false);
    }
  };

  const dir = lang === "ar" ? -1 : 1;

  return (
    <section id="contact" ref={sectionRef} className="section-cg">
      <div className="container-cg">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="section-head"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {pick({ ar: "تواصل", en: "Contact", fr: "Contact" }, lang)}
          </motion.span>
          <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1.6fr,1fr] md:gap-8">
            <motion.h2
              variants={fadeUp}
              className="font-display font-semibold tracking-[-0.028em] text-text-1"
              style={{ fontSize: "clamp(32px, 4.6vw, 56px)", lineHeight: 1.08 }}
            >
              {pick(c.title, lang)}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.6] text-text-2 md:text-[18px]"
            >
              {pick(c.sub, lang)}
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr,1fr]">
          <div className="glass-strong p-7">
            {sent ? (
              <ContactSuccess
                lang={lang}
                onReset={() => {
                  setSent(false);
                  setStep(0);
                  setForm({ name: "", email: "", phone: "", projectType: [], budget: "", details: "" });
                }}
              />
            ) : (
              <>
                <ContactStepper step={step} steps={c.steps} lang={lang} />
                <div className="relative mt-8 overflow-hidden">
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 30 * dir }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 * dir }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {step === 0 && <Step1 form={form} update={update} errors={errors} lang={lang} c={c} />}
                      {step === 1 && <Step2 form={form} update={update} errors={errors} lang={lang} c={c} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {sendError && (
                  <div className="mt-4 rounded-r-2 border border-red-500/40 bg-red-500/10 p-3 text-[13px] text-red-600" style={{ borderRadius: "var(--r-2)" }}>
                    {sendError}
                  </div>
                )}
                <div className="mt-8 flex items-center gap-3">
                  {step > 0 && (
                    <button className="btn btn-ghost" onClick={back} disabled={sending}>
                      <span className="arrow rotate-180">→</span>
                      {pick(c.back, lang)}
                    </button>
                  )}
                  <span className="flex-1" />
                  {step < 1 ? (
                    <button className="btn btn-primary" onClick={next}>
                      {pick(c.next, lang)}
                      <span className="arrow">→</span>
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={submit} disabled={sending}>
                      {sending
                        ? (lang === "ar" ? "جاري الإرسال…" : lang === "fr" ? "Envoi…" : "Sending…")
                        : pick(c.submit, lang)}
                      {!sending && <span className="arrow">→</span>}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <AltContact lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactStepper({ step, steps, lang }) {
  return (
    <div className="flex items-center gap-3">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "grid h-7 w-7 place-items-center rounded-full font-mono text-[11px] transition-colors",
                i === step
                  ? "bg-accent text-accent-contrast"
                  : i < step
                  ? "border border-accent text-accent"
                  : "border border-line text-text-3"
              )}
            >
              {i < step ? "✓" : `0${i + 1}`}
            </span>
            <span
              className={cn(
                "text-xs uppercase tracking-wider transition-colors",
                i === step ? "text-text-1" : "text-text-3"
              )}
            >
              {pick(s, lang)}
            </span>
          </div>
          {i < steps.length - 1 && <span className="h-px flex-1 bg-line" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Field({ label, error, children, hint }) {
  return (
    <label className={cn("field", error && "has-error")}>
      <span className="field-label">{label}</span>
      {children}
      {error ? <span className="field-error">{error}</span> : hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  );
}

function Step1({ form, update, errors, lang, c }) {
  const phoneHint = { ar: "+971 5X XXX XXXX", en: "+971 5X XXX XXXX", fr: "+213 5XX XX XX XX" };
  return (
    <div className="flex flex-col gap-5">
      <div className="field-row">
        <Field label={pick(c.fields.name, lang)} error={errors.name}>
          <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder={lang === "ar" ? "محمد العتيبي" : lang === "fr" ? "Amine Ben Malek" : "Sarah Chen"} />
        </Field>
        <Field label={pick(c.fields.email, lang)} error={errors.email}>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" />
        </Field>
      </div>
      <Field label={pick(c.fields.phone, lang)} hint={pick(phoneHint, lang)}>
        <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder={pick(phoneHint, lang)} />
      </Field>
      <Field label={pick(c.fields.projectType, lang)} error={errors.projectType}>
        <div className="chip-group">
          {c.projectTypes.map((p) => {
            const active = form.projectType.includes(p.id);
            return (
              <button
                type="button"
                key={p.id}
                className={cn("chip", active && "is-active")}
                onClick={() => {
                  const cur = form.projectType;
                  update("projectType", active ? cur.filter((x) => x !== p.id) : [...cur, p.id]);
                }}
              >
                {pick(p, lang)}
                {active && <span>✓</span>}
              </button>
            );
          })}
        </div>
      </Field>
    </div>
  );
}

function Step2({ form, update, errors, lang, c }) {
  const budgets = ["< $1k", "$1k – $3k", "$3k – $8k"];
  return (
    <div className="flex flex-col gap-5">
      <Field label={pick(c.fields.budget, lang)} error={errors.budget}>
        <div className="chip-group">
          {budgets.map((b) => (
            <button type="button" key={b} className={cn("chip", form.budget === b && "is-active")} onClick={() => update("budget", b)}>
              {b}
            </button>
          ))}
        </div>
      </Field>
      <Field label={pick(c.fields.details, lang)} error={errors.details}>
        <textarea
          rows="6"
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          placeholder={lang === "ar" ? "صف المشروع، المستخدمين، الميزات الأساسيّة، التحدّيات…" : lang === "fr" ? "Décrivez le projet, utilisateurs, fonctionnalités clés, défis…" : "Describe the project, users, core features, challenges…"}
        />
      </Field>
    </div>
  );
}


function ContactSuccess({ lang, onReset }) {
  const c = CONTENT.contact;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="py-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 18 }}
        className="mx-auto grid h-16 w-16 place-items-center rounded-full"
        style={{ background: "var(--accent-soft)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M5 12l4 4 10-10" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <h3
        className="mt-8 font-display font-semibold tracking-[-0.025em] text-text-1"
        style={{ fontSize: "clamp(28px, 3vw, 36px)", lineHeight: 1.15 }}
      >
        {pick(c.success, lang)}
      </h3>
      <p className="mx-auto mt-4 max-w-[44ch] text-[16px] leading-[1.55] text-text-2">
        {pick(c.successSub, lang)}
      </p>
      <button className="btn-text mt-8" onClick={onReset}>
        {lang === "ar" ? "إرسال آخر" : lang === "fr" ? "Envoyer un autre" : "Send another"}
      </button>
    </motion.div>
  );
}

function AltContact({ lang }) {
  const a = CONTENT.agency;
  const head = { ar: "أو تواصل مباشرة", en: "Or reach us directly", fr: "Ou contactez-nous directement" };
  return (
    <div>
      <span className="micro">{pick(head, lang)}</span>
      <div className="mt-4 space-y-2">
        <AltRow icon="mail" label={a.email} sub={lang === "ar" ? "ردّ في ٤ ساعات" : lang === "fr" ? "Réponse en 4 h" : "4-hour reply"} href={`mailto:${a.email}`} onClick={() => track("email_click", { location: "contact_section" })} />
        <AltRow icon="wa" label="WhatsApp" sub={pick(a.phone, lang)} href={`https://wa.me/${a.whatsapp}`} onClick={() => track("whatsapp_click", { location: "contact_section" })} />
        <AltRow icon="phone" label={pick(a.phone, lang)} sub={lang === "ar" ? "السبت – الخميس · ٩ ص – ٧ م" : lang === "fr" ? "Sam – Jeu · 9h – 19h" : "Sat – Thu · 9am – 7pm"} href={`tel:${pick(a.phone, lang).replace(/\s/g, "")}`} onClick={() => track("phone_click", { location: "contact_section" })} />
        <AltRow icon="map" label={pick(a.location, lang)} sub={lang === "ar" ? "نلتقي وجهاً لوجه" : lang === "fr" ? "En personne" : "Meet in person"} />
      </div>
    </div>
  );
}

function AltRow({ icon, label, sub, href, onClick }) {
  const icons = {
    mail: <path d="M3 5h18v14H3z M3 7l9 7 9-7" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinejoin="round" />,
    wa: <path d="M16.003 3.2C8.94 3.2 3.205 8.935 3.202 15.998c-.001 2.257.589 4.46 1.71 6.405L3.2 28.8l6.55-1.72a12.788 12.788 0 0 0 6.249 1.59h.005c7.062 0 12.798-5.736 12.8-12.799.001-3.42-1.33-6.638-3.747-9.057a12.717 12.717 0 0 0-9.054-3.614Zm0 23.59h-.004a10.62 10.62 0 0 1-5.413-1.482l-.388-.23-4.027 1.057 1.075-3.93-.253-.402a10.605 10.605 0 0 1-1.626-5.665c.002-5.869 4.778-10.643 10.643-10.643a10.55 10.55 0 0 1 7.519 3.119 10.567 10.567 0 0 1 3.118 7.526c-.003 5.871-4.778 10.65-10.644 10.65Zm5.836-7.971c-.32-.16-1.892-.933-2.184-1.04-.293-.107-.506-.16-.72.16-.213.32-.825 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.592-1.894-1.78-2.214-.186-.32-.02-.493.141-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.736-.987-2.376-.26-.625-.524-.54-.72-.55-.187-.009-.4-.011-.613-.011a1.176 1.176 0 0 0-.853.4c-.293.32-1.12 1.094-1.12 2.668 0 1.575 1.146 3.097 1.306 3.31.16.213 2.256 3.443 5.466 4.83.764.33 1.36.527 1.825.674.766.244 1.464.21 2.015.127.615-.092 1.892-.773 2.16-1.52.266-.747.266-1.387.186-1.52-.08-.133-.293-.213-.613-.373Z" fill="currentColor" />,
    phone: <path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
    map: <><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" /></>,
  };
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onClick={onClick}
      className="group flex items-center gap-4 rounded-r-2 border border-line bg-bg-elev p-3.5 transition hover:border-line-strong"
      style={{ borderRadius: "var(--r-2)" }}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full transition-colors",
          icon === "wa" ? "text-white" : "text-text-2 group-hover:text-accent"
        )}
        style={{ background: icon === "wa" ? "#25D366" : "var(--bg-glass)" }}
      >
        <svg width="16" height="16" viewBox={icon === "wa" ? "0 0 32 32" : "0 0 24 24"}>{icons[icon]}</svg>
      </span>
      <div className="flex-1">
        <div className="text-sm text-text-1">{label}</div>
        <div className="caption">{sub}</div>
      </div>
      {href && (
        <span className="text-text-3 transition group-hover:text-accent">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </Tag>
  );
}

export { ContactSection };
