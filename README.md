# @dorixdev/react-dual-scroll-sync

A lightweight React library to synchronize a vertical navigation menu with scrollable content sections. Ideal for advanced catalogs, filter drawers, and any layout that needs a **sticky nav** that tracks the **visible section** and enables **smooth scroll**.

[![npm version](https://img.shields.io/npm/v/@dorixdev/react-dual-scroll-sync?logo=npm&color=cb3837)](https://www.npmjs.com/package/@dorixdev/react-dual-scroll-sync)
[![Release to npm](https://github.com/dorixdev/react-dual-scroll-sync/actions/workflows/release.yml/badge.svg)](https://github.com/dorixdev/react-dual-scroll-sync/actions/workflows/release.yml)
[![docs](https://img.shields.io/badge/docs-Storybook-ff4785?logo=storybook)](https://react-dual-scroll-sync.vercel.app)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@dorixdev/react-dual-scroll-sync?label=size&logo=webpack)](https://bundlephobia.com/package/@dorixdev/react-dual-scroll-sync)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## 💡 Features

- 🔗 **Sync state** between a vertical nav and the currently visible content section
- 🧭 **Programmatic scroll** to a section when a menu item is selected
- ✨ **Active item highlighting** and nav auto-scroll to keep it in view
- 🎨 **Themable styles**: override CSS variables to match your design
- 🧪 **Typed** (TypeScript) & framework-agnostic CSS

## 🎥 Demo

<img alt="Demo" src="https://raw.githubusercontent.com/dorixdev/react-dual-scroll-sync/main/demo/preview.gif" width="360" />

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
