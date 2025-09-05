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

	it('should apply custom className and style', () => {
		const { getByText } = render(
			<DualScrollSyncLabel className="custom-class" style={{ borderWidth: '1px' }}>
				Styled Label
			</DualScrollSyncLabel>
		);

		const label = getByText('Styled Label');

		expect(label).toHaveClass('custom-class');
		expect(label).toHaveStyle('border-width: 1px');
	});

	it('should not apply custom className or style if children is not a string', () => {
		const { getByText } = render(
			<DualScrollSyncLabel className="custom-class" style={{ borderWidth: '1px' }}>
				<span>Styled Child</span>
			</DualScrollSyncLabel>
		);

		const label = getByText('Styled Child');

		expect(label).toBeInTheDocument();
		expect(label).not.toHaveClass('custom-class');
		expect(label).not.toHaveStyle('border-width: 1px');
	});
});
