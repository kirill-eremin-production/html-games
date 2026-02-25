import boundaries from 'eslint-plugin-boundaries';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: { boundaries },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'app', mode: 'folder' },
        { type: 'pages', pattern: 'pages/*', mode: 'folder', capture: ['page'] },
        { type: 'features', pattern: 'features/*', mode: 'folder', capture: ['feature'] },
        { type: 'entities', pattern: 'entities/*', mode: 'folder', capture: ['entity'] },
        { type: 'shared', pattern: 'shared', mode: 'folder' },
      ],
      'boundaries/root-path': 'src',
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: ['app'], allow: ['app', 'pages', 'features', 'entities', 'shared'] },
            { from: ['pages'], allow: ['features', 'entities', 'shared'] },
            // combat использует exploration-сцену как фон
            {
              from: [['pages', { page: 'combat' }]],
              allow: [['pages', { page: 'exploration' }]],
            },
            { from: ['features'], allow: ['features', 'entities', 'shared'] },
            { from: ['entities'], allow: ['entities', 'shared'] },
            { from: ['shared'], allow: ['shared'] },
          ],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
