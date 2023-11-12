export default {
    testEnvironment: 'jest-environment-jsdom',
    roots: [
        "<rootDir>/src"
      ],
    // testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    transform: {
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.scss$": "jest-scss-transform",
        "^.+\\.(css|scss|sass|less)$": "jest-preview/transforms/css",
        "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "jest-preview/transforms/file",
      },
      transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
      ],
};

// {
//     "roots": [
//       "<rootDir>/src"
//     ],
//     "setupFilesAfterEnv": [
//       "<rootDir>/jest/mocks/jest.setup.js",
//       '<rootDir>/test/__mocks__/fileMock.js'
//     ],
//     "collectCoverageFrom": [
//       "src/**/*.{js,jsx,ts,tsx}",
//       "!src/**/*.d.ts"
//     ],
//     "testMatch": [
//       "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//       "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
//     ],
//     "testEnvironment": "jsdom",
//     "transform": {
//       "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//       "^.+\\.scss$": "jest-scss-transform",
//       "^.+\\.css$": "<rootDir>/jest/mocks/cssMock.js"
//     },
//     "transformIgnorePatterns": [
//       "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
//       "^.+\\.module\\.(css|sass|scss)$"
//     ],
//     "moduleNameMapper": {
//       "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
//     },
//     "watchPlugins": [
//       "jest-watch-typeahead/filename",
//       "jest-watch-typeahead/testname"
//     ],
//     "resetMocks": true
//   }
