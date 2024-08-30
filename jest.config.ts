import { type JestConfigWithTsJest } from 'ts-jest';


const jestConfig: JestConfigWithTsJest = {
  rootDir: './',
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};


export default jestConfig

