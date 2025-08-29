import { useEffect, useMemo, useRef, useState } from 'react';

import { scrollToSectionView } from '../utils';

export const useScrollSyncObserver = () => {
	const [activeKey, setActiveKey] = useState<string | null>(null);
	const [isScrollingByClick, setIsScrollingByClick] = useState<boolean>(false);

	const navRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLElement>(null);
	const navItemRefs = useRef<Record<string, HTMLElement>>({});
	const sectionRefs = useRef<Record<string, HTMLElement>>({});
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
	const isClickScrollingRef = useRef<boolean>(false);

	const visibleKeys = useMemo(() => new Set<string>(), []);

	const onMenuItemSelect = (key: string) => {
		const contentContainer = contentRef.current;
		const contentSection = sectionRefs.current[key];

		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		setIsScrollingByClick(true);
		setActiveKey(key);
		scrollToSectionView(contentContainer, contentSection);

		timeoutRef.current = setTimeout(() => {
			setIsScrollingByClick(false);
			timeoutRef.current = null;
		}, 1_000);
	};

	useEffect(() => {
		isClickScrollingRef.current = isScrollingByClick;
	}, [isScrollingByClick]);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	useEffect(() => {
		const contentContainer = contentRef.current;

		const observerOptions: IntersectionObserverInit = {
			root: contentContainer,
			threshold: [0.25, 1.0]
		};

		const handleIntersect: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				const key = String(entry.target.getAttribute('data-section'));
				if (entry.isIntersecting) visibleKeys.add(key);
				else visibleKeys.delete(key);
			}

			const sortedKeys = [...visibleKeys].sort((a, b) => {
				const ra = sectionRefs.current[a]?.getBoundingClientRect();
				const rb = sectionRefs.current[b]?.getBoundingClientRect();
				return ra.top - rb.top;
			});

			if (isClickScrollingRef.current) return;

			if (sortedKeys.length > 0) {
				const navContainer = navRef.current;
				const navItem = navItemRefs.current[sortedKeys[0]];

				setActiveKey(sortedKeys[0]);
				scrollToSectionView(navContainer, navItem);
			}
		};

		const observer = new IntersectionObserver(handleIntersect, observerOptions);

		Object.values(sectionRefs.current).forEach((el) => observer.observe(el));
	}, [visibleKeys]);

	return {
		activeKey,
		contentRef,
		navItemRefs,
		navRef,
		sectionRefs,
		onMenuItemSelect
	};
};

export type UseScrollSyncObserverReturn = ReturnType<typeof useScrollSyncObserver>;
