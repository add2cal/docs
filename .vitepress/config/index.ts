import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({  
  srcDir: './src',
  vite: {
    publicDir: '../public',
  },

  lastUpdated: false,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Add to Calendar Documentation",
      description: "Official Add to Calendar Pro Documentation",
    },
    de: {
      label: 'German',
      lang: 'de',
      title: "Add to Calendar Dokumentation",
      description: "Offizielle Add to Calendar Pro Dokumentation",
      themeConfig: {
        sidebar: [
          { text: 'Einführung', link: '/de/index' },
          {
            text: 'Erste Schritte',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: '/de/getting-started/markdown-examples' },
              { text: 'Runtime API Examples', link: '/de/getting-started/api-examples' }
            ]
          }
        ],
    
        editLink: {
          pattern: 'https://github.com/add2cal/docs/edit/main/src/:path',
          text: 'Edit on GitHub'
        },    
    
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        langMenuLabel: 'Change language',
      }
    }
  },

  head: [
    [ 'meta', { name: 'author', content: 'Add to Calendar' },],
    [ 'meta', { name: 'publisher', content: 'Add to Calendar' },],
    [ 'meta', { name: 'robots', content: 'index, follow' },],
    [ 'meta', { property: 'og:type', content: 'website' },],
    [ 'meta', { property: 'og:site_name', content: 'Add to Calendar Docs' },],
    [ 'meta', { property: 'og:image', content: '/fb.png' },],
    [ 'meta', { name: 'twitter:card', content: 'summary_large_image' },],
    [ 'meta', { name: 'twitter:site', content: 'https://docs.add-to-calendar-pro.com' },],
    [ 'meta', { name: 'twitter:creator', content: 'add2calendar' },],
    [ 'meta', { name: 'twitter:image', content: '/tw.png' },],
    [ 'meta', { name: 'msapplication-TileColor', content: '#9755ff' },],
    [ 'meta', { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },],
    [ 'link', { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },],
    [ 'link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png' },],
    [ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon-180x180.png' },],
    [ 'link', { rel: 'mask-icon', color: '#9755ff', href: '/favicons/safari-pinned-tab.svg' },],
    [ 'link', { rel: 'dns-prefetch', href: 'https://a.add-to-calendar-pro.com' },],
    [ 'script', { async: 'true', defer: 'true', 'data-website-id': '442d1c34-8464-4b6f-ad6b-973b682e42f7', src: 'https://a.add-to-calendar-pro.com/atcpa.js', 'data-host-url': 'https://a.add-to-calendar-pro.com', 'data-domains': 'docs.add-to-calendar-pro.com' }],
  ],

  themeConfig: {
    siteTitle: false,
    sidebar: [
      { text: 'Introduction', link: '/index' },
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/getting-started/markdown-examples' },
          { text: 'Runtime API Examples', link: '/getting-started/api-examples' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/add2cal/docs/edit/main/src/:path',
      text: 'Edit on GitHub'
    },    

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    langMenuLabel: 'Change language',

    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Add to Calendar Docs',
    },

    nav: [
      { text: 'Go Pro', link: 'https://add-to-calendar-pro.com' },
      { text: 'App Login', link: 'https://app.add-to-calendar-pro.com' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/add2cal' },
      { icon: 'twitter', link: 'https://twitter.com/add2calendar' },
      { icon: 'youtube', link: 'https://www.youtube.com/@add2cal' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          de: {
            translations: {
              button: {
                buttonText: 'Suche',
                buttonAriaLabel: 'Suche'
              },
              modal: {
                noResultsText: 'Keine Ergebnisse gefunden',
                resetButtonTitle: 'Zurücksetzen',
                displayDetails: 'Details anzeigen',
                backButtonTitle: 'Zurück',
                footer: {
                  selectText: 'auswählen',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'navigieren',
                  navigateUpKeyAriaLabel: 'Pfeiltaste nach oben',
                  navigateDownKeyAriaLabel: 'Pfeiltaste nach unten',
                  closeText: 'schließen',
                  closeKeyAriaLabel: 'Escape-Taste'
                }
              }
            }
          }
        }
      }
    }
  }
})
