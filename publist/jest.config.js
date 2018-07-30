module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  verbose: true,
  testURL: "http://localhost/",
  transformIgnorePatterns: ["node_modules/(?!iggy-common)"]
};
