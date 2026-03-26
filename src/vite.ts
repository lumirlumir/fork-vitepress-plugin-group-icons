import type { Plugin, ViteDevServer } from 'vite'
import type { Options } from './types'
import { generateCSS } from './codegen'
import { isSetEqual } from './utils'

function decodeHtmlEntities(value: string) {
  return value
    .replaceAll(/&(?:lt|#60);/g, '<')
    .replaceAll(/&(?:gt|#62);/g, '>')
    .replaceAll(/&(?:quot|#34);/g, '"')
    .replaceAll(/&(?:apos|#39);/g, '\'')
    .replaceAll(/&(?:amp|#38);/g, '&')
}

export function groupIconVitePlugin(options?: Options): Plugin {
  const virtualCssId = 'virtual:group-icons.css'
  const resolvedVirtualCssId = `\0${virtualCssId}`
  const combinedRegex = /\bdata-title=\\"([^"]*)\\"|\bdata-title="([^"]*)"|"data-title":\s*"([^"]*)"/g
  const matches = new Set<string>()

  let oldMatches: Set<string>
  let server: ViteDevServer | undefined

  options = options || { customIcon: {} }

  function handleUpdateModule() {
    const mod = server?.moduleGraph.getModuleById(resolvedVirtualCssId)
    if (mod) {
      server!.moduleGraph.invalidateModule(mod)
      server!.reloadModule(mod)
    }
  }

  return {
    name: 'vitepress-plugin-group-icons',
    enforce: 'post',
    resolveId(id) {
      if (id === virtualCssId) {
        return resolvedVirtualCssId
      }
      return undefined
    },

    configureServer(_server) {
      server = _server
    },

    async load(id) {
      if (id === resolvedVirtualCssId) {
        const { css } = await generateCSS(matches, options)
        oldMatches = new Set(matches)
        return css
      }

      return undefined
    },
    transform: {
      filter: {
        id: /\.(md|md\?vue|md\?v=)$/,
      },
      handler(code) {
        combinedRegex.lastIndex = 0

        while (true) {
          const match = combinedRegex.exec(code)
          if (!match)
            break

          matches.add(decodeHtmlEntities(match[1] || match[2] || match[3]))
        }

        if (!isSetEqual(matches, oldMatches)) {
          handleUpdateModule()
        }
      },
    },
  }
}
