import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';

import { type UseScrollSyncObserverReturn } from '../../hooks';
import { ScrollSync } from './ScrollSync';

const scrollSyncInitialState: UseScrollSyncObserverReturn = {
	activeKey: 's1',
	contentRef: { current: null },
	sectionRefs: { current: {} },
	onMenuItemSelect: vi.fn(),
	navItemRefs: { current: {} },
	navRef: { current: null }
};

const mockUseScrollSyncObserver: Mock<() => UseScrollSyncObserverReturn> = vi.fn(
	() => scrollSyncInitialState
);

vi.mock('../../hooks/useScrollSyncObserver', () => ({
	useScrollSyncObserver: () => mockUseScrollSyncObserver()
}));

describe('ScrollSync (with mocked hook)', () => {
	const items = [
		{ sectionKey: 's1', label: 'Section 1', children: <div>Content 1</div> },
		{ sectionKey: 's2', label: 'Section 2', children: <div>Content 2</div> },
		{ sectionKey: 's3', label: 'Section 3', children: <div>Content 3</div> },
		{ sectionKey: 's4', label: 'Section 4', children: <div>Content 4</div> },
		{ sectionKey: 's5', label: 'Section 5', children: <div>Content 5</div> },
		{ sectionKey: 's6', label: 'Section 6', children: <div>Content 6</div> }
	];

	beforeEach(() => {
		mockUseScrollSyncObserver.mockReturnValue(scrollSyncInitialState);
	});

	it('finds navItem and section by id and checks text', () => {
		render(<ScrollSync items={items} />);

		const navItem = document.getElementById('scroll-sync-nav-item-s2');

		expect(navItem).toBeInTheDocument();
		expect(navItem).toHaveTextContent('Section 2');

		const section = document.getElementById('scroll-sync-content-section-s2');

		expect(section).toBeInTheDocument();
		expect(section).toHaveTextContent('Section 2');
		expect(section).toHaveTextContent('Content 2');
	});

	it('highlights the active option', () => {
		mockUseScrollSyncObserver.mockReturnValue({
			...scrollSyncInitialState,
			activeKey: 's2'
		});

		render(<ScrollSync items={items} />);

		const section = screen.getByRole('button', { name: 'Section 2' });

		expect(section.className).toContain('scrollSyncNavItemActive');
	});

	it('calls handleMenuClick when an option is clicked', () => {
		const handleMenuClickMock = vi.fn();

		mockUseScrollSyncObserver.mockReturnValue({
			...scrollSyncInitialState,
			activeKey: 's2',
			onMenuItemSelect: handleMenuClickMock
		});

		render(<ScrollSync items={items} />);

		const section2Btn = screen.getByRole('button', { name: 'Section 2' });

		fireEvent.click(section2Btn);

		expect(handleMenuClickMock).toHaveBeenCalledWith('s2');
	});

	it('calls onSectionChange when an option is clicked', () => {
		const onSectionChangeMock = vi.fn();

		render(<ScrollSync items={items} onItemClick={onSectionChangeMock} />);
		const section2Btn = screen.getByRole('button', { name: 'Section 2' });
		fireEvent.click(section2Btn);

		expect(onSectionChangeMock).toHaveBeenCalledWith('s2');
	});

	it('renders with default class names when no custom class names are provided', () => {
		render(<ScrollSync items={items} id="test" />);

		const menu = document.getElementById('test');
		const menuNav = document.getElementById('test-nav');
		const menuContent = document.getElementById('test-content');
		const contentSection = document.getElementById('test-content-section-s1');
		const navItem = document.getElementById('test-nav-item-s1');

		expect(menu).toBeInTheDocument();
		expect(menuNav).toBeInTheDocument();
		expect(menuContent).toBeInTheDocument();
		expect(contentSection).toBeInTheDocument();
		expect(navItem).toBeInTheDocument();
	});
});
