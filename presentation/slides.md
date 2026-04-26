# Presentation Slides — Assignment 4

> Personal Web Application — Final Portfolio  
> Firas Almashama (202263160)  
> Target length: **5–7 minutes**

This file is the slide-by-slide outline. Each slide has:
- **Header** — title that goes on the slide
- **On-slide content** — the bullets / visuals to put on the slide itself (keep these short — bullets, not paragraphs)
- **Speaker notes** — what to say (longer; this is the speaking script)

Use this in PowerPoint, Google Slides, Keynote, or just export to PDF. Aim for ~10 slides.

---

## Slide 1 — Title (15 sec)

**Header:** Firas Almashama — Personal Portfolio  
**Subheader:** Assignment 4 · Web Development · 2026

**On-slide content:**
- 🎓 KFUPM
- Built with HTML, CSS, JavaScript — no frameworks
- _Live demo in a moment_

**Speaker notes:**
> Hi, I'm Firas Almashama. This is my final portfolio project for the Web Development course — Assignment 4 — built with plain HTML, CSS, and JavaScript, no frameworks. I'll walk you through what I built, demo it live, then talk briefly about the most interesting technical bits.

---

## Slide 2 — Project Overview &amp; Motivation (45 sec)

**Header:** What I Built &amp; Why

**On-slide content:**
- A personal portfolio website that grew across **4 assignments**
- A1: structure → A2: interactivity → A3: state &amp; APIs → **A4: polish + new sections**
- Goal: ship something I'd be **proud to send to a recruiter**
- Personal motivation: own my own corner of the internet

**Speaker notes:**
> This portfolio has been my main project across four assignments. Each one added a layer — A1 was structure and semantics; A2 added interactivity like filters and forms; A3 added state management and live API integration. For Assignment 4, my goal wasn't to add more chaos — it was to polish everything I already had and add the sections that turn a class project into something I'd actually be proud to send to a recruiter. Personally, I wanted to own my corner of the internet — somewhere that's mine, not a LinkedIn template.

---

## Slide 3 — Tech Stack (30 sec)

**Header:** The Stack

**On-slide content:**
- **HTML5** — semantic, accessible
- **CSS3** — Grid, Flexbox, custom properties, responsive
- **JavaScript ES6+** — async/await, IntersectionObserver, localStorage
- **APIs** — GitHub REST, Useless Facts
- **Tools** — Git, GitHub, AI assistants (Claude / ChatGPT) for review &amp; debugging
- _Zero npm packages. Zero build step._

**Speaker notes:**
> Stack-wise, this is intentionally simple: HTML, CSS, and vanilla JavaScript. CSS variables drive the theming. The site fetches my GitHub repos and a useless-facts API in real time. There's no build step, no npm install — you can clone the repo and double-click the index.html. AI tools were part of my workflow but only for review, debugging, and explaining concepts I hadn't seen before — never autocomplete.

---

## Slide 4 — Live Demo Outline (30 sec preview)

**Header:** Live Demo

**On-slide content:**
- 🌑 Theme &amp; mood presets
- 📊 Skills bars + Timeline
- 🔎 Projects: filter + search + sort
- 🐙 Live GitHub repos
- 📝 Blog modal
- 🤖 AI assistant widget
- 🎨 Mood Playground

**Speaker notes:**
> Now let's actually look at the site. I'll touch on each major section — theme switching, skills, the timeline, the projects pipeline, the live GitHub feed, the blog, and the AI assistant. Then I'll save the most fun one — the Mood Playground — for last.

---

## Slide 5 — DEMO (Switch to live site) (~3 min total)

> 🎬 **This is the demo segment — don't put this on a slide.** Switch to the actual website here.
>
> Follow the demo order in `presentation-script.md`. Roughly:
>
> 1. Open the site. Show the visitor-name bar &amp; greeting pill.
> 2. Toggle dark → light, then back.
> 3. Scroll to **About**: stat counters animate.
> 4. Scroll to **Skills**: bars fill in.
> 5. Scroll to **Timeline**: point out the pulsing "current" item.
> 6. Scroll to **Projects**: filter "JavaScript", search "task", sort by date — show the pipeline working.
> 7. Scroll to **GitHub Repos**: show live data fetched.
> 8. Open a blog post in the modal, close with Escape.
> 9. Show **Mood Playground** — click each preset, point out the whole site recoloring.
> 10. Open the **chatbot** in the bottom-left. Ask: "What are his skills?" then "How was this built?"
>
> Total demo time: ~3 minutes. Keep moving — this is the longest segment.

---

## Slide 6 — Technical Deep Dive: The Mood System (45 sec)

**Header:** How the Mood Playground Works

**On-slide content (use a code snippet as the visual):**
```css
:root                { --accent: #7c5cff; --accent-2: #31d0aa; }
[data-mood="sunset"] { --accent: #ff7e5f; --accent-2: #feb47b; }
[data-mood="ocean"]  { --accent: #0ea5e9; --accent-2: #22d3ee; }
```
```js
document.documentElement.setAttribute("data-mood", mood);
localStorage.setItem("mood", mood);
```
- Cost: ~10 lines of CSS + 2 lines of JS
- Composes with light/dark theme
- Persists across sessions

**Speaker notes:**
> One feature I'm particularly proud of is the Mood Playground — and it's a great example of how powerful CSS custom properties are. Every gradient, button, accent, and progress bar in the site uses `var(--accent)` and `var(--accent-2)`. So changing the mood is just one attribute on the `<html>` element — that's the entire mechanism. About ten lines of CSS and two lines of JS, and the whole site recolors. That kind of leverage is what made me really fall in love with vanilla CSS this semester.

---

## Slide 7 — Technical Deep Dive: The AI Chatbot (45 sec)

**Header:** The Chatbot — Honestly Fake, Genuinely Useful

**On-slide content:**
- A floating widget that answers questions about the portfolio
- **Score-based intent matching** — count keyword hits per KB entry, highest score wins
- Uses `\b` regex word-boundaries (so "hi" doesn't match inside "this")
- Graceful fallback when nothing matches
- Shows a "typing..." indicator for ~500ms before replying
- _No external API. No keys exposed in the browser._

**Speaker notes:**
> The other thing I want to highlight is the chatbot. I wanted something that **felt** AI-powered without actually calling a real model — because that would mean exposing an API key in the browser, which is a no-go. So I built a small intent matcher: each topic in the knowledge base has a list of keywords; for a user message, I count how many of those keywords appear as whole words; the topic with the highest score wins. There's a fallback message when nothing matches, and a fake "typing" delay to make it feel responsive. It's transparent about being a small assistant — but it actually answers questions about the site. About 80 lines of JavaScript total.

---

## Slide 8 — Challenges (45 sec)

**Header:** Challenges &amp; What I Learned

**On-slide content:**
- ✅ **Resolved:** Stat counters animating every scroll → switched to `IntersectionObserver` with `unobserve()` after first hit
- ✅ **Resolved:** Theme + mood fighting each other → made them independent attributes on `<html>`
- ✅ **Resolved:** Modal keyboard accessibility → Escape, click-outside, focus, body-scroll lock
- ⏳ **Not implemented:** Real contact-form delivery (would need Formspree or a serverless endpoint)
- ⏳ **Not implemented:** Real AI backend for the chatbot (would need a small proxy server)
- 🔮 **Future:** Service worker for offline, Arabic version, unit tests for the matcher

**Speaker notes:**
> A few things I had to work through. The biggest mistake early on was animating stat counters with a scroll listener that ran on every scroll event — they were re-counting every time you scrolled past. The fix was switching to `IntersectionObserver` and calling `unobserve` after the first run. Theme and mood initially fought each other because I'd put both on the same attribute — separating them into `data-theme` and `data-mood` made them composable. And modal accessibility — Escape, click-outside, focus management, scroll-lock — turned out to be a deeper rabbit hole than I expected.
>
> What I didn't ship: real contact-form delivery and a real AI backend for the chatbot. Both are doable but require a server, and I wanted to keep this fully static for now. Both are top of my "next steps" list.

---

## Slide 9 — Innovation Highlights (30 sec)

**Header:** Small Innovative Touches

**On-slide content:**
- 🎨 Mood presets composed with light/dark themes
- 🤖 Offline keyword-scoring chatbot (no API keys exposed)
- ⌨️ Hero typing animation with `prefers-reduced-motion` fallback
- 📊 Stat counters using `requestAnimationFrame` + ease-out cubic
- 📄 Print stylesheet that strips chrome &amp; renders the resume cleanly
- 🟣 Inline SVG favicon (no extra HTTP request)

**Speaker notes:**
> Beyond the requirements, I tried to add small details that show care: composable mood themes; an offline chatbot that doesn't leak API keys; a typing animation that respects motion preferences; counters that ease out instead of running linear; a print stylesheet so the resume page actually prints nicely; even an inline-SVG favicon so the site doesn't make an extra HTTP request. Lots of small touches. None of them are flashy, but together they make the site feel polished.

---

## Slide 10 — Conclusion &amp; Thanks (30 sec)

**Header:** Wrapping Up

**On-slide content:**
- 4 assignments, 1 portfolio I'm proud of
- Concrete gains: comfort with vanilla JS, working with APIs, performance, and AI-assisted workflows
- 🔗 GitHub: github.com/FirasKF
- 🔗 Live: _(your deployment link)_
- _Thank you!_

**Speaker notes:**
> To wrap up — across four assignments, this project has gone from a static résumé page to something I'm genuinely proud to share. Concretely, I'm walking out with much stronger comfort in vanilla JavaScript, hands-on practice with Fetch and external APIs, performance habits like debouncing and IntersectionObserver, and a healthy workflow for using AI assistants without losing my own skills.
>
> The repo is on GitHub at github.com/FirasKF, and the live site is linked in the README. Thanks for watching!

---

## Total time check

| Slide | Time |
|---|---|
| 1. Title | 0:15 |
| 2. Overview &amp; motivation | 0:45 |
| 3. Tech stack | 0:30 |
| 4. Demo intro | 0:30 |
| 5. **Live demo** | ~3:00 |
| 6. Mood deep dive | 0:45 |
| 7. Chatbot deep dive | 0:45 |
| 8. Challenges | 0:45 |
| 9. Innovation | 0:30 |
| 10. Conclusion | 0:30 |
| **Total** | **~8:15 raw** → trim demo to 2:30 to land at ~7 min |

If you're tight on time, the demo segment is the most flexible — it can be 2:00 to 3:30 depending on how much you linger on each section.

---

## Tips when recording

- **Record the screen at 1920×1080.** Anything smaller looks fuzzy when watched fullscreen.
- **Use a wired mic if you have one.** Audio quality matters more than video quality.
- **Practice the demo path twice** before recording. The script in `presentation-script.md` covers exact wording.
- **Resize the browser window to match a "presentation" size** — don't show your bookmarks bar or other tabs.
- **Open the site in dark mode first**, with mood = default. That's the "neutral" starting state.
- **Have the chatbot panel closed** at the start so you can dramatically open it during the demo.
- **Don't apologise for things in the recording.** Just keep moving. If you stumble badly, re-record that segment.

---

_End of slide outline._
