import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
	parameters: {
		chromatic: { pauseAnimationAtEnd: true, delay: 400 },
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } }
	},
	tags: ['autodocs']
};

export default preview;
