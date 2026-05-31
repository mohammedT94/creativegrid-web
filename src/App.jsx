import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav, MobileMenu } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { ServicesSection } from "./components/Services.jsx";
import { ProcessSection } from "./components/Process.jsx";
import { WorkSection, CaseDetail } from "./components/Work.jsx";
import { ContactSection } from "./components/Contact.jsx";
import {
  MetricsStrip,
  FAQ,
  Footer,
  FloatingActions,
} from "./components/Extras.jsx";

const SUPPORTED_LANGS = ["ar", "en", "fr"];

function readInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem("cg-lang");
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    const url = new URLSearchParams(window.location.search).get("lang");
    if (url && SUPPORTED_LANGS.includes(url)) return url;
  } catch {}
  return "en";
}

function App() {
  const [lang, setLang] = React.useState(readInitialLang);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [activeCase, setActiveCase] = React.useState(null);
  const [contactSignal, setContactSignal] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try { window.localStorage.setItem("cg-lang", lang); } catch {}
  }, [lang]);

  React.useEffect(() => {
    document.documentElement.dataset.theme = "light";
    try { window.localStorage.setItem("cg-theme", "light"); } catch {}
  }, []);

  React.useEffect(() => {
    const tm = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(tm);
  }, []);

  const openContact = () => setContactSignal((s) => s + 1);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="cg-loader"
          >
            <div className="cg-loader-bar" />
            <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-text-1">
              CreativeGrid
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <Nav
        lang={lang}
        onLangChange={setLang}
        onOpenContact={openContact}
        onOpenMobile={() => setMobileNavOpen(true)}
      />
      <main className="pt-[64px]">
        <Hero lang={lang} onOpenContact={openContact} />
        <WorkSection lang={lang} onOpenCase={setActiveCase} />
        <MetricsStrip lang={lang} />
        <ServicesSection lang={lang} />
        <ProcessSection lang={lang} />
        <FAQ lang={lang} />
        <ContactSection lang={lang} openSignal={contactSignal} />
      </main>
      <Footer lang={lang} onOpenContact={openContact} />

      <MobileMenu
        lang={lang}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onLangChange={setLang}
        onOpenContact={openContact}
      />
      <CaseDetail
        caseData={activeCase}
        lang={lang}
        onClose={() => setActiveCase(null)}
        onOpenContact={openContact}
      />
      <FloatingActions lang={lang} />
    </>
  );
}

export default App;
