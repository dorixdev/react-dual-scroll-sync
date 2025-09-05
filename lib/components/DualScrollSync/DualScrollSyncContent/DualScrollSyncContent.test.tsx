import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { DualScrollSyncContent } from './DualScrollSyncContent';

describe('DualScrollSyncContent', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render children correctly', () => {
		const { getByTestId } = render(
			<DualScrollSyncContent>
				<div>Test Content</div>
			</DualScrollSyncContent>
		);

		expect(getByTestId('test-content-id')).toBeInTheDocument();
	});

	it('should apply custom className and style', () => {
		const { getByTestId } = render(
			<DualScrollSyncContent className="custom-class" style={{ borderWidth: '1px' }}>
				<div>Styled Content</div>
			</DualScrollSyncContent>
		);

		const content = getByTestId('test-content-id');

		expect(content).toHaveClass('custom-class');
		expect(content).toHaveStyle('border-width: 1px');
	});
});
