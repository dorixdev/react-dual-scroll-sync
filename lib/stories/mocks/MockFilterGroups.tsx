import type { ReactNode } from 'react';

import { MockChip } from './MockChip';
import { MockFilterSection } from './MockFilterSection';
import { MockPriceInput } from './MockPriceInput';

export const FILTER_GROUPS: ReactNode[] = [
	<div className="d-flex flex-column gap-2">
		<MockFilterSection label="Arrive Tomorrow" iconClassName="bi-truck" id="arrive-tomorrow" />
		<hr className="my-0" />
		<MockFilterSection label="Free Shipping" iconClassName="bi-box-seam" id="free-shipping" />
		<hr className="my-0" />
		<MockFilterSection label="In Stock" iconClassName="bi-check-circle" id="in-stock" />
		<hr className="my-0" />
	</div>,
	<div className="d-flex gap-2 flex-wrap">
		<MockChip>Car Accessories</MockChip>
		<MockChip>Clothing</MockChip>
		<MockChip>Electronics</MockChip>
		<MockChip>Home</MockChip>
		<MockChip>Jewelry</MockChip>
		<MockChip>Sports & Outdoors</MockChip>
		<MockChip>Video Games</MockChip>
		<MockChip>Health & Beauty</MockChip>
	</div>,
	<div className="d-flex gap-2 flex-wrap">
		<MockChip>Apple</MockChip>
		<MockChip>Samsung</MockChip>
		<MockChip>Nike</MockChip>
		<MockChip>Adidas</MockChip>
		<MockChip>Sony</MockChip>
		<MockChip>LG</MockChip>
	</div>,
	<div className="d-flex flex-row gap-2">
		<MockPriceInput id="min-price" label="Min" />
		<MockPriceInput id="max-price" label="Max" />
	</div>,
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
	</div>,
	<div className="d-flex flex-column gap-2">
		<MockFilterSection label="Last 30 days" id="last-30-days" />
		<hr className="my-0" />
		<MockFilterSection label="Last 90 days" id="last-90-days" />
		<hr className="my-0" />
		<MockFilterSection label="Last 6 months" id="last-6-months" />
	</div>,
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
	</div>,
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
];
