import clsx from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import { useScrollSyncObserver } from '../../hooks';
import styles from './ScrollSync.module.scss';
import type {
	ScrollSyncContentSectionProps,
	ScrollSyncNavItemProps,
	ScrollSyncProps
} from './ScrollSync.types';

export function ScrollSync({ id, items, onItemClick, maxVisibleItems = 6 }: ScrollSyncProps) {
	const baseMenuId = id ?? 'scroll-sync';
	const navId = `${baseMenuId}-nav`;
	const contentId = `${baseMenuId}-content`;

	const visibleItemsCount = Math.min(items.length, maxVisibleItems || 1);

	const navStyle: CSSProperties = {
		['--menu-nav-visible-count' as string]: visibleItemsCount
	};

	const { activeKey, contentRef, sectionRefs, navItemRefs, navRef, onMenuItemSelect } =
		useScrollSyncObserver();

	const handleMenuItemClick = (key: string) => {
		onMenuItemSelect(key);
		if (onItemClick) onItemClick(key);
	};

	return (
		<section id={baseMenuId} data-testid={baseMenuId} className={styles.scrollSync}>
			<nav
				id={navId}
				data-testid={navId}
				className={styles.scrollSyncNav}
				ref={navRef}
				style={navStyle}
			>
				{items.map(({ sectionKey, label }) => (
					<ScrollSync.NavItem
						className={clsx(
							styles.scrollSyncNavItem,
							activeKey === sectionKey && styles.scrollSyncNavItemActive
						)}
						parentId={navId}
						key={sectionKey}
						label={label}
						onClick={() => handleMenuItemClick(sectionKey)}
						sectionKey={sectionKey}
						ref={(navItemRef) => {
							navItemRefs.current[sectionKey] = navItemRef;
						}}
					/>
				))}
			</nav>

			<section
				className={styles.scrollSyncContent}
				data-testid={contentId}
				id={contentId}
				ref={contentRef}
			>
				{items.map(({ sectionKey, label, children }) => (
					<ScrollSync.ContentSection
						className={styles.scrollSyncContentSection}
						parentId={contentId}
						key={sectionKey}
						label={label}
						ref={(contentRef) => {
							sectionRefs.current[sectionKey] = contentRef;
						}}
						sectionKey={sectionKey}
					>
						{children}
					</ScrollSync.ContentSection>
				))}
			</section>
		</section>
	);
}

ScrollSync.NavItem = forwardRef<HTMLButtonElement, ScrollSyncNavItemProps>(
	function ScrollSyncOption({ parentId, onClick, sectionKey, label, className }, ref) {
		const navItemId = `${parentId}-item-${sectionKey}`;

		return (
			<button
				className={className}
				data-option={sectionKey}
				data-testid={navItemId}
				id={navItemId}
				onClick={onClick}
				ref={ref}
			>
				<span className={styles.scrollSyncNavItemLabel} title={label}>
					{label}
				</span>
			</button>
		);
	}
);

ScrollSync.ContentSection = forwardRef<HTMLElement, ScrollSyncContentSectionProps>(
	function ScrollSyncSection({ parentId, sectionKey, label, children, className }, ref) {
		const contentSectionId = `${parentId}-section-${sectionKey}`;

		return (
			<article
				className={className}
				data-section={sectionKey}
				data-testid={contentSectionId}
				id={contentSectionId}
				ref={ref}
			>
				<span className={styles.scrollSyncContentSectionLabel}>{label}</span>
				{children}
			</article>
		);
	}
);
