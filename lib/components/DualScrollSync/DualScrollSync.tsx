import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

import type { DualScrollSyncContextProps } from '@/contexts';
import { DualScrollSyncContext } from '@/contexts';
import { useScrollSyncObserver, useValidateChildren } from '@/hooks';

import styles from './DualScrollSync.module.scss';
import type { DualScrollSyncProps, DualScrollSyncType } from './DualScrollSync.types';
import { DualScrollSyncContent } from './DualScrollSyncContent';
import { DualScrollSyncContentSection } from './DualScrollSyncContentSection/DualScrollSyncContentSection';
import { DualScrollSyncLabel } from './DualScrollSyncLabel/DualScrollSyncLabel';
import { DualScrollSyncNav } from './DualScrollSyncNav';
import { DualScrollSyncNavItem } from './DualScrollSyncNavItem';

export const DualScrollSyncBase: FC<DualScrollSyncProps> = ({
	children,
	className,
	id,
	items,
	onItemClick,
	maxVisibleItems = 6,
	style = {}
}) => {
	const baseId = id || 'dual-scroll-sync';
	const navId = `${baseId}-nav`;
	const contentId = `${baseId}-content`;

	const { activeKey, contentRef, sectionRefs, navItemRefs, navRef, onMenuItemSelect } =
		useScrollSyncObserver();

	const value = useMemo<DualScrollSyncContextProps>(
		() => ({
			baseId,
			navId,
			contentId,
			activeKey,
			contentRef,
			sectionRefs,
			navItemRefs,
			navRef,
			maxVisibleItems,
			onMenuItemSelect,
			onItemClick
		}),
		[
			baseId,
			navId,
			contentId,
			activeKey,
			contentRef,
			sectionRefs,
			navItemRefs,
			navRef,
			maxVisibleItems,
			onMenuItemSelect,
			onItemClick
		]
	);

	useValidateChildren({ children, items });

	return (
		<DualScrollSyncContext.Provider value={value}>
			<section
				className={clsx(styles.scrollSync, className)}
				data-testid={baseId}
				id={baseId}
				style={style}
			>
				{items ? (
					<>
						<DualScrollSyncNav>
							{items.map(({ sectionKey, label }) => (
								<DualScrollSyncNavItem key={sectionKey} sectionKey={sectionKey}>
									{label}
								</DualScrollSyncNavItem>
							))}
						</DualScrollSyncNav>

						<DualScrollSyncContent>
							{items.map(({ sectionKey, label, children }) => (
								<DualScrollSyncContentSection key={sectionKey} sectionKey={sectionKey}>
									<DualScrollSyncLabel>{label}</DualScrollSyncLabel>
									{children}
								</DualScrollSyncContentSection>
							))}
						</DualScrollSyncContent>
					</>
				) : (
					children
				)}
			</section>
		</DualScrollSyncContext.Provider>
	);
};

DualScrollSyncBase.displayName = 'DualScrollSync';

export const DualScrollSync: DualScrollSyncType = Object.assign(DualScrollSyncBase, {
	Nav: DualScrollSyncNav,
	NavItem: DualScrollSyncNavItem,
	Content: DualScrollSyncContent,
	ContentSection: DualScrollSyncContentSection,
	Label: DualScrollSyncLabel
});
