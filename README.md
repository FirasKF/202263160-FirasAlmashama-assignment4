# Assignment 4 — Personal Web Application

> **Course:** Web Development  
> **Student:** Firas Almashama  &nbsp;•&nbsp; **ID:** 202263160  
> **Repo:** `202263160-FirasAlmashama-assignment4`

This is the final iteration of my personal portfolio website. It builds directly on Assignments 1, 2, and 3, adding new sections, polish, and a small AI-style assistant — bringing everything together as a complete, deployable project.

---

## 🌐 Live Demo

> https://github.com/FirasKF/202263160-FirasAlmashama-assignment4
> http://127.0.0.1:5500/index.html#home

---

## ✨ What's New in Assignment 4

Built on top of A3, this version adds:

| Feature | What it does |
|---|---|
| **🧠 Skills section with progress bars** | Animated bars that fill on scroll into view, showing my comfort level per technology. |
| **🛤️ Timeline / Journey** | A vertical timeline of my path from starting university to this portfolio, with a pulsing "current" marker. |
| **📝 Blog section + modal reader** | Three short articles about how this site was built. Cards open in an accessible modal. |
| **🤖 AI Chatbot widget** | A floating assistant in the corner. Ask it about Firas's projects, skills, contact info, or how the site was built. Built with keyword scoring — no external API needed. |
| **🎨 Mood Playground** | Recolor the entire site (Sunset / Ocean / Forest / Rose / Mono / Default) with one click. Choice persists in localStorage. |
| **⌨️ Hero typing animation** | The hero subtitle rotates through phrases with a typewriter effect. |
| **🔢 Animated stat counters** | Numbers count up from zero when they enter the viewport. |
| **📊 Scroll progress bar + back-to-top** | Top bar shows reading progress; a button appears after scrolling 500px. |
| **📄 Printable resume** | A separate, print-friendly resume page accessible from the hero. |
| **🧹 Polish across the board** | Cleaner copy, better empty states, a footer subtitle, OG meta tags, an SVG favicon, and a print stylesheet. |

All A3 features (theme toggle, visitor name, visit timer, GitHub API, fun-fact API, projects filter+search+sort, multi-step form validation, fade-in observer, collapsible About) are still here and working.

---

## 🚀 Features at a Glance

### API Integration
- **GitHub Repos API** — fetches my latest 6 public repos with language/stars/forks/last-updated.
- **Random Fun Fact API** — single-button fetch with proper loading + error states.

### State Management (localStorage)
- Theme (light/dark)
- Visitor name (personalised greeting on return)
- Mood preset (Sunset, Ocean, Forest, Rose, Mono)

### Complex Logic
- Project filter + search + sort, all chained in a single render pipeline
- Multi-step form validation with reusable `validateField()` helper
- Site visit timer (`setInterval` counter)
- Score-based intent matching for the chatbot

### Performance
- CSS preloading
- Lazy-loaded images
- Debounced search input (300 ms)
- Single render function for the projects pipeline
- IntersectionObserver instead of scroll listeners for fade-ins / counters / skills bars

### Accessibility (good-practice basics)
- Skip-to-content link
- Semantic HTML5 landmarks (`<main>`, `<nav>`, `<section>`, `<article>`)
- ARIA labels & `aria-live` regions for dynamic content
- Keyboard-navigable everything (modal closes on Escape, blog cards openable with Enter/Space)
- Honors `prefers-reduced-motion`
- Focus-visible styles
- Sufficient color contrast in both themes

### Responsiveness
- Mobile-first breakpoints at 900px, 700px, 480px
- Hamburger menu on small screens
- Stat grid, skills grid, and blog grid all reflow gracefully
- Print stylesheet hides UI chrome when printing the resume

---

## 📂 Project Structure

```
202263160-FirasAlmashama-assignment4/
├── README.md
├── index.html
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── resume.html
│   └── images/
│       ├── me.jpg
│       ├── project1.png
│       ├── project2.png
│       └── project3.png
├── docs/
│   ├── ai-usage-report.md
│   ├── technical-documentation.md
│   └── user-manual.md
└── presentation/
    ├── slides.md ← outline of the slide deck
    ├── SWE363 Video Demo Final.mp4        
    └── slides.pdf
```

---

## 🛠️ Run Locally

No build tools, no dependencies — pure HTML, CSS, and JavaScript.

```bash
# 1. Clone
git clone https://github.com/FirasKF/202263160-FirasAlmashama-assignment4.git
cd 202263160-FirasAlmashama-assignment4

# 2. Open in a browser
#    Either double-click index.html...
#    ...or, recommended: use VS Code's "Live Server" extension
#    so the GitHub API calls work via http:// rather than file://
```

> ⚠️ **Heads up:** Some browsers block `fetch()` calls when opening HTML files via the `file://` protocol. If the GitHub repos or Fun Fact section don't load, run via Live Server (or any local HTTP server) instead.

A simple alternative without VS Code:

```bash
# Python 3 (any OS)
python -m http.server 8000
# then open http://localhost:8000
```

---

## 🤖 AI Tools Used

AI assistants helped me throughout the project — for code review, debugging, suggesting structure, and explaining concepts I hadn't seen before (e.g. score-based intent matching for the chatbot).

The full breakdown of **what I used, where, and how I reviewed/modified it** is in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

---

## 📖 User Manual

A visitor's guide to every feature on the site — what each button does, keyboard shortcuts, mobile use, troubleshooting, and privacy notes — is in [`docs/user-manual.md`](docs/user-manual.md).

---

## 🎤 Presentation

Materials for the 5–7 minute video presentation are in the `presentation/` folder:

- `slides.md` — slide-by-slide outline (covers Introduction → Demo → Deep Dive → Conclusion).

---

## 📌 Notable Technical Details

A few choices worth highlighting in the presentation:

- **The chatbot is real code, not a fake.** It uses keyword scoring with regex word-boundaries to pick the best knowledge-base entry — and gracefully falls back when nothing matches.
- **Mood presets cost ~10 lines of CSS.** A single `[data-mood="..."]` attribute on `<html>` overrides two CSS custom properties; everything else recolors automatically.
- **Animations respect user preferences.** `prefers-reduced-motion` disables the typing loop, all fade-ins, and the pulsing timeline marker.
- **No frameworks.** Everything is vanilla — keeping the project small, fast, and easy to deploy anywhere static.

---

## 📝 License

This is a personal student project. Code is free to read and learn from. Please don't submit it as your own.

---

## 🙏 Acknowledgements

- Built across Assignments 1–4 in my Web Development course.
- AI assistants (ChatGPT / Claude) used responsibly per the academic-integrity guidelines.
- APIs: [GitHub REST API](https://docs.github.com/en/rest), [Useless Facts](https://uselessfacts.jsph.pl/).

---

_Last updated: April 2026_
