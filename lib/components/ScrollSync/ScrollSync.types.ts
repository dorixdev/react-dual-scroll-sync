import { type PropsWithChildren } from 'react';

type ScrollSyncBaseProps = {
	label: string;
	sectionKey: string;
};

export type ScrollSyncItem = PropsWithChildren<ScrollSyncBaseProps>;

export type ScrollSyncProps = {
	/**
	 * Unique identifier for the ScrollSync component.
	 * @default 'scroll-sync'
	 */
	id?: string;
	/**
	 * Array of `ScrollSyncItem` objects.
	 * @default []
	 */
	items: ScrollSyncItem[];
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

export type ScrollSyncContentSectionProps = ScrollSyncItem & {
	className?: string;
	parentId?: string;
};

export type ScrollSyncNavItemProps = ScrollSyncBaseProps & {
	className?: string;
	parentId?: string;
	onClick: () => void;
};
