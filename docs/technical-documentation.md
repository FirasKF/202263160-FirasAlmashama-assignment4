# Technical Documentation — Assignment 4

> Personal Web Application — Final Portfolio  
> Firas Almashama (202263160)

This document describes the technical design, architecture, and implementation details of the final portfolio website.

---

## 1. Overview

The site is a single-page personal portfolio built with **plain HTML, CSS, and JavaScript** — no frameworks, no build step, no server-side code. It runs entirely in the browser and is deployable to any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

The project is the fourth and final iteration in a series:
- **A1** — static, semantic HTML page with basic styling
- **A2** — interactivity: filters, search, contact-form validation, fun-fact API
- **A3** — state management, more APIs, performance optimizations
- **A4** (this) — polish, new sections (Skills, Timeline, Blog, Mood Playground, AI assistant), accessibility improvements

---

## 2. Technology Stack

| Layer | Tech | Why |
|---|---|---|
| Markup | HTML5 (semantic) | Accessibility, SEO, clean structure |
| Styling | CSS3 (Flexbox, Grid, custom properties) | Theming via CSS variables, no preprocessor needed |
| Interactivity | JavaScript ES6+ | `async/await`, `IntersectionObserver`, modules-not-needed for this scope |
| Persistence | `localStorage` | Theme, visitor name, mood preset survive reloads |
| External APIs | GitHub REST, Useless Facts | Live, dynamic content |
| Tooling | Git + GitHub | Version control & hosting |

No npm packages. No bundlers. No transpilation. Open `index.html` and it works.

---

## 3. Architecture

```
index.html
├── HTML structure (header, nav, main with N sections, footer, chatbot widget)
│
css/styles.css
├── :root + [data-theme="light"] + [data-mood="..."] variables
├── Layout helpers (.container, .section, .card, .btn)
├── Component styles (skills, timeline, blog, chatbot, mood, etc.)
├── Responsive breakpoints (900px / 700px / 480px)
└── Print styles
│
js/script.js (organized in 20 numbered sections)
├── Nav, theme, mood (state)
├── Visitor greeting + visit timer
├── Hero typing animation
├── Stat counters (IntersectionObserver)
├── Skills bars + Timeline + Blog (rendered from data arrays)
├── Projects pipeline (filter → search → sort → render)
├── GitHub API + Fun Fact API
├── Form validation
├── Scroll progress + back-to-top
├── Fade-in observer (global)
├── AI Chatbot (keyword scoring)
└── Footer year
```

Each major feature has a labeled section in `script.js` with a comment header. The data arrays (skills, timelineData, projects, blogPosts, chatbotKB) are defined inline near where they're rendered, so a future me (or anyone reading) can find and edit them quickly.

---

## 4. Implemented Features (by Assignment 4 requirement)

### 4.1 Functionality

All sections are interactive and working:

| Section | Behavior |
|---|---|
| Hero | Time-based greeting pill, typing tagline, primary/secondary/resume CTAs |
| About | Animated stat counters, collapsible content, three info cards |
| Skills | 8 skill bars, animate from 0% on scroll into view |
| Timeline | 6 entries; the current one pulses |
| Projects | Live filter (5 tags) + debounced search + sort dropdown (5 options) — all chained |
| GitHub Repos | Fetches `/users/FirasKF/repos` with loading + error states |
| Blog | 3 posts; clicking opens an accessible modal |
| Mood Playground | 6 presets, persisted via `localStorage` |
| Fun Fact | Single-button API fetch with loading + error states |
| Contact | Multi-step form validation with field-level error messages |
| Chatbot | Floating widget, keyword scoring, "typing..." indicator |

### 4.2 Code Quality

- Files are organized into clear directories (`css/`, `js/`, `assets/`, `docs/`, `presentation/`).
- The single JS file is split into 20 numbered, commented sections with a table of contents at the top.
- Naming is consistent: BEM-ish CSS (`block__element--modifier`), `camelCase` JS, `kebab-case` HTML attributes.
- No commented-out dead code. No `console.log` statements left in (except one error-only `console.error` in the GitHub fetch catch block).
- `const` / `let` are used appropriately; no `var`.

### 4.3 Performance

| Optimization | Where |
|---|---|
| CSS preloading | `<link rel="preload" href="css/styles.css" as="style">` |
| Lazy loading | `loading="lazy"` on all `<img>` tags |
| Debounced search | 300 ms debounce wrapper around `renderProjects` |
| Single render pipeline | One function handles filter + search + sort |
| `IntersectionObserver` | Used instead of scroll listeners for fade-ins, stat counters, skill bars |
| Passive scroll listener | The progress bar uses `{ passive: true }` |
| `requestAnimationFrame` | Stat-counter animation uses rAF, not `setInterval` |
| Lazy modal | Blog modal DOM is only built on first open |
| No external libraries | No jQuery, no React — site loads in ~one HTTP/2 round-trip on a static host |

### 4.4 Compatibility

Tested in:
- Chrome (latest), Firefox (latest), Edge (latest), Safari (latest macOS / iOS)
- Mobile viewports down to 320px wide
- Light + dark themes, both with each of the 6 mood presets

---

## 5. State Management

| State | Storage | Lifetime |
|---|---|---|
| Theme (light/dark) | `localStorage["theme"]` | Persists across sessions |
| Visitor name | `localStorage["visitorName"]` (sanitized: trimmed, length-capped, `<>` stripped) | Persists across sessions |
| Mood preset | `localStorage["mood"]` | Persists across sessions |
| Visit timer | In-memory only | Resets on reload (intentional) |
| Project filter / search / sort | In-memory | Resets on reload |
| Chatbot history | In-memory (in DOM) | Cleared on close + reopen if not yet talked to |

The decision to **not** persist chat history is deliberate — it keeps the widget feeling like a quick "ask once" tool rather than a saved transcript.

---

## 6. Accessibility (good-practice basics)

These weren't a graded course topic, but I tried to follow common-sense accessibility patterns where they were straightforward to add:

| Concern | Implementation |
|---|---|
| Skip nav | `<a class="skip-link" href="#main">` becomes visible on focus |
| Landmarks | `<header role="banner">`, `<main id="main">`, `<footer role="contentinfo">`, `<nav aria-label="Primary">` |
| Live regions | `aria-live="polite"` on greeting pill, fun-fact text, error messages, form status, chatbot messages |
| Toggle states | `aria-expanded` on nav toggle, theme toggle, collapsible sections, chatbot toggle |
| Modal | `role="dialog"`, `aria-modal="true"`, focus moved to input on open, Escape closes, click-outside closes, body scroll locked |
| Keyboard navigation | All interactive elements reachable by Tab. Blog cards openable with Enter/Space. |
| Reduced motion | `prefers-reduced-motion` disables fade-ins, typing animation, and the timeline pulse |
| Focus | Default `:focus-visible` styles preserved; never `outline: none` without a replacement |
| Contrast | Both themes meet 4.5:1 for body text |

---

## 7. The Chatbot — How It Works

The widget is a small intent-matching engine:

1. The user types a question.
2. The text is lower-cased.
3. For each entry in `chatbotKB`, count how many of its keywords appear as **whole words** in the input (regex with `\b` boundaries — so "hi" doesn't match inside "this").
4. The entry with the highest score wins.
5. If nothing matches (score = 0), a friendly fallback suggests example questions.
6. The reply is shown after a short artificial delay so the "typing..." indicator has time to feel real.

The KB has 16 entries covering: greetings, identity, skills, projects, GitHub, contact, resume, themes/moods, blog, timeline, fun fact, tech stack, AI usage, thanks/goodbye.

It is **not** connected to a real AI service — keeping the site fully static and not requiring an API key. This is honest in the UX: the assistant introduces itself as "a small assistant that knows about Firas's portfolio."

---

## 8. The Mood System — How It Works

CSS:
```css
:root            { --accent: #7c5cff; --accent-2: #31d0aa; }
[data-mood="sunset"] { --accent: #ff7e5f; --accent-2: #feb47b; }
[data-mood="ocean"]  { --accent: #0ea5e9; --accent-2: #22d3ee; }
/* ...etc */
```

JS:
```js
document.documentElement.setAttribute("data-mood", mood);
localStorage.setItem("mood", mood);
```

That's it. Every component already uses `var(--accent)` and `var(--accent-2)`, so flipping the attribute on `<html>` recolors gradients, the scroll progress bar, the skill bar fills, the typing-text gradient, the timeline dots, the chatbot header, primary buttons, etc., all at once.

This composes with `[data-theme="light"]` so the user can have, e.g., light theme + ocean mood.

---

## 9. Testing

| Test | Result |
|---|---|
| Theme persists after reload | ✅ |
| Mood persists after reload | ✅ |
| Visitor name persists after reload | ✅ |
| Visitor name strips `<>` and is length-capped | ✅ |
| Project filter buttons | ✅ |
| Project sort dropdown | ✅ |
| Filter + search + sort combined | ✅ |
| Empty state shows when no matches | ✅ |
| GitHub repos load | ✅ |
| GitHub error state on offline | ✅ |
| Fun fact loads on click | ✅ |
| Fun fact error state on offline | ✅ |
| Form validation (all rules) | ✅ |
| Form success state | ✅ |
| Collapsible About | ✅ |
| Stats count up once on view | ✅ |
| Skill bars fill once on view | ✅ |
| Timeline pulse only on current | ✅ |
| Blog modal opens & closes (click, Escape, click-outside, button) | ✅ |
| Blog card keyboard-open with Enter/Space | ✅ |
| Chatbot opens / closes | ✅ |
| Chatbot answers each KB topic | ✅ |
| Chatbot fallback for unrecognised input | ✅ |
| Mood presets recolor everything | ✅ |
| Scroll progress bar updates smoothly | ✅ |
| Back-to-top appears at >500px scroll | ✅ |
| Layout responsive at 900 / 700 / 480 / 320px | ✅ |
| Reduced motion disables animations | ✅ |
| Print stylesheet hides UI chrome | ✅ |
| Cross-browser (Chrome, Firefox, Edge, Safari) | ✅ |

---

## 10. Known Limitations &amp; Future Work

### Known limitations
- The contact form doesn't actually send anything — it validates and shows a success message but no email is delivered. (Hooking up Formspree or EmailJS is the obvious next step.)
- The chatbot is keyword-based, so it only handles topics in the KB. Synonyms outside the keyword list won't match.
- GitHub API is unauthenticated, so it's subject to public rate limits (60 requests/hour per IP). For a personal portfolio this is fine.

### Future work
- Real form submission via Formspree or a tiny serverless function.
- Service worker for offline support.
- A real AI chatbot via a small backend proxy (so an API key isn't exposed in the client).
- More projects with real Live/Code links.
- Internationalization — Arabic version of the site.
- Unit tests for the validation and chatbot-matching functions.

---

## 11. File Responsibilities

| File | Responsibility |
|---|---|
| `index.html` | Page structure, all sections, ARIA hints |
| `css/styles.css` | All styling, theming variables, responsive rules, print rules |
| `js/script.js` | All interactivity, data, rendering, API calls, state management |
| `assets/resume.html` | Standalone printable resume page |
| `assets/images/*` | Profile photo + project screenshots |
| `docs/ai-usage-report.md` | How AI tools were used, reviewed, and modified |
| `docs/technical-documentation.md` | This file |
| `docs/user-manual.md` | Visitor-facing how-to guide for every site feature |
| `presentation/slides.md` | Slide outline for the presentation |
| `presentation/presentation-script.md` | Word-for-word script for the demo video |
| `README.md` | Project overview, run instructions, links |
| `.gitignore` | Standard ignores (OS files, editors, logs, env) |

---

_End of technical documentation._
