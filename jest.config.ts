import { type JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest", // .ts와 .tsx을 CommonJS로 변환
  testEnvironment: "jsdom", // 테스트 환경으로 jsdom을 사용
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "config/tsconfig.jest.json",
        babel: true,
      },
    ],
  },
  modulePaths: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/config/setupTest.ts"], // 각각의 테스트 전에 실행할 모듈을 경로(setupTest를 이용하여 환경 설정)
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@api/(.*)$": "<rootDir>/src/api/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
  },
};

export default jestConfig;
