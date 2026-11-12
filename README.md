# Nikil Patel — personal website

A static, five-page personal site (home, about, experience, projects, contact). No build step and no dependencies, so it runs on GitHub Pages as-is.

## Edit your contact links

Open `assets/config.js` and fill in `email`, `linkedin`, and `resume`. Empty values stay hidden. To add a resume, put the PDF in `assets/` and set `resume` to its path.

## Publish with GitHub Pages

1. In the repo on GitHub, go to **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then save.
4. After a minute or two the site is live at `https://nikilpatel1.github.io/personalcodeproject/`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html`, `about.html`, `experience.html`, `projects.html`, `contact.html`
- `assets/style.css`: all styling
- `assets/main.js`: current-page highlight and contact links
- `assets/config.js`: your contact details
