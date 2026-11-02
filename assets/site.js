/* Shared header, top bar, footer and menu behavior for every page.
   Edit the HTML below once and every page updates. */
(function () {
  var src = document.currentScript && document.currentScript.src;
  var ROOT = src ? new URL('../', src).href : '#';
  function fill(html) { return html.split('{{root}}').join(ROOT); }

  var TOP = `<div class="bg-black text-center text-sm py-2.5 px-4">
    For faster assistance, call our help line:
    <a href="tel:+15618663035" class="font-semibold text-gold underline underline-offset-2 hover:no-underline">561-866-3035</a>
  </div>`;
  var HEADER = `<header class="relative border-b-2 border-rim">
    <div class="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-6">
      <a href="{{root}}" aria-label="LiquidComputerz home" class="logo-link"><img src="{{root}}images/logo.png" width="572" height="107" alt="LiquidComputerz" class="h-9 w-auto"></a>
      <button id="menu-btn" type="button" class="md:hidden p-2 -mr-2 text-gold" aria-expanded="false" aria-controls="nav" aria-label="Toggle menu">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <nav id="nav" aria-label="Primary" class="hidden md:block absolute md:static left-0 right-0 top-full bg-bg md:bg-transparent border-b-2 border-rim md:border-0 z-40">
        <ul class="mx-auto max-w-6xl px-5 py-3 md:p-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-sm">
          <li><a class="block py-2 font-semibold hover:text-gold" href="{{root}}">Home</a></li>
          <li><a class="block py-2 font-semibold hover:text-gold" href="{{root}}tech-news-wpb/">Tech News WPB</a></li>
          <li class="relative group">
            <a class="block py-2 font-semibold hover:text-gold" href="{{root}}#services">Our Services</a>
            <ul class="md:hidden md:group-hover:block md:group-focus-within:block md:absolute md:left-0 md:top-full md:min-w-52 md:bg-panel md:border-2 md:border-rim md:p-2 pl-4">
              <li><a class="block py-1.5 px-2 hover:text-gold" href="{{root}}websitedesign/">Website Design</a></li>
              <li><a class="block py-1.5 px-2 hover:text-gold" href="{{root}}data-recovery-company/">Data Recovery</a></li>
              <li><a class="block py-1.5 px-2 hover:text-gold" href="{{root}}digital-marketing-company/">Digital Marketing</a></li>
            </ul>
          </li>
          <li><a class="block py-2 hover:text-gold" href="{{root}}remote-computer-support/">Remote Computer Support</a></li>
          <li class="relative group">
            <a class="block py-2 hover:text-gold" href="{{root}}generalpolicy/">Our Policies</a>
            <ul class="md:hidden md:group-hover:block md:group-focus-within:block md:absolute md:left-0 md:top-full md:min-w-52 md:bg-panel md:border-2 md:border-rim md:p-2 pl-4">
              <li><a class="block py-1.5 px-2 hover:text-gold" href="{{root}}privacypolicy/">Privacy Policy</a></li>
              <li><a class="block py-1.5 px-2 hover:text-gold" href="{{root}}termsandconditions/">Terms and Conditions</a></li>
            </ul>
          </li>
          <li><a class="block py-2 font-semibold hover:text-gold" href="{{root}}contact/">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>`;
  var FOOTER = `<footer class="bg-black">
    <div class="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-12">
      <div class="md:col-span-5 space-y-6">
        <div>
          <h2 class="font-pixel font-bold text-xl text-gold">Check out our socials</h2>
          <p class="mt-2 text-sm text-dim">We hope every customer leaves an honest Google review of our service and follows along on our social platforms. Use the Google link under Socials to go to our Google page.</p>
        </div>
        <div>
          <h2 class="font-pixel font-bold text-xl text-gold">Customer satisfaction</h2>
          <p class="mt-2 text-sm text-dim">We keep customers involved at every stage of the process and make sure they are well informed when working with our team.</p>
        </div>
      </div>
      <nav class="md:col-span-2 text-sm" aria-label="Quick links">
        <h2 class="font-pixel font-bold text-xl text-gold">Quick links</h2>
        <ul class="mt-3 space-y-2 text-dim">
          <li><a class="hover:text-gold hover:underline" href="{{root}}">Homepage</a></li>
          <li><a class="hover:text-gold hover:underline" href="{{root}}#services">Our Services</a></li>
          <li><a class="hover:text-gold hover:underline" href="{{root}}remote-computer-support/">Remote Support</a></li>
          <li><a class="hover:text-gold hover:underline" href="{{root}}contact/">Contact Us</a></li>
        </ul>
      </nav>
      <nav class="md:col-span-2 text-sm" aria-label="Policies">
        <h2 class="font-pixel font-bold text-xl text-gold">Policies</h2>
        <ul class="mt-3 space-y-2 text-dim">
          <li><a class="hover:text-gold hover:underline" href="{{root}}generalpolicy/">General Policy</a></li>
          <li><a class="hover:text-gold hover:underline" href="{{root}}privacypolicy/">Privacy Policy</a></li>
          <li><a class="hover:text-gold hover:underline" href="{{root}}termsandconditions/">Terms and Conditions</a></li>
        </ul>
      </nav>
      <div class="md:col-span-3 text-sm">
        <h2 class="font-pixel font-bold text-xl text-gold">Socials</h2>
        <ul class="mt-3 space-y-2 text-dim">
          <li><a class="hover:text-gold hover:underline" href="https://g.page/r/CS4Yob62OmNxEAI/review" rel="noopener">Google</a></li>
          <li><a class="hover:text-gold hover:underline" href="https://www.trustpilot.com/review/liquidcomputerz.com" rel="noopener">Trustpilot</a></li>
          <li><a class="hover:text-gold hover:underline" href="https://www.instagram.com/liquidcomputerz/" rel="noopener">Instagram</a></li>
          <li><a class="hover:text-gold hover:underline" href="https://www.thumbtack.com/fl/delray-beach/excel-training/liquidcomputerz/service/449255409713201163" rel="noopener">Thumbtack</a></li>
        </ul>
        <div class="mt-6 flex items-center gap-4">
          <a href="https://www.thumbtack.com/fl/delray-beach/excel-training/liquidcomputerz/service/449255409713201163?spotlightWebMarkupEnabled=1" rel="noopener"><img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/white/2022.svg" width="74" height="74" alt="LiquidComputerz is rated a Top Pro on Thumbtack" loading="lazy"></a>
          <a href="https://www.homeadvisor.com/rated.LIQUIDCOMPUTERZIT.123747336.html" rel="noopener"><img src="https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=123747336&amp;key=2835173d1e9e002c61a23dfa2935049f" width="58" height="53" alt="LiquidComputerz is a HomeAdvisor Screened and Approved Pro" loading="lazy"></a>
          <a href="https://www.chamberofcommerce.com/united-states/florida/delray-beach/computer-support-and-services/2023318451-liquidcomputerz-llc?source=memberwebsite" rel="noopener"><img src="https://coc.codes/images/badge/2023318451" width="62" height="61" alt="LiquidComputerz is a proud member of the local Chamber of Commerce" loading="lazy"></a>
        </div>
      </div>
    </div>
    <p class="border-t-2 border-rim py-5 text-center text-xs text-dim">&copy; <span id="year">2026</span> Liquidcomputerz LLC. All rights reserved.</p>
  </footer>`;

  var h = document.getElementById('site-header');
  if (h) h.outerHTML = fill(TOP + HEADER);
  var f = document.getElementById('site-footer');
  if (f) f.outerHTML = fill(FOOTER);

  var btn = document.getElementById('menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('hidden', open);
    });
  }

  var logoLink = document.querySelector('.logo-link');
  if (logoLink) {
    ['mouseenter', 'focusin'].forEach(function (ev) { logoLink.addEventListener(ev, function () { logoLink.classList.remove('retract'); }); });
    ['mouseleave', 'focusout'].forEach(function (ev) { logoLink.addEventListener(ev, function () { logoLink.classList.add('retract'); }); });
    logoLink.addEventListener('animationend', function (e) { if (e.animationName === 'px-shrink') logoLink.classList.remove('retract'); });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  /* Glowing dot trail: any element with the data-dot-trail attribute gets it. */
  document.querySelectorAll('[data-dot-trail]').forEach(function (host) {
    var cv = document.createElement('canvas');
    cv.className = 'dots-lit'; cv.setAttribute('aria-hidden', 'true');
    host.insertBefore(cv, host.firstChild);
    var ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    var STEP = 14, RADIUS = 130, TAU = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 1 : 500;
    var cols = 0, rows = 0, lit = new Float32Array(0), raf = 0, last = 0;
    function size() {
      var w = host.clientWidth, h = host.clientHeight, dpr = window.devicePixelRatio || 1;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / STEP); rows = Math.ceil(h / STEP); lit = new Float32Array(cols * rows);
    }
    function frame(t) {
      var k = Math.exp(-Math.min(t - last, 64) / TAU), alive = false;
      last = t;
      ctx.clearRect(0, 0, host.clientWidth, host.clientHeight);
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          var n = j * cols + i, b = lit[n];
          if (b > 0.015) {
            b *= k; lit[n] = b; alive = true;
            ctx.fillStyle = 'rgba(255,196,92,' + b.toFixed(3) + ')';
            ctx.beginPath(); ctx.arc(i * STEP + 7, j * STEP + 7, 1.4 + 1.1 * b, 0, 6.2832); ctx.fill();
          } else if (b) { lit[n] = 0; }
        }
      }
      raf = alive ? requestAnimationFrame(frame) : 0;
    }
    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      var i0 = Math.max(0, Math.floor((x - RADIUS) / STEP)), i1 = Math.min(cols - 1, Math.ceil((x + RADIUS) / STEP));
      var j0 = Math.max(0, Math.floor((y - RADIUS) / STEP)), j1 = Math.min(rows - 1, Math.ceil((y + RADIUS) / STEP));
      for (var j = j0; j <= j1; j++) {
        for (var i = i0; i <= i1; i++) {
          var d = Math.hypot(i * STEP + 7 - x, j * STEP + 7 - y);
          if (d < RADIUS) { var v = 1 - d / RADIUS, n = j * cols + i; if (v > lit[n]) lit[n] = v; }
        }
      }
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
    });
    size();
    if (window.ResizeObserver) { new ResizeObserver(size).observe(host); } else { window.addEventListener('resize', size); }
  });
})();
