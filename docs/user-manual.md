# User Manual — Firas Almashama's Portfolio

> A visitor's guide to using every feature of the website.  
> Read this if you want to know what each button does, how to customize the site to your taste, and what the various widgets are for.

---

## Table of Contents

1. [First Visit — Quick Tour](#1-first-visit--quick-tour)
2. [The Top Bar (Header)](#2-the-top-bar-header)
3. [The Greeting Bar](#3-the-greeting-bar)
4. [Hero Section](#4-hero-section)
5. [About Me](#5-about-me)
6. [Skills](#6-skills)
7. [Timeline / Journey](#7-timeline--journey)
8. [Projects](#8-projects)
9. [GitHub Repositories](#9-github-repositories)
10. [Blog & Notes](#10-blog--notes)
11. [Mood Playground](#11-mood-playground)
12. [Random Fun Fact](#12-random-fun-fact)
13. [Contact Form](#13-contact-form)
14. [Floating Tools (Bottom Corners)](#14-floating-tools-bottom-corners)
15. [The Chatbot](#15-the-chatbot)
16. [Resume Page](#16-resume-page)
17. [Keyboard Shortcuts](#17-keyboard-shortcuts)
18. [Mobile Use](#18-mobile-use)
19. [Troubleshooting](#19-troubleshooting)
20. [Privacy](#20-privacy)

---

## 1. First Visit — Quick Tour

When you open the site for the first time, you'll see:

- A **greeting bar** at the very top asking for your name (optional)
- A **navigation menu** with links: About, Skills, Timeline, Projects, Blog, Contact, plus a Theme button
- A **hero section** introducing Firas with a typewriter-style animation
- A **time tracker** in the bottom-right showing how long you've been on the site
- A **chat bubble** in the bottom-left — that's the portfolio assistant, it can answer questions about Firas
- A thin **progress bar** at the very top of the page that fills as you scroll down

Just scroll down to explore each section — the site is one continuous page, no separate pages to navigate between (except the resume).

---

## 2. The Top Bar (Header)

The top bar stays visible as you scroll (it sticks to the top).

| Element | What it does |
|---|---|
| **"Firas Almashama"** logo (left) | Click to scroll back to the top |
| **About / Skills / Timeline / Projects / Blog / Contact** links | Click to jump to that section |
| **Theme** button (right) | Switches between dark and light mode. Your choice is remembered next time you visit. |
| **Hamburger menu** (☰) on mobile | Tap to open/close the nav links |

---

## 3. The Greeting Bar

Right under the header, there's a strip that says **"What's your name?"**

- Type your name and click **Save** (or press Enter)
- You'll be greeted by name on this and every future visit
- Click **"Not you?"** to clear the saved name

**What gets saved:** Just your name, in your browser only. It never leaves your device.

---

## 4. Hero Section

The first big section after the header. Things to notice:

- A **time-of-day greeting** ("Good morning!", "Good afternoon!", "Good evening!") in the small pill at the top
- A **typewriter animation** that cycles through different things Firas builds
- Three buttons:
  - **View Projects** — jumps to the Projects section
  - **Contact Me** — jumps to the Contact form
  - **📄 Resume** — opens Firas's printable resume in a new tab

> **Tip:** If your operating system has "reduce motion" turned on, the typing animation stops and shows just the first phrase.

---

## 5. About Me

Short bio, three info cards (Strengths / Skills / Hobbies), and four quick stats that count up as you scroll.

- Click **"Hide Section"** at the top right of About to collapse it
- Click again ("Show Section") to expand it back

The four stat numbers (years learning, projects built, etc.) animate from 0 the first time you scroll to them.

---

## 6. Skills

Eight skill bars showing technologies Firas works with, each with his honest self-assessment of comfort level (out of 100%).

The bars **fill from 0% to their target** when you scroll them into view. They only animate once per page load — scrolling past them again won't replay the animation.

---

## 7. Timeline / Journey

A vertical timeline of Firas's path, from starting university in 2022 through to the current portfolio and what's planned next.

The **current** marker (2026) has a soft pulsing glow — that's how you can tell at a glance where Firas is on the journey.

---

## 8. Projects

This is the most interactive section of the site. You have **three ways** to filter and reorder the project list:

### 8.1 Filter buttons
Five chip-style buttons: **All / HTML / CSS / JavaScript / Responsive**.
Click one to show only projects with that tag. Click "All" to reset.

### 8.2 Search box
Type any text — the project list filters live as you type. It searches both project titles **and** descriptions.

> _The search waits 300ms after you stop typing before updating, so it feels smooth and doesn't lag._

### 8.3 Sort dropdown
Pick how the projects should be ordered:
- **Default** — original order
- **Name A–Z** / **Name Z–A** — alphabetical
- **Newest First** / **Oldest First** — by date

### 8.4 Combining them
The three controls **work together**. For example: pick the "JavaScript" filter, type "manager" in search, and sort "Newest First" — you'll see only JavaScript projects with "manager" in the name or description, sorted newest first.

If nothing matches, you'll see **"No projects found."** Just clear the search or click "All" to reset.

Each project card has:
- An image
- Title and description
- Date
- Tags
- A **Live** link (visit the deployed project)
- A **Code** link (visit the GitHub repo)

---

## 9. GitHub Repositories

This section pulls Firas's six most recently updated public repositories **live** from GitHub. You'll see:
- Repository name (clickable, opens GitHub in a new tab)
- Description
- Main language
- Star count ⭐
- Fork count 🍴
- Last update date 📅

While loading, you'll see "Loading repositories…". If your connection drops or GitHub's API is down, you'll see a friendly error message instead of a blank space.

> **Note:** GitHub's free public API allows about 60 requests per hour per IP address. If you reload the page rapidly many times in a row, you might briefly hit that limit and see the error.

---

## 10. Blog & Notes

Three short articles Firas wrote while building the site:

1. **"Why I Rebuilt My Portfolio Three Times"** — about the journey across the four assignments
2. **"Working With AI Assistants Without Losing Your Skills"** — Firas's honest take on AI workflow
3. **"Dark Mode That Doesn't Hurt"** — the technical bits behind theming

Each card shows the title, a short excerpt, the date, and estimated reading time.

### How to read a post

- **Click** any blog card — a popup window (modal) opens with the full article
- You can also press **Tab** to focus a card, then **Enter** or **Space** to open it

### How to close the modal

Three ways, whichever feels most natural:
- Press the **Escape** key
- Click the **×** button in the top-right of the popup
- Click anywhere on the **dark background** outside the popup

While the popup is open, the page behind it is locked so you can't accidentally scroll the wrong thing.

---

## 11. Mood Playground

This is the most fun part of the site. Six color presets that **recolor the entire page in real time**:

| Preset | Vibe |
|---|---|
| **Default** | Purple + teal — the original aesthetic |
| **Sunset** | Warm orange + peach |
| **Ocean** | Sky blue + cyan |
| **Forest** | Green + lime |
| **Rose** | Pink + magenta |
| **Mono** | Soft grey + slate (toned-down look) |

Click any preset and watch every gradient, button, progress bar, timeline dot, and chat header change color instantly.

**Your mood choice is saved**, so it'll still be applied next time you visit. To reset, click **Default**.

> **Composes with the theme:** The mood is independent from light/dark mode. You can have, e.g., **light theme + Forest mood**, or **dark theme + Rose mood**. Try a few combinations.

---

## 12. Random Fun Fact

A simple "click for a surprise" widget. Click **"Get Fun Fact"** and the site fetches a random useless-but-interesting fact from a public API.

- While loading: shows "Loading…"
- If it fails: shows "Failed to load fact. Try again."
- Otherwise: shows the fact

Click the button as many times as you like for new facts.

---

## 13. Contact Form

Three fields: Name, Email, Message. The form **validates as you submit**:

| Field | Rules |
|---|---|
| **Name** | Required, at least 2 characters |
| **Email** | Required, must be a valid email format |
| **Message** | Required, at least 10 characters |

If anything's wrong, you'll see a red error message under the offending field telling you exactly what to fix. Once everything is valid, you'll see a green **"Message sent successfully!"**

> **Honest note:** The form is for demonstration purposes — it validates correctly but doesn't actually send an email. To reach Firas, use the contact info in the sidebar (or scroll to the bottom of the Quick Contact card).

The **Quick Contact** card on the right has direct links to:
- Email (mailto: link)
- LinkedIn profile
- GitHub profile

---

## 14. Floating Tools (Bottom Corners)

Always-visible tools in the corners of your screen:

### Bottom-right
- **⏱️ Visit Timer** — counts how long you've been on the site this session. Resets when you reload.
- **↑ Back-to-top button** — appears once you've scrolled down 500+ pixels. Click it to smoothly scroll back to the top.

### Bottom-left
- **💬 Chat bubble** — opens the portfolio assistant. See next section.

---

## 15. The Chatbot

The floating purple chat bubble in the bottom-left corner.

### Opening / closing
- **Click the bubble** to open the chat panel
- **Click the bubble again** (it'll be rotated 90°) or the **×** to close
- Press **Escape** to close it from anywhere

### What it can answer
The assistant is a small, on-device helper (no external AI service). It knows about:

- Who Firas is
- His skills and tech stack
- His projects (and where to find them on the site)
- His GitHub
- How to contact him
- Where to find the resume
- The theme/mood system
- The blog
- The timeline
- The fun-fact section
- How the site was built
- His use of AI tools

### How to use it

Two ways to ask:

1. **Tap a suggestion chip** at the bottom of the panel (e.g. "Who is Firas?")
2. **Type your question** in the input box and press Enter or click Send

The assistant briefly shows a "typing..." indicator before replying, just like a chat app.

> **Honest note:** The assistant uses keyword matching, not a real AI model. It's good at understanding common phrasings but can be confused by very unusual wording. If it doesn't understand, it'll suggest topics you can try instead.

If you saved your name in the greeting bar earlier, the assistant will use it when greeting you.

---

## 16. Resume Page

Click the **📄 Resume** button in the hero section to open Firas's resume in a new tab.

The resume is a separate page styled like a printed CV.

### To save it as a PDF
1. Click the **"Print / Save as PDF"** button at the top, **OR**
2. Press **Ctrl+P** (Windows/Linux) / **Cmd+P** (Mac)
3. In the print dialog, set the destination to **"Save as PDF"** instead of a printer
4. Save the file wherever you like

The print stylesheet automatically removes the yellow tip bar at the top, so the saved PDF looks clean and professional.

---

## 17. Keyboard Shortcuts

| Key | Action |
|---|---|
| **Tab / Shift+Tab** | Navigate forward / backward through interactive elements |
| **Enter** or **Space** | Activate a focused button, link, or blog card |
| **Escape** | Close the chatbot, close the blog modal |
| **Ctrl/Cmd + P** | Print (most useful on the resume page) |

The site is fully usable with just a keyboard — try tabbing through it.

---

## 18. Mobile Use

The site adapts to your screen size automatically. On phones and small tablets:

- The nav links collapse into a **hamburger menu** (☰). Tap it to open/close.
- The hero image stacks **above** the text instead of beside it
- The Skills, Stats, and Blog grids reflow to one or two columns
- Buttons become full-width and easier to tap
- The chatbot panel takes nearly full width when opened
- The visit timer in the corner becomes more compact

If anything feels cramped on your specific device, try rotating the phone to landscape.

---

## 19. Troubleshooting

### "GitHub repos won't load"
Causes:
- You opened the file directly (a `file://` URL). Browsers block API calls from `file://` for security. **Fix:** open via a local server (Live Server in VS Code, or `python -m http.server 8000`).
- You're offline.
- Rare: you've hit GitHub's 60-requests-per-hour public-API limit. Wait an hour.

### "Fun fact won't load"
Same causes as above. The fun-fact API is sometimes briefly down — clicking again usually works.

### "The site is showing the wrong theme/mood"
Browsers remember your choices via localStorage. To reset everything:
- Open your browser's DevTools (F12)
- Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
- Find the site under Local Storage
- Delete the entries for `theme`, `mood`, and/or `visitorName`
- Reload the page

Alternatively, the easy way: open the site in an Incognito / Private window to start fresh.

### "Animations are making me dizzy"
Turn on **"Reduce Motion"** in your operating system:
- **Windows:** Settings → Accessibility → Visual effects → Animation effects (off)
- **macOS:** System Settings → Accessibility → Display → Reduce motion
- **iOS:** Settings → Accessibility → Motion → Reduce Motion (on)
- **Android:** Settings → Accessibility → Remove animations

The site detects this and disables the typing loop, fade-ins, and pulsing timeline marker.

### "The page is too narrow / too wide on my desktop"
Try resizing the browser window. The layout adjusts at 900px, 700px, and 480px wide.

---

## 20. Privacy

This is a **fully static site** — no backend, no cookies, no analytics, no tracking.

The only things stored on your device (in your browser's localStorage):
- Your visitor name (if you saved one)
- Your theme choice (light/dark)
- Your mood preset choice

Nothing is ever sent to a server. Even the GitHub repos and fun fact are fetched on-demand from public APIs, with no information about you attached.

To delete this data, see "The site is showing the wrong theme/mood" in the Troubleshooting section above — same steps.

---

## Need help?

If something isn't working as described in this manual, you can:
- Open the **chatbot** in the bottom-left and ask
- Email Firas directly: **s202263160@kfupm.edu.sa**
- Open an issue on the GitHub repo

Enjoy the site! 🚀

---

_Manual last updated: April 2026_
