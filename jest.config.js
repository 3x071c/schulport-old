module.exports = {
	moduleNameMapper: {
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
		'^@components(.*)$': '<rootDir>/src/components$1',
		'^@mock(.*)$': '<rootDir>/src/mock$1',
		'^@pages(.*)$': '<rootDir>/src/pages$1',
		'^@src(.*)$': '<rootDir>/src$1',
		'^@theme(.*)$': '<rootDir>/src/theme$1',
		'^@util(.*)$': '<rootDir>/src/util$1',
	},
	setupFilesAfterEnv: ['./jest.setup.ts'],
};
