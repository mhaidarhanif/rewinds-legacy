module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
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
    "scope-enum": [
      2,
      "always",
      [
        "auth",
        "blog",
        "content",
        "example",
        "home",
        "package",
        "pricing",
        "search",
        "subscribe",
      ],
    ],
  },
};
