import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { DualScrollSync } from '../DualScrollSync';
import { MockContentSection } from './mocks';
import { FILTER_GROUPS } from './mocks/MockFilterGroups';

const meta: Meta<typeof DualScrollSync> = {
	title: 'Components/DualScrollSync',
	component: DualScrollSync,
	tags: ['autodocs'],
	argTypes: {
		items: { control: { type: 'object' } },
		maxVisibleItems: { control: { type: 'number', min: 1, max: 10, step: 1 } },
		id: { control: { type: 'text' } }
	}
} satisfies Meta<typeof DualScrollSync>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: 'Basic Usage',
	args: {
		items: [
			{ sectionKey: 's1', label: 'Label 1', children: '<Component />' },
			{ sectionKey: 's2', label: 'Label 2', children: '<Component />' },
			{ sectionKey: 's3', label: 'Label 3', children: '<Component />' },
			{ sectionKey: 's4', label: 'Label 4', children: '<Component />' },
			{ sectionKey: 's5', label: 'Label 5', children: '<Component />' },
			{ sectionKey: 's6', label: 'Label 6', children: '<Component />' },
			{ sectionKey: 's7', label: 'Label 7', children: '<Component />' },
			{ sectionKey: 's8', label: 'Label 8', children: '<Component />' }
		],
		id: 'dual-scroll-sync',
		maxVisibleItems: 6,
		onItemClick: action('onItemClick')
	},
	render: ({ items, ...args }) => (
		<section style={{ height: '50dvh', maxWidth: '360px', maxHeight: '480px', minHeight: '320px' }}>
			<DualScrollSync
				{...args}
				items={items?.map((item) => ({
					...item,
					children: <MockContentSection />
				}))}
			/>
		</section>
	)
};

export const FewSectionsExample: Story = {
	args: {
		items: [
			{ sectionKey: 'section1', label: 'Section 1', children: '<Component />' },
			{ sectionKey: 'section2', label: 'Section 2', children: '<Component />' },
			{ sectionKey: 'section3', label: 'Section 3', children: '<Component />' }
		]
	},
	render: ({ items, ...args }) => (
		<section style={{ height: '50dvh', maxWidth: '360px', maxHeight: '480px', minHeight: '320px' }}>
			<DualScrollSync
				items={items.map((item) => ({
					...item,
					children: <MockContentSection minHeight="480px" />
				}))}
				{...args}
			/>
		</section>
	)
};

export const FiltersRealCaseExample: Story = {
	name: 'Filters (Real Case Example)',
	args: {
		items: [
			{ label: 'Featured', sectionKey: 'featured', children: '<Component />' },
			{ label: 'Categories', sectionKey: 'categories', children: '<Component />' },
			{ label: 'Brands', sectionKey: 'brands', children: '<Component />' },
			{ label: 'Price Range', sectionKey: 'price-range', children: '<Component />' },
			{ label: 'Customer Reviews', sectionKey: 'customer-reviews', children: '<Component />' },
			{ label: 'New Arrivals', sectionKey: 'new-arrivals', children: '<Component />' },
			{ label: 'On Sale', sectionKey: 'on-sale', children: '<Component />' },
			{ label: 'Best Sellers', sectionKey: 'best-sellers', children: '<Component />' }
		],
		maxVisibleItems: 8
	},
	render: ({ items, ...args }) => (
		<div
			className="border rounded d-flex flex-column"
			style={{
				backgroundColor: '#ccc',
				height: '90dvh',
				maxWidth: '360px',
				maxHeight: '720px',
				minHeight: '420px'
			}}
		>
			<style>
				{`
					:root {
						--dual-scroll-sync-border-color: var(--bs-border-color);
						--dual-scroll-sync-highlight-foreground-color: var(--bs-primary);
						--dual-scroll-sync-max-width-nav: 100px;
					}
				`}
			</style>
			<div style={{ filter: 'blur(4px)', height: '100%' }}>
				<div className="p-3">
					<h3 className="pt-2">Filters</h3>
					<hr className="my-0" />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores sit nam tenetur
						harum deleniti...
					</p>
				</div>
			</div>
			<section
				className="d-flex flex-column gap-3 p-3 bg-white rounded"
				style={{ height: 'fit-content', minHeight: '240px', maxHeight: '720px' }}
			>
				<header className="d-flex justify-content-end align-items-center">
					<i className="bi bi-x-lg" style={{ cursor: 'pointer' }} />
				</header>
				<DualScrollSync
					items={items.map((item, idx) => ({
						...item,
						children: FILTER_GROUPS[idx] || <MockContentSection minHeight="240px" />
					}))}
					{...args}
				/>
				<div className="d-flex w-100 gap-2">
					<button className="btn btn-outline-danger w-100">Clear filters</button>
					<button className="btn btn-primary w-100">Apply filters</button>
				</div>
			</section>
		</div>
	)
};
