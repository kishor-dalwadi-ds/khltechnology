/* ==========================================================
   KHL Technologies — site content
   Edit this file to change services, industries, projects,
   testimonials, jobs and company details.
   ========================================================== */

// All photos are stored locally in assets/img/photos/ (originally from Unsplash, free license)
const img = name => `assets/img/photos/${name}.jpg`;

window.KHL = {};

/* ---------------- Company ---------------- */
KHL.company = {
  name: 'KHL Technologies',
  tagline: 'Build. Support. Scale.',
  email: 'info@khltechnology.com',
  salesEmail: 'sales@khltechnology.com',
  careersEmail: 'careers@khltechnology.com',
  phone: '+91 99257 13331',
  phoneHref: '+919925713331',
  whatsapp: '919925713331',
  address: 'A-401, Sun Westbank, Near Vallabh Sadan Riverfront, Opposite City Gold Cinema, Ashram Road, Navrangpura, Ahmedabad, Gujarat 380009, India',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=23.0315218%2C72.5710046',   // Sun Westbank, Ashram Road (office pin)
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM IST · Support 24×7',
  social: { linkedin: '', x: '', facebook: '', github: '' },   // add profile URLs; empty ones are hidden

  /* Contact form delivery (a static site needs a form service to receive submissions).
     provider: 'web3forms' → key = your Web3Forms access key (free at https://web3forms.com)
     provider: 'formspree' → key = your Formspree form ID, e.g. 'xyzabcd' (https://formspree.io)
     provider: 'mailto'    → no service; opens the visitor's email app instead (fallback) */
  form: { provider: 'mailto', key: '' },

  /* Optional online booking link (e.g. Calendly / Zoho Bookings / Google Calendar appointment page).
     When set, "Book a Call" buttons open it; when empty they go to the contact page. */
  bookingUrl: ''
};

/* ---------------- Services ---------------- */
KHL.serviceGroups = [
  { key: 'build', name: 'Build', icon: 'code-2', desc: 'Design and engineer new digital products' },
  { key: 'run', name: 'Support & Secure', icon: 'life-buoy', desc: 'Keep systems fast, stable and protected' },
  { key: 'transform', name: 'Cloud, Data & AI', icon: 'sparkles', desc: 'Modernize and automate your business' },
  { key: 'enterprise', name: 'Enterprise Solutions', icon: 'boxes', desc: 'ERP, CRM, integration and consulting' },
  { key: 'talent', name: 'Resources & Teams', icon: 'users', desc: 'Skilled engineers on demand' }
];

KHL.services = [
  /* ---- BUILD ---- */
  {
    slug: 'custom-software-development', group: 'build', icon: 'code-2', color: 'grad-1',
    name: 'Custom Software Development',
    short: 'Tailor-made enterprise applications, portals and SaaS products built to scale.',
    image: img('service-custom-software-development'),
    intro: 'Off-the-shelf software rarely fits the way your business actually works. We design and build custom applications around your processes, from internal tools and enterprise platforms to customer-facing SaaS products, using clean architecture that is easy to extend and maintain for years.',
    offerings: [
      ['Enterprise Applications', 'Workflow, approval, document and operations systems for large teams.'],
      ['SaaS Product Development', 'Multi-tenant platforms with subscriptions, billing and admin consoles.'],
      ['Customer & Partner Portals', 'Self-service portals with secure login, dashboards and integrations.'],
      ['Microservices & APIs', 'Scalable, well-documented services and REST / GraphQL APIs.'],
      ['MVP Development', 'Launch a working product in 8–12 weeks to validate your idea.'],
      ['Product Re-engineering', 'Rebuild slow or unstable products on a modern, reliable stack.']
    ],
    benefits: ['Software that fits your exact business process', 'Full ownership of source code and IP', 'Scalable architecture ready for growth', 'Lower long-term cost than license-heavy tools', 'Seamless integration with existing systems'],
    tech: ['Java / Spring Boot', '.NET Core', 'Node.js', 'Python', 'React', 'Angular', 'PostgreSQL', 'SQL Server', 'Docker', 'Kubernetes'],
    faqs: [
      ['How long does a custom software project take?', 'A focused MVP usually takes 8–12 weeks. Larger enterprise systems are delivered in phases over 4–12 months, with usable releases every few weeks.'],
      ['Will I own the source code?', 'Yes. You own 100% of the source code, designs and documentation from day one.'],
      ['Can you work with our existing team?', 'Absolutely. We regularly work alongside in-house teams, following your tools, standards and release process.']
    ]
  },
  {
    slug: 'web-application-development', group: 'build', icon: 'globe', color: 'grad-2',
    name: 'Web Application Development',
    short: 'Fast, secure and SEO-friendly websites, web apps and progressive web apps.',
    image: img('service-web-application-development'),
    intro: 'From corporate websites to complex web applications, we build fast, accessible and secure experiences on modern front-end frameworks and proven back-end platforms, optimized for performance, SEO and conversions.',
    offerings: [
      ['Web Applications', 'Feature-rich, responsive applications with real-time capabilities.'],
      ['Progressive Web Apps', 'App-like, installable, offline-ready experiences in the browser.'],
      ['Corporate Websites & CMS', 'WordPress, Strapi and headless CMS websites your team can manage.'],
      ['Dashboards & Admin Panels', 'Data-rich dashboards with charts, filters and role-based access.'],
      ['Front-end Development', 'Pixel-perfect, accessible UIs in React, Angular, Vue and Next.js.'],
      ['Performance & SEO Optimization', 'Core Web Vitals, speed tuning and technical SEO fixes.']
    ],
    benefits: ['Mobile-first, responsive on every screen', 'Fast load times and strong Core Web Vitals', 'Secure by design (OWASP best practices)', 'Accessible (WCAG 2.1) and SEO-ready', 'Easy content management for your team'],
    tech: ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'PHP / Laravel', 'WordPress', 'Strapi', 'Tailwind CSS'],
    faqs: [
      ['Do you build websites as well as web apps?', 'Yes. We build everything from marketing websites and landing pages to large, data-driven web platforms.'],
      ['Will our website be mobile friendly?', 'Every project is responsive and tested on real mobile devices and all major browsers.'],
      ['Can we update content ourselves?', 'Yes. We set up an easy-to-use CMS and train your team.']
    ]
  },
  {
    slug: 'mobile-app-development', group: 'build', icon: 'smartphone', color: 'grad-3',
    name: 'Mobile App Development',
    short: 'Native and cross-platform iOS & Android apps that users love.',
    image: img('service-mobile-app-development'),
    intro: 'We design, build and launch high-quality mobile apps for iOS and Android, native or cross-platform, with secure back-ends, offline support, push notifications and analytics, and we take care of App Store and Play Store publishing.',
    offerings: [
      ['iOS App Development', 'Native Swift apps following Apple design guidelines.'],
      ['Android App Development', 'Native Kotlin apps optimized for the Android ecosystem.'],
      ['Cross-Platform Apps', 'One codebase for iOS and Android with Flutter or React Native.'],
      ['Enterprise Mobility', 'Field-force, inspection and approval apps with offline sync.'],
      ['App Back-end & APIs', 'Secure, scalable APIs, authentication and push notifications.'],
      ['App Maintenance', 'OS upgrades, crash fixes, new features and store management.']
    ],
    benefits: ['Up to 40% cost saving with cross-platform', 'Smooth, native-quality performance', 'Offline-first and secure data storage', 'Store publishing handled end-to-end', 'Analytics and crash reporting built in'],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'GraphQL', 'SQLite', 'App Center', 'Fastlane'],
    faqs: [
      ['Native or cross-platform: which is right for me?', 'Cross-platform (Flutter / React Native) suits most business apps and saves time and cost. Native is best for apps needing heavy device or graphics performance. We recommend based on your needs.'],
      ['Do you publish the app to the stores?', 'Yes, we handle App Store and Google Play submission, listings and review.'],
      ['Can you take over an existing app?', 'Yes. We audit the code, fix critical issues and continue development.']
    ]
  },
  {
    slug: 'ecommerce-development', group: 'build', icon: 'shopping-cart', color: 'grad-4',
    name: 'E-commerce Development',
    short: 'Online stores, marketplaces and B2B commerce that convert and scale.',
    image: img('service-ecommerce-development'),
    intro: 'We build high-converting e-commerce experiences: D2C stores, multi-vendor marketplaces and B2B ordering portals, integrated with payments, logistics, ERP and marketing tools, and engineered to stay fast on your busiest sale days.',
    offerings: [
      ['Custom Online Stores', 'Unique, brand-first storefronts with fast checkout.'],
      ['Shopify & WooCommerce', 'Theme development, apps, customization and migration.'],
      ['Magento / Adobe Commerce', 'Enterprise commerce builds, upgrades and support.'],
      ['Multi-vendor Marketplaces', 'Vendor onboarding, commissions, payouts and ratings.'],
      ['Headless Commerce', 'API-first commerce with blazing-fast front-ends.'],
      ['B2B Commerce Portals', 'Customer pricing, credit limits, bulk ordering and ERP sync.']
    ],
    benefits: ['Higher conversion with optimized UX and checkout', 'Scales for flash sales and peak traffic', 'Integrated payments, shipping, tax and ERP', 'SEO and marketing tools built in', 'Secure, PCI-DSS-aware payment flows'],
    tech: ['Shopify', 'WooCommerce', 'Magento', 'commercetools', 'Next.js', 'Node.js', 'Stripe', 'Razorpay', 'PayPal', 'Algolia'],
    faqs: [
      ['Which e-commerce platform should we use?', 'It depends on catalog size, budget and custom needs. We compare Shopify, WooCommerce, Magento and custom/headless options and recommend the best fit.'],
      ['Can you migrate our existing store?', 'Yes, including products, customers, orders and SEO redirects, without losing rankings.'],
      ['Do you integrate payment gateways and couriers?', 'Yes, we integrate local and international payment gateways, wallets, COD and shipping partners.']
    ]
  },
  {
    slug: 'ui-ux-design', group: 'build', icon: 'palette', color: 'grad-1',
    name: 'UI/UX Design',
    short: 'Research-driven product design, prototypes and design systems.',
    image: img('service-ui-ux-design'),
    intro: 'Great software starts with great design. Our designers combine user research, information architecture and visual design to create intuitive, accessible interfaces that reduce training effort and increase adoption and conversion.',
    offerings: [
      ['User Research', 'Interviews, surveys and analytics to understand real user needs.'],
      ['UX Audits', 'Expert review of usability, accessibility and conversion issues.'],
      ['Wireframes & Prototypes', 'Clickable Figma prototypes to validate ideas before coding.'],
      ['Visual & UI Design', 'Modern, on-brand interfaces for web and mobile.'],
      ['Design Systems', 'Reusable component libraries for consistent, faster delivery.'],
      ['Usability Testing', 'Test with real users and iterate on evidence.']
    ],
    benefits: ['Higher user adoption and satisfaction', 'Fewer support tickets and training needs', 'Faster development with ready components', 'Accessible (WCAG) and consistent', 'Validated ideas before investing in code'],
    tech: ['Figma', 'FigJam', 'Adobe XD', 'Illustrator', 'Maze', 'Hotjar', 'Storybook', 'Lottie'],
    faqs: [
      ['Can you redesign an existing product?', 'Yes. We start with a UX audit and deliver improvements in phases to avoid disrupting users.'],
      ['Do you hand over design files?', 'Yes, you receive all Figma files, assets and the design system.']
    ]
  },

  /* ---- RUN & SECURE ---- */
  {
    slug: 'application-support-maintenance', group: 'run', icon: 'life-buoy', color: 'grad-2',
    name: 'Application Support & Maintenance',
    short: 'SLA-backed L1, L2 & L3 support, monitoring and continuous enhancements.',
    image: img('service-application-support-maintenance'),
    intro: 'Your business depends on applications that simply work. Our Application Management Services (AMS) team takes ownership of your applications, whether we built them or not, and keeps them stable, secure and improving under clear SLAs, 24×7 if needed.',
    offerings: [
      ['L1 / L2 / L3 Support', 'Service desk, functional and deep technical support tiers.'],
      ['24×7 Monitoring', 'Proactive alerting on uptime, performance and errors.'],
      ['Incident & Problem Management', 'ITIL-aligned processes with root-cause analysis.'],
      ['Bug Fixes & Enhancements', 'Continuous improvements through planned releases.'],
      ['Performance Tuning', 'Database, code and infrastructure optimization.'],
      ['Version Upgrades & Patching', 'Framework, OS and security patch management.']
    ],
    benefits: ['Guaranteed response and resolution SLAs', 'Reduced downtime and business risk', 'Lower support cost vs in-house teams', 'No dependency on individual people', 'Monthly service reports and reviews'],
    tech: ['ServiceNow', 'Jira Service Management', 'Freshdesk', 'Datadog', 'New Relic', 'Grafana', 'Azure Monitor', 'CloudWatch', 'ELK Stack'],
    faqs: [
      ['Can you support applications built by another vendor?', 'Yes. We run a structured 2–6 week knowledge transfer, document the system and then take over support.'],
      ['What SLAs do you offer?', 'SLAs are tailored to you. Typical critical-priority response is 15–30 minutes with 24×7 coverage.'],
      ['Which technologies do you support?', 'Java, .NET, PHP, Python, Node.js, SAP, Odoo, Salesforce, legacy systems and more.']
    ]
  },
  {
    slug: 'managed-it-services', group: 'run', icon: 'server', color: 'grad-3',
    name: 'Managed IT & Infrastructure',
    short: 'Servers, networks, Microsoft 365 and end-user support managed for you.',
    image: img('service-managed-it-services'),
    intro: 'Focus on your business while we run your IT. We manage servers, cloud and on-premise infrastructure, networks, backups, Microsoft 365 / Google Workspace and end-user support with predictable monthly pricing.',
    offerings: [
      ['Infrastructure Management', 'Windows / Linux servers, virtualization and storage.'],
      ['Network Management', 'Firewalls, VPN, Wi-Fi and network monitoring.'],
      ['Microsoft 365 & Google Workspace', 'Setup, migration, licensing and administration.'],
      ['Backup & Disaster Recovery', 'Automated backups and tested recovery plans.'],
      ['IT Help Desk', 'Remote end-user support for your staff.'],
      ['Database Administration', 'SQL Server, Oracle, MySQL and PostgreSQL DBA services.']
    ],
    benefits: ['Predictable monthly IT cost', 'Proactive, not reactive, IT', 'Reduced downtime and security risk', 'Access to certified specialists', 'Scales with your team'],
    tech: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Microsoft 365', 'Active Directory / Entra ID', 'Veeam', 'Fortinet', 'Intune'],
    faqs: [
      ['Do you provide on-site support?', 'Most work is delivered remotely. On-site support can be arranged depending on location.'],
      ['Can you migrate our email to Microsoft 365?', 'Yes, with zero data loss and minimal downtime.']
    ]
  },
  {
    slug: 'qa-software-testing', group: 'run', icon: 'bug', color: 'grad-4',
    name: 'QA & Software Testing',
    short: 'Manual, automated, performance and security testing for reliable releases.',
    image: img('service-qa-software-testing'),
    intro: 'Ship with confidence. Our QA engineers build testing strategies and automation frameworks that catch defects early, speed up releases and protect your users from costly production issues.',
    offerings: [
      ['Manual & Functional Testing', 'Thorough test cases covering every business flow.'],
      ['Test Automation', 'Selenium, Playwright, Cypress and Appium frameworks in CI/CD.'],
      ['Performance & Load Testing', 'Validate speed and stability under peak load.'],
      ['API Testing', 'Automated contract and regression tests for APIs.'],
      ['Mobile App Testing', 'Real-device testing across OS versions and screen sizes.'],
      ['QA Consulting & TCoE', 'Set up QA processes, tools and a testing center of excellence.']
    ],
    benefits: ['Fewer production defects', 'Faster, more frequent releases', 'Up to 70% regression effort saved via automation', 'Independent, unbiased quality view', 'Clear quality metrics and reports'],
    tech: ['Selenium', 'Playwright', 'Cypress', 'Appium', 'JMeter', 'k6', 'Postman', 'RestAssured', 'TestRail', 'BrowserStack'],
    faqs: [
      ['Can you test software built by another team?', 'Yes, independent testing is one of our core services.'],
      ['Do you provide dedicated QA resources?', 'Yes, QA engineers can join your team on a monthly or project basis.']
    ]
  },
  {
    slug: 'cybersecurity', group: 'run', icon: 'shield-check', color: 'grad-1',
    name: 'Cybersecurity Services',
    short: 'VAPT, security audits, secure code review and compliance readiness.',
    image: img('service-cybersecurity'),
    intro: 'Protect your data, customers and reputation. We identify vulnerabilities before attackers do, harden your applications and cloud, and help you prepare for compliance frameworks such as ISO 27001, SOC 2, GDPR, HIPAA and PCI-DSS.',
    offerings: [
      ['Vulnerability Assessment & Pen Testing', 'Web, mobile, API, network and cloud VAPT.'],
      ['Secure Code Review', 'Manual and automated review against OWASP Top 10.'],
      ['Cloud Security', 'Configuration reviews and hardening for AWS, Azure and GCP.'],
      ['Identity & Access Management', 'SSO, MFA and role-based access implementation.'],
      ['Compliance Readiness', 'Gap analysis and controls for ISO 27001, SOC 2, HIPAA, GDPR.'],
      ['Security Monitoring', 'SIEM setup, log monitoring and incident response support.']
    ],
    benefits: ['Find and fix risks before they are exploited', 'Protect customer trust and brand', 'Meet regulatory and client requirements', 'Actionable reports with fix guidance', 'Security built into development (DevSecOps)'],
    tech: ['Burp Suite', 'OWASP ZAP', 'Nessus', 'SonarQube', 'Snyk', 'Microsoft Sentinel', 'Wazuh', 'Keycloak', 'Okta'],
    faqs: [
      ['How often should we do penetration testing?', 'At least once a year and after every major release or infrastructure change.'],
      ['Do you help fix the vulnerabilities found?', 'Yes, our engineers can remediate issues and re-test to confirm fixes.']
    ]
  },

  /* ---- CLOUD, DATA & AI ---- */
  {
    slug: 'cloud-services', group: 'transform', icon: 'cloud', color: 'grad-2',
    name: 'Cloud Services',
    short: 'Cloud strategy, migration, cloud-native development and cost optimization.',
    image: img('service-cloud-services'),
    intro: 'Move faster and spend smarter in the cloud. We plan and execute migrations to AWS, Azure and Google Cloud, build cloud-native applications and continuously optimize cost, performance and security.',
    offerings: [
      ['Cloud Strategy & Assessment', 'Readiness assessment, roadmap and TCO analysis.'],
      ['Cloud Migration', 'Lift-and-shift, re-platform or re-architect with minimal downtime.'],
      ['Cloud-Native Development', 'Serverless, containers and managed services.'],
      ['Multi-cloud & Hybrid', 'Architectures spanning on-premise and multiple clouds.'],
      ['Cloud Cost Optimization', 'FinOps reviews, right-sizing and reserved capacity planning.'],
      ['Cloud Managed Services', '24×7 operations, patching, backups and monitoring.']
    ],
    benefits: ['20–40% lower infrastructure costs', 'Elastic scaling for peak demand', 'Higher availability and disaster recovery', 'Faster time to market', 'Enterprise-grade security'],
    tech: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'Lambda', 'Azure Functions', 'CloudFormation'],
    faqs: [
      ['Which cloud is best for us?', 'We are cloud-agnostic and recommend AWS, Azure or GCP based on your workloads, skills, licensing and budget.'],
      ['Will there be downtime during migration?', 'We plan migrations in waves with rollback plans, keeping downtime minimal and scheduled.']
    ]
  },
  {
    slug: 'devops', group: 'transform', icon: 'infinity', color: 'grad-3',
    name: 'DevOps & SRE',
    short: 'CI/CD pipelines, infrastructure as code, containers and observability.',
    image: img('service-devops'),
    intro: 'Release faster with fewer failures. We automate build, test and deployment pipelines, codify infrastructure and set up monitoring so your team can ship multiple times a day with confidence.',
    offerings: [
      ['CI/CD Pipelines', 'Automated build, test and deployment for every commit.'],
      ['Infrastructure as Code', 'Repeatable environments with Terraform and Ansible.'],
      ['Containers & Kubernetes', 'Containerization, EKS / AKS / GKE and Helm.'],
      ['Observability', 'Logs, metrics, tracing and alerting in one place.'],
      ['DevSecOps', 'Security scanning built into your pipelines.'],
      ['Site Reliability Engineering', 'SLOs, incident response and reliability engineering.']
    ],
    benefits: ['10× more frequent deployments', 'Fewer failed releases and rollbacks', 'Consistent, reproducible environments', 'Faster recovery from incidents', 'Lower operational effort'],
    tech: ['GitHub Actions', 'GitLab CI', 'Azure DevOps', 'Jenkins', 'ArgoCD', 'Terraform', 'Ansible', 'Kubernetes', 'Prometheus', 'Grafana'],
    faqs: [
      ['We deploy manually today. Where do we start?', 'We begin with a DevOps assessment and automate the highest-value pipeline first, usually within 2–4 weeks.']
    ]
  },
  {
    slug: 'legacy-modernization', group: 'transform', icon: 'refresh-cw', color: 'grad-4',
    name: 'Legacy Modernization',
    short: 'Re-platform, re-architect and migrate aging systems with zero disruption.',
    image: img('service-legacy-modernization'),
    intro: 'Legacy systems slow you down and are costly and risky to run. We modernize VB6, classic ASP, old .NET and Java, PowerBuilder, Oracle Forms and monolithic systems into modern, cloud-ready applications, step by step and without business disruption.',
    offerings: [
      ['Application Assessment', 'Code, architecture and risk analysis with a modernization roadmap.'],
      ['Re-platforming', 'Move to modern frameworks, .NET Core, Java 17+ or cloud.'],
      ['Monolith to Microservices', 'Incremental decomposition using the strangler pattern.'],
      ['UI Modernization', 'Replace desktop / old web UIs with modern web and mobile apps.'],
      ['Database Migration', 'Oracle, DB2, Access to PostgreSQL, SQL Server or cloud databases.'],
      ['Data Migration & Validation', 'Accurate, audited migration of historic data.']
    ],
    benefits: ['Reduced maintenance and license costs', 'Improved security and compliance', 'Faster feature delivery', 'Easier hiring for modern tech stacks', 'Business continuity throughout'],
    tech: ['.NET 8', 'Java 21', 'Spring Boot', 'Angular', 'React', 'PostgreSQL', 'Azure', 'AWS', 'Kafka'],
    faqs: [
      ['Can we modernize in phases?', 'Yes, and we recommend it. We modernize module by module while the old system keeps running.']
    ]
  },
  {
    slug: 'data-analytics', group: 'transform', icon: 'bar-chart-3', color: 'grad-1',
    name: 'Data Engineering & BI',
    short: 'Data warehouses, pipelines, dashboards and self-service analytics.',
    image: img('service-data-analytics'),
    intro: 'Turn scattered data into clear decisions. We build modern data platforms, reliable pipelines and interactive dashboards that give leaders and teams a single, trusted view of the business.',
    offerings: [
      ['Data Warehousing & Lakehouse', 'Snowflake, BigQuery, Synapse and Databricks platforms.'],
      ['ETL / ELT Pipelines', 'Automated, monitored data pipelines from all your sources.'],
      ['BI Dashboards & Reporting', 'Power BI, Tableau and Looker dashboards.'],
      ['Data Migration', 'Accurate migration between systems with reconciliation.'],
      ['Data Governance & Quality', 'Master data, data catalogs and quality rules.'],
      ['Real-time Analytics', 'Streaming analytics for live operational insight.']
    ],
    benefits: ['One source of truth across departments', 'Faster, data-driven decisions', 'Automated reports: no more spreadsheets', 'Foundation for AI and forecasting', 'Better data quality and governance'],
    tech: ['Power BI', 'Tableau', 'Snowflake', 'Databricks', 'Azure Synapse', 'BigQuery', 'Apache Spark', 'Airflow', 'dbt', 'Kafka'],
    faqs: [
      ['We have data in many systems. Can you combine it?', 'Yes. We connect ERP, CRM, databases, spreadsheets and APIs into one data platform.']
    ]
  },
  {
    slug: 'ai-machine-learning', group: 'transform', icon: 'brain-circuit', color: 'grad-2',
    name: 'AI, ML & Generative AI',
    short: 'Practical AI: chatbots, document AI, predictions and GenAI assistants.',
    image: img('service-ai-machine-learning'),
    intro: 'We help businesses put AI to work on real problems: AI assistants that answer from your own documents, intelligent document processing, demand forecasting, recommendations and computer vision, built responsibly with data privacy in mind.',
    offerings: [
      ['Generative AI & LLM Apps', 'Chatbots and copilots grounded in your own data (RAG).'],
      ['AI Agents & Automation', 'Agents that complete multi-step tasks across your systems.'],
      ['Intelligent Document Processing', 'Extract data from invoices, forms, claims and IDs.'],
      ['Predictive Analytics', 'Forecasting, churn, risk scoring and demand prediction.'],
      ['Recommendation Engines', 'Personalized products, content and offers.'],
      ['Computer Vision', 'Image recognition, quality inspection and OCR.']
    ],
    benefits: ['Automate repetitive knowledge work', '24×7 instant customer and employee support', 'Better predictions and decisions', 'Secure, private deployment options', 'Fast proof-of-concept in weeks'],
    tech: ['Python', 'Anthropic Claude', 'Azure OpenAI', 'AWS Bedrock', 'LangChain', 'LlamaIndex', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Vector DBs'],
    faqs: [
      ['Is our data safe when using AI?', 'Yes. We use enterprise AI services and private deployments where your data is not used for model training, with strict access controls.'],
      ['How quickly can we see results?', 'Most AI proofs of concept are delivered in 3–6 weeks.']
    ]
  },
  {
    slug: 'rpa-automation', group: 'transform', icon: 'bot', color: 'grad-3',
    name: 'RPA & Process Automation',
    short: 'Automate repetitive, rule-based work with bots and workflows.',
    image: img('service-rpa-automation'),
    intro: 'Free your people from copy-paste work. We identify high-value automation opportunities and build software bots and workflows that process data, documents and transactions faster and without errors.',
    offerings: [
      ['Process Discovery', 'Identify and prioritize automation opportunities by ROI.'],
      ['RPA Bot Development', 'UiPath, Power Automate and Automation Anywhere bots.'],
      ['Workflow Automation', 'Approvals, notifications and cross-system workflows.'],
      ['Intelligent Automation', 'RPA combined with AI for documents and decisions.'],
      ['Bot Support & Monitoring', 'Keep bots running as applications change.'],
      ['Automation CoE Setup', 'Governance, standards and scaling across the business.']
    ],
    benefits: ['60–80% reduction in manual effort', 'Near-zero processing errors', 'Faster turnaround, 24×7', 'Quick ROI, often within months', 'Staff focus on higher-value work'],
    tech: ['UiPath', 'Power Automate', 'Automation Anywhere', 'Python', 'n8n', 'Zapier', 'Camunda'],
    faqs: [
      ['Which processes are good for automation?', 'High-volume, rule-based, repetitive tasks such as data entry, reconciliations, report generation and invoice processing.']
    ]
  },
  {
    slug: 'iot-solutions', group: 'transform', icon: 'cpu', color: 'grad-4',
    name: 'IoT Solutions',
    short: 'Connected devices, telemetry platforms and smart dashboards.',
    image: img('service-iot-solutions'),
    intro: 'Connect your physical operations to the digital world. We build IoT platforms that collect data from sensors, machines and vehicles, then visualize, alert and automate in real time.',
    offerings: [
      ['IoT Platform Development', 'Device management, telemetry ingestion and storage.'],
      ['Industrial IoT', 'Machine monitoring, OEE and predictive maintenance.'],
      ['Fleet & Asset Tracking', 'GPS tracking, geofencing and route analytics.'],
      ['Smart Building & Energy', 'Energy monitoring and building automation.'],
      ['Edge Computing', 'Local processing for low-latency decisions.'],
      ['IoT Dashboards & Apps', 'Real-time web and mobile monitoring apps.']
    ],
    benefits: ['Real-time visibility of operations', 'Less downtime via predictive maintenance', 'Lower energy and operating costs', 'Data for continuous improvement'],
    tech: ['MQTT', 'AWS IoT', 'Azure IoT Hub', 'Node-RED', 'InfluxDB', 'Grafana', 'Python', 'Embedded C'],
    faqs: [
      ['Do you work with existing machines and sensors?', 'Yes. We integrate with PLCs, gateways and common industrial protocols.']
    ]
  },

  /* ---- ENTERPRISE ---- */
  {
    slug: 'erp-solutions', group: 'enterprise', icon: 'boxes', color: 'grad-1',
    name: 'ERP Solutions',
    short: 'ERP implementation, customization, migration and support: SAP, Odoo, Dynamics.',
    image: img('service-erp-solutions'),
    intro: 'Run your entire business on one integrated platform. Our ERP consultants and developers implement, customize, integrate and support leading ERP systems and build custom ERP modules where standard products fall short.',
    offerings: [
      ['ERP Implementation', 'End-to-end rollout: finance, sales, purchase, inventory, HR.'],
      ['Odoo Development', 'Implementation, custom modules and Odoo upgrades.'],
      ['SAP Services', 'SAP S/4HANA, SAP B1, ABAP development and AMS.'],
      ['Microsoft Dynamics 365', 'Business Central and Finance & Operations.'],
      ['Custom ERP Development', 'Industry-specific ERP built for your exact processes.'],
      ['ERP Support & Upgrades', 'Annual maintenance, user support and version upgrades.']
    ],
    benefits: ['Single source of truth for the business', 'Automated, standardized processes', 'Real-time reporting and visibility', 'Better inventory and cost control', 'Scales with business growth'],
    tech: ['SAP S/4HANA', 'SAP Business One', 'Odoo', 'Microsoft Dynamics 365', 'Oracle NetSuite', 'ERPNext', 'Power BI'],
    faqs: [
      ['Which ERP is best for a mid-size company?', 'Odoo, Dynamics 365 Business Central, NetSuite and SAP B1 are popular. We assess your needs and budget to recommend the right one.'],
      ['How long does an ERP implementation take?', 'Typically 3–9 months depending on modules, users and data migration.'],
      ['Do you provide ERP support after go-live?', 'Yes, through annual maintenance contracts (AMC) with defined SLAs.']
    ]
  },
  {
    slug: 'crm-solutions', group: 'enterprise', icon: 'contact', color: 'grad-2',
    name: 'CRM Solutions',
    short: 'Salesforce, Dynamics 365, HubSpot and Zoho implementations and custom CRM.',
    image: img('service-crm-solutions'),
    intro: 'Sell more and serve customers better. We implement and customize CRM platforms that give your sales, marketing and service teams a complete view of every customer and automate the busywork.',
    offerings: [
      ['Salesforce Services', 'Sales, Service and Experience Cloud implementation.'],
      ['Dynamics 365 CRM', 'Sales, Customer Service and Power Platform solutions.'],
      ['HubSpot & Zoho', 'Setup, automation and integration for growing businesses.'],
      ['Custom CRM Development', 'CRM built exactly for your industry and process.'],
      ['CRM Integration', 'Connect CRM with ERP, website, telephony and marketing tools.'],
      ['Data Migration & Training', 'Clean migration and user adoption programs.']
    ],
    benefits: ['360° view of every customer', 'Higher sales productivity', 'Automated follow-ups and workflows', 'Accurate pipeline forecasting', 'Better customer retention'],
    tech: ['Salesforce', 'Dynamics 365', 'HubSpot', 'Zoho CRM', 'Power Apps', 'Apex', 'Lightning Web Components'],
    faqs: [
      ['Can you migrate us from spreadsheets to CRM?', 'Yes. We clean, de-duplicate and import your data, then train your team.']
    ]
  },
  {
    slug: 'system-integration', group: 'enterprise', icon: 'plug', color: 'grad-3',
    name: 'System Integration & APIs',
    short: 'Connect ERP, CRM, payment gateways and third-party platforms seamlessly.',
    image: img('service-system-integration'),
    intro: 'Disconnected systems mean duplicate data entry and errors. We integrate your applications (ERP, CRM, e-commerce, HR, banking and third-party services) so data flows automatically and reliably.',
    offerings: [
      ['API Development', 'Secure, documented REST, GraphQL and SOAP APIs.'],
      ['Enterprise Integration', 'Middleware and ESB with MuleSoft, Boomi and Azure Integration Services.'],
      ['Payment Gateway Integration', 'Stripe, PayPal, Razorpay, bank and UPI integrations.'],
      ['Third-party Integrations', 'SMS, email, maps, logistics, KYC and accounting services.'],
      ['EDI & B2B Integration', 'Partner data exchange using EDI, AS2 and SFTP.'],
      ['Event-driven Architecture', 'Real-time data with Kafka and message queues.']
    ],
    benefits: ['No more duplicate data entry', 'Real-time, consistent data', 'Faster processes across teams', 'Reusable, secure APIs'],
    tech: ['MuleSoft', 'Dell Boomi', 'Azure Logic Apps', 'Apache Kafka', 'RabbitMQ', 'Postman', 'Swagger / OpenAPI', 'GraphQL'],
    faqs: [
      ['Can you integrate with our legacy system?', 'Yes, through APIs, database connectors, file-based integration or RPA when no API exists.']
    ]
  },
  {
    slug: 'it-consulting', group: 'enterprise', icon: 'lightbulb', color: 'grad-4',
    name: 'IT Consulting & Digital Transformation',
    short: 'Technology strategy, architecture reviews and CTO-as-a-service.',
    image: img('service-it-consulting'),
    intro: 'Make the right technology decisions the first time. Our senior consultants and architects help you plan roadmaps, choose platforms, review architecture and lead digital transformation programs.',
    offerings: [
      ['Technology Roadmap', 'Align IT investment with business goals.'],
      ['Architecture Review', 'Assess scalability, security and maintainability.'],
      ['CTO-as-a-Service', 'Part-time technology leadership for start-ups and SMEs.'],
      ['Technical Due Diligence', 'Independent assessment for investors and acquisitions.'],
      ['Digital Transformation', 'Process digitization and change management.'],
      ['Vendor & Platform Selection', 'Unbiased evaluation of software and vendors.']
    ],
    benefits: ['Avoid costly technology mistakes', 'Access to senior expertise on demand', 'Clear, prioritized roadmap', 'Independent, vendor-neutral advice'],
    tech: ['TOGAF', 'Agile / Scrum', 'SAFe', 'ITIL', 'Cloud Adoption Frameworks'],
    faqs: [
      ['Do you offer short consulting engagements?', 'Yes, from a few days (architecture review) to ongoing monthly advisory.']
    ]
  },

  /* ---- TALENT ---- */
  {
    slug: 'dedicated-teams', group: 'talent', icon: 'users', color: 'grad-1',
    name: 'Dedicated Development Teams',
    short: 'A full, managed team working exclusively on your product.',
    image: img('service-dedicated-teams'),
    intro: 'Get a complete, cross-functional team (developers, QA, DevOps, BA and project manager) working only for you. We handle hiring, HR, infrastructure and retention, while you control priorities and the roadmap.',
    offerings: [
      ['Full Product Teams', 'Cross-functional squads ready to own a product or module.'],
      ['Offshore Development Center', 'Your own branded team and workspace with us.'],
      ['Agile Delivery Management', 'Scrum masters and PMs to keep delivery predictable.'],
      ['Scale Up or Down', 'Adjust team size as your roadmap changes.'],
      ['Knowledge Retention', 'Documentation and backup resources to reduce risk.'],
      ['Transparent Reporting', 'Timesheets, sprint reports and dashboards.']
    ],
    benefits: ['Up to 50–60% lower cost than local hiring', 'Team ready in 2–4 weeks', 'No hiring, HR or infrastructure overhead', 'Full control over priorities', 'Long-term team stability'],
    tech: ['Any technology stack', 'Jira', 'Confluence', 'Slack', 'Microsoft Teams', 'Git'],
    faqs: [
      ['How quickly can a team start?', 'Usually within 2–4 weeks after requirements are finalized.'],
      ['Can we interview the team members?', 'Yes, you interview and approve every team member.']
    ]
  },
  {
    slug: 'staff-augmentation', group: 'talent', icon: 'user-plus', color: 'grad-2',
    name: 'Staff Augmentation & Resources',
    short: 'Service-based resources: hire skilled developers, QA, BA and more on demand.',
    image: img('service-staff-augmentation'),
    intro: 'Need extra hands with the right skills, fast? Our service-based resource model lets you add pre-vetted engineers to your team on hourly, monthly or long-term contracts. They work in your time zone, with your tools, reporting to your managers.',
    offerings: [
      ['Developers', 'Java, .NET, Python, Node.js, PHP, React, Angular, mobile and more.'],
      ['QA & Test Engineers', 'Manual testers and automation engineers.'],
      ['DevOps & Cloud Engineers', 'AWS, Azure, GCP, Kubernetes and CI/CD specialists.'],
      ['Business Analysts & PMs', 'Requirement analysis and delivery management.'],
      ['ERP / CRM Consultants', 'SAP, Odoo, Dynamics and Salesforce professionals.'],
      ['Data & AI Engineers', 'Data engineers, BI developers and ML engineers.']
    ],
    benefits: ['Profiles shared within 48 hours', 'Flexible hourly, part-time or full-time contracts', 'Replace a resource at no extra cost', 'Time-zone aligned working hours', 'NDA and IP protection'],
    tech: ['Java', '.NET', 'Python', 'Node.js', 'React', 'Angular', 'Flutter', 'SAP', 'Salesforce', 'AWS', 'Azure'],
    faqs: [
      ['What is the minimum engagement?', 'Resources can be hired from one month, or on an hourly basis for smaller needs.'],
      ['What if a resource is not a good fit?', 'We replace them quickly at no additional cost.']
    ]
  }
];

/* ---------------- Industries ---------------- */
KHL.industries = [
  {
    slug: 'ecommerce-retail', name: 'E-commerce & Retail', icon: 'shopping-cart',
    short: 'Online stores, marketplaces, POS and omnichannel retail platforms.',
    image: img('industry-ecommerce-retail'),
    intro: 'Shoppers expect fast, personalized and seamless experiences across web, mobile and store. We help retailers and brands sell more with scalable commerce platforms, connected inventory and data-driven personalization.',
    challenges: ['Slow websites and checkout drop-offs', 'Inventory mismatches across channels', 'Crashes during sale events', 'Disconnected ERP, POS and logistics'],
    solutions: [['E-commerce Stores & Marketplaces', 'D2C, B2B and multi-vendor platforms.'], ['Omnichannel Inventory', 'Real-time stock across stores and warehouses.'], ['POS & Store Systems', 'Modern POS with loyalty and offers.'], ['Order & Returns Management', 'OMS with courier and payment integrations.'], ['Personalization & Search', 'AI recommendations and smart search.'], ['Retail Analytics', 'Sales, margin and customer insights.']],
    compliance: ['PCI-DSS aware', 'GDPR', 'Accessibility (WCAG)']
  },
  {
    slug: 'healthcare', name: 'Healthcare & Life Sciences', icon: 'heart-pulse',
    short: 'HMS, telemedicine, patient portals, LIMS and healthcare integrations.',
    image: img('industry-healthcare'),
    intro: 'We build secure, compliant healthcare software that improves patient care and operational efficiency for hospitals, clinics, diagnostic labs, pharmacies and health-tech start-ups.',
    challenges: ['Siloed departmental systems', 'Strict data privacy requirements', 'Manual billing and insurance claims', 'Limited remote-care capability'],
    solutions: [['Hospital Management Systems', 'OPD, IPD, pharmacy, billing and more.'], ['Telemedicine Platforms', 'Video consultations and e-prescriptions.'], ['Patient Portals & Apps', 'Appointments, reports and payments.'], ['LIMS for Labs', 'Sample tracking, results and instrument integration.'], ['EHR / EMR Integration', 'HL7 and FHIR interoperability.'], ['Healthcare Analytics', 'Clinical and operational dashboards.']],
    compliance: ['HIPAA', 'HL7 / FHIR', 'GDPR', 'ABDM-ready']
  },
  {
    slug: 'insurance', name: 'Insurance', icon: 'umbrella',
    short: 'Policy administration, claims, agent portals and InsurTech apps.',
    image: img('industry-insurance'),
    intro: 'We help insurers, brokers and InsurTechs launch products faster, digitize claims and delight policyholders with modern policy, claims and distribution platforms.',
    challenges: ['Rigid legacy core systems', 'Slow, paper-heavy claims', 'Long product launch cycles', 'Poor digital customer experience'],
    solutions: [['Policy Administration', 'Quote, bind, endorse and renew.'], ['Claims Management', 'Digital FNOL, workflow and settlement.'], ['Agent & Broker Portals', 'Quoting, commissions and performance.'], ['Customer Self-Service Apps', 'Buy, renew and claim online.'], ['AI Document Processing', 'Automated claims and underwriting data capture.'], ['Fraud Analytics', 'Rule and ML-based fraud detection.']],
    compliance: ['IRDAI guidelines', 'GDPR', 'SOC 2-aligned practices']
  },
  {
    slug: 'education', name: 'Education & Universities', icon: 'graduation-cap',
    short: 'University ERP, LMS, admissions, exams and student apps.',
    image: img('industry-education'),
    intro: 'Universities, schools and EdTech companies trust us to digitize the full academic lifecycle, from admissions to alumni, and to deliver engaging online learning at scale.',
    challenges: ['Manual admissions and fee processes', 'Disconnected academic systems', 'Delayed exam results', 'Scaling online and hybrid learning'],
    solutions: [['University Management Systems', 'Admissions, academics, exams and fees.'], ['Learning Management Systems', 'Live classes, courses and assessments.'], ['Online Examination', 'Secure, proctored online exams.'], ['Student & Parent Apps', 'Attendance, results, fees and notices.'], ['Library & Hostel Management', 'Campus operations digitized.'], ['Alumni & Placement Portals', 'Engage alumni and recruiters.']],
    compliance: ['FERPA-aware', 'GDPR', 'Accessibility (WCAG)']
  },
  {
    slug: 'banking-fintech', name: 'Banking & FinTech', icon: 'landmark',
    short: 'Digital banking, lending, payments, wealth and compliance solutions.',
    image: img('industry-banking-fintech'),
    intro: 'We build secure, high-performance financial software for banks, NBFCs, credit unions and FinTech start-ups: digital banking, lending, payments and wealth platforms with bank-grade security.',
    challenges: ['Legacy core banking limitations', 'Security and regulatory pressure', 'Slow loan and onboarding journeys', 'Competition from digital-first players'],
    solutions: [['Digital Banking Apps', 'Mobile and internet banking.'], ['Loan Origination & Management', 'End-to-end digital lending.'], ['Payments & Wallets', 'UPI, cards, wallets and gateways.'], ['KYC & Onboarding', 'e-KYC, video KYC and AML checks.'], ['Wealth & Trading Platforms', 'Portfolio, mutual funds and trading apps.'], ['Regulatory Reporting', 'Automated compliance reports.']],
    compliance: ['PCI-DSS', 'RBI guidelines', 'ISO 27001-aligned', 'AML / KYC']
  },
  {
    slug: 'manufacturing', name: 'Manufacturing', icon: 'factory',
    short: 'ERP, MES, Industrial IoT, quality and supply-chain systems.',
    image: img('service-iot-solutions'),
    intro: 'We help manufacturers improve productivity, quality and visibility with ERP, shop-floor systems, Industrial IoT and analytics that connect the plant to the boardroom.',
    challenges: ['No real-time production visibility', 'High inventory and wastage', 'Unplanned machine downtime', 'Manual quality records'],
    solutions: [['Manufacturing ERP', 'Production planning, BOM and costing.'], ['MES & Shop-floor Apps', 'Work orders, tracking and traceability.'], ['Industrial IoT', 'Machine monitoring and OEE.'], ['Quality Management', 'Inspections, NCR and CAPA.'], ['Dealer & Distributor Portals', 'Orders, schemes and claims.'], ['Predictive Maintenance', 'AI-driven downtime prevention.']],
    compliance: ['ISO 9001 process support', 'GST / VAT', '21 CFR Part 11 (pharma)']
  },
  {
    slug: 'logistics', name: 'Logistics & Supply Chain', icon: 'truck',
    short: 'TMS, WMS, fleet tracking, last-mile delivery and freight platforms.',
    image: img('industry-logistics'),
    intro: 'From first mile to last mile, we build logistics software that optimises routes, warehouses and fleets and gives shippers and customers real-time visibility.',
    challenges: ['Poor shipment visibility', 'Manual warehouse processes', 'Rising fuel and fleet costs', 'Integration with many partners'],
    solutions: [['Transport Management (TMS)', 'Planning, dispatch and freight billing.'], ['Warehouse Management (WMS)', 'Inbound, putaway, picking and dispatch.'], ['Fleet & GPS Tracking', 'Live tracking, geofencing and fuel analytics.'], ['Last-mile Delivery Apps', 'Driver apps, ePOD and customer tracking.'], ['Freight Marketplaces', 'Connect shippers and carriers.'], ['Supply Chain Analytics', 'Cost, SLA and performance dashboards.']],
    compliance: ['e-Way bill / GST', 'EDI standards', 'GDPR']
  },
  {
    slug: 'real-estate', name: 'Real Estate & Construction', icon: 'building-2',
    short: 'Property portals, CRM, project management and facility systems.',
    image: img('industry-real-estate'),
    intro: 'We help developers, brokers and property managers generate more leads, manage sales and projects efficiently and deliver better experiences to buyers and tenants.',
    challenges: ['Lead leakage and slow follow-ups', 'Manual booking and payment tracking', 'Project cost overruns', 'Tenant and facility management'],
    solutions: [['Property Portals', 'Listings, search, virtual tours and leads.'], ['Real Estate CRM', 'Lead, booking and channel partner management.'], ['Construction Project Management', 'Budgets, schedules and site reports.'], ['Property & Facility Management', 'Rent, maintenance and tenant apps.'], ['Customer Portals', 'Payments, documents and construction updates.'], ['Sales Analytics', 'Inventory and sales dashboards.']],
    compliance: ['RERA-ready', 'GDPR']
  },
  {
    slug: 'travel-hospitality', name: 'Travel & Hospitality', icon: 'plane',
    short: 'Booking engines, hotel PMS, restaurant and travel platforms.',
    image: img('industry-travel-hospitality'),
    intro: 'We build booking engines, property management systems and guest apps that help travel and hospitality businesses increase direct bookings and deliver memorable experiences.',
    challenges: ['High OTA commissions', 'Disconnected booking channels', 'Manual operations and billing', 'Rising guest expectations'],
    solutions: [['Booking Engines', 'Flights, hotels, tours and packages.'], ['Hotel PMS & Channel Manager', 'Rooms, rates and OTA sync.'], ['Restaurant & Food Ordering', 'POS, QR menus and delivery apps.'], ['Travel Agency Platforms', 'B2B / B2C portals with GDS integration.'], ['Guest Experience Apps', 'Check-in, requests and loyalty.'], ['Revenue Analytics', 'Occupancy, ADR and RevPAR insights.']],
    compliance: ['PCI-DSS aware', 'GDPR']
  },
  {
    slug: 'energy-utilities', name: 'Energy & Utilities', icon: 'zap',
    short: 'Billing, smart metering, field-service and asset management.',
    image: img('industry-energy-utilities'),
    intro: 'We help utilities and energy companies modernize billing, field operations and asset management and use data to improve reliability and efficiency.',
    challenges: ['Legacy billing systems', 'Manual meter reading', 'Inefficient field operations', 'Grid and asset visibility'],
    solutions: [['Utility Billing Systems', 'Tariffs, billing and collections.'], ['Smart Metering & IoT', 'AMI data and consumption analytics.'], ['Field Service Apps', 'Work orders and mobile workforce.'], ['Asset Management', 'Maintenance and lifecycle tracking.'], ['Customer Self-service', 'Bills, payments and complaints.'], ['Renewable Energy Monitoring', 'Solar and wind performance dashboards.']],
    compliance: ['ISO 50001 support', 'GDPR']
  },
  {
    slug: 'government', name: 'Government & Public Sector', icon: 'building',
    short: 'e-Governance portals, citizen services and workflow automation.',
    image: img('industry-government'),
    intro: 'We deliver secure, accessible and scalable citizen-facing portals and internal systems that make public services faster, more transparent and paperless.',
    challenges: ['Paper-based processes', 'Long citizen wait times', 'Legacy, unsupported systems', 'Security and accessibility mandates'],
    solutions: [['e-Governance Portals', 'Online applications, approvals and certificates.'], ['Workflow & File Management', 'Digital file movement and tracking.'], ['Grievance Management', 'Complaint registration and escalation.'], ['Payment & Revenue Systems', 'Online tax and fee collection.'], ['GIS & Dashboards', 'Map-based planning and monitoring.'], ['Legacy Modernization', 'Upgrade aging public systems.']],
    compliance: ['GIGW / WCAG', 'Data localization', 'CERT-In guidelines']
  },
  {
    slug: 'media-entertainment', name: 'Media & Entertainment', icon: 'clapperboard',
    short: 'OTT platforms, content management and digital publishing.',
    image: img('industry-media-entertainment'),
    intro: 'We build OTT, streaming and publishing platforms that deliver content smoothly to millions of users on web, mobile and smart TVs, with subscriptions and advertising built in.',
    challenges: ['Buffering and scaling issues', 'Multi-device delivery', 'Subscription and ad monetization', 'Content rights management'],
    solutions: [['OTT & Video Streaming', 'Web, mobile and smart-TV apps.'], ['Content Management', 'Workflows, metadata and rights.'], ['Subscription & Billing', 'Plans, payments and paywalls.'], ['Digital Publishing', 'News and magazine platforms.'], ['Audience Analytics', 'Engagement and churn insights.'], ['Recommendation Engines', 'Personalized content discovery.']],
    compliance: ['DRM', 'GDPR', 'COPPA-aware']
  },
  {
    slug: 'startups-saas', name: 'Start-ups & SaaS', icon: 'rocket',
    short: 'MVPs, SaaS platforms, scale-up engineering and CTO-as-a-service.',
    image: img('industry-startups-saas'),
    intro: 'We are the technology partner for founders: from validating an idea with an MVP to scaling a SaaS product to thousands of customers, with senior engineers and pragmatic advice.',
    challenges: ['Limited budget and runway', 'Need to launch fast', 'Scaling architecture and team', 'Hiring senior talent'],
    solutions: [['MVP Development', 'Launch in 8–12 weeks.'], ['SaaS Platforms', 'Multi-tenant, subscription-ready products.'], ['Product Design', 'Research, UX and branding.'], ['Scale-up Engineering', 'Performance, cloud and DevOps.'], ['Dedicated Teams', 'Grow engineering capacity quickly.'], ['CTO-as-a-Service', 'Technical leadership on demand.']],
    compliance: ['SOC 2 readiness', 'GDPR']
  }
];

/* ---------------- Projects / case studies ---------------- */
KHL.projects = [
  {
    id: 'omnichannel-ecommerce-platform', industry: 'ecommerce-retail', services: ['ecommerce-development', 'cloud-services', 'mobile-app-development'],
    title: 'Omnichannel E-commerce Platform', client: 'Retail chain, USA',
    summary: 'Headless multi-vendor marketplace with web, mobile apps and real-time inventory across 200+ stores.',
    image: img('service-ecommerce-development'),
    tech: ['React', 'Node.js', 'Microservices', 'AWS', 'Elasticsearch'], duration: '9 months', team: '14 engineers', model: 'Dedicated Team',
    challenge: 'A fast-growing retailer was losing sales due to a slow monolithic storefront, stock mismatches between online and physical stores, and checkout failures during sale events.',
    solution: 'We designed a headless, microservices-based commerce platform with a React storefront, native mobile apps, unified inventory and an auto-scaling cloud setup built for peak traffic.',
    features: ['Multi-vendor onboarding & commission engine', 'Real-time inventory sync across stores & warehouses', 'Smart search, filters & personalized recommendations', 'Multiple payment gateways, wallets & COD', 'Order tracking, returns & loyalty program'],
    results: [['3.2×', 'Faster page loads'], ['+38%', 'Conversion rate'], ['99.95%', 'Uptime on sale days']]
  },
  {
    id: 'b2b-wholesale-portal', industry: 'ecommerce-retail', services: ['ecommerce-development', 'system-integration'],
    title: 'B2B Wholesale Ordering Portal', client: 'FMCG distributor, UAE',
    summary: 'Self-service ordering portal for distributors with tiered pricing, credit limits and ERP integration.',
    image: img('project-b2b-wholesale-portal'),
    tech: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'SAP Integration'], duration: '6 months', team: '8 engineers', model: 'Fixed Price',
    challenge: 'A distributor processed thousands of orders a month over phone and email, leading to errors, delays and no visibility for customers.',
    solution: 'We delivered a B2B portal with customer-specific catalogs and pricing, integrated in real time with the ERP for stock, invoices and credit checks.',
    features: ['Customer-specific catalogs & price lists', 'Quick order, CSV upload & re-order', 'Credit limit & outstanding checks', 'Invoice and statement downloads', 'Sales rep dashboard & mobile app'],
    results: [['70%', 'Orders now self-service'], ['-85%', 'Order entry errors'], ['2 days', 'Faster order cycle']]
  },
  {
    id: 'retail-data-warehouse', industry: 'ecommerce-retail', services: ['data-analytics'],
    title: 'Retail Data Warehouse & BI', client: 'Fashion retailer, UK',
    summary: 'Unified data platform and Power BI dashboards combining POS, e-commerce, ERP and marketing data.',
    image: img('service-web-application-development'),
    tech: ['Azure Synapse', 'Data Factory', 'Power BI', 'dbt', 'Python'], duration: '4 months', team: '5 engineers', model: 'Time & Material',
    challenge: 'Leadership relied on dozens of manual spreadsheets that were late, inconsistent and could not answer basic questions about margin by channel.',
    solution: 'We built an Azure data platform with automated pipelines from all sources, a clean dimensional model and role-based Power BI dashboards.',
    features: ['Automated daily pipelines from 9 source systems', 'Sales, margin, stock and customer dashboards', 'Store and category drill-downs', 'Row-level security by region', 'Demand forecasting model'],
    results: [['40 hrs', 'Saved per week'], ['1', 'Source of truth'], ['-18%', 'Excess stock']]
  },
  {
    id: 'telemedicine-patient-portal', industry: 'healthcare', services: ['mobile-app-development', 'web-application-development'],
    title: 'Telemedicine & Patient Portal', client: 'Multi-specialty clinic group, India',
    summary: 'Secure telehealth platform with video consultations, e-prescriptions and appointment booking.',
    image: img('industry-healthcare'),
    tech: ['Flutter', 'Python', 'WebRTC', 'PostgreSQL', 'AWS'], duration: '8 months', team: '11 engineers', model: 'Dedicated Team',
    challenge: 'The clinic group needed to serve patients remotely while keeping sensitive medical data secure and compliant.',
    solution: 'We built a secure patient portal and mobile apps with encrypted video consultations, digital prescriptions, lab report access and integration with the existing hospital system.',
    features: ['Online appointment booking & reminders', 'Encrypted HD video consultations', 'E-prescriptions & lab report sharing', 'Doctor scheduling & availability management', 'Role-based access & audit trails'],
    results: [['45K+', 'Consultations / year'], ['-40%', 'No-show rate'], ['4.8★', 'App store rating']]
  },
  {
    id: 'hospital-management-system', industry: 'healthcare', services: ['custom-software-development', 'application-support-maintenance', 'system-integration'],
    title: 'Hospital Management System', client: '300-bed hospital, Middle East',
    summary: 'End-to-end HMS covering OPD, IPD, pharmacy, lab, billing and insurance claims.',
    image: img('project-hospital-management-system'),
    tech: ['Java', 'Spring Boot', 'React', 'Oracle', 'HL7 / FHIR'], duration: '12 months', team: '16 engineers', model: 'Fixed Price + Support',
    challenge: 'Disconnected departmental systems caused duplicate data entry, billing leakages and long patient waiting times.',
    solution: 'We implemented an integrated HMS with a single patient record, department modules, HL7/FHIR interfaces to lab equipment and ongoing 24×7 application support.',
    features: ['Registration, OPD & IPD workflows', 'Pharmacy & inventory management', 'Lab & radiology integration (HL7 / FHIR)', 'Billing, TPA & insurance claims', 'MIS dashboards for management'],
    results: [['-35%', 'Patient wait time'], ['+22%', 'Billing recovery'], ['24×7', 'L1–L3 support']]
  },
  {
    id: 'laboratory-information-system', industry: 'healthcare', services: ['custom-software-development', 'iot-solutions'],
    title: 'Laboratory Information System (LIMS)', client: 'Diagnostic lab chain, India',
    summary: 'LIMS with barcode sample tracking, analyser integration and online reports across 40 collection centers.',
    image: img('project-laboratory-information-system'),
    tech: ['.NET Core', 'Angular', 'SQL Server', 'ASTM / HL7', 'Azure'], duration: '7 months', team: '9 engineers', model: 'Fixed Price',
    challenge: 'Manual result entry from analysers caused transcription errors and delays, and patients waited days for reports.',
    solution: 'We built a LIMS that integrates directly with lab analysers, tracks every sample by barcode and publishes verified reports to patients and doctors online.',
    features: ['Barcode sample collection & tracking', 'Bi-directional analyser integration', 'Multi-level result verification', 'Online reports via SMS, WhatsApp & portal', 'Franchise & B2B billing'],
    results: [['-90%', 'Transcription errors'], ['6 hrs', 'Faster report TAT'], ['40', 'Centers connected']]
  },
  {
    id: 'epharmacy-platform', industry: 'healthcare', services: ['ecommerce-development', 'mobile-app-development'],
    title: 'Online Pharmacy (e-Pharmacy) Platform', client: 'Pharmacy retail chain, India',
    summary: 'Prescription-based medicine ordering with pharmacist verification, store fulfilment and doorstep delivery.',
    image: img('project-epharmacy-platform'),
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Razorpay'], duration: '5 months', team: '8 engineers', model: 'Fixed Price',
    challenge: 'The chain wanted to compete with national e-pharmacies while complying with prescription regulations.',
    solution: 'We delivered web and mobile apps with prescription upload, pharmacist verification workflow, nearest-store fulfilment and delivery tracking.',
    features: ['Prescription upload & pharmacist review', 'Nearest-store order routing', 'Refill reminders & subscriptions', 'Lab test booking', 'Delivery partner app'],
    results: [['1.2L+', 'App downloads'], ['+27%', 'Revenue per store'], ['45 min', 'Avg. delivery time']]
  },
  {
    id: 'fitness-wellness-app', industry: 'healthcare', services: ['mobile-app-development', 'ui-ux-design'],
    title: 'Fitness & Wellness App', client: 'Health-tech start-up, Australia',
    summary: 'Subscription fitness app with workout plans, trainer video sessions and wearable integration.',
    image: img('project-fitness-wellness-app'),
    tech: ['Flutter', 'Firebase', 'Node.js', 'Apple HealthKit', 'Google Fit'], duration: '4 months', team: '6 engineers', model: 'Fixed Price',
    challenge: 'The founders needed a polished, engaging app to launch before their marketing campaign, on a start-up budget.',
    solution: 'We designed and built a cross-platform app with personalized plans, live and recorded trainer sessions, in-app subscriptions and wearable data sync.',
    features: ['Personalized workout & diet plans', 'Live and on-demand trainer sessions', 'Apple Health & Google Fit sync', 'In-app subscriptions', 'Progress tracking & challenges'],
    results: [['12 wks', 'Idea to launch'], ['4.7★', 'Store rating'], ['32%', 'Trial-to-paid conversion']]
  },
  {
    id: 'healthcare-vapt', industry: 'healthcare', services: ['cybersecurity'],
    title: 'Security Audit & VAPT for Health Platform', client: 'Health-tech company, USA',
    summary: 'Penetration testing, secure code review and HIPAA readiness for a patient data platform.',
    image: img('service-cybersecurity'),
    tech: ['Burp Suite', 'OWASP ZAP', 'SonarQube', 'AWS Security Hub', 'Snyk'], duration: '6 weeks', team: '3 specialists', model: 'Fixed Price',
    challenge: 'An enterprise customer required an independent security assessment and HIPAA readiness before signing a contract.',
    solution: 'We performed web, API, mobile and cloud penetration testing, secure code review and a HIPAA gap assessment, then supported remediation and re-testing.',
    features: ['Web, API & mobile penetration testing', 'AWS configuration review', 'Secure code review (OWASP Top 10)', 'HIPAA gap assessment', 'Remediation support & re-test'],
    results: [['42', 'Vulnerabilities fixed'], ['0', 'Critical issues at re-test'], ['✓', 'Enterprise deal closed']]
  },
  {
    id: 'policy-admin-claims-suite', industry: 'insurance', services: ['legacy-modernization', 'custom-software-development'],
    title: 'Policy Administration & Claims Suite', client: 'General insurer, UK',
    summary: 'Digital policy lifecycle and claims platform, from quote to settlement.',
    image: img('industry-insurance'),
    tech: ['.NET', 'Angular', 'Azure', 'SQL Server', 'Power BI'], duration: '14 months', team: '18 engineers', model: 'Time & Material',
    challenge: 'Legacy desktop systems made new product launches slow and claims processing heavily manual and paper-based.',
    solution: 'We modernized the core into a web-based suite with a configurable product engine, digital claims intake with document upload and rules-based automation.',
    features: ['Configurable insurance product engine', 'Quote, bind, endorse & renew workflows', 'Digital FNOL and claims tracking', 'Rules-based underwriting & fraud flags', 'Agent & broker portal'],
    results: [['6 → 1 wk', 'New product launch'], ['-50%', 'Claim settlement time'], ['100%', 'Paperless claims']]
  },
  {
    id: 'insurance-self-service-app', industry: 'insurance', services: ['mobile-app-development', 'ai-machine-learning'],
    title: 'Customer Self-Service Insurance App', client: 'Insurance company, India',
    summary: 'Mobile app and AI assistant letting policyholders buy, renew and claim in minutes.',
    image: img('project-insurance-self-service-app'),
    tech: ['React Native', 'Node.js', 'Generative AI', 'MongoDB', 'GCP'], duration: '5 months', team: '7 engineers', model: 'Fixed Price',
    challenge: 'The call center was overloaded with routine requests such as renewals, policy copies and claim status queries.',
    solution: 'We launched a mobile app with instant renewals, a digital policy wallet and an AI assistant that answers common questions and guides customers through claims.',
    features: ['Instant quote & online purchase', 'One-tap renewals & reminders', 'Digital policy wallet', 'AI chatbot for queries & claim status', 'Secure payments & e-KYC'],
    results: [['-60%', 'Call-center volume'], ['+30%', 'Online renewals'], ['<3 min', 'Average purchase time']]
  },
  {
    id: 'ai-claims-document-processing', industry: 'insurance', services: ['ai-machine-learning', 'rpa-automation'],
    title: 'AI Claims Document Processing', client: 'Health insurer, Middle East',
    summary: 'AI that reads medical bills, discharge summaries and IDs to auto-populate and triage claims.',
    image: img('project-ai-claims-document-processing'),
    tech: ['Python', 'Azure AI Document Intelligence', 'LLMs', 'UiPath', 'SQL Server'], duration: '4 months', team: '6 engineers', model: 'Time & Material',
    challenge: 'Claims staff manually keyed data from thousands of scanned documents every day, causing backlogs and errors.',
    solution: 'We built an intelligent document processing pipeline combining OCR, LLM-based extraction and validation rules, with bots updating the claims system automatically.',
    features: ['Automatic document classification', 'Field extraction from bills & reports', 'Confidence-based human review queue', 'Duplicate & anomaly detection', 'RPA bots updating core system'],
    results: [['75%', 'Claims auto-processed'], ['-65%', 'Processing time'], ['98%', 'Extraction accuracy']]
  },
  {
    id: 'insurance-test-automation', industry: 'insurance', services: ['qa-software-testing', 'devops'],
    title: 'Test Automation for Insurance Platform', client: 'Life insurer, Singapore',
    summary: 'Automated regression suite in CI/CD covering web, API and mobile channels.',
    image: img('service-qa-software-testing'),
    tech: ['Playwright', 'Appium', 'RestAssured', 'Azure DevOps', 'BrowserStack'], duration: '5 months', team: '6 QA engineers', model: 'Dedicated Team',
    challenge: 'Each release required three weeks of manual regression testing, limiting the insurer to quarterly releases.',
    solution: 'We designed a layered automation framework and integrated 2,000+ automated tests into the CI/CD pipeline.',
    features: ['2,000+ automated test cases', 'Web, API and mobile coverage', 'Parallel execution on cloud devices', 'CI/CD quality gates', 'Test reporting dashboard'],
    results: [['3 wks → 1 day', 'Regression cycle'], ['Monthly', 'Release frequency'], ['-60%', 'Production defects']]
  },
  {
    id: 'university-management-system', industry: 'education', services: ['custom-software-development', 'web-application-development'],
    title: 'University Management System', client: 'Private university, UAE',
    summary: 'Campus-wide platform for admissions, academics, exams, fees and alumni for 25,000+ students.',
    image: img('industry-education'),
    tech: ['PHP / Laravel', 'Vue.js', 'MySQL', 'AWS', 'Payment Gateway'], duration: '10 months', team: '12 engineers', model: 'Fixed Price + Support',
    challenge: 'The university relied on spreadsheets and separate tools for admissions, timetables, exams and fee collection, creating delays every semester.',
    solution: 'We delivered an integrated university management system with online admissions, academic planning, examinations, fee payments and student and faculty portals.',
    features: ['Online admissions with merit lists', 'Course, timetable & attendance management', 'Examination, grading & result publishing', 'Online fee payments & scholarships', 'Student, faculty & parent portals'],
    results: [['25K+', 'Students on platform'], ['-80%', 'Admission processing time'], ['2 days', 'Result publishing (was 3 wks)']]
  },
  {
    id: 'elearning-lms', industry: 'education', services: ['web-application-development', 'cloud-services'],
    title: 'E-Learning & LMS Platform', client: 'Education group, India',
    summary: 'Scalable learning management system with live classes, assessments and certification.',
    image: img('project-elearning-lms'),
    tech: ['React', 'Python / Django', 'PostgreSQL', 'Kubernetes', 'Video Streaming'], duration: '7 months', team: '9 engineers', model: 'Dedicated Team',
    challenge: 'The education group needed to deliver hybrid learning to thousands of concurrent learners across multiple campuses.',
    solution: 'We built a cloud-native LMS with live and recorded classes, proctored assessments, gamification and analytics for faculty.',
    features: ['Live classes & recorded lectures', 'Assignments, quizzes & proctored exams', 'Progress tracking & gamification', 'Certificates & transcripts', 'Faculty analytics dashboard'],
    results: [['10K', 'Concurrent learners'], ['+45%', 'Course completion'], ['99.9%', 'Platform uptime']]
  },
  {
    id: 'school-parent-app', industry: 'education', services: ['mobile-app-development'],
    title: 'School ERP & Parent App', client: 'K-12 school chain, India',
    summary: 'School ERP with parent and teacher apps for attendance, homework, fees, transport and results.',
    image: img('project-school-parent-app'),
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Firebase', 'Google Maps'], duration: '5 months', team: '7 engineers', model: 'Fixed Price',
    challenge: 'Communication with parents relied on paper diaries and phone calls; fee follow-ups consumed staff time.',
    solution: 'We delivered a school ERP plus parent and teacher apps with real-time notifications, online fees and live school-bus tracking.',
    features: ['Attendance & homework updates', 'Online fee payment & reminders', 'Live school-bus tracking', 'Report cards & exam schedule', 'Teacher-parent messaging'],
    results: [['18', 'Schools onboarded'], ['92%', 'Parents active monthly'], ['+35%', 'On-time fee collection']]
  },
  {
    id: 'digital-banking-app', industry: 'banking-fintech', services: ['mobile-app-development', 'cybersecurity'],
    title: 'Digital Banking Mobile App', client: 'Co-operative bank, India',
    summary: 'Secure mobile banking app with UPI, bill payments, deposits and instant account opening.',
    image: img('industry-banking-fintech'),
    tech: ['Kotlin', 'Swift', 'Java / Spring Boot', 'Oracle', 'HSM'], duration: '10 months', team: '14 engineers', model: 'Fixed Price + AMC',
    challenge: 'The bank was losing younger customers to digital-first banks because it lacked a modern mobile experience.',
    solution: 'We built native apps integrated with the core banking system, adding UPI, bill payments, digital onboarding and bank-grade security controls.',
    features: ['Video KYC & instant account opening', 'UPI, IMPS, NEFT transfers', 'Bill payments & recharges', 'FD / RD booking', 'Biometric login, device binding & fraud checks'],
    results: [['3L+', 'Active users'], ['+55%', 'Digital transactions'], ['0', 'Security incidents']]
  },
  {
    id: 'loan-origination-system', industry: 'banking-fintech', services: ['custom-software-development', 'rpa-automation'],
    title: 'Digital Loan Origination System', client: 'NBFC, India',
    summary: 'End-to-end digital lending: application, KYC, credit scoring, approval and disbursal.',
    image: img('project-loan-origination-system'),
    tech: ['Java', 'Angular', 'PostgreSQL', 'Camunda', 'Credit Bureau APIs'], duration: '8 months', team: '10 engineers', model: 'Dedicated Team',
    challenge: 'Loan approvals took 7–10 days due to manual document checks and multiple hand-offs.',
    solution: 'We built a workflow-driven LOS with automated KYC, bureau checks, a rules-based credit engine and e-sign / e-mandate for disbursal.',
    features: ['Digital application & document upload', 'e-KYC, bank statement & bureau analysis', 'Configurable credit rules engine', 'Maker-checker approval workflow', 'e-Sign, e-NACH & disbursal integration'],
    results: [['10 days → 4 hrs', 'Loan approval time'], ['3×', 'Loans processed / month'], ['-30%', 'Operating cost']]
  },
  {
    id: 'genai-knowledge-assistant', industry: 'banking-fintech', services: ['ai-machine-learning'],
    title: 'GenAI Knowledge Assistant for Staff', client: 'Financial services firm, UK',
    summary: 'Secure AI assistant that answers staff questions from policies, procedures and product documents.',
    image: img('service-ai-machine-learning'),
    tech: ['Python', 'LLMs', 'RAG', 'Azure AI Search', 'Microsoft Teams'], duration: '10 weeks', team: '4 engineers', model: 'Fixed Price',
    challenge: 'Branch and operations staff spent hours searching thousands of pages of policies and product documents.',
    solution: 'We built a retrieval-augmented AI assistant in Microsoft Teams that answers with citations from approved documents, with role-based access and audit logs.',
    features: ['Answers with source citations', 'Role-based document access', 'Microsoft Teams integration', 'Feedback loop & analytics', 'Private, secure deployment'],
    results: [['-70%', 'Time spent searching'], ['5K+', 'Questions / month'], ['91%', 'Answer helpfulness']]
  },
  {
    id: 'devops-transformation', industry: 'banking-fintech', services: ['devops', 'cloud-services'],
    title: 'DevOps Transformation for FinTech', client: 'Payments start-up, Singapore',
    summary: 'CI/CD, Kubernetes and infrastructure as code enabling daily, zero-downtime releases.',
    image: img('service-devops'),
    tech: ['GitHub Actions', 'Terraform', 'AWS EKS', 'ArgoCD', 'Prometheus'], duration: '4 months', team: '4 engineers', model: 'Time & Material',
    challenge: 'Manual deployments caused frequent outages and the team could release only once every two weeks.',
    solution: 'We containerized services, codified infrastructure with Terraform and built GitOps pipelines with automated tests, security scans and blue-green deployments.',
    features: ['Terraform-managed AWS infrastructure', 'Kubernetes (EKS) with autoscaling', 'GitOps deployments with ArgoCD', 'Security scanning in pipelines', 'Full observability stack'],
    results: [['Daily', 'Release frequency'], ['-90%', 'Deployment failures'], ['-35%', 'Cloud cost']]
  },
  {
    id: 'finance-rpa-bots', industry: 'banking-fintech', services: ['rpa-automation'],
    title: 'Finance Operations Automation (RPA)', client: 'Asset management firm, USA',
    summary: 'Bots automating reconciliations, reporting and invoice processing for the finance team.',
    image: img('project-finance-rpa-bots'),
    tech: ['UiPath', 'Python', 'SQL Server', 'Excel', 'SAP'], duration: '3 months', team: '4 engineers', model: 'Fixed Price',
    challenge: 'The finance team spent over 1,200 hours a month on repetitive reconciliations and report preparation.',
    solution: 'We identified 14 high-ROI processes and built attended and unattended bots with exception handling and dashboards.',
    features: ['Bank & ledger reconciliations', 'Invoice capture & posting', 'Daily NAV and MIS reports', 'Exception queues for review', 'Bot monitoring dashboard'],
    results: [['1,000+ hrs', 'Saved per month'], ['99.8%', 'Accuracy'], ['5 months', 'Payback period']]
  },
  {
    id: 'manufacturing-erp-odoo', industry: 'manufacturing', services: ['erp-solutions', 'data-analytics'],
    title: 'Manufacturing ERP Implementation (Odoo)', client: 'Auto-components manufacturer, India',
    summary: 'Odoo ERP rollout covering sales, purchase, inventory, production, quality and finance.',
    image: img('service-erp-solutions'),
    tech: ['Odoo', 'Python', 'PostgreSQL', 'Power BI', 'REST APIs'], duration: '6 months', team: '6 consultants', model: 'Fixed Price + AMC',
    challenge: 'The manufacturer ran on disconnected tools, with no real-time view of stock, production status or profitability.',
    solution: 'We implemented and customized Odoo ERP, migrated legacy data, integrated shop-floor devices and trained users, followed by an annual support contract.',
    features: ['Sales, purchase & inventory management', 'MRP, BOM & production planning', 'Quality control & traceability', 'Finance, GST & reporting', 'Power BI management dashboards'],
    results: [['-25%', 'Inventory holding cost'], ['+18%', 'On-time delivery'], ['1', 'Source of truth for all data']]
  },
  {
    id: 'smart-factory-iot', industry: 'manufacturing', services: ['iot-solutions', 'data-analytics', 'ai-machine-learning'],
    title: 'Smart Factory IoT & OEE Platform', client: 'Plastics manufacturer, Germany',
    summary: 'Real-time machine monitoring, OEE dashboards and predictive maintenance across 3 plants.',
    image: img('project-smart-factory-iot'),
    tech: ['MQTT', 'Azure IoT Hub', 'InfluxDB', 'Grafana', 'Python ML'], duration: '6 months', team: '7 engineers', model: 'Time & Material',
    challenge: 'Unplanned machine breakdowns and no live production data made it impossible to improve efficiency.',
    solution: 'We connected 120 machines via IoT gateways, built OEE dashboards and trained ML models on sensor data to predict failures.',
    features: ['Live machine status & alerts', 'OEE, downtime & scrap analytics', 'Predictive maintenance models', 'Shift and operator reports', 'Mobile alerts for supervisors'],
    results: [['+14%', 'OEE improvement'], ['-40%', 'Unplanned downtime'], ['120', 'Machines connected']]
  },
  {
    id: 'salesforce-crm-distribution', industry: 'manufacturing', services: ['crm-solutions', 'system-integration'],
    title: 'Salesforce CRM for Industrial Sales', client: 'Industrial equipment maker, USA',
    summary: 'Salesforce Sales & Service Cloud with ERP integration, CPQ and field service.',
    image: img('service-crm-solutions'),
    tech: ['Salesforce', 'Apex', 'LWC', 'MuleSoft', 'SAP'], duration: '5 months', team: '6 consultants', model: 'Fixed Price',
    challenge: 'Sales pipelines lived in spreadsheets and service requests in email, giving no single view of customers.',
    solution: 'We implemented Salesforce Sales and Service Cloud with quoting, service case management and a two-way SAP integration for orders and pricing.',
    features: ['Lead-to-order sales pipeline', 'Quote generation with SAP pricing', 'Service cases & SLA tracking', 'Dealer portal (Experience Cloud)', 'Sales forecasting dashboards'],
    results: [['+22%', 'Win rate'], ['-45%', 'Quote turnaround'], ['360°', 'Customer view']]
  },
  {
    id: 'enterprise-application-support', industry: 'logistics', services: ['application-support-maintenance', 'managed-it-services'],
    title: 'Enterprise Application Support (AMS)', client: 'Logistics company, Europe',
    summary: 'Take-over and 24×7 L1–L3 support of 30+ business applications including SAP and custom systems.',
    image: img('service-application-support-maintenance'),
    tech: ['SAP', 'Java', '.NET', 'ServiceNow', 'Azure Monitor'], duration: 'Ongoing', team: '20 engineers', model: 'Managed Services',
    challenge: 'The company faced frequent outages, long ticket backlogs and dependence on a few individuals for critical systems.',
    solution: 'We ran a structured knowledge transfer, documented every system, set up proactive monitoring and took over support under strict SLAs with monthly service reviews.',
    features: ['Structured knowledge transfer & runbooks', '24×7 monitoring & incident management', 'Root-cause analysis & problem management', 'Minor enhancements & release management', 'Monthly SLA & service reports'],
    results: [['-65%', 'Critical incidents'], ['98%', 'SLA compliance'], ['-30%', 'Support cost']]
  },
  {
    id: 'fleet-tms', industry: 'logistics', services: ['web-application-development', 'iot-solutions', 'mobile-app-development'],
    title: 'Transport Management & Fleet Tracking', client: 'Road freight company, India',
    summary: 'TMS with GPS fleet tracking, trip planning, driver app, ePOD and freight billing for 800+ trucks.',
    image: img('industry-logistics'),
    tech: ['React', 'Node.js', 'PostgreSQL / PostGIS', 'MQTT', 'Flutter'], duration: '7 months', team: '10 engineers', model: 'Dedicated Team',
    challenge: 'Dispatchers tracked trucks by phone calls, fuel theft was common and invoicing was delayed by missing delivery proofs.',
    solution: 'We built a TMS with live GPS tracking, geofencing, fuel sensors, a driver app with ePOD and automated freight billing.',
    features: ['Live GPS tracking & geofencing', 'Trip planning & load assignment', 'Driver app with ePOD & expenses', 'Fuel monitoring & theft alerts', 'Automated freight invoicing'],
    results: [['800+', 'Trucks tracked'], ['-12%', 'Fuel cost'], ['5 days', 'Faster billing cycle']]
  },
  {
    id: 'warehouse-management-system', industry: 'logistics', services: ['custom-software-development', 'mobile-app-development'],
    title: 'Warehouse Management System', client: '3PL provider, UAE',
    summary: 'Multi-client WMS with barcode / RFID handhelds, wave picking and client billing.',
    image: img('project-b2b-wholesale-portal'),
    tech: ['.NET Core', 'React', 'SQL Server', 'Android Handhelds', 'Azure'], duration: '8 months', team: '9 engineers', model: 'Fixed Price',
    challenge: 'Paper-based picking led to mis-shipments and the 3PL could not bill clients accurately for storage and handling.',
    solution: 'We delivered a multi-client WMS with handheld scanning, optimized picking, cycle counts and automated activity-based billing.',
    features: ['Inbound, putaway & bin management', 'Wave, batch & zone picking', 'Barcode / RFID handheld app', 'Cycle counting', 'Client portal & activity-based billing'],
    results: [['99.7%', 'Picking accuracy'], ['+35%', 'Orders per shift'], ['100%', 'Billable activity captured']]
  },
  {
    id: 'real-estate-crm-portal', industry: 'real-estate', services: ['crm-solutions', 'web-application-development'],
    title: 'Real Estate CRM & Property Portal', client: 'Real estate developer, India',
    summary: 'Property portal with virtual tours plus CRM for leads, site visits, bookings and channel partners.',
    image: img('industry-real-estate'),
    tech: ['Next.js', 'Node.js', 'MongoDB', 'WhatsApp API', 'AWS'], duration: '5 months', team: '7 engineers', model: 'Fixed Price',
    challenge: 'Leads from ads and portals were tracked in spreadsheets; many were never followed up and booking status was unclear.',
    solution: 'We built a property website with 3D tours and a CRM that captures every lead, auto-assigns it to sales and tracks the journey to booking and payments.',
    features: ['Property website with 3D virtual tours', 'Lead capture from all channels', 'Auto-assignment & WhatsApp follow-ups', 'Inventory, booking & payment schedule', 'Channel partner portal'],
    results: [['+42%', 'Lead-to-visit ratio'], ['0', 'Lost leads'], ['+20%', 'Bookings']]
  },
  {
    id: 'travel-booking-engine', industry: 'travel-hospitality', services: ['web-application-development', 'system-integration'],
    title: 'Travel Booking Engine', client: 'Tour operator, UAE',
    summary: 'B2C and B2B booking engine for flights, hotels, tours and packages with GDS and supplier APIs.',
    image: img('industry-travel-hospitality'),
    tech: ['React', 'Java', 'Redis', 'Amadeus API', 'Hotelbeds API'], duration: '8 months', team: '10 engineers', model: 'Dedicated Team',
    challenge: 'The operator depended on OTAs for sales and its agents built packages manually from many supplier websites.',
    solution: 'We built a booking engine aggregating flights, hotels and activities, with dynamic packaging, agent markups and a B2B portal.',
    features: ['Flight, hotel & activity search', 'Dynamic package builder', 'B2B agent portal with markups', 'Multi-currency payments', 'Booking management & vouchers'],
    results: [['+60%', 'Direct bookings'], ['< 2 s', 'Search response'], ['300+', 'B2B agents onboarded']]
  },
  {
    id: 'hotel-pms-cloud', industry: 'travel-hospitality', services: ['cloud-services', 'custom-software-development'],
    title: 'Cloud Hotel PMS & Channel Manager', client: 'Boutique hotel group, Europe',
    summary: 'Cloud property management system with OTA channel manager, POS and guest app.',
    image: img('project-hotel-pms-cloud'),
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'OTA APIs'], duration: '9 months', team: '9 engineers', model: 'Time & Material',
    challenge: 'Overbookings and rate mismatches across OTAs hurt revenue and guest satisfaction.',
    solution: 'We built a cloud PMS with a real-time channel manager, integrated POS and a guest app for mobile check-in and requests.',
    features: ['Reservations, front desk & housekeeping', 'Real-time OTA channel manager', 'Restaurant & spa POS', 'Mobile check-in & digital key', 'Revenue & occupancy dashboards'],
    results: [['0', 'Overbookings'], ['+15%', 'RevPAR'], ['12', 'Properties live']]
  },
  {
    id: 'food-delivery-platform', industry: 'startups-saas', services: ['mobile-app-development', 'cloud-services'],
    title: 'Food Delivery Platform', client: 'Food-tech start-up, Middle East',
    summary: 'Customer, restaurant and rider apps with live tracking, smart dispatch and admin console.',
    image: img('project-food-delivery-platform'),
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps', 'AWS'], duration: '6 months', team: '9 engineers', model: 'Fixed Price',
    challenge: 'The start-up needed to launch a reliable three-sided marketplace quickly to secure its next funding round.',
    solution: 'We delivered customer, restaurant and rider apps with an auto-dispatch engine, live tracking, promotions and an operations dashboard.',
    features: ['Customer app with live order tracking', 'Restaurant order & menu management', 'Rider app with smart dispatch', 'Promotions, wallet & ratings', 'Admin & operations console'],
    results: [['50K+', 'Orders in first quarter'], ['28 min', 'Avg. delivery time'], ['✓', 'Series A raised']]
  },
  {
    id: 'hrms-payroll-saas', industry: 'startups-saas', services: ['custom-software-development', 'ui-ux-design'],
    title: 'HRMS & Payroll SaaS', client: 'SaaS start-up, India',
    summary: 'Multi-tenant HR platform with attendance, leave, payroll, performance and employee app.',
    image: img('project-hrms-payroll-saas'),
    tech: ['React', '.NET Core', 'PostgreSQL', 'Azure', 'Flutter'], duration: '9 months', team: '11 engineers', model: 'Dedicated Team',
    challenge: 'The founders had domain expertise but no engineering team to build a secure multi-tenant SaaS product.',
    solution: 'We acted as their product engineering team: designing, building and scaling the HRMS from MVP to a paying customer base.',
    features: ['Multi-tenant architecture & subscriptions', 'Attendance with geo-fencing & biometrics', 'Leave, payroll & statutory compliance', 'Performance reviews & OKRs', 'Employee self-service mobile app'],
    results: [['200+', 'Companies onboarded'], ['40K+', 'Employees managed'], ['99.9%', 'Uptime']]
  },
  {
    id: 'saas-aws-migration', industry: 'startups-saas', services: ['cloud-services', 'devops', 'legacy-modernization'],
    title: 'SaaS Migration to AWS', client: 'B2B SaaS company, USA',
    summary: 'Migration of a data-center-hosted SaaS product to AWS with containers and autoscaling.',
    image: img('service-cloud-services'),
    tech: ['AWS', 'ECS Fargate', 'RDS', 'Terraform', 'CloudFront'], duration: '4 months', team: '5 engineers', model: 'Fixed Price',
    challenge: 'Ageing co-located servers caused performance issues and blocked the company from winning enterprise deals requiring better availability.',
    solution: 'We re-platformed the application onto containers on AWS, migrated databases with minimal downtime and set up multi-AZ high availability and disaster recovery.',
    features: ['Wave-based migration plan', 'Containerized workloads on ECS Fargate', 'Multi-AZ databases & backups', 'Infrastructure as code', 'Cost monitoring & optimization'],
    results: [['-38%', 'Hosting cost'], ['99.99%', 'Availability'], ['< 1 hr', 'Cut-over downtime']]
  },
  {
    id: 'e-governance-portal', industry: 'government', services: ['web-application-development', 'cloud-services'],
    title: 'Citizen Services e-Governance Portal', client: 'Municipal corporation, India',
    summary: 'Online portal for certificates, licenses, property tax and grievances with workflow automation.',
    image: img('industry-government'),
    tech: ['Java', 'Angular', 'PostgreSQL', 'Payment Gateway', 'SMS Gateway'], duration: '9 months', team: '12 engineers', model: 'Fixed Price',
    challenge: 'Citizens had to visit offices multiple times for routine services, with no visibility of application status.',
    solution: 'We built a bilingual, accessible portal and mobile app with online applications, digital approvals, payments and SMS status updates.',
    features: ['Birth, death & trade license services', 'Online property tax payment', 'Digital approval workflows', 'Grievance registration & tracking', 'Accessible, bilingual interface'],
    results: [['30+', 'Services online'], ['-70%', 'Office visits'], ['5L+', 'Citizens served']]
  },
  {
    id: 'legacy-vb6-modernization', industry: 'government', services: ['legacy-modernization', 'data-analytics'],
    title: 'Legacy System Modernization (VB6 to .NET)', client: 'Public sector agency, Europe',
    summary: 'Modernized a 20-year-old VB6 / Access system into a secure web application on .NET and SQL Server.',
    image: img('service-legacy-modernization'),
    tech: ['.NET 8', 'Blazor', 'SQL Server', 'Azure', 'SSIS'], duration: '10 months', team: '8 engineers', model: 'Time & Material',
    challenge: 'The agency relied on an unsupported desktop application that posed security risks and could not be accessed remotely.',
    solution: 'We reverse-engineered business rules, rebuilt the system module by module as a web app and migrated 20 years of data with full reconciliation.',
    features: ['Business rules extraction & documentation', 'Modular web re-build on .NET', 'Role-based access & audit logs', 'Validated data migration', 'Parallel run & phased cut-over'],
    results: [['100%', 'Data migrated & reconciled'], ['0', 'Business disruption'], ['-50%', 'Maintenance cost']]
  },
  {
    id: 'utility-billing-system', industry: 'energy-utilities', services: ['custom-software-development', 'iot-solutions'],
    title: 'Utility Billing & Smart Meter Platform', client: 'Water & power utility, Africa',
    summary: 'Billing, collections and smart meter data management for 400,000 customers.',
    image: img('industry-energy-utilities'),
    tech: ['Java', 'React', 'PostgreSQL', 'Kafka', 'Mobile Money APIs'], duration: '12 months', team: '14 engineers', model: 'Fixed Price + Support',
    challenge: 'Estimated bills and manual meter reading caused disputes, revenue loss and poor collections.',
    solution: 'We implemented a billing platform integrated with smart meters and mobile money, plus a field app for meter readers and a customer self-service portal.',
    features: ['Flexible tariff & billing engine', 'Smart meter data ingestion', 'Field meter-reading app', 'Mobile money & online payments', 'Customer self-service portal'],
    results: [['+24%', 'Revenue collection'], ['-60%', 'Billing disputes'], ['400K', 'Customers billed']]
  },
  {
    id: 'ott-streaming-platform', industry: 'media-entertainment', services: ['web-application-development', 'mobile-app-development', 'cloud-services'],
    title: 'OTT Video Streaming Platform', client: 'Regional media house, India',
    summary: 'Subscription OTT with web, mobile and smart-TV apps, DRM and adaptive streaming.',
    image: img('industry-media-entertainment'),
    tech: ['React', 'Kotlin / Android TV', 'Node.js', 'AWS MediaConvert', 'CloudFront'], duration: '8 months', team: '12 engineers', model: 'Dedicated Team',
    challenge: 'The media house wanted its own streaming service for regional content instead of relying on third-party platforms.',
    solution: 'We built a complete OTT platform with content management, DRM-protected adaptive streaming, subscriptions and ads across web, mobile and TV.',
    features: ['Web, Android, iOS & smart-TV apps', 'Adaptive bitrate streaming with DRM', 'Subscriptions, coupons & ads', 'Content management & scheduling', 'Viewer analytics & recommendations'],
    results: [['1M+', 'Registered users'], ['< 1%', 'Buffering ratio'], ['4.6★', 'App rating']]
  },
  {
    id: 'm365-intranet-migration', industry: 'energy-utilities', services: ['managed-it-services', 'system-integration'],
    title: 'Microsoft 365 Migration & Intranet', client: 'Energy services company, Middle East',
    summary: 'Email and file migration to Microsoft 365 with a SharePoint intranet and automated workflows.',
    image: img('project-m365-intranet-migration'),
    tech: ['Microsoft 365', 'SharePoint Online', 'Power Automate', 'Intune', 'Entra ID'], duration: '3 months', team: '5 engineers', model: 'Fixed Price',
    challenge: 'On-premise email and file servers were costly, unreliable and made remote working difficult.',
    solution: 'We migrated 1,500 mailboxes and 8 TB of files to Microsoft 365, built a SharePoint intranet and automated approvals with Power Automate.',
    features: ['Zero-data-loss mailbox migration', 'SharePoint & OneDrive file migration', 'Company intranet with news & policies', 'Approval workflows (leave, purchase)', 'Device management & MFA'],
    results: [['1,500', 'Users migrated'], ['0', 'Data loss'], ['-45%', 'IT infrastructure cost']]
  },
  {
    id: 'insurance-agent-portal', industry: 'insurance', services: ['web-application-development', 'crm-solutions'],
    title: 'Agent & Broker Distribution Portal', client: 'Insurance broker, India',
    summary: 'Portal and app for 5,000+ agents to quote, issue policies, track commissions and manage leads.',
    image: img('service-staff-augmentation'),
    tech: ['Angular', 'Java / Spring Boot', 'PostgreSQL', 'Insurer APIs', 'Flutter'], duration: '6 months', team: '8 engineers', model: 'Fixed Price',
    challenge: 'Agents compared quotes on multiple insurer websites and commission reconciliation took weeks every month.',
    solution: 'We built a single portal integrated with multiple insurers for instant quote comparison and issuance, plus automated commission calculation and a lead CRM.',
    features: ['Multi-insurer quote comparison', 'Instant policy issuance', 'Lead & renewal management', 'Automated commission statements', 'Agent performance leaderboards'],
    results: [['5K+', 'Active agents'], ['+48%', 'Policies issued'], ['3 wks → 1 day', 'Commission reconciliation']]
  },
  {
    id: 'sap-ams-support', industry: 'manufacturing', services: ['erp-solutions', 'application-support-maintenance'],
    title: 'SAP S/4HANA Application Support', client: 'Pharmaceutical manufacturer, Europe',
    summary: 'Functional and technical SAP support across FI/CO, MM, SD, PP and QM with 24×5 SLAs.',
    image: img('project-sap-ams-support'),
    tech: ['SAP S/4HANA', 'ABAP', 'SAP Fiori', 'Solution Manager', 'ServiceNow'], duration: 'Ongoing', team: '12 consultants', model: 'Managed Services',
    challenge: 'The incumbent vendor had a growing backlog, slow responses and limited knowledge of regulated pharma processes.',
    solution: 'We took over SAP AMS after a 6-week transition, cleared the backlog, introduced monthly release cycles and automated key monitoring.',
    features: ['FI/CO, MM, SD, PP, QM module support', 'ABAP enhancements & Fiori apps', 'Month-end close support', 'GxP-compliant change management', 'Monthly service reviews'],
    results: [['-80%', 'Ticket backlog'], ['99%', 'SLA compliance'], ['-25%', 'Support cost']]
  },
  {
    id: 'construction-project-management', industry: 'real-estate', services: ['custom-software-development', 'mobile-app-development'],
    title: 'Construction Project Management Platform', client: 'Infrastructure contractor, Middle East',
    summary: 'Budgets, schedules, site progress, material and subcontractor management across 25 active sites.',
    image: img('project-construction-project-management'),
    tech: ['React', '.NET Core', 'SQL Server', 'Flutter', 'Power BI'], duration: '7 months', team: '9 engineers', model: 'Dedicated Team',
    challenge: 'Project managers learned about cost overruns and delays weeks late, from spreadsheets sent in by each site.',
    solution: 'We built a web platform and site app for daily progress reports with photos, material requests, subcontractor billing and real-time cost-versus-budget dashboards.',
    features: ['Project budgets & BOQ tracking', 'Daily site reports with photos & GPS', 'Material requisition & stock', 'Subcontractor work orders & billing', 'Executive cost & schedule dashboards'],
    results: [['25', 'Sites managed'], ['-15%', 'Cost overruns'], ['Real-time', 'Progress visibility']]
  },
  {
    id: 'restaurant-pos-qr', industry: 'travel-hospitality', services: ['web-application-development', 'mobile-app-development'],
    title: 'Restaurant POS & QR Ordering', client: 'Restaurant chain, Australia',
    summary: 'Cloud POS with QR table ordering, kitchen display, inventory and loyalty for 30 outlets.',
    image: img('project-restaurant-pos-qr'),
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Android Tablets'], duration: '5 months', team: '7 engineers', model: 'Fixed Price',
    challenge: 'Long wait times at peak hours and a legacy POS without central reporting limited growth.',
    solution: 'We delivered a cloud POS with QR ordering and payment at the table, kitchen display screens, central menu and recipe-based inventory.',
    features: ['QR menu ordering & pay-at-table', 'Kitchen display system', 'Central menu & pricing', 'Recipe-based inventory', 'Loyalty & offers'],
    results: [['+22%', 'Average order value'], ['-30%', 'Table turnaround time'], ['30', 'Outlets live']]
  },
  {
    id: 'solar-monitoring-platform', industry: 'energy-utilities', services: ['iot-solutions', 'data-analytics'],
    title: 'Solar Plant Monitoring Platform', client: 'Renewable energy company, India',
    summary: 'Real-time monitoring and analytics for 150 MW of rooftop and ground-mounted solar assets.',
    image: img('project-solar-monitoring-platform'),
    tech: ['Python', 'MQTT', 'TimescaleDB', 'React', 'AWS IoT'], duration: '5 months', team: '6 engineers', model: 'Time & Material',
    challenge: 'Inverter faults went unnoticed for days across remote sites, causing significant generation loss.',
    solution: 'We connected inverters and weather stations through IoT gateways and built dashboards with performance-ratio analytics and instant fault alerts.',
    features: ['Live generation & inverter status', 'Performance ratio & loss analysis', 'Automated fault alerts', 'Maintenance ticketing', 'Investor & customer reports'],
    results: [['150 MW', 'Assets monitored'], ['+6%', 'Energy yield'], ['< 15 min', 'Fault detection']]
  },
  {
    id: 'digital-news-platform', industry: 'media-entertainment', services: ['web-application-development', 'cloud-services'],
    title: 'Digital News Publishing Platform', client: 'News publisher, UK',
    summary: 'Headless CMS and high-traffic news website with paywall, newsletters and ad integration.',
    image: img('project-digital-news-platform'),
    tech: ['Next.js', 'Strapi', 'PostgreSQL', 'Cloudflare', 'Stripe'], duration: '6 months', team: '8 engineers', model: 'Dedicated Team',
    challenge: 'The old CMS slowed editors down and the website crashed during breaking-news traffic spikes.',
    solution: 'We moved the publisher to a headless CMS with a static-first Next.js front-end on a global CDN, plus a metered paywall and newsletter automation.',
    features: ['Editor-friendly headless CMS', 'Static-first pages on global CDN', 'Metered paywall & subscriptions', 'Newsletter automation', 'Programmatic ad integration'],
    results: [['10×', 'Traffic capacity'], ['+65%', 'Digital subscriptions'], ['0.8 s', 'Page load time']]
  }
];

/* ---------------- Technologies ---------------- */
KHL.technologies = [
  { name: 'Front-end', icon: 'layout-dashboard', items: ['React', 'Next.js', 'Angular', 'Vue.js', 'Nuxt', 'TypeScript', 'Svelte', 'Tailwind CSS', 'Blazor'] },
  { name: 'Back-end', icon: 'server', items: ['Java / Spring Boot', '.NET / C#', 'Node.js', 'Python / Django / FastAPI', 'PHP / Laravel', 'Go', 'Ruby on Rails', 'Kotlin'] },
  { name: 'Mobile', icon: 'smartphone', items: ['Flutter', 'React Native', 'Swift / iOS', 'Kotlin / Android', 'Ionic', 'Xamarin / .NET MAUI'] },
  { name: 'Cloud', icon: 'cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Firebase', 'Cloudflare'] },
  { name: 'DevOps', icon: 'infinity', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Azure DevOps', 'ArgoCD'] },
  { name: 'Databases', icon: 'database', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'Redis', 'Cassandra', 'DynamoDB', 'Elasticsearch'] },
  { name: 'ERP & CRM', icon: 'boxes', items: ['SAP S/4HANA', 'SAP Business One', 'Odoo', 'Dynamics 365', 'NetSuite', 'ERPNext', 'Salesforce', 'HubSpot', 'Zoho'] },
  { name: 'Data & AI', icon: 'brain-circuit', items: ['Power BI', 'Tableau', 'Snowflake', 'Databricks', 'Apache Spark', 'Airflow', 'LLMs / GenAI', 'LangChain', 'TensorFlow', 'PyTorch'] },
  { name: 'E-commerce & CMS', icon: 'shopping-cart', items: ['Shopify', 'Magento', 'WooCommerce', 'commercetools', 'WordPress', 'Strapi', 'Contentful', 'Drupal'] },
  { name: 'Testing', icon: 'bug', items: ['Selenium', 'Playwright', 'Cypress', 'Appium', 'JMeter', 'k6', 'Postman', 'SonarQube'] },
  { name: 'Automation & Integration', icon: 'workflow', items: ['UiPath', 'Power Automate', 'MuleSoft', 'Boomi', 'Kafka', 'RabbitMQ', 'n8n'] },
  { name: 'Legacy', icon: 'history', items: ['COBOL', 'VB6', 'Classic ASP', 'PowerBuilder', 'Oracle Forms', 'Delphi', 'MS Access'] }
];

/* ---------------- Hire developers ---------------- */
KHL.roles = [
  ['Java Developers', 'coffee'], ['.NET Developers', 'hash'], ['Python Developers', 'terminal'], ['Node.js Developers', 'hexagon'],
  ['React Developers', 'atom'], ['Angular Developers', 'triangle'], ['Full-Stack Developers', 'layers'], ['PHP / Laravel Developers', 'file-code-2'],
  ['Flutter Developers', 'smartphone'], ['iOS / Android Developers', 'tablet-smartphone'], ['DevOps Engineers', 'infinity'], ['Cloud Architects', 'cloud'],
  ['QA / Automation Testers', 'bug'], ['Data Engineers', 'database'], ['AI / ML Engineers', 'brain-circuit'], ['UI/UX Designers', 'palette'],
  ['SAP / Odoo Consultants', 'boxes'], ['Salesforce Developers', 'contact'], ['Business Analysts', 'clipboard-list'], ['Project Managers / Scrum Masters', 'kanban']
];

/* ---------------- Testimonials ----------------
   These are SAMPLE testimonials and are hidden on the website.
   Replace them with real, approved client feedback, then set showTestimonials to true. */
KHL.showTestimonials = false;
KHL.testimonials = [
  { name: 'Michael Anderson', role: 'CTO, Retail Chain (USA)', project: 'E-commerce Platform', text: 'Their team re-architected our e-commerce platform without a single day of downtime. Page speed and conversions improved dramatically, and communication was excellent throughout.', color: 'grad-1' },
  { name: 'Dr. Priya Mehta', role: 'Director, Multi-Specialty Hospital', project: 'Hospital Management System', text: 'They understood healthcare workflows from day one. The HMS they delivered connected every department, and their 24×7 support team is always responsive.', color: 'grad-2' },
  { name: 'James Whitfield', role: 'Head of IT, General Insurer (UK)', project: 'Claims Modernization', text: 'We moved from paper-heavy claims to a fully digital process. The team\'s insurance domain knowledge saved us months of discovery work.', color: 'grad-3' },
  { name: 'Prof. Ahmed Al-Rashid', role: 'Registrar, Private University (UAE)', project: 'University Management System', text: 'Admissions, exams and fees are now on one platform. Results that took weeks are published in two days. A genuinely reliable technology partner.', color: 'grad-4' },
  { name: 'Sarah Thompson', role: 'VP Engineering, SaaS Start-up', project: 'Dedicated Team', text: 'We scaled from 3 to 12 engineers in six weeks with their dedicated resources. The developers are senior, proactive and fit right into our processes.', color: 'grad-1' },
  { name: 'Rajesh Kulkarni', role: 'Managing Director, Manufacturing Firm', project: 'ERP Implementation', text: 'The ERP rollout was on time and on budget. Our inventory costs dropped and we finally have real-time visibility across production and finance.', color: 'grad-2' },
  { name: 'Fatima Hassan', role: 'Operations Head, 3PL Provider', project: 'Warehouse Management System', text: 'Picking accuracy went to almost 100% and we now bill every activity. The team was hands-on during go-live, working shifts alongside our staff.', color: 'grad-3' },
  { name: 'Daniel Lee', role: 'Founder, Payments Start-up', project: 'DevOps Transformation', text: 'We went from painful fortnightly releases to deploying daily with confidence. They left us with clean infrastructure code and a team that understands it.', color: 'grad-4' }
];

/* ---------------- General FAQs ---------------- */
KHL.faqs = [
  ['Why should we trust KHL Technologies?', 'We have been in business since 2018, and our founders and engineers bring 17+ years of experience delivering and supporting production systems for enterprises and start-ups. We also offer a low-risk paid pilot or discovery phase so you can evaluate us before committing.'],
  ['Which technologies do you work with?', 'Practically any: Java, .NET, Python, Node.js, PHP, React, Angular, Flutter, SAP, Odoo, Salesforce, AWS, Azure, GCP, legacy platforms and more. If you run it, we can build, support or modernize it.'],
  ['Can you provide dedicated developers or resources?', 'Yes. We provide service-based resources (developers, QA, BAs, DevOps, project managers) on hourly, monthly or long-term contracts. Profiles are shared within 48 hours and you interview every candidate.'],
  ['Do you take over support of existing applications?', 'Absolutely. We run a structured knowledge-transfer phase, document the system, set up monitoring and then take over L1–L3 support under agreed SLAs.'],
  ['How do you estimate cost and timelines?', 'After a free consultation we share a detailed proposal with scope, milestones, team composition and cost. For fixed-price projects the price is locked; for Time & Material you get transparent weekly timesheets.'],
  ['Who owns the source code and IP?', 'You do. All source code, designs and documentation belong to you, and we sign an NDA before any detailed project discussion.'],
  ['Which countries and time zones do you work with?', 'We work with clients worldwide, including the USA, UK, Europe, Middle East, Australia and India, and align working hours to overlap with your team.'],
  ['How do you ensure quality and security?', 'Code reviews, automated testing, CI/CD, OWASP-based secure coding, role-based access and processes aligned with ISO 27001 and ITIL practices.']
];

/* ---------------- Careers (update with real openings) ---------------- */
KHL.jobs = [
  { title: 'Senior Full-Stack Developer (React + Node.js / Java)', exp: '5–8 years', type: 'Full-time', loc: 'Hybrid / Remote' },
  { title: '.NET Core Developer', exp: '3–6 years', type: 'Full-time', loc: 'Hybrid / Remote' },
  { title: 'Flutter Mobile App Developer', exp: '2–5 years', type: 'Full-time', loc: 'Hybrid / Remote' },
  { title: 'DevOps / Cloud Engineer (AWS / Azure)', exp: '4–7 years', type: 'Full-time', loc: 'Remote' },
  { title: 'QA Automation Engineer', exp: '3–6 years', type: 'Full-time', loc: 'Hybrid' },
  { title: 'Odoo / ERP Functional Consultant', exp: '4–8 years', type: 'Full-time', loc: 'Hybrid / On-site' },
  { title: 'Business Development Manager (IT Services)', exp: '5+ years', type: 'Full-time', loc: 'On-site / Remote' },
  { title: 'Application Support Engineer (L2 / L3)', exp: '2–5 years', type: 'Full-time · Shifts', loc: 'Hybrid' }
];
