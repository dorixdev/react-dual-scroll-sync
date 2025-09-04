import { render } from '@testing-library/react';

import { DualScrollSyncBase } from './DualScrollSync';

describe('DualScrollSync', () => {
	it('should render children correctly', () => {
		const { getByTestId } = render(
			<DualScrollSyncBase>
				<div>Test Content</div>
			</DualScrollSyncBase>
		);

		expect(getByTestId('dual-scroll-sync')).toBeInTheDocument();
	});

	it('should render with provided id', () => {
		const { getByTestId } = render(
			<DualScrollSyncBase id="custom-id">
				<div>Test Content</div>
			</DualScrollSyncBase>
		);

		expect(getByTestId('custom-id')).toBeInTheDocument();
	});

	it('should render with provided items', () => {
		const items = [
			{ label: 'Item 1', sectionKey: 's1' },
			{ label: 'Item 2', sectionKey: 's2' }
		];

		const { getByTestId } = render(<DualScrollSyncBase items={items} id="test" />);

		expect(getByTestId('test-nav-id')).toBeInTheDocument();
		expect(getByTestId('test-nav-id-item-s1')).toBeInTheDocument();
		expect(getByTestId('test-nav-id-item-s2')).toBeInTheDocument();
		expect(getByTestId('test-content-id')).toBeInTheDocument();
		expect(getByTestId('test-content-id-section-s1')).toBeInTheDocument();
		expect(getByTestId('test-content-id-section-s2')).toBeInTheDocument();
	});

	it('should render children when items prop is not provided', () => {
		const { getByTestId, getByText } = render(
			<DualScrollSyncBase id="test">
				<h1 data-testid="child-heading">Child Heading</h1>
			</DualScrollSyncBase>
		);

		expect(getByTestId('test')).toBeInTheDocument();
		expect(getByText('Child Heading')).toBeInTheDocument();
	});
});
