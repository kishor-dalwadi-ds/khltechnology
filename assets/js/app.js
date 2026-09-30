/* ==========================================================
   KHL Technologies — single-page app
   Hash routes: #/  #/services  #/services/:slug  #/industries
   #/industries/:slug  #/portfolio  #/portfolio/:id  #/hire-developers
   #/technologies  #/about  #/careers  #/contact  #/privacy  #/terms
   ========================================================== */
(() => {
  'use strict';

  const { company: C, services: SERVICES, serviceGroups: GROUPS, industries: INDUSTRIES,
    projects: PROJECTS, technologies: TECH, roles: ROLES, testimonials: TESTIMONIALS,
    faqs: FAQS, jobs: JOBS, needs: NEEDS, commitments: COMMITMENTS, comparison: COMPARE,
    pricing: PRICING, global: GLOBAL, articles: ARTICLES, showTestimonials } = window.KHL;

  /* ---------------- Helpers ---------------- */
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icons = () => window.lucide && window.lucide.createIcons();
  const svcBySlug = s => SERVICES.find(x => x.slug === s);
  const indBySlug = s => INDUSTRIES.find(x => x.slug === s);
  const imgOnError = `onerror="this.remove()"`;
  const initials = n => n.replace(/^(Dr\.|Prof\.)\s*/, '').split(' ').map(p => p[0]).slice(0, 2).join('');
  const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cleanups = [];

  /* ---------------- Shared components ---------------- */
  const crumbs = items => `<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>${items.map(([t, h]) =>
    `<i data-lucide="chevron-right"></i>${h ? `<a href="${h}">${esc(t)}</a>` : `<span>${esc(t)}</span>`}`).join('')}</nav>`;

  const pageHero = ({ tag, title, text, crumbs: c = [], actions = '', aside = '' }) => `
    <section class="page-hero">
      <div class="hero-bg" aria-hidden="true"><span class="blob b1"></span><span class="blob b2"></span><span class="grid-bg"></span></div>
      <div class="container ${aside ? 'page-hero-grid' : ''}">
        <div class="reveal">
          ${crumbs(c)}
          ${tag ? `<span class="section-tag">${tag}</span>` : ''}
          <h1>${title}</h1>
          ${text ? `<p class="lead">${text}</p>` : ''}
          ${actions ? `<div class="hero-ctas">${actions}</div>` : ''}
        </div>
        ${aside ? `<div class="reveal delay-1">${aside}</div>` : ''}
      </div>
    </section>`;

  const sectionHead = (tag, title, text, cls = '') => `
    <div class="section-head reveal ${cls}">
      <span class="section-tag">${tag}</span>
      <h2>${title}</h2>
      ${text ? `<p>${text}</p>` : ''}
    </div>`;

  const figure = (src, alt, cls, icon = 'image') =>
    `<figure class="img-fallback ${cls}"><i data-lucide="${icon}" class="fallback-icon"></i><img src="${src}" alt="${esc(alt)}" loading="lazy" ${imgOnError}></figure>`;

  const serviceCard = (s, i = 0) => `
    <a class="service-card reveal delay-${i % 3}" href="#/services/${s.slug}">
      <span class="svc-icon ${s.color}"><i data-lucide="${s.icon}"></i></span>
      <h3>${esc(s.name)}</h3>
      <p>${esc(s.short)}</p>
      <span class="card-link">Learn more <i data-lucide="arrow-right"></i></span>
    </a>`;

  const projectCard = (p, i = 0) => {
    const ind = indBySlug(p.industry);
    return `
    <a class="project-card" href="#/portfolio/${p.id}" style="animation-delay:${Math.min(i, 8) * 0.04}s">
      ${figure(p.image, p.title, 'project-thumb', ind ? ind.icon : 'folder')}
      <span class="project-cat"><i data-lucide="${ind ? ind.icon : 'folder'}"></i> ${esc(ind ? ind.name : '')}</span>
      <div class="project-body">
        <small class="project-client">${esc(p.client)}</small>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="project-result"><strong class="grad-text">${esc(p.results[0][0])}</strong><span>${esc(p.results[0][1])}</span></div>
        <div class="tags">${p.tech.slice(0, 3).map(t => `<span>${esc(t)}</span>`).join('')}</div>
        <span class="card-link">View case study <i data-lucide="arrow-right"></i></span>
      </div>
    </a>`;
  };

  const faqList = items => `<div class="faq-list">${items.map(([q, a], i) =>
    `<details ${i === 0 ? 'open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;

  const ctaBand = (title = 'Have a project in mind?', text = 'Tell us about it. We\'ll respond within 24 hours with ideas, a plan and an estimate, free of charge.') => `
    <section class="cta-band">
      <div class="container">
        <div class="cta-inner reveal">
          <div><h2>${title}</h2><p>${text}</p></div>
          <div class="cta-actions">
            <a href="#/contact" class="btn btn-light btn-lg">Get a Free Quote <i data-lucide="arrow-right"></i></a>
            ${C.bookingUrl ? `<a href="${C.bookingUrl}" target="_blank" rel="noopener" class="btn btn-outline-light btn-lg"><i data-lucide="calendar-check"></i> Book a Call</a>`
              : C.whatsapp ? `<a href="https://wa.me/${C.whatsapp}" target="_blank" rel="noopener" class="btn btn-outline-light btn-lg"><i data-lucide="message-circle"></i> WhatsApp Us</a>` : ''}
          </div>
        </div>
      </div>
    </section>`;

  // Every figure here is factual: experience, plus counts of what is actually listed on this site
  const stats = () => `
    <section class="stats-band">
      <div class="container stats">
        <div class="stat reveal"><strong><span class="counter" data-target="17">0</span>+</strong><span>Years of experience</span></div>
        <div class="stat reveal delay-1"><strong><span class="counter" data-target="${SERVICES.length}">0</span></strong><span>IT services</span></div>
        <div class="stat reveal delay-2"><strong><span class="counter" data-target="${INDUSTRIES.length}">0</span></strong><span>Industries served</span></div>
        <div class="stat reveal delay-3"><strong><span class="counter" data-target="${Math.floor(techCount() / 10) * 10}">0</span>+</strong><span>Technologies</span></div>
      </div>
    </section>`;

  const techMarquee = () => {
    const items = ['Java', '.NET', 'Python', 'Node.js', 'React', 'Angular', 'Vue', 'Flutter', 'React Native', 'PHP / Laravel', 'SAP', 'Odoo', 'Dynamics 365', 'Salesforce', 'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'Power BI', 'Generative AI', 'UiPath', 'Shopify'];
    const row = hidden => items.map(t => `<span ${hidden ? 'aria-hidden="true"' : ''}>${t}</span>`).join('');
    return `<div class="tech-marquee" aria-label="Technologies we work with"><div class="marquee-track">${row(false)}${row(true)}</div></div>`;
  };

  const trustStrip = () => `
    <div class="trust-strip reveal">
      ${[['shield-check', 'NDA & full IP ownership'], ['lock', 'ISO 27001-aligned security'], ['refresh-cw', 'Agile / Scrum delivery'], ['headset', 'ITIL-based 24×7 support'], ['badge-check', 'GDPR & HIPAA aware']]
        .map(([i, t]) => `<span><i data-lucide="${i}"></i>${t}</span>`).join('')}
    </div>`;

  const engagementModels = () => `
    <section class="section" id="engagement">
      <div class="container">
        ${sectionHead('How We Engage', 'Flexible models that <span class="grad-text">fit your budget</span>', 'Choose the model that suits your project today, and switch as your needs evolve.')}
        <div class="models-grid">
          <div class="model-card reveal">
            <i data-lucide="file-check-2"></i><h3>Fixed Price</h3>
            <p>Best for well-defined scope. Agreed budget, timeline and deliverables with milestone-based payments.</p>
            <ul class="mini-list"><li>Fixed cost &amp; timeline</li><li>Milestone payments</li><li>Minimal management effort</li></ul>
            <span class="model-fit">Ideal for: MVPs, websites, defined modules</span>
          </div>
          <div class="model-card featured reveal delay-1">
            <span class="ribbon">Most popular</span>
            <i data-lucide="users-round"></i><h3>Dedicated Team</h3>
            <p>A full-time team (developers, QA, PM) working exclusively on your product, managed by you or by us.</p>
            <ul class="mini-list"><li>Monthly billing per resource</li><li>Full control of priorities</li><li>Scale up or down anytime</li></ul>
            <span class="model-fit">Ideal for: long-term products, scale-ups</span>
          </div>
          <div class="model-card reveal delay-2">
            <i data-lucide="timer"></i><h3>Time &amp; Material</h3>
            <p>Pay for actual hours spent. Maximum flexibility for evolving requirements and ongoing support.</p>
            <ul class="mini-list"><li>Hourly / monthly billing</li><li>Change scope anytime</li><li>Weekly timesheets</li></ul>
            <span class="model-fit">Ideal for: support, R&amp;D, changing scope</span>
          </div>
        </div>
      </div>
    </section>`;

  const processSection = (alt = true) => `
    <section class="section ${alt ? 'section-alt' : ''}" id="process">
      <div class="container">
        ${sectionHead('Our Process', 'A proven way to <span class="grad-text">deliver on time</span>', 'Agile, transparent and predictable. You always know what\'s done, what\'s next and what it costs.')}
        <ol class="process">
          ${[['search', 'Discover', 'Workshops to understand goals, users, constraints and success metrics.'],
            ['pen-tool', 'Design', 'Architecture, UX prototypes and a clear plan with estimates and milestones.'],
            ['code', 'Develop', 'Two-week sprints with demos, code reviews and automated tests.'],
            ['rocket', 'Deploy', 'CI/CD, security checks and a smooth go-live with rollback plans.'],
            ['headset', 'Support', 'SLA-backed support, monitoring and continuous improvement.']]
            .map(([i, t, d], k) => `<li class="reveal delay-${k}"><span class="step">0${k + 1}</span><i data-lucide="${i}"></i><h3>${t}</h3><p>${d}</p></li>`).join('')}
        </ol>
      </div>
    </section>`;

  const whyUs = () => `
    <section class="section" id="why">
      <div class="container why-grid">
        <div class="why-copy reveal">
          <span class="section-tag">Why KHL Technologies</span>
          <h2>Big-company experience. <span class="grad-text">Start-up commitment.</span></h2>
          <p>Since 2018 we have stayed deliberately focused: you get our most senior people, direct access to leadership and a team that is invested in making your project a success story.</p>
          <a href="#/about" class="btn btn-primary">More About Us <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="why-list">
          ${[['badge-check', 'grad-1', 'Proven Experience', '17+ years across enterprise, mid-market and start-up projects.'],
            ['layers', 'grad-2', 'Any Technology', 'Legacy to cutting-edge. We adapt to your stack, not the other way round.'],
            ['lock', 'grad-3', 'Security & IP Protection', 'NDA, secure development practices and full IP ownership for you.'],
            ['wallet', 'grad-4', 'Cost-Effective', 'Competitive rates without compromising on quality or communication.'],
            ['clock', 'grad-1', 'Time-Zone Friendly', 'Overlapping hours with the US, UK, Europe, Middle East and APAC.'],
            ['message-square', 'grad-2', 'Clear Communication', 'Single point of contact, weekly reports and shared dashboards.']]
            .map(([i, g, t, d], k) => `<div class="why-item reveal delay-${k % 2}"><span class="svc-icon ${g}"><i data-lucide="${i}"></i></span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}
        </div>
      </div>
    </section>`;

  // Hidden until real, approved testimonials are added (KHL.showTestimonials in data.js)
  const testimonials = () => !showTestimonials || !TESTIMONIALS.length ? '' : `
    <section class="section section-alt" id="testimonials">
      <div class="container">
        ${sectionHead('Client Testimonials', 'What our <span class="grad-text">clients say</span>', 'Feedback from organizations our team has partnered with.')}
        <div class="slider reveal">
          <div class="slider-track" id="testimonialTrack">
            ${TESTIMONIALS.map(t => `
              <article class="t-card">
                <i data-lucide="quote" class="quote-icon"></i>
                <div class="stars" aria-label="5 out of 5 stars">${'<i data-lucide="star"></i>'.repeat(5)}</div>
                <blockquote>“${esc(t.text)}”</blockquote>
                <div class="t-author"><span class="avatar ${t.color}">${esc(initials(t.name))}</span>
                  <div><strong>${esc(t.name)}</strong><small>${esc(t.role)}</small><span class="t-badge">${esc(t.project)}</span></div></div>
              </article>`).join('')}
          </div>
          <div class="slider-controls">
            <button class="icon-btn" id="prevT" aria-label="Previous testimonials"><i data-lucide="chevron-left"></i></button>
            <div class="slider-dots" id="tDots"></div>
            <button class="icon-btn" id="nextT" aria-label="Next testimonials"><i data-lucide="chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>`;

  const contactForm = (preset = '', message = '') => `
    <form class="contact-form" data-contact novalidate>
      <h3 class="form-title">Tell us about your project</h3>
      <div class="form-row">
        <label>Full name *<input type="text" name="name" required autocomplete="name" placeholder="John Smith"></label>
        <label>Work email *<input type="email" name="email" required autocomplete="email" placeholder="john@company.com"></label>
      </div>
      <div class="form-row">
        <label>Company<input type="text" name="company" autocomplete="organization" placeholder="Company name"></label>
        <label>Phone / WhatsApp<input type="tel" name="phone" autocomplete="tel" placeholder="+1 555 000 0000"></label>
      </div>
      <div class="form-row">
        <label>Service needed
          <select name="service">
            ${SERVICES.map(s => `<option ${s.name === preset ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
            <option ${preset === 'Other' ? 'selected' : ''}>Other</option>
          </select>
        </label>
        <label>Estimated budget
          <select name="budget">
            <option>Not sure yet</option><option>Under $5,000</option><option>$5,000 – $20,000</option>
            <option>$20,000 – $50,000</option><option>$50,000 – $100,000</option><option>$100,000+</option>
          </select>
        </label>
      </div>
      <label>Project details *<textarea name="message" rows="6" required placeholder="Tell us about your project, goals and timeline...">${esc(message)}</textarea></label>
      <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <label class="check"><input type="checkbox" name="nda"> Please send me an NDA before we discuss details</label>
      <button type="submit" class="btn btn-primary btn-lg btn-block">Send Message <i data-lucide="send"></i></button>
      <p class="form-note"><i data-lucide="lock"></i> Your information is kept confidential. We reply within 1 business day.</p>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>`;

  // Only details that are actually configured in data.js are shown
  const contactList = () => `
    <ul class="contact-list">
      <li><span class="svc-icon grad-1"><i data-lucide="mail"></i></span><div><small>Email</small><a href="mailto:${C.email}">${C.email}</a></div></li>
      ${C.phone ? `<li><span class="svc-icon grad-2"><i data-lucide="phone"></i></span><div><small>Phone${C.whatsapp ? ' / WhatsApp' : ''}</small><a href="tel:${C.phoneHref}">${esc(C.phone)}</a></div></li>` : ''}
      ${C.address ? `<li><span class="svc-icon grad-3"><i data-lucide="map-pin"></i></span><div><small>Office</small><span>${esc(C.address)}</span>${C.mapUrl ? `<a class="map-link" href="${C.mapUrl}" target="_blank" rel="noopener"><i data-lucide="navigation"></i> Get directions</a>` : ''}</div></li>` : ''}
      <li><span class="svc-icon grad-4"><i data-lucide="clock"></i></span><div><small>Working hours</small><span>${esc(C.hours)}</span></div></li>
    </ul>`;

  const bookHref = () => C.bookingUrl || '#/contact';
  const bookAttrs = () => C.bookingUrl ? 'target="_blank" rel="noopener"' : '';
  const money = n => '$' + Math.round(n).toLocaleString('en-US');
  const SHOW_PRICES = PRICING.showPrices !== false;   // set in content.js
  const techCount = () => TECH.reduce((n, c) => n + c.items.length, 0);

  const needsPicker = () => `
    <section class="section" id="needs">
      <div class="container">
        ${sectionHead('How Can We Help?', 'What do you <span class="grad-text">need today?</span>', 'Pick what fits and we\'ll show you exactly how we can help, or simply tell us your problem.')}
        <div class="needs-grid">
          ${NEEDS.map((n, k) => `
            <a class="need reveal delay-${k % 3}" href="${n.link}">
              <span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${n.icon}"></i></span>
              <div><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p><span class="card-link">${esc(n.cta)} <i data-lucide="arrow-right"></i></span></div>
            </a>`).join('')}
        </div>
      </div>
    </section>`;

  const startSteps = (alt = false) => `
    <section class="section ${alt ? 'section-alt' : ''}" id="start">
      <div class="container">
        ${sectionHead('Getting Started', 'Start your project in <span class="grad-text">3 simple steps</span>', 'No long sales cycles. Most clients go from first message to project kick-off in under two weeks.')}
        <ol class="start-steps">
          ${[['send', 'Share your requirement', 'Fill in the form, email or message us. A short description is enough to begin.', 'Day 1'],
            ['calendar-check', 'Free consultation & estimate', 'We discuss your goals on a call, sign an NDA and send a clear proposal with cost and timeline.', 'Within 48 hours'],
            ['rocket', 'Kick-off & first delivery', 'Your team is assembled, tools are set up and you see progress from the first week.', 'In 1–2 weeks']]
            .map(([i, t, d, when], k) => `<li class="reveal delay-${k}"><span class="when">${when}</span><span class="svc-icon grad-${k + 1}"><i data-lucide="${i}"></i></span><h3><span class="n">${k + 1}</span> ${t}</h3><p>${d}</p></li>`).join('')}
        </ol>
        <div class="center mt-lg"><a href="#/contact" class="btn btn-primary btn-lg">Share Your Requirement <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>`;

  const commitmentsSection = (alt = true) => `
    <section class="section ${alt ? 'section-alt' : ''}" id="commitments">
      <div class="container">
        ${sectionHead('Our Commitments', 'Work with us <span class="grad-text">risk-free</span>', 'Clear promises that protect your time, money and ideas.')}
        <div class="commit-grid">
          ${COMMITMENTS.map((c, k) => `<div class="commit reveal delay-${k % 3}"><i data-lucide="${c.icon}"></i><div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div></div>`).join('')}
        </div>
      </div>
    </section>`;

  const comparisonTable = (alt = false) => {
    const mark = v => `<i data-lucide="${['circle-x', 'circle-minus', 'circle-check'][v]}" class="cmp-${v}"></i>`;
    return `
    <section class="section ${alt ? 'section-alt' : ''}" id="compare">
      <div class="container">
        ${sectionHead('Compare', 'Why choose KHL over <span class="grad-text">the alternatives?</span>', 'An honest comparison of your options for getting software built and supported.')}
        <div class="cmp-wrap reveal" tabindex="0" aria-label="Comparison table">
          <table class="cmp">
            <thead><tr><th></th>${COMPARE.cols.map((c, i) => `<th class="${i === 0 ? 'us' : ''}">${esc(c)}</th>`).join('')}</tr></thead>
            <tbody>
              ${COMPARE.rows.map(([label, ...cells]) => `<tr><th scope="row">${esc(label)}</th>${cells.map(([v, t], i) => `<td class="${i === 0 ? 'us' : ''}">${mark(v)}<span>${esc(t)}</span></td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>`;
  };

  const packageCard = (p, k) => `
    <div class="price-card ${p.featured ? 'featured' : ''} reveal delay-${k % 3}">
      ${p.featured ? '<span class="ribbon">Most popular</span>' : ''}
      <span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${p.icon}"></i></span>
      <h3>${esc(p.name)}</h3>
      ${SHOW_PRICES
        ? `<div class="price"><small>Starting from</small><strong>${money(p.from)}</strong><span>/ ${p.unit}</span></div>`
        : `<div class="price"><small>${p.unit === 'month' ? 'Monthly engagement' : 'Project-based'}</small><strong class="quote">Custom quote</strong><span>in 48 hours</span></div>`}
      <p class="price-time"><i data-lucide="clock"></i> ${esc(p.time)}</p>
      <ul class="check-list">${p.points.map(t => `<li><i data-lucide="check"></i> ${esc(t)}</li>`).join('')}</ul>
      <a href="#/contact?service=${encodeURIComponent((svcBySlug(p.svc) || {}).name || p.name)}" class="btn ${p.featured ? 'btn-light' : 'btn-primary'} btn-block">Get Exact Quote</a>
    </div>`;

  const pricingTeaser = (alt = true) => `
    <section class="section ${alt ? 'section-alt' : ''}" id="pricing-teaser">
      <div class="container">
        ${SHOW_PRICES
          ? sectionHead('Transparent Pricing', 'Know the cost <span class="grad-text">before you start</span>', 'Clear starting prices, no hidden charges. Use our estimator for a quick range in under a minute.')
          : sectionHead('Packages', 'Flexible packages for <span class="grad-text">every stage</span>', 'From a single developer to a complete product team. Tell us what you need and get a detailed quote within 48 hours, free.')}
        <div class="price-grid">${PRICING.packages.filter(p => ['MVP / Web App', 'Application Support', 'Dedicated Developer'].includes(p.name)).map(packageCard).join('')}</div>
        <div class="center mt-lg hero-ctas center-flex">
          <a href="#/pricing" class="btn btn-primary">${SHOW_PRICES ? 'See All Pricing' : 'See All Packages'} <i data-lucide="arrow-right"></i></a>
          <a href="#/pricing?estimate=1" class="btn btn-ghost"><i data-lucide="calculator"></i> Estimate My Project</a>
        </div>
      </div>
    </section>`;

  const articleCard = (a, k = 0) => `
    <a class="article-card reveal delay-${k % 3}" href="#/insights/${a.slug}">
      <span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${a.icon}"></i></span>
      <span class="article-meta">${esc(a.category)} · ${a.read} min read</span>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.excerpt)}</p>
      <span class="card-link">Read guide <i data-lucide="arrow-right"></i></span>
    </a>`;

  /* ==========================================================
     PAGES
     ========================================================== */

  /* ---------------- Home ---------------- */
  function home() {
    const featured = ['omnichannel-ecommerce-platform', 'hospital-management-system', 'policy-admin-claims-suite', 'university-management-system', 'manufacturing-erp-odoo', 'enterprise-application-support']
      .map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
    const solutions = [
      ['Hospital Management System', 'hospital-management-system', 'heart-pulse'], ['University / School ERP', 'university-management-system', 'graduation-cap'],
      ['E-commerce & Marketplace', 'omnichannel-ecommerce-platform', 'shopping-cart'], ['Insurance Policy & Claims', 'policy-admin-claims-suite', 'umbrella'],
      ['Loan Origination System', 'loan-origination-system', 'landmark'], ['Warehouse Management', 'warehouse-management-system', 'warehouse'],
      ['Real Estate CRM', 'real-estate-crm-portal', 'building-2'], ['HRMS & Payroll', 'hrms-payroll-saas', 'id-card'],
      ['Fleet & Transport (TMS)', 'fleet-tms', 'truck'], ['Telemedicine Platform', 'telemedicine-patient-portal', 'stethoscope'],
      ['Hotel PMS & Booking', 'hotel-pms-cloud', 'hotel'], ['OTT Streaming Platform', 'ott-streaming-platform', 'tv']
    ];
    return `
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"><span class="blob b1"></span><span class="blob b2"></span><span class="grid-bg"></span></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow"><span class="pulse"></span> Est. 2018 · Ahmedabad, India · Serving clients worldwide</span>
          <h1>Your trusted partner to <span class="grad-text">build, support &amp; scale</span> software.</h1>
          <p class="lead">Established in 2018, KHL Technologies is an Ahmedabad-based IT services company with <strong>17+ years</strong> of hands-on delivery experience in its team. We develop, support and modernize software in <strong>any technology</strong>, for <strong>any industry</strong>, with a senior team that owns outcomes.</p>
          <div class="hero-ctas">
            <a href="#/contact" class="btn btn-primary btn-lg">Start Your Project <i data-lucide="arrow-right"></i></a>
            <a href="#/hire-developers" class="btn btn-ghost btn-lg"><i data-lucide="user-plus"></i> Hire Developers</a>
          </div>
          <ul class="hero-points">
            <li><i data-lucide="check-circle-2"></i> Free consultation &amp; estimate</li>
            <li><i data-lucide="check-circle-2"></i> NDA from day one</li>
            <li><i data-lucide="check-circle-2"></i> Team ready in 2 weeks</li>
          </ul>
        </div>
        <div class="hero-visual reveal delay-1">
          <figure class="hero-img img-fallback"><img src="assets/img/photos/service-dedicated-teams.jpg" alt="Software team collaborating around laptops" ${imgOnError}></figure>
          <div class="float-card fc-1 glass"><span class="fc-icon grad-1"><i data-lucide="award"></i></span><div><strong>17+ Years</strong><small>Delivery experience</small></div></div>
          <div class="float-card fc-2 glass"><span class="fc-icon grad-2"><i data-lucide="activity"></i></span><div><strong>24×7</strong><small>Application support</small></div></div>
          <div class="float-card fc-3 code-card" aria-hidden="true">
            <div class="dots"><i></i><i></i><i></i></div>
            <code><span class="k">const</span> partner = <span class="s">'KHL'</span>;<br><span class="k">await</span> partner.<span class="f">build</span>(idea);<br><span class="k">await</span> partner.<span class="f">support</span>(<span class="s">'24x7'</span>);</code>
          </div>
        </div>
      </div>
      <div class="container">${techMarquee()}</div>
    </section>

    ${stats()}

    <section class="section-sm"><div class="container">${trustStrip()}</div></section>

    ${needsPicker()}
    ${startSteps(true)}

    <section class="section" id="about">
      <div class="container about-grid">
        <div class="about-media reveal">
          ${figure('assets/img/photos/service-crm-solutions.jpg', 'Team planning a project on a whiteboard', 'about-img-main', 'users')}
          ${figure('assets/img/photos/about-code.jpg', 'Developer writing code', 'about-img-sub', 'code-2')}
          <div class="exp-badge"><strong>17+</strong><span>Years of<br>engineering<br>excellence</span></div>
        </div>
        <div class="about-copy reveal delay-1">
          <span class="section-tag">About KHL Technologies</span>
          <h2>Established 2018. <span class="grad-text">A seasoned team.</span></h2>
          <p>KHL Technologies was founded in 2018 in Ahmedabad, India, by technologists with more than 17 years of experience designing, building and running business-critical systems for enterprises, start-ups and public institutions. We offer that depth of experience with the attention, speed and transparency of a focused partner.</p>
          <p>Whether you need a product built from scratch, a reliable team to keep your applications running, an ERP rollout or skilled engineers to extend your team, we plug in quickly and take ownership of results.</p>
          <ul class="check-list">
            <li><i data-lucide="check"></i> Senior engineers and architects on every engagement</li>
            <li><i data-lucide="check"></i> Technology-agnostic: we choose what fits your problem</li>
            <li><i data-lucide="check"></i> Transparent pricing, weekly demos, clear reporting</li>
            <li><i data-lucide="check"></i> From idea to 24×7 production support under one roof</li>
          </ul>
          <a href="#/about" class="btn btn-ghost">Read Our Story <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="services">
      <div class="container">
        ${sectionHead('What We Do', 'End-to-end IT services, <span class="grad-text">any technology</span>', `${SERVICES.length} services across the full software lifecycle, so you can work with one accountable partner.`)}
        <div class="tabs reveal" role="tablist" aria-label="Service categories">
          ${GROUPS.map((g, i) => `<button class="tab ${i === 0 ? 'active' : ''}" role="tab" aria-selected="${i === 0}" data-tab="${g.key}"><i data-lucide="${g.icon}"></i> ${g.name}</button>`).join('')}
        </div>
        ${GROUPS.map((g, i) => `
          <div class="tab-panel ${i === 0 ? 'active' : ''}" data-panel="${g.key}" role="tabpanel">
            <div class="services-grid">${SERVICES.filter(s => s.group === g.key).map((s, k) => serviceCard(s, k)).join('')}</div>
          </div>`).join('')}
        <div class="center mt-lg"><a href="#/services" class="btn btn-primary">Explore All Services <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>

    <section class="section section-dark" id="industries">
      <div class="container">
        ${sectionHead('Industries', 'Domain expertise that <span class="grad-text">speaks your language</span>', 'We work in any domain. These are the industries where our team has the deepest experience.', 'light')}
        <div class="industry-grid">
          ${INDUSTRIES.map(ind => `<a class="industry reveal" href="#/industries/${ind.slug}"><i data-lucide="${ind.icon}"></i><span>${esc(ind.name)}</span><i data-lucide="arrow-up-right" class="go"></i></a>`).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="solutions">
      <div class="container">
        ${sectionHead('Ready Solutions', 'Proven solutions, <span class="grad-text">customized for you</span>', 'Start faster with solutions our team has already built and delivered, tailored to your exact processes.')}
        <div class="solutions-grid">
          ${solutions.map(([t, id, i], k) => `<a class="solution reveal delay-${k % 4}" href="#/portfolio/${id}"><span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${i}"></i></span><span>${t}</span><i data-lucide="arrow-right" class="go"></i></a>`).join('')}
        </div>
      </div>
    </section>

    <section class="section section-alt" id="projects">
      <div class="container">
        ${sectionHead('Our Work', 'Projects our team has <span class="grad-text">delivered</span>', `A selection from ${PROJECTS.length}+ case studies across ${INDUSTRIES.length} industries.`)}
        <div class="projects-grid">${featured.map(projectCard).join('')}</div>
        <div class="center mt-lg"><a href="#/portfolio" class="btn btn-primary">View All ${PROJECTS.length} Projects <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>

    ${commitmentsSection(false)}
    ${comparisonTable(true)}
    ${pricingTeaser(false)}
    ${processSection()}
    ${whyUs()}
    ${testimonials()}

    <section class="section" id="tech">
      <div class="container">
        ${sectionHead('Technologies', 'We speak <span class="grad-text">every technology</span>', 'Modern, enterprise and legacy platforms, with deep expertise across the stack.')}
        <div class="tech-grid">
          ${TECH.slice(0, 8).map((c, k) => `<div class="tech-card reveal delay-${k % 4}"><h3><i data-lucide="${c.icon}"></i> ${c.name}</h3><div class="chips">${c.items.slice(0, 6).map(t => `<span>${esc(t)}</span>`).join('')}</div></div>`).join('')}
        </div>
        <div class="center mt-lg"><a href="#/technologies" class="btn btn-ghost">See Full Tech Stack <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>

    <section class="section section-alt" id="insights">
      <div class="container">
        ${sectionHead('Insights', 'Guides to help you <span class="grad-text">decide with confidence</span>', 'Straight answers to the questions clients ask us most.')}
        <div class="article-grid">${ARTICLES.slice(0, 3).map(articleCard).join('')}</div>
        <div class="center mt-lg"><a href="#/insights" class="btn btn-ghost">All Guides <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container faq-grid">
        <div class="reveal">
          <span class="section-tag">FAQ</span>
          <h2>Frequently asked <span class="grad-text">questions</span></h2>
          <p class="muted">Can't find what you're looking for? <a href="#/contact">Get in touch</a> and we'll answer within one business day.</p>
          <a href="#/contact" class="btn btn-primary mt">Ask a Question <i data-lucide="message-circle"></i></a>
        </div>
        <div class="reveal delay-1">${faqList(FAQS.slice(0, 6))}</div>
      </div>
    </section>

    ${ctaBand()}`;
  }

  /* ---------------- Services list ---------------- */
  function servicesPage() {
    return `
    ${pageHero({ tag: 'Our Services', title: 'IT services for every stage of your <span class="grad-text">software journey</span>', text: 'Build new products, keep critical applications running, modernize legacy systems, adopt cloud, data and AI, or extend your team with skilled engineers, all with one accountable partner.', crumbs: [['Services']], actions: `<a href="#/contact" class="btn btn-primary btn-lg">Get a Free Consultation <i data-lucide="arrow-right"></i></a>` })}
    <section class="section-sm"><div class="container">
      <div class="jump-links reveal">${GROUPS.map(g => `<button data-scroll="grp-${g.key}"><i data-lucide="${g.icon}"></i> ${g.name}</button>`).join('')}</div>
    </div></section>
    ${GROUPS.map((g, i) => `
      <section class="section ${i % 2 ? 'section-alt' : ''}" id="grp-${g.key}">
        <div class="container">
          <div class="group-head reveal"><span class="svc-icon grad-${(i % 4) + 1}"><i data-lucide="${g.icon}"></i></span><div><h2>${g.name}</h2><p>${g.desc}</p></div></div>
          <div class="services-grid">${SERVICES.filter(s => s.group === g.key).map(serviceCard).join('')}</div>
        </div>
      </section>`).join('')}
    ${engagementModels()}
    ${ctaBand('Not sure which service you need?', 'Share your challenge and our experts will recommend the right approach, free of charge.')}`;
  }

  /* ---------------- Service detail ---------------- */
  function serviceDetail(slug) {
    const s = svcBySlug(slug);
    if (!s) return notFound();
    const group = GROUPS.find(g => g.key === s.group);
    const related = PROJECTS.filter(p => p.services.includes(s.slug)).slice(0, 3);
    const siblings = SERVICES.filter(x => x.group === s.group && x.slug !== s.slug);
    return `
    ${pageHero({
      tag: group.name, title: esc(s.name), text: esc(s.short), crumbs: [['Services', '#/services'], [s.name]],
      actions: `<a href="#/contact?service=${encodeURIComponent(s.name)}" class="btn btn-primary btn-lg">Get a Free Quote <i data-lucide="arrow-right"></i></a><a href="#/portfolio?service=${s.slug}" class="btn btn-ghost btn-lg">See Related Work</a>`,
      aside: figure(s.image, s.name, 'page-hero-img', s.icon)
    })}

    <section class="section">
      <div class="container detail-grid">
        <div>
          <div class="reveal">
            <span class="section-tag">Overview</span>
            <h2>${esc(s.name)} that <span class="grad-text">delivers results</span></h2>
            <p class="lead-sm">${esc(s.intro)}</p>
          </div>

          <h3 class="sub-h reveal">What we offer</h3>
          <div class="offer-grid">
            ${s.offerings.map(([t, d], k) => `<div class="offer reveal delay-${k % 2}"><i data-lucide="check-circle-2"></i><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
          </div>

          <div class="two-col">
            <div class="panel reveal">
              <h3><i data-lucide="trending-up"></i> Business benefits</h3>
              <ul class="check-list">${s.benefits.map(b => `<li><i data-lucide="check"></i> ${esc(b)}</li>`).join('')}</ul>
            </div>
            <div class="panel reveal delay-1">
              <h3><i data-lucide="layers"></i> Technologies we use</h3>
              <div class="chips">${s.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
            </div>
          </div>
        </div>

        <aside class="sidebar">
          <div class="side-card side-cta">
            <h3>Start your ${esc(s.name.split(' ')[0])} project</h3>
            <p>Get a free consultation and a detailed estimate within 48 hours.</p>
            <a href="#/contact?service=${encodeURIComponent(s.name)}" class="btn btn-light btn-block">Get a Free Quote</a>
            ${C.phone ? `<a href="tel:${C.phoneHref}" class="side-phone"><i data-lucide="phone"></i> ${esc(C.phone)}</a>` : ''}
          </div>
          <div class="side-card">
            <h4>${group.name}</h4>
            <ul class="side-links">
              ${siblings.map(x => `<li><a href="#/services/${x.slug}"><i data-lucide="${x.icon}"></i> ${esc(x.name)}</a></li>`).join('')}
              <li><a href="#/services"><i data-lucide="grid-2x2"></i> All services</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    ${processSection()}

    ${related.length ? `
    <section class="section">
      <div class="container">
        ${sectionHead('Case Studies', `Related <span class="grad-text">projects</span>`, '')}
        <div class="projects-grid">${related.map(projectCard).join('')}</div>
        <div class="center mt-lg"><a href="#/portfolio?service=${s.slug}" class="btn btn-ghost">View all related projects <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>` : ''}

    <section class="section section-alt">
      <div class="container faq-grid">
        <div class="reveal"><span class="section-tag">FAQ</span><h2>${esc(s.name)} <span class="grad-text">FAQs</span></h2><p class="muted">Have another question? <a href="#/contact">Ask our experts</a>.</p></div>
        <div class="reveal delay-1">${faqList(s.faqs.concat(FAQS.slice(4, 6)))}</div>
      </div>
    </section>

    ${ctaBand(`Let's talk about ${esc(s.name.toLowerCase())}`)}`;
  }

  /* ---------------- Industries list ---------------- */
  function industriesPage() {
    return `
    ${pageHero({ tag: 'Industries', title: 'Technology solutions for <span class="grad-text">every industry</span>', text: 'We work in any domain. Our team brings deep, hands-on experience in these industries, understanding your processes, regulations and customers from day one.', crumbs: [['Industries']] })}
    <section class="section">
      <div class="container industry-cards">
        ${INDUSTRIES.map((ind, k) => {
          const count = PROJECTS.filter(p => p.industry === ind.slug).length;
          return `
          <a class="ind-card reveal delay-${k % 3}" href="#/industries/${ind.slug}">
            ${figure(ind.image, ind.name, 'ind-thumb', ind.icon)}
            <div class="ind-body">
              <span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${ind.icon}"></i></span>
              <h3>${esc(ind.name)}</h3>
              <p>${esc(ind.short)}</p>
              <span class="card-link">${count} case stud${count === 1 ? 'y' : 'ies'} <i data-lucide="arrow-right"></i></span>
            </div>
          </a>`;
        }).join('')}
      </div>
    </section>
    ${ctaBand('Don\'t see your industry?', 'We work in any domain. Tell us about your business and we\'ll show you how we can help.')}`;
  }

  /* ---------------- Industry detail ---------------- */
  function industryDetail(slug) {
    const ind = indBySlug(slug);
    if (!ind) return notFound();
    const projects = PROJECTS.filter(p => p.industry === ind.slug);
    const svcSlugs = [...new Set(projects.flatMap(p => p.services))];
    const svcs = svcSlugs.map(svcBySlug).filter(Boolean).slice(0, 6);
    return `
    ${pageHero({
      tag: 'Industry', title: `${esc(ind.name)} <span class="grad-text">software solutions</span>`, text: esc(ind.short), crumbs: [['Industries', '#/industries'], [ind.name]],
      actions: `<a href="#/contact" class="btn btn-primary btn-lg">Discuss Your Project <i data-lucide="arrow-right"></i></a>`,
      aside: figure(ind.image, ind.name, 'page-hero-img', ind.icon)
    })}
    <section class="section">
      <div class="container">
        <div class="narrow reveal"><p class="lead-sm center">${esc(ind.intro)}</p></div>
        <div class="challenge-grid">
          <div class="panel reveal">
            <h3><i data-lucide="alert-triangle"></i> Challenges we solve</h3>
            <ul class="x-list">${ind.challenges.map(c => `<li><i data-lucide="circle-alert"></i> ${esc(c)}</li>`).join('')}</ul>
          </div>
          <div class="panel reveal delay-1">
            <h3><i data-lucide="shield-check"></i> Compliance &amp; standards</h3>
            <div class="chips">${ind.compliance.map(c => `<span>${esc(c)}</span>`).join('')}</div>
            <p class="muted mt">We follow domain regulations and security best practices from design to deployment.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container">
        ${sectionHead('Solutions', `What we build for <span class="grad-text">${esc(ind.name)}</span>`, '')}
        <div class="offer-grid three">
          ${ind.solutions.map(([t, d], k) => `<div class="offer card reveal delay-${k % 3}"><i data-lucide="check-circle-2"></i><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
        </div>
      </div>
    </section>
    ${projects.length ? `
    <section class="section">
      <div class="container">
        ${sectionHead('Case Studies', `${esc(ind.name)} <span class="grad-text">projects</span>`, '')}
        <div class="projects-grid">${projects.map(projectCard).join('')}</div>
      </div>
    </section>` : ''}
    ${svcs.length ? `
    <section class="section section-alt">
      <div class="container">
        ${sectionHead('Services', 'Relevant <span class="grad-text">services</span>', '')}
        <div class="services-grid">${svcs.map(serviceCard).join('')}</div>
      </div>
    </section>` : ''}
    ${ctaBand(`Building something for ${esc(ind.name.toLowerCase())}?`)}`;
  }

  /* ---------------- Portfolio ---------------- */
  function portfolioPage(params) {
    const initInd = params.get('industry') || 'all';
    const initSvc = params.get('service') || 'all';
    const usedInd = INDUSTRIES.filter(i => PROJECTS.some(p => p.industry === i.slug));
    const usedSvc = SERVICES.filter(s => PROJECTS.some(p => p.services.includes(s.slug)));
    return `
    ${pageHero({ tag: 'Portfolio', title: `${PROJECTS.length} projects our team <span class="grad-text">has delivered</span>`, text: 'Explore case studies across industries and technologies: the challenge, our solution and the measurable results.', crumbs: [['Portfolio']] })}
    <section class="section pt-0">
      <div class="container">
        <div class="portfolio-tools reveal">
          <div class="search-field"><i data-lucide="search"></i><input type="search" id="pfSearch" placeholder="Search projects, e.g. hospital, ERP, Flutter..." aria-label="Search projects"></div>
          <select id="pfService" aria-label="Filter by service">
            <option value="all">All services</option>
            ${usedSvc.map(s => `<option value="${s.slug}" ${s.slug === initSvc ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
          </select>
        </div>
        <div class="filters reveal" role="tablist" aria-label="Filter by industry">
          <button class="filter ${initInd === 'all' ? 'active' : ''}" data-ind="all">All <span>${PROJECTS.length}</span></button>
          ${usedInd.map(i => `<button class="filter ${initInd === i.slug ? 'active' : ''}" data-ind="${i.slug}"><i data-lucide="${i.icon}"></i> ${esc(i.name)} <span>${PROJECTS.filter(p => p.industry === i.slug).length}</span></button>`).join('')}
        </div>
        <p class="result-count" id="pfCount" aria-live="polite"></p>
        <div class="projects-grid" id="pfGrid"></div>
        <div class="empty" id="pfEmpty" hidden><i data-lucide="search-x"></i><h3>No projects match your filters</h3><p>Try a different keyword, or <a href="#/contact">tell us what you need</a>. We have probably built something similar.</p></div>
      </div>
    </section>
    ${ctaBand('Want results like these?', 'Let\'s discuss how we can deliver a similar solution, customized for your business.')}`;
  }

  function initPortfolio(params) {
    const grid = $('#pfGrid'); if (!grid) return;
    let ind = params.get('industry') || 'all';
    const search = $('#pfSearch'), svc = $('#pfService');
    const render = () => {
      const q = search.value.trim().toLowerCase();
      const list = PROJECTS.filter(p =>
        (ind === 'all' || p.industry === ind) &&
        (svc.value === 'all' || p.services.includes(svc.value)) &&
        (!q || [p.title, p.summary, p.client, p.tech.join(' '), (indBySlug(p.industry) || {}).name].join(' ').toLowerCase().includes(q)));
      grid.innerHTML = list.map(projectCard).join('');
      $('#pfEmpty').hidden = list.length > 0;
      $('#pfCount').textContent = `Showing ${list.length} of ${PROJECTS.length} projects`;
      icons();
    };
    $$('.filter[data-ind]').forEach(b => b.addEventListener('click', () => {
      ind = b.dataset.ind;
      $$('.filter[data-ind]').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    search.addEventListener('input', render);
    svc.addEventListener('change', render);
    render();
  }

  /* ---------------- Project detail ---------------- */
  function projectDetail(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return notFound();
    const ind = indBySlug(p.industry);
    const idx = PROJECTS.indexOf(p);
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length], next = PROJECTS[(idx + 1) % PROJECTS.length];
    const score = x => (x.industry === p.industry ? 2 : 0) + (x.services.some(s => p.services.includes(s)) ? 1 : 0);
    const related = PROJECTS.filter(x => x.id !== p.id && score(x) > 0).sort((a, b) => score(b) - score(a)).slice(0, 3);
    return `
    ${pageHero({
      tag: `<i data-lucide="${ind.icon}"></i> ${esc(ind.name)}`, title: esc(p.title), text: esc(p.summary), crumbs: [['Portfolio', '#/portfolio'], [p.title]],
      aside: figure(p.image, p.title, 'page-hero-img', ind.icon)
    })}
    <section class="section pt-0">
      <div class="container">
        <div class="meta-bar reveal">
          <div><small>Client</small><strong>${esc(p.client)}</strong></div>
          <div><small>Industry</small><strong><a href="#/industries/${ind.slug}">${esc(ind.name)}</a></strong></div>
          <div><small>Duration</small><strong>${esc(p.duration)}</strong></div>
          <div><small>Team</small><strong>${esc(p.team)}</strong></div>
          <div><small>Engagement</small><strong>${esc(p.model)}</strong></div>
        </div>
        <div class="results big reveal">${p.results.map(r => `<div><strong class="grad-text">${esc(r[0])}</strong><span>${esc(r[1])}</span></div>`).join('')}</div>
        <div class="detail-grid">
          <div>
            <div class="story reveal"><h2><i data-lucide="target"></i> The Challenge</h2><p>${esc(p.challenge)}</p></div>
            <div class="story reveal"><h2><i data-lucide="lightbulb"></i> Our Solution</h2><p>${esc(p.solution)}</p></div>
            <div class="story reveal"><h2><i data-lucide="list-checks"></i> Key Features</h2>
              <ul class="check-list">${p.features.map(f => `<li><i data-lucide="check"></i> ${esc(f)}</li>`).join('')}</ul></div>
          </div>
          <aside class="sidebar">
            <div class="side-card">
              <h4>Technology stack</h4>
              <div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
              <h4 class="mt">Services delivered</h4>
              <ul class="side-links">${p.services.map(svcBySlug).filter(Boolean).map(s => `<li><a href="#/services/${s.slug}"><i data-lucide="${s.icon}"></i> ${esc(s.name)}</a></li>`).join('')}</ul>
            </div>
            <div class="side-card side-cta">
              <h3>Need a similar solution?</h3>
              <p>We can customize this solution for your business and timeline.</p>
              <a href="#/contact?service=${encodeURIComponent((svcBySlug(p.services[0]) || {}).name || '')}" class="btn btn-light btn-block">Discuss a Similar Project</a>
            </div>
          </aside>
        </div>
        <div class="pager reveal">
          <a href="#/portfolio/${prev.id}"><i data-lucide="arrow-left"></i><span><small>Previous</small>${esc(prev.title)}</span></a>
          <a href="#/portfolio/${next.id}" class="right"><span><small>Next</small>${esc(next.title)}</span><i data-lucide="arrow-right"></i></a>
        </div>
        <p class="disclaimer">Client names are withheld for confidentiality under NDA.</p>
      </div>
    </section>
    ${related.length ? `
    <section class="section section-alt">
      <div class="container">
        ${sectionHead('More Work', 'Related <span class="grad-text">projects</span>', '')}
        <div class="projects-grid">${related.map(projectCard).join('')}</div>
      </div>
    </section>` : ''}
    ${ctaBand()}`;
  }

  /* ---------------- Hire developers ---------------- */
  function hirePage() {
    return `
    ${pageHero({
      tag: 'Hire Developers', title: 'Hire skilled developers &amp; <span class="grad-text">dedicated IT resources</span>',
      text: 'Service-based resources on hourly, monthly or long-term contracts. Pre-vetted engineers, profiles in 48 hours, working in your time zone with your tools and processes.',
      crumbs: [['Hire Developers']],
      actions: `<a href="#/contact?service=${encodeURIComponent('Staff Augmentation & Resources')}" class="btn btn-primary btn-lg">Request Profiles <i data-lucide="arrow-right"></i></a><a href="#/services/dedicated-teams" class="btn btn-ghost btn-lg">Dedicated Teams</a>`,
      aside: `<div class="hire-stats">
        ${[['clock', '48 hrs', 'Profiles shared'], ['user-check', '2 weeks', 'Onboarding time'], ['refresh-cw', 'Free', 'Resource replacement'], ['globe', 'Your', 'Time zone & tools']]
          .map(([i, a, b], k) => `<div class="hs grad-${k + 1}"><i data-lucide="${i}"></i><strong>${a}</strong><span>${b}</span></div>`).join('')}
      </div>`
    })}
    <section class="section">
      <div class="container">
        ${sectionHead('Talent Pool', 'Roles you can <span class="grad-text">hire from us</span>', 'Developers, testers, consultants and managers with 3–15+ years of experience.')}
        <div class="roles-grid">
          ${ROLES.map(([r, i], k) => `<a class="role reveal delay-${k % 4}" href="#/contact?service=${encodeURIComponent('Staff Augmentation & Resources')}"><i data-lucide="${i}"></i><span>${r}</span></a>`).join('')}
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container">
        ${sectionHead('Hiring Models', 'Flexible ways to <span class="grad-text">hire</span>', '')}
        <div class="models-grid">
          <div class="model-card reveal"><i data-lucide="timer"></i><h3>Hourly</h3><p>Pay only for hours worked. Great for small tasks, support and short-term needs.</p><ul class="mini-list"><li>Minimum 40 hours</li><li>Weekly timesheets</li><li>Start in days</li></ul></div>
          <div class="model-card featured reveal delay-1"><span class="ribbon">Most popular</span><i data-lucide="calendar-check"></i><h3>Full-time Monthly</h3><p>Dedicated resource working 8 hours a day, 5 days a week, exclusively on your project.</p><ul class="mini-list"><li>160 hours / month</li><li>Direct communication</li><li>Free replacement</li></ul></div>
          <div class="model-card reveal delay-2"><i data-lucide="users-round"></i><h3>Dedicated Team</h3><p>A managed, cross-functional team with a PM, scaling up or down as you need.</p><ul class="mini-list"><li>Developers, QA, DevOps, PM</li><li>Sprint-based delivery</li><li>Long-term stability</li></ul></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHead('How It Works', 'Hire in <span class="grad-text">4 simple steps</span>', '')}
        <ol class="steps4">
          ${[['clipboard-list', 'Share requirements', 'Tell us the skills, experience, duration and budget.'], ['users', 'Review profiles', 'Receive matching CVs within 48 hours.'], ['video', 'Interview & select', 'Interview and test candidates your way.'], ['rocket', 'Onboard & start', 'Resources start within 1–2 weeks with an NDA in place.']]
            .map(([i, t, d], k) => `<li class="reveal delay-${k}"><span class="num">${k + 1}</span><i data-lucide="${i}"></i><h3>${t}</h3><p>${d}</p></li>`).join('')}
        </ol>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container faq-grid">
        <div class="reveal"><span class="section-tag">FAQ</span><h2>Hiring <span class="grad-text">FAQs</span></h2></div>
        <div class="reveal delay-1">${faqList(svcBySlug('staff-augmentation').faqs.concat(svcBySlug('dedicated-teams').faqs, [FAQS[5], FAQS[6]]))}</div>
      </div>
    </section>
    ${ctaBand('Need developers fast?', 'Share your requirement today and receive matching profiles within 48 hours.')}`;
  }

  /* ---------------- Technologies ---------------- */
  function techPage() {
    return `
    ${pageHero({ tag: 'Technologies', title: 'Our <span class="grad-text">technology stack</span>', text: 'From modern cloud-native frameworks to enterprise platforms and legacy systems, our engineers work across the full technology landscape.', crumbs: [['Technologies']] })}
    <section class="section pt-0">
      <div class="container tech-grid full">
        ${TECH.map((c, k) => `<div class="tech-card reveal delay-${k % 3}"><h3><i data-lucide="${c.icon}"></i> ${c.name}</h3><div class="chips">${c.items.map(t => `<span>${esc(t)}</span>`).join('')}</div></div>`).join('')}
      </div>
    </section>
    ${ctaBand('Working with a technology not listed here?', 'Chances are we\'ve worked with it. Tell us about your stack.')}`;
  }

  /* ---------------- About ---------------- */
  function aboutPage() {
    return `
    ${pageHero({ tag: 'About Us', title: 'Established 2018, built on <span class="grad-text">17+ years of experience</span>', text: 'We are engineers, architects and consultants who have spent our careers delivering and supporting business-critical software. KHL Technologies brings that experience to you as a focused, accountable partner.', crumbs: [['About Us']], aside: figure('assets/img/photos/service-staff-augmentation.jpg', 'KHL Technologies team meeting', 'page-hero-img', 'users') })}
    ${stats()}
    <section class="section">
      <div class="container about-grid">
        <div class="reveal">
          <span class="section-tag">Our Story</span>
          <h2>Why we started <span class="grad-text">KHL Technologies</span></h2>
          <p>Over 17+ years, our team has built e-commerce platforms, hospital systems, insurance suites, university ERPs and enterprise applications, and supported them around the clock. Along the way we saw the same problems again and again: vendors who over-promise, junior teams on critical projects and poor communication once the contract is signed.</p>
          <p>We founded KHL Technologies in 2018 to do it differently: senior people on every project, honest estimates, transparent reporting and long-term ownership of the systems we build and support.</p>
        </div>
        <div class="mv-grid col reveal delay-1">
          <div class="mv-card"><i data-lucide="target"></i><h3>Our Mission</h3><p>Deliver dependable, well-engineered technology that creates measurable value for our clients.</p></div>
          <div class="mv-card"><i data-lucide="eye"></i><h3>Our Vision</h3><p>To be the most trusted long-term technology partner for growing businesses worldwide.</p></div>
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container">
        ${sectionHead('Our Values', 'What we <span class="grad-text">stand for</span>', '')}
        <div class="values-grid">
          ${[['gem', 'Quality First', 'Clean code, thorough testing and documentation are non-negotiable.'], ['handshake', 'Integrity', 'Honest estimates, transparent billing and no hidden surprises.'], ['users', 'Client Partnership', 'We succeed only when your business succeeds.'], ['sparkles', 'Continuous Learning', 'We keep up with technology so you don\'t have to.'], ['shield-check', 'Security & Privacy', 'Your data and IP are protected at every step.'], ['zap', 'Ownership', 'We take responsibility for outcomes, not just tasks.']]
            .map(([i, t, d], k) => `<div class="value reveal delay-${k % 3}"><span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${i}"></i></span><h3>${t}</h3><p>${d}</p></div>`).join('')}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHead('Quality & Security', 'How we <span class="grad-text">protect your business</span>', 'Proven practices applied on every engagement.')}
        <div class="offer-grid three">
          ${[['Secure Development', 'OWASP-based secure coding, code reviews and vulnerability scanning.'], ['Data Protection', 'NDA, role-based access, encrypted data and GDPR/HIPAA-aware handling.'], ['Quality Assurance', 'Automated tests, CI/CD quality gates and independent QA.'], ['ITIL-based Support', 'Structured incident, problem and change management.'], ['Agile Delivery', 'Scrum with sprint demos, burn-down charts and retrospectives.'], ['Business Continuity', 'Documentation, backups and backup resources for every role.']]
            .map(([t, d], k) => `<div class="offer card reveal delay-${k % 3}"><i data-lucide="check-circle-2"></i><div><h4>${t}</h4><p>${d}</p></div></div>`).join('')}
        </div>
      </div>
    </section>
    <section class="section section-dark">
      <div class="container">
        ${sectionHead('Global Delivery', 'Serving clients <span class="grad-text">worldwide</span>', 'Flexible working hours that overlap with your business day.', 'light')}
        <div class="regions">
          ${['North America', 'United Kingdom', 'Europe', 'Middle East', 'Africa', 'India', 'Singapore & APAC', 'Australia'].map(r => `<span class="reveal"><i data-lucide="map-pin"></i> ${r}</span>`).join('')}
        </div>
      </div>
    </section>
    ${processSection(false)}
    ${ctaBand('Let\'s build something great together')}`;
  }

  /* ---------------- Careers ---------------- */
  function careersPage() {
    return `
    ${pageHero({ tag: 'Careers', title: 'Grow your career with <span class="grad-text">KHL Technologies</span>', text: 'Join a team of experienced engineers working on meaningful projects for clients around the world. Your work will directly shape our products, clients and company.', crumbs: [['Careers']], actions: `<a href="#" class="btn btn-primary btn-lg" data-scroll="openings">View Open Positions <i data-lucide="arrow-down"></i></a>` })}
    <section class="section pt-0">
      <div class="container">
        <div class="values-grid">
          ${[['rocket', 'Real impact', 'Your ideas and work directly shape client outcomes.'], ['graduation-cap', 'Learning budget', 'Certifications, courses and conferences.'], ['home', 'Hybrid & remote', 'Flexible working that fits your life.'], ['users', 'Senior mentors', 'Learn from engineers with 17+ years of experience.'], ['globe', 'Global projects', 'Work with clients across industries and countries.'], ['heart-handshake', 'Great culture', 'Respect, transparency and work-life balance.']]
            .map(([i, t, d], k) => `<div class="value reveal delay-${k % 3}"><span class="svc-icon grad-${(k % 4) + 1}"><i data-lucide="${i}"></i></span><h3>${t}</h3><p>${d}</p></div>`).join('')}
        </div>
      </div>
    </section>
    <section class="section section-alt" id="openings">
      <div class="container">
        ${sectionHead('Open Positions', `Current <span class="grad-text">openings</span>`, '')}
        <div class="jobs">
          ${JOBS.map(j => `
            <div class="job reveal">
              <div><h3>${esc(j.title)}</h3><div class="job-meta"><span><i data-lucide="briefcase"></i> ${esc(j.exp)}</span><span><i data-lucide="clock"></i> ${esc(j.type)}</span><span><i data-lucide="map-pin"></i> ${esc(j.loc)}</span></div></div>
              <a class="btn btn-primary btn-sm" href="mailto:${C.careersEmail}?subject=${encodeURIComponent('Application: ' + j.title)}">Apply Now <i data-lucide="arrow-right"></i></a>
            </div>`).join('')}
        </div>
        <p class="center muted mt-lg">Don't see a matching role? Send your CV to <a href="mailto:${C.careersEmail}">${C.careersEmail}</a> and we'll reach out when there's a fit.</p>
      </div>
    </section>`;
  }

  /* ---------------- Contact ---------------- */
  function contactPage(params) {
    const preset = params.get('service') || '';
    return `
    ${pageHero({ tag: 'Contact Us', title: 'Let\'s talk about <span class="grad-text">your project</span>', text: 'Tell us what you need: a new product, support for existing systems, ERP, cloud or dedicated developers. Our experts will get back to you within one business day.', crumbs: [['Contact']] })}
    <section class="section pt-0">
      <div class="container contact-grid">
        <div class="reveal">
          ${contactList()}
          <div class="next-steps">
            <h3>What happens next?</h3>
            <ol>
              <li><span>1</span><div><strong>We reply within 24 hours</strong><p>A senior consultant reviews your requirement.</p></div></li>
              <li><span>2</span><div><strong>Free consultation call</strong><p>We understand your goals and sign an NDA if needed.</p></div></li>
              <li><span>3</span><div><strong>Proposal &amp; estimate</strong><p>Scope, timeline, team and cost, clearly explained.</p></div></li>
            </ol>
          </div>
        </div>
        <div class="reveal delay-1">${contactForm(preset, params.get('message') || '')}</div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container faq-grid">
        <div class="reveal"><span class="section-tag">FAQ</span><h2>Common <span class="grad-text">questions</span></h2></div>
        <div class="reveal delay-1">${faqList(FAQS)}</div>
      </div>
    </section>`;
  }

  /* ---------------- Legal ---------------- */
  function legalPage(kind) {
    const privacy = kind === 'privacy';
    const sections = privacy ? [
      ['Information we collect', 'We collect information you provide through our contact forms, email or phone (such as your name, email, phone number, company and project details) and basic, anonymized website usage data.'],
      ['How we use information', 'We use your information only to respond to inquiries, provide proposals and services, and, if you subscribe, send occasional company updates. We never sell your personal data.'],
      ['Data sharing', 'We share data only with trusted service providers needed to operate our business (for example email and form-delivery services), under confidentiality obligations, or where required by law.'],
      ['Data security', 'We apply appropriate technical and organizational measures to protect personal data against unauthorised access, loss or misuse.'],
      ['Data retention', 'We keep personal data only as long as necessary for the purposes described or as required by law.'],
      ['Your rights', `You may request access to, correction of or deletion of your personal data at any time by emailing ${C.email}.`],
      ['Cookies', 'This website stores only your theme preference in your browser. We do not use advertising cookies.'],
      ['Contact', `For privacy questions, contact us at ${C.email}.`]
    ] : [
      ['Use of this website', 'By using this website you agree to these terms. The content is provided for general information about KHL Technologies and its services.'],
      ['Services', 'All services are provided under a separate written agreement or statement of work, which takes precedence over information on this website.'],
      ['Intellectual property', 'The KHL Technologies name, logo and website content are our property and may not be used without permission. Client project IP is governed by each client agreement.'],
      ['Case studies', 'Case studies describe work delivered by members of our team. Client names are withheld under confidentiality agreements.'],
      ['Limitation of liability', 'Website content is provided "as is" without warranties. We are not liable for any loss arising from reliance on website information.'],
      ['Third-party links', 'This website may link to third-party sites. We are not responsible for their content or practices.'],
      ['Changes', 'We may update these terms from time to time. Continued use of the website means you accept the updated terms.'],
      ['Contact', `Questions about these terms can be sent to ${C.email}.`]
    ];
    return `
    ${pageHero({ tag: 'Legal', title: privacy ? 'Privacy Policy' : 'Terms of Service', text: `Last updated: ${new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}`, crumbs: [[privacy ? 'Privacy Policy' : 'Terms of Service']] })}
    <section class="section pt-0"><div class="container legal">
      ${sections.map(([h, t], i) => `<h2>${i + 1}. ${h}</h2><p>${esc(t)}</p>`).join('')}
    </div></section>`;
  }

  /* ---------------- Pricing ---------------- */
  function pricingPage() {
    const E = PRICING.estimator;
    return `
    ${pageHero({ tag: 'Pricing', title: SHOW_PRICES ? 'Simple, <span class="grad-text">transparent pricing</span>' : 'Packages &amp; <span class="grad-text">engagement options</span>', text: SHOW_PRICES ? 'Clear starting prices for common projects, honest hourly and monthly rates, and an instant estimator. No hidden costs, and a free detailed quote within 48 hours.' : 'Choose a package or engagement model, estimate your timeline in 60 seconds, and receive a detailed, no-obligation quote within 48 hours.', crumbs: [['Pricing']],
      actions: `<a href="#" data-scroll="estimator" class="btn btn-primary btn-lg"><i data-lucide="calculator"></i> Estimate My Project</a><a href="#/contact" class="btn btn-ghost btn-lg">Get Exact Quote</a>` })}
    <section class="section pt-0">
      <div class="container">
        <div class="price-grid">${PRICING.packages.map(packageCard).join('')}</div>
        <p class="price-note"><i data-lucide="info"></i> ${esc(PRICING.currencyNote)}</p>
      </div>
    </section>

    <section class="section section-alt" id="estimator">
      <div class="container">
        ${sectionHead('Cost Estimator', 'Estimate your project <span class="grad-text">in 60 seconds</span>', SHOW_PRICES ? 'Answer three quick questions to get an approximate budget and timeline. We\'ll confirm the exact figure after a free call.' : 'Answer three quick questions to get an estimated timeline and team size. Send it to us for an exact quote within 48 hours.')}
        <div class="estimator reveal">
          <form class="est-form" id="estForm">
            <fieldset>
              <legend><span>1</span> What do you want to build?</legend>
              <div class="opt-grid">${E.types.map(([k, l], i) => `<label class="opt"><input type="radio" name="type" value="${k}" ${i === 1 ? 'checked' : ''}><span>${esc(l)}</span></label>`).join('')}</div>
            </fieldset>
            <fieldset>
              <legend><span>2</span> How complex is it?</legend>
              <div class="opt-grid three">${E.complexity.map(([k, l], i) => `<label class="opt"><input type="radio" name="complexity" value="${k}" ${i === 1 ? 'checked' : ''}><span>${esc(l)}<small>${['A few screens, simple logic', 'Typical business app', 'Many roles, complex workflows'][i]}</small></span></label>`).join('')}</div>
            </fieldset>
            <fieldset>
              <legend><span>3</span> Which features do you need?</legend>
              <div class="opt-grid">${E.extras.map(([k, l]) => `<label class="opt check"><input type="checkbox" name="extras" value="${k}"><span>${esc(l)}</span></label>`).join('')}</div>
            </fieldset>
          </form>
          <aside class="est-result" aria-live="polite">
            ${SHOW_PRICES ? '<small>Estimated budget</small><strong id="estCost">-</strong>' : '<small>Suggested team</small><strong id="estTeam">-</strong>'}
            <small>Estimated timeline</small>
            <strong id="estTime" class="t">-</strong>
            <p>This is a ballpark range for planning. Your final quote depends on detailed scope.</p>
            <a href="#/contact" id="estSend" class="btn btn-light btn-block">Get My Exact Quote <i data-lucide="arrow-right"></i></a>
          </aside>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead('Hire Resources', SHOW_PRICES ? 'Hourly &amp; monthly <span class="grad-text">resource rates</span>' : 'Resources you can <span class="grad-text">hire from us</span>', SHOW_PRICES ? 'For staff augmentation and dedicated teams. Full-time monthly = 160 hours.' : 'For staff augmentation and dedicated teams. Hourly, part-time and full-time (160 hours / month) options.')}
        <div class="rate-wrap reveal" tabindex="0">
          <table class="rates">
            ${SHOW_PRICES
              ? `<thead><tr><th>Role</th><th>Experience</th><th>Hourly (from)</th><th>Full-time / month (from)</th></tr></thead>
            <tbody>${PRICING.rates.map(([r, e, h, m]) => `<tr><th scope="row">${esc(r)}</th><td>${esc(e)}</td><td><strong>${money(h)}</strong>/hr</td><td><strong>${money(m)}</strong>/mo</td></tr>`).join('')}</tbody>`
              : `<thead><tr><th>Role</th><th>Experience</th><th>Engagement options</th><th>Availability</th></tr></thead>
            <tbody>${PRICING.rates.map(([r, e]) => `<tr><th scope="row">${esc(r)}</th><td>${esc(e)}</td><td>Hourly · Monthly · Dedicated</td><td><a href="#/contact?service=${encodeURIComponent('Staff Augmentation & Resources')}">Profiles in 48 hrs</a></td></tr>`).join('')}</tbody>`}
          </table>
        </div>
        <div class="center mt-lg"><a href="#/hire-developers" class="btn btn-primary">Hire Developers <i data-lucide="arrow-right"></i></a></div>
      </div>
    </section>

    ${commitmentsSection(true)}

    <section class="section">
      <div class="container faq-grid">
        <div class="reveal"><span class="section-tag">FAQ</span><h2>Pricing <span class="grad-text">questions</span></h2><p class="muted">Want to understand costs in depth? Read our guide: <a href="#/insights/how-much-does-custom-software-cost">How much does custom software cost?</a></p></div>
        <div class="reveal delay-1">${faqList([
          SHOW_PRICES ? ['Are these prices fixed?', 'They are starting prices for typical projects. After a free consultation we send a detailed, itemized quote. For fixed-price projects the quoted price is locked.'] : ['How is my quote calculated?', 'After a free consultation we break your requirement into features and effort, then send a detailed, itemized quote within 48 hours. For fixed-price projects the quoted price is locked.'],
          ['How do payments work?', 'Fixed-price projects are paid in milestones (commonly 30% / 40% / 30%). Dedicated resources and support are billed monthly in advance or in arrears, as agreed.'],
          ['Which payment methods do you accept?', GLOBAL.payments.join(', ') + '. We invoice in ' + GLOBAL.currencies.join(', ') + '.'],
          ['Are there any hidden costs?', 'No. Third-party costs such as cloud hosting, app store fees or software licenses are listed separately in the quote and paid directly by you or passed through at cost.'],
          ['Do you offer discounts for long-term engagements?', 'Yes. Engagements of 6 months or longer and teams of 3 or more resources qualify for better rates.']
        ])}</div>
      </div>
    </section>
    ${ctaBand('Get an exact quote in 48 hours', 'Share your requirement and receive a detailed, no-obligation proposal with scope, timeline and cost.')}`;
  }

  function initEstimator(params) {
    const form = $('#estForm'); if (!form) return;
    const E = PRICING.estimator;
    const calc = () => {
      const d = new FormData(form);
      const type = E.types.find(t => t[0] === d.get('type'));
      const cx = E.complexity.find(c => c[0] === d.get('complexity'));
      const extras = d.getAll('extras').map(k => E.extras.find(x => x[0] === k));
      const cost = (type[2] + extras.reduce((n, x) => n + x[2], 0)) * cx[2];
      const weeks = Math.max(2, Math.round((type[3] + extras.reduce((n, x) => n + x[3], 0) * 0.5) * (0.8 + cx[2] * 0.2)));
      const lo = Math.round(cost * 0.85 / 500) * 500, hi = Math.round(cost * 1.3 / 500) * 500;
      const team = Math.min(9, { website: 2, webapp: 4, mobile: 4, ecommerce: 4, erp: 3, enterprise: 6 }[type[0]] + (cx[0] === 'advanced' ? 2 : cx[0] === 'basic' ? -1 : 0) + (extras.length > 3 ? 1 : 0));
      if (SHOW_PRICES) $('#estCost').textContent = `${money(lo)} – ${money(hi)}`;
      else $('#estTeam').textContent = `${team} specialists`;
      $('#estTime').textContent = `${weeks} – ${Math.round(weeks * 1.3)} weeks`;
      const msg = `Project estimate request\nType: ${type[1]}\nComplexity: ${cx[1]}\nFeatures: ${extras.map(x => x[1]).join(', ') || 'None selected'}${SHOW_PRICES ? `\nEstimated budget: ${money(lo)} – ${money(hi)}` : `\nSuggested team: ${team} specialists`}\nEstimated timeline: ${weeks} – ${Math.round(weeks * 1.3)} weeks\n\nMy project details: `;
      $('#estSend').href = `#/contact?message=${encodeURIComponent(msg)}`;
    };
    form.addEventListener('change', calc);
    calc();
    if (params.get('estimate')) setTimeout(() => $('#estimator').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }), 150);
  }

  /* ---------------- Working with us ---------------- */
  function workingPage() {
    return `
    ${pageHero({ tag: 'Working With Us', title: 'Working with KHL from <span class="grad-text">anywhere in the world</span>', text: 'Everything you need to know before you start: how we communicate, overlap with your time zone, contracts, payments and exactly what you receive at the end.', crumbs: [['Working With Us']],
      actions: `<a href="#/contact" class="btn btn-primary btn-lg">Start a Conversation <i data-lucide="arrow-right"></i></a><a href="#/pricing" class="btn btn-ghost btn-lg">View Pricing</a>` })}
    ${startSteps(false)}

    <section class="section section-alt">
      <div class="container">
        ${sectionHead('Communication', 'You always know <span class="grad-text">where things stand</span>', 'A predictable rhythm of updates, demos and reviews, plus a dedicated account manager as your single point of contact.')}
        <div class="rhythm">${GLOBAL.rhythm.map(([w, t], k) => `<div class="reveal delay-${k}"><strong>${w}</strong><span>${t}</span></div>`).join('')}</div>
        <h3 class="center sub-h">Tools we use (or yours, if you prefer)</h3>
        <div class="chips center-flex reveal">${GLOBAL.tools.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead('Time Zones', 'Working hours that <span class="grad-text">overlap with yours</span>', 'Our team is based in Ahmedabad, India (IST, UTC+5:30), with flexible shifts for international clients.')}
        <div class="tz-grid">${GLOBAL.timezones.map(([r, z, o], k) => `<div class="tz reveal delay-${k % 3}"><i data-lucide="globe"></i><div><h3>${r}</h3><small>${z}</small><p>${o}</p></div></div>`).join('')}</div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container two-col">
        <div class="panel reveal">
          <h3><i data-lucide="file-signature"></i> Contracts &amp; legal</h3>
          <ul class="def-list">${GLOBAL.contracts.map(([k, v]) => `<li><strong>${k}</strong><span>${v}</span></li>`).join('')}</ul>
        </div>
        <div class="panel reveal delay-1">
          <h3><i data-lucide="wallet"></i> Payments &amp; currencies</h3>
          <ul class="check-list">${GLOBAL.payments.map(p => `<li><i data-lucide="check"></i> ${p}</li>`).join('')}</ul>
          <div class="chips">${GLOBAL.currencies.map(c => `<span>${c}</span>`).join('')}</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-col">
        <div class="panel reveal">
          <h3><i data-lucide="hand-helping"></i> What we need from you</h3>
          <ul class="check-list">${GLOBAL.youProvide.map(p => `<li><i data-lucide="check"></i> ${p}</li>`).join('')}</ul>
          <p class="muted">Don't have documents or a clear scope yet? That's normal. Our discovery phase turns your idea into a clear plan.</p>
        </div>
        <div class="panel reveal delay-1">
          <h3><i data-lucide="package-check"></i> What you receive</h3>
          <ul class="check-list">${GLOBAL.deliverables.map(p => `<li><i data-lucide="check"></i> ${p}</li>`).join('')}</ul>
        </div>
      </div>
    </section>

    ${commitmentsSection(true)}
    ${comparisonTable(false)}
    ${ctaBand('Ready to get started?', 'Tell us about your project today. Most clients kick off within two weeks.')}`;
  }

  /* ---------------- Insights ---------------- */
  function insightsPage() {
    return `
    ${pageHero({ tag: 'Insights', title: 'Guides for <span class="grad-text">smarter technology decisions</span>', text: 'Practical, no-jargon guides on software costs, outsourcing models, application support, ERP and hiring developers.', crumbs: [['Insights']] })}
    <section class="section pt-0"><div class="container"><div class="article-grid">${ARTICLES.map(articleCard).join('')}</div></div></section>
    ${ctaBand('Have a specific question?', 'Ask our experts directly. We\'re happy to advise, even if you\'re just exploring.')}`;
  }

  function articlePage(slug) {
    const a = ARTICLES.find(x => x.slug === slug);
    if (!a) return notFound();
    const more = ARTICLES.filter(x => x.slug !== slug).slice(0, 3);
    return `
    ${pageHero({ tag: `<i data-lucide="${a.icon}"></i> ${esc(a.category)} · ${a.read} min read`, title: esc(a.title), text: esc(a.excerpt), crumbs: [['Insights', '#/insights'], [a.category]] })}
    <section class="section pt-0">
      <div class="container detail-grid">
        <article class="article">
          ${a.sections.map(([h, paras, list]) => `
            <section class="reveal">
              <h2>${esc(h)}</h2>
              ${paras.map(p => `<p>${esc(p)}</p>`).join('')}
              ${list.length ? `<ul class="check-list">${list.map(li => `<li><i data-lucide="check"></i> ${esc(li)}</li>`).join('')}</ul>` : ''}
            </section>`).join('')}
        </article>
        <aside class="sidebar">
          <div class="side-card side-cta">
            <h3>Need expert advice?</h3>
            <p>Get a free consultation and an estimate for your project within 48 hours.</p>
            <a href="#/contact" class="btn btn-light btn-block">Talk to an Expert</a>
            <a href="#/pricing?estimate=1" class="side-phone"><i data-lucide="calculator"></i> Try the cost estimator</a>
          </div>
          <div class="side-card">
            <h4>More guides</h4>
            <ul class="side-links">${more.map(m => `<li><a href="#/insights/${m.slug}"><i data-lucide="${m.icon}"></i> ${esc(m.title)}</a></li>`).join('')}</ul>
          </div>
        </aside>
      </div>
    </section>
    ${ctaBand()}`;
  }

  function notFound() {
    return `
    <section class="page-hero nf">
      <div class="container center">
        <span class="nf-code grad-text">404</span>
        <h1>Page not found</h1>
        <p class="lead">The page you're looking for doesn't exist or has moved.</p>
        <div class="hero-ctas center-flex"><a href="#/" class="btn btn-primary btn-lg">Back to Home</a><a href="#/contact" class="btn btn-ghost btn-lg">Contact Us</a></div>
      </div>
    </section>`;
  }

  /* ==========================================================
     ROUTER
     ========================================================== */
  const DEFAULT_TITLE = 'KHL Technologies | IT Services, Software Development, App Support, ERP & Dedicated Teams';
  const routes = [
    [/^\/?$/, () => ({ html: home(), nav: 'home', title: DEFAULT_TITLE })],
    [/^\/services$/, () => ({ html: servicesPage(), nav: 'services', title: 'IT Services' })],
    [/^\/services\/([\w-]+)$/, m => ({ html: serviceDetail(m[1]), nav: 'services', title: (svcBySlug(m[1]) || {}).name, desc: (svcBySlug(m[1]) || {}).short })],
    [/^\/industries$/, () => ({ html: industriesPage(), nav: 'industries', title: 'Industries We Serve' })],
    [/^\/industries\/([\w-]+)$/, m => ({ html: industryDetail(m[1]), nav: 'industries', title: ((indBySlug(m[1]) || {}).name || '') + ' Software Solutions', desc: (indBySlug(m[1]) || {}).short })],
    [/^\/portfolio$/, (m, q) => ({ html: portfolioPage(q), nav: 'portfolio', title: 'Portfolio & Case Studies', init: () => initPortfolio(q) })],
    [/^\/portfolio\/([\w-]+)$/, m => { const p = PROJECTS.find(x => x.id === m[1]) || {}; return { html: projectDetail(m[1]), nav: 'portfolio', title: p.title ? p.title + ' | Case Study' : null, desc: p.summary }; }],
    [/^\/hire-developers$/, () => ({ html: hirePage(), nav: 'hire-developers', title: 'Hire Dedicated Developers & IT Resources' })],
    [/^\/technologies$/, () => ({ html: techPage(), nav: 'company', title: 'Technologies' })],
    [/^\/about$/, () => ({ html: aboutPage(), nav: 'company', title: 'About Us' })],
    [/^\/careers$/, () => ({ html: careersPage(), nav: 'company', title: 'Careers' })],
    [/^\/contact$/, (m, q) => ({ html: contactPage(q), nav: 'contact', title: 'Contact Us | Get a Free Quote' })],
    [/^\/pricing$/, (m, q) => ({ html: pricingPage(), nav: 'pricing', title: 'Pricing & Packages', desc: 'Packages, engagement options and an instant project estimator, with a free detailed quote in 48 hours.', init: () => initEstimator(q) })],
    [/^\/working-with-us$/, () => ({ html: workingPage(), nav: 'company', title: 'Working With Us', desc: 'How we work with clients worldwide: communication, time zones, contracts, payments and deliverables.' })],
    [/^\/insights$/, () => ({ html: insightsPage(), nav: 'company', title: 'Insights & Guides', desc: 'Practical guides on software costs, outsourcing models, application support, ERP and hiring developers.' })],
    [/^\/insights\/([\w-]+)$/, m => { const x = ARTICLES.find(r => r.slug === m[1]) || {}; return { html: articlePage(m[1]), nav: 'company', title: x.title, desc: x.excerpt }; }],
    [/^\/privacy$/, () => ({ html: legalPage('privacy'), nav: '', title: 'Privacy Policy' })],
    [/^\/terms$/, () => ({ html: legalPage('terms'), nav: '', title: 'Terms of Service' })]
  ];

  const app = $('#app');
  const metaDesc = $('meta[name="description"]');
  const defaultDesc = metaDesc.content;

  function router() {
    const raw = location.hash.replace(/^#/, '') || '/';
    // Plain in-page anchors (e.g. "#app" from the skip link) are not routes
    if (!raw.startsWith('/')) return;
    const [path, qs] = raw.split('?');
    const params = new URLSearchParams(qs || '');
    let view = null;
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (m) { view = fn(m, params); break; }
    }
    if (!view || !view.html) view = { html: notFound(), nav: '', title: 'Page Not Found' };

    cleanups.forEach(fn => fn()); cleanups = [];
    app.innerHTML = view.html;
    document.title = view.title && view.title !== DEFAULT_TITLE ? `${view.title} | KHL Technologies` : DEFAULT_TITLE;
    metaDesc.content = view.desc || defaultDesc;
    $$('.nav [data-route]').forEach(l => l.classList.toggle('active', l.dataset.route === view.nav));
    closeMenus();
    window.scrollTo({ top: 0, behavior: 'instant' });

    icons();
    observeReveals();
    initCounters();
    initTabs();
    initSlider();
    bindForms(app);
    if (view.init) view.init();
  }

  /* ==========================================================
     BEHAVIOUR
     ========================================================== */

  /* ---- Header menus ---- */
  function buildMenus() {
    $('#megaServices').innerHTML = `
      <div class="mega-inner">
        ${GROUPS.map(g => `
          <div class="mega-col">
            <h5><i data-lucide="${g.icon}"></i> ${g.name}</h5>
            ${SERVICES.filter(s => s.group === g.key).map(s => `<a href="#/services/${s.slug}">${esc(s.name)}</a>`).join('')}
          </div>`).join('')}
        <div class="mega-promo">
          <strong>Not sure where to start?</strong>
          <p>Get a free consultation with a senior architect.</p>
          <a href="#/contact" class="btn btn-light btn-sm">Talk to an Expert</a>
          <a href="#/services" class="mega-all">View all services <i data-lucide="arrow-right"></i></a>
        </div>
      </div>`;
    $('#dropIndustries').innerHTML = INDUSTRIES.map(i => `<a href="#/industries/${i.slug}"><i data-lucide="${i.icon}"></i><span><strong>${esc(i.name)}</strong></span></a>`).join('') +
      `<a href="#/industries" class="drop-all">All industries <i data-lucide="arrow-right"></i></a>`;
    $('#footerServices').innerHTML = ['custom-software-development', 'application-support-maintenance', 'erp-solutions', 'staff-augmentation', 'mobile-app-development', 'cloud-services', 'ai-machine-learning', 'qa-software-testing']
      .map(svcBySlug).map(s => `<li><a href="#/services/${s.slug}">${esc(s.name.replace(' & Maintenance', '').replace(' & Resources', ''))}</a></li>`).join('');
    $('#footerIndustries').innerHTML = INDUSTRIES.slice(0, 8).map(i => `<li><a href="#/industries/${i.slug}">${esc(i.name)}</a></li>`).join('');
  }

  const nav = $('#nav'), menuBtn = $('#menuBtn');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
    icons();
  }
  function closeMenus() {
    $$('.nav-item.open').forEach(i => { i.classList.remove('open'); $('.nav-drop', i).setAttribute('aria-expanded', 'false'); });
    if (nav.classList.contains('open')) setMenu(false);
  }
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('.nav-drop').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const item = btn.closest('.nav-item');
    const willOpen = !item.classList.contains('open');
    $$('.nav-item.open').forEach(i => { if (i !== item) { i.classList.remove('open'); $('.nav-drop', i).setAttribute('aria-expanded', 'false'); } });
    item.classList.toggle('open', willOpen);
    btn.setAttribute('aria-expanded', String(willOpen));
  }));
  document.addEventListener('click', e => { if (!e.target.closest('.nav-item')) $$('.nav-item.open').forEach(i => i.classList.remove('open')); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenus(); });

  /* ---- Theme ---- */
  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('khl-theme', next); } catch (e) {}
  });

  /* ---- Scroll: header state, back to top ---- */
  const header = $('#header'), toTop = $('#toTop');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 10);
    document.body.classList.toggle('past-top', y > 40);
    toTop.classList.toggle('show', y > 700);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => window.scrollTo({ top: 0 }));

  // In-page scroll buttons (hash routing means we can't use #id links)
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-scroll]');
    if (!b) return;
    e.preventDefault();
    const t = document.getElementById(b.dataset.scroll);
    if (t) t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---- Reveal on scroll ---- */
  const revealObs = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }) : null;
  function observeReveals() {
    $$('.reveal:not(.in)').forEach(el => revealObs ? revealObs.observe(el) : el.classList.add('in'));
  }

  /* ---- Counters ---- */
  function initCounters() {
    const els = $$('.counter');
    const run = el => {
      const target = +el.dataset.target; let start = null;
      const step = ts => { start = start || ts; const p = Math.min((ts - start) / 1600, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window) || reduceMotion) { els.forEach(el => el.textContent = el.dataset.target); return; }
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } }), { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
    cleanups.push(() => obs.disconnect());
  }

  /* ---- Tabs (home services) ---- */
  function initTabs() {
    $$('.tab[data-tab]').forEach(tab => tab.addEventListener('click', () => {
      $$('.tab[data-tab]').forEach(t => { t.classList.toggle('active', t === tab); t.setAttribute('aria-selected', String(t === tab)); });
      $$('.tab-panel').forEach(p => {
        const on = p.dataset.panel === tab.dataset.tab;
        p.classList.toggle('active', on);
        if (on) $$('.reveal', p).forEach(r => r.classList.add('in'));
      });
    }));
  }

  /* ---- Testimonials slider ---- */
  function initSlider() {
    const track = $('#testimonialTrack'); if (!track) return;
    const dotsWrap = $('#tDots'), cards = $$('.t-card', track);
    const cardW = () => cards[0].getBoundingClientRect().width + 24;
    const perView = () => Math.max(1, Math.round((track.clientWidth + 24) / cardW()));
    const pages = () => Math.ceil(cards.length / perView());
    const current = () => Math.round(track.scrollLeft / (cardW() * perView()));
    const goTo = page => {
      const n = pages(); page = (page + n) % n;
      track.scrollTo({ left: cards[Math.min(page * perView(), cards.length - 1)].offsetLeft - track.offsetLeft });
    };
    const sync = () => $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('active', i === current()));
    const build = () => {
      dotsWrap.innerHTML = Array.from({ length: pages() }, (_, i) => `<button aria-label="Go to testimonials page ${i + 1}" data-i="${i}"></button>`).join('');
      sync();
    };
    let auto = null;
    const restart = () => { clearInterval(auto); if (!reduceMotion) auto = setInterval(() => goTo(current() + 1), 6000); };
    dotsWrap.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { goTo(+b.dataset.i); restart(); } });
    $('#prevT').addEventListener('click', () => { goTo(current() - 1); restart(); });
    $('#nextT').addEventListener('click', () => { goTo(current() + 1); restart(); });
    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    track.addEventListener('mouseenter', () => clearInterval(auto));
    track.addEventListener('mouseleave', restart);
    let rt; const onResize = () => { clearTimeout(rt); rt = setTimeout(build, 150); };
    window.addEventListener('resize', onResize);
    build(); restart();
    cleanups.push(() => { clearInterval(auto); window.removeEventListener('resize', onResize); });
  }

  /* ---- Forms ---- */
  // Sends form data using the provider configured in data.js (KHL.company.form)
  async function deliver(fields, subject) {
    const { provider, key } = C.form || {};
    if (provider === 'web3forms' && key) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: key, subject, from_name: 'KHL Technologies Website', ...fields })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || 'Submission failed');
      return 'sent';
    }
    if (provider === 'formspree' && key) {
      const res = await fetch(`https://formspree.io/f/${key}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, ...fields })
      });
      if (!res.ok) throw new Error('Submission failed');
      return 'sent';
    }
    const body = Object.entries(fields).map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join('\n');
    window.location.href = `mailto:${C.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return 'mailto';
  }

  function bindForms(ctx) {
    $$('form[data-contact]', ctx).forEach(form => {
      const status = $('.form-status', form), btn = $('button[type="submit"]', form);
      $$('input, textarea', form).forEach(f => f.addEventListener('input', () => f.classList.remove('invalid')));
      form.addEventListener('submit', async e => {
        e.preventDefault();
        if (form.botcheck.checked) return; // honeypot: bots tick hidden boxes
        let ok = true;
        $$('[required]', form).forEach(f => {
          const v = f.value.trim();
          const valid = v !== '' && (f.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
          f.classList.toggle('invalid', !valid);
          if (!valid) ok = false;
        });
        if (!ok) { status.className = 'form-status err'; status.textContent = 'Please fill in the required fields with valid details.'; return; }
        const d = new FormData(form);
        const fields = {
          name: d.get('name'), email: d.get('email'), company: d.get('company') || '-', phone: d.get('phone') || '-',
          service: d.get('service'), budget: d.get('budget'), nda: d.get('nda') ? 'Yes' : 'No', message: d.get('message')
        };
        btn.disabled = true; btn.classList.add('loading');
        status.className = 'form-status'; status.textContent = 'Sending...';
        try {
          const how = await deliver(fields, `New inquiry: ${fields.service} (${fields.name})`);
          status.className = 'form-status ok';
          status.textContent = how === 'sent'
            ? 'Thank you! Your message has been sent. We will get back to you within one business day.'
            : 'Your email app has opened with your inquiry. Please press send to complete.';
          form.reset();
        } catch (err) {
          status.className = 'form-status err';
          status.innerHTML = `Sorry, something went wrong. Please email us at <a href="mailto:${C.email}">${C.email}</a>.`;
        } finally {
          btn.disabled = false; btn.classList.remove('loading');
        }
      });
    });
  }

  $('#newsletterForm').addEventListener('submit', async e => {
    e.preventDefault();
    const input = $('input', e.target), email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { input.focus(); return; }
    if (C.form && C.form.key && C.form.provider !== 'mailto') {
      try { await deliver({ email, message: 'Please add me to the newsletter.' }, 'Newsletter subscription'); } catch (err) { /* non-critical */ }
    }
    input.value = ''; input.placeholder = 'Thanks for subscribing!';
  });

  /* ---- Site search ---- */
  const searchIndex = [
    ...SERVICES.map(s => ({ t: s.name, d: s.short, h: `#/services/${s.slug}`, i: s.icon, k: 'Service', x: s.tech.join(' ') + ' ' + s.offerings.map(o => o[0]).join(' ') })),
    ...INDUSTRIES.map(i => ({ t: i.name, d: i.short, h: `#/industries/${i.slug}`, i: i.icon, k: 'Industry', x: i.solutions.map(s => s[0]).join(' ') })),
    ...PROJECTS.map(p => ({ t: p.title, d: p.summary, h: `#/portfolio/${p.id}`, i: (indBySlug(p.industry) || {}).icon || 'folder', k: 'Project', x: p.tech.join(' ') + ' ' + p.client })),
    ...TECH.map(c => ({ t: c.name + ' technologies', d: c.items.join(', '), h: '#/technologies', i: c.icon, k: 'Technology', x: '' })),
    { t: 'Hire Developers', d: 'Hire dedicated developers, testers and IT resources.', h: '#/hire-developers', i: 'user-plus', k: 'Page', x: ROLES.map(r => r[0]).join(' ') + ' staff augmentation resources' },
    { t: 'About Us', d: 'Our story, mission, vision and values.', h: '#/about', i: 'building-2', k: 'Page', x: 'company team experience' },
    { t: 'Careers', d: 'Open positions at KHL Technologies.', h: '#/careers', i: 'briefcase', k: 'Page', x: 'jobs hiring ' + JOBS.map(j => j.title).join(' ') },
    { t: 'Pricing & Packages', d: 'Packages, engagement options and an instant project estimate.', h: '#/pricing', i: 'calculator', k: 'Page', x: 'price cost rate budget quote estimate hourly monthly' },
    { t: 'Working With Us', d: 'Communication, time zones, contracts, payments and deliverables.', h: '#/working-with-us', i: 'handshake', k: 'Page', x: 'process nda contract payment timezone tools deliverables outsourcing' },
    ...ARTICLES.map(a => ({ t: a.title, d: a.excerpt, h: '#/insights/' + a.slug, i: a.icon, k: 'Guide', x: a.category })),
    { t: 'Contact Us', d: 'Get a free quote or consultation.', h: '#/contact', i: 'mail', k: 'Page', x: 'quote email phone address whatsapp' }
  ];
  const overlay = $('#searchOverlay'), sInput = $('#searchInput'), sResults = $('#searchResults');
  const openSearch = () => { overlay.classList.add('open'); overlay.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); sInput.value = ''; renderSearch(); setTimeout(() => sInput.focus(), 50); };
  const closeSearch = () => { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); };
  function renderSearch() {
    const q = sInput.value.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    const list = q ? searchIndex.filter(r => { const hay = `${r.t} ${r.d} ${r.x}`.toLowerCase(); return words.every(w => hay.includes(w)); }).slice(0, 12)
      : searchIndex.filter(r => r.k === 'Page' || ['custom-software-development', 'application-support-maintenance', 'erp-solutions', 'staff-augmentation'].some(s => r.h.endsWith(s)));
    sResults.innerHTML = list.length
      ? `${q ? '' : '<p class="s-hint">Popular</p>'}${list.map(r => `<a href="${r.h}"><i data-lucide="${r.i}"></i><span><strong>${esc(r.t)}</strong><small>${esc(r.d)}</small></span><em>${r.k}</em></a>`).join('')}`
      : `<p class="s-empty">No results for "${esc(q)}". <a href="#/contact">Ask us directly</a>. We work with almost any technology.</p>`;
    icons();
  }
  $('#searchBtn').addEventListener('click', openSearch);
  sInput.addEventListener('input', renderSearch);
  overlay.addEventListener('click', e => { if (e.target.closest('[data-close-search]') || e.target.closest('a')) closeSearch(); });
  sInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const first = $('a', sResults); if (first) { location.hash = first.getAttribute('href'); closeSearch(); } }
  });

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') { closeSearch(); closeMenus(); }
  });

  /* ---- Company details from data.js ---- */
  function bindCompany() {
    $$('[data-text]').forEach(el => { const v = C[el.dataset.text]; if (v) el.textContent = v; });
    $$('[data-bind="email"]').forEach(a => a.href = `mailto:${C.email}`);
    $$('[data-bind="phone"]').forEach(a => a.href = `tel:${C.phoneHref}`);
    $$('[data-social]').forEach(a => { const u = C.social[a.dataset.social]; if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; } else a.remove(); });
    if (!$('#socials a')) $('#socials').remove();
    if (!C.phone) $$('[data-bind="phone"]').forEach(a => (a.closest('li') || a).remove());
    if (!C.address) $$('[data-text="address"]').forEach(el => (el.closest('li') || el).remove());
    const wa = $('#whatsappBtn');
    if (C.whatsapp) wa.href = `https://wa.me/${C.whatsapp}`; else wa.remove();
    // Sticky call-to-action bar for phones
    const bar = document.createElement('div');
    bar.className = 'mobile-cta';
    bar.innerHTML = `${C.phone ? `<a href="tel:${C.phoneHref}" class="mc-call"><i data-lucide="phone"></i> Call</a>` : ''}${C.whatsapp ? `<a href="https://wa.me/${C.whatsapp}" target="_blank" rel="noopener" class="mc-wa"><i data-lucide="message-circle"></i> WhatsApp</a>` : ''}<a href="#/contact" class="mc-quote">Free Quote <i data-lucide="arrow-right"></i></a>`;
    document.body.appendChild(bar);
    $('#year').textContent = new Date().getFullYear();
  }

  /* ---- Boot ---- */
  buildMenus();
  bindCompany();
  window.addEventListener('hashchange', router);
  router();
  icons();
})();
