import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { IntersectionObserverMock } from '@/setupTests';

async function importDualScrollSyncModule() {
	vi.resetModules();
	vi.doUnmock('./useDualScrollSyncContext');
	const { DualScrollSync } = await import('@/components/DualScrollSync');
	return { DualScrollSync };
}

function mockRect(el: Element, rect: Partial<DOMRect>) {
	const base: DOMRect = {
		x: 0,
		y: 0,
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: 0,
		height: 0,
		toJSON: () => ({})
	};

	Object.defineProperty(el, 'getBoundingClientRect', {
		value: () => ({ ...base, ...rect }),
		configurable: true
	});
}

const options = [
	{
		sectionKey: 's1',
		label: 'Section 1',
		children: <div data-testid="inner-s1" />
	},
	{
		sectionKey: 's2',
		label: 'Section 2',
		children: <div data-testid="inner-s2" />
	}
];

describe('implementation of useScrollSyncObserver', async () => {
	const { DualScrollSync } = await importDualScrollSyncModule();

	beforeEach(() => {
		vi.useFakeTimers();
		IntersectionObserverMock.instances = [];
		vi.clearAllMocks();
	});

	it('scrolls and marks the correct NavItem active on click', () => {
		const onSectionChange = vi.fn();

		render(<DualScrollSync id="dual-scroll-sync" items={options} onItemClick={onSectionChange} />);

		const content = screen.getByTestId('dual-scroll-sync-content');
		const sectionTwo = screen.getByTestId('dual-scroll-sync-content-section-s2');
		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		mockRect(content, { top: 100, height: 200 });
		mockRect(sectionTwo, { top: 250, height: 300 });

		act(() => {
			fireEvent.click(btnTwo);
		});

		expect(btnTwo.className).toContain('scrollSyncNavItemActive');
		expect(onSectionChange).toHaveBeenCalledWith('s2');

		expect(HTMLElement.prototype.scrollTo).toHaveBeenCalledWith({
			top: 150,
			behavior: 'smooth'
		});

		act(() => {
			vi.advanceTimersByTime(500);
		});
	});

	it('ignores IntersectionObserver while isScrollingByClick is true and then applies', () => {
		render(<DualScrollSync id="dual-scroll-sync" items={options} />);

		const content = screen.getByTestId('dual-scroll-sync-content');
		const sectionOne = screen.getByTestId('dual-scroll-sync-content-section-s1');
		const sectionTwo = screen.getByTestId('dual-scroll-sync-content-section-s2');

		const btnOne = screen.getByTestId('dual-scroll-sync-nav-item-s1');
		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		mockRect(content, { top: 100, height: 200 });
		mockRect(sectionOne, { top: 120, height: 300 });
		mockRect(sectionTwo, { top: 260, height: 300 });

		act(() => fireEvent.click(btnTwo));
		act(() => vi.advanceTimersByTime(1_000));

		expect(btnOne.className).not.toContain('scrollSyncNavItemActive');
		expect(btnTwo.className).toContain('scrollSyncNavItemActive');
	});

	it('removes keys from Set when an entry stops intersecting (delete branch + re-selection)', () => {
		render(<DualScrollSync id="dual-scroll-sync" items={options} />);

		const content = screen.getByTestId('dual-scroll-sync-content');
		const sectionOne = screen.getByTestId('dual-scroll-sync-content-section-s1');
		const sectionTwo = screen.getByTestId('dual-scroll-sync-content-section-s2');

		const btnOne = screen.getByTestId('dual-scroll-sync-nav-item-s1');
		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		mockRect(content, { top: 100, height: 400 });
		mockRect(sectionOne, { top: 120, height: 300 });
		mockRect(sectionTwo, { top: 260, height: 300 });

		const observer = IntersectionObserverMock.instances[0];

		act(() => {
			observer.trigger([
				{
					isIntersecting: true,
					target: sectionOne,
					boundingClientRect: { top: 120 } as DOMRectReadOnly
				},
				{
					isIntersecting: true,
					target: sectionTwo,
					boundingClientRect: { top: 260 } as DOMRectReadOnly
				}
			]);
		});

		expect(btnOne.className).toContain('scrollSyncNavItemActive');
		expect(btnTwo.className).not.toContain('scrollSyncNavItemActive');

		act(() => {
			observer.trigger([
				{
					isIntersecting: false,
					target: sectionOne,
					boundingClientRect: { top: 120 } as DOMRectReadOnly
				}
			]);
		});

		expect(btnTwo.className).toContain('scrollSyncNavItemActive');
		expect(btnOne.className).not.toContain('scrollSyncNavItemActive');
	});

	it('selects the section visually higher based on getBoundingClientRect().top', () => {
		render(<DualScrollSync id="dual-scroll-sync" items={options} />);

		const content = screen.getByTestId('dual-scroll-sync-content');
		const sectionOne = screen.getByTestId('dual-scroll-sync-content-section-s1');
		const sectionTwo = screen.getByTestId('dual-scroll-sync-content-section-s2');

		const btnOne = screen.getByTestId('dual-scroll-sync-nav-item-s1');
		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		mockRect(content, { top: 100, height: 400 });
		mockRect(sectionOne, { top: 300, height: 300 });
		mockRect(sectionTwo, { top: 150, height: 300 });

		const observer = IntersectionObserverMock.instances[0];

		act(() => {
			observer.trigger([
				{
					isIntersecting: true,
					target: sectionOne,
					boundingClientRect: { top: 300 } as DOMRectReadOnly
				},
				{
					isIntersecting: true,
					target: sectionTwo,
					boundingClientRect: { top: 150 } as DOMRectReadOnly
				}
			]);
		});

		expect(btnTwo.className).toContain('scrollSyncNavItemActive');
		expect(btnOne.className).not.toContain('scrollSyncNavItemActive');
	});

	it('cleans up timeout on click on nav item', () => {
		const clearTimeout = vi.spyOn(global, 'clearTimeout');

		render(<DualScrollSync id="dual-scroll-sync" items={options} />);

		const btnOne = screen.getByTestId('dual-scroll-sync-nav-item-s1');
		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		act(() => fireEvent.click(btnTwo));
		expect(clearTimeout).toHaveBeenCalledTimes(0);

		act(() => fireEvent.click(btnOne));
		expect(clearTimeout).toHaveBeenCalledTimes(1);
	});

	it('cleans up timeout on unmount', () => {
		const clearTimeout = vi.spyOn(global, 'clearTimeout');

		const { unmount } = render(<DualScrollSync id="dual-scroll-sync" items={options} />);

		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		act(() => fireEvent.click(btnTwo));
		expect(clearTimeout).toHaveBeenCalledTimes(0);

		act(() => unmount());
		expect(clearTimeout).toHaveBeenCalledTimes(1);
	});

	it('ignores IntersectionObserver while isScrollingByClick is true', () => {
		render(<DualScrollSync id="dual-scroll-sync" items={options} />);

		const content = screen.getByTestId('dual-scroll-sync-content');
		const sectionOne = screen.getByTestId('dual-scroll-sync-content-section-s1');
		const sectionTwo = screen.getByTestId('dual-scroll-sync-content-section-s2');

		const btnOne = screen.getByTestId('dual-scroll-sync-nav-item-s1');
		const btnTwo = screen.getByTestId('dual-scroll-sync-nav-item-s2');

		mockRect(content, { top: 100, height: 200 });
		mockRect(sectionOne, { top: 120, height: 300 });
		mockRect(sectionTwo, { top: 260, height: 300 });

		const observer = IntersectionObserverMock.instances[0];

		act(() => fireEvent.click(btnTwo));
		act(() => vi.advanceTimersByTime(500));

		act(() => {
			observer.trigger([
				{
					isIntersecting: true,
					target: sectionOne,
					boundingClientRect: { top: 120 } as DOMRectReadOnly
				},
				{
					isIntersecting: true,
					target: sectionTwo,
					boundingClientRect: { top: 260 } as DOMRectReadOnly
				}
			]);
		});

		expect(btnOne.className).not.toContain('scrollSyncNavItemActive');
		expect(btnTwo.className).toContain('scrollSyncNavItemActive');
	});
});
