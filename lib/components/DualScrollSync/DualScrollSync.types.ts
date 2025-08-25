import { type PropsWithChildren } from 'react';

type DualScrollSyncBaseProps = {
	label: string;
	sectionKey: string;
};

export type DualScrollSyncItem = PropsWithChildren<DualScrollSyncBaseProps>;

export type DualScrollSyncProps = {
	/**
	 * Unique identifier for the DualScrollSync component.
	 * @default 'dual-scroll-sync'
	 */
	id?: string;
	/**
	 * Array of `ScrollSyncItem` objects.
	 * @default []
	 */
	items: DualScrollSyncItem[];
	/**
	 * Maximum visible items in the navigation menu. If the number of items exceeds this value, scrolling is activated.
	 * @default 6
	 */
	maxVisibleItems?: number;
	/**
	 * Callback function triggered when active section changes.
	 * @param activeKey - The key of the active section.
	 * @default () => {}
	 */
	onItemClick?: (activeKey: string) => void;
};

export type DualScrollSyncContentSectionProps = DualScrollSyncItem & {
	className?: string;
	parentId?: string;
};

export type DualScrollSyncNavItemProps = DualScrollSyncBaseProps & {
	className?: string;
	parentId?: string;
	onClick: () => void;
};
