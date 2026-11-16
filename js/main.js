(function () {
  'use strict';

  var I18N = window.I18N;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';
  var D_FAST = 160, D_BASE = 240, D_SLOW = 400;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------------------------------------------------------ data */
  var PROJECTS = [{
    slug: 'mony',
    image: 'assets/dashboard%20web.jpg', w: 842, h: 472,
    tech: [
      { name: 'Laravel', logo: 'assets/laravel.jpg' },
      { name: 'PHP', logo: 'assets/php%20logo.jpg' },
      { name: 'Tailwind CSS', logo: 'assets/tailwind%20css.jpg' },
      { name: 'Vite' },
      { name: 'Composer' },
      { name: 'Node.js', logo: 'assets/node%20js%20logo.jpg' },
      { name: 'MySQL' }
    ],
    links: [
      'https://github.com/patrichmoratti/website-koperasi-cempaka',
      'https://youtu.be/DansUCELal0'
    ]
  }];

  var CERTS = [
    'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    'Belajar Dasar Git dengan GitHub',
    'Belajar Dasar AI',
    'Belajar Dasar Pemrograman Web',
    'Belajar Dasar Pemrograman JavaScript',
    'Belajar Membuat Front-End Web untuk Pemula',
    'Belajar Membuat Aplikasi Web dengan React',
    'Belajar Fundamental Aplikasi Web dengan React',
    'Belajar Back-End Pemula dengan JavaScript',
    'Belajar Fundamental Back-End dengan JavaScript'
  ];
  var certSrc = function (i) { return 'assets/sertif%20' + (i + 1) + '.jpg'; };

  var TECH = [
    ['HTML', 'html%20logo.jpg'], ['CSS', 'logo%20css.jpg'], ['JavaScript', 'JavaScript-logo.jpg'],
    ['Node.js', 'node%20js%20logo.jpg'], ['React', 'react%20logo.jpg'], ['PostgreSQL', 'posgresql%20logo.jpg'],
    ['Laragon', 'laragon%20logo.jpg'], ['Laravel', 'laravel.jpg'], ['PHP', 'php%20logo.jpg'],
    ['Tailwind CSS', 'tailwind%20css.jpg']
  ];

  var ICON_GENERIC = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14"/></svg>';
  var ICON_BACK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
  var ICON_OUT = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  var BROWSER_BAR = '<div class="browser__bar" aria-hidden="true"><i></i><i></i><i></i></div>';

  /* ------------------------------------------------------------------ i18n */
  var lang = 'id';
  try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch (e) {}

  function t(key) {
    return key.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, I18N[lang]);
  }

  function applyLang(root) {
    $$('[data-i18n]', root).forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v != null) el.textContent = v;
    });
    $$('[data-i18n-attr]', root).forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':');
        var v = t(pair.slice(i + 1));
        if (v != null) el.setAttribute(pair.slice(0, i), v);
      });
    });
    $$('[data-cert]', root).forEach(function (img) {
      img.alt = t('portfolio.certOpen') + CERTS[+img.getAttribute('data-cert')];
    });
  }

  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    applyLang(document);
    $$('[data-lang-opt]').forEach(function (s) {
      s.classList.toggle('is-on', s.getAttribute('data-lang-opt') === l);
    });
    if (lb.open) setLbCaption();
    placeIndicators();
  }

  /* ---------------------------------------------------------------- render */
  $('#project-grid').innerHTML = PROJECTS.map(function (p) {
    var k = 'projects.' + p.slug;
    return '<li><article class="pcard">' +
      '<div class="browser pcard__media" data-flip="' + p.slug + '">' + BROWSER_BAR +
        '<img src="' + p.image + '" width="' + p.w + '" height="' + p.h + '" loading="lazy" alt="" data-i18n-attr="alt:' + k + '.imageAlt">' +
      '</div>' +
      '<div class="pcard__body">' +
        '<h3 class="pcard__title" id="pt-' + p.slug + '" data-i18n="' + k + '.title"></h3>' +
        '<p class="pcard__desc" data-i18n="' + k + '.short"></p>' +
        '<a class="btn btn--ghost" href="#project/' + p.slug + '" data-details="' + p.slug + '" aria-describedby="pt-' + p.slug + '" data-i18n="portfolio.details"></a>' +
      '</div></article></li>';
  }).join('');

  $('#cert-grid').innerHTML = CERTS.map(function (title, i) {
    return '<li><figure class="cert">' +
      '<figcaption><span class="cert__title">' + title + '</span><span class="cert__issuer" data-i18n="portfolio.certIssuer"></span></figcaption>' +
      '<button type="button" class="cert__btn" data-cert-open="' + i + '">' +
        '<img src="' + certSrc(i) + '" width="1050" height="745" loading="lazy" alt="" data-cert="' + i + '">' +
      '</button></figure></li>';
  }).join('');

  $('#tech-grid').innerHTML = TECH.map(function (x) {
    return '<li><div class="tech"><span class="tile tech__tile"><img src="assets/' + x[1] + '" width="64" height="64" loading="lazy" alt=""></span>' +
      '<span class="tech__name">' + x[0] + '</span></div></li>';
  }).join('');

  $('#stat-projects').setAttribute('data-sc-count', '0 ' + PROJECTS.length);
  $('#stat-certs').setAttribute('data-sc-count', '0 ' + CERTS.length);

  /* ------------------------------------------------------- sliding markers */
  // Lebar dasar penanda 100px; posisi dan lebar lewat transform saja.
  function placeInd(ind, target) {
    if (!ind || !target) return;
    ind.style.transform = 'translateX(' + target.offsetLeft + 'px) scaleX(' + (target.offsetWidth / 100) + ')';
    ind.style.opacity = '1';
  }
  function placeIndicators() {
    placeInd($('#nav-ind'), $('#nav-list a[aria-current]'));
    placeInd($('#tabs-ind'), $('#tabs [aria-selected="true"]'));
  }

  /* ---------------------------------------------------------------- navbar */
  var header = $('#site-header');
  var navLinks = $$('#nav-list a');
  function setActive(id) {
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-nav') === id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    placeInd($('#nav-ind'), $('#nav-list a[aria-current]'));
  }
  setActive('home');
  if ('IntersectionObserver' in window) {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    $$('main > section').forEach(function (s) { sio.observe(s); });
  }
  var onScroll = function () { header.classList.toggle('is-scrolled', scrollY > 24); };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  $('#lang-toggle').addEventListener('click', function () { setLang(lang === 'id' ? 'en' : 'id'); });

  /* ------------------------------------------------------------------ tabs */
  var tabs = $$('#tabs [role="tab"]');
  function selectTab(tab, focus) {
    tabs.forEach(function (b) {
      var on = b === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      $('#' + b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    placeInd($('#tabs-ind'), tab);
  }
  tabs.forEach(function (b) { b.addEventListener('click', function () { selectTab(b, false); }); });
  $('#tabs').addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var n = tabs.length, to = -1;
    if (e.key === 'ArrowRight') to = (i + 1) % n;
    else if (e.key === 'ArrowLeft') to = (i - 1 + n) % n;
    else if (e.key === 'Home') to = 0;
    else if (e.key === 'End') to = n - 1;
    if (to < 0) return;
    e.preventDefault();
    selectTab(tabs[to], true);
  });

  /* ------------------------------------------------------------------ FLIP */
  // Menerbangkan el dari/ke rect lain. transform-origin el harus 0 0.
  function flip(el, rect, reverse) {
    var to = el.getBoundingClientRect();
    var tf = 'translate(' + (rect.left - to.left) + 'px,' + (rect.top - to.top) + 'px) ' +
             'scale(' + (rect.width / to.width) + ',' + (rect.height / to.height) + ')';
    return el.animate(
      reverse ? [{ transform: 'none' }, { transform: tf }] : [{ transform: tf }, { transform: 'none' }],
      { duration: D_SLOW, easing: EASE, fill: reverse ? 'forwards' : 'none' }
    );
  }
  function onScreen(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.bottom > 0 && r.top < innerHeight;
  }

  /* -------------------------------------------------------- project detail */
  var detail = $('#detail');
  var open = null;          // { slug, card }
  var pendingDone = null, pendingTimer = 0;

  function setInert(v) {
    ['#main', '#site-header', '#site-footer', '.skip'].forEach(function (s) { $(s).inert = v; });
    document.documentElement.classList.toggle('is-locked', v);
  }

  function detailHTML(p) {
    var k = 'projects.' + p.slug, c = I18N.id.projects[p.slug];
    var list = function (arr, fn) { return arr.map(fn).join(''); };
    return '<div class="detail__bg"></div>' +
    '<div class="detail__scroll"><div class="sc-wrap detail__inner">' +
      '<div class="detail__top fade">' +
        '<button type="button" class="btn btn--ghost detail__back" data-close>' + ICON_BACK + '<span data-i18n="detail.back"></span></button>' +
        '<nav aria-label="Breadcrumb" data-i18n-attr="aria-label:detail.crumbLabel"><ol class="crumbs">' +
          '<li><a href="#portfolio" data-close data-i18n="portfolio.title"></a></li>' +
          '<li data-i18n="portfolio.tabProjects"></li>' +
          '<li aria-current="page">' + c.title.split(' – ')[0] + '</li>' +
        '</ol></nav>' +
      '</div>' +
      '<h2 class="detail__title fade" id="detail-title" tabindex="-1" data-i18n="' + k + '.title"></h2>' +
      '<ul class="chips fade">' + list(c.labels, function (_, i) { return '<li data-i18n="' + k + '.labels.' + i + '"></li>'; }) + '</ul>' +
      '<div class="detail__cols">' +
        '<div class="detail__main">' +
          '<figure class="browser detail__media">' + BROWSER_BAR +
            '<img src="' + p.image + '" width="' + p.w + '" height="' + p.h + '" alt="" data-i18n-attr="alt:' + k + '.imageAlt">' +
          '</figure>' +
          '<div class="fade">' +
            '<h3 data-i18n="detail.desc"></h3>' +
            list(c.desc, function (_, i) { return '<p data-i18n="' + k + '.desc.' + i + '"></p>'; }) +
            '<h3 data-i18n="' + k + '.contribHeading"></h3>' +
            '<ul class="contrib">' + list(c.contrib, function (_, i) { return '<li data-i18n="' + k + '.contrib.' + i + '"></li>'; }) + '</ul>' +
          '</div>' +
        '</div>' +
        '<aside class="detail__side fade">' +
          '<h3 data-i18n="detail.tech"></h3>' +
          '<ul class="techchips">' + list(p.tech, function (x) {
            return '<li><span class="tile techchips__icon">' +
              (x.logo ? '<img src="' + x.logo + '" width="28" height="28" alt="">' : ICON_GENERIC) +
              '</span>' + x.name + '</li>';
          }) + '</ul>' +
          '<h3 data-i18n="detail.links"></h3>' +
          '<ul class="detail__links">' + list(p.links, function (href, i) {
            return '<li><a class="btn btn--ghost" href="' + href + '" target="_blank" rel="noopener noreferrer">' +
              '<span data-i18n="' + k + '.links.' + i + '"></span>' + ICON_OUT + '</a></li>';
          }) + '</ul>' +
        '</aside>' +
      '</div>' +
    '</div></div>';
  }

  function openDetail(slug, animate) {
    var p = PROJECTS.filter(function (x) { return x.slug === slug; })[0];
    if (!p) return;
    if (pendingDone) { clearTimeout(pendingTimer); pendingDone(); }
    detail.innerHTML = detailHTML(p);
    applyLang(detail);
    detail.hidden = false;
    setInert(true);

    var card = $('[data-flip="' + slug + '"]');
    var media = $('.detail__media', detail);
    if (animate && !reduce && onScreen(card)) {
      flip(media, card.getBoundingClientRect(), false);
      card.style.visibility = 'hidden';
    } else {
      media.classList.add('fade');
    }
    void detail.offsetWidth;
    detail.classList.add('is-open');
    open = { slug: slug, card: card };
    $('#detail-title').focus({ preventScroll: true });
  }

  function closeDetail() {
    if (!open) return;
    var o = open; open = null;
    var media = $('.detail__media', detail);
    setInert(false);
    detail.classList.add('is-closing');
    if (!reduce && onScreen(o.card)) flip(media, o.card.getBoundingClientRect(), true);
    else media.classList.add('fade');
    pendingDone = function () {
      pendingDone = null;
      detail.hidden = true;
      detail.classList.remove('is-open', 'is-closing');
      detail.innerHTML = '';
      if (o.card) o.card.style.visibility = '';
    };
    pendingTimer = setTimeout(pendingDone, reduce ? D_FAST : D_SLOW);
    var trigger = $('[data-details="' + o.slug + '"]');
    if (trigger) trigger.focus({ preventScroll: true });
  }

  function slugFromHash() {
    var m = location.hash.match(/^#project\/(.+)$/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function sync(animate) {
    var s = slugFromHash();
    var known = s && PROJECTS.some(function (x) { return x.slug === s; });
    if (known) {
      if (open && open.slug === s) return;
      openDetail(s, animate);
    } else if (open) {
      closeDetail();
    }
  }
  function requestClose() {
    // Dibuka dari kartu: Back browser yang menutup. Dibuka langsung lewat URL: ganti hash.
    if (history.state && history.state.detail) { history.back(); return; }
    history.replaceState(null, '', '#portfolio');
    $('#portfolio').scrollIntoView({ behavior: 'instant' });
    sync(true);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-details]');
    if (a) {
      e.preventDefault();
      history.pushState({ detail: true }, '', '#project/' + a.getAttribute('data-details'));
      sync(true);
      return;
    }
    if (e.target.closest('#detail [data-close]')) { e.preventDefault(); requestClose(); }
  });
  addEventListener('popstate', function () { sync(true); });
  addEventListener('hashchange', function () { sync(true); });

  /* -------------------------------------------------------------- lightbox */
  var lb = $('#lightbox'), lbImg = $('#lb-img'), lbCap = $('#lb-cap');
  var lbIndex = 0, lbOpener = null, lbClosing = false;

  function thumbRect(i) { return $('[data-cert="' + i + '"]').getBoundingClientRect(); }
  function setLbCaption() {
    lbImg.alt = t('portfolio.certOpen') + CERTS[lbIndex];
    lbCap.textContent = CERTS[lbIndex] + ' · ' + t('portfolio.certIssuer') + ' · ' + (lbIndex + 1) + ' / ' + CERTS.length;
  }
  function showCert(i, dir) {
    lbIndex = (i + CERTS.length) % CERTS.length;
    lbImg.src = certSrc(lbIndex);
    setLbCaption();
    if (!dir) return;
    lbImg.animate(
      reduce ? [{ opacity: 0 }, { opacity: 1 }]
             : [{ opacity: 0, transform: 'translateX(' + (dir * 40) + 'px)' }, { opacity: 1, transform: 'none' }],
      { duration: reduce ? D_FAST : D_BASE, easing: EASE }
    );
  }
  function openLb(i, opener) {
    lbOpener = opener;
    showCert(i, 0);
    lb.showModal();
    if (!reduce) flip(lbImg, thumbRect(i), false);
    void lb.offsetWidth;
    lb.classList.add('is-open');
  }
  function closeLb() {
    if (lbClosing || !lb.open) return;
    lbClosing = true;
    lb.classList.remove('is-open');
    if (reduce || !onScreen($('[data-cert="' + lbIndex + '"]'))) { setTimeout(function () { lb.close(); }, D_FAST); return; }
    flip(lbImg, thumbRect(lbIndex), true).onfinish = function () { lb.close(); };
  }
  lb.addEventListener('close', function () {
    lbClosing = false;
    lb.classList.remove('is-open');
    lbImg.getAnimations().forEach(function (a) { a.cancel(); });
    if (lbOpener) lbOpener.focus({ preventScroll: true });
  });
  lb.addEventListener('cancel', function (e) { e.preventDefault(); closeLb(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); showCert(lbIndex - 1, -1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); showCert(lbIndex + 1, 1); }
    else if (e.key === 'Tab') {
      // Dialog native melepas Tab ke UI browser; kunci di dalam tombol lightbox.
      var f = $$('button', lb), i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  $('#lb-close').addEventListener('click', closeLb);
  $('#lb-prev').addEventListener('click', function () { showCert(lbIndex - 1, -1); });
  $('#lb-next').addEventListener('click', function () { showCert(lbIndex + 1, 1); });
  $('#cert-grid').addEventListener('click', function (e) {
    var b = e.target.closest('[data-cert-open]');
    if (b) openLb(+b.getAttribute('data-cert-open'), b);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && open && !lb.open) requestClose();
  });

  /* ------------------------------------------------------------------ boot */
  setLang(lang);
  window.ScrollCraft.mount();
  sync(false);
  addEventListener('resize', placeIndicators, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeIndicators);
})();
