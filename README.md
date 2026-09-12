# Mahdi Alkak — 3D Developer Portfolio

A game-inspired interactive developer portfolio built with React, Three.js, React Three Fiber and Motion.

## Stack

- React 19
- Vite 8
- Three.js
- React Three Fiber
- Drei
- Motion
- CSS (custom HUD / glass / scanline system)

## Features

- Procedural 3D landing world (no downloaded 3D model required)
- Animated energy core, orbit rings, stars, particles and floating data modules
- Mouse-driven camera parallax + scroll camera movement
- Game/HUD navigation and boot sequence
- Mission-style project cards
- Experience mission log
- Technical loadout section
- Built-in CV link
- Responsive mobile layout
- Reduced-motion accessibility support
- Optional “Visual Overdrive” effect

## Run locally

Requirements: Node.js 22+

```bash
npm install
npm run dev
```

Vite will print the local URL (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

No backend or environment variables are required for the portfolio itself.

## Where to edit content

Most portfolio content is in:

```text
src/data.js
```

That file contains:

- profile/contact details
- projects
- experience
- skills

The visual 3D world is in:

```text
src/components/World.jsx
```

The main page structure is in:

```text
src/App.jsx
```

The complete design system is in:

```text
src/styles.css
```

## CV

The current resume is copied to:

```text
public/Mahdi_Alkak_Resume.pdf
```

Replacing that file with a new PDF using the same filename automatically updates the **Open CV** links.

## Notes

The portfolio intentionally uses procedural geometry instead of a large `.glb` scene. This keeps the project much easier to customize and avoids shipping a huge game asset just for the landing page.


## Profile photo

The hero profile image is stored at `public/mahdi-profile.jpg`. Replace that file with another image using the same filename if you want to update the photo later.
