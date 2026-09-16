# InnovaX ERP — Landing

Landing de planes (Básico / Intermedio / A Medida) del ERP de InnovaX, hecha con React + Vite.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para deployar (Vercel, Netlify, GitHub Pages, etc).

## Estructura

```
src/
  components/   Nav, Hero, Modules, Pricing, Why, Cta, Footer
  hooks/        useReveal.js — animación de aparición al hacer scroll
  index.css     tokens de color/tipografía y estilos globales
  App.jsx       arma la página
```
