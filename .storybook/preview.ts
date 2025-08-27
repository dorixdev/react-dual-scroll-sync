import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
	parameters: {
		layout: 'centered',
		viewport: { disable: true }
	},
	tags: ['autodocs']
};

export default preview;
