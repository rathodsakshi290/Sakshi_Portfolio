/**
 * Sakshi Rathod - Portfolio Interactive Engine
 * Luxury Warm Brown & Beige Aesthetic, Micro-animations, Live Sandbox Charts & SQL Playground, Project Modals & Resume Viewer
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all core modules
  initTheme();
  initAudioFeedback();
  initCursor();
  initParticleCanvas();
  initTypewriter();
  renderStats();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducationCertifications();
  initSandboxCharts();
  initNavigation();
  initScrollReveal();
  initContactActions();
  initResumeModal();
  initKeyboardListeners();
  if (window.lucide) window.lucide.createIcons();
});

/* --------------------------------------------------------------------------
   1. Audio Micro-Interactions (Web Audio API Synthesizer)
   -------------------------------------------------------------------------- */
let audioEnabled = false;
let audioCtx = null;

function initAudioFeedback() {
  const audioBtn = document.getElementById("audio-toggle");
  if (!audioBtn) return;

  audioBtn.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    audioBtn.classList.toggle("active", audioEnabled);
    const icon = audioBtn.querySelector("i");
    if (icon) {
      icon.setAttribute("data-lucide", audioEnabled ? "volume-2" : "volume-x");
      if (window.lucide) window.lucide.createIcons();
    }
    if (audioEnabled) {
      playClickSound(580, 0.04);
      showToast("Audio feedback enabled", "check");
    } else {
      showToast("Audio feedback muted", "check");
    }
  });

  // Attach subtle feedback to buttons & links
  document.addEventListener("click", (e) => {
    if (!audioEnabled) return;
    const target = e.target.closest("button, a, .filter-btn, .sandbox-tab-btn, .sql-query-tab-btn");
    if (target) {
      playClickSound(720, 0.03);
    }
  });
}

function playClickSound(freq = 600, duration = 0.03) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio context fallback safely
  }
}

/* --------------------------------------------------------------------------
   2. Theme Management (Light Beige <-> Deep Espresso)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("sakshi-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("sakshi-theme", nextTheme);
    updateThemeIcon(nextTheme);

    // Refresh sandbox chart colors if active
    if (window.activeChartInstance) {
      updateChartColorsForTheme();
    }
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (!icon) return;
  if (theme === "dark") {
    icon.className = "lucide-sun";
    icon.setAttribute("data-lucide", "sun");
  } else {
    icon.className = "lucide-moon";
    icon.setAttribute("data-lucide", "moon");
  }
  if (window.lucide) window.lucide.createIcons();
}

/* --------------------------------------------------------------------------
   3. Smooth Magnetic Cursor / Amber Aura
   -------------------------------------------------------------------------- */
function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const aura = document.querySelector(".cursor-aura");
  if (!dot || !aura) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let auraX = mouseX;
  let auraY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateAura() {
    auraX += (mouseX - auraX) * 0.15;
    auraY += (mouseY - auraY) * 0.15;
    aura.style.transform = `translate(${auraX}px, ${auraY}px)`;
    requestAnimationFrame(animateAura);
  }
  animateAura();

  const interactiveElements = document.querySelectorAll("a, button, input, textarea, .glass-card, .project-card, .sandbox-tab-btn");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/* --------------------------------------------------------------------------
   4. Ambient Warm Particle Canvas
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.15,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const baseColor = isDark ? "201, 150, 111" : "166, 110, 70";

    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor}, ${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

/* --------------------------------------------------------------------------
   5. Hero Dynamic Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById("typewriter-role");
  if (!target) return;

  const roles = [
    "Data Analyst",
    "BI Developer",
    "Business Analyst",
    "SQL Developer",
    "AI/ML Engineer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   6. Render Quick Stats with Animated Counting
   -------------------------------------------------------------------------- */
function renderStats() {
  const container = document.getElementById("hero-stats-container");
  if (!container || !window.portfolioData) return;

  container.innerHTML = window.portfolioData.stats
    .map(
      (stat, index) => `
      <div class="mini-stat-card" data-stat-index="${index}">
        <div class="val" id="stat-val-${index}">0<span>${stat.suffix}</span></div>
        <div class="lbl">${stat.label}</div>
      </div>
    `
    )
    .join("");

  // Animated counters on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.portfolioData.stats.forEach((stat, idx) => {
            const el = document.getElementById(`stat-val-${idx}`);
            if (el && !el.dataset.animated) {
              el.dataset.animated = "true";
              animateValue(el, 0, stat.target, stat.isDecimal ? 1 : 0, stat.suffix, 1400);
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
}

function animateValue(obj, start, end, decimals, suffix, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = (easeProgress * (end - start) + start).toFixed(decimals);
    obj.innerHTML = `${currentVal}<span>${suffix}</span>`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/* --------------------------------------------------------------------------
   7. Render Experience & Internships Timeline
   -------------------------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById("experience-timeline-container");
  if (!container || !window.portfolioData) return;

  container.innerHTML = window.portfolioData.experience
    .map(
      (exp) => `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-card-header">
            <div>
              <h3 class="timeline-role-title">${exp.role}</h3>
              <div class="timeline-company">
                <i data-lucide="briefcase"></i>
                <span>${exp.company}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">(${exp.type})</span>
              </div>
            </div>
            <div class="timeline-period-badge">
              <i data-lucide="calendar" style="width: 13px; height: 13px; display: inline-block; vertical-align: -1px; margin-right: 4px;"></i>
              ${exp.period}
            </div>
          </div>

          <ul class="timeline-bullet-list">
            ${exp.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>

          <div class="timeline-skills-wrap">
            <span style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-right: 0.25rem;">Key Technologies:</span>
            ${exp.skillsUsed.map((skill) => `<span class="tech-tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

/* --------------------------------------------------------------------------
   8. Render Projects with Visual Thumbnails & Filter Mechanism
   -------------------------------------------------------------------------- */
let activeProjectCategory = "all";

function renderProjects() {
  const container = document.getElementById("projects-grid-container");
  if (!container || !window.portfolioData) return;

  const filtered = activeProjectCategory === "all"
    ? window.portfolioData.projects
    : window.portfolioData.projects.filter((p) => p.category === activeProjectCategory);

  container.innerHTML = filtered
    .map(
      (p) => `
      <div class="project-card glass-card reveal-on-scroll" data-category="${p.category}">
        ${
          p.image
            ? `
          <div class="project-img-wrapper">
            <img src="${p.image}" alt="${p.title}" class="project-img-thumb" loading="lazy" />
            <div class="project-img-overlay"></div>
          </div>
        `
            : ""
        }

        <div class="project-card-header">
          <span class="project-badge">
            <i data-lucide="${
              p.category === 'powerbi' 
                ? 'bar-chart-2' 
                : p.category === 'aiml' 
                ? 'zap' 
                : p.category === 'sql' 
                ? 'database' 
                : 'monitor'
            }"></i>
            ${p.categoryName}
          </span>
          <span class="project-year">${p.year}</span>
        </div>

        <h3 class="project-title">${p.title}</h3>
        <div class="project-tagline">${p.tagline}</div>
        <p class="project-summary">${p.summary}</p>

        <div class="project-metrics-strip">
          ${p.metrics
            .slice(0, 2)
            .map(
              (m) => `
              <div class="p-metric-item">
                <div class="p-lbl">${m.label}</div>
                <div class="p-val">${m.value}</div>
              </div>
            `
            )
            .join("")}
        </div>

        <div class="project-tags-list">
          ${p.tools.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>

        <div class="project-card-footer" style="flex-wrap: wrap; gap: 0.75rem;">
          <button class="project-action-btn" onclick="openProjectModal('${p.id}')">
            <span>Case Study & Details</span>
            <i data-lucide="arrow-right"></i>
          </button>
          
          <div style="display: flex; gap: 0.5rem; margin-left: auto;">
            ${
              p.githubUrl
                ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" title="View Source on GitHub">
                     <i data-lucide="github"></i> Code
                   </a>`
                : ""
            }
            ${
              p.liveUrl
                ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" title="Open Live App">
                     <i data-lucide="external-link"></i> Live
                   </a>`
                : ""
            }
          </div>
        </div>
      </div>
    `
    )
    .join("");

  // Setup filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeProjectCategory = btn.getAttribute("data-filter");
      renderProjects();
      initScrollReveal();
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

/* --------------------------------------------------------------------------
   9. Project Details Modal with Rich Banner
   -------------------------------------------------------------------------- */
window.openProjectModal = function (projectId) {
  const project = window.portfolioData.projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    ${
      project.image
        ? `
      <div class="project-img-wrapper" style="height: 260px; margin-bottom: 1.75rem;">
        <img src="${project.image}" alt="${project.title}" class="project-img-thumb" />
        <div class="project-img-overlay"></div>
      </div>
    `
        : ""
    }

    <div class="modal-badge-row">
      <span class="project-badge">${project.categoryName}</span>
      <span class="project-year" style="font-size: 0.95rem;">${project.year}</span>
    </div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-tagline">${project.tagline}</div>

    <div class="project-metrics-strip" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); margin-bottom: 1.5rem;">
      ${project.metrics
        .map(
          (m) => `
          <div class="p-metric-item">
            <div class="p-lbl">${m.label}</div>
            <div class="p-val">${m.value}</div>
          </div>
        `
        )
        .join("")}
    </div>

    <h4 class="modal-section-title">The Challenge / Business Problem</h4>
    <p class="modal-text">${project.details.problem}</p>

    <h4 class="modal-section-title">The Analytical & Technical Solution</h4>
    <p class="modal-text">${project.details.solution}</p>

    <h4 class="modal-section-title">Key Architectural Features</h4>
    <ul class="modal-features-list">
      ${project.details.keyFeatures.map((feat) => `<li>${feat}</li>`).join("")}
    </ul>

    <h4 class="modal-section-title" style="margin-top: 1.5rem;">Tools & Frameworks</h4>
    <div class="project-tags-list">
      ${project.tools.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
    </div>

    <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      ${
        project.githubUrl
          ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
               <i data-lucide="github"></i> View Source Code
             </a>`
          : ""
      }
      ${
        project.liveUrl
          ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
               <i data-lucide="external-link"></i> Launch Live Application
             </a>`
          : ""
      }
      <button class="btn btn-secondary" onclick="closeProjectModal()">
        Close
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
};

window.closeProjectModal = function () {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

/* --------------------------------------------------------------------------
   10. Render Skills & Competencies
   -------------------------------------------------------------------------- */
function renderSkills() {
  const progContainer = document.getElementById("skills-programming");
  const analyticsContainer = document.getElementById("skills-analytics");
  const dbContainer = document.getElementById("skills-db");
  const compContainer = document.getElementById("competencies-container");

  const s = window.portfolioData.skills;
  if (!s) return;

  function generateSkillRows(list) {
    return list
      .map(
        (item) => `
        <div class="skill-item-row">
          <div class="skill-info-top">
            <div class="skill-name">${item.name}</div>
            <div class="skill-tag-sub">${item.tag}</div>
            <div class="skill-percentage">${item.level}%</div>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" data-width="${item.level}%"></div>
          </div>
        </div>
      `
      )
      .join("");
  }

  if (progContainer) progContainer.innerHTML = generateSkillRows(s.programming);
  if (analyticsContainer) analyticsContainer.innerHTML = generateSkillRows(s.analytics);
  if (dbContainer) dbContainer.innerHTML = generateSkillRows(s.databaseTools);

  if (compContainer) {
    compContainer.innerHTML = s.competencies
      .map(
        (c) => `
        <div class="comp-card glass-card reveal-on-scroll">
          <div class="comp-icon"><i data-lucide="${c.icon}"></i></div>
          <h4>${c.title}</h4>
          <p>${c.desc}</p>
        </div>
      `
      )
      .join("");
  }

  // Animate skill bars when in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll(".skill-bar-fill");
          fills.forEach((f) => (f.style.width = f.getAttribute("data-width")));
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".skill-category-card").forEach((card) => observer.observe(card));
}

/* --------------------------------------------------------------------------
   11. Render Education & Certifications
   -------------------------------------------------------------------------- */
function renderEducationCertifications() {
  const eduContainer = document.getElementById("education-list-container");
  const certContainer = document.getElementById("certifications-list-container");
  if (!window.portfolioData) return;

  if (eduContainer) {
    eduContainer.innerHTML = window.portfolioData.education
      .map(
        (edu) => `
        <div class="edu-card glass-card reveal-on-scroll">
          <div class="edu-header">
            <div class="edu-institution">${edu.institution}</div>
            <div class="timeline-period-badge">${edu.period}</div>
          </div>
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-score-pill">${edu.grade}</div>
          <p class="edu-desc">${edu.highlights}</p>
        </div>
      `
      )
      .join("");
  }

  if (certContainer) {
    certContainer.innerHTML = window.portfolioData.certifications
      .map(
        (cert) => `
        <div class="cert-card glass-card reveal-on-scroll">
          <div class="cert-header">
            <div class="cert-title">${cert.title}</div>
            <span class="project-badge" style="background: var(--bg-secondary); font-size: 0.725rem;">${cert.badge}</span>
          </div>
          <div class="cert-issuer">${cert.issuer} • <span style="color: var(--text-muted);">${cert.year}</span></div>
          <p class="cert-desc">${cert.desc}</p>
        </div>
      `
      )
      .join("");
  }
}

/* --------------------------------------------------------------------------
   12. Interactive Live Data Analytics Sandbox & SQL/DAX Runner
   -------------------------------------------------------------------------- */
let activeChart = null;
let currentPresetKey = "metaAd";
let activePlaygroundIndex = 0;

function initSandboxCharts() {
  const tabs = document.querySelectorAll(".sandbox-tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const key = tab.getAttribute("data-preset");
      handleSandboxTabSwitch(key);
    });
  });

  // Initial render
  handleSandboxTabSwitch("metaAd");
}

function handleSandboxTabSwitch(key) {
  currentPresetKey = key;
  const chartCard = document.getElementById("sandbox-chart-view");
  const playgroundCard = document.getElementById("sandbox-playground-view");

  if (key === "sqlPlayground") {
    if (chartCard) chartCard.style.display = "none";
    if (playgroundCard) {
      playgroundCard.style.display = "flex";
      renderSQLPlayground();
    }
  } else {
    if (chartCard) chartCard.style.display = "flex";
    if (playgroundCard) playgroundCard.style.display = "none";
    renderSandboxChart(key);
  }
}

function renderSandboxChart(key) {
  const config = window.portfolioData.liveSandboxData[key];
  if (!config) return;

  const headerTitle = document.getElementById("sandbox-chart-title");
  const headerSub = document.getElementById("sandbox-chart-subtitle");
  if (headerTitle) headerTitle.textContent = config.title;
  if (headerSub) headerSub.textContent = config.subtitle;

  const ctx = document.getElementById("sandbox-canvas");
  if (!ctx) return;

  if (activeChart) {
    activeChart.destroy();
  }

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const gridColor = isDark ? "rgba(212, 195, 181, 0.08)" : "rgba(135, 110, 95, 0.12)";
  const textColor = isDark ? "#D4C3B5" : "#584437";

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: textColor,
          font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 }
        }
      },
      tooltip: {
        backgroundColor: isDark ? "#1E1510" : "#FAF6F0",
        titleColor: isDark ? "#FAF4ED" : "#231710",
        bodyColor: isDark ? "#D4C3B5" : "#584437",
        borderColor: isDark ? "#C9966F" : "#A66E46",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true
      }
    },
    scales:
      config.type === "radar"
        ? {
            r: {
              grid: { color: gridColor },
              angleLines: { color: gridColor },
              pointLabels: {
                color: textColor,
                font: { family: "'Plus Jakarta Sans', sans-serif", size: 11, weight: 600 }
              },
              ticks: { display: false }
            }
          }
        : {
            x: {
              grid: { color: gridColor },
              ticks: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 } }
            },
            y: {
              grid: { color: gridColor },
              ticks: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 } }
            }
          }
  };

  activeChart = new Chart(ctx, {
    type: config.type,
    data: {
      labels: config.labels,
      datasets: config.datasets
    },
    options: chartOptions
  });

  window.activeChartInstance = activeChart;
}

function renderSQLPlayground() {
  const container = document.getElementById("sandbox-playground-view");
  if (!container || !window.portfolioData.sqlDaxPlayground) return;

  const currentItem = window.portfolioData.sqlDaxPlayground[activePlaygroundIndex];
  if (!currentItem) return;

  container.innerHTML = `
    <div class="sandbox-header">
      <div class="sandbox-header-info">
        <h3>Live SQL &amp; DAX Query Playground</h3>
        <p>${currentItem.explanation}</p>
      </div>
      <span class="timeline-period-badge" style="background: var(--bg-card-solid);">
        <i data-lucide="terminal" style="width: 12px; height: 12px; display: inline-block;"></i> Real-Time Engine
      </span>
    </div>

    <div class="sql-query-tabs">
      ${window.portfolioData.sqlDaxPlayground
        .map(
          (item, idx) => `
        <button class="sql-query-tab-btn ${idx === activePlaygroundIndex ? "active" : ""}" onclick="switchPlaygroundTab(${idx})">
          <i data-lucide="${item.type.includes('SQL') ? 'database' : item.type.includes('DAX') ? 'bar-chart-2' : 'cpu'}"></i>
          <span>${item.badge}</span>
        </button>
      `
        )
        .join("")}
    </div>

    <div class="code-editor-wrapper">
      <div class="code-editor-header">
        <span class="code-editor-lang">${currentItem.type}</span>
        <button class="run-query-btn" id="run-playground-btn" onclick="executePlaygroundQuery()">
          <i data-lucide="play"></i>
          <span>Execute Query</span>
        </button>
      </div>
      <pre class="code-editor-code"><code id="playground-code-content">${escapeHtml(currentItem.code)}</code></pre>
    </div>

    <div class="query-results-box" id="query-results-display">
      <div class="query-results-meta">
        <span>Execution Status: <strong style="color: #38A169;">Success (200 OK)</strong></span>
        <span>Execution Time: <strong>${currentItem.executionTime}</strong></span>
      </div>

      <div class="playground-table-container">
        <table class="playground-table">
          <thead>
            <tr>
              ${currentItem.headers.map((h) => `<th>${h}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${currentItem.rows
              .map(
                (row) => `
              <tr>
                ${row.map((cell) => `<td>${cell}</td>`).join("")}
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.switchPlaygroundTab = function (idx) {
  activePlaygroundIndex = idx;
  renderSQLPlayground();
};

window.executePlaygroundQuery = function () {
  const btn = document.getElementById("run-playground-btn");
  const resultsBox = document.getElementById("query-results-display");
  if (!btn || !resultsBox) return;

  btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> <span>Running...</span>`;
  btn.disabled = true;
  resultsBox.style.opacity = "0.4";

  setTimeout(() => {
    btn.innerHTML = `<i data-lucide="check"></i> <span>Completed</span>`;
    resultsBox.style.opacity = "1";
    showToast("Query executed successfully against live dataset!", "check");
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      btn.innerHTML = `<i data-lucide="play"></i> <span>Execute Query</span>`;
      btn.disabled = false;
      if (window.lucide) window.lucide.createIcons();
    }, 1500);
  }, 400);
};

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function updateChartColorsForTheme() {
  if (currentPresetKey && currentPresetKey !== "sqlPlayground") {
    renderSandboxChart(currentPresetKey);
  }
}

/* --------------------------------------------------------------------------
   13. Executive Resume Modal & Printing Support
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById("resume-modal");
  const openBtns = document.querySelectorAll(".open-resume-btn");
  if (!modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });
}

window.openResumeModal = function () {
  const modal = document.getElementById("resume-modal");
  const modalBody = document.getElementById("resume-modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="resume-header-actions">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="timeline-period-badge" style="background: var(--bg-card-solid);">
          <i data-lucide="file-text" style="width: 13px; height: 13px; display: inline-block;"></i> Official Resume &bull; Sakshi Rathod
        </span>
      </div>
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        <a href="assets/Sakshi_Rathod_Resume.pdf" download="Sakshi_Rathod_Resume.pdf" class="btn btn-sm btn-primary" title="Download exact original PDF">
          <i data-lucide="download"></i> Download PDF
        </a>
        <a href="assets/Sakshi_Rathod_Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" title="Open PDF in new tab">
          <i data-lucide="external-link"></i> Open Fullscreen
        </a>
        <button class="btn btn-sm btn-secondary" onclick="closeResumeModal()">
          <i data-lucide="x"></i> Close
        </button>
      </div>
    </div>

    <div class="resume-pdf-wrapper">
      <iframe src="assets/Sakshi_Rathod_Resume.pdf#toolbar=1&navpanes=0" class="resume-pdf-frame" title="Sakshi Rathod Original Resume"></iframe>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
};

window.closeResumeModal = function () {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

/* --------------------------------------------------------------------------
   14. Navigation, Mobile Menu & ScrollSpy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveNavLink();
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 200;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}

/* --------------------------------------------------------------------------
   15. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   16. Keyboard Listeners (Escape to close modals)
   -------------------------------------------------------------------------- */
function initKeyboardListeners() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeResumeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   17. Contact Form, Email Copy & Toast Notifications
   -------------------------------------------------------------------------- */
function initContactActions() {
  // Direct Email Copy
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "rathodsakshi290@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied to clipboard!", "check");
        copyBtn.textContent = "Copied ✓";
        setTimeout(() => (copyBtn.textContent = "Copy Email"), 2500);
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const email = document.getElementById("form-email").value;
      const subject = document.getElementById("form-subject").value;
      const message = document.getElementById("form-message").value;

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.", "alert-circle");
        return;
      }

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `Sending Note...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast(`Thank you, ${name}! Your message has been prepared for Sakshi.`, "check");
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
}

function showToast(message, iconType = "check") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="${iconType === 'check' ? 'check-circle' : 'alert-circle'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
