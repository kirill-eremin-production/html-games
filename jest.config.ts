import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '\\.tsx?$': 'ts-jest',
    'node_modules/@babylonjs/.+\\.js$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@babylonjs/)'],
};

export default config;
