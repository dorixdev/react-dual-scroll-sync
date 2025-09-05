import clsx from 'clsx';
import type { CSSProperties, FC } from 'react';
import { Children } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncNav.module.scss';
import type { DualScrollSyncNavProps } from './DualScrollSyncNav.types';

export const DualScrollSyncNav: FC<DualScrollSyncNavProps> = ({
	children,
	className,
	maxVisibleItems = 6,
	style = {}
}) => {
	const { navId, navRef } = useDualScrollSyncContext();
	const navItemCount = Children.count(children);
	const visibleItemsCount = Math.min(maxVisibleItems, navItemCount);

	const navStyle: CSSProperties = {
		...style,
		['--menu-nav-visible-count' as string]: visibleItemsCount
	};

	return (
		<nav
			id={navId}
			data-testid={navId}
			className={clsx(styles.scrollSyncNav, className)}
			ref={navRef}
			style={navStyle}
		>
			{children}
		</nav>
	);
};

DualScrollSyncNav.displayName = 'DualScrollSync.Nav';
