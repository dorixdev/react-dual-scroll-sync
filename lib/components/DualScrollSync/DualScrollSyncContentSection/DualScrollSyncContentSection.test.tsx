import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { DualScrollSyncContentSection } from './DualScrollSyncContentSection';

describe('DualScrollSyncContentSection', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render with correct label and sectionKey', () => {
		const { getByTestId, getByText } = render(
			<DualScrollSyncContentSection sectionKey="test-section">
				<div>Test Content</div>
			</DualScrollSyncContentSection>
		);

		const contentSection = getByTestId('test-content-id-section-test-section');

		expect(contentSection).toBeInTheDocument();
		expect(getByText('Test Content')).toBeInTheDocument();
	});
});
