import { type JestConfigWithTsJest } from 'ts-jest';


const jestConfig: JestConfigWithTsJest = {
  rootDir: './',
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(react-quill)/)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
};


export default jestConfig

