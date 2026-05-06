// =============================================================
// LUMEN — Philosopher detail page
// Reads ?id=<philosopher-id> and renders the full record.
// =============================================================

(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const fmtYear = (y) => (y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`);

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

  // ---------- LOAD PHILOSOPHER ----------
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const idx = philosophers.findIndex((p) => p.id === id);
  const p = idx >= 0 ? philosophers[idx] : null;

  if (!p) {
    $('#phil').innerHTML = `
      <div style="text-align:center; padding:80px 20px;">
        <h1 style="font-family: var(--serif); font-size: 48px; margin-bottom: 16px;">Philosopher not found</h1>
        <p style="color: var(--ink-soft); margin-bottom: 32px;">The thinker you're looking for isn't on the timeline.</p>
        <a href="index.html" class="btn btn--primary">Return to Lumen</a>
      </div>
    `;
    return;
  }

  // Set color theme variable
  $('#phil').style.setProperty('--card-color', p.color);
  document.title = `${p.name} · Lumen`;

  // ---------- POPULATE HERO ----------
  const portrait = $('#philPortrait');
  portrait.style.backgroundImage = `url('${p.portrait}')`;
  portrait.style.backgroundColor = `color-mix(in srgb, ${p.color} 30%, var(--bg-soft))`;

  $('#philEra').textContent = p.era;
  $('#philEmoji').textContent = p.emoji;
  $('#philName').textContent = p.name;
  $('#philTitle').textContent = p.title;
  $('#philMeta').innerHTML = `
    <span>${fmtYear(p.born)} – ${fmtYear(p.died)}</span>
    <span>${p.birthPlace}</span>
    <span>${p.died - p.born} years</span>
  `;

  // Hook: dramatic single-sentence opener
  if (p.hook) $('#philHook').textContent = p.hook;

  // ---------- POPULATE BODY ----------
  const renderMode = () => {
    const lede = $('#philLede');
    lede.style.opacity = '0';
    setTimeout(() => {
      lede.textContent = p[mode];
      lede.style.opacity = '1';
    }, 220);
  };
  renderMode();

  // Render an array of paragraphs (or a single string) into a container.
  const renderParagraphs = (el, content) => {
    el.innerHTML = '';
    const arr = Array.isArray(content) ? content : [content];
    arr.forEach((text) => {
      const para = document.createElement('p');
      para.textContent = text;
      el.appendChild(para);
    });
  };
  renderParagraphs($('#philOrigin'), p.origin);
  renderParagraphs($('#philCore'), p.coreIdeas);
  renderParagraphs($('#philReaction'), p.reaction);
  renderParagraphs($('#philModern'), p.modern);

  // Quotes
  const quotesUl = $('#philQuotes');
  p.teachings.forEach((q) => {
    const li = document.createElement('li');
    li.textContent = q;
    quotesUl.appendChild(li);
  });

  // Key works
  const worksUl = $('#philWorks');
  if (p.keyWorks && p.keyWorks.length) {
    p.keyWorks.forEach((w) => {
      const li = document.createElement('li');
      li.textContent = w;
      worksUl.appendChild(li);
    });
  } else {
    $('#philWorksWrap').remove();
  }

  // ---------- PREV / NEXT ----------
  const prev = idx > 0 ? philosophers[idx - 1] : philosophers[philosophers.length - 1];
  const next = idx < philosophers.length - 1 ? philosophers[idx + 1] : philosophers[0];

  const prevA = $('#philPrev');
  prevA.href = `philosopher.html?id=${prev.id}`;
  $('#philPrevName').textContent = prev.name;
  $('#philPrevYear').textContent = `${fmtYear(prev.born)}`;

  const nextA = $('#philNext');
  nextA.href = `philosopher.html?id=${next.id}`;
  $('#philNextName').textContent = next.name;
  $('#philNextYear').textContent = `${fmtYear(next.born)}`;

  // ---------- MODE TOGGLE ----------
  const modeToggle = $('.mode-toggle');
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
      renderMode();
    });
  });

  // ---------- KEYBOARD NAV ----------
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') window.location.href = prevA.href;
    if (e.key === 'ArrowRight') window.location.href = nextA.href;
  });
})();
