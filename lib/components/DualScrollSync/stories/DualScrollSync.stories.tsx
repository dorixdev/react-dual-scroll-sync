import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { DualScrollSync } from '../DualScrollSync';
import { MockChip, MockContentSection, MockFilterSection, MockPriceInput } from './mocks';

const meta: Meta<typeof DualScrollSync> = {
	title: 'Components/DualScrollSync',
	component: DualScrollSync,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		viewport: { disable: true }
	},
	argTypes: {
		items: { control: { type: 'object', disable: true } },
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
		maxVisibleItems: 6,
		onItemClick: action('onItemClick')
	},
	render: (args) => (
		<section style={{ height: '50dvh', maxWidth: '360px', maxHeight: '480px', minHeight: '320px' }}>
			<DualScrollSync {...args} />
		</section>
	)
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
	},
	render: (args) => (
		<section style={{ height: '50dvh', maxWidth: '360px', maxHeight: '480px', minHeight: '320px' }}>
			<DualScrollSync {...args} />
		</section>
	)
};

export const FiltersRealCaseExample: Story = {
	name: 'Filters (Real Case Example)',
	args: {
		items: [
			{
				label: 'Featured',
				sectionKey: 'featured',
				children: (
					<div className="d-flex flex-column gap-2">
						<MockFilterSection
							label="Arrive Tomorrow"
							iconClassName="bi-truck"
							id="arrive-tomorrow"
						/>
						<hr className="my-0" />
						<MockFilterSection
							label="Free Shipping"
							iconClassName="bi-box-seam"
							id="free-shipping"
						/>
						<hr className="my-0" />
						<MockFilterSection label="In Stock" iconClassName="bi-check-circle" id="in-stock" />
						<hr className="my-0" />
					</div>
				)
			},
			{
				label: 'Categories',
				sectionKey: 'categories',
				children: (
					<div className="d-flex gap-2 flex-wrap">
						<MockChip>Car Accessories</MockChip>
						<MockChip>Clothing</MockChip>
						<MockChip>Electronics</MockChip>
						<MockChip>Home</MockChip>
						<MockChip>Jewelry</MockChip>
						<MockChip>Sports & Outdoors</MockChip>
						<MockChip>Video Games</MockChip>
						<MockChip>Health & Beauty</MockChip>
					</div>
				)
			},
			{
				label: 'Brands',
				sectionKey: 'brands',
				children: (
					<div className="d-flex gap-2 flex-wrap">
						<MockChip>Apple</MockChip>
						<MockChip>Samsung</MockChip>
						<MockChip>Nike</MockChip>
						<MockChip>Adidas</MockChip>
						<MockChip>Sony</MockChip>
						<MockChip>LG</MockChip>
					</div>
				)
			},
			{
				label: 'Price Range',
				sectionKey: 'price-range',
				children: (
					<div className="d-flex flex-row gap-2">
						<MockPriceInput id="min-price" label="Min" />
						<MockPriceInput id="max-price" label="Max" />
					</div>
				)
			},
			{
				label: 'Customer Reviews',
				sectionKey: 'customer-reviews',
				children: (
					<div>
						<MockFilterSection label="⭐️⭐️⭐️⭐️⭐️" id="five-stars" />
						<hr className="my-2" />
						<MockFilterSection label="⭐️⭐️⭐️⭐️" id="four-stars" />
						<hr className="my-2" />
						<MockFilterSection label="⭐️⭐️⭐️" id="three-stars" />
						<hr className="my-2" />
						<MockFilterSection label="⭐️⭐️" id="two-stars" />
						<hr className="my-2" />
						<MockFilterSection label="⭐️" id="one-star" />
					</div>
				)
			},
			{
				label: 'New Arrivals',
				sectionKey: 'new-arrivals',
				children: (
					<div className="d-flex flex-column gap-2">
						<MockFilterSection label="Last 30 days" id="last-30-days" />
						<hr className="my-0" />
						<MockFilterSection label="Last 90 days" id="last-90-days" />
						<hr className="my-0" />
						<MockFilterSection label="Last 6 months" id="last-6-months" />
					</div>
				)
			},
			{
				label: 'On Sale',
				sectionKey: 'on-sale',
				children: (
					<div>
						<p style={{ fontSize: '12px' }}>
							Select a discount percentage to filter products that are currently on sale.
						</p>
						<div className="d-flex gap-2 flex-wrap">
							<MockChip>10%</MockChip>
							<MockChip>20%</MockChip>
							<MockChip>40%</MockChip>
							<MockChip>60%</MockChip>
							<MockChip>80%</MockChip>
							<MockChip>90%</MockChip>
						</div>
						<footer className="text-muted">
							<p style={{ fontSize: '12px', marginTop: '8px' }}>
								Note: Discounts are applied at checkout and may vary by product.
							</p>
						</footer>
					</div>
				)
			},
			{
				label: 'Best Sellers',
				sectionKey: 'best-sellers',
				children: (
					<div className="d-flex gap-2 flex-wrap">
						<MockChip>Echo Dot</MockChip>
						<MockChip>PS5</MockChip>
						<MockChip>iPhone 14</MockChip>
						<MockChip>AirPods Pro</MockChip>
						<MockChip>Kindle Paperwhite</MockChip>
						<MockChip>Apple Watch</MockChip>
						<MockChip>Instant Pot</MockChip>
						<MockChip>Fitbit Charge</MockChip>
						<MockChip>Nintendo Switch</MockChip>
						<MockChip>Dyson V11</MockChip>
						<MockChip>GoPro HERO9</MockChip>
						<MockChip>Samsung Galaxy Buds</MockChip>
						<MockChip>Roomba i7+</MockChip>
						<MockChip>Logitech MX Master 3</MockChip>
						<MockChip>Apple MacBook Air</MockChip>
						<MockChip>Google Nest Hub</MockChip>
						<MockChip>JBL Flip 5</MockChip>
						<MockChip>Canon EOS M50</MockChip>
					</div>
				)
			}
		],
		maxVisibleItems: 8
	},
	render: (args) => (
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
						--dual-scroll-sync-highlight-foreground-color: #0d6efd;
						--dual-scroll-sync-max-width-nav: 110px;
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
				<DualScrollSync {...args} />
				<div className="d-flex w-100 gap-2">
					<button className="btn btn-outline-danger w-100">Clear filters</button>
					<button className="btn btn-primary w-100">Apply filters</button>
				</div>
			</section>
		</div>
	)
};
