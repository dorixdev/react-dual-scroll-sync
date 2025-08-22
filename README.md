# @dorixdev/scroll-sync

A lightweight React library to synchronize a vertical navigation menu with scrollable content sections. Ideal for advanced catalogs, filter drawers, and any layout that needs a **sticky nav** that tracks the **visible section** and enables **smooth scroll**.

<p align="center">
  <a href="https://www.npmjs.com/package/@dorixdev/scroll-sync"><img alt="npm" src="https://img.shields.io/npm/v/@dorixdev/scroll-sync.svg"></a>
  <a href="https://github.com/dorixdev/scroll-sync/actions"><img alt="CI" src="https://github.com/dorixdev/scroll-sync/workflows/Release%20to%20npm/badge.svg"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

---

### 💡 Features

- 🔗 **Sync state** between a vertical nav and the currently visible content section
- 🧭 **Programmatic scroll** to a section when a menu item is selected
- ✨ **Active item highlighting** and nav auto-scroll to keep it in view
- 🎨 **Themable styles**: override CSS variables to match your design
- 🧪 **Typed** (TypeScript) & framework-agnostic CSS

## 📦 Installation

```bash
pnpm add @dorixdev/scroll-sync
# or
npm i @dorixdev/scroll-sync
```

## 💄 Styles

Import the packaged CSS once in your app:

```ts
// e.g., main.tsx or App.tsx
import '@dorixdev/scroll-sync/styles.css';
```

## 🚀 Quick start

```tsx
import { ScrollSync } from '@dorixdev/scroll-sync';

const items = [
	{ sectionKey: 's1', label: 'Section 1', children: <div>…</div> },
	{ sectionKey: 's2', label: 'Section 2', children: <div>…</div> },
	{ sectionKey: 's3', label: 'Section 3', children: <div>…</div> }
];

export default function Demo() {
	return (
		<ScrollSync
			id="filters"
			items={items}
			maxVisibleItems={6}
			onItemClick={(key) => console.log('Selected', key)}
		/>
	);
}
```

## 📘 Documentation

Explore all props, variations, and usage guidelines in the [Storybook docs](https://68a8bb27946b9332f33d8ff0-lqeqrqxzyr.chromatic.com/).

## License

This project is licensed under the [MIT License](LICENSE).
