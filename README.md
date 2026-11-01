# Shihab — A Developer Story

A responsive, Netflix-inspired personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide icons.

## 1. Install Node.js
Install the current LTS version of Node.js from https://nodejs.org/ . Then open a new terminal and check:

```bash
node -v
npm -v
```

## 2. Open the project
Extract this ZIP. Open the `shihab-portfolio` folder in VS Code.

## 3. Install dependencies
Open VS Code Terminal (Terminal → New Terminal) and run:

```bash
npm install
```

## 4. Start the website

```bash
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173) in your browser.

## 5. Build for publishing

```bash
npm run build
```

The production website is generated in the `dist` folder.

## Personalize before publishing

1. In `src/App.jsx`, replace `your.email@example.com` with your email.
2. Replace `yourusername` in the GitHub and LinkedIn links with your real profile URLs.
3. Edit project names, descriptions, tags and image URLs in `src/data.js`.
4. Add or remove skills in `src/data.js` so the list accurately reflects your current experience.
5. Replace the sample project images with your own screenshots when available.

## Project structure

```text
shihab-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    ├── styles.css
    └── components/
        ├── Intro.jsx
        ├── ProfileSelect.jsx
        └── ProjectModal.jsx
```

Images currently load from Unsplash, and the font loads from Google Fonts, so an internet connection is needed for those assets. All main layouts and interactions are implemented locally.
