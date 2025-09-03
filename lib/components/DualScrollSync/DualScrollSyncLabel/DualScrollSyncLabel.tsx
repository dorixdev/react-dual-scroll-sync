import type { FC } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncLabel.module.scss';
import type { DualScrollSyncLabelProps } from './DualScrollSyncLabel.types';

export const DualScrollSyncLabel: FC<DualScrollSyncLabelProps> = ({ children }) => {
	useDualScrollSyncContext();

	if (typeof children !== 'string') return children;

	return (
		<span className={styles.scrollSyncContentSectionLabel} title={children}>
			{children}
		</span>
	);
};
