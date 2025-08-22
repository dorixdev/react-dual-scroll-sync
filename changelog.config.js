import createPreset from 'conventional-changelog-conventionalcommits';

export default createPreset({
	noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
	types: [
		{ type: 'feat', section: '✨ Features', hidden: false },
		{ type: 'fix', section: '🐛 Bug Fixes', hidden: false },
		{ type: 'docs', section: '📝 Documentation', hidden: false },
		{ type: 'style', section: '🎨 Styles & Theming', hidden: false },
		{ type: 'refactor', section: '🛠️ Code Refactoring', hidden: false },
		{ type: 'perf', section: '⚡ Performance Improvements', hidden: false },
		{ type: 'test', section: '✅ Tests', hidden: true },
		{ type: 'build', section: '🏗️ Build System', hidden: true },
		{ type: 'ci', section: '👷 Continuous Integration', hidden: true },
		{ type: 'chore', section: '🧹 Chores', hidden: true },
		{ type: 'revert', section: '⏪ Reverts', hidden: true }
	]
});
