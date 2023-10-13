export default {
  testEnvironment: "jsdom",

  moduleFileExtensions: ["js", "jsx"],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",

  testPathIgnorePatterns: ["/node_modules/"],

  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  modulePaths: ["<rootDir>/src"],

  reporters: ["default"],

  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.jsx"],

  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
