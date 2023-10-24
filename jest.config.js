module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    axios$: require.resolve('axios'),
    '\\.svg$': '<rootDir>/test/svg.js',
    '^.+.(less|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.js']
};
