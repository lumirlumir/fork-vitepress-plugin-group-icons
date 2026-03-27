import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*.ts': 'vp lint --fix',
    '*.{ts,json}': 'vp fmt',
  },
  lint: {
    plugins: ['eslint', 'typescript'],
    options: {
      typeAware: true,
    },
  },
  fmt: {
    ignorePatterns: ['dist/**', '*.md'],
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    quoteProps: 'consistent',
  },
  pack: {
    deps: {
      neverBundle: ['markdown-it'],
    },
  },
})
