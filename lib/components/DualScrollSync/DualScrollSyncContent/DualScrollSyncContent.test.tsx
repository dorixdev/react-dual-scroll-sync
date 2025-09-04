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
});
