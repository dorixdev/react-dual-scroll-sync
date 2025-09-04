import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { DualScrollSyncLabel } from './DualScrollSyncLabel';

describe('DualScrollSyncLabel', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render with correct label', () => {
		const { getByText } = render(<DualScrollSyncLabel>Test Label</DualScrollSyncLabel>);

		expect(getByText('Test Label')).toBeInTheDocument();
	});

	it('should render children when not a string', () => {
		const { getByText } = render(
			<DualScrollSyncLabel>
				<strong>Bold Label</strong>
			</DualScrollSyncLabel>
		);

		expect(getByText('Bold Label')).toBeInTheDocument();
		expect(getByText('Bold Label').tagName).toBe('STRONG');
	});
});
