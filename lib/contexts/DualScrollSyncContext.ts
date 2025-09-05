import { createContext } from 'react';

import type { UseScrollSyncObserverReturn } from '@/hooks';

export interface DualScrollSyncContextProps extends UseScrollSyncObserverReturn {
	baseId: string;
	navId: string;
	contentId: string;
	maxVisibleItems: number;
	onItemClick?: (activeKey: string) => void;
}

export const DualScrollSyncContext = createContext<DualScrollSyncContextProps | null>(null);

DualScrollSyncContext.displayName = 'DualScrollSyncContext';
