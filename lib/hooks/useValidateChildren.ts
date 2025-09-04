import {
	Children,
	Fragment,
	isValidElement,
	type PropsWithChildren,
	type ReactNode,
	useEffect
} from 'react';

import type { DualScrollSyncItem } from '@/components/DualScrollSync/DualScrollSync.types';
import { DualScrollSyncContent } from '@/components/DualScrollSync/DualScrollSyncContent';
import type { DualScrollSyncContentSectionProps } from '@/components/DualScrollSync/DualScrollSyncContentSection';
import { DualScrollSyncNav } from '@/components/DualScrollSync/DualScrollSyncNav';
import type { DualScrollSyncNavItemProps } from '@/components/DualScrollSync/DualScrollSyncNavItem';

interface UseValidateChildrenProps {
	items?: DualScrollSyncItem[];
	children: ReactNode;
}

export const useValidateChildren = ({ items, children }: UseValidateChildrenProps) => {
	useEffect(() => {
		if (items) return;
		const navKeys = new Set<string>();
		const contentKeys = new Set<string>();

		const isNav = (child: ReactNode) => isValidElement(child) && child.type === DualScrollSyncNav;

		const isContent = (child: ReactNode) =>
			isValidElement(child) && child.type === DualScrollSyncContent;

		const visit = (node: ReactNode) => {
			Children.forEach(node, (child) => {
				if (!isValidElement(child)) return;

				if (child.type === Fragment) {
					visit((child.props as PropsWithChildren).children);
					return;
				}

				if (isNav(child)) {
					Children.forEach((child.props as PropsWithChildren).children, (navItem) => {
						if (isValidElement<DualScrollSyncNavItemProps>(navItem) && navItem.props.sectionKey) {
							navKeys.add(navItem.props.sectionKey);
						}
					});
					return;
				}

				if (isContent(child)) {
					Children.forEach((child.props as PropsWithChildren).children, (section) => {
						if (
							isValidElement<DualScrollSyncContentSectionProps>(section) &&
							section.props.sectionKey
						) {
							contentKeys.add(section.props.sectionKey);
						}
					});
					return;
				}

				if ((child.props as PropsWithChildren)?.children) {
					visit((child.props as PropsWithChildren).children);
				}
			});
		};

		visit(children);

		for (const key of navKeys) {
			if (contentKeys.has(key)) continue;
			console.warn(`[DualScrollSync] Missing ContentSection for "${key}"`);
		}

		for (const key of contentKeys) {
			if (navKeys.has(key)) continue;
			console.warn(`[DualScrollSync] Missing NavItem for "${key}"`);
		}
	}, [children, items]);
};
