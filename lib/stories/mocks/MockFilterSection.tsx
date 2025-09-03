import type { FC } from 'react';

interface MockFilterSectionProps {
	iconClassName?: string;
	label: string;
	id: string;
}

export const MockFilterSection: FC<MockFilterSectionProps> = ({ iconClassName, label, id }) => {
	return (
		<div className="form-switch justify-content-between w-100 align-items-center d-flex p-0">
			<label className="form-check-label d-flex w-100 gap-1 align-items-center" htmlFor={id}>
				{iconClassName && <i className={`bi text-primary ${iconClassName}`}></i>}
				<span style={{ fontSize: '0.8rem' }}>{label}</span>
			</label>
			<input className="form-check-input" type="checkbox" role="switch" id={id} />
		</div>
	);
};
