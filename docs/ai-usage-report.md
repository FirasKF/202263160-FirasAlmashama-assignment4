# AI Usage Report — Assignment 4

> Personal Web Application — Final Portfolio  
> Firas Almashama (202263160)

This document explains exactly **how I used AI tools while building Assignment 4**, what worked, what didn't, and how I made sure the final project is genuinely my own work.

---

## 1. Tools Used &amp; Use Cases

### Claude (Anthropic) — primary assistant
I used Claude in two main modes:

1. **Architecture &amp; planning** — Before writing code, I described what I wanted to add (skills bars, timeline, blog, chatbot widget, mood presets) and asked for opinions on how to structure them inside the existing Assignment 3 codebase without breaking anything.
2. **Code review &amp; debugging** — When something didn't behave as expected (e.g. the typing animation flickering on first load, or the chatbot not closing on Escape), I pasted the relevant snippet and asked Claude to spot the issue.

### ChatGPT — second opinion / explanations
Used occasionally as a "second opinion" when I wanted a different angle, especially on:
- How `IntersectionObserver` thresholds interact with stat counters that should only animate once.
- Why a `prefers-reduced-motion` query should disable my typing loop.
- Score-based intent matching for the chatbot (the regex word-boundary trick).

### GitHub Copilot — _not_ used
I deliberately avoided autocomplete-style tools for this assignment because I wanted every line in this codebase to be a line I had consciously chosen. AI was used as a discussion partner, not as autocomplete.

---

## 2. Where Specifically AI Helped

| Feature | How AI helped |
|---|---|
| **Skills progress bars** | Suggested using `IntersectionObserver` so the bars only animate once per page-load, instead of every time the user scrolls past. I had originally written it with a scroll listener. |
| **Timeline pulsing dot** | Clarified the right CSS keyframe approach for the "current" item — using `box-shadow` rings rather than scaling the element, so it doesn't push neighbouring content. |
| **Blog modal** | Reviewed my modal code and pointed out that I was missing keyboard-trap handling (Escape to close, body scroll lock). Fixed both. |
| **AI Chatbot widget** | I wanted it to feel real but stay offline. AI helped me design the keyword-scoring approach: each KB entry has keywords, the user message is matched word-by-word using regex with `\b` boundaries, and the entry with the most hits wins. We iterated on the fallback message together. |
| **Mood presets** | Confirmed my hunch that `[data-mood="..."]` selectors in CSS would be the cleanest way — and warned me to test it alongside the existing `[data-theme="..."]` so they don't fight. |
| **Reduced motion** | Reminded me to disable the typing-loop animation under `prefers-reduced-motion`, not just the fade-ins. I'd missed that initially. |
| **Print stylesheet** | Suggested hiding the chatbot, scroll progress, and back-to-top button when printing the resume page — small detail, big polish. |
| **README &amp; this doc** | Helped me structure both files and proofread the writing. The content (decisions, what worked, what didn't) is mine. |

---

## 3. Benefits

- **Faster iteration.** The biggest win was being able to talk through ideas before committing to them. Saying "I want to add a chatbot but I don't want it to feel fake" got me to the keyword-scoring design much faster than trial-and-error.
- **Better code review.** AI is patient about being asked "why?" or "is there a simpler way?" repeatedly. That made me question lines of code I would have otherwise just shipped.
- **Catching small mistakes.** Things like "your `aria-expanded` is a string when it should be set with `String(...)`" — small, but they add up.
- **Concept explanations.** I now genuinely understand `IntersectionObserver`, async/await error handling, and `prefers-reduced-motion` — not because AI memorised them for me, but because I asked enough follow-up questions.

---

## 4. Challenges &amp; Limitations

- **AI doesn't see my codebase.** It can suggest code that uses CSS variables or class names that don't exist in my project. I always had to translate suggestions into my actual naming conventions (e.g. my CSS uses `--accent`, not `--color-primary`).
- **Confident-sounding but wrong.** A few times AI suggested CSS that worked in modern browsers but not the older ones I needed to support, or JavaScript that referenced an API that's now deprecated. Always tested.
- **Over-engineering tendency.** AI often reaches for the more complex solution. For the chatbot, the first suggestion was a small "embeddings"-style approach with vectors. I asked for something simpler (keyword scoring) and the simpler version is what shipped.
- **Generic styling suggestions.** When I asked for visual ideas, AI defaulted to generic gradients and typography. I kept my own existing design language (dark/light + purple/teal accents) and only added new sections that fit it.

---

## 5. Learning Outcomes

Through using AI on this assignment, I learned (or got much more comfortable with):

- **`IntersectionObserver`** for scroll-based effects — including how to unobserve elements after a one-time animation so they don't replay.
- **CSS custom properties as a theming system** — and how a single attribute on `<html>` can drive a whole site's accent colors.
- **Score-based intent matching** as a low-tech way to build "AI-feeling" assistants without a real model behind them.
- **Accessibility in modals** — `aria-modal`, focus trapping, Escape-to-close, body scroll lock.
- **Print stylesheets** — when to use `display: none` for screen-only chrome.
- **Defensive JS** — sanitizing user input from `localStorage` (the visitor name now strips angle brackets and limits length).
- **Workflow:** describe → discuss → code → test → review. AI is most useful at the "discuss" and "review" stages.

---

## 6. Responsible Use &amp; Modifications

Every piece of AI-assisted code was:

1. **Read line by line.** If I couldn't explain a line, I rewrote it or asked for an explanation until I could.
2. **Modified to fit my project.** Variable names, class names, file paths, and existing CSS variables were always adapted to match my A3 codebase.
3. **Tested manually in the browser.** Every feature was clicked, typed into, scrolled past, resized down to mobile, and opened in dark + light + each mood preset.
4. **Documented honestly.** This file is the truth about what AI did and didn't do for me.

I can sit in front of any line of this codebase and explain what it does and why. AI was a productivity multiplier, not an author.

---

## 7. Honest Self-Assessment

If I had built this without AI, I think I would have:
- Shipped roughly the same set of features, but
- Spent ~2× the time on debugging, and
- Probably skipped the chatbot widget altogether because I'd have been intimidated by the "intent matching" idea.

Where AI didn't help: the actual creative direction (color palette, layout structure, what content to include) — those were mine, and they came from the existing Assignments 1–3.

That feels like a healthy balance.
