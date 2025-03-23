# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# BonMech - Static Website

This is a static website for BonMech built with React + TypeScript + Vite.

## Features

- Fast, static site built with Vite
- Contact form powered by Formspree
- Responsive design with Tailwind CSS

## Setup

1. Install dependencies:
```bash
bun install
```

2. Configure environment variables:
   - Create a `.env` file in the root directory (copy from `.env.example`)
   - Replace the `VITE_FORMSPREE_ID` value with your actual Formspree form ID
   - You can create a form at [formspree.io](https://formspree.io)

## Development

```bash
bun dev
```

## Building for Production

```bash
bun build
```

The build output will be in the `dist` directory, which can be deployed to any static hosting service.

## Deployment

Deploy the `dist` directory to any static hosting service like Vercel, Netlify, GitHub Pages, etc.

When deploying to hosting services, make sure to configure the environment variable `VITE_FORMSPREE_ID` in their respective environment settings.
