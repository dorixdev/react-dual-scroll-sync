import type { PropsWithChildren } from 'react';

import type { DualScrollSyncStyleProps } from '../DualScrollSync.types';

export type DualScrollSyncNavProps = DualScrollSyncStyleProps &
	PropsWithChildren<{ maxVisibleItems?: number }>;
