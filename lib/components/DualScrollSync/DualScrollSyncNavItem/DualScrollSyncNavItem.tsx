import clsx from 'clsx';
import type { FC } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncNavItem.module.scss';
import type { DualScrollSyncNavItemProps } from './DualScrollSyncNavItem.types';

export const DualScrollSyncNavItem: FC<DualScrollSyncNavItemProps> = ({
	children,
	className,
	sectionKey,
	style = {}
}) => {
	const { navId, onMenuItemSelect, onItemClick, activeKey, navItemRefs } =
		useDualScrollSyncContext();

	const navItemId = `${navId}-item-${sectionKey}`;

	const handleMenuItemClick = () => {
		onMenuItemSelect(sectionKey);
		if (onItemClick) onItemClick(sectionKey);
	};

	return (
		<button
			className={clsx(
				styles.scrollSyncNavItem,
				activeKey === sectionKey && styles.scrollSyncNavItemActive,
				className
			)}
			style={style}
			data-testid={navItemId}
			id={navItemId}
			onClick={handleMenuItemClick}
			ref={(navItemRef) => {
				if (!navItemRef) return;
				navItemRefs.current[sectionKey] = navItemRef;
			}}
		>
			{typeof children === 'string' ? (
				<span className={styles.scrollSyncNavItemLabel} title={children}>
					{children}
				</span>
			) : (
				children
			)}
		</button>
	);
};

DualScrollSyncNavItem.displayName = 'DualScrollSync.NavItem';
