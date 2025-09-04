import type { FC, PropsWithChildren } from 'react';

export const MockChip: FC<PropsWithChildren> = ({ children }) => {
	return (
		<span
			className="d-flex badge rounded-pill border py-2 px-4 text-dark align-items-center fw-normal bg-light"
			style={{ cursor: 'pointer' }}
		>
			{children}
		</span>
	);
};
