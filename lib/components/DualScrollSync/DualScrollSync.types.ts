import { type CSSProperties, type FC, type PropsWithChildren } from 'react';

import type { DualScrollSyncContentProps } from './DualScrollSyncContent';
import type { DualScrollSyncContentSectionProps } from './DualScrollSyncContentSection';
import type { DualScrollSyncLabelProps } from './DualScrollSyncLabel';
import type { DualScrollSyncNavProps } from './DualScrollSyncNav';
import type { DualScrollSyncNavItemProps } from './DualScrollSyncNavItem';

export type DualScrollSyncStyleProps = {
	className?: string;
	style?: CSSProperties;
};

export type DualScrollSyncOptions = {
	label: string;
	sectionKey: string;
};

export type DualScrollSyncItem = PropsWithChildren<DualScrollSyncOptions>;

export type DualScrollSyncProps = PropsWithChildren<
	DualScrollSyncStyleProps & {
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
	}
>;

export type DualScrollSyncType = FC<DualScrollSyncProps> & {
	Nav: FC<DualScrollSyncNavProps>;
	NavItem: FC<DualScrollSyncNavItemProps>;
	Content: FC<DualScrollSyncContentProps>;
	ContentSection: FC<DualScrollSyncContentSectionProps>;
	Label: FC<DualScrollSyncLabelProps>;
};
