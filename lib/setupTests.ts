import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

import * as hooks from '@/hooks';

afterEach(() => {
	cleanup();
});

// This is necessary because JSDOM does not implement scrollTo
Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
	value: vi.fn(function scrollToMock(this: HTMLElement, opts: ScrollToOptions) {
		if (typeof opts?.top === 'number') {
			this.scrollTop = opts.top;
		}
	}),
	writable: true
});

// This mock is necessary because JSDOM does not implement IntersectionObserver
export class IntersectionObserverMock implements IntersectionObserver {
	static readonly instances: IntersectionObserverMock[] = [];
	callback: IntersectionObserverCallback;
	elements: Element[] = [];
	root: Element | Document | null = null;
	rootMargin = '';
	thresholds: ReadonlyArray<number> = [];

	constructor(cb: IntersectionObserverCallback, options?: IntersectionObserverInit) {
		this.callback = cb;
		if (options?.root) this.root = options.root;
		if (options?.rootMargin) this.rootMargin = options.rootMargin;
		if (options?.threshold) {
			this.thresholds = Array.isArray(options.threshold) ? options.threshold : [options.threshold];
		}
		IntersectionObserverMock.instances.push(this);
	}
	unobserve = vi.fn();
	disconnect = vi.fn();
	takeRecords = vi.fn(() => []);
	observe = (el: Element) => {
		this.elements.push(el);
	};
	trigger(entries: Partial<IntersectionObserverEntry>[]) {
		this.callback(entries as IntersectionObserverEntry[], this);
	}
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

export const mockOnItemClick = vi.fn();
export const mockOnMenuItemSelect = vi.fn();

vi.spyOn(hooks, 'useDualScrollSyncContext').mockReturnValue({
	contentId: 'test-content-id',
	navId: 'test-nav-id',
	baseId: 'test',
	activeKey: 'test-section',
	contentRef: { current: null },
	navItemRefs: { current: {} },
	navRef: { current: null },
	sectionRefs: { current: {} },
	onMenuItemSelect: mockOnMenuItemSelect,
	onItemClick: mockOnItemClick
});
