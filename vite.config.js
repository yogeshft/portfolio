import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: use repo name as base, unless this is a user site (username.github.io)
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
    const isUserPage = repo.endsWith('.github.io')
    return repo && !isUserPage ? `/${repo}/` : '/'
  })(),
  plugins: [react()],
})
