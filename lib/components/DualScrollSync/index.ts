import { DualScrollSync as DualScrollSyncBase } from './DualScrollSync';
import type { DualScrollSyncType } from './DualScrollSync.types';
import { DualScrollSyncContent } from './DualScrollSyncContent';
import { DualScrollSyncContentSection } from './DualScrollSyncContentSection/DualScrollSyncContentSection';
import { DualScrollSyncLabel } from './DualScrollSyncLabel';
import { DualScrollSyncNav } from './DualScrollSyncNav';
import { DualScrollSyncNavItem } from './DualScrollSyncNavItem';

export type { DualScrollSyncItem, DualScrollSyncProps } from './DualScrollSync.types';
export type * from './DualScrollSyncContent';
export type * from './DualScrollSyncContentSection';
export type * from './DualScrollSyncNav';
export type * from './DualScrollSyncNavItem';

export const DualScrollSync: DualScrollSyncType = Object.assign(DualScrollSyncBase, {
	Nav: DualScrollSyncNav,
	NavItem: DualScrollSyncNavItem,
	Content: DualScrollSyncContent,
	ContentSection: DualScrollSyncContentSection,
	Label: DualScrollSyncLabel
});
