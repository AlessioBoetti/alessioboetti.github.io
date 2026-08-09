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
        'contact-tag': 'Let\'s talk',
        'contact-title': 'Open to what\'s <span class="accent">next</span>',
        'contact-copy': 'Whether you\'re building the next generation of AI infrastructure, need someone who can own an ML system end-to-end, or just want to talk data science, I\'d love to hear from you.',
        'contact-cta-title': 'Want to work together?',
        'contact-cta-copy': 'I\'m currently open to senior AI/ML engineering roles, data science positions, and consulting engagements — especially in FinTech, enterprise AI, and high-impact startups.',
        'contact-email': 'Send me an email',
        'contact-linkedin': 'Connect on LinkedIn',
        // METHODOLOGY PAGE
        'method-page-title': 'How I work — Alessio Boetti',
        'method-page-tag': 'AI Engineer & Banking Data Scientist',
        'method-hero-title': 'How I <span class="accent">work</span>',
        'method-hero-subtitle': 'From data to reliability',
        'method-hero-intro': 'A model that performs well in a notebook is not an ML system, and anyone can throw an XGBoost model at a bunch of raw data and get something nice out of it.',
        'method-hero-p1': 'I aim to achieve <strong>top-notch implementations</strong>.',  // I like <strong>complexity</strong>.
        'method-hero-p2': 'These are the principles and practices I apply consistently across projects that translate statistical rigor into <strong>reliable business outcomes</strong>.',
        'method-label-what': 'What',
        'method-label-why': 'Why',
        'method-label-how': 'How',
        'method-business-impact-title': 'Business impact',
        'method-marker-analysis': 'Analysis',
        'method-marker-decomposition': 'Decomposition',
        'method-marker-design': 'Design',
        'method-marker-selection': 'Selection',
        'method-s1-title': 'Data Analysis',
        'method-s1-subtitle': 'Understanding is the first and most important step',
        'method-s1-what': 'Using statistical summaries, tests, and visual diagnostics, such as distributions, correlations and decompositions, to spot inconsistencies, build an accurate mental model of the problem, and surface where the pain points are before any further decision is made.',
        'method-s1-why': 'Basic summary statistics alone are dangerous: the same mean and variance can hide wildly different distributions, and a single correlation coefficient can mask non-linear or segment-specific relationships. Visualization isn\'t a reporting step at the end, it\'s how you discover <strong>what questions to even ask</strong>.',
        'method-s1-how': 'Univariate profiling → bivariate & multivariate relationships → distributional diagnostics → dimensionality reduction → statistical tests → testing hypothesis and statistical assumptions.',
        'method-s1-p1': 'My approach treats every plot as a hypothesis, not a deliverable. I start with univariate distributions to understand shape, skew, and multimodality: a bimodal distribution often means there are two different populations hiding in one column. From there I move to bivariate relationships, favoring visual diagnostics over correlation coefficients alone, since for example Pearson\'s coefficient assumes linearity that real-world data rarely respects.',
        'method-s1-p2': 'For multivariate problems, I use dimensionality reduction not to build features but to look, projecting high-dimensional data into 2-3 components to check for clusters, outliers, or structure that would be invisible one variable at a time.',
        'method-s1-p3': 'Every statistical claim I make is paired with the plot that supports it, so <strong>the reasoning is auditable, not just asserted</strong>.',
        'method-s1-tech1-name': 'Diagnostics',
        'method-s1-tech1-desc': 'Histograms, KDEs, and Q-Q plots to assess normality, skew, and multimodality.',
        'method-s1-tech2-name': 'Correlations & Dependencies',
        'method-s1-tech2-desc': 'Pairwise correlation matrices combined with scatter matrices and mutual information scores, to catch non-linear dependencies that a single correlation coefficient would miss.',
        'method-s1-tech3-name': 'Graph & Network Analysis',
        'method-s1-tech3-desc': 'Modeling entities and their relationships as nodes and edges to surface structure invisible in tabular form, centrality measures to identify influential nodes, community detection to find natural clusters, and path analysis to trace how effects propagate through a system.',
        'method-s1-tech4-name': 'Dimensionality Reduction',
        'method-s1-tech4-desc': 'PCA, Kernel PCA, t-SNE, UMAP and other tools used exploratively, not as preprocessing, but to visually surface clusters, separability, and outlier structure in high-dimensional data.',
        'method-s1-tech5-name': 'Time Series Decomposition',
        'method-s1-tech5-desc': 'Splitting series into trend, seasonality, and residual components to distinguish genuine signal from cyclical noise before drawing conclusions about behavior or performance.',
        'method-s1-biz': 'Rigorous data analysis prevents the most expensive kind of error: <strong>building the right solution to the wrong problem</strong>. Understanding distributions, segments, and biases before modeling catches misleading signals early, when fixing them costs a day, not a failed production deployment because the model does not work. A well-run exploratory phase routinely surfaces key insights: the underperforming segment that\'s actually a data collection artifact, the trend that\'s a <a href="https://en.wikipedia.org/wiki/Simpson%27s_paradox">Simpson\'s paradox</a>, the outlier that\'s the most valuable customer cohort. Because <strong>every finding is grounded in a visible, auditable chain of evidence</strong>, decisions survive scrutiny instead of collapsing under the first "Are you sure?".',
        'method-s2-title': 'Feature Engineering & Selection',
        'method-s2-subtitle': 'Data representation is the leverage point',
        'method-s2-what': 'Extracting hidden information from raw data, combining domain knowledge, statistical analysis, and automated selection to surface the signals a model needs.',
        'method-s2-why': 'Model architecture accounts for perhaps 20% of final performance. The other 80% is data quality and representation. <strong>A mediocre model on great features beats a sophisticated model on raw data</strong>.',
        'method-s2-how': 'Domain-driven hypothesis → statistical validation → SHAP-based importance → collinearity analysis → ablation testing. <strong>Every feature must earn its place.</strong>',
        'method-s2-p1': 'My approach to feature engineering is hypothesis-driven: I start from domain knowledge to generate candidate features, then use statistical tests, model agnostic methods and model-based importance criteria to filter them. This avoids the trap of blind feature generation that adds more complexity without improving signal.',
        'method-s2-tech1-name': 'Rolling Window Aggregations',
        'method-s2-tech1-desc': 'Computing statistics (mean, std, count, sum) over multiple temporal and grouped-based windows to capture behavior at different timescales simultaneously.',
        'method-s2-tech2-name': 'Behavioral Deviation Features',
        'method-s2-tech2-desc': 'Z-scores and percentile ranks computed against both the individual entity\'s own historical distribution and the whole population distribution, personalizing the signal while also relying on global statistics.',
        'method-s2-tech3-name': 'SHAP-based Feature Selection',
        'method-s2-tech3-desc': 'Using SHAP mean absolute values as a principled importance metric, combined with correlation analysis to remove redundant features while preserving complementary ones.',
        'method-s2-tech4-name': 'Ablation Testing',
        'method-s2-tech4-desc': 'Removing feature groups one at a time and measuring the impact on validation metrics. Validates importance, reveals redundancy, and informs feature engineering priorities.',
        'method-s2-biz': '<strong>Better features → smaller models → faster inference → lower infrastructure costs.</strong> A well-engineered feature set often allows simpler models to reach the same performance as more complex ones on raw data with less compute, faster latency, and easier maintenance. Feature selection also reduces overfitting and improves out-of-distribution generalization.',
        'method-s3-title': 'Calibration Methods',
        'method-s3-subtitle': 'Calibrating models for reliable outputs',
        'method-s3-what': 'Calibrating model output to produce <strong>reliable probability estimates</strong> rather than arbitrary scores.',
        'method-s3-why': 'Calibration ensures that a machine learning model\'s predicted probabilities genuinely match real-world likelihoods.',
        'method-s3-how': 'Venn-Abers calibration, validation with ECE and reliability diagrams on held-out data.',
        'method-s3-p1': 'Calibration is the step that turns raw model scores into decision-grade probabilities. A predicted risk of 0.30 should correspond to to a 30% chance of risk, which is not assured by model outputs.',
        // 'method-s3-p2': 'I typically use Venn-Abers when I need stable calibration under class imbalance and distribution shift, because it provides valid probability intervals rather than a single overconfident point estimate. This is especially valuable in fraud and risk systems, where uncertainty must be explicit and operationally usable.',
        'method-s3-biz': 'Calibrated probabilities allow teams to set thresholds based on expected cost, define gray zones for manual review, and adapt actions by segment, channel, or transaction value. The result is <strong>fewer unnecessary blocks, better customer experience, and more reliable loss prevention</strong>, because decisions are driven by true likelihoods instead of arbitrary scores.',
        'method-s4-title': 'Ensemble Methods',
        'method-s4-subtitle': 'Combining models for robust outputs',
        'method-s4-what': 'Combining multiple models to reduce variance and bias, canceling out individual weaknesses, while keeping system complexity proportional to the performance gain.',
        'method-s4-why': 'Models of the same type have correlated failure modes. Ensembles made of diverse algorithms fail on different examples: <strong>their combination is more robust than any individual model</strong>.',
        'method-s4-how': 'Soft voting → Bagging → Boosting → Stacking with a meta-learner for more complex scenarios.',
        'method-s4-p1': 'The choice between bagging, boosting, and stacking depends on the structure of the problem. For tabular data with complex interactions, I typically start with <strong>diverse boosting models</strong> (XGBoost, CatBoost, LightGBM), each with different handling of categorical features, regularization approaches, and tree construction algorithms, giving them genuinely different error patterns.',
        'method-s4-p2': 'Ensemble combination is done via soft voting on calibrated probabilities rather than raw scores. This is critical: averaging uncalibrated scores is mathematically unsound (the scores are on different scales and distributions). Calibrating first, then averaging, produces a coherent joint probability.',
        'method-s4-biz': '<strong>Reduced risk and higher reliability.</strong> Ensembles consistently reduce the variance of predictions, particularly important for rare event detection where a single model\'s blind spots can be costly. In production, a 1-2% improvement in AUC ROC or AUC PR translates to meaningful reductions in fraud losses or false alarms costs.',  //  at transaction scale
        'method-s5-title': 'Uncertainty Quantification',
        'method-s5-subtitle': 'Knowing what the model doesn\'t know',
        'method-s5-what': 'Quantifying <strong>how confident a model is</strong> in its predictions: not just outputting a decision, but a set of plausible outcomes, sized to reflect how sure the model actually is.',
        'method-s5-why': 'Overconfident models make brittle systems. A model saying "99% fraud" when the true uncertainty is high leads to poor decision-making and <strong>potential harm or economic losses</strong>.',
        'method-s5-how': 'Conformal Prediction → prediction sets with a guaranteed coverage rate, e.g., "The correct answer will be in this set 95% of the time", rather than a single confident-sounding guess.',
        'method-s5-p1': 'Beyond single-point calibration, I also apply conformal prediction to flag ambiguity directly: rather than "This is fraud", the model can say "This transaction is likely one of these classes" and be transparent when it\'s genuinely unsure. Paired with a cost-aware review policy, this is especially useful when the cost of missing fraud differs from the cost of a false alarm.',
        'method-s5-biz': 'A narrow prediction set indicates high certainty and can be auto-routed, while wider sets trigger manual review or additional verification steps. This turns uncertainty into a <strong>controllable business signal</strong>: confidence determines action intensity, not just model score magnitude.',
        'method-s6-title': 'Explainability',
        'method-s6-subtitle': 'Justifying model decisions',
        'method-s6-what': 'Techniques that decompose a model\'s output into <strong>per-feature contributions</strong>, making predictions auditable by managers, compliance teams, and regulators.',
        'method-s6-why': 'Black-box models erode trust, block regulatory approval, and make debugging nearly impossible. <strong>Explainability is not optional</strong> in production systems, it\'s a prerequisite for stakeholder adoption.',
        'method-s6-how': 'SHAP for tree-based models: consistent, theoretically grounded. LIME as a complementary local approximation for sanity checks and non-tree architectures.',
        'method-s6-p1': 'SHAP values assign each feature a contribution to the prediction. Unlike other simpler methods, SHAP is per-prediction and directional: it tells you <strong>not just which feature mattered, but by how much and in which direction</strong>.',
        'method-s6-p2': 'I distinguish between two levels of explanation: <strong>global</strong> (aggregated SHAP values across all predictions, used for model validation, feature selection, and stakeholder communication) and <strong>local</strong> (per-prediction SHAP plots, used in analyst-facing dashboards and audit trails).',
        'method-s6-callout': '<strong>Regulatory relevance</strong>: in banking and finance, regulators (EBA, GDPR, AI Act) increasingly require that automated decisions be explainable to affected individuals. A SHAP-powered audit trail is both a technical tool and a compliance asset.',
        'method-s6-biz': '<strong>Faster analyst review, higher trust, regulatory compliance</strong>. Fraud analysts who understand why a transaction was flagged resolve cases faster and with higher accuracy. Compliance teams can generate audit reports on demand. Customers who dispute a blocked transaction receive a meaningful explanation rather than "Our system flagged it".',
        'method-s7-title': 'Model Monitoring & Data Drift',
        'method-s7-subtitle': 'Detect model degradation it before it costs you',
        'method-s7-what': 'Continuously tracking the statistical properties of inputs and outputs in production, detecting when the data distribution shifts away from the training distribution.',
        'method-s7-why': 'The world changes. Fraud patterns evolve, customer behavior shifts, upstream data pipelines break. A model trained 6 months ago processing today\'s data <strong>will silently fail</strong> without monitoring.',
        'method-s7-how': 'Statistical tests for distribution shift → Performance monitoring on labeled windows → Automated alerts and retraining triggers when drift thresholds are exceeded.',
        'method-s7-p1': 'I separate <strong>data drift</strong> (input distribution shift), <strong>concept drift</strong> (the relationship between inputs and outputs changes), and <strong>performance drift</strong> (observed metrics degrading). Each requires a different detection and response strategy.',
        'method-s7-p2': 'For adversarial domains like fraud, I additionally monitor for <strong>adversarial drift</strong>, intentional shifts where fraudsters have learned to mimic legitimate patterns. This is detected through analysis of the score distribution of flagged transactions over time, not just raw feature distributions.',
        'method-s7-biz': '<strong>Proactive degradation detection vs reactive crisis management.</strong> Without monitoring, performance degradation is discovered through business KPI drops, often weeks after the model started failing. Drift monitoring catches issues before they compound into significant losses or customer experience failures.',
        'method-s8-title': 'CI/CD for ML (MLOps)',
        'method-s8-subtitle': 'Treating model deployment as software engineering',
        'method-s8-what': 'Applying software engineering best practices to the full ML lifecycle: <strong>version control, automated testing, staged deployment, and continuous integration</strong> on data, code, and models.',
        'method-s8-why': 'ML without CI/CD produces unreproducible results, untestable deployments, and unrecoverable failures. <strong>A model is software</strong>: it deserves the same rigor.',
        'method-s8-how': 'Git-based model versioning, automated evaluation gates before promotion, containerized serving with Docker/Kubernetes, and staged rollouts (shadow mode → canary → full traffic).',
        'method-s8-p1': 'I treat every model as a software artifact: <strong>versioned, tested, and deployed through a controlled pipeline</strong>. This means data pipelines are code (not notebooks), models are tracked with metadata (training data version, hyperparameters, evaluation metrics), and promotion to production requires passing automated validation gates.',
        'method-s8-p2': '<strong>Shadow deployment</strong> is a key practice: a new model version runs in parallel with the production model, receiving the same inputs but with its outputs not acted upon. This allows real-traffic validation before any customer impact, comparing the new model\'s predictions against the ground truth as labels arrive.',
        'method-s8-callout': '<strong>Reproducibility as a first principle</strong>: every training run is reproducible, the same code, data version, and random seeds produce the same model. Without this, debugging is guesswork.',
        'method-s8-biz': '<strong>Faster iteration cycles, zero-downtime deployments, instant rollback capability.</strong> When a new fraud pattern emerges, a retrained model can go from data to production in hours rather than weeks. If a deployment introduces a regression, rollback to the last known-good model happens in minutes. This agility is a direct competitive advantage.'
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
        'proj-o2-desc': 'Partecipazione allo sviluppo di uno strumento OCR per l\'anonimizzazione di documenti legali, progettato per identificare e oscurare automaticamente informazioni sensibili preservando struttura e leggibilità dei testi.',
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
        // 'exp-4-company': 'Ricerca indipendente parallela all\'attività professionale',
        // 'exp-4-desc': 'Esplorazione continua di metodi statistici avanzati, dalle Graph Neural Networks ai sistemi retrieval-augmented generation (RAG), fino a modelli evoluti per serie temporali.',
        'resume-en': 'CV (EN)',
        'resume-it': 'CV (IT)',
        'contact-tag': 'Contattami',
        'contact-title': 'Aperto alle <span class="accent">opportunità</span>',
        'contact-copy': 'Se stai costruendo la prossima generazione di soluzioni e infrastrutture AI, se cerchi qualcuno capace di occuparsi di un sistema di machine learning dall\'ideazione alla produzione, o se semplicemente desideri fare due chiacchiere sulla data science, sono a disposizione.',
        'contact-cta-title': 'Ti interesso?',
        'contact-cta-copy': 'Sono attualmente disponibile per ruoli senior in AI/ML engineering e data science, così come per incarichi di consulenza, con particolare interesse per FinTech, AI enterprise e startup ad alto impatto.',
        'contact-email': 'Inviami una email',
        'contact-linkedin': 'Connettiti su LinkedIn',
        // METHODOLOGY PAGE
        'method-page-title': 'Come lavoro — Alessio Boetti',
        'method-page-tag': 'AI Engineer & Banking Data Scientist',
        'method-hero-title': 'Come <span class="accent">lavoro</span>',
        'method-hero-subtitle': 'Dai dati all\'affidabilità',
        'method-hero-intro': 'Un modello che funziona bene in un notebook non è un sistema ML, e chiunque può usare un modello XGBoost su dati sporchi e ottenere qualcosa di sufficiente.',
        'method-hero-p1': 'Io punto a soluzioni <strong>di qualità</strong>.',  // Mi piace la <strong>complessità</strong>.
        'method-hero-p2': 'Questi sono i principi e le pratiche che applico in maniera consistente nei progetti, traducendo il rigore statistico in <strong>risultati affidabili</strong>.',
        'method-label-what': 'Cosa',
        'method-label-why': 'Perché',
        'method-label-how': 'Come',
        'method-business-impact-title': 'Impatto',
        'method-marker-analysis': 'Analisi',
        'method-marker-decomposition': 'Decomposizione',
        'method-marker-design': 'Design',
        'method-marker-selection': 'Selezione',
        'method-s1-title': 'Analisi dei dati',
        'method-s1-subtitle': 'Capire è il primo passo, e il più importante',
        'method-s1-what': 'Uso statistiche descrittive, test e diagnostica visuale, come distribuzioni, correlazioni e decomposizioni, per individuare incoerenze, costruire un modello mentale accurato del problema e far emergere i punti critici prima di prendere qualsiasi altra decisione.',
        'method-s1-why': 'Le statistiche di base sono pericolose: media e varianza possono nascondere distribuzioni molto diverse, e un coefficiente di correlazione può mascherare relazioni non lineari o specifiche per un certo segmento. La visualizzazione non è reportistica finale: è il modo in cui scopri <strong>quali domande porre</strong>.',
        'method-s1-how': 'Profilazione univariata → relazioni bivariate e multivariate → diagnostica delle distribuzioni → riduzione dimensionale → test statistici → verifica di ipotesi e di assunzioni statistiche.',
        'method-s1-p1': 'Il mio approccio tratta ogni grafico come un\'ipotesi, non come un deliverable. Parto dalle distribuzioni univariate per capire forma, asimmetria e multimodalità: una distribuzione bimodale spesso indica due popolazioni diverse nascoste nello stesso gruppo. Poi passo alle relazioni bivariate, privilegiando la diagnostica visuale rispetto ai soli coefficienti di correlazione, dato che per esempio il coefficiente di Pearson presuppone una linearità che i dati reali raramente rispettano.',
        'method-s1-p2': 'Nei problemi multivariati uso la riduzione dimensionale non per creare feature ma per osservare: proietto dati ad alta dimensionalità in 2-3 componenti per verificare cluster, outlier o strutture invisibili osservando una variabile alla volta.',
        'method-s1-p3': 'Ogni affermazione statistica che faccio è accompagnata dal grafico che la supporta, così <strong>il ragionamento è verificabile</strong>.',
        'method-s1-tech1-name': 'Diagnostica',
        'method-s1-tech1-desc': 'Istogrammi, KDE e grafici Q-Q per valutare normalità, asimmetria e multimodalità.',
        'method-s1-tech2-name': 'Correlazioni & Dipendenze',
        'method-s1-tech2-desc': 'Matrici di correlazione combinate con scatter matrix e mutual information, per intercettare dipendenze non lineari che un solo coefficiente di correlazione non coglie.',
        'method-s1-tech3-name': 'Analisi di grafi e reti',
        'method-s1-tech3-desc': 'Modellazione di entità e relazioni come nodi e archi per far emergere strutture invisibili in forma tabellare, centralità per identificare nodi influenti, community detection per cluster naturali e path analysis per tracciare la propagazione degli effetti nel sistema.',
        'method-s1-tech4-name': 'Riduzione dimensionale',
        'method-s1-tech4-desc': 'PCA, Kernel PCA, t-SNE, UMAP e altri strumenti usati in modo esplorativo, non come preprocessing, per evidenziare visivamente cluster, separabilità e struttura degli outlier in dati ad alta dimensionalità.',
        'method-s1-tech5-name': 'Decomposizione di serie temporali',
        'method-s1-tech5-desc': 'Separazione della serie in trend, stagionalità e residui per distinguere il segnale reale dal rumore prima di trarre conclusioni su comportamento o performance.',
        'method-s1-biz': 'Un\'analisi dati rigorosa previene l\'errore più costoso: <strong>costruire la soluzione giusta per il problema sbagliato</strong>. Capire distribuzioni, segmenti e bias prima della modellazione permette di intercettare segnali fuorvianti quando correggerli costa poco, non quando costa un intero deployment fallito in produzione perché il modello non funziona. Una fase esplorativa ben condotta fa emergere insight cruciali: il segmento di dati problematico che in realtà è un artefatto proveniente dalla raccolta dati, il trend che è un <a href="https://en.wikipedia.org/wiki/Simpson%27s_paradox">paradosso di Simpson</a>, l\'outlier che rappresenta il gruppo di clienti di maggior valore. Poiché <strong>ogni informazione deriva da una catena visibile e verificabile</strong>, le decisioni superano le review invece di crollare al primo "Sei sicuro?".',
        'method-s2-title': 'Feature engineering & Selezione',
        'method-s2-subtitle': 'La rappresentazione dei dati è il vero punto critico',
        'method-s2-what': 'Estraggo informazioni nascoste dai dati grezzi, combinando conoscenza di dominio, analisi statistica e selezione automatizzata per far emergere i segnali utili al modello.',
        'method-s2-why': 'Dall\'architettura del modello dipende forse il 20% della performance finale. L\'altro 80% dipende dalla qualità e rappresentazione dei dati. <strong>Un modello mediocre con ottime feature batte un modello sofisticato su dati grezzi</strong>.',
        'method-s2-how': 'Ipotesi solide → validazione statistica → importanza via SHAP → analisi di collinearità → testing. <strong>Ogni feature deve guadagnarsi il suo posto.</strong>',
        'method-s2-p1': 'Il mio approccio alla feature engineering è guidato da ipotesi: parto dalla conoscenza di dominio per generare feature candidate, poi uso test statistici e criteri di importanza model-agnostic e model-based per filtrarle. Così evito di creare ciecamente feature che aumentano la complessità senza migliorare la qualità.',
        'method-s2-tech1-name': 'Aggregazioni su finestre mobili',
        'method-s2-tech1-desc': 'Calcolo di statistiche (media, deviazione standard, somma) su finestre temporali e di gruppo multiple per catturare simultaneamente comportamenti su scale diverse.',
        'method-s2-tech2-name': 'Feature di deviazione comportamentale',
        'method-s2-tech2-desc': 'Z-score e rank percentili calcolati sia rispetto alla distribuzione storica del singolo soggetto sia alla distribuzione dell\'intera popolazione, personalizzando il segnale e allo stesso tempo mantenendo informazioni globali.',
        'method-s2-tech3-name': 'Selezione feature basata su SHAP',
        'method-s2-tech3-desc': 'Uso della media dei valori assoluti SHAP come metrica principata di importanza, combinata con analisi di correlazione per rimuovere feature ridondanti preservando quelle complementari.',
        'method-s2-tech4-name': 'Testing',
        'method-s2-tech4-desc': 'Rimozione dei gruppi di feature uno alla volta e misurazione dell\'impatto sulle metriche di validazione. Conferma l\'importanza, evidenzia ridondanze e indica le feature prioritarie.',
        'method-s2-biz': '<strong>Feature migliori → modelli più piccoli → inferenza più veloce → costi infrastrutturali più bassi.</strong> Un set di feature ben progettato consente spesso a modelli più semplici di raggiungere la stessa performance di modelli più complessi su dati grezzi, con meno calcoli, minore latenza e manutenzione più facile. La selezione delle feature riduce anche l\'overfitting e migliora le performance su dati mai visti.',
        'method-s3-title': 'Metodi di calibrazione',
        'method-s3-subtitle': 'Calibrare i modelli per output affidabili',
        'method-s3-what': 'Calibrazione dell\'output del modello per produrre <strong>stime di probabilità affidabili</strong> invece di score arbitrari.',
        'method-s3-why': 'La calibrazione assicura che le probabilità predette da un modello corrispondano davvero a probabilità reali.',
        'method-s3-how': 'Calibrazione Venn-Abers, validazione con ECE e diagrammi di affidabilità su dati hold-out.',
        'method-s3-p1': 'La calibrazione è il passaggio che trasforma score grezzi in probabilità utili alle decisioni. Predire un rischio di 0,30 dovrebbe corrispondere a una probabilità di rischio del 30%, cosa non garantita dagli output dei modelli.',
        // 'method-s3-p2': 'Uso tipicamente Venn-Abers quando serve stabilita in presenza di class imbalance e distribution shift, perché fornisce intervalli di probabilità validi invece di una singola stima puntuale troppo sicura. E' particolarmente utile nei sistemi antifrode e di rischio, dove l\'incertezza deve essere esplicita e operativamente utilizzabile.',
        'method-s3-biz': 'Avere probabilità calibrate permette ai team di impostare soglie in base ai costi attesi, definire zone grigie per la revisione manuale e adattare i provvedimenti da prendere in base al segmento, al canale o al valore della transazione. I risultati sono <strong>meno blocchi non necessari, migliore esperienza del cliente e prevenzione del rischio più affidabile</strong>, perché le decisioni dipendono da probabilità reali e non da score arbitrari.',
        'method-s4-title': 'Metodi ensemble',
        'method-s4-subtitle': 'Combinare modelli per output robusti',
        'method-s4-what': 'Combinazione di più modelli per ridurre varianza e bias, compensando le debolezze individuali e mantenendo la complessità del sistema proporzionata al guadagno di performance.',
        'method-s4-why': 'Modelli dello stesso tipo hanno punti deboli correlati. Ensemble fatti da modelli diversi sbagliano su esempi diversi: <strong>la loro combinazione è più robusta di qualsiasi modello singolo</strong>.',
        'method-s4-how': 'Soft voting → Bagging → Boosting → Stacking con meta-learner in scenari più complessi.',
        'method-s4-p1': 'La scelta tra bagging, boosting e stacking dipende dalla struttura del problema. Su dati tabellari con interazioni complesse, parto spesso da <strong>modelli di boosting diversi</strong> (XGBoost, CatBoost, LightGBM), ciascuno con una gestione differente delle feature categoriche, diversi approcci di regolarizzazione e distinti algoritmi di costruzione degli alberi, ottenendo gestioni degli errori differenti.',
        'method-s4-p2': 'La combinazione ensemble avviene tramite soft voting su probabilità calibrate, non su score grezzi. Questo è cruciale: mescolare score non calibrati è matematicamente scorretto (gli score sono su scale e distribuzioni diverse). Prima calibrare, poi unire, produce una probabilità congiunta coerente.',
        'method-s4-biz': '<strong>Rischio ridotto e maggiore affidabilità.</strong> Gli ensemble riducono in modo consistente la varianza delle predizioni, aspetto fondamentale nel rilevamento di eventi rari dove i punti deboli di un singolo modello possono costare molto. In produzione, un miglioramento dell\'1-2% in AUC ROC o AUC PR si traduce in riduzioni concrete di perdite da frode o costi da falsi positivi.',  // su scala transazionale
        'method-s5-title': 'Quantificazione dell\'incertezza',
        'method-s5-subtitle': 'Sapere cosa il modello non sa',
        'method-s5-what': 'Quantificazione di <strong>quanto un modello è sicuro</strong> delle proprie previsioni: non solo una decisione, ma un insieme di esiti plausibili che rifletta quanto il modello sia realmente sicuro.',
        'method-s5-why': 'Modelli troppo sicuri dei loro output producono sistemi fragili. Un modello che dice "99% frode" quando l\'incertezza reale è alta porta a decisioni sbagliate e a <strong>potenziali danni o perdite economiche</strong>.',
        'method-s5-how': 'Conformal prediction → insiemi di esiti con un tasso di copertura garantito, ad esempio "la risposta corretta sarà una di queste il 95% delle volte", invece di un\'unica previsione apparentemente sicura.',
        'method-s5-p1': 'Oltre alla calibrazione puntuale, applico anche metodi di conformal prediction per segnalare direttamente l\'ambiguità: invece di dire "Questa è una frode", il modello può dire "Questa transazione appartiene probabilmente a una di queste classi" ed essere trasparente quando è realmente incerto. Abbinato a una policy di review basata sui costi, questo approccio è particolarmente utile quando il costo di non individuare una frode differisce dal costo di un falso allarme.',
        'method-s5-biz': 'Un insieme di previsione ristretto indica alta certezza e può essere instradato automaticamente, mentre insiemi più ampi attivano una revisione manuale o ulteriori verifiche. In questo modo l\'incertezza diventa un <strong>segnale di business controllabile</strong>: è la sicurezza a determinare l\'intensita dell\'azione, non solo il valore numerico dello score.',
        'method-s6-title': 'Explainability',
        'method-s6-subtitle': 'Giustificare le decisioni del modello',
        'method-s6-what': 'Tecniche che decompongono l\'output del modello in <strong>contributi per feature</strong>, rendendo le predizioni verificabili da manager, compliance e auditor.',
        'method-s6-why': 'I modelli black-box erodono la fiducia, bloccano l\'approvazione normativa e rendono il debugging quasi impossibile. <strong>L\'explainability non è opzionale</strong> nei sistemi in produzione: è un prerequisito per l\'adozione da parte degli stakeholder.',
        'method-s6-how': 'SHAP per modelli basati sugli alberi: coerente e teoricamente fondato. LIME come approssimazione locale complementare per controlli di coerenza e architetture non basate sugli alberi.',
        'method-s6-p1': 'I valori SHAP assegnano ad ogni feature un contributo alla predizione. Diversamente da metodi più semplici, SHAP è specifico per ogni predizione e direzionale: <strong>non indica solo quali feature abbiano avuto un peso decisivo, ma anche quanto e in quale direzione</strong>.',
        'method-s6-p2': 'Distinguo due livelli di spiegazione: <strong>globale</strong> (valori SHAP aggregati su tutte le predizioni, usati per validazione del modello, selezione feature e comunicazione con gli stakeholder) e <strong>locale</strong> (grafici SHAP per singola predizione, usati in dashboard per analisti e audit).',
        'method-s6-callout': '<strong>Rilevanza normativa</strong>: in ambito banking e finance, i regolatori (EBA, GDPR, AI Act) richiedono sempre più spesso che le decisioni automatizzate siano spiegabili alle persone coinvolte. Un processo di audit basato su SHAP è sia uno strumento tecnico che un asset di compliance.',
        'method-s6-biz': '<strong>Revisione più rapida da parte degli analisti, maggiore fiducia, conformità normativa</strong>. Gli analisti antifrode che capiscono perché una transazione è stata segnalata risolvono i casi più velocemente e con maggiore precisione. I team di compliance possono generare report di audit su richiesta. I clienti che contestano un blocco ricevono una spiegazione dettagliata invece di un generico "Il nostro sistema l\'ha segnalata".',
        'method-s7-title': 'Monitoraggio del modello e data drift',
        'method-s7-subtitle': 'Individuare il calo delle performance prima che diventi un costo',
        'method-s7-what': 'Monitoraggio continuo delle proprietà statistiche di input e output in produzione, rilevando quando la distribuzione dei dati si allontana da quella di training.',
        'method-s7-why': 'Il mondo cambia. I pattern di frode evolvono, il comportamento dei clienti si modifica, le pipeline dati a monte si rompono. Un modello addestrato 6 mesi fa che lavora su dati di oggi <strong>fallisce in silenzio</strong> senza monitoraggio.',
        'method-s7-how': 'Test statistici per rilevare il cambiamento di distribuzione → monitoraggio delle performance su finestre temporali → alert automatici e trigger di retraining al superamento delle soglie di drift.',
        'method-s7-p1': 'Distinguo tra <strong>data drift</strong> (cambiamento della distribuzione in input), <strong>concept drift</strong> (cambiamento della relazione tra input e output) e <strong>performance drift</strong> (degrado delle metriche osservate). Ognuno richiede strategie diverse di rilevamento e risposta.',
        'method-s7-p2': 'Nei contesti come l\'antifrode monitoro anche l\' <strong>adversarial drift</strong>, cioe cambiamenti intenzionali in cui i frodatori imparano a imitare pattern legittimi. Lo rilevo analizzando nel tempo la distribuzione degli score delle transazioni segnalate, non solo le distribuzioni delle feature grezze.',
        'method-s7-biz': '<strong>Rilevazione proattiva del calo delle performance vs gestione reattiva della crisi.</strong> Senza monitoraggio, il calo delle performance emerge quando i KPI di business calano, spesso settimane dopo l\'inizio del problema. Il drift monitoring intercetta i problemi prima che si traducano in perdite rilevanti o peggioramenti dell\'esperienza cliente.',
        'method-s8-title': 'CI/CD per ML (MLOps)',
        'method-s8-subtitle': 'Trattare il deployment dei modelli come software engineering',
        'method-s8-what': 'Applicazione delle best practice di ingegneria del software all\'intero ciclo di vita ML: <strong>versioning, test automatici, deployment a fasi e integrazione continua</strong> su dati, codice e modelli.',
        'method-s8-why': 'ML senza CI/CD produce risultati non riproducibili, deployment non testabili e fallimenti non recuperabili. <strong>Un modello è software</strong>: merita lo stesso rigore.',
        'method-s8-how': 'Versioning dei modelli su Git, gate di valutazione automatici prima della promozione, serving containerizzato con Docker/Kubernetes e rollout graduali (shadow mode → canary → traffico completo).',
        'method-s8-p1': 'Tratto ogni modello come un artefatto software: <strong>versionato, testato e deployato tramite pipeline controllate</strong>. Questo significa pipeline dati come codice (non notebook), modelli tracciati con metadati (versione dati di training, iperparametri, metriche), e promozione in produzione solo dopo il superamento dei gate di validazione automatici.',
        'method-s8-p2': 'Lo <strong>shadow deployment</strong> è una pratica chiave: una nuova versione del modello lavora in parallelo rispetto al modello in produzione, riceve gli stessi input ma i suoi output non comportano nessuna azione. Questo permette una verifica su traffico reale prima di qualsiasi impatto sul cliente, confrontando le predizioni del nuovo modello con la realtà man mano che arrivano le informazioni.',
        'method-s8-callout': '<strong>Riproducibilità come principio fondamentale</strong>: ogni addestramento è riproducibile, stesso codice, stessa versione dati e stessi seed casuali producono lo stesso modello. Senza queste garanzie, il debugging si basa su ipotesi.',
        'method-s8-biz': '<strong>Cicli di iterazione più veloci, deployment senza rallentamenti, rollback immediato.</strong> Quando emerge un nuovo pattern di frode, un modello riaddestrato può passare dai dati alla produzione in ore invece che settimane. Se un deployment introduce regressioni, il rollback all\'ultima versione stabile avviene in minuti. Questa rapidità è un vantaggio competitivo diretto.'
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