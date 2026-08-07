const translations = {
    en: {
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'nav-methodology': 'How I work',
        'nav-how-i-did-it': 'How I did it',
        'nav-project-antifraud': 'Fraud Detection System',
        'nav-cta': 'Get in touch',
        'hero-tag': 'AI Engineer & Banking Data Scientist',
        'hero-title-1': 'Building',
        'hero-title-2': 'AI systems',
        'hero-title-3': 'from prototype',
        'hero-title-4': 'to production.',
        'hero-sub': "I'm <strong>Alessio Boetti</strong> — an AI Engineer and Data Scientist specialized in the banking & fintech sector, with more than 3 years of experience designing <strong>end-to-end Machine Learning and GenAI systems</strong> in regulated enterprise environments, both cloud and on-premise, where reliability and business impact are critical. From large-scale fraud detection to generative AI - based chatbots.",
        'hero-work': 'View my work',
        'hero-resume-eng': 'Resume (EN)',
        'hero-resume-ita': 'Resume (IT)',
        'about-tag': 'About me',
        'about-title': 'From theory to <span class="accent">real-world AI</span>',
        'about-p1': "I'm an engineer with a <strong>Master's Degree in Artificial Intelligence</strong>. My path into the field started during my studies, when I joined the fintech sector and began building end-to-end ML pipelines, from raw data ingestion to deployed, monitored production systems. Working both in academia and in industry environments let me bridge theory and practice, each reinforcing the other, as demonstrated by the choice of my thesis topic.",
        'about-p2': 'I work at the intersection of <strong>banking and fintech domain expertise</strong> and <strong>cutting-edge machine learning</strong>, from antifraud systems analysing millions of transactions, even in this moment, to GenAI chatbots for customer service or internal use, to forecasting business liquidity needs through time series analysis.<br>However, my skills translate seamlessly across industries, making me effective in other regulated domains, where data-driven decision-making is critical.', // such as insurance, IT & cybersecurity, healthcare & life sciences, pharma, legal, but also e-commerce, logistics, marketing and others.
        // 'about-p3': "I'm driven by one question: how do we make AI that actually works in the real world? It must be <strong>scalable, reliable, explainable, and business-aligned</strong>.",
        'expertise-ml': 'Machine Learning & Deep Learning',
        'expertise-genai': 'NLP & GenAI Systems',
        'expertise-ts': 'Time Series Forecasting',
        'expertise-fraud': 'Anomaly & Fraud Detection',
        'expertise-gnn': 'Graph Neural Networks',
        'expertise-mlops': 'MLOps & Cloud Deployment',
        'skills-tag': 'Technical Stack',
        'skills-title': 'Tools I <span class="accent">create</span> with',
        'projects-tag': 'Work & Research',
        'projects-title': 'Projects <span class="accent">I\'ve worked on</span>',
        'tab-professional': 'Professional',
        'tab-university': 'University',
        'tab-other': 'Other',
        'proj-p1-type': 'Banking · Fraud Detection · AWS',
        'proj-p1-title': 'Antifraud Detection System',
        'proj-p1-desc': 'End-to-end ML pipeline for real-time banking fraud detection, from data ingestion to automatic alerts. Implemented advanced feature engineering techniques and state-of-the-art models to capture complex and hidden patterns, deploying the system on AWS infrastructure to analyse real-time transaction traffic and provide a risk score in under 100 milliseconds. The solution contributed to detecting over €25,000 in fraud.',
        'proj-p2-type': 'Banking · Fraud Detection · AWS',
        'proj-p2-title': 'Antifraud Rules Generator',
        'proj-p2-desc': 'On-demand tool to generate fraud alert rules from historical data. Using advanced strategies to extract meaningful signals from complex data. Used to evaluate alert criteria in the past or to simulate future scenarios.',
        'proj-p3-type': 'Banking · Fraud Detection · Chatbot · On Premise',
        'proj-p3-title': 'IVIC —  Identity Verifier Intelligent Chatbot',
        'proj-p3-desc': 'GenAI chatbot to screen potential fraudsters as part of the identity verification process. IVIC interacts with users in real time via mobile chat before letting them carry out a transaction, asking dynamic questions based on their data and behavior to assess fraud risk.',
        'proj-p4-type': 'Banking · Customer Service · Chatbot · On Premise',
        'proj-p4-title': 'LIA — Customer Service Chatbot',
        'proj-p4-desc': 'GenAI chatbot for TAS customer service. Handles real-time customer interactions at scale answering business questions.',
        'proj-p5-type': 'Banking · Forecasting · Reconciliation · Time Series · AWS',
        'proj-p5-title': 'Treasury Funds Forecasting System',
        'proj-p5-desc': 'Multi-model time series forecasting system for treasury fund allocation, ACH reconciliation and EBA Clearing services. Implemented classical statistical models with automated model selection and confidence intervals for risk-aware decision making.',
        'proj-p6-type': 'Banking · Business Intelligence · AWS',
        'proj-p6-title': 'Payment Intelligence & Fraud Intelligence',
        'proj-p6-desc': 'Two BI solutions to extract insights from payment and fraud data, enabling data-driven decision making and enhancing operational efficiency.',
        'proj-p7-type': 'Banking · ERM · On Premise',
        'proj-p7-title': 'ERM Modeling Platform',
        'proj-p7-desc': 'Contributed to the development of an advanced balance sheet simulation component for a market-leading FinTech\'s Enterprise Risk Management platform, enabling banks to model financial scenarios, assess geopolitical and socioeconomic risk, and support strategic decision-making.',
        'proj-u1-type': 'Thesis · Fraud Detection · Graphs · Experimental',
        'proj-u1-title': 'Graph Neural Networks for Banking Fraud Detection',
        'proj-u1-desc': 'Experimental Master thesis applying Graph Neural Networks (GNN) to transaction graph analysis for fraud detection and anti-money laundering (AML). Explores relationships between users and their transactions to detect non-linear and non-local interaction fraud patterns with advanced AI models.',
        'proj-u2-type': 'Deep Learning · Computer Vision · NLP',
        'proj-u2-title': 'Deep Learning Experiments',
        'proj-u2-desc': 'Collection of deep learning experiments focused on Computer Vision, NLP and LLMs: created from scratch several AI models covering CNNs, transformers, and hybrid architectures for various classification tasks.',
        'proj-o1-type': 'Health · Research · Machine Learning',
        'proj-o1-title': 'ESO-PROST',
        'proj-o1-desc': "Took part in a clinical research program with a certified medical practitioner to assess the quality of a new healthcare tool for the early diagnosis and risk evaluation of prostate cancer based on patient health data. My contribution focused on the data analysis and modeling aspects, applying machine learning techniques to extract insights from the clinical data and support the evaluation of the tool's effectiveness.",
        'proj-o2-type': 'Legal · Anonymization · OCR',
        'proj-o2-title': 'CercaOSEP',
        'proj-o2-desc': 'Took part in a project to develop an OCR-based tool for the anonymization of legal documents, designed to automatically identify and redact sensitive information from legal texts while preserving their overall structure and readability. My contribution focused on the data processing and modeling aspects, applying NLP techniques to enhance the accuracy of sensitive information detection and ensure compliance with privacy regulations.',
        'projects-tas-cta': 'See TAS blog post on AI projects',
        'projects-all-repos-cta': 'See all repositories on GitHub',
        'projects-github-label': 'GitHub',
        'proj-o1-link': 'More on ESO-PROST',
        'career-tag': 'Career',
        'career-title': "Where I've <span class=\"accent\">built</span> things",
        'exp-1-meta': 'October 2025 — Present',
        'exp-1-role': 'Consultant Analytics Intelligence',
        'exp-1-company': 'Proxima Group',
        'exp-1-desc': 'For a market-leading company in the FinTech sector, I contributed to the development of a new advanced simulation component within an Enterprise Risk Management (ERM) platform for banks.',
        'exp-2-meta': 'October 2022 — October 2025',
        'exp-2-role': 'AI Engineer & Data Scientist',
        'exp-2-company': 'TAS S.p.A.',
        'exp-2-desc': 'Built production ML systems for the banking and payments industry. Solid understanding of the regulatory context (PSD2, SCA, AML, KYC), transaction processing pipelines, and the operational constraints of ML deployment in high-criticality financial contexts. Core work spans antifraud ML pipelines, GenAI chatbots, and financial time series forecasting. Full ownership from data engineering to model deployment on cloud (AWS) or on-premise (Docker/Kubernetes) infrastructure.',
        // 'exp-3-meta': 'Domain Expertise',
        // 'exp-3-role': 'Banking, Payments & FinTech',
        // 'exp-3-company': 'Deep specialization in financial systems',
        // 'exp-3-desc': '3+ years of domain-specific experience in banking AI. Strong understanding of regulatory context (PSD2, AML), transaction processing pipelines, and the operational constraints of deploying ML in high-stakes financial environments.',
        // 'exp-4-meta': 'Research & Self-Study',
        // 'exp-4-role': 'Graph ML, Time Series & Advanced Topics',
        // 'exp-4-company': 'Independent research alongside industry work',
        // 'exp-4-desc': 'Ongoing exploration of a broad scope of statistical methods, from Graph Neural Networks, to retrieval-augmented generation (RAG) systems, to advanced time series models.',
        'resume-en': 'Resume (EN)',
        'resume-it': 'Resume (IT)',
        'contact-tag': "Let's talk",
        'contact-title': "Open to what's <span class=\"accent\">next</span>",
        'contact-copy': "Whether you're building the next generation of AI infrastructure, need someone who can own an ML system end-to-end, or just want to talk data science — I'd love to hear from you.",
        'contact-cta-title': 'Want to work together?',
        'contact-cta-copy': "I'm currently open to senior AI/ML engineering roles, data science positions, and consulting engagements — especially in FinTech, enterprise AI, and high-impact startups.",
        'contact-email': 'Send me an email',
        'contact-linkedin': 'Connect on LinkedIn'
    },
    it: {
        'nav-about': 'Chi sono',
        'nav-skills': 'Skill',
        'nav-projects': 'Progetti',
        'nav-experience': 'Esperienza',
        'nav-contact': 'Contatti',
        'nav-methodology': 'Come lavoro',
        'nav-how-i-did-it': 'Come l\'ho fatto',
        'nav-project-antifraud': 'Sistema di rilevamento antifrode',
        'nav-cta': 'Contattami',
        'hero-tag': 'AI Engineer & Banking Data Scientist',
        'hero-title-1': 'Costruisco',
        'hero-title-2': 'sistemi di IA',
        'hero-title-3': 'dal prototipo',
        'hero-title-4': 'alla produzione.',
        'hero-sub': "Sono <strong>Alessio Boetti</strong> — AI Engineer e Data Scientist specializzato nel settore banking & fintech, con oltre 3 anni di esperienza nella progettazione di <strong>sistemi di Machine Learning e GenAI end-to-end</strong> in contesti enterprise regolamentati cloud e on-premise, dove affidabilità e impatto sul business sono cruciali. Dal rilevamento di frodi su larga scala ai chatbot basati sull'IA generativa.",
        'hero-work': 'Progetti',
        'hero-resume-eng': 'CV (EN)',
        'hero-resume-ita': 'CV (IT)',
        'about-tag': 'Chi sono',
        'about-title': 'Dalla teoria alla <span class="accent">pratica</span>',
        'about-p1': "Sono un ingegnere con una <strong>laurea magistrale in Intelligenza Artificiale</strong>. Il mio percorso nel settore è iniziato durante gli studi, quando sono entrato nel mondo fintech e ho cominciato a costruire pipeline ML end-to-end, dall'acquisizione dei dati fino alla messa in produzione con monitoraggio continuo. Lavorare sia in ambito accademico che industriale mi ha permesso di unire teoria e pratica, con ciascuna che ha rafforzato e arricchito l'altra, come dimostra la scelta del mio argomento di tesi.",
        'about-p2': 'Lavoro all\'intersezione tra <strong>expertise nei settori banking e fintech</strong> e <strong> machine learning avanzato</strong>, sviluppando soluzioni che spaziano dai sistemi antifrode che analizzano migliaia di transazioni ogni giorno, anche in questo momento, ai chatbot basati su IA generativa per customer service o uso interno, fino a modelli di previsione dei fabbisogni di liquidità tramite analisi di serie temporali.<br> Tuttavia, le mie competenze sono facilmente trasferibili in altri settori regolamentati, dove il decision-making basato sui dati è critico.',
        // 'about-p3': 'C\'è una domanda che guida il mio lavoro: come applicare l\'IA in modo che produca valore concreto nel mondo reale? Deve essere <strong>scalabile, affidabile, spiegabile e allineata alle esigenze di business</strong>.',
        'expertise-ml': 'Machine Learning e Deep Learning',
        'expertise-genai': 'NLP e sistemi GenAI',
        'expertise-ts': 'Forecasting di serie temporali',
        'expertise-fraud': 'Anomaly e Fraud Detection',
        'expertise-gnn': 'Graph Neural Networks',
        'expertise-mlops': 'MLOps e deployment cloud',
        'skills-tag': 'Stack Tecnico',
        'skills-title': 'Strumenti con cui <span class="accent">costruisco</span>',
        'projects-tag': 'Lavoro e ricerca',
        'projects-title': 'Progetti <span class="accent">a cui ho lavorato</span>',
        'tab-professional': 'Professionali',
        'tab-university': 'Università',
        'tab-other': 'Altro',
        'proj-p1-type': 'Banking · Fraud Detection · AWS',
        'proj-p1-title': 'Sistema di rilevamento antifrode',
        'proj-p1-desc': 'Pipeline ML end-to-end per il rilevamento di frodi bancarie in tempo reale, dall\'ingestione dei dati alla segnalazione automatica. Ho implementato tecniche di feature engineering e modelli avanzati per catturare pattern complessi e nascosti, deployando il sistema su un\'infrastruttura AWS per analizzare il traffico di transazioni real-time e fornire uno score di rischio in meno di 100 millisecondi. La soluzione ha contribuito all\'individuazione di oltre €25.000 di frodi.',
        'proj-p2-type': 'Banking · Fraud Detection · AWS',
        'proj-p2-title': 'Generatore di regole antifrode',
        'proj-p2-desc': 'Strumento on-demand per generare regole di allerta frodi a partire da dati storici. Utilizza strategie avanzate per estrarre segnali significativi da dati complessi. Usato per valutare criteri di segnalazione su eventi passati o simulare scenari futuri.',
        'proj-p3-type': 'Banking · Fraud Detection · Chatbot · On Premise',
        'proj-p3-title': 'IVIC — Identity Verifier Intelligent Chatbot',
        'proj-p3-desc': 'Chatbot GenAI che intercetta potenziali frodatori durante il processo di verifica dell\'identità. IVIC interagisce in tempo reale via mobile prima di consentire al cliente di disporre una transazione, ponendo domande dinamiche basate su dati e comportamento  dell\'utente per valutare il rischio di frode.',
        'proj-p4-type': 'Banking · Customer Service · Chatbot · On Premise',
        'proj-p4-title': 'LIA — Chatbot di customer service',
        'proj-p4-desc': 'Chatbot GenAI per il customer service TAS. Gestisce interazioni clienti in tempo reale su larga scala, rispondendo a domande di business.',
        'proj-p5-type': 'Banking · Forecasting · Riconciliazione · Serie temporali · AWS',
        'proj-p5-title': 'Sistema di forecasting della liquidità di tesoreria',
        'proj-p5-desc': 'Sistema multi-modello di forecasting su serie temporali per allocazione fondi di tesoreria, riconciliazione ACH e servizi EBA Clearing. Implementati modelli statistici classici con selezione automatica e intervalli di confidenza per decisioni risk-aware.',
        'proj-p6-type': 'Banking · Business Intelligence · AWS',
        'proj-p6-title': 'Payment Intelligence & Fraud Intelligence',
        'proj-p6-desc': 'Due soluzioni BI per estrarre insight da dati di pagamento e dati sulle frodi, abilitando decisioni data-driven e migliorando l\'efficienza operativa.',
        'proj-p7-type': 'Banking · ERM · On Premise',
        'proj-p7-title': 'ERM Modeling Platform',
        'proj-p7-desc': 'Contribuito allo sviluppo di un componente avanzato per la simulazione del bilancio all\'interno della piattaforma di Enterprise Risk Management di un\'azienda FinTech market leader, consentendo alle banche di modellare scenari finanziari, valutare rischi geopolitici e socioeconomici, e supportare il processo decisionale strategico.',
        'proj-u1-type': 'Tesi · Fraud Detection · Grafi · Sperimentale',
        'proj-u1-title': 'Reti Neurali a Grafo per il Rilevamento di Frodi in Ambito Bancario',
        'proj-u1-desc': 'Tesi sperimentale di laurea magistrale che applica le Graph Neural Networks (GNN) all\'analisi dei grafi transazionali per il rilevamento di frodi e l\'antiriciclaggio (AML). Esplora le relazioni tra utenti e transazioni per individuare pattern fraudolenti non lineari e non locali con modelli AI avanzati.',
        'proj-u2-type': 'Deep Learning · Computer Vision · NLP',
        'proj-u2-title': 'Esperimenti di deep learning',
        'proj-u2-desc': 'Raccolta di esperimenti di deep learning focalizzati su Computer Vision, NLP e LLM: sviluppo da zero di diversi modelli AI, tra cui CNN, transformer, LLM e architetture ibride per vari task di classificazione.',
        'proj-o1-type': 'Salute · Ricerca · Machine Learning',
        'proj-o1-title': 'ESO-PROST',
        'proj-o1-desc': 'Partecipazione a un programma di ricerca clinica con un medico specialista per valutare la qualità di un nuovo strumento sanitario per la diagnosi precoce e la stima del rischio di tumore alla prostata, basato su dati clinici dei pazienti. Il mio contributo si e focalizzato sull\'analisi dati e sullo sviluppo di modelli di machine learning.',
        'proj-o2-type': 'Legale · Anonimizzazione · OCR',
        'proj-o2-title': 'CercaOSEP',
        'proj-o2-desc': 'Partecipazione allo sviluppo di uno strumento OCR per l\'anonimizzazione di documenti legali, progettato per identificare e oscurare automaticamente informazioni sensibili preservando struttura e leggibilita dei testi.',
        'projects-tas-cta': 'Vedi il blog post di TAS sui progetti AI',
        'projects-all-repos-cta': 'Vedi tutti i repository su GitHub',
        'projects-github-label': 'GitHub',
        'proj-o1-link': 'Approfondisci ESO-PROST',
        'career-tag': 'Carriera',
        'career-title': 'Dove ho <span class="accent">costruito</span> soluzioni',
        'exp-1-meta': 'Ottobre 2025 — Oggi',
        'exp-1-role': 'Consulente Analytics Intelligence',
        'exp-1-company': 'Proxima Group',
        'exp-1-desc': 'Per una realta leader di mercato nel settore FinTech, ho contribuito allo sviluppo di un nuovo componente avanzato di simulazione all\'interno di una piattaforma di Enterprise Risk Management (ERM) per banche.',
        'exp-2-meta': 'Ottobre 2022 — Ottobre 2025',
        'exp-2-role': 'AI Engineer & Data Scientist',
        'exp-2-company': 'TAS S.p.A.',
        'exp-2-desc': 'Ho sviluppato sistemi ML in produzione per il settore banking e pagamenti. Solida comprensione del contesto regolatorio (PSD2, SCA, AML, KYC), delle pipeline di processamento transazioni e dei vincoli operativi del deployment ML in contesti finanziari ad alta criticità. Le attività principali includono pipeline antifrode, generatore di regole antifrode, forecasting su serie temporali, chatbot GenAI, BI. Ownership end-to-end: dal data engineering al deployment cloud (AWS) o on-premise (Docker/Kubernetes).',
        // 'exp-3-meta': 'Expertise di dominio',
        // 'exp-3-role': 'Banking, Payments e FinTech',
        // 'exp-3-company': 'Specializzazione profonda nei sistemi finanziari',
        // 'exp-3-desc': 'Oltre 3 anni di esperienza di dominio nell\'AI bancaria. ',
        // 'exp-4-meta': 'Ricerca e studio autonomo',
        // 'exp-4-role': 'Graph ML, serie temporali e temi avanzati',
        // 'exp-4-company': 'Ricerca indipendente parallela all\'attivita professionale',
        // 'exp-4-desc': 'Esplorazione continua di metodi statistici avanzati, dalle Graph Neural Networks ai sistemi retrieval-augmented generation (RAG), fino a modelli evoluti per serie temporali.',
        'resume-en': 'CV (EN)',
        'resume-it': 'CV (IT)',
        'contact-tag': 'Contattami',
        'contact-title': 'Aperto alle <span class="accent">opportunità</span>',
        'contact-copy': 'Se stai costruendo la prossima generazione di soluzioni e infrastrutture AI, se cerchi qualcuno capace di occuparsi di un sistema di machine learning dall\'ideazione alla produzione, o se semplicemente desideri fare due chiacchiere sulla data science, sono a disposizione.',
        'contact-cta-title': 'Ti interesso?',
        'contact-cta-copy': 'Sono attualmente disponibile per ruoli senior in AI/ML engineering e data science, così come per incarichi di consulenza, con particolare interesse per FinTech, AI enterprise e startup ad alto impatto.',
        'contact-email': 'Inviami una email',
        'contact-linkedin': 'Connettiti su LinkedIn'
    }
};

function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    localStorage.setItem('siteLanguage', lang);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = dictionary[element.dataset.i18n];
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const value = dictionary[element.dataset.i18nHtml];
        if (typeof value === 'string') {
            element.innerHTML = value;
        }
    });

    if (langToggle) {
        langToggle.querySelectorAll('.lang-option').forEach((option) => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
        langToggle.setAttribute('aria-label', lang === 'en' ? 'Italiano and English language toggle, currently English' : 'Italiano and English language toggle, currently Italian');
    }
}

// Cursor glow
const glow = document.getElementById('cursorGlow');
let langToggle = null;
let howIDidItMenu = null;
let howIDidItToggle = null;
let hamburger = null;
let navLinks = null;

function closeHowIDidItMenu() {
    if (!howIDidItMenu || !howIDidItToggle) {
        return;
    }
    howIDidItMenu.classList.remove('open');
    howIDidItToggle.setAttribute('aria-expanded', 'false');
}

function bindNavInteractions() {
    langToggle = document.getElementById('langToggle');
    howIDidItMenu = document.getElementById('howIDidItMenu');
    howIDidItToggle = document.getElementById('howIDidItToggle');
    hamburger = document.getElementById('navHamburger');
    navLinks = document.querySelector('.nav-links');

    if (howIDidItMenu && howIDidItToggle && !howIDidItToggle.dataset.bound) {
        howIDidItToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = howIDidItMenu.classList.toggle('open');
            howIDidItToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        howIDidItToggle.dataset.bound = 'true';
    }

    if (!document.body.dataset.navGlobalBound) {
        document.addEventListener('click', (event) => {
            if (howIDidItMenu && !howIDidItMenu.contains(event.target)) {
                closeHowIDidItMenu();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeHowIDidItMenu();
            }
        });

        document.body.dataset.navGlobalBound = 'true';
    }

    if (hamburger && navLinks && !hamburger.dataset.bound) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });
        hamburger.dataset.bound = 'true';
    }

    if (navLinks && !navLinks.dataset.linkBound) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeHowIDidItMenu();
                if (hamburger) {
                    hamburger.classList.remove('open');
                }
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
        navLinks.dataset.linkBound = 'true';
    }

    if (langToggle && !langToggle.dataset.bound) {
        langToggle.addEventListener('click', () => {
            const nextLang = document.documentElement.lang === 'it' ? 'en' : 'it';
            applyLanguage(nextLang);
        });
        langToggle.dataset.bound = 'true';
    }
}

bindNavInteractions();
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Tab switching
function switchTab(tab, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.projects-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('pane-' + tab).classList.add('active');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Staggered fade-in for children
document.querySelectorAll('.skills-grid .skill-category, .projects-grid .project-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 80) + 'ms';
});

// Hero title animation on load
window.addEventListener('load', () => {
    document.querySelectorAll('.hero-title .line span').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
    document.querySelector('.hero-tag').style.animation = 'fadeSlideUp 0.7s ease 0.1s both';
    document.querySelector('.hero-sub').style.animation = 'fadeSlideUp 0.7s ease 0.5s both';
    document.querySelector('.hero-actions').style.animation = 'fadeSlideUp 0.7s ease 0.7s both';
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .hero-tag, .hero-sub, .hero-actions { opacity: 0; }
  `;
document.head.appendChild(style);

const savedLanguage = localStorage.getItem('siteLanguage') || (navigator.language && navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en');
applyLanguage(savedLanguage);

// TOC active state
const sections = document.querySelectorAll('.method-section');
const tocLinks = document.querySelectorAll('.toc-link[data-section]');

const tocObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    const id = entry.target.id;
    tocLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
    });
    }
});
}, { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' });

sections.forEach(s => tocObserver.observe(s));

// Fetch navigation bar dynamically from file
const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
    fetch('navigation_bar.html')
        .then(response => response.text())
        .then(data => {
            navPlaceholder.innerHTML = data;
            bindNavInteractions();
            applyLanguage(document.documentElement.lang || savedLanguage);
        });
}

// Fetch footer dynamically from file
const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        });
}