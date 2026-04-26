/* ==========================================================
   script.js — Assignment 4 (builds on A1, A2, A3)
   Author: Firas Almashama
   ----------------------------------------------------------
   Sections in this file:
     1.  Nav toggle (mobile)
     2.  Theme toggle (light/dark, persisted)
     3.  Mood theme presets (A4)
     4.  Time-based greeting
     5.  Visitor name (localStorage)
     6.  Visit timer (counter)
     7.  Section show/hide (collapsible)
     8.  Hero typing animation (A4)
     9.  Animated stat counters (A4)
     10. Skills with progress bars (A4)
     11. Timeline rendering (A4)
     12. Projects: data, render, filter, search, sort
     13. GitHub repos API (A3)
     14. Blog: data, render, modal (A4)
     15. Fun Fact API (A2)
     16. Form validation (multi-step)
     17. Scroll progress bar + back-to-top (A4)
     18. Fade-in IntersectionObserver
     19. AI Chatbot widget (A4)
     20. Footer year
   ========================================================== */


/* ==========================================================
   1. NAV TOGGLE (mobile)
   ========================================================== */
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});


/* ==========================================================
   2. THEME TOGGLE (localStorage)
   ========================================================== */
const themeToggle = document.querySelector(".theme-toggle");

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

loadTheme();


/* ==========================================================
   3. A4: MOOD THEME PRESETS (localStorage)
   Applies a [data-mood] attribute to <html> which overrides
   --accent and --accent-2 via CSS variables.
   ========================================================== */
const moodButtons = document.querySelectorAll(".mood-btn");

function setActiveMood(mood) {
  moodButtons.forEach((b) => {
    b.classList.toggle("active", b.dataset.mood === mood);
  });
  if (mood && mood !== "default") {
    document.documentElement.setAttribute("data-mood", mood);
  } else {
    document.documentElement.removeAttribute("data-mood");
  }
}

function loadMood() {
  const savedMood = localStorage.getItem("mood") || "default";
  setActiveMood(savedMood);
}

moodButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mood = btn.dataset.mood;
    localStorage.setItem("mood", mood);
    setActiveMood(mood);
  });
});

loadMood();


/* ==========================================================
   4. TIME-BASED GREETING
   ========================================================== */
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greetingEl.textContent = "Good morning!";
else if (hour < 18) greetingEl.textContent = "Good afternoon!";
else greetingEl.textContent = "Good evening!";


/* ==========================================================
   5. A3: VISITOR NAME (localStorage)
   ========================================================== */
const visitorPrompt = document.getElementById("visitorPrompt");
const visitorGreeting = document.getElementById("visitorGreeting");
const visitorGreetingText = document.getElementById("visitorGreetingText");
const visitorNameInput = document.getElementById("visitorNameInput");
const visitorNameSave = document.getElementById("visitorNameSave");
const visitorNameClear = document.getElementById("visitorNameClear");

function loadVisitorName() {
  const savedName = localStorage.getItem("visitorName");
  if (savedName) {
    visitorPrompt.hidden = true;
    visitorGreeting.hidden = false;
    visitorGreetingText.textContent = `Welcome back, ${savedName}! 👋`;
  } else {
    visitorPrompt.hidden = false;
    visitorGreeting.hidden = true;
  }
}

visitorNameSave.addEventListener("click", () => {
  const name = visitorNameInput.value.trim();
  if (name.length === 0) return;
  // Basic sanitization: limit length & strip angle brackets
  const cleanName = name.replace(/[<>]/g, "").slice(0, 30);
  localStorage.setItem("visitorName", cleanName);
  loadVisitorName();
});

visitorNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") visitorNameSave.click();
});

visitorNameClear.addEventListener("click", () => {
  localStorage.removeItem("visitorName");
  visitorNameInput.value = "";
  loadVisitorName();
});

loadVisitorName();


/* ==========================================================
   6. A3: SITE VISIT TIMER
   ========================================================== */
const timerDisplay = document.getElementById("visitTimerDisplay");
let visitSeconds = 0;

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}m ${secs}s`;
}

setInterval(() => {
  visitSeconds++;
  timerDisplay.textContent = formatTime(visitSeconds);
}, 1000);


/* ==========================================================
   7. SECTION SHOW/HIDE (collapsible)
   ========================================================== */
document.querySelectorAll(".toggle-section-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    if (!target) return;

    const isVisible = !target.hidden;
    target.hidden = isVisible;
    btn.setAttribute("aria-expanded", String(!isVisible));
    btn.textContent = isVisible ? "Show Section" : "Hide Section";
  });
});


/* ==========================================================
   8. A4: HERO TYPING ANIMATION
   Cycles through several phrases.
   ========================================================== */
const typedTextEl = document.getElementById("typedText");
const typedPhrases = [
  "responsive websites.",
  "interactive web apps.",
  "clean, accessible UIs.",
  "things I'd want to use myself.",
];

let typedPhraseIdx = 0;
let typedCharIdx = 0;
let typedDeleting = false;

function typeLoop() {
  const current = typedPhrases[typedPhraseIdx];

  if (!typedDeleting) {
    typedTextEl.textContent = current.slice(0, typedCharIdx + 1);
    typedCharIdx++;

    if (typedCharIdx === current.length) {
      typedDeleting = true;
      setTimeout(typeLoop, 1500); // pause at full word
      return;
    }
  } else {
    typedTextEl.textContent = current.slice(0, typedCharIdx - 1);
    typedCharIdx--;

    if (typedCharIdx === 0) {
      typedDeleting = false;
      typedPhraseIdx = (typedPhraseIdx + 1) % typedPhrases.length;
    }
  }

  setTimeout(typeLoop, typedDeleting ? 35 : 70);
}

// Respect reduced motion: just show first phrase, no loop
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  typedTextEl.textContent = typedPhrases[0];
} else {
  typeLoop();
}


/* ==========================================================
   9. A4: ANIMATED STAT COUNTERS
   Counts up from 0 to data-count when the section enters view.
   ========================================================== */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  const suffix = el.dataset.suffix || "";
  const duration = 1200; // ms
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic for a nicer feel
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;

    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat__num").forEach((el) => statsObserver.observe(el));


/* ==========================================================
   10. A4: SKILLS WITH PROGRESS BARS
   Bars animate from 0% -> target% on scroll into view.
   ========================================================== */
const skills = [
  { name: "HTML5",             icon: "🧱", level: 90 },
  { name: "CSS3",              icon: "🎨", level: 85 },
  { name: "JavaScript",        icon: "⚡", level: 78 },
  { name: "Responsive Design", icon: "📱", level: 82 },
  { name: "DOM & Events",      icon: "🖱️", level: 80 },
  { name: "Fetch API & JSON",  icon: "🌐", level: 72 },
  { name: "Git & GitHub",      icon: "🐙", level: 70 },
  { name: "AI Tools (prompting)", icon: "🤖", level: 75 },
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach((skill) => {
  const card = document.createElement("div");
  card.className = "skill fade-in";
  card.innerHTML = `
    <div class="skill__head">
      <span class="skill__name">
        <span class="skill__icon" aria-hidden="true">${skill.icon}</span>
        ${skill.name}
      </span>
      <span class="skill__pct">${skill.level}%</span>
    </div>
    <div class="skill__bar" role="progressbar"
         aria-valuemin="0" aria-valuemax="100" aria-valuenow="${skill.level}"
         aria-label="${skill.name} skill level">
      <div class="skill__fill" data-level="${skill.level}"></div>
    </div>
  `;
  skillsGrid.appendChild(card);
});

// Animate fills on scroll into view
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector(".skill__fill");
        if (fill) fill.style.width = fill.dataset.level + "%";
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

skillsGrid.querySelectorAll(".skill").forEach((el) => skillObserver.observe(el));


/* ==========================================================
   11. A4: TIMELINE
   ========================================================== */
const timelineData = [
  {
    year: "2022",
    title: "Started university",
    desc: "Joined KFUPM and began my journey into computing.",
    current: false,
  },
  {
    year: "2023",
    title: "First HTML & CSS projects",
    desc: "Built static pages and learned the fundamentals of layout, typography, and responsive design.",
    current: false,
  },
  {
    year: "2024",
    title: "Picked up JavaScript",
    desc: "Started building interactive features — DOM manipulation, events, fetch APIs.",
    current: false,
  },
  {
    year: "2025",
    title: "Portfolio v1, v2 and v3",
    desc: "Built three iterations of this portfolio across course assignments — adding API integration, state management, and performance optimizations along the way.",
    current: false,
  },
  {
    year: "2026",
    title: "Polished portfolio — Assignment 4",
    desc: "Where you are now. Skills bars, blog, AI assistant, mood themes, and a lot of polish.",
    current: true,
  },
  {
    year: "Next",
    title: "Internships & full-stack",
    desc: "Looking for opportunities to apply these skills, and learning a backend framework next.",
    current: false,
  },
];

const timelineList = document.getElementById("timelineList");

timelineData.forEach((item) => {
  const li = document.createElement("li");
  li.className = "timeline__item fade-in" + (item.current ? " timeline__item--current" : "");
  li.innerHTML = `
    <span class="timeline__year">${item.year}</span>
    <h3 class="timeline__title">${item.title}</h3>
    <p class="timeline__desc">${item.desc}</p>
  `;
  timelineList.appendChild(li);
});


/* ==========================================================
   12. PROJECTS — data + render + filter + search + sort
   ========================================================== */
const projects = [
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio built with HTML, CSS, and JavaScript.",
    tags: ["html", "css", "responsive"],
    date: "2025-12-01",
    img: "assets/images/project1.png",
    live: "#home",
    code: "https://github.com/FirasKF",
  },
  {
    title: "Task Manager",
    desc: "Simple JavaScript app to manage tasks with localStorage.",
    tags: ["javascript"],
    date: "2026-01-15",
    img: "assets/images/project2.png",
    live: "#",
    code: "https://github.com/FirasKF",
  },
  {
    title: "Landing Page",
    desc: "Modern responsive landing page design.",
    tags: ["html", "css", "responsive"],
    date: "2026-03-10",
    img: "assets/images/project3.png",
    live: "#",
    code: "https://github.com/FirasKF",
  },
];

const projectsContainer = document.getElementById("projectsContainer");
const searchInput = document.getElementById("projectSearch");
const sortSelect = document.getElementById("projectSort");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyMsg = document.getElementById("noProjectsMsg");

let currentFilter = "all";

/** Debounce utility — prevents rapid-fire calls during typing */
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function renderProjects() {
  const searchValue = searchInput.value.toLowerCase();
  const sortValue = sortSelect.value;

  // Filter
  let filtered = projects.filter((project) => {
    const matchesFilter =
      currentFilter === "all" || project.tags.includes(currentFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchValue) ||
      project.desc.toLowerCase().includes(searchValue);
    return matchesFilter && matchesSearch;
  });

  // Sort
  switch (sortValue) {
    case "name-az":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-za":
      filtered.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "date-newest":
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "date-oldest":
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    default:
      break;
  }

  // Render
  projectsContainer.innerHTML = "";

  if (filtered.length === 0) {
    emptyMsg.textContent = "No projects found.";
    emptyMsg.classList.add("visible");
    return;
  }

  emptyMsg.textContent = "";
  emptyMsg.classList.remove("visible");

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project fade-in";

    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="project__img" loading="lazy" />
      <div class="project__body">
        <h3 class="project__title">${project.title}</h3>
        <p class="project__desc">${project.desc}</p>
        <time class="project__date" datetime="${project.date}">
          ${new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
        </time>
        <ul class="project__tags">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <div class="project__links">
          <a href="${project.live}" class="link">Live</a>
          <a href="${project.code}" target="_blank" rel="noreferrer" class="link">Code</a>
        </div>
      </div>
    `;

    projectsContainer.appendChild(card);
  });

  // Re-observe new fade-in elements
  document.querySelectorAll(".project.fade-in:not(.is-visible)").forEach((el) => {
    observer.observe(el);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

searchInput.addEventListener("input", debounce(renderProjects, 300));
sortSelect.addEventListener("change", renderProjects);

renderProjects();


/* ==========================================================
   13. A3: GITHUB REPOS API
   ========================================================== */
const ghContainer = document.getElementById("ghReposContainer");
const ghLoading = document.getElementById("ghLoading");
const ghError = document.getElementById("ghError");

async function fetchGitHubRepos() {
  ghLoading.classList.add("visible");
  ghError.textContent = "";
  ghError.classList.remove("visible");
  ghContainer.innerHTML = "";

  try {
    const res = await fetch(
      "https://api.github.com/users/FirasKF/repos?sort=updated&per_page=6"
    );

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const repos = await res.json();

    if (repos.length === 0) {
      ghError.textContent = "No public repositories found.";
      ghError.classList.add("visible");
      return;
    }

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "card fade-in";

      // Format updated date nicely
      const updated = new Date(repo.updated_at).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric",
      });

      card.innerHTML = `
        <h3 class="card__title">
          <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="link">${repo.name}</a>
        </h3>
        <p class="card__text">${repo.description || "No description available."}</p>
        <ul class="card__meta">
          ${repo.language ? `<li>🟢 ${repo.language}</li>` : ""}
          <li>⭐ ${repo.stargazers_count}</li>
          <li>🍴 ${repo.forks_count}</li>
          <li>📅 ${updated}</li>
        </ul>
      `;

      ghContainer.appendChild(card);
    });

    ghContainer.querySelectorAll(".fade-in:not(.is-visible)").forEach((el) => {
      observer.observe(el);
    });
  } catch (error) {
    ghError.textContent = "Unable to load repositories. Please try again later.";
    ghError.classList.add("visible");
    console.error("GitHub API fetch failed:", error);
  } finally {
    ghLoading.classList.remove("visible");
  }
}

fetchGitHubRepos();


/* ==========================================================
   14. A4: BLOG / ARTICLES
   Each post has a short excerpt and a longer body shown in a
   modal when clicked.
   ========================================================== */
const blogPosts = [
  {
    id: "post1",
    tag: "Learning",
    title: "Why I Rebuilt My Portfolio Three Times",
    excerpt:
      "Each version of this site taught me something different — semantics, then interactivity, then APIs. Here's what each one taught me.",
    date: "2026-04-01",
    minutes: 3,
    body: `
      <p>When I started Assignment 1, I thought a portfolio was just an HTML page with my name on it.
      I was wrong, but in a useful way.</p>

      <h3>Version 1 — Structure</h3>
      <p>The first version forced me to think about <em>semantic HTML</em>. What's a heading really for?
      What does <code>&lt;article&gt;</code> mean compared to <code>&lt;div&gt;</code>?
      I learned that good structure makes everything else easier — styling, accessibility, maintenance.</p>

      <h3>Version 2 — Interactivity</h3>
      <p>Adding JavaScript changed how I thought about the site. Suddenly I had filters, search, a contact form,
      and a fun-fact API. The site became a small <em>application</em> rather than a document.</p>

      <h3>Version 3 — State and APIs</h3>
      <p>This is when things clicked. <code>localStorage</code> meant the site could remember the visitor.
      The GitHub API meant the site could update itself without me editing files.
      Debouncing the search input taught me about <em>performance as a feature</em>.</p>

      <h3>Version 4 — Polish</h3>
      <p>And here we are. The lesson from version 4 is that the last 20% of polish — animations, edge cases,
      empty states, error messages — is what separates a project from a product.</p>
    `,
  },
  {
    id: "post2",
    tag: "Tools",
    title: "Working With AI Assistants Without Losing Your Skills",
    excerpt:
      "AI tools sped me up, but only when I treated them as collaborators rather than autocomplete. Here's the workflow I landed on.",
    date: "2026-04-08",
    minutes: 4,
    body: `
      <p>I used AI assistants throughout this project — for code review, debugging, and explaining unfamiliar concepts
      like <code>IntersectionObserver</code> and async/await error patterns.</p>

      <h3>What worked</h3>
      <ul>
        <li><strong>Asking "why" before "what."</strong> Before pasting code, I asked the AI to explain a concept first.</li>
        <li><strong>Reading every line.</strong> If I couldn't justify a line in code review, I rewrote it.</li>
        <li><strong>Using AI as a rubber duck.</strong> Often just typing out the problem made me see the answer myself.</li>
      </ul>

      <h3>What didn't</h3>
      <ul>
        <li>Accepting whole files without reading them. Always introduced bugs.</li>
        <li>Not noticing when the AI used variable names that didn't match my codebase.</li>
        <li>Trusting AI on niche browser quirks — those need a real test.</li>
      </ul>

      <p>The mental model I ended up with: AI is a fast, patient junior pair-programmer.
      It speeds me up, but I'm still the one shipping the code.</p>
    `,
  },
  {
    id: "post3",
    tag: "Design",
    title: "Dark Mode That Doesn't Hurt",
    excerpt:
      "A surprising amount of work goes into a theme toggle that actually feels good. CSS variables, system preferences, and the bits that always trip me up.",
    date: "2026-04-15",
    minutes: 3,
    body: `
      <p>Adding a dark mode looks simple — flip a class, swap a few colors. In practice, there's more.</p>

      <h3>Use CSS custom properties</h3>
      <p>Define your colors as CSS variables on <code>:root</code>, then override them inside
      <code>[data-theme="light"]</code>. Components don't need to know which theme is active — they just use
      <code>var(--text)</code> and <code>var(--bg)</code>.</p>

      <h3>Persist the choice</h3>
      <p><code>localStorage</code> is enough for this. Read it on page load <em>before</em> the first paint to
      avoid the dreaded "flash of wrong theme."</p>

      <h3>Don't forget about borders and shadows</h3>
      <p>Shadows that look great on dark backgrounds disappear on light ones. Use semi-transparent borders
      (<code>rgba</code>) so they adapt naturally to whichever surface they're on.</p>

      <h3>Bonus: mood presets</h3>
      <p>Once you have a theme system, layering accent-color presets ("Sunset", "Ocean", "Forest") on top of it
      is a one-line change per mood. It costs almost nothing and feels delightful — try it on this page.</p>
    `,
  },
];

const blogGrid = document.getElementById("blogGrid");

blogPosts.forEach((post) => {
  const card = document.createElement("article");
  card.className = "blog-card fade-in";
  card.tabIndex = 0; // keyboard focusable
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open blog post: ${post.title}`);

  const dateStr = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });

  card.innerHTML = `
    <span class="blog-card__tag">${post.tag}</span>
    <h3 class="blog-card__title">${post.title}</h3>
    <p class="blog-card__excerpt">${post.excerpt}</p>
    <div class="blog-card__meta">
      <span>${dateStr} • ${post.minutes} min read</span>
      <span class="blog-card__readmore">Read →</span>
    </div>
  `;

  card.addEventListener("click", () => openBlogModal(post));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openBlogModal(post);
    }
  });

  blogGrid.appendChild(card);
});

/** Build the blog modal lazily on first open */
let blogModal = null;

function buildBlogModal() {
  blogModal = document.createElement("div");
  blogModal.className = "blog-modal";
  blogModal.setAttribute("role", "dialog");
  blogModal.setAttribute("aria-modal", "true");
  blogModal.innerHTML = `
    <div class="blog-modal__inner" role="document">
      <button class="blog-modal__close" aria-label="Close">&times;</button>
      <div class="blog-modal__content"></div>
    </div>
  `;
  document.body.appendChild(blogModal);

  // Close handlers
  blogModal.addEventListener("click", (e) => {
    if (e.target === blogModal) closeBlogModal();
  });
  blogModal.querySelector(".blog-modal__close").addEventListener("click", closeBlogModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && blogModal.classList.contains("visible")) closeBlogModal();
  });
}

function openBlogModal(post) {
  if (!blogModal) buildBlogModal();
  const dateStr = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
  blogModal.querySelector(".blog-modal__content").innerHTML = `
    <span class="blog-card__tag">${post.tag}</span>
    <h2>${post.title}</h2>
    <p class="blog-modal__meta">${dateStr} • ${post.minutes} min read</p>
    ${post.body}
  `;
  blogModal.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  if (!blogModal) return;
  blogModal.classList.remove("visible");
  document.body.style.overflow = "";
}


/* ==========================================================
   15. FUN FACT API (A2)
   ========================================================== */
const factBtn = document.getElementById("funFactBtn");
const factText = document.getElementById("funFactText");
const factLoading = document.getElementById("funFactLoading");
const factError = document.getElementById("funFactError");

factBtn.addEventListener("click", async () => {
  factLoading.classList.add("visible");
  factError.classList.remove("visible");
  factText.textContent = "";

  try {
    const res = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    if (!res.ok) throw new Error("Failed");
    const data = await res.json();
    factText.textContent = data.text;
  } catch (error) {
    factError.textContent = "Failed to load fact. Try again.";
    factError.classList.add("visible");
  } finally {
    factLoading.classList.remove("visible");
  }
});


/* ==========================================================
   16. FORM VALIDATION (multi-step)
   ========================================================== */
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("contactName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formStatus = document.getElementById("formStatus");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateField(input, errorEl, checks) {
  for (const check of checks) {
    if (!check.test()) {
      errorEl.textContent = check.msg;
      input.classList.add("input--invalid");
      return false;
    }
  }
  errorEl.textContent = "";
  input.classList.remove("input--invalid");
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formStatus.textContent = "";
  formStatus.className = "form__status";

  const isNameValid = validateField(nameInput, nameError, [
    { test: () => nameInput.value.trim() !== "", msg: "Please enter your name." },
    { test: () => nameInput.value.trim().length >= 2, msg: "Name must be at least 2 characters." },
  ]);

  const isEmailValid = validateField(emailInput, emailError, [
    { test: () => emailInput.value.trim() !== "", msg: "Please enter your email." },
    { test: () => validateEmail(emailInput.value), msg: "Enter a valid email address." },
  ]);

  const isMessageValid = validateField(messageInput, messageError, [
    { test: () => messageInput.value.trim() !== "", msg: "Please enter a message." },
    { test: () => messageInput.value.trim().length >= 10, msg: "Message must be at least 10 characters." },
  ]);

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    formStatus.textContent = "Please fix the errors above and try again.";
    formStatus.className = "form__status error";
    return;
  }

  formStatus.textContent = "Message sent successfully!";
  formStatus.className = "form__status success";
  form.reset();
});


/* ==========================================================
   17. A4: SCROLL PROGRESS BAR + BACK-TO-TOP
   ========================================================== */
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + "%";

  // Back-to-top visibility
  if (scrollTop > 500) {
    backToTop.hidden = false;
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}

window.addEventListener("scroll", onScroll, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

onScroll();


/* ==========================================================
   18. FADE-IN ON SCROLL (IntersectionObserver)
   ========================================================== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));


/* ==========================================================
   19. A4: AI CHATBOT WIDGET
   A simple keyword-based assistant that answers questions
   about Firas's portfolio. Not connected to a real AI service —
   it's a small NLP engine using keyword matching + scoring.
   ========================================================== */

// Knowledge base — each entry has keywords and a response.
// Order matters slightly: more specific entries should come first.
const chatbotKB = [
  {
    keywords: ["hi", "hello", "hey", "salaam", "hola"],
    reply: () => "Hey! 👋 I can answer questions about Firas — his projects, skills, contact info, or this site. What would you like to know?",
  },
  {
    keywords: ["who", "about", "yourself", "firas"],
    reply: () => "Firas Almashama is a software engineering student based in Saudi Arabia. He focuses on front-end web development and is exploring AI tools as part of his workflow.",
  },
  {
    keywords: ["skill", "tech", "stack", "language", "know"],
    reply: () => {
      const top = skills.slice(0, 4).map((s) => `${s.name} (${s.level}%)`).join(", ");
      return `Firas's main skills: ${top}, plus DOM & events, Fetch API, Git, and AI tooling. You can see the full list with progress bars in the Skills section. ✨`;
    },
  },
  {
    keywords: ["project", "portfolio", "work", "build", "made"],
    reply: () => {
      const list = projects.map((p) => `• ${p.title}`).join("\n");
      return `Here are his current projects:\n${list}\n\nUse the filter and sort controls in the Projects section to explore them.`;
    },
  },
  {
    keywords: ["github", "repo", "code", "source"],
    reply: () => "His GitHub username is FirasKF. The site fetches his latest public repos live via the GitHub API — scroll to the 'My GitHub Repositories' section to see them.",
  },
  {
    keywords: ["contact", "email", "reach", "message", "hire"],
    reply: () => "You can reach Firas at s202263160@kfupm.edu.sa, on LinkedIn (firasalmashama), or via the contact form lower on the page.",
  },
  {
    keywords: ["resume", "cv", "download"],
    reply: () => "There's a Resume button in the hero section — it opens a printable resume page you can save as PDF (Cmd/Ctrl+P).",
  },
  {
    keywords: ["theme", "dark", "light", "mode", "color"],
    reply: () => "Use the 'Theme' button in the nav to switch between dark and light. For accent colors, try the Mood Playground further down — Sunset, Ocean, Forest, Rose, or Mono. Your choice is saved for next visit.",
  },
  {
    keywords: ["mood", "playground", "preset"],
    reply: () => "The Mood Playground lets you recolor the whole site by picking a vibe. It's powered by CSS custom properties — flipping a single attribute on <html> swaps the accent gradient everywhere.",
  },
  {
    keywords: ["blog", "article", "read", "post"],
    reply: () => "The Blog section has three short posts about how this portfolio was built — covering the redesign journey, working with AI tools, and dark mode tips. Click any card to read.",
  },
  {
    keywords: ["timeline", "journey", "history"],
    reply: () => "The Timeline section walks through Firas's path — from starting university in 2022 to this polished portfolio in 2026, plus what's next.",
  },
  {
    keywords: ["fact", "fun"],
    reply: () => "There's a Random Fun Fact section that pulls a useless-but-fun fact from a public API. Try it!",
  },
  {
    keywords: ["how", "built", "made", "tech", "stack"],
    reply: () => "This site is built with plain HTML, CSS, and JavaScript — no frameworks. It uses CSS variables for theming, IntersectionObserver for scroll animations, the Fetch API for live GitHub data, and localStorage for state (theme, visitor name, mood).",
  },
  {
    keywords: ["ai", "tool", "claude", "chatgpt", "copilot"],
    reply: () => "Firas used AI assistants for code review, debugging, and explaining concepts. The full breakdown is in docs/ai-usage-report.md in the repo.",
  },
  {
    keywords: ["thanks", "thank", "thx"],
    reply: () => "You're welcome! 🙌 Anything else you'd like to know?",
  },
  {
    keywords: ["bye", "goodbye", "see ya"],
    reply: () => "Bye! 👋 Thanks for stopping by Firas's portfolio.",
  },
];

const suggestionChips = [
  "Who is Firas?",
  "What are his skills?",
  "Show his projects",
  "How was this built?",
  "How do I contact him?",
];

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotPanel = document.getElementById("chatbotPanel");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSuggestions = document.getElementById("chatbotSuggestions");

let chatbotInitialized = false;

function openChatbot() {
  chatbotPanel.hidden = false;
  chatbotToggle.classList.add("is-open");
  chatbotToggle.setAttribute("aria-expanded", "true");
  if (!chatbotInitialized) {
    initChatbot();
    chatbotInitialized = true;
  }
  setTimeout(() => chatbotInput.focus(), 100);
}

function closeChatbot() {
  chatbotPanel.hidden = true;
  chatbotToggle.classList.remove("is-open");
  chatbotToggle.setAttribute("aria-expanded", "false");
}

chatbotToggle.addEventListener("click", () => {
  if (chatbotPanel.hidden) openChatbot();
  else closeChatbot();
});

chatbotClose.addEventListener("click", closeChatbot);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !chatbotPanel.hidden) closeChatbot();
});

function initChatbot() {
  // Suggestion chips
  suggestionChips.forEach((text) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chatbot__chip";
    chip.textContent = text;
    chip.addEventListener("click", () => handleUserMessage(text));
    chatbotSuggestions.appendChild(chip);
  });

  // Initial bot message — uses visitor name if saved
  const visitorName = localStorage.getItem("visitorName");
  const greet = visitorName
    ? `Hi ${visitorName}! 👋 I'm a small assistant that knows about Firas's portfolio. Ask me anything — or tap a suggestion below.`
    : `Hi! 👋 I'm a small assistant that knows about Firas's portfolio. Ask me anything — or tap a suggestion below.`;
  appendMessage(greet, "bot");
}

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `chatbot__msg chatbot__msg--${sender}`;
  // Preserve newlines in bot replies
  msg.innerHTML = text.replace(/\n/g, "<br>");
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function appendTyping() {
  const msg = document.createElement("div");
  msg.className = "chatbot__msg chatbot__msg--bot chatbot__msg--typing";
  msg.id = "typingIndicator";
  msg.innerHTML = "<span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}

/** Score-based intent matching — counts keyword hits per entry */
function findBestReply(userText) {
  const text = userText.toLowerCase();
  let bestEntry = null;
  let bestScore = 0;

  for (const entry of chatbotKB) {
    let score = 0;
    for (const kw of entry.keywords) {
      // Use word boundary so "hi" doesn't match inside "this"
      const re = new RegExp("\\b" + kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
      if (re.test(text)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestScore === 0) {
    return `I'm not sure I understood that. 🤔 Try asking about Firas's <strong>skills</strong>, <strong>projects</strong>, <strong>contact info</strong>, or <strong>how this site was built</strong>.`;
  }
  return bestEntry.reply();
}

function handleUserMessage(text) {
  const clean = text.trim();
  if (!clean) return;
  appendMessage(clean, "user");
  chatbotInput.value = "";

  appendTyping();
  // Small delay to feel like the assistant is "thinking"
  setTimeout(() => {
    removeTyping();
    const reply = findBestReply(clean);
    appendMessage(reply, "bot");
  }, 500 + Math.random() * 400);
}

chatbotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleUserMessage(chatbotInput.value);
});


/* ==========================================================
   20. FOOTER YEAR
   ========================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
