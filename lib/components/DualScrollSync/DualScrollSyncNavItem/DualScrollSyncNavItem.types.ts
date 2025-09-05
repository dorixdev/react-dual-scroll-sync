import type { PropsWithChildren } from 'react';

import type { DualScrollSyncOptions, DualScrollSyncStyleProps } from '../DualScrollSync.types';

export type DualScrollSyncNavItemProps = PropsWithChildren<
	DualScrollSyncStyleProps & Pick<DualScrollSyncOptions, 'sectionKey'>
>;
