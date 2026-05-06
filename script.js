// =============================================================
// LUMEN — index page (vertical timeline + cards)
// =============================================================

(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const fmtYear = (y) => (y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`);
  const shortYear = (y) => (y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`);

  let mode = localStorage.getItem('lumen-mode') || 'kid';

  // ---------- THEME ----------
  const themeToggle = $('#themeToggle');
  const initialTheme = localStorage.getItem('lumen-theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('lumen-theme', next);
  });

  // ---------- NAV scroll ----------
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- MODE TOGGLE ----------
  const modeToggle = $('.mode-toggle');
  // Initialize from storage
  modeToggle.dataset.mode = mode;
  $$('.mode-toggle__btn').forEach((b) => {
    const active = b.dataset.mode === mode;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  $$('.mode-toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      mode = btn.dataset.mode;
      localStorage.setItem('lumen-mode', mode);
      modeToggle.dataset.mode = mode;
      $$('.mode-toggle__btn').forEach((b) => {
        const active = b.dataset.mode === mode;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      $$('.card').forEach((card) => {
        const id = card.dataset.id;
        const p = philosophers.find((x) => x.id === id);
        const txt = card.querySelector('.card__text');
        txt.style.opacity = '0';
        setTimeout(() => { txt.textContent = p[mode]; txt.style.opacity = '1'; }, 200);
      });
    });
  });

  // ---------- STATS COUNTER ----------
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(tick);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animateCount(e.target); statObserver.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  $$('.stat__num').forEach((s) => statObserver.observe(s));

  // ---------- REVEAL OBSERVER ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  // ---------- VERTICAL TIMELINE ----------
  const vtl = $('#vtimelineItems');
  philosophers.forEach((p, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const item = document.createElement('div');
    item.className = `vtl-item vtl-item--${side}`;
    item.style.setProperty('--card-color', p.color);
    item.style.transitionDelay = `${(i % 4) * 80}ms`;
    item.innerHTML = `
      <span class="vtl-item__dot"></span>
      <a class="vtl-card" href="philosopher.html?id=${p.id}">
        <div class="vtl-card__top">
          <span class="vtl-card__emoji">${p.emoji}</span>
          <span class="vtl-card__year">${shortYear(p.born)} — ${shortYear(p.died)}</span>
        </div>
        <h3 class="vtl-card__name">${p.name}</h3>
        <p class="vtl-card__title">${p.title}</p>
        <span class="vtl-card__era">${p.era}</span>
      </a>
    `;
    vtl.appendChild(item);
    revealObserver.observe(item);
  });

  // ---------- PHILOSOPHER CARDS ----------
  const cardsGrid = $('#cardsGrid');
  philosophers.forEach((p, i) => {
    const card = document.createElement('a');
    card.className = 'card reveal';
    card.dataset.id = p.id;
    card.href = `philosopher.html?id=${p.id}`;
    card.style.setProperty('--card-color', p.color);
    card.style.transitionDelay = `${(i % 4) * 60}ms`;
    card.innerHTML = `
      <div class="card__top">
        <div class="card__emoji">${p.emoji}</div>
        <div class="card__year">${shortYear(p.born)} — ${shortYear(p.died)}</div>
      </div>
      <h3 class="card__name">${p.name}</h3>
      <p class="card__title">${p.title}</p>
      <p class="card__text">${p[mode]}</p>
      <div class="card__foot">
        <span class="card__era">${p.era}</span>
        <span class="card__more">Read more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>
      </div>
    `;
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
    cardsGrid.appendChild(card);
    revealObserver.observe(card);
  });

  // Reveal section heads + about
  $$('.section__head, .about').forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
})();
