import type { FC } from 'react';
import { useMemo } from 'react';

import type { DualScrollSyncContextProps } from '@/contexts';
import { DualScrollSyncContext } from '@/contexts';
import { useScrollSyncObserver, useValidateChildren } from '@/hooks';

import styles from './DualScrollSync.module.scss';
import type { DualScrollSyncProps } from './DualScrollSync.types';
import { DualScrollSyncContent } from './DualScrollSyncContent';
import { DualScrollSyncContentSection } from './DualScrollSyncContentSection/DualScrollSyncContentSection';
import { DualScrollSyncLabel } from './DualScrollSyncLabel/DualScrollSyncLabel';
import { DualScrollSyncNav } from './DualScrollSyncNav';
import { DualScrollSyncNavItem } from './DualScrollSyncNavItem';

export const DualScrollSync: FC<DualScrollSyncProps> = ({ children, id, items, onItemClick }) => {
	const baseId = id ?? 'dual-scroll-sync';
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
			onMenuItemSelect,
			onItemClick
		]
	);

	useValidateChildren({ children, items });

	return (
		<DualScrollSyncContext.Provider value={value}>
			<section id={baseId} data-testid={baseId} className={styles.scrollSync}>
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

DualScrollSync.displayName = 'DualScrollSync';
