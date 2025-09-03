import { renderHook } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { vi } from 'vitest';

import { DualScrollSyncContext } from '@/contexts';

import { useDualScrollSyncContext } from './useDualScrollSyncContext';

const mockValue = {
	contentId: 'test',
	baseId: '',
	navId: '',
	activeKey: null,
	contentRef: { current: null },
	navItemRefs: { current: {} },
	navRef: { current: null },
	sectionRefs: { current: {} },
	onMenuItemSelect: vi.fn()
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<DualScrollSyncContext.Provider value={mockValue}>{children}</DualScrollSyncContext.Provider>
	);
};

describe('useDualScrollSyncContext', () => {
	it('throws when used outside of provider', () => {
		expect(() => renderHook(() => useDualScrollSyncContext())).toThrow(
			'DualScrollSync.* must be used within <DualScrollSync>'
		);
	});

	it('returns context when used inside provider', () => {
		const { result } = renderHook(() => useDualScrollSyncContext(), {
			wrapper: Wrapper
		});
		expect(result.current).toBe(mockValue);
	});
});
