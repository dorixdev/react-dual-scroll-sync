import type { FC } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncContentSection.module.scss';
import type { DualScrollSyncContentSectionProps } from './DualScrollSyncContentSection.types';

export const DualScrollSyncContentSection: FC<DualScrollSyncContentSectionProps> = ({
	sectionKey,
	children
}) => {
	const { contentId, sectionRefs } = useDualScrollSyncContext();

	const contentSectionId = `${contentId}-section-${sectionKey}`;

	return (
		<article
			className={styles.scrollSyncContentSection}
			data-section={sectionKey}
			data-testid={contentSectionId}
			id={contentSectionId}
			ref={(contentRef) => {
				if (!contentRef) return;
				sectionRefs.current[sectionKey] = contentRef;
			}}
		>
			{children}
		</article>
	);
};

DualScrollSyncContentSection.displayName = 'DualScrollSync.ContentSection';
