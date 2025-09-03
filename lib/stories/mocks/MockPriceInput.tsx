import type { FC } from 'react';

interface MockPriceInputProps {
	id: string;
	label: string;
}

export const MockPriceInput: FC<MockPriceInputProps> = ({ id, label }) => {
	return (
		<section>
			<label htmlFor={id} className="form-label">
				{label}
			</label>
			<section className="input-group mb-3">
				<span className="input-group-text">$</span>
				<input id={id} type="text" className="form-control" />
			</section>
		</section>
	);
};
