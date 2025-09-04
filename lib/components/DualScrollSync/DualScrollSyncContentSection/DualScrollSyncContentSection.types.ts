import type { DualScrollSyncItem, DualScrollSyncStyleProps } from '../DualScrollSync.types';

export type DualScrollSyncContentSectionProps = Omit<DualScrollSyncItem, 'label'> &
	DualScrollSyncStyleProps;
