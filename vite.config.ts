import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const socialPreview = {
  name: 'absolute-social-preview-url',
  transformIndexHtml(html: string) {
    const env = typeof process === 'undefined' ? {} : process.env
    const origin = (env.VITE_SITE_URL || env.DEPLOY_PRIME_URL || env.URL || '').replace(/\/+$/, '')
    const meta = origin
      ? `<meta property="og:url" content="${origin}/" />\n    <meta property="og:image" content="${origin}/og-invitacion.png" />\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />\n    <meta property="og:image:alt" content="Invitación al Baby Shower de Nataly" />\n    <meta name="twitter:image" content="${origin}/og-invitacion.png" />`
      : '<meta property="og:image" content="/og-invitacion.png" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Invitación al Baby Shower de Nataly" /><meta name="twitter:image" content="/og-invitacion.png" />'
    return html.replace('__SOCIAL_PREVIEW_META__', meta)
  },
}

export default defineConfig({
  plugins: [react(), socialPreview],
  base: '/',
})
