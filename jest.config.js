"jest": {
  "globals": {
    "ts-jest": {
      "skipBabel": true
    }
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testRegex": "/(__tests__)/.*\\.spec.(ts|tsx|js)$",
  "moduleNameMapper": {
     ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
     ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
 },
  "setupFiles": [
    "jest-fetch-mock",
    "jest-localstorage-mock",
    "./src/__tests__/__setups__/localstorage.ts"
  ]
}
