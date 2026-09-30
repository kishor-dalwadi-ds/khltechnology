/* ==========================================================
   KHL Technologies — client-conversion content
   Needs picker, commitments, comparison, pricing, global
   working details and Insights articles. Loaded after data.js.
   ========================================================== */

/* "What do you need?" picker on the home page */
KHL.needs = [
  { icon: 'rocket', title: 'Build a new product', text: 'Web app, mobile app, SaaS or MVP from idea to launch.', link: '#/services/custom-software-development', cta: 'Start building' },
  { icon: 'life-buoy', title: 'Support my existing application', text: 'Fix issues, keep it running 24×7 and add enhancements.', link: '#/services/application-support-maintenance', cta: 'Get support' },
  { icon: 'user-plus', title: 'Hire developers / resources', text: 'Add skilled engineers to your team within days.', link: '#/hire-developers', cta: 'Hire now' },
  { icon: 'boxes', title: 'Implement ERP or CRM', text: 'Odoo, SAP, Dynamics, Salesforce: set up, customize, support.', link: '#/services/erp-solutions', cta: 'Explore ERP' },
  { icon: 'refresh-cw', title: 'Modernize an old system', text: 'Move legacy software to modern technology and the cloud.', link: '#/services/legacy-modernization', cta: 'Modernize' },
  { icon: 'brain-circuit', title: 'Add AI & automation', text: 'Chatbots, document AI, RPA bots and smart analytics.', link: '#/services/ai-machine-learning', cta: 'Explore AI' }
];

/* Promises shown across the site. Adjust to match what you are ready to commit to. */
KHL.commitments = [
  { icon: 'calculator', title: 'Free estimate in 48 hours', text: 'Detailed scope, timeline and cost, at no charge and with no obligation.' },
  { icon: 'file-lock-2', title: 'NDA before we talk details', text: 'Your idea and data are protected from the very first conversation.' },
  { icon: 'user-check', title: '1-week risk-free trial', text: 'Try a dedicated developer for a week. Not satisfied? You don\'t pay.' },
  { icon: 'shield-check', title: '60-day free bug-fix warranty', text: 'Any defects found after go-live are fixed free for 60 days.' },
  { icon: 'key-round', title: '100% code & IP ownership', text: 'Source code lives in your repository. No lock-in, ever.' },
  { icon: 'refresh-ccw', title: 'Free resource replacement', text: 'If a team member isn\'t the right fit, we replace them at no cost.' }
];

/* Why KHL vs alternatives: 2 = strong, 1 = partial, 0 = weak */
KHL.comparison = {
  cols: ['KHL Technologies', 'Freelancers', 'Large IT Agencies', 'In-house Hiring'],
  rows: [
    ['Cost', [2, 'Competitive offshore rates'], [2, 'Low'], [0, 'High overheads'], [0, 'Salary + benefits + office']],
    ['Time to start', [2, '1–2 weeks'], [1, 'Fast but uncertain'], [1, '4–8 weeks'], [0, '2–4 months to hire']],
    ['Senior expertise', [2, 'Senior-led, 17+ yrs experience'], [1, 'Varies widely'], [1, 'Often junior teams'], [1, 'Hard to hire']],
    ['Full team (Dev, QA, DevOps, PM)', [2, 'Yes, under one roof'], [0, 'Single person'], [2, 'Yes'], [1, 'Must hire each role']],
    ['Accountability & continuity', [2, 'Contract, SLAs, backup staff'], [0, 'Risk of disappearing'], [2, 'Yes'], [1, 'Depends on retention']],
    ['Scale up / down', [2, 'Anytime, month to month'], [1, 'Limited'], [1, 'Slow, rigid contracts'], [0, 'Hiring & layoffs']],
    ['Direct access to leadership', [2, 'Always'], [2, 'Yes'], [0, 'Rarely'], [2, 'Yes']]
  ]
};

/* Indicative pricing (USD). These are example figures: set your real rates before going live. */
KHL.pricing = {
  // false = hide all dollar amounts (packages, rates, estimator budget) and show "custom quote" instead
  showPrices: false,
  currencyNote: 'Indicative prices in USD. Final quotes depend on scope, technology and timeline. We also quote in EUR, GBP, AED, AUD and INR.',
  packages: [
    { name: 'Website / Landing', svc: 'web-application-development', icon: 'globe', from: 1500, unit: 'project', time: '2–4 weeks', points: ['Responsive corporate website', 'CMS for easy updates', 'SEO & speed optimized', 'Contact forms & analytics'] },
    { name: 'MVP / Web App', svc: 'custom-software-development', icon: 'rocket', from: 10000, unit: 'project', time: '8–12 weeks', featured: true, points: ['UX design & clickable prototype', 'Web app with admin panel', 'Cloud deployment & CI/CD', '60-day bug-fix warranty'] },
    { name: 'Mobile App', svc: 'mobile-app-development', icon: 'smartphone', from: 12000, unit: 'project', time: '10–16 weeks', points: ['iOS + Android (Flutter / React Native)', 'Back-end APIs & admin panel', 'Push notifications & analytics', 'App Store & Play Store launch'] },
    { name: 'ERP Implementation', svc: 'erp-solutions', icon: 'boxes', from: 8000, unit: 'project', time: '2–6 months', points: ['Odoo / Dynamics / SAP B1', 'Customization & data migration', 'User training & go-live', 'Annual support (AMC) option'] },
    { name: 'Application Support', svc: 'application-support-maintenance', icon: 'life-buoy', from: 800, unit: 'month', time: 'Start in 2 weeks', points: ['L1 / L2 / L3 support', 'Monitoring & bug fixes', 'Defined SLAs', 'Monthly service reports'] },
    { name: 'Dedicated Developer', svc: 'staff-augmentation', icon: 'user-plus', from: 2400, unit: 'month', time: 'Start in 1–2 weeks', points: ['Full-time, 160 hrs / month', 'Works in your time zone', '1-week risk-free trial', 'Free replacement'] }
  ],
  // [role, experience, hourly USD, monthly full-time USD]
  rates: [
    ['Junior Developer / QA', '2–3 yrs', 15, 2400],
    ['Mid-level Developer', '3–6 yrs', 22, 3500],
    ['Senior Developer', '6–10 yrs', 30, 4800],
    ['Tech Lead / Architect', '10+ yrs', 45, 7200],
    ['Business Analyst / Project Manager', '5+ yrs', 28, 4400],
    ['ERP / Salesforce Consultant', '5+ yrs', 35, 5600]
  ],
  // Cost estimator: [key, label, base cost USD, base weeks]
  estimator: {
    types: [
      ['website', 'Website / Landing pages', 2000, 3],
      ['webapp', 'Web application / Portal', 12000, 10],
      ['mobile', 'Mobile app', 14000, 12],
      ['ecommerce', 'E-commerce store / Marketplace', 9000, 8],
      ['erp', 'ERP / CRM implementation', 10000, 12],
      ['enterprise', 'Enterprise / SaaS platform', 30000, 20]
    ],
    // [key, label, multiplier]
    complexity: [['basic', 'Basic', 0.7], ['standard', 'Standard', 1], ['advanced', 'Advanced', 1.6]],
    // [key, label, extra cost USD, extra weeks]
    extras: [
      ['design', 'Custom UI/UX design', 1500, 1], ['admin', 'Admin dashboard', 2500, 2], ['payments', 'Online payments', 1500, 1],
      ['integrations', 'Third-party / ERP integrations', 3000, 2], ['ai', 'AI features (chatbot, document AI)', 5000, 3],
      ['multilang', 'Multi-language support', 1200, 1], ['both', 'Both iOS & Android', 4000, 2]
    ]
  }
};

/* Working with clients worldwide */
KHL.global = {
  timezones: [
    ['USA & Canada', 'EST / CST / PST', '3–4 hrs daily overlap + on-call support'],
    ['United Kingdom & Europe', 'GMT / CET', '4–6 hrs daily overlap'],
    ['Middle East', 'GST / AST', 'Full working-day overlap'],
    ['Australia & APAC', 'AEST / SGT', '4–6 hrs daily overlap'],
    ['Africa', 'WAT / EAT', '5–7 hrs daily overlap'],
    ['India', 'IST', 'Same time zone']
  ],
  tools: ['Slack', 'Microsoft Teams', 'Zoom', 'Google Meet', 'WhatsApp', 'Jira', 'Confluence', 'Trello', 'ClickUp', 'GitHub', 'GitLab', 'Azure DevOps', 'Figma'],
  payments: ['International bank transfer (SWIFT)', 'Wise', 'Payoneer', 'PayPal', 'Stripe invoice'],
  currencies: ['USD', 'EUR', 'GBP', 'AED', 'AUD', 'SGD', 'INR'],
  contracts: [['NDA', 'Signed before detailed discussion'], ['MSA', 'Master Services Agreement for long-term work'], ['SOW', 'Statement of Work per project or phase'], ['SLA', 'Service levels for support contracts']],
  deliverables: ['Complete source code in your Git repository', 'Technical & user documentation', 'Architecture & database diagrams', 'Test cases and test reports', 'Deployment scripts & CI/CD pipelines', 'Admin credentials & infrastructure handover', 'Knowledge-transfer sessions & training', 'Post-launch warranty & support options'],
  youProvide: ['Your idea, goals or existing documents (rough notes are fine)', 'A contact person for questions and feedback', 'Access to existing systems (for support / integration work)', 'Timely feedback on demos, usually weekly'],
  rhythm: [['Daily', 'Stand-up updates on Slack / Teams'], ['Weekly', 'Progress report & demo call'], ['Every sprint', 'Working software you can test'], ['Monthly', 'Review of budget, timeline & quality']]
};

/* Insights / guides for buyers.
   Each section: [heading, [paragraphs], [bullet points]] */
KHL.articles = [
  {
    slug: 'how-much-does-custom-software-cost', icon: 'calculator', category: 'Pricing', read: 6,
    title: 'How much does custom software development cost?',
    excerpt: 'Typical price ranges for websites, web apps, mobile apps and ERP, the factors that drive cost and how to reduce it without cutting quality.',
    sections: [
      ['The short answer', ['Typical industry price ranges for business software built by experienced offshore teams (your exact cost depends on scope):'], ['Website or landing pages: $1,500 – $6,000', 'MVP or simple web application: $10,000 – $30,000', 'Mobile app (iOS + Android): $12,000 – $50,000', 'ERP / CRM implementation: $8,000 – $60,000', 'Enterprise or SaaS platform: $30,000 – $150,000+']],
      ['What drives the cost?', ['Cost is mainly the number of hours needed, which depends on:'], ['Number of features, screens and user roles', 'Complexity of business rules and workflows', 'Integrations with other systems (ERP, payments, APIs)', 'Platforms: web, iOS, Android or all of them', 'Design quality, security and compliance needs', 'Timeline: urgent delivery needs a bigger team']],
      ['How to reduce cost without cutting quality', [], ['Start with an MVP: launch core features first, then grow', 'Use cross-platform frameworks (Flutter / React Native) for mobile', 'Reuse proven components and open-source where sensible', 'Choose a dedicated team for long-term products: lower cost per hour', 'Give fast, clear feedback: rework is the biggest hidden cost']],
      ['How we estimate', ['After a free call we break your idea into features, estimate each one and share a transparent proposal with scope, milestones, team and cost, usually within 48 hours. You can also use our online project estimator for a quick timeline and team-size estimate.'], []]
    ]
  },
  {
    slug: 'fixed-price-vs-dedicated-team', icon: 'scale', category: 'Engagement', read: 5,
    title: 'Fixed price vs dedicated team vs time & material: which should you choose?',
    excerpt: 'A simple guide to the three common outsourcing models, with pros, cons and when to use each one.',
    sections: [
      ['Fixed price', ['You agree the scope, price and deadline up front. Payments are tied to milestones.'], ['Best for: clearly defined projects, MVPs, websites', 'Pros: predictable budget, low management effort', 'Cons: changes need a change request; less flexibility']],
      ['Dedicated team', ['You get full-time engineers who work only on your product, billed monthly.'], ['Best for: long-term products, continuous development, scale-ups', 'Pros: full control, deep product knowledge, lowest cost per hour', 'Cons: you (or our PM) prioritize the work each sprint']],
      ['Time & material', ['You pay for the actual hours worked, tracked with weekly timesheets.'], ['Best for: support, maintenance, R&D, evolving requirements', 'Pros: maximum flexibility, start quickly', 'Cons: final cost is not fixed up front']],
      ['Our recommendation', ['Many clients start with a small fixed-price phase (discovery or MVP) to build trust, then move to a dedicated team for ongoing development. You can switch models at any time.'], []]
    ]
  },
  {
    slug: 'outsourcing-application-support', icon: 'life-buoy', category: 'Support', read: 5,
    title: 'A practical guide to outsourcing application support & maintenance',
    excerpt: 'What L1, L2 and L3 support mean, how knowledge transfer works and what SLAs you should expect.',
    sections: [
      ['L1, L2 and L3 explained', [], ['L1: first response, user queries, password resets, logging tickets', 'L2: functional issues, configuration, data fixes, known errors', 'L3: code-level bug fixes, performance problems, enhancements']],
      ['How a support takeover works', [], ['Weeks 1–2: knowledge-transfer sessions and system access', 'Weeks 2–4: shadow support alongside your current team', 'Week 4 onwards: we take full ownership under agreed SLAs', 'Ongoing: monthly reports, root-cause analysis and improvements']],
      ['SLAs you should expect', [], ['Critical (system down): response in 15–30 minutes, 24×7', 'High: response within 2 hours', 'Medium: response within 8 business hours', 'Low / enhancements: planned in monthly releases']],
      ['Why outsource support?', ['Outsourcing removes dependency on individual employees, provides round-the-clock coverage and typically costs 30–50% less than an equivalent in-house team, while your internal staff focus on new initiatives.'], []]
    ]
  },
  {
    slug: 'how-to-choose-an-erp', icon: 'boxes', category: 'ERP', read: 6,
    title: 'How to choose the right ERP for a growing business',
    excerpt: 'Odoo, SAP Business One, Dynamics 365 or NetSuite? A step-by-step way to pick the ERP that fits your business and budget.',
    sections: [
      ['Start with your processes, not the software', ['List your key processes (sales, purchase, inventory, production, accounts, HR) and the pain points in each. The best ERP is the one that fits these with the least customization.'], []],
      ['Popular options at a glance', [], ['Odoo: modular, flexible, cost-effective; great for SMEs and mid-market', 'SAP Business One: strong finance & inventory for growing SMEs', 'Microsoft Dynamics 365 Business Central: ideal if you use Microsoft 365', 'Oracle NetSuite: cloud ERP for multi-entity, fast-growing companies', 'Custom ERP: when your processes are unique and a competitive advantage']],
      ['Budget for the full picture', [], ['Licenses or subscriptions', 'Implementation & customization', 'Data migration from old systems', 'User training and change management', 'Annual support and upgrades']],
      ['Tips for a successful rollout', [], ['Appoint an internal project owner', 'Go live in phases rather than all modules at once', 'Clean your data before migration', 'Train users early and often']]
    ]
  },
  {
    slug: 'launch-an-mvp-in-12-weeks', icon: 'rocket', category: 'Start-ups', read: 5,
    title: 'How to launch your MVP in 12 weeks',
    excerpt: 'A week-by-week plan to go from idea to a working product in the hands of real users.',
    sections: [
      ['Weeks 1–2: Discovery', [], ['Define the problem, target users and success metrics', 'Prioritize must-have features (and park the nice-to-haves)', 'Choose the technology and architecture']],
      ['Weeks 3–4: Design', [], ['User journeys and wireframes', 'Clickable prototype tested with a few real users', 'Final UI design']],
      ['Weeks 5–10: Build', [], ['Two-week sprints with a demo at the end of each', 'Core features, admin panel, payments and integrations', 'Automated tests and cloud setup']],
      ['Weeks 11–12: Launch', [], ['QA, security checks and performance tuning', 'App store / production release', 'Analytics to learn from your first users']],
      ['After launch', ['Collect feedback, measure and iterate. Our dedicated team model lets you keep improving the product every sprint.'], []]
    ]
  },
  {
    slug: 'checklist-hiring-offshore-developers', icon: 'list-checks', category: 'Hiring', read: 4,
    title: 'Checklist: hiring offshore developers safely',
    excerpt: 'Ten questions to ask before you hire remote developers or an outsourcing partner.',
    sections: [
      ['Before you sign', [], ['Can I interview and test the developers myself?', 'Is there a trial period?', 'Will you sign an NDA and assign full IP to us?', 'Who is my single point of contact?', 'What happens if a developer leaves or is not a good fit?']],
      ['During the engagement', [], ['How many hours overlap with my time zone?', 'Which tools do you use for communication and tracking?', 'How often will I get demos and reports?', 'How is code quality ensured (reviews, tests, CI)?', 'Where is the code stored, and who has access?']],
      ['How we answer', ['You interview everyone. We offer a 1-week risk-free trial, an NDA and full IP transfer, a dedicated account manager, free replacement, daily updates, weekly demos, and code in your own repository from day one.'], []]
    ]
  }
];
