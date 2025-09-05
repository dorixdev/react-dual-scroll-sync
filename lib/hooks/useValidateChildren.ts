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

		const collectNavKeys = (node: ReactNode) => {
			if (isValidElement<DualScrollSyncNavItemProps>(node) && node.props.sectionKey) {
				navKeys.add(node.props.sectionKey);
			}
		};

		const collectContentKeys = (node: ReactNode) => {
			if (isValidElement<DualScrollSyncContentSectionProps>(node) && node.props.sectionKey) {
				contentKeys.add(node.props.sectionKey);
			}
		};

		const visit = (node: ReactNode) => {
			Children.forEach(node, (child) => {
				if (!isValidElement(child)) return;

				switch (child.type) {
					case Fragment:
						visit((child.props as PropsWithChildren).children);
						break;
					case DualScrollSyncNav:
						Children.forEach((child.props as PropsWithChildren).children, collectNavKeys);
						break;
					case DualScrollSyncContent:
						Children.forEach((child.props as PropsWithChildren).children, collectContentKeys);
						break;
					default:
						if ((child.props as PropsWithChildren)?.children) {
							visit((child.props as PropsWithChildren).children);
						}
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
