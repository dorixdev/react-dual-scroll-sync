# @dorixdev/react-dual-scroll-sync

A lightweight React library to synchronize a vertical navigation menu with scrollable content sections. Ideal for advanced catalogs, filter drawers, and any layout that needs a **sticky nav** that tracks the **visible section** and enables **smooth scroll**.

<p align="center">
  <a href="https://www.npmjs.com/package/@dorixdev/react-dual-scroll-sync">
    <img alt="npm version" src="https://img.shields.io/npm/v/@dorixdev/react-dual-scroll-sync?logo=npm&color=cb3837">
  </a>
  <a href="https://github.com/dorixdev/react-dual-scroll-sync/actions/workflows/release.yml">
    <img alt="build status" src="https://github.com/dorixdev/react-dual-scroll-sync/actions/workflows/release.yml/badge.svg?branch=main">
  </a>
	<a href="https://react-dual-scroll-sync.vercel.app">
    <img alt="docs" src="https://img.shields.io/badge/docs-Storybook-ff4785?logo=storybook">
  </a>
  <a href="https://bundlephobia.com/package/@dorixdev/react-dual-scroll-sync">
    <img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@dorixdev/react-dual-scroll-sync?label=size&logo=webpack">
  </a>
	<a href="./LICENSE">
    <img alt="license" src="https://img.shields.io/badge/License-MIT-blue.svg">
  </a>
</p>

<p align="center">
  <img alt="Demo" src="https://raw.githubusercontent.com/dorixdev/react-dual-scroll-sync/main/demo/preview.gif" width="720" />
</p>

### 💡 Features

- 🔗 **Sync state** between a vertical nav and the currently visible content section
- 🧭 **Programmatic scroll** to a section when a menu item is selected
- ✨ **Active item highlighting** and nav auto-scroll to keep it in view
- 🎨 **Themable styles**: override CSS variables to match your design
- 🧪 **Typed** (TypeScript) & framework-agnostic CSS

## 📦 Installation

```bash
pnpm add @dorixdev/react-dual-scroll-sync
# or
npm i @dorixdev/react-dual-scroll-sync
```

## 💄 Styles

Import the packaged CSS once in your app:

```ts
// e.g., main.tsx or App.tsx
import '@dorixdev/react-dual-scroll-sync/styles.css';
```

## 🚀 Quick start

```tsx
import { DualScrollSync } from '@dorixdev/react-dual-scroll-sync';

const items = [
	{ sectionKey: 's1', label: 'Section 1', children: <div>…</div> },
	{ sectionKey: 's2', label: 'Section 2', children: <div>…</div> },
	{ sectionKey: 's3', label: 'Section 3', children: <div>…</div> }
];

export default function Demo() {
	return (
		<DualScrollSync
			id="filters"
			items={items}
			maxVisibleItems={6}
			onItemClick={(key) => console.log('Selected', key)}
		/>
	);
}
```

## 📘 Documentation

Explore all props, variations, and usage guidelines in the [Storybook docs](https://react-dual-scroll-sync.vercel.app).

## License

This project is licensed under the [MIT License](LICENSE).
