import clsx from 'clsx';
import type { FC } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncContent.module.scss';
import type { DualScrollSyncContentProps } from './DualScrollSyncContent.types';

export const DualScrollSyncContent: FC<DualScrollSyncContentProps> = ({
	children,
	className,
	style = {}
}) => {
	const { contentId, contentRef } = useDualScrollSyncContext();

	return (
		<section
			className={clsx(styles.scrollSyncContent, className)}
			data-testid={contentId}
			id={contentId}
			ref={contentRef}
			style={style}
		>
			{children}
		</section>
	);
};

DualScrollSyncContent.displayName = 'DualScrollSync.Content';
