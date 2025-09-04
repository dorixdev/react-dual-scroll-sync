import { vi } from 'vitest';

import { scrollToSectionView } from './scrollToSectionView';

describe('scrollToSectionView', () => {
	let container: HTMLElement;
	let target: HTMLElement;

	beforeEach(() => {
		container = document.createElement('div');
		target = document.createElement('div');

		container.scrollTop = 50;

		container.scrollTo = vi.fn();

		vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
			top: 100,
			bottom: 500,
			left: 0,
			right: 0,
			width: 200,
			height: 400,
			x: 0,
			y: 0,
			toJSON: () => ({})
		});

		vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
			top: 250,
			bottom: 450,
			left: 0,
			right: 0,
			width: 200,
			height: 200,
			x: 0,
			y: 0,
			toJSON: () => ({})
		});
	});

	it("should' not scroll if container is null", () => {
		scrollToSectionView(null, target);
		expect(container.scrollTo).toHaveBeenCalledTimes(0);
	});

	it("should' not scroll if target is null", () => {
		scrollToSectionView(container, null);
		expect(container.scrollTo).toHaveBeenCalledTimes(0);
	});

	it('should calculate scrollTop correctly and call scrollTo', () => {
		scrollToSectionView(container, target);

		expect(container.scrollTo).toHaveBeenCalledWith({
			top: 200,
			behavior: 'smooth'
		});
	});
});
