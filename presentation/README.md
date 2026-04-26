# Presentation Folder

This folder contains everything you need to record the 5–7 minute presentation video for Assignment 4.

## What's in here

| File | What it is |
|---|---|
| `slides.md` | A slide-by-slide outline of the deck. Each slide has a header, bullets to put on the slide, and **speaker notes**. Covers ~10 slides. |
| `presentation-script.md` | The **word-for-word script** you'll follow when recording, with timing markers. Aim for ~6:30. |

## What's _not_ in here yet (you create these)

| File | How to create it |
|---|---|
| `slides.pdf` | Build the deck in PowerPoint / Google Slides / Keynote using `slides.md` as the outline, then **File → Export as PDF**. |
| `demo-video.mp4` | Record using OBS, QuickTime, Loom, or any screen recorder. Follow `presentation-script.md` while recording. |

## Recommended workflow

1. **Build the slides.** Open `slides.md` and copy the on-slide content into your slide tool of choice. Use minimal text per slide — bullets, not paragraphs. Add screenshots if you want.
2. **Read the script out loud once or twice.** Make sure the phrasing feels natural in your voice. Tweak any sentences that feel stiff.
3. **Run the website locally** via Live Server or `python -m http.server 8000` so the GitHub API call works during the demo.
4. **Set up your screen recorder.** Record at 1920×1080 if your screen supports it.
5. **Do the recording in 2 takes** — once full, then re-record any segments you stumbled on. Stitch them together in the editor.
6. **Export to MP4.** Save it as `demo-video.mp4` in this folder.
7. **Export the slide deck to PDF.** Save it as `slides.pdf` in this folder.

## Final folder should look like

```
presentation/
├── slides.md                     ← outline (this is here)
├── presentation-script.md        ← script (this is here)
├── slides.pdf                    ← you generate
└── demo-video.mp4                ← you generate
```

Good luck! 🎬
