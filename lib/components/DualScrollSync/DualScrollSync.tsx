import clsx from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import { useScrollSyncObserver } from '../../hooks';
import styles from './DualScrollSync.module.scss';
import type {
	DualScrollSyncContentSectionProps,
	DualScrollSyncNavItemProps,
	DualScrollSyncProps
} from './DualScrollSync.types';

export function DualScrollSync({
	id,
	items,
	onItemClick,
	maxVisibleItems = 6
}: DualScrollSyncProps) {
	const baseMenuId = id ?? 'dual-scroll-sync';
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
					<DualScrollSync.NavItem
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
					<DualScrollSync.ContentSection
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
					</DualScrollSync.ContentSection>
				))}
			</section>
		</section>
	);
}

DualScrollSync.NavItem = forwardRef<HTMLButtonElement, DualScrollSyncNavItemProps>(
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

DualScrollSync.ContentSection = forwardRef<HTMLElement, DualScrollSyncContentSectionProps>(
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
				<span className={styles.scrollSyncContentSectionLabel} title={label}>
					{label}
				</span>
				{children}
			</article>
		);
	}
);
