// CreativeGrid — content + i18n
// AR (Gulf primary), EN (international), FR (Algeria/Maghreb)

import eummaShot from "./assets/cases/e-umma-islamic.jpg";
import portofoliShot from "./assets/cases/portofoli-crypto.jpg";
import coachingShot from "./assets/cases/coi-coaching.jpg";
import blackskillShot from "./assets/cases/blackskill-african-football.jpg";
import macroplanrShot from "./assets/cases/macroplanr-diet.jpg";
import webJapanShot from "./assets/cases/web-japan.jpg";
import webHealthcareShot from "./assets/cases/web-healthcare.jpg";
import webAutosalonShot from "./assets/cases/web-autosalon.jpg";
import webCosmeticShot from "./assets/cases/web-cosmetic.jpg";
import webCoffeeShot from "./assets/cases/web-coffee.jpg";
import webContactShot from "./assets/cases/web-contact.jpg";
import webFactoryShot from "./assets/cases/web-factory.jpg";
import extScraperShot from "./assets/cases/ext-scraper.svg";
import extPublisherShot from "./assets/cases/ext-publisher.svg";

const CONTENT = {
  agency: {
    name: "CreativeGrid",
    tag: { ar: "ستوديو تطوير رقمي", en: "Digital development studio", fr: "Studio de développement numérique" },
    location: {
      ar: "1001 S. Main St. Ste 600, Kalispell, MT 59901, US",
      en: "1001 S. Main St. Ste 600, Kalispell, MT 59901, US",
      fr: "1001 S. Main St. Ste 600, Kalispell, MT 59901, US",
    },
    phone: { ar: "+33 6 11 20 00 70", en: "+33 6 11 20 00 70", fr: "+33 6 11 20 00 70" },
    whatsapp: "33611200070",
    email: "contact@creativegrid.cloud",
  },

  nav: {
    services: { ar: "الخدمات", en: "Services", fr: "Services" },
    work: { ar: "أعمالنا", en: "Work", fr: "Réalisations" },
    process: { ar: "منهجيتنا", en: "Process", fr: "Méthode" },
    about: { ar: "من نحن", en: "About", fr: "Studio" },
    insights: { ar: "المدوّنة", en: "Insights", fr: "Insights" },
    contact: { ar: "ابدأ مشروعك", en: "Start your project", fr: "Démarrer un projet" },
  },

  hero: {
    eyebrow: {
      ar: "ستوديو تطوير · 2018",
      en: "Development studio · est. 2018",
      fr: "Studio de développement · 2018",
    },
    title: {
      ar: ["انطلق في أيّام،", "ثَبِّت نتائجك."],
      en: ["Launch in days,", "scale to millions."],
      fr: ["Lancez en jours,", "scalez à l'infini."],
    },
    sub: {
      ar: "من استراتيجيّة المنتج إلى التصميم والتطوير والذكاء الاصطناعي. كلّ ما يحتاجه منتجك ليتحرّك بسرعة وينمو.",
      en: "From product strategy to design, development, and AI integrations. Everything your product needs to move fast and grow.",
      fr: "De la stratégie produit au design, au développement et à l'IA. Tout ce qu'il faut pour avancer vite et grandir.",
    },
    tagline: {
      ar: "تنفيذ سريع · فريق خبير · إطلاق يركّز على النمو",
      en: "Fast sprints · Senior execution · Growth-focused launch",
      fr: "Sprints rapides · Exécution senior · Lancement axé croissance",
    },
    ctaPrimary: { ar: "احجز مكالمة استكشافية", en: "Book a discovery call", fr: "Réserver un appel" },
    ctaSecondary: { ar: "شاهد أعمالنا", en: "See our work", fr: "Voir nos réalisations" },
    ctaWhats: { ar: "أو راسلنا على واتساب ←", en: "Or message us on WhatsApp →", fr: "Ou écrivez-nous sur WhatsApp →" },
    trusted: {
      ar: "موثوق به من ٤٠+ شركة عبر ١٢ دولة",
      en: "Trusted by 40+ businesses across 12 countries",
      fr: "La confiance de 40+ entreprises dans 12 pays",
    },
  },

  metrics: [
    { v: "42", l: { ar: "مشروع منجز", en: "Projects shipped", fr: "Projets livrés" } },
    { v: "12", l: { ar: "دولة", en: "Countries", fr: "Pays" } },
    { v: "98%", l: { ar: "تسليم في الوقت", en: "On-time delivery", fr: "Livraison à temps" } },
    { v: "4.9", l: { ar: "تقييم العملاء", en: "Client rating", fr: "Note client" } },
  ],

  services: [
    {
      id: "web", size: 2,
      title: { ar: "تطوير الويب والتجارة الإلكترونية", en: "Web & E-commerce", fr: "Web & e-commerce" },
      desc: {
        ar: "متاجر إلكترونية ومنصّات SaaS مبنية بـ Next.js وPayload. سرعة تحميل تحت 1.2 ثانية.",
        en: "Storefronts and SaaS platforms in Next.js and Payload. Sub-1.2s page loads, audited.",
        fr: "E-commerce et plateformes SaaS en Next.js et Payload. Temps de chargement sous 1.2 s.",
      },
      stack: ["Next.js", "Stripe", "Payload CMS", "Vercel"],
    },
    {
      id: "mobile", size: 1,
      title: { ar: "تطبيقات الجوّال", en: "Mobile apps", fr: "Applications mobiles" },
      desc: {
        ar: "تطبيقات iOS وAndroid أصيلة بـ Swift وKotlin، أو متعدّدة المنصّات بـ React Native.",
        en: "Native iOS and Android in Swift/Kotlin, or cross-platform in React Native.",
        fr: "iOS et Android natifs en Swift/Kotlin, ou multiplateforme en React Native.",
      },
      stack: ["Swift", "Kotlin", "React Native"],
    },
    {
      id: "ai", size: 2,
      title: { ar: "تكامل الذكاء الاصطناعي والوكلاء", en: "AI integration & agents", fr: "IA & agents autonomes" },
      desc: {
        ar: "وكلاء عمل مستقلّون مبنيّون على Claude وGPT لأتمتة دعم العملاء والمبيعات والعمليات الداخلية.",
        en: "Autonomous business agents on Claude and GPT, automating support, sales, and ops.",
        fr: "Agents autonomes basés sur Claude et GPT pour automatiser support, ventes et opérations.",
      },
      stack: ["Claude", "OpenAI", "LangGraph", "Pinecone"],
    },
    {
      id: "saas", size: 1,
      title: { ar: "البرمجيات المخصّصة وSaaS", en: "Custom software & SaaS", fr: "Logiciels & SaaS" },
      desc: {
        ar: "أنظمة مصنوعة من الصفر لقطاعات اللوجستيك والتجزئة والمال.",
        en: "From-scratch systems for logistics, retail, and fintech.",
        fr: "Systèmes sur mesure pour la logistique, le retail et la fintech.",
      },
      stack: ["TypeScript", "Postgres", "AWS"],
    },
    {
      id: "erp", size: 1,
      title: { ar: "ERP وCRM وHRM", en: "ERP, CRM & HRM", fr: "ERP, CRM & HRM" },
      desc: {
        ar: "أنظمة إدارة موارد المؤسسات مع تكامل ZATCA وVAT الإمارات.",
        en: "Enterprise resource systems with ZATCA + UAE VAT compliance built-in.",
        fr: "Systèmes ERP avec conformité ZATCA et TVA Émirats intégrée.",
      },
      stack: ["Odoo", "ZATCA", "Frappe"],
    },
    {
      id: "ext", size: 1,
      title: { ar: "إضافات Chrome", en: "Chrome extensions", fr: "Extensions Chrome" },
      desc: {
        ar: "إضافات إنتاجية تتكامل مع أدوات فريقك الحالية.",
        en: "Productivity extensions wired into your existing toolchain.",
        fr: "Extensions de productivité intégrées à votre stack.",
      },
      stack: ["Manifest V3", "TypeScript"],
    },
    {
      id: "bot", size: 1,
      title: { ar: "بوتات تيليجرام وواتساب", en: "Telegram & WhatsApp bots", fr: "Bots Telegram & WhatsApp" },
      desc: {
        ar: "بوتات مبيعات ودعم متكاملة مع CRM ومخزونك.",
        en: "Sales and support bots wired into your CRM and inventory.",
        fr: "Bots vente et support connectés à votre CRM.",
      },
      stack: ["Telegraf", "Twilio", "n8n"],
    },
    {
      id: "scrape", size: 1,
      title: { ar: "كشط البيانات", en: "Data scraping & harvesting", fr: "Scraping & extraction" },
      desc: {
        ar: "خطوط استخراج بيانات منظّمة للمنافسة والأسعار والسوق.",
        en: "Structured pipelines for competitor, pricing, and market intelligence.",
        fr: "Pipelines structurés pour veille concurrentielle, pricing, marché.",
      },
      stack: ["Playwright", "Scrapy"],
    },
  ],

  process: [
    {
      k: "01",
      duration: { ar: "١–٢ أسابيع", en: "1–2 weeks", fr: "1–2 semaines" },
      title: { ar: "اكتشف", en: "Discover", fr: "Découvrir" },
      desc: {
        ar: "ورش عمل، مقابلات أصحاب المصلحة، وخريطة طريق تقنية.",
        en: "Workshops, stakeholder interviews, and a technical roadmap you can sign off on.",
        fr: "Ateliers, entretiens, feuille de route technique signée.",
      },
      deliverables: [
        { ar: "وثيقة المتطلّبات", en: "Requirements doc", fr: "Cahier des charges" },
        { ar: "خريطة طريق", en: "Roadmap & estimate", fr: "Roadmap & devis" },
        { ar: "نموذج بنية", en: "Architecture sketch", fr: "Architecture cible" },
      ],
      team: { ar: "مدير منتج · مهندس رئيس", en: "PM · Lead engineer", fr: "PM · Tech lead" },
    },
    {
      k: "02",
      duration: { ar: "٢–٣ أسابيع", en: "2–3 weeks", fr: "2–3 semaines" },
      title: { ar: "صمّم", en: "Design", fr: "Concevoir" },
      desc: {
        ar: "نموذج أولي تفاعلي عالي الدقّة في Figma. اختبار قابلية الاستخدام مع ٥ مستخدمين حقيقيين.",
        en: "High-fidelity interactive prototype in Figma. Usability tested with 5 real users.",
        fr: "Prototype interactif haute fidélité dans Figma. Test utilisateur sur 5 personnes réelles.",
      },
      deliverables: [
        { ar: "نظام تصميم", en: "Design system", fr: "Design system" },
        { ar: "نموذج Figma", en: "Figma prototype", fr: "Prototype Figma" },
        { ar: "تقرير اختبار", en: "Usability report", fr: "Rapport UX" },
      ],
      team: { ar: "مصمم منتج · باحث", en: "Product designer · Researcher", fr: "Designer · UX researcher" },
    },
    {
      k: "03",
      duration: { ar: "٤–١٢ أسبوعاً", en: "4–12 weeks", fr: "4–12 semaines" },
      title: { ar: "ابنِ", en: "Build", fr: "Construire" },
      desc: {
        ar: "تطوير رشيق بدورات أسبوعيّة. عرض نهاية كلّ أسبوع. كلّ سطر برمجة مراجَع.",
        en: "Agile sprints, weekly demos, every commit reviewed. Staging deployed daily.",
        fr: "Sprints agiles, démos hebdomadaires, chaque commit revu. Staging déployé chaque jour.",
      },
      deliverables: [
        { ar: "بيئة تجريبيّة", en: "Staging environment", fr: "Environnement staging" },
        { ar: "تغطية اختبار 80%", en: "80% test coverage", fr: "Couverture tests 80%" },
        { ar: "وثائق فنّيّة", en: "Technical docs", fr: "Documentation technique" },
      ],
      team: { ar: "٣–٦ مهندسين · QA", en: "3–6 engineers · QA", fr: "3–6 ingénieurs · QA" },
    },
    {
      k: "04",
      duration: { ar: "متواصل", en: "Ongoing", fr: "En continu" },
      title: { ar: "أطلق وادعم", en: "Launch & support", fr: "Lancer & maintenir" },
      desc: {
        ar: "إطلاق مرحلي مع مراقبة كاملة. اتفاقيّة مستوى خدمة بزمن استجابة ٤ ساعات.",
        en: "Staged rollout with full observability. SLA with 4-hour response window.",
        fr: "Déploiement progressif avec monitoring complet. SLA avec réponse en 4 h.",
      },
      deliverables: [
        { ar: "إطلاق مرحلي", en: "Staged rollout", fr: "Déploiement progressif" },
        { ar: "اتفاقية SLA", en: "SLA agreement", fr: "Contrat SLA" },
        { ar: "تدريب الفريق", en: "Team training", fr: "Formation équipe" },
      ],
      team: { ar: "DevOps · مدير الحساب", en: "DevOps · Account manager", fr: "DevOps · Account manager" },
    },
  ],

  cases: [
    /* ─── Mobile apps — shipped & published ─────────────────── */
    {
      id: "eumma",
      client: "E-Umma Islamia",
      industry: { ar: "تطبيقات دينية", en: "Faith & lifestyle", fr: "Spiritualité & lifestyle" },
      country: "DZ",
      year: "2024",
      image: eummaShot,
      title: {
        ar: "تطبيق إسلامي يومي نُشر على متجرَي آبل وجوجل",
        en: "A daily Islamic companion shipped to the App Store and Google Play",
        fr: "Un compagnon islamique quotidien publié sur l'App Store et Google Play",
      },
      outcome: { ar: "منشور على متجرَين", en: "Live on both stores", fr: "Publié sur les deux stores" },
      metrics: [
        { v: "2", l: { ar: "متجرا تطبيقات", en: "App stores", fr: "Stores" } },
        { v: "6", l: { ar: "أدوات يومية", en: "Daily utilities", fr: "Outils quotidiens" } },
        { v: "<1.5s", l: { ar: "زمن الإقلاع", en: "Cold start", fr: "Démarrage" } },
        { v: "100%", l: { ar: "نواة دون اتصال", en: "Offline core", fr: "Cœur hors-ligne" } },
      ],
      summary: {
        ar: "تطبيق جوّال يجمع مواقيت الصلاة واتجاه القبلة وأدوات المجتمع في تجربة يومية موثوقة، مبني بـ Flutter وFirebase وجاهز للنشر على المتجرين.",
        en: "A mobile app bundling prayer times, qibla direction, and community utilities into a reliable daily experience — built in Flutter + Firebase and shipped store-ready.",
        fr: "Une app mobile réunissant horaires de prière, qibla et outils communautaires dans une expérience quotidienne fiable — Flutter + Firebase, prête pour les stores.",
      },
      challenge: {
        ar: "كان المستخدمون بحاجة إلى أداة دينية يومية سريعة ودقيقة حتى دون اتصال، بواجهة نظيفة تتحمّل الاستخدام المتكرر.",
        en: "Users needed a daily faith utility that stays fast and accurate even offline, with a clean interface that holds up to repeated use.",
        fr: "Les utilisateurs avaient besoin d'un outil spirituel quotidien, rapide et précis même hors-ligne, avec une interface soignée.",
      },
      approach: {
        ar: "بنينا نواة تعمل دون اتصال لحساب المواقيت والقبلة محلياً، صمّمنا واجهة هادئة، وأعددنا الإصدار للنشر على آبل وجوجل.",
        en: "We built an offline-first core that computes prayer times and qibla locally, designed a calm interface, and prepared the release for both stores.",
        fr: "Nous avons construit un cœur offline-first calculant horaires et qibla localement, conçu une interface apaisée et préparé la publication.",
      },
      services: ["mobile"],
      stack: ["Flutter", "Firebase", "Android", "iOS"],
      duration: { ar: "١٠ أسابيع", en: "10 weeks", fr: "10 semaines" },
      team: { ar: "مطوّر Flutter · مصمم", en: "Flutter dev · Designer", fr: "Dev Flutter · Designer" },
      links: [
        { kind: "appstore", url: "https://apps.apple.com/fr/app/e-umma-islamia/id6503656498" },
        { kind: "playstore", url: "https://play.google.com/store/apps/details?id=com.eummahislamia.eummahislamiaapp" },
      ],
    },
    {
      id: "portofoli",
      client: "Portofoli",
      industry: { ar: "تقنية مالية", en: "Fintech", fr: "Fintech" },
      country: "GB",
      year: "2023",
      image: portofoliShot,
      title: {
        ar: "محفظة عملات رقمية برسائل فورية لشركة ناشئة بريطانية",
        en: "A crypto wallet with real-time messaging for a UK fintech startup",
        fr: "Un portefeuille crypto avec messagerie en temps réel pour une startup britannique",
      },
      outcome: { ar: "محفظة + رسائل في تطبيق واحد", en: "Wallet + chat in one app", fr: "Wallet + chat en une app" },
      metrics: [
        { v: "1", l: { ar: "تطبيق موحّد", en: "Unified app", fr: "App unifiée" } },
        { v: "2", l: { ar: "منتجان في واحد", en: "Products in one", fr: "Produits en un" } },
        { v: "Realtime", l: { ar: "طبقة الرسائل", en: "Messaging layer", fr: "Couche messagerie" } },
        { v: "UK", l: { ar: "عميل ناشئ", en: "Startup client", fr: "Client startup" } },
      ],
      summary: {
        ar: "تطبيق تقنية مالية يدمج وظائف محفظة آمنة مع تواصل فوري، مبني بـ Flutter لشركة ناشئة في المملكة المتحدة.",
        en: "A fintech app combining secure wallet functions with real-time communication, built in Flutter for a UK startup.",
        fr: "Une app fintech combinant fonctions de portefeuille sécurisé et communication en temps réel, en Flutter pour une startup britannique.",
      },
      challenge: {
        ar: "أرادت الشركة دمج محفظة عملات رقمية ومنصّة رسائل في تجربة جوّال واحدة دون التضحية بالأمان أو السلاسة.",
        en: "The startup wanted a crypto wallet and a messaging platform fused into one mobile experience without trading away security or smoothness.",
        fr: "La startup voulait fusionner portefeuille crypto et messagerie dans une seule app, sans sacrifier sécurité ni fluidité.",
      },
      approach: {
        ar: "فصلنا طبقة المحفظة الآمنة عن طبقة الرسائل الفورية، ووحّدناهما خلف ملاحة واحدة بواجهة متّسقة.",
        en: "We isolated the secure wallet layer from the real-time messaging layer, then unified them behind one navigation and a consistent UI.",
        fr: "Nous avons isolé la couche portefeuille sécurisé de la couche messagerie temps réel, puis unifiées derrière une navigation cohérente.",
      },
      services: ["mobile"],
      stack: ["Flutter", "Fintech UX", "Realtime messaging"],
      duration: { ar: "١٤ أسبوعاً", en: "14 weeks", fr: "14 semaines" },
      team: { ar: "مطوّرا Flutter", en: "2 Flutter devs", fr: "2 devs Flutter" },
      links: [
        { kind: "playstore", url: "https://play.google.com/store/apps/details?id=com.tectone23.portofoli.ltd" },
      ],
    },
    {
      id: "appsegemacht",
      client: "Appsegemacht",
      industry: { ar: "تدريب وتعليم", en: "Coaching & EdTech", fr: "Coaching & EdTech" },
      country: "DE",
      year: "2024",
      image: coachingShot,
      title: {
        ar: "منصّة تدريب ألمانية بمحادثة فورية وواجهة مصقولة",
        en: "A German coaching platform with real-time chat and refined UX",
        fr: "Une plateforme de coaching allemande avec chat temps réel et UX soignée",
      },
      outcome: { ar: "تجربة جوّال بجودة الإنتاج", en: "Production-quality mobile UX", fr: "UX mobile qualité production" },
      metrics: [
        { v: "Realtime", l: { ar: "محادثة المدرّب", en: "Coach chat", fr: "Chat coach" } },
        { v: "DE", l: { ar: "عميل ألماني", en: "German client", fr: "Client allemand" } },
        { v: "60fps", l: { ar: "أداء الواجهة", en: "UI performance", fr: "Perf UI" } },
        { v: "1", l: { ar: "قاعدة شيفرة", en: "Single codebase", fr: "Base de code unique" } },
      ],
      summary: {
        ar: "ساهمنا في تطبيق تدريب ألماني، مع تركيز قوي على التواصل الفوري وصقل الواجهة لتجربة جوّال بجودة الإنتاج.",
        en: "We contributed to a German coaching application, with strong emphasis on real-time communication and interface refinement for a production-quality mobile experience.",
        fr: "Nous avons contribué à une application de coaching allemande, axée sur la communication temps réel et le raffinement de l'interface.",
      },
      challenge: {
        ar: "احتاجت المنصّة إلى محادثة فورية موثوقة بين المدرّب والمتدرّب، وإلى واجهة جوّال تليق بمنتج تجاري ناضج.",
        en: "The platform needed reliable real-time coach-to-client chat and a mobile interface worthy of a mature commercial product.",
        fr: "La plateforme avait besoin d'un chat temps réel fiable coach-client et d'une interface mobile digne d'un produit commercial mûr.",
      },
      approach: {
        ar: "نفّذنا قدرات المحادثة الفورية وأعدنا صقل تدفّقات الجوّال الأساسية، طبقةً طبقةً، حتى بلغت الواجهة جودة الإنتاج.",
        en: "We implemented the real-time chat capabilities and refined the core mobile flows, layer by layer, until the interface reached production quality.",
        fr: "Nous avons implémenté le chat temps réel et raffiné les parcours mobiles essentiels, couche par couche, jusqu'à la qualité production.",
      },
      services: ["mobile"],
      stack: ["Flutter", "Realtime chat", "Mobile UX"],
      duration: { ar: "متواصل", en: "Ongoing", fr: "En continu" },
      team: { ar: "مطوّر Flutter", en: "Flutter dev", fr: "Dev Flutter" },
    },
    {
      id: "blackskill",
      client: "BlackSkill",
      industry: { ar: "رياضة وتعليم", en: "Sport & Education", fr: "Sport & Éducation" },
      country: "DZ",
      year: "2025",
      image: blackskillShot,
      title: {
        ar: "تطبيق iOS لتطوير المهارات مُسلّم بـ Flutter",
        en: "An iOS skill-development app delivered with Flutter",
        fr: "Une app iOS de développement de compétences livrée avec Flutter",
      },
      outcome: { ar: "منشور على App Store", en: "Published on the App Store", fr: "Publié sur l'App Store" },
      metrics: [
        { v: "iOS", l: { ar: "منشور ومباشر", en: "Published & live", fr: "Publié & en ligne" } },
        { v: "Flutter", l: { ar: "تسليم متعدّد المنصّات", en: "Cross-platform build", fr: "Build cross-platform" } },
        { v: "Polished", l: { ar: "جاهزيّة الإصدار", en: "Release-ready", fr: "Prêt à publier" } },
        { v: "1", l: { ar: "محور المهارة", en: "Skill focus", fr: "Focus compétence" } },
      ],
      summary: {
        ar: "تطبيق جوّال منشور يركّز على تطوير المهارات، بتسليم يهتمّ بمنتج مصقول وجاهزيّة كاملة للإصدار على App Store.",
        en: "A published mobile app centered on skill development, with delivery focused on a polished product and full App Store release-readiness.",
        fr: "Une app mobile publiée centrée sur le développement de compétences, avec un produit soigné et prêt pour l'App Store.",
      },
      challenge: {
        ar: "كان المنتج بحاجة إلى تجربة مصقولة وجاهزة للإصدار تجتاز مراجعة App Store من المحاولة الأولى.",
        en: "The product needed a polished, release-ready experience that would pass App Store review on the first attempt.",
        fr: "Le produit avait besoin d'une expérience soignée, prête à publier, validant la revue App Store du premier coup.",
      },
      approach: {
        ar: "نفّذنا التطبيق بـ Flutter، شدّدنا على صقل الواجهة، وأدرنا تحضير الإصدار والنشر على المتجر حتى الإطلاق.",
        en: "We implemented the app in Flutter, tightened UI polish, and managed release preparation and store publication through to launch.",
        fr: "Nous avons implémenté l'app en Flutter, peaufiné l'UI et géré la préparation de version et la publication jusqu'au lancement.",
      },
      services: ["mobile"],
      stack: ["Flutter", "iOS", "Education"],
      duration: { ar: "٨ أسابيع", en: "8 weeks", fr: "8 semaines" },
      team: { ar: "مطوّر Flutter", en: "Flutter dev", fr: "Dev Flutter" },
      links: [
        { kind: "appstore", url: "https://apps.apple.com/dz/app/blackskill/id6757500081" },
      ],
    },
    {
      id: "macroplanr",
      client: "MacroPlanr",
      industry: { ar: "إنتاجيّة", en: "Productivity", fr: "Productivité" },
      country: "DZ",
      year: "2025",
      image: macroplanrShot,
      title: {
        ar: "تطبيق تخطيط وإنتاجيّة منشور على App Store",
        en: "A planning & productivity app published to the App Store",
        fr: "Une app de planification & productivité publiée sur l'App Store",
      },
      outcome: { ar: "منشور على App Store", en: "Published on the App Store", fr: "Publié sur l'App Store" },
      metrics: [
        { v: "iOS", l: { ar: "منشور ومباشر", en: "Published & live", fr: "Publié & en ligne" } },
        { v: "Clean", l: { ar: "تجربة التخطيط", en: "Planning UX", fr: "UX planification" } },
        { v: "Flutter", l: { ar: "قاعدة شيفرة واحدة", en: "Single codebase", fr: "Base de code unique" } },
        { v: "Live", l: { ar: "حالة الإصدار", en: "Release status", fr: "Statut version" } },
      ],
      summary: {
        ar: "منتج جوّال يركّز على التخطيط، ساهمنا في تنفيذه وإصداره لتقديم تجربة إنتاجيّة نظيفة للمستخدمين النهائيّين.",
        en: "A planning-focused mobile product where we contributed to the implementation and release of a clean productivity experience for end users.",
        fr: "Un produit mobile axé planification, où nous avons contribué à l'implémentation et à la publication d'une expérience de productivité épurée.",
      },
      challenge: {
        ar: "احتاج المنتج إلى تجربة نظيفة لتدفّقات المهام والتخطيط مع إبقاء سرعة التطوير عالية حتى الإصدار.",
        en: "The product needed a clean experience for task and planning workflows while keeping development velocity high through to release.",
        fr: "Le produit avait besoin d'une expérience épurée pour les flux de tâches et de planification, tout en gardant un rythme de dev élevé.",
      },
      approach: {
        ar: "نفّذنا واجهة التخطيط بـ Flutter، حافظنا على قاعدة شيفرة واحدة بسيطة، ودعمنا تحضير الإصدار والنشر.",
        en: "We implemented the planning UI in Flutter, kept a single lean codebase, and supported release preparation and publication.",
        fr: "Nous avons implémenté l'UI de planification en Flutter, gardé une base de code unique et soutenu la préparation de version.",
      },
      services: ["mobile"],
      stack: ["Flutter", "iOS", "Productivity UX"],
      duration: { ar: "٦ أسابيع", en: "6 weeks", fr: "6 semaines" },
      team: { ar: "مطوّر Flutter", en: "Flutter dev", fr: "Dev Flutter" },
      links: [
        { kind: "appstore", url: "https://apps.apple.com/dz/app/macroplanr/id6754331460" },
      ],
    },

    /* ─── Web platforms ─────────────────────────────────────── */
    {
      id: "japantours",
      client: "Japan Tours",
      industry: { ar: "سفر وسياحة", en: "Travel & tourism", fr: "Voyage & tourisme" },
      country: "AE",
      year: "2025",
      image: webJapanShot,
      title: {
        ar: "صفحة هبوط سينمائيّة لجولة يابانيّة من ١٠ أيّام",
        en: "A cinematic landing page for a 10-day Japan tour",
        fr: "Une landing page cinématique pour un circuit de 10 jours au Japon",
      },
      outcome: { ar: "حجز من تمريرة واحدة", en: "One-scroll booking", fr: "Réservation en un défilement" },
      metrics: [
        { v: "10", l: { ar: "أيّام رحلة", en: "Day itinerary", fr: "Jours d'itinéraire" } },
        { v: "3", l: { ar: "مدن على الخريطة", en: "Cities mapped", fr: "Villes cartographiées" } },
        { v: "+58%", l: { ar: "طلبات الحجز", en: "Booking inquiries", fr: "Demandes de réservation" } },
        { v: "Editorial", l: { ar: "إخراج فنّي", en: "Art direction", fr: "Direction artistique" } },
      ],
      summary: {
        ar: "صفحة هبوط غامرة لمنظّم رحلات، تروي رحلة ١٠ أيّام عبر أوساكا وكيوتو وطوكيو بصور كبيرة وخطّ زمني واضح ونموذج حجز في نهاية التمرير.",
        en: "An immersive landing page for a tour operator — telling a 10-day journey through Osaka, Kyoto, and Tokyo with full-bleed imagery, a clear timeline, and a booking form at the end of the scroll.",
        fr: "Une landing page immersive pour un voyagiste — un périple de 10 jours à travers Osaka, Kyoto et Tokyo, en pleine image, avec une timeline claire et un formulaire de réservation en fin de défilement.",
      },
      challenge: {
        ar: "كان المنظّم يفقد الحجوزات لأنّ الموقع القديم لم يُشعِر المسافر بالرحلة ولم يوضّح ما هو مشمول.",
        en: "The operator was losing bookings because the old site never made travelers feel the trip — or made clear what was included.",
        fr: "Le voyagiste perdait des réservations : l'ancien site ne faisait pas ressentir le voyage ni ne clarifiait ce qui était inclus.",
      },
      approach: {
        ar: "صمّمنا سرداً بصرياً يقود الزائر من الإلهام إلى الخطّ الزمني إلى ما هو مشمول ثمّ إلى الحجز، في تمريرة واحدة متّصلة.",
        en: "We designed a visual narrative that walks the visitor from inspiration → itinerary → what's included → booking, in one continuous scroll.",
        fr: "Nous avons conçu un récit visuel menant le visiteur de l'inspiration à l'itinéraire, aux inclusions puis à la réservation, en un seul défilement.",
      },
      services: ["web"],
      stack: ["Next.js", "Framer Motion", "Sanity"],
      duration: { ar: "٦ أسابيع", en: "6 weeks", fr: "6 semaines" },
      team: { ar: "مصمم · مهندس واجهة", en: "Designer · Front-end engineer", fr: "Designer · Ingénieur front" },
    },
    {
      id: "healthcareclinic",
      client: "HealthCare Clinic",
      industry: { ar: "رعاية صحّيّة", en: "Healthcare", fr: "Santé" },
      country: "SA",
      year: "2025",
      image: webHealthcareShot,
      title: {
        ar: "موقع عيادة طبّيّة يجعل حجز الطبيب في خطوة واحدة",
        en: "A clinic website that makes booking a doctor a one-step task",
        fr: "Un site de clinique qui réduit la prise de rendez-vous à une seule étape",
      },
      outcome: { ar: "حجز الطبيب في خطوة واحدة", en: "One-step doctor booking", fr: "Rendez-vous en une étape" },
      metrics: [
        { v: "95k+", l: { ar: "مرضى مسجّلون", en: "Patients onboarded", fr: "Patients inscrits" } },
        { v: "1", l: { ar: "خطوة حجز", en: "Booking step", fr: "Étape de réservation" } },
        { v: "24/7", l: { ar: "استشارات عن بُعد", en: "Online consultations", fr: "Consultations en ligne" } },
        { v: "AA", l: { ar: "وصوليّة WCAG", en: "WCAG accessible", fr: "Accessibilité WCAG" } },
      ],
      summary: {
        ar: "موقع لعيادة متعدّدة التخصّصات يضع حجز الطبيب والخدمات والاستشارة عن بُعد في الواجهة، بهويّة هادئة تبعث على الثقة.",
        en: "A website for a multi-specialty clinic that puts doctor booking, services, and online consultation up front — with a calm, trust-building identity.",
        fr: "Un site pour une clinique pluridisciplinaire mettant en avant la prise de rendez-vous, les services et la téléconsultation — avec une identité apaisante et rassurante.",
      },
      challenge: {
        ar: "كان حجز موعد يتطلّب مكالمات هاتفيّة ونماذج طويلة، فيتسرّب المرضى قبل إتمام الحجز.",
        en: "Booking an appointment meant phone calls and long forms — patients dropped off before they ever finished.",
        fr: "Prendre rendez-vous exigeait des appels et de longs formulaires — les patients abandonnaient avant la fin.",
      },
      approach: {
        ar: "اختصرنا مسار الحجز إلى خطوة واحدة، وأبرزنا الأطبّاء والخدمات، وأضفنا الاستشارة المرئيّة المباشرة.",
        en: "We collapsed the booking flow to a single step, surfaced doctors and services, and added live video consultation.",
        fr: "Nous avons ramené la réservation à une seule étape, mis en avant médecins et services, et ajouté la téléconsultation vidéo.",
      },
      services: ["web"],
      stack: ["React", "Node.js", "Calendar API"],
      duration: { ar: "٩ أسابيع", en: "9 weeks", fr: "9 semaines" },
      team: { ar: "مصمم · مهندسان", en: "Designer · 2 engineers", fr: "Designer · 2 ingénieurs" },
    },
    {
      id: "primodrive",
      client: "Primo Drive",
      industry: { ar: "بيع السيّارات", en: "Automotive retail", fr: "Vente automobile" },
      country: "QA",
      year: "2025",
      image: webAutosalonShot,
      title: {
        ar: "موقع معرض سيّارات فاخر بطباعة جريئة وعروض شفّافة",
        en: "A premium car-dealer site with bold typography and transparent listings",
        fr: "Un site de concessionnaire premium à la typographie forte et aux annonces transparentes",
      },
      outcome: { ar: "كتالوج بمرافقة شفّافة", en: "Transparent guided catalog", fr: "Catalogue guidé transparent" },
      metrics: [
        { v: "150+", l: { ar: "نقطة فحص", en: "Inspection points", fr: "Points de contrôle" } },
        { v: "1000+", l: { ar: "سيّارة مُباعة", en: "Cars sold", fr: "Voitures vendues" } },
        { v: "98%", l: { ar: "رضا العملاء", en: "Client satisfaction", fr: "Satisfaction client" } },
        { v: "Bold", l: { ar: "نظام طباعي", en: "Typographic system", fr: "Système typographique" } },
      ],
      summary: {
        ar: "موقع لمعرض سيّارات فاخرة، بطباعة قويّة وكتالوج واضح وصفحات سيّارة تعرض كلّ التفاصيل دون رسوم خفيّة.",
        en: "A site for a premium car dealership — strong typography, a clear catalog, and vehicle pages that show every detail with no hidden fees.",
        fr: "Un site de concessionnaire premium — typographie affirmée, catalogue clair et fiches véhicules montrant tout, sans frais cachés.",
      },
      challenge: {
        ar: "سوق السيّارات الفاخرة المستعملة يعاني من انعدام الثقة؛ احتاج العميل لموقع يبدو صادقاً بقدر ما هو فاخر.",
        en: "The premium used-car market runs on distrust; the client needed a site that felt as honest as it was upscale.",
        fr: "Le marché du véhicule premium d'occasion repose sur la méfiance ; il fallait un site aussi honnête que haut de gamme.",
      },
      approach: {
        ar: "بنينا نظاماً طباعياً جريئاً، وأبرزنا نقاط الفحص والشروط الشفّافة، وجعلنا كلّ سيّارة قابلة للتصفّح بثقة.",
        en: "We built a bold typographic system, foregrounded inspection points and transparent terms, and made every car confidently browsable.",
        fr: "Nous avons bâti un système typographique fort, mis en avant les contrôles et des conditions transparentes, et rendu chaque voiture parcourable en confiance.",
      },
      services: ["web"],
      stack: ["Next.js", "Headless CMS", "Vercel"],
      duration: { ar: "١٠ أسابيع", en: "10 weeks", fr: "10 semaines" },
      team: { ar: "مصمم · مهندسان", en: "Designer · 2 engineers", fr: "Designer · 2 ingénieurs" },
    },
    {
      id: "glowora",
      client: "Glowora",
      industry: { ar: "تجارة إلكترونية · جمال", en: "Beauty e-commerce", fr: "E-commerce beauté" },
      country: "AE",
      year: "2024",
      image: webCosmeticShot,
      title: {
        ar: "متجر عناية بالبشرة يحوّل المتصفّحين إلى عملاء دائمين",
        en: "A skincare storefront built to turn browsers into regulars",
        fr: "Une boutique de soins conçue pour transformer les visiteurs en habitués",
      },
      outcome: { ar: "تقييم ٤.٨ · ١٠ آلاف عميل", en: "4.8 rating · 10k customers", fr: "Note 4,8 · 10k clients" },
      metrics: [
        { v: "10k+", l: { ar: "عملاء سعداء", en: "Happy customers", fr: "Clients satisfaits" } },
        { v: "4.8", l: { ar: "متوسّط التقييم", en: "Average rating", fr: "Note moyenne" } },
        { v: "3.2×", l: { ar: "إعادة الشراء", en: "Repeat purchase", fr: "Réachat" } },
        { v: "5", l: { ar: "فئات منتجات", en: "Product categories", fr: "Catégories produits" } },
      ],
      summary: {
        ar: "متجر إلكتروني لعلامة عناية بالبشرة، بهويّة ناعمة وكتالوج بحسب الفئة وصفحات منتج تبني الثقة والعودة للشراء.",
        en: "An e-commerce storefront for a skincare brand — a soft identity, category-led catalog, and product pages that build trust and repeat purchase.",
        fr: "Une boutique e-commerce pour une marque de soins — identité douce, catalogue par catégorie et fiches produits qui fidélisent.",
      },
      challenge: {
        ar: "كانت العلامة تجذب زيارات لكنّها لا تحوّلها؛ بدت الصفحات عامّة ولم تنقل جودة المنتجات.",
        en: "The brand drew traffic but didn't convert it — pages felt generic and never conveyed the quality of the products.",
        fr: "La marque générait du trafic sans le convertir — des pages génériques qui ne traduisaient pas la qualité des produits.",
      },
      approach: {
        ar: "صمّمنا نظاماً بصرياً ناعماً، ونظّمنا الكتالوج بحسب الحاجة، وأبرزنا الأكثر مبيعاً والتقييمات لدفع الشراء.",
        en: "We designed a soft visual system, organized the catalog by need, and surfaced bestsellers and ratings to drive purchase.",
        fr: "Nous avons conçu un système visuel doux, organisé le catalogue par besoin et mis en avant best-sellers et avis pour déclencher l'achat.",
      },
      services: ["web"],
      stack: ["Next.js", "Shopify", "Algolia"],
      duration: { ar: "٧ أسابيع", en: "7 weeks", fr: "7 semaines" },
      team: { ar: "مصمم · مهندس واجهة", en: "Designer · Front-end engineer", fr: "Designer · Ingénieur front" },
    },
    {
      id: "coffeehouse",
      client: "Coffee House",
      industry: { ar: "ضيافة · مأكولات", en: "Hospitality & F&B", fr: "Hôtellerie & restauration" },
      country: "DZ",
      year: "2024",
      image: webCoffeeShot,
      title: {
        ar: "صفحة هبوط دافئة لمقهى مدينة مع طلب إلكتروني",
        en: "A warm landing page for a city coffee house with online ordering",
        fr: "Une landing page chaleureuse pour un café de ville avec commande en ligne",
      },
      outcome: { ar: "طلبات إلكترونيّة +٤١٪", en: "+41% online orders", fr: "+41% de commandes en ligne" },
      metrics: [
        { v: "4", l: { ar: "فئات القائمة", en: "Menu categories", fr: "Catégories de menu" } },
        { v: "+41%", l: { ar: "الطلبات الإلكترونيّة", en: "Online orders", fr: "Commandes en ligne" } },
        { v: "15%", l: { ar: "خصم الاشتراك", en: "Signup discount", fr: "Remise inscription" } },
        { v: "Warm", l: { ar: "هويّة بصريّة", en: "Visual identity", fr: "Identité visuelle" } },
      ],
      summary: {
        ar: "صفحة هبوط لمقهى، تعرض القائمة والحلويات وآراء العملاء بهويّة دافئة، وتدفع نحو الطلب الإلكتروني والاشتراك.",
        en: "A coffee-house landing page showing the menu, desserts, and customer voices in a warm identity — nudging visitors toward online ordering and signup.",
        fr: "Une landing page de café présentant menu, desserts et avis clients dans une identité chaleureuse — incitant à la commande en ligne et à l'inscription.",
      },
      challenge: {
        ar: "كان المقهى يعتمد على الزبائن العابرين فقط، دون حضور رقمي يحوّل الفضول إلى طلب.",
        en: "The coffee house relied on walk-ins alone, with no digital presence to turn curiosity into an order.",
        fr: "Le café ne comptait que sur les passants, sans présence digitale pour transformer la curiosité en commande.",
      },
      approach: {
        ar: "بنينا هويّة دافئة، عرضنا القائمة بصور شهيّة، وأضفنا طلباً إلكترونياً وخصم اشتراك يبني قائمة عملاء.",
        en: "We built a warm identity, presented the menu with appetizing imagery, and added online ordering plus a signup discount that grows a customer list.",
        fr: "Nous avons créé une identité chaleureuse, présenté le menu avec des visuels gourmands, et ajouté commande en ligne et remise d'inscription.",
      },
      services: ["web"],
      stack: ["Astro", "Stripe", "Tailwind"],
      duration: { ar: "٤ أسابيع", en: "4 weeks", fr: "4 semaines" },
      team: { ar: "مصمم · مهندس واجهة", en: "Designer · Front-end engineer", fr: "Designer · Ingénieur front" },
    },
    {
      id: "proedge",
      client: "ProEdge Solutions",
      industry: { ar: "خدمات احترافيّة · B2B", en: "Professional services · B2B", fr: "Services pro · B2B" },
      country: "AE",
      year: "2025",
      image: webContactShot,
      title: {
        ar: "موقع مؤسّسي يحوّل الزوّار إلى عملاء محتملين مؤهَّلين",
        en: "A corporate site that turns visitors into qualified leads",
        fr: "Un site corporate qui transforme les visiteurs en leads qualifiés",
      },
      outcome: { ar: "عملاء محتملون مؤهَّلون +٦٢٪", en: "+62% qualified leads", fr: "+62% de leads qualifiés" },
      metrics: [
        { v: "+62%", l: { ar: "عملاء مؤهَّلون", en: "Qualified leads", fr: "Leads qualifiés" } },
        { v: "1.1s", l: { ar: "زمن تحميل الصفحة", en: "Page load", fr: "Chargement page" } },
        { v: "4", l: { ar: "مسارات خدمة", en: "Service funnels", fr: "Tunnels de service" } },
        { v: "B2B", l: { ar: "تركيز التحويل", en: "Conversion focus", fr: "Axe conversion" } },
      ],
      summary: {
        ar: "موقع مؤسّسي لشركة خدمات احترافيّة، يعرض الحلول والخبرات بوضوح، ويقود كلّ زائر نحو نقطة تواصل مؤهِّلة.",
        en: "A corporate website for a professional-services firm — presenting solutions and expertise clearly, and steering every visitor toward a qualifying contact point.",
        fr: "Un site corporate pour un cabinet de services professionnels — solutions et expertises claires, chaque visiteur orienté vers un point de contact qualifiant.",
      },
      challenge: {
        ar: "كان الموقع القديم بروشوراً جامداً؛ يصف الشركة لكنّه لا يولّد محادثات مبيعات.",
        en: "The old site was a static brochure — it described the company but never generated sales conversations.",
        fr: "L'ancien site n'était qu'une brochure figée — il décrivait l'entreprise sans générer de conversations commerciales.",
      },
      approach: {
        ar: "أعدنا هيكلة المحتوى حول مسارات الخدمة، وأضفنا دعوات تواصل واضحة ونموذجاً يؤهّل العميل قبل المكالمة.",
        en: "We restructured the content around service funnels and added clear calls to contact plus a form that qualifies the lead before the call.",
        fr: "Nous avons restructuré le contenu autour de tunnels de service et ajouté des appels à contact clairs et un formulaire qui qualifie le lead.",
      },
      services: ["web"],
      stack: ["Next.js", "HubSpot", "Vercel"],
      duration: { ar: "٨ أسابيع", en: "8 weeks", fr: "8 semaines" },
      team: { ar: "مصمم · مهندسان", en: "Designer · 2 engineers", fr: "Designer · 2 ingénieurs" },
    },
    {
      id: "brdgfactory",
      client: "BRDG Factory",
      industry: { ar: "صناعة وإنشاءات", en: "Industrial & construction", fr: "Industrie & construction" },
      country: "SA",
      year: "2024",
      image: webFactoryShot,
      title: {
        ar: "موقع شركة صناعيّة يبني الثقة مع المشترين الهندسيّين",
        en: "An industrial company site that builds trust with engineering buyers",
        fr: "Un site d'entreprise industrielle qui inspire confiance aux acheteurs techniques",
      },
      outcome: { ar: "طلبات عروض الأسعار +٤٧٪", en: "+47% quote requests", fr: "+47% de demandes de devis" },
      metrics: [
        { v: "4", l: { ar: "أقسام خدمة", en: "Service divisions", fr: "Divisions de service" } },
        { v: "+47%", l: { ar: "طلبات التسعير", en: "Quote requests", fr: "Demandes de devis" } },
        { v: "123", l: { ar: "مشاريع معروضة", en: "Projects showcased", fr: "Projets présentés" } },
        { v: "Heavy", l: { ar: "جماليّة صناعيّة", en: "Industrial aesthetic", fr: "Esthétique industrielle" } },
      ],
      summary: {
        ar: "موقع لشركة صناعيّة وإنشاءات، يعرض القدرات والمشاريع والشهادات بجماليّة قويّة، ويقود نحو طلب عرض سعر.",
        en: "A website for an industrial and construction company — presenting capabilities, projects, and testimonials in a heavy aesthetic, all driving toward a quote request.",
        fr: "Un site pour une entreprise industrielle et de construction — capacités, projets et témoignages dans une esthétique robuste, orientés vers la demande de devis.",
      },
      challenge: {
        ar: "كان المشترون الهندسيّون يحكمون على الجدّيّة من الموقع؛ والموقع القديم بدا قديماً وغير موثوق.",
        en: "Engineering buyers judge seriousness by the website — and the old one looked dated and untrustworthy.",
        fr: "Les acheteurs techniques jugent le sérieux au site — et l'ancien paraissait dépassé et peu fiable.",
      },
      approach: {
        ar: "صمّمنا جماليّة صناعيّة واثقة، نظّمنا الخدمات في أقسام، وأبرزنا المشاريع والأرقام لتقود إلى طلب التسعير.",
        en: "We designed a confident industrial aesthetic, organized services into divisions, and foregrounded projects and numbers that lead to a quote request.",
        fr: "Nous avons conçu une esthétique industrielle affirmée, structuré les services en divisions et mis en avant projets et chiffres menant à la demande de devis.",
      },
      services: ["web"],
      stack: ["WordPress", "Custom theme", "ACF"],
      duration: { ar: "٦ أسابيع", en: "6 weeks", fr: "6 semaines" },
      team: { ar: "مصمم · مطوّر", en: "Designer · Developer", fr: "Designer · Développeur" },
    },

    /* ─── Chrome extensions — a content pipeline ─────────────── */
    {
      id: "xscraper",
      client: "X Profile Scraper",
      industry: { ar: "أدوات النمو", en: "Growth tooling", fr: "Outils de croissance" },
      country: "DZ",
      year: "2025",
      image: extScraperShot,
      title: {
        ar: "إضافة Chrome تحصد منشورات X وتصنّفها تلقائياً",
        en: "A Chrome extension that harvests X posts and auto-categorizes them",
        fr: "Une extension Chrome qui récolte les posts X et les catégorise",
      },
      outcome: { ar: "٤٤٤ منشوراً في ٥ تصنيفات", en: "444 posts across 5 categories", fr: "444 posts en 5 catégories" },
      metrics: [
        { v: "444", l: { ar: "منشور محصود", en: "Posts harvested", fr: "Posts récoltés" } },
        { v: "5", l: { ar: "تصنيف تلقائي", en: "Auto-categories", fr: "Catégories auto" } },
        { v: "1-clic", l: { ar: "تصدير إلى Sheets", en: "Sheets export", fr: "Export Sheets" } },
        { v: "MV3", l: { ar: "إضافة Chrome", en: "Chrome extension", fr: "Extension Chrome" } },
      ],
      summary: {
        ar: "إضافة Manifest V3 تعمل فوق X، تحصد منشورات الحسابات في مجموعات بيانات مصنّفة (أفكار تطبيقات، نموّ، تقني…)، وتصدّرها إلى Google Sheets بفلاتر دقيقة وتنزيل للوسائط.",
        en: "A Manifest V3 extension that overlays X, harvesting profile posts into categorized datasets (app ideas, growth, technical…) and exporting them to Google Sheets with precise filters and media download.",
        fr: "Une extension Manifest V3 superposée à X, qui récolte les posts en jeux de données catégorisés et les exporte vers Google Sheets avec filtres précis et téléchargement média.",
      },
      challenge: {
        ar: "كان جمع منشورات X ذات القيمة وفرزها يدوياً بطيئاً ولا يتوسّع، فتضيع الأفكار قبل أن تُدوّن.",
        en: "Collecting high-value X posts and sorting them by hand was slow and unscalable — ideas were lost before they were ever captured.",
        fr: "Collecter les posts X à forte valeur et les trier à la main était lent et non scalable — les idées se perdaient avant d'être notées.",
      },
      approach: {
        ar: "بنينا إضافة Manifest V3 تحصد المنشورات داخل الصفحة، تصنّفها في خمس فئات، وتصدّرها بنقرة واحدة إلى ورقة Google Sheets.",
        en: "We built a Manifest V3 extension that harvests posts in-page, sorts them into five categories, and exports them in one click to a Google Sheet.",
        fr: "Nous avons construit une extension Manifest V3 qui récolte les posts dans la page, les classe en cinq catégories et les exporte en un clic vers Google Sheets.",
      },
      services: ["ext", "scrape"],
      stack: ["Manifest V3", "TypeScript", "Google Sheets API"],
      duration: { ar: "٥ أسابيع", en: "5 weeks", fr: "5 semaines" },
      team: { ar: "مهندس إضافات", en: "Extension engineer", fr: "Ingénieur extensions" },
    },
    {
      id: "publisher",
      client: "Publisher Content",
      industry: { ar: "أتمتة التسويق", en: "Marketing automation", fr: "Automatisation marketing" },
      country: "DZ",
      year: "2025",
      image: extPublisherShot,
      title: {
        ar: "إضافة Chrome تنشر المحتوى تلقائياً عبر المنصّات",
        en: "A Chrome extension that auto-publishes content across platforms",
        fr: "Une extension Chrome qui publie le contenu sur plusieurs plateformes",
      },
      outcome: { ar: "٣ منصّات بنشر مجدوَل", en: "3 platforms, scheduled posting", fr: "3 plateformes, publication planifiée" },
      metrics: [
        { v: "3", l: { ar: "منصّات مؤتمتة", en: "Platforms automated", fr: "Plateformes automatisées" } },
        { v: ".xlsx", l: { ar: "مصدر المحتوى", en: "Content source", fr: "Source contenu" } },
        { v: "5", l: { ar: "مستويات أولويّة", en: "Priority tiers", fr: "Niveaux de priorité" } },
        { v: "Auto", l: { ar: "نشر مجدوَل", en: "Scheduled posting", fr: "Publication planifiée" } },
      ],
      summary: {
        ar: "الطرف الثاني من خطّ المحتوى: إضافة تستورد ملف Excel، ترتّب المنشورات في فئات ذات أولويّة، وتنشرها مجدوَلةً عبر فيسبوك ولينكدإن وX بإعدادات تردّد ولغة لكلّ منصّة.",
        en: "The other end of the content pipeline: an extension that imports an Excel file, organizes posts into prioritized categories, and publishes them on a schedule across Facebook, LinkedIn, and X — each with its own frequency and language.",
        fr: "L'autre bout du pipeline de contenu : une extension qui importe un fichier Excel, organise les posts en catégories priorisées et les publie de façon planifiée sur Facebook, LinkedIn et X.",
      },
      challenge: {
        ar: "كان نشر المحتوى المحصود يدوياً عبر عدّة منصّات اجتماعيّة يستهلك الوقت ويفقد الاتّساق والتردّد.",
        en: "Publishing the harvested content by hand across several social platforms drained time and lost consistency and cadence.",
        fr: "Publier le contenu récolté à la main sur plusieurs réseaux drainait du temps et perdait cohérence et cadence.",
      },
      approach: {
        ar: "بنينا إضافة تستورد المحتوى من Excel، تصنّفه بالأولويّة، وتجدول النشر التلقائي لكلّ منصّة بتردّدها ولغتها.",
        en: "We built an extension that imports content from Excel, classifies it by priority, and schedules automatic posting per platform with its own frequency and language.",
        fr: "Nous avons construit une extension qui importe le contenu depuis Excel, le classe par priorité et planifie la publication automatique par plateforme.",
      },
      services: ["ext"],
      stack: ["Manifest V3", "TypeScript", "XLSX", "Social APIs"],
      duration: { ar: "٦ أسابيع", en: "6 weeks", fr: "6 semaines" },
      team: { ar: "مهندس إضافات", en: "Extension engineer", fr: "Ingénieur extensions" },
    },
  ],

  testimonials: [
    {
      name: { ar: "ريم العتيبي", en: "Reem Al-Otaibi", fr: "Reem Al-Otaibi" },
      role: { ar: "مديرة المنتج · نجم", en: "Head of Product · Najm", fr: "Head of Product · Najm" },
      country: "AE",
      quote: {
        ar: "فريق هندسي يفهم الأعمال، وليس فقط الكود. سلّموا في الموعد، وفعّلوا فريقنا الداخلي لإدارة المنصّة بعد الإطلاق.",
        en: "An engineering team that understands business, not just code. They shipped on time and enabled our internal team to run it after launch.",
        fr: "Une équipe d'ingénierie qui comprend le business, pas seulement le code. Livrés à temps et notre équipe interne pilote depuis.",
      },
    },
    {
      name: { ar: "محمد بن سعيد", en: "Mohammed bin Saeed", fr: "Mohammed bin Saeed" },
      role: { ar: "المدير التنفيذي · تساهيل", en: "CEO · Tasaheel", fr: "PDG · Tasaheel" },
      country: "SA",
      quote: {
        ar: "بنوا بوّابتنا الحكوميّة بسرعة شركة ناشئة ودقّة شركة استشارات كبرى. منتج الناتج لا يضاهى.",
        en: "They built our government portal at startup speed with big-four consultancy precision. The resulting product is unmatched.",
        fr: "Notre portail gouvernemental construit à vitesse startup avec la précision d'un Big Four. Produit inégalé.",
      },
    },
    {
      name: { ar: "أمين بن مالك", en: "Amine Ben Malek", fr: "Amine Ben Malek" },
      role: { ar: "مؤسّس · موسوم", en: "Founder · Mawsoom", fr: "Fondateur · Mawsoom" },
      country: "DZ",
      quote: {
        ar: "كنت متشكّكاً في الوكالات الجزائريّة بعد تجارب سيّئة. كرييتيف غريد أعادوا ثقتي.",
        en: "I was skeptical of Algerian agencies after bad experiences. CreativeGrid restored my trust.",
        fr: "Je doutais des agences algériennes après de mauvaises expériences. CreativeGrid m'a redonné confiance.",
      },
    },
  ],

  faq: [
    {
      q: { ar: "كم تكلفة المشروع النموذجي؟", en: "What does a typical project cost?", fr: "Combien coûte un projet type ?" },
      a: {
        ar: "تبدأ المشاريع من ١٢٠ ألف درهم (موقع تجارة إلكترونيّة) إلى ٨٥٠ ألف درهم وأكثر (منصّة SaaS كاملة).",
        en: "Projects range from AED 120k (e-commerce site) to AED 850k+ (full SaaS platform).",
        fr: "Entre 120k AED (e-commerce) et 850k AED+ (plateforme SaaS complète).",
      },
    },
    {
      q: { ar: "ما هو زمن الاستجابة لطلبي؟", en: "What's your response time?", fr: "Quel délai de réponse ?" },
      a: {
        ar: "نردّ على كلّ استفسار خلال ٤ ساعات عمل.",
        en: "Every inquiry gets a reply within 4 business hours.",
        fr: "Chaque demande reçoit une réponse sous 4 h ouvrées.",
      },
    },
    {
      q: { ar: "هل تعملون مع شركات خارج المنطقة؟", en: "Do you work with international clients?", fr: "Travaillez-vous à l'international ?" },
      a: {
        ar: "نعم. ٣٠٪ من عملائنا في أوروبا وأمريكا الشمالية. نعمل بالإنجليزيّة الكاملة.",
        en: "Yes. 30% of our clients are in Europe and North America. We work in fluent English.",
        fr: "Oui. 30% de nos clients sont en Europe et Amérique du Nord. Nous travaillons en anglais.",
      },
    },
    {
      q: { ar: "كيف تحمون ملكية الكود؟", en: "How is IP and code ownership handled?", fr: "Comment est gérée la propriété du code ?" },
      a: {
        ar: "كلّ سطر برمجة يكتبه فريقنا ملكيّتك من اليوم الأوّل. مستودعات GitHub بحسابك.",
        en: "Every line of code we write is yours from day one. Repos live in your GitHub org.",
        fr: "Chaque ligne de code écrite vous appartient dès le jour 1. Repos sous votre organisation GitHub.",
      },
    },
  ],

  contact: {
    title: { ar: "لنبنِ شيئاً معاً", en: "Let's build something together", fr: "Construisons ensemble" },
    sub: {
      ar: "أخبرنا عن مشروعك في ٣ خطوات. سنردّ خلال ٤ ساعات عمل.",
      en: "Tell us about your project in 3 quick steps. We reply within 4 business hours.",
      fr: "Décrivez votre projet en 3 étapes. Réponse sous 4 h ouvrées.",
    },
    steps: [
      { ar: "تعريف", en: "Intro", fr: "Intro" },
      { ar: "التفاصيل", en: "Details", fr: "Détails" },
    ],
    fields: {
      name: { ar: "الاسم الكامل", en: "Full name", fr: "Nom complet" },
      email: { ar: "البريد الإلكتروني للعمل", en: "Work email", fr: "Email professionnel" },
      company: { ar: "الشركة", en: "Company", fr: "Entreprise" },
      phone: { ar: "رقم الهاتف (اختياري)", en: "Phone (optional)", fr: "Téléphone (optionnel)" },
      projectType: { ar: "نوع المشروع", en: "Project type", fr: "Type de projet" },
      budget: { ar: "الميزانية المتوقّعة", en: "Estimated budget", fr: "Budget estimé" },
      timeline: { ar: "الموعد المستهدف", en: "Target timeline", fr: "Échéance cible" },
      details: { ar: "أخبرنا عن المشروع", en: "Tell us about the project", fr: "Décrivez le projet" },
      attach: { ar: "إرفاق ملفات (RFP، Figma، إلخ)", en: "Attach files (RFP, Figma, etc.)", fr: "Pièces jointes (RFP, Figma…)" },
    },
    projectTypes: [
      { id: "web", ar: "موقع ويب", en: "Website", fr: "Site web" },
      { id: "ecom", ar: "متجر إلكتروني", en: "E-commerce", fr: "E-commerce" },
      { id: "mobile", ar: "تطبيق جوّال", en: "Mobile app", fr: "App mobile" },
      { id: "saas", ar: "منصّة SaaS", en: "SaaS platform", fr: "Plateforme SaaS" },
      { id: "ai", ar: "ذكاء اصطناعي", en: "AI / agent", fr: "IA / agent" },
      { id: "other", ar: "غير ذلك", en: "Other", fr: "Autre" },
    ],
    submit: { ar: "أرسل المشروع", en: "Send project brief", fr: "Envoyer le brief" },
    next: { ar: "التالي", en: "Next", fr: "Suivant" },
    back: { ar: "السابق", en: "Back", fr: "Précédent" },
    success: { ar: "تم الإرسال", en: "Brief received", fr: "Brief reçu" },
    successSub: {
      ar: "سنردّ خلال ٤ ساعات عمل برسالة من فريق المنتج، تحوي خطوات واضحة لمكالمة استكشافيّة.",
      en: "You'll hear back within 4 business hours from our product team with clear next steps to a discovery call.",
      fr: "Réponse sous 4 h ouvrées de notre équipe produit avec les prochaines étapes vers un appel découverte.",
    },
  },

  popup: {
    title: { ar: "تبني تطبيق جوّال؟", en: "Building a mobile app?", fr: "Vous construisez une app mobile ?" },
    body: {
      ar: "نعرض مشاريع مشابهة عبر مكالمة ١٥ دقيقة.",
      en: "We'll walk you through similar builds in a 15-min call.",
      fr: "Voyons des projets similaires en 15 min.",
    },
    cta: { ar: "احجز مكالمة ١٥ د", en: "Book 15-min call", fr: "Réserver 15 min" },
  },

  footer: {
    cta: { ar: "هل لديك مشروع؟", en: "Got a project?", fr: "Vous avez un projet ?" },
    ctaSub: { ar: "نردّ خلال ٤ ساعات", en: "We reply within 4 hours", fr: "Réponse sous 4 h" },
    cols: {
      services: { ar: "الخدمات", en: "Services", fr: "Services" },
      company: { ar: "الشركة", en: "Company", fr: "Studio" },
      contact: { ar: "تواصل", en: "Contact", fr: "Contact" },
    },
    rights: { ar: "© ٢٠٢٦ كرييتيف غريد. جميع الحقوق محفوظة.", en: "© 2026 CreativeGrid. All rights reserved.", fr: "© 2026 CreativeGrid. Tous droits réservés." },
  },
};

// Format helpers: convert Western digits to Arabic-Indic for AR
function arDigits(s) {
  if (typeof s !== 'string') s = String(s);
  return s.replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);
}

// Pick text helper
function pick(obj, lang) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] ?? obj.en ?? obj.ar ?? "";
}

export { CONTENT, pick, arDigits };
