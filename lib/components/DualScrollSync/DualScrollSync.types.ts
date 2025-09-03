import { type PropsWithChildren } from 'react';

import type { DualScrollSync } from './DualScrollSync';
import type { DualScrollSyncContent } from './DualScrollSyncContent';
import type { DualScrollSyncContentSection } from './DualScrollSyncContentSection';
import type { DualScrollSyncLabel } from './DualScrollSyncLabel';
import type { DualScrollSyncNav } from './DualScrollSyncNav';
import type { DualScrollSyncNavItem } from './DualScrollSyncNavItem';

export type DualScrollSyncStyleProps = {
	className?: string;
	style?: React.CSSProperties;
};

export type DualScrollSyncOptions = {
	label: string;
	sectionKey: string;
};

export type DualScrollSyncItem = PropsWithChildren<DualScrollSyncOptions>;

export type DualScrollSyncProps = PropsWithChildren<{
	/**
	 * Unique identifier for the DualScrollSync component. (Optional)
	 * @default 'dual-scroll-sync'
	 */
	id?: string;
	/**
	 * Array of `DualScrollSyncItem` objects.
	 * If provided, the component will auto-generate the navigation menu and content sections and ignore any children passed directly to it. (Optional)
	 * @default []
	 */
	items?: DualScrollSyncItem[];
	/**
	 * Maximum visible items in the navigation menu. If the number of items exceeds this value, scrolling is activated. (Optional)
	 * @default 6
	 */
	maxVisibleItems?: number;
	/**
	 * Callback function triggered when active section changes.
	 * @param activeKey - The key of the active section.
	 * @default () => {}
	 */
	onItemClick?: (activeKey: string) => void;
}>;

export type DualScrollSyncType = typeof DualScrollSync & {
	Nav: typeof DualScrollSyncNav;
	NavItem: typeof DualScrollSyncNavItem;
	Content: typeof DualScrollSyncContent;
	ContentSection: typeof DualScrollSyncContentSection;
	Label: typeof DualScrollSyncLabel;
};
