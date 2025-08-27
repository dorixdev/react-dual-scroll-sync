import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

import { version } from '../package.json';

const theme = create({
	base: 'light',
	brandTitle: `React Dual Scroll Sync v${version}`,
	brandUrl: 'https://github.com/dorixdev/react-dual-scroll-sync',
	colorSecondary: '#222831'
});

addons.setConfig({
	theme,
	panelPosition: 'right'
});
