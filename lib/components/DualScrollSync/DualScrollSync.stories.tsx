import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { DualScrollSync } from './DualScrollSync';

const meta: Meta<typeof DualScrollSync> = {
	title: 'DualScrollSync',
	component: DualScrollSync,
	tags: ['autodocs'],
	argTypes: {
		items: { control: { type: 'object', disable: true } },
		maxVisibleItems: { control: { type: 'number', min: 1, max: 10, step: 1 } }
	},
	args: {
		items: [
			{ sectionKey: 's1', label: 'Label 1', children: <MockContentSection /> },
			{ sectionKey: 's2', label: 'Label 2', children: <MockContentSection /> },
			{ sectionKey: 's3', label: 'Label 3', children: <MockContentSection /> },
			{ sectionKey: 's4', label: 'Label 4', children: <MockContentSection /> },
			{ sectionKey: 's5', label: 'Label 5', children: <MockContentSection /> },
			{ sectionKey: 's6', label: 'Label 6', children: <MockContentSection /> },
			{ sectionKey: 's7', label: 'Label 7', children: <MockContentSection /> },
			{ sectionKey: 's8', label: 'Label 8', children: <MockContentSection /> }
		],
		id: 'dual-scroll-sync',
		onItemClick: action('onItemClick'),
		maxVisibleItems: 6
	},
	decorators: [
		(Story) => (
			<section style={{ width: '360px', height: '480px' }}>
				<Story />
			</section>
		)
	]
} satisfies Meta<typeof DualScrollSync>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: 'Basic Usage',
	args: {
		onItemClick: action('onItemClick')
	}
};

export const FewSectionsExample: Story = {
	args: {
		items: [
			{
				sectionKey: 'section1',
				label: 'Section 1',
				children: <MockContentSection minHeight="480px" />
			},
			{
				sectionKey: 'section2',
				label: 'Section 2',
				children: <MockContentSection minHeight="480px" />
			},
			{
				sectionKey: 'section3',
				label: 'Section 3',
				children: <MockContentSection minHeight="480px" />
			}
		]
	}
};

function MockContentSection({ minHeight = '240px' }) {
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
}
