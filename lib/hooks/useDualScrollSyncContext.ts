import { useContext } from 'react';

import { DualScrollSyncContext } from '@/contexts';

export const useDualScrollSyncContext = () => {
	const ctx = useContext(DualScrollSyncContext);
	if (!ctx) throw new Error('DualScrollSync.* must be used within <DualScrollSync>');
	return ctx;
};
