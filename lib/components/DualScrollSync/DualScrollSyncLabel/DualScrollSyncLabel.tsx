import clsx from 'clsx';
import type { FC } from 'react';

import { useDualScrollSyncContext } from '@/hooks';

import styles from './DualScrollSyncLabel.module.scss';
import type { DualScrollSyncLabelProps } from './DualScrollSyncLabel.types';

export const DualScrollSyncLabel: FC<DualScrollSyncLabelProps> = ({
	children,
	className,
	style = {}
}) => {
	useDualScrollSyncContext();

	if (typeof children !== 'string') return children;

	return (
		<span
			className={clsx(styles.scrollSyncContentSectionLabel, className)}
			title={children}
			style={style}
		>
			{children}
		</span>
	);
};
