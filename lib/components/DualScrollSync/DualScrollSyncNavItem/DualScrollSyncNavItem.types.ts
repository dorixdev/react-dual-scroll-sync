import type { PropsWithChildren } from 'react';

import type { DualScrollSyncOptions, DualScrollSyncStyleProps } from '../DualScrollSync.types';

export type DualScrollSyncNavItemProps = Pick<DualScrollSyncOptions, 'sectionKey'> &
	PropsWithChildren<DualScrollSyncStyleProps>;
