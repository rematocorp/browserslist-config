const development = ['> 1%', 'last 2 versions', 'not IE 11', 'not dead']
const production = ['> 0.5%', 'last 4 years', 'not IE 11', 'not dead']

const config = {
	development: development,
	production: production,
	staging: production,
	test: production,
}

module.exports = config
