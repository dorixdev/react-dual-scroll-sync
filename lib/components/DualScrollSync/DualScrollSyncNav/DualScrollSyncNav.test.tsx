import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { DualScrollSyncNav } from './DualScrollSyncNav';

describe('DualScrollSyncNav', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render children correctly', () => {
		const { getByTestId } = render(
			<DualScrollSyncNav>
				<div>Test Content</div>
			</DualScrollSyncNav>
		);

		expect(getByTestId('test-nav-id')).toBeInTheDocument();
	});

	it('should apply maxVisibleItems correctly', () => {
		const { getByTestId } = render(
			<DualScrollSyncNav maxVisibleItems={3}>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
			</DualScrollSyncNav>
		);

		const navElement = getByTestId('test-nav-id');
		expect(navElement).toHaveStyle({ '--menu-nav-visible-count': '3' });
	});

	it('should limit visible items to the number of children if fewer than maxVisibleItems', () => {
		const { getByTestId } = render(
			<DualScrollSyncNav maxVisibleItems={5}>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</DualScrollSyncNav>
		);

		const navElement = getByTestId('test-nav-id');
		expect(navElement).toHaveStyle({ '--menu-nav-visible-count': '3' });
	});

	it('should apply custom className and style', () => {
		const { getByTestId } = render(
			<DualScrollSyncNav className="custom-class" style={{ borderWidth: '1px' }}>
				<div>Styled Content</div>
			</DualScrollSyncNav>
		);

		const nav = getByTestId('test-nav-id');

		expect(nav).toHaveClass('custom-class');
		expect(nav).toHaveStyle('border-width: 1px');
	});
});
