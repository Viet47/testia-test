
require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts', "jest-canvas-mock"],
  testMatch: [
    "<rootDir>/src/**/*.spec.ts"
  ]
};