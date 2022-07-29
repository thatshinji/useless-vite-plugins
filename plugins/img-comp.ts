import { ResolvedConfig, Plugin } from "vite"
import fs from 'fs'
import resolve from 'resolve'
export interface ImageOptions {
  exportType: 'url'| 'component'
}

let config: ResolvedConfig
const imgRegex = /\.(png|jpg|gif|svg)$/
const genComp = (src: string) => {
  return `
    import React from 'react'
    const Image = ({className, onClick, key}) => {
      return React.createElement('img',
        { src: ${src},
          className,
          onClick
        })
    }
    export default Image
  `
}

const ImageComp = (options: ImageOptions) => {
  return {
    name: 'ImageComp',
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig
    },
    async transform(code, id) {
      const [_, ext] = id.split('.')
      if (!imgRegex.test(`.${ext}`)) {
        return code
      }
      const esbuildPath = resolve.sync('esbuild', { basedir: 'vite'})
      const esbuild = await import(esbuildPath)
      const src = code.replace('export default', '')
      const componentCode = genComp(code, src)
      const result = await esbuild.transform(componentCode, {
        loader: 'tsx',
      })
      return result.code
    }
  }
}

export default  ImageComp
