/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
const dev = {
	// 'tailwindcss/nesting': {},
	'tailwindcss': {},
	'postcss-flexbugs-fixes': {},
	'postcss-preset-env': {
		autoprefixer: {
			grid: 'autoplace',
		},
		features: {
			'custom-properties': false,
			// 'nesting-rules': false,
		},
		stage: 2,
	},
};

const prod =
	process.env.NODE_ENV === 'production'
		? {
				'cssnano': {
					preset: 'advanced',
				},
				'postcss-fail-on-warn': {},
		  }
		: {};

module.exports = {
	plugins: {
		...dev,
		...prod,
	},
};
