// ===== Dark Mode with Icon Sync & Persistence =====
(function () {
  const htmlEl = document.documentElement;
  const darkBtn = document.getElementById('dark-toggle');
  const iconEl = document.getElementById('toggle-icon');

  function setIcon(theme) {
    // Sun when currently in dark (suggesting light is available), moon when in light
    iconEl?.classList.toggle('fa-sun', theme === 'dark');
    iconEl?.classList.toggle('fa-moon', theme === 'light');
  }

  function applyTheme(theme) {
    htmlEl.classList.toggle('dark', theme === 'dark');
    setIcon(theme);
  }

  // Load saved preference; default to dark if none
  const saved = localStorage.getItem('theme');
  const initial = saved ? saved : 'dark';
  applyTheme(initial);

  // Toggle on click
  darkBtn?.addEventListener('click', () => {
    const next = htmlEl.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  // Sync icon if class changes elsewhere
  const obs = new MutationObserver(() => {
    setIcon(htmlEl.classList.contains('dark') ? 'dark' : 'light');
  });
  obs.observe(htmlEl, { attributes: true, attributeFilter: ['class'] });
})();

// Mobile Menu
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document
  .querySelectorAll('#mobile-menu a')
  .forEach((a) =>
    a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
  );

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActive() {
  let cur = '';
  sections.forEach((s) => {
    const top = s.offsetTop - 120,
      h = s.offsetHeight;
    if (scrollY >= top && scrollY < top + h) cur = s.getAttribute('id');
  });
  navLinks.forEach((l) => {
    l.classList.remove('active-link', 'font-semibold');
    if (cur && l.getAttribute('href').includes(cur)) {
      l.classList.add('active-link', 'font-semibold');
    }
  });
}
window.addEventListener('scroll', updateActive);
updateActive();

// HOME-ONLY Matrix rain
(function () {
  const canvas = document.getElementById('homeRain');
  const home = document.getElementById('home');
  if (!canvas || !home) return;
  const ctx = canvas.getContext('2d');
  let w, h, cols, drops;
  const chars =
    'アカサタナハマヤラワ0123456789ABCDEF<>/{}[]=+()*'.split('');

  function sizeCanvas() {
    const rect = home.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    w = canvas.width;
    h = canvas.height;
    cols = Math.floor(w / 16);
    drops = Array(cols).fill(0);
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < drops.length; i++) {
      const t = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = 'rgba(79,209,255,.85)';
      ctx.font = '14px monospace';
      ctx.fillText(t, i * 16, drops[i] * 16);
      if (drops[i] * 16 > h && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  sizeCanvas();
  const ro = new ResizeObserver(sizeCanvas);
  ro.observe(home);
  window.addEventListener('resize', sizeCanvas);
  draw();
})();

// ===== Carousel / Modals =====
const slideData = {
  omcrm: {
    index: 0,
    images: ['omcrm.png', 'omcrm2.png', 'omcrm3.png'],
    intervalId: null
  },
  netvoice: {
    index: 0,
    images: ['nvproject.png', 'nvproject2.png', 'nvproject3.png'],
    intervalId: null
  },
  netsolar: {
    index: 0,
    images: ['nets.png', 'nets2.png', 'nets3.png'],
    intervalId: null
  },
  emailsms: {
    index: 0,
    images: ['emailsms.png', 'emailsms2.png', 'emailsms3.png'],
    intervalId: null
  },
  smswebapp: {
    index: 0,
    images: ['smswebapp.png', 'smswebapp2.png', 'smswebapp3.png'],
    intervalId: null
  },
  fuel: {
    index: 0,
    images: ['projectfuel1.png', 'projectfuel2.png', 'projectfuel3.png'],
    intervalId: null
  },
  smart: {
    index: 0,
    images: ['smart1.png', 'smart2.png', 'smart3.png'],
    intervalId: null
  },
  waltermart: {
    index: 0,
    images: ['walt.png', 'walt2.png'],
    intervalId: null
  }
};

function setThumbActive(id, idx) {
  document
    .querySelectorAll(`#modal-${id} .thumbs img`)
    .forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
}

function showSlide(id, idx, manual = false) {
  const data = slideData[id];
  data.index = idx;
  const main = document.getElementById(`main-slide-${id}`);
  if (main) main.src = data.images[idx];
  setThumbActive(id, idx);
  if (manual) resetAuto(id);
}

function changeSlide(id, dir) {
  const d = slideData[id],
    n = d.images.length;
  d.index = (d.index + dir + n) % n;
  showSlide(id, d.index);
}

function startAuto(id) {
  if (slideData[id].intervalId)
    clearInterval(slideData[id].intervalId);
  slideData[id].intervalId = setInterval(
    () => changeSlide(id, 1),
    5000
  );
}

function resetAuto(id) {
  clearInterval(slideData[id].intervalId);
  startAuto(id);
}

function openModal(id) {
  const m = document.getElementById('modal-' + id);
  if (!m) return;
  const c = m.querySelector('.modal-card');
  m.classList.remove('hidden');
  m.classList.add('flex');
  setTimeout(() => {
    c.classList.add('opacity-100', 'scale-100');
  }, 10);
  showSlide(id, 0, true);
  document.body.classList.add('overflow-hidden');
  startAuto(id);
}

function closeModal(id) {
  const m = document.getElementById('modal-' + id);
  if (!m) return;
  const c = m.querySelector('.modal-card');
  c.classList.remove('opacity-100', 'scale-100');
  setTimeout(() => {
    m.classList.add('hidden');
    m.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }, 250);
  clearInterval(slideData[id].intervalId);
}

window.openModal = openModal;
window.closeModal = closeModal;
window.showSlide = showSlide;

// ===== SKILLS CONSTELLATION =====
(function () {
  const canvas = document.getElementById('skillsConstellation');
  const section = document.getElementById('skills');
  if (!canvas || !section) return;
  const ctx = canvas.getContext('2d');
  let W, H,
    nodes = [],
    density = 0.00012;

  function isDark() {
    return document.documentElement.classList.contains('dark');
  }
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resize() {
    const rect = section.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    W = canvas.width;
    H = canvas.height;

    const target = Math.max(
      48,
      Math.min(120, Math.floor(W * H * density))
    );
    nodes = [];
    for (let i = 0; i < target; i++) {
      nodes.push({
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-0.1, 0.1),
        vy: rand(-0.1, 0.1),
        r: rand(isDark() ? 0.6 : 0.9, isDark() ? 1.2 : 1.4),
        a: rand(
          isDark() ? 0.3 : 0.55,
          isDark() ? 0.65 : 0.85
        )
      });
    }
  }

  function drawLinks(n1, n2, dist) {
    const maxDist = isDark() ? 130 : 170;
    if (dist > maxDist) return;
    const alpha =
      Math.max(0, 1 - dist / maxDist) *
      (isDark() ? 0.18 : 0.25);
    ctx.strokeStyle = isDark()
      ? `rgba(79,209,255,${alpha})`
      : `rgba(37,99,235,${alpha})`;
    ctx.lineWidth = isDark() ? 0.5 : 0.7;
    ctx.beginPath();
    ctx.moveTo(n1.x, n1.y);
    ctx.lineTo(n2.x, n2.y);
    ctx.stroke();
  }

  function step() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n1.x - n2.x,
          dy = n1.y - n2.y;
        const d = Math.hypot(dx, dy);
        drawLinks(n1, n2, d);
      }
    }
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark()
        ? `rgba(79,209,255,${n.a})`
        : `rgba(37,99,235,${Math.min(1, n.a)})`;
      ctx.fill();
    }
    requestAnimationFrame(step);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(section);
  window.addEventListener('resize', resize);

  const themeObserver = new MutationObserver(() => {
    resize();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });

  resize();
  step();
})();

// ===== Skills filter tabs =====
(function () {
  const tabs = document.querySelectorAll('.tab');
  const items = document.querySelectorAll('#skillsGrid > .card');

  function apply(filter) {
    items.forEach((el) => {
      const cat = el.getAttribute('data-cat');
      el.style.display =
        filter === 'all' || filter === cat ? '' : 'none';
    });
  }

  tabs.forEach((t) => {
    t.addEventListener('click', () => {
      tabs.forEach((x) => x.classList.remove('tab-active'));
      t.classList.add('tab-active');
      apply(t.getAttribute('data-skill-filter'));
    });
  });

  apply('all');
})();

// ===== Projects rail -> spotlight sync =====
(function () {
  const pills = document.querySelectorAll('[data-project-pill]');
  const panels = document.querySelectorAll('[data-project-panel]');
  if (!pills.length || !panels.length) return;

  function activate(id) {
    pills.forEach((p) => {
      const active = p.getAttribute('data-project-pill') === id;
      p.classList.toggle('project-pill-active', active);
    });
    panels.forEach((panel) => {
      const active =
        panel.getAttribute('data-project-panel') === id;
      panel.classList.toggle('spotlight-panel-active', active);
    });
  }

  pills.forEach((p) => {
    p.addEventListener('click', () =>
      activate(p.getAttribute('data-project-pill'))
    );
  });

  // default selection
  activate('omcrm');
})();
