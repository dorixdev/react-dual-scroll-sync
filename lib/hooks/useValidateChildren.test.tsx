import { renderHook, waitFor } from '@testing-library/react';
import { act, type FC } from 'react';
import { vi } from 'vitest';

import { DualScrollSyncContent } from '@/components/DualScrollSync/DualScrollSyncContent';
import { DualScrollSyncNav } from '@/components/DualScrollSync/DualScrollSyncNav';

import { useValidateChildren } from './useValidateChildren';

const NavItemStub: FC<{ sectionKey: string }> = () => null;
const ContentSectionStub: FC<{ sectionKey: string }> = () => null;

describe('useValidateChildren', () => {
	let warnSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
	});

	afterEach(() => {
		vi.clearAllMocks();
		warnSpy.mockRestore();
	});

	it('should not log warnings when items prop is provided', async () => {
		const items = [
			{ sectionKey: 'section1', label: 'Section 1', children: <div>Content 1</div> },
			{ sectionKey: 'section2', label: 'Section 2', children: <div>Content 2</div> }
		];

		act(() => renderHook(() => useValidateChildren({ items, children: null })));

		await waitFor(() => {
			expect(warnSpy).not.toHaveBeenCalled();
		});
	});

	it('should not log warnings when NavItems and ContentSections match', async () => {
		const children = (
			<>
				<DualScrollSyncNav>
					<NavItemStub sectionKey="section1" />
					<NavItemStub sectionKey="section2" />
				</DualScrollSyncNav>
				<DualScrollSyncContent>
					<ContentSectionStub sectionKey="section1" />
					<ContentSectionStub sectionKey="section2" />
				</DualScrollSyncContent>
			</>
		);

		act(() => renderHook(() => useValidateChildren({ children, items: undefined })));

		await waitFor(() => {
			expect(warnSpy).not.toHaveBeenCalled();
		});
	});

	it('should log warnings for missing ContentSections', async () => {
		const children = (
			<>
				<DualScrollSyncNav>
					<NavItemStub sectionKey="section1" />
					<NavItemStub sectionKey="section2" />
				</DualScrollSyncNav>
				<DualScrollSyncContent>
					<ContentSectionStub sectionKey="section1" />
				</DualScrollSyncContent>
			</>
		);

		act(() => renderHook(() => useValidateChildren({ children, items: undefined })));

		await waitFor(() => {
			expect(warnSpy).toHaveBeenCalledWith(
				'[DualScrollSync] Missing ContentSection for "section2"'
			);
		});
	});

	it('should log warnings for missing NavItems', async () => {
		const children = (
			<>
				<DualScrollSyncNav>
					<NavItemStub sectionKey="section1" />
				</DualScrollSyncNav>
				<DualScrollSyncContent>
					<ContentSectionStub sectionKey="section1" />
					<ContentSectionStub sectionKey="section2" />
				</DualScrollSyncContent>
			</>
		);

		act(() => renderHook(() => useValidateChildren({ children, items: undefined })));

		await waitFor(() => {
			expect(warnSpy).toHaveBeenCalledWith('[DualScrollSync] Missing NavItem for "section2"');
		});
	});

	it('should log for div wrappers around Nav and Content', async () => {
		const children = (
			<div>
				<DualScrollSyncNav>
					<NavItemStub sectionKey="section1" />
					<NavItemStub sectionKey="section2" />
				</DualScrollSyncNav>
				<div>
					<DualScrollSyncContent>
						<ContentSectionStub sectionKey="section1" />
					</DualScrollSyncContent>
				</div>
			</div>
		);

		act(() => renderHook(() => useValidateChildren({ children, items: undefined })));

		await waitFor(() => {
			expect(warnSpy).toHaveBeenCalledWith(
				'[DualScrollSync] Missing ContentSection for "section2"'
			);
		});
	});

	it('should not log warnings for string children', async () => {
		const children = <span>Hello World</span>;

		act(() => renderHook(() => useValidateChildren({ children, items: undefined })));

		await waitFor(() => {
			expect(warnSpy).not.toHaveBeenCalled();
		});
	});
});
