module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: { version: "detect" },
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
  },
};
