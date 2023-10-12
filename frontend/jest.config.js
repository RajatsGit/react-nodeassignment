module.exports = {
    // Specify the test environment (node, jsdom, etc.).
    testEnvironment: 'jsdom',
  
    // Specify the file extensions for your test files.
    moduleFileExtensions: ['js', 'jsx'],
  
    // Define a pattern for test file names.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  
    // Define the directory where Jest should look for tests.
    testPathIgnorePatterns: ['/node_modules/'],
  
    // Transform files before running tests. Here, we use Babel for .jsx files.
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Specify a list of paths to search for modules.
    modulePaths: ['<rootDir>/src'],
  
    // A list of reporter names for test results.
    reporters: ['default'],
  
    // Configure coverage reporting.
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.jsx'],
  
    // Setup for code coverage thresholds.
    coverageThreshold: {
      global: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  };
  