import { FC } from 'react';

interface MockContentSectionProps {
	minHeight?: string;
}

export const MockContentSection: FC<MockContentSectionProps> = ({ minHeight = '240px' }) => {
	return (
		<div
			style={{
				minHeight,
				display: 'flex',
				flexDirection: 'column',
				gap: '8px'
			}}
		>
			<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate nisi veniam
					esse eligendi similique, molestiae quae inventore illum reprehenderit necessitatibus ea
					commodi doloremque, nam voluptate magni magnam quaerat. Corrupti harum doloribus iusto.
					Dolorem atque accusamus dolorum! Natus voluptatum sequi laboriosam quo ipsum ipsam nam eum
					impedit. Facere, nobis cum!
				</p>
			</div>
		</div>
	);
};
