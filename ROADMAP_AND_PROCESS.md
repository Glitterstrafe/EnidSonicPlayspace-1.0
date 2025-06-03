# EnidSonicPlayspace – Roadmap & Development Journey

## ✨ Next‑Spark Roadmap

A living list of improvements we want to tackle next. (Check them off or re‑order as the project evolves.)

|  Priority  | Feature Idea                |  What it Adds                                  |  Notes                                                        |
| ---------- | --------------------------- | ---------------------------------------------- | ------------------------------------------------------------- |
| ⭐⭐⭐        | **Launchpad LED feedback**  | Pads light up when samples are triggered       | Requires MIDI *OUT* messages, color mapping & note→LED lookup |
| ⭐⭐         | **Preset JSON save / load** | Export & import pad‑to‑sample layouts          | Could store in `localStorage` + downloadable `.json`          |
| ⭐⭐         | **Drag‑and‑drop samples**   | Drop files directly onto pads (no file dialog) | Use browser `dragenter / drop` events                         |
| ⭐⭐         | **FX Chain (Reverb/Delay)** | Basic Web Audio FX nodes per pad               | Tone.js or native nodes; UI slider per effect                 |
| ⭐          | **Animated splash screen**  | Enid logo & “Loading WebMIDI…” shimmer         | Hide grid until MIDI access is granted                        |
| ⭐          | **Demo GIF / Loom video**   | Visual walkthrough in README                   | Capture loading + triggering a few pads                       |
| ⭐          | **Custom domain**           | e.g. `enid.pinxitlabs.com` via CNAME           | Update GitHub Pages settings                                  |
| ⭐          | **Changelog / Releases**    | Tag v1.0.0, v1.1…                              | Use GitHub releases to track milestones                       |

*(Priority legend: ⭐⭐⭐ highest)*

---

## 🛠️ Development Journey (2025‑06‑03)

A concise log of how this project was bootstrapped, debugged and deployed.

1. **Idea spark** – build a browser‑based Launchpad sampler using WebMIDI + Web Audio.
2. **Codex initial scaffold** – generated `index.html`, `script.js`, `style.css` locally.
3. **README & LICENSE** added via ChatGPT then committed.
4. **Repo made public** → `Glitterstrafe/EnidSonicPlayspace-1.0`.
5. **Windsurf playground** used for live coding; synced back to Git locally.
6. **Merge‑conflict resolution** (`script.js`) + `.gitignore` added.
7. **GitHub Pages CI**

   * First used *peaceiris/actions‑gh‑pages*; 404 due to artifact mismatch.
   * Switched to *native Pages action*; hit `upload‑artifact@v3` CDN bug.
   * Final fix: GitHub’s “Static HTML” workflow (`static.yml`) + removed committed `build/` folder.
8. **Success** – Site publishes at [https://glitterstrafe.github.io/EnidSonicPlayspace-1.0/](https://glitterstrafe.github.io/EnidSonicPlayspace-1.0/).
9. **Live MIDI permission prompt** confirms WebMIDI working in production.

*(Future updates will append here; keep log terse but clear.)*

---

### How to Publish This File

1. Save this as `ROADMAP_AND_PROCESS.md` at repo root.
2. ```bash
   git add ROADMAP_AND_PROCESS.md
   git commit -m "Add roadmap & dev‑journey log"
   git push
   ```
3. Link it in README under **Documentation**.

---

> **Remember:** keep dreaming, keep documenting. Open source thrives on clarity + possibility. ✨
