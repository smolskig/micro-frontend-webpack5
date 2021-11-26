module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  modulePaths: ['__mocks__'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|PNG|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
};
