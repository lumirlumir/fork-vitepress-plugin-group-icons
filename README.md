# vitepress-plugin-group-icons

[![Open on npmx.dev](https://npmx.dev/api/registry/badge/version/vitepress-plugin-group-icons?labelColor=080f12&color=1fa669)](https://npmx.dev/package/vitepress-plugin-group-icons)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/license/vitepress-plugin-group-icons?labelColor=080f12&color=1fa669)](https://npmx.dev/package/vitepress-plugin-group-icons)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/downloads-month/vitepress-plugin-group-icons?labelColor=080f12&color=1fa669)](https://npmx.dev/package/vitepress-plugin-group-icons)

> Enhance code blocks features for VitePress.

![vitepress-plugin-group-icons preview](https://static.yuy1n.io/vp-plugin-group-icons.png)

<p align='center'>
<a href="https://vp.yuy1n.io/">
📜 Documentation
</a>
</p>

<p align='center'>
<a href="https://stackblitz.com/edit/vitepress-plugin-group-icons?file=docs%2Findex.md">
<img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz">
</a>
</p>

## Usage

### Install

```sh [npm]
npm install vitepress-plugin-group-icons
```

```sh [yarn]
yarn add vitepress-plugin-group-icons
```

```sh [pnpm]
pnpm add vitepress-plugin-group-icons
```

```sh [bun]
bun add vitepress-plugin-group-icons
```

### Configuration

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  }
})
```

```ts
// .vitepress/theme/index.ts
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'

export default Theme
```

### Usage Example
````markdown
::: code-group

```sh [npm]
npm install vitepress-plugin-group-icons
```

```sh [yarn]
yarn add vitepress-plugin-group-icons
```

```sh [pnpm]
pnpm add vitepress-plugin-group-icons
```

```sh [bun]
bun add vitepress-plugin-group-icons
```

:::
````

## Credits

- [Nuxt UI Pro](https://ui.nuxt.com/pro/prose/code-group)

## License

[MIT](./LICENSE) License © 2024-PRESENT [Leo](https://github.com/yuyinws)
