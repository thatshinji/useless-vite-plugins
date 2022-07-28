import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  AuthorTag,
  ImageComp
} from './plugins/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AuthorTag({author: "shinji", date: new Date(), custom:"Hello Shinji" }),
    ImageComp({type:'url'})
  ]
})
