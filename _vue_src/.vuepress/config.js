module.exports = {
	title: 'Hello VuePress',
	description: 'Just playing around',
	port:5000,
	configureWebpack: {
		resolve: {
		}
	},
	dest:'../blog/',
	themeConfig: {
		sidebar: [
			'/',
			'/page-a',
			['/page-b', 'Explicit link text']
		]
	}
}