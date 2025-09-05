import type { PropsWithChildren } from 'react';

import type { DualScrollSyncOptions, DualScrollSyncStyleProps } from '../DualScrollSync.types';

export type DualScrollSyncContentSectionProps = PropsWithChildren<
	DualScrollSyncStyleProps & Pick<DualScrollSyncOptions, 'sectionKey'>
>;
