import clsx from 'clsx';
import type { FC } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncContentSection.module.scss';
import type { DualScrollSyncContentSectionProps } from './DualScrollSyncContentSection.types';

export const DualScrollSyncContentSection: FC<DualScrollSyncContentSectionProps> = ({
	children,
	className,
	sectionKey,
	style = {}
}) => {
	const { contentId, sectionRefs } = useDualScrollSyncContext();

	const contentSectionId = `${contentId}-section-${sectionKey}`;

	return (
		<article
			className={clsx(styles.scrollSyncContentSection, className)}
			data-section={sectionKey}
			data-testid={contentSectionId}
			id={contentSectionId}
			ref={(contentRef) => {
				if (!contentRef) return;
				sectionRefs.current[sectionKey] = contentRef;
			}}
			style={style}
		>
			{children}
		</article>
	);
};

DualScrollSyncContentSection.displayName = 'DualScrollSync.ContentSection';
