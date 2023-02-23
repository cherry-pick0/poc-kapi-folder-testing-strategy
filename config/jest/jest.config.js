/** @type {import('ts-jest').JestConfigWithTsJest} */
/*module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
}*/

module.exports = {
  preset: "ts-jest",
  rootDir: "../..",
  collectCoverageFrom: ["./**/*.{js,ts,tsx}"],
  setupFiles: ["./jest.server.ts"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setupAfterEnv.ts"],
  testEnvironment: "node",
  testURL: "http://localhost",
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  clearMocks: true,
  moduleNameMapper: {
    './(.*)$': '<rootDir>/$1',
  },
}
