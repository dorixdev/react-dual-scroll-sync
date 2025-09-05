import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { mockOnItemClick, mockOnMenuItemSelect } from '@/setupTests';

import { DualScrollSyncNavItem } from './DualScrollSyncNavItem';

describe('DualScrollSyncNavItem', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render with correct label and sectionKey', () => {
		const { getByTestId, getByText } = render(
			<DualScrollSyncNavItem sectionKey="test-section">Test Label</DualScrollSyncNavItem>
		);

		const navItem = getByTestId('test-nav-id-item-test-section');
		expect(navItem).toBeInTheDocument();
		expect(getByText('Test Label')).toBeInTheDocument();
	});

	it('should call onMenuItemSelect and onItemClick when clicked', () => {
		const { getByTestId } = render(
			<DualScrollSyncNavItem sectionKey="clickable-section">Clickable Item</DualScrollSyncNavItem>
		);

		const navItem = getByTestId('test-nav-id-item-clickable-section');
		navItem.click();

		expect(mockOnMenuItemSelect).toHaveBeenCalledWith('clickable-section');
		expect(mockOnItemClick).toHaveBeenCalledWith('clickable-section');
	});

	it('should apply active styles when activeKey matches sectionKey', () => {
		const { getByTestId } = render(
			<DualScrollSyncNavItem sectionKey="test-section">Test Active</DualScrollSyncNavItem>
		);

		const navItem = getByTestId('test-nav-id-item-test-section');

		expect(navItem.className).toContain('scrollSyncNavItemActive');
	});

	it('should render children if not a string', () => {
		const { getByTestId, getByText } = render(
			<DualScrollSyncNavItem sectionKey="custom">
				<span>Custom Child</span>
			</DualScrollSyncNavItem>
		);

		const navItem = getByTestId('test-nav-id-item-custom');

		expect(navItem).toBeInTheDocument();
		expect(getByText('Custom Child')).toBeInTheDocument();
	});

	it('should apply custom className and style', () => {
		const { getByTestId } = render(
			<DualScrollSyncNavItem
				sectionKey="custom"
				className="custom-class"
				style={{ borderWidth: '1px' }}
			>
				<div>Styled Content</div>
			</DualScrollSyncNavItem>
		);

		const navItem = getByTestId('test-nav-id-item-custom');

		expect(navItem).toHaveClass('custom-class');
		expect(navItem).toHaveStyle('border-width: 1px');
	});
});
