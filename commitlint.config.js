module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // TODO Add Scope Enum Here
    "scope-enum": [
      2,
      "always",
      ["home", "example", "blog", "pricing", "search", "subscribe", "auth"],
    ],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "infra",
      ],
    ],
  },
};
