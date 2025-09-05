# Changelog

## [2.1.1](https://github.com/dorixdev/react-dual-scroll-sync/compare/v2.1.0...v2.1.1) (2025-09-05)


### 🐛 Bug Fixes

* **context:** add maxVisibleItems to DualScrollSyncContextProps interface ([4c13328](https://github.com/dorixdev/react-dual-scroll-sync/commit/4c133289d9998124cce6ac40349587f43b18ea2d))
* **DualScrollSync:** add maxVisibleItems support with docs and tests ([#27](https://github.com/dorixdev/react-dual-scroll-sync/issues/27)) ([4c13328](https://github.com/dorixdev/react-dual-scroll-sync/commit/4c133289d9998124cce6ac40349587f43b18ea2d))
* **DualScrollSync:** ensure maxVisibleItems is correctly passed from context ([4c13328](https://github.com/dorixdev/react-dual-scroll-sync/commit/4c133289d9998124cce6ac40349587f43b18ea2d))


### 📝 Documentation

* **README:** update usage patterns and examples for DualScrollSync component ([4c13328](https://github.com/dorixdev/react-dual-scroll-sync/commit/4c133289d9998124cce6ac40349587f43b18ea2d))


### ✅ Tests

* **DualScrollSyncNav:** update tests to use context mock for maxVisibleItems ([4c13328](https://github.com/dorixdev/react-dual-scroll-sync/commit/4c133289d9998124cce6ac40349587f43b18ea2d))

## [2.1.0](https://github.com/dorixdev/react-dual-scroll-sync/compare/v2.0.2...v2.1.0) (2025-09-05)


### ✨ Features

* add support for custom className and style props ([#25](https://github.com/dorixdev/react-dual-scroll-sync/issues/25)) ([202d2b6](https://github.com/dorixdev/react-dual-scroll-sync/commit/202d2b626476b50fb1cd22bbabeea618d48dae4d))

## [2.0.2](https://github.com/dorixdev/react-dual-scroll-sync/compare/v2.0.1...v2.0.2) (2025-09-05)


### 🐛 Bug Fixes

* refactor child validation logic in useValidateChildren for improved clarity ([#23](https://github.com/dorixdev/react-dual-scroll-sync/issues/23)) ([913a78b](https://github.com/dorixdev/react-dual-scroll-sync/commit/913a78be4c10670b09a3d9fbd38d2d691d74b625))

## [2.0.1](https://github.com/dorixdev/react-dual-scroll-sync/compare/v2.0.0...v2.0.1) (2025-09-04)


### ✅ Tests

* update scrollToSectionView tests for clarity and consistency ([7ee73a2](https://github.com/dorixdev/react-dual-scroll-sync/commit/7ee73a2088dd6cb9441dfefd407449330c3433c1))
* update useValidateChildren tests to use async/await for clarity and consistency ([7ee73a2](https://github.com/dorixdev/react-dual-scroll-sync/commit/7ee73a2088dd6cb9441dfefd407449330c3433c1))

## [2.0.0](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.2.3...v2.0.0) (2025-09-04)


### ⚠ BREAKING CHANGES

* **DualScrollSync:** DualScrollSync now supports a declarative compound-components API in addition to the existing `items` prop pattern.

### ✨ Features

* **DualScrollSync:** add DualScrollSyncContent component ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **DualScrollSync:** add DualScrollSyncContentSection component ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **DualScrollSync:** add DualScrollSyncLabel component ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **DualScrollSync:** add DualScrollSyncNav component ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **DualScrollSync:** add DualScrollSyncNavItem component ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **DualScrollSync:** adopt compound-components API alongside items prop ([#15](https://github.com/dorixdev/react-dual-scroll-sync/issues/15)) ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **hooks:** add useDualScrollSyncContext for accessing scroll synchronization context ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **hooks:** implement useValidateChildren to validate Nav and Content sections ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))
* **types:** introduce types for content, navigation, and labels ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))


### ⚡ Performance Improvements

* **DualScrollSync:** refactor component structure and improve test coverage ([a1c7a1f](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c7a1ff88dd17ac257a92886a08ece58aa2a750))

## [1.2.3](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.2.2...v1.2.3) (2025-08-27)

### ⚡ Performance Improvements

- dual-scroll-styles ([#13](https://github.com/dorixdev/react-dual-scroll-sync/issues/13)) ([d3d4855](https://github.com/dorixdev/react-dual-scroll-sync/commit/d3d48551a0f07a9c4fe75a92838ea56a06c6d5f6))

## [1.2.2](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.2.1...v1.2.2) (2025-08-27)

### 🐛 Bug Fixes

- sort versions and add title ([#11](https://github.com/dorixdev/react-dual-scroll-sync/issues/11)) ([2b22b66](https://github.com/dorixdev/react-dual-scroll-sync/commit/2b22b66a08c4b0c372c03c5e6a4c5d3349667d15))

## [1.2.1](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.2.0...v1.2.1) (2025-08-27)

### 🐛 Bug Fixes

- remove --if-present flag ([#9](https://github.com/dorixdev/react-dual-scroll-sync/issues/9)) ([b6b9a10](https://github.com/dorixdev/react-dual-scroll-sync/commit/b6b9a101d28c4eb0dd0b7f34e02ce0efbb3a59c5))

## [1.2.0](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.1.2...v1.2.0) (2025-08-27)

### ✨ Features

- add Storybook manager config and improve component previews ([#3](https://github.com/dorixdev/react-dual-scroll-sync/issues/3)) ([6a13f9f](https://github.com/dorixdev/react-dual-scroll-sync/commit/6a13f9f311c9eaff823569e24e99f6c758af5f94))

### 🐛 Bug Fixes

- **ci:** replace GITHUB_TOKEN to RELEASE_PLEASE_TOKEN ([#4](https://github.com/dorixdev/react-dual-scroll-sync/issues/4)) ([df8e4d1](https://github.com/dorixdev/react-dual-scroll-sync/commit/df8e4d1159c3be7f28bbb5196a0cfa7c773ab9c8))
- **CI:** update release-please action ([#7](https://github.com/dorixdev/react-dual-scroll-sync/issues/7)) ([8e35746](https://github.com/dorixdev/react-dual-scroll-sync/commit/8e357464505bdf716115566dab70348205511045))
- **DualScrollSync:** add title attribute for better accessibility ([6a13f9f](https://github.com/dorixdev/react-dual-scroll-sync/commit/6a13f9f311c9eaff823569e24e99f6c758af5f94))
- **DualScrollSync:** refine nav item styles and active indicator ([6a13f9f](https://github.com/dorixdev/react-dual-scroll-sync/commit/6a13f9f311c9eaff823569e24e99f6c758af5f94))

### ⚡ Performance Improvements

- **storybook:** update stories with new mock data (internal only) ([6a13f9f](https://github.com/dorixdev/react-dual-scroll-sync/commit/6a13f9f311c9eaff823569e24e99f6c758af5f94))

## [1.1.2](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.1.1...v1.1.2) (2025-08-25)

### 📝 Documentation

- :memo: reorganize README structure and update demo image size ([e2630ef](https://github.com/dorixdev/react-dual-scroll-sync/commit/e2630ef4be1af5f8fc0b175c674ce688d67f0573))

## [1.1.1](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.1.0...v1.1.1) (2025-08-25)

### 📝 Documentation

- :memo: add demo preview GIF for visual reference ([55f5e7a](https://github.com/dorixdev/react-dual-scroll-sync/commit/55f5e7a5cd4153eacd8ea21f943714d6439dea67))
- :memo: update README with improved badge links and demo image ([a1c628b](https://github.com/dorixdev/react-dual-scroll-sync/commit/a1c628bd30dc68db04409b2351ccc0b21696e887))

## [1.1.0](https://github.com/dorixdev/react-dual-scroll-sync/compare/v1.0.0...v1.1.0) (2025-08-25)

### ✨ Features

- :sparkles: add types for DualScrollSync component ([f255dc0](https://github.com/dorixdev/react-dual-scroll-sync/commit/f255dc05612997a65ef9b4ea86b64112c66b0bab))
- :sparkles: implement DualScrollSync component and update exports ([60f1fd7](https://github.com/dorixdev/react-dual-scroll-sync/commit/60f1fd732b06f1b740c7378e7670ed379b76c641))
- :sparkles: rename useScrollSyncObserver to useDualScrollSyncObserver and update export ([da4e3f1](https://github.com/dorixdev/react-dual-scroll-sync/commit/da4e3f10f33ab81c7afa109a8a584b5e5d23a9c1))

### 📝 Documentation

- :sparkles: add documentation and stories for DualScrollSync component ([8044096](https://github.com/dorixdev/react-dual-scroll-sync/commit/8044096e60cb25a1a951c52cb2f569cbf3032cc2))

### ✅ Tests

- :white_check_mark: add tests for DualScrollSync component and its hooks ([6969b8d](https://github.com/dorixdev/react-dual-scroll-sync/commit/6969b8dc03e5aa390ef8e51301e87f0ce6360ea7))

## [1.0.0](https://github.com/dorixdev/react-dual-scroll-sync/compare/v0.0.0...v1.0.0) (2025-08-22)

### ✨ Features

- :label: add ScrollSync types for component props and structure ([6e61d98](https://github.com/dorixdev/react-dual-scroll-sync/commit/6e61d9893eca66ffe9ef190fefa00bd26300694c))
- :sparkles: add scrollToSectionView utility function for smooth scrolling ([17aeef9](https://github.com/dorixdev/react-dual-scroll-sync/commit/17aeef9fb5a75306addecd62ca11cce54a090e44))
- :sparkles: implement ScrollSync component with navigation and content sections ([7a95d63](https://github.com/dorixdev/react-dual-scroll-sync/commit/7a95d63acfc1bececa19a2b327eab8737b2ad668))
- :sparkles: implement useScrollSyncObserver hook for synchronized scrolling behavior ([30ec6db](https://github.com/dorixdev/react-dual-scroll-sync/commit/30ec6dbcf564c81561ff98109a10390da0875287))

### 📝 Documentation

- :memo: add documentation and stories for ScrollSync component ([79ace88](https://github.com/dorixdev/react-dual-scroll-sync/commit/79ace888bbbdf6ed7d5c726d2a1793d0ea35d1c6))
- :memo: add README.md with project description, features, installation, and usage examples ([f28b6e4](https://github.com/dorixdev/react-dual-scroll-sync/commit/f28b6e40880f6a668fe926935ac1c7189135372e))

### 🎨 Styles & Theming

- :lipstick: add SCSS styles and tokens for ScrollSync component ([a3fbd5a](https://github.com/dorixdev/react-dual-scroll-sync/commit/a3fbd5acca700fb3f2d81d7c25d13a32f550bb99))

### ✅ Tests

- :white_check_mark: add tests for ScrollSync component and utility functions ([5e503b0](https://github.com/dorixdev/react-dual-scroll-sync/commit/5e503b00947951645a626e2311a7b30bf6c7c785))

## [0.0.0](https://github.com/dorixdev/react-dual-scroll-sync/compare/d84b180172c8f3d8343c7a9413694b5aec1da8d2...v0.0.0) (2025-08-22)

### ✨ Features

- :tada: add initial configuration files for TypeScript, Vite, and pnpm workspace ([d84b180](https://github.com/dorixdev/react-dual-scroll-sync/commit/d84b180172c8f3d8343c7a9413694b5aec1da8d2))
