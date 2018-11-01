module.exports = {
	title: 'Tiny fun',
	description: 'Make tiny fun',
	base:'/blog/',
	port:5000,
	configureWebpack: {
		resolve: {
		}
	},
	dest:'../blog/',
	themeConfig: {
		sidebar: [
		]
	},
	permalink: '/:year/:month/:slug',
}