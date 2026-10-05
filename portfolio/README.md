# Quynh Mai — Personal Portfolio

React + Vite + Tailwind CSS (v3). Single page, fully responsive.

## Run it
```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```

## Edit it
- All copy lives in `src/data/content.js`.
- Colors and fonts: `tailwind.config.js` (accent is `wine`).
- Your photo: `public/mai.jpg` (extracted from your CV).
- INKAT image: set `image` in `src/components/Project.jsx` (e.g. `'/inkat.jpg'`) after adding it to `public/`.
- Social links: fill `socials` in `contact` inside `content.js`.
- Leadership dates: set `period` in `leadership` inside `content.js`.
- Email: the CV reads `...@gmaill.com`; it is kept as written. Fix it in `content.js` if it is a typo.
