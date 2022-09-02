module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feature',
        'fix',
        'refactor',
        'revert',
        'style',
        'test',
        'done',
        'add',
        'update'
      ],
    ],
  },
};
