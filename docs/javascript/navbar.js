const mount = document.getElementById('navbar');
if (mount) {
  mount.innerHTML = `
<header id="siteHeader" class="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-zinc-200 transition-all duration-300">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="h-16 md:h-24 flex items-center justify-between">
      <!-- Brand -->
      <a href="/index.html" class="flex items-center gap-2 font-semibold text-zinc-900 tracking-tight text-2xl" aria-label="Home">
        <span>Rahima</span><span class="text-indigo-600">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-8" aria-label="Primary">
        <a href="/index.html" class="navlink transition-all duration-400 text-zinc-800 hover:text-indigo-600 transition">Home</a>
        <a href="/about.html" class="navlink transition-all duration-400 text-zinc-800 hover:text-indigo-600 transition">About</a>
        <a href="/experience.html" class="navlink transition-all duration-400 text-zinc-800 hover:text-indigo-600 transition">Experience</a>
        <a href="/projects.html" class="navlink transition-all duration-400 text-zinc-800 hover:text-indigo-600 transition">Projects</a>

        <!-- Services dropdown -->
        <div class="relative">
          <button id="servicesBtn" type="button" class="inline-flex cursor-pointer items-center gap-2 text-zinc-800 hover:text-indigo-600 transition" aria-haspopup="true" aria-expanded="false">
            <i class="fa-solid fa-briefcase"></i><span>Services</span>
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <div id="servicesMenu" role="menu" aria-labelledby="servicesBtn" class="hidden absolute right-0 mt-2 w-72 rounded-xl border border-zinc-200 bg-white shadow-lg p-2">
            <a role="menuitem" href="/services.html#data-analysis" class="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 transition-all duration-400"><i class="fa-solid fa-magnifying-glass-chart mr-2"></i>Data Analysis &amp; Insights</a>
            <a role="menuitem" href="/services.html#dashboards" class="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 transition-all duration-400"><i class="fa-solid fa-chart-pie mr-2"></i>Dashboard Design </a>
            <a role="menuitem" href="/services.html#etl" class="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 transition-all duration-400"><i class="fa-solid fa-arrows-rotate mr-2"></i>Data Cleaning &amp; ETL</a>
            <a role="menuitem" href="/services.html#automation" class="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 transition-all duration-400"><i class="fa-solid fa-robot mr-2"></i>Reporting Automation</a>
            <a role="menuitem" href="/services.html#consulting" class="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 transition-all duration-400"><i class="fa-solid fa-terminal mr-2"></i>SQL / Python Consulting</a>
          </div>
        </div>
      </nav>

      <!-- Desktop CTAs -->
      <div class="hidden lg:flex items-center gap-3">
        <a href="/contact.html" class="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-800 hover:bg-zinc-50 transition"><i class="fa-regular fa-envelope mr-2"></i>Contact</a>
        <a href="/contact.html#hire" class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:opacity-90 transition"><i class="fa-solid fa-handshake-simple mr-2"></i>Hire Me</a>
      </div>

      <!-- Mobile toggle -->
      <button id="mobileToggle" class="lg:hidden p-2 text-zinc-800" aria-label="Open menu" aria-controls="mobileContainer" aria-expanded="false">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>
  </div>
</header>

<!-- Mobile drawer container -->
<div id="mobileContainer" class="fixed inset-0 z-50 invisible opacity-0 pointer-events-none transition-opacity duration-300" role="dialog" aria-modal="true" aria-hidden="true">
  <div id="backdrop" class="absolute inset-0 bg-black/50"></div>
  <div id="drawer" class="ml-auto h-full w-80 max-w-[85%] bg-white shadow-xl p-6 overflow-y-auto transform-gpu translate-x-full transition-transform duration-300 ease-out">
    <div class="flex items-center justify-between">
      <a href="/index.html" class="font-extrabold text-zinc-900 tracking-tight">Rahima<span class="text-indigo-600">.</span></a>
      <button id="mobileClose" class="p-2 text-zinc-800" aria-label="Close menu">
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>
    </div>

    <nav class="mt-6 space-y-2" aria-label="Mobile">
      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/index.html"><i class="fa-solid fa-house mr-2"></i>Home</a>
      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/about.html"><i class="fa-regular fa-user mr-2"></i>About</a>
      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/experience.html"><i class="fa-solid fa-timeline mr-2"></i>Experience</a>
      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/projects.html"><i class="fa-regular fa-folder-open mr-2"></i>Projects</a>

      <details class="group rounded-lg">
        <summary class="flex items-center justify-between cursor-pointer rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50">
          <span><i class="fa-solid fa-briefcase mr-2"></i>Services</span>
          <i class="fa-solid fa-chevron-down text-xs transition group-open:rotate-180"></i>
        </summary>
        <div class="pl-4 mt-2 space-y-2">
          <a href="/services.html#data-analysis" class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50">Data Analysis &amp; Insights</a>
          <a href="/services.html#dashboards" class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50">Dashboard Design (Power BI / Looker)</a>
          <a href="/services.html#etl" class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50">Data Cleaning &amp; ETL</a>
          <a href="/services.html#automation" class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50">Reporting Automation</a>
          <a href="/services.html#consulting" class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50">SQL / Python Consulting</a>
        </div>
      </details>

      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/testimonials.html"><i class="fa-regular fa-comments mr-2"></i>Testimonials</a>
      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/contact.html"><i class="fa-regular fa-envelope mr-2"></i>Contact</a>
      <a class="mobile-link block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-50" href="/resume/rahima-waheed-cv.pdf"><i class="fa-solid fa-file-arrow-down mr-2"></i>Download CV</a>

      <div class="pt-2 flex gap-2">
        <a href="/contact.html" class="mobile-link flex-1 text-center rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 hover:bg-zinc-50">Contact</a>
        <a href="/contact.html#hire" class="mobile-link flex-1 text-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:opacity-90">Hire Me</a>
      </div>
    </nav>
  </div>
</div>
`;

  // ===== Interactions =====
  const header = document.getElementById('siteHeader');
  const toggle = document.getElementById('mobileToggle');
  const container = document.getElementById('mobileContainer');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  const closeBtn = document.getElementById('mobileClose');

  // Smooth header background on scroll
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add('bg-white/95', 'shadow-sm');
    } else {
      header.classList.remove('bg-white/95', 'shadow-sm');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  // Drawer helpers
  function openDrawer() {
    container.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
    drawer.classList.remove('translate-x-full');
    container.setAttribute('aria-hidden', 'false');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');
  }
  function closeDrawer() {
    drawer.classList.add('translate-x-full');
    container.classList.add('opacity-0');
    // wait for transition to end before hiding pointer events
    setTimeout(() => {
      container.classList.add('invisible', 'pointer-events-none');
    }, 300);
    container.setAttribute('aria-hidden', 'true');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  }

  toggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

  // Close drawer on mobile link click (do NOT prevent default — navigation proceeds)
  document.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      // Let browser navigate naturally; just close the drawer visually
      closeDrawer();
    });
  });

  // Desktop services dropdown (click outside to close)
  const servicesBtn = document.getElementById('servicesBtn');
  const servicesMenu = document.getElementById('servicesMenu');
  function closeDropdown() {
    servicesMenu?.classList.add('hidden');
    servicesBtn?.setAttribute('aria-expanded', 'false');
  }
  servicesBtn?.addEventListener('click', () => {
    const open = servicesBtn.getAttribute('aria-expanded') === 'true';
    if (open) { closeDropdown(); }
    else { servicesMenu.classList.remove('hidden'); servicesBtn.setAttribute('aria-expanded', 'true'); }
  });
  document.addEventListener('click', (evt) => {
    if (!servicesMenu || !servicesBtn) return;
    if (!servicesMenu.contains(evt.target) && !servicesBtn.contains(evt.target)) closeDropdown();
  });

  // Highlight current page in desktop nav
  const path = location.pathname;
  document.querySelectorAll('nav[aria-label="Primary"] .navlink').forEach((el) => {
    const href = el.getAttribute('href'); if (!href) return;
    if ((href.endsWith('/index.html') && (path === '/' || path.endsWith('/index.html'))) || path.endsWith(href)) {
      el.classList.add('text-indigo-600', 'font-semibold');
    }
  });
}