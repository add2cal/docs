// https://vitepress.dev/reference/site-config
export default {  
  mpa: false, // https://vitepress.dev/guide/mpa-mode
  srcDir: './src',
  vite: {
    publicDir: '../public',
  },

  sitemap: {
    hostname: 'https://docs.add-to-calendar-pro.com',
    xmlns: {
      news: false,
      xhtml: true,
      image: false,
      video: false,
      custom: [
        'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
      ],
    },
    transformItems: (items) => {
      return items.map(item => {
        return {
          ...item,
          changefreq: 'weekly',
          priority: 0.8
        };
      });
    }
  },

  lastUpdated: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Add to Calendar Docs",
      description: "Official Add to Calendar PRO Documentation",
    },
    de: {
      label: 'German',
      lang: 'de',
      title: "Add to Calendar Doku",
      description: "Offizielle Add to Calendar PRO Dokumentation",
      themeConfig: {
        sidebar: [
          { text: 'Erste Schritte', link: '/de/index' },
          {
            text: 'App Handbuch',
            collapsed: false,
            items: [
              { text: 'Elemente', link: '/de/application-manual/elements' },
              { text: 'Gruppen und Events', link: '/de/application-manual/groups-and-events' },
              { text: 'Styles und Templates', link: '/de/application-manual/styles-and-templates' },
              { text: 'Team', link: '/de/application-manual/team' },
              { text: 'Einstellungen', link: '/de/application-manual/settings' }
            ]
          },
          {
            text: 'Anleitungen',
            collapsed: true,
            items: [
              { text: 'RSVP', link: '/de/recipes/rsvp' },
              { text: 'Newsletter-Promotion', link: '/de/recipes/newsletter-promotion' },
              { text: 'Dynamic Checkout', link: '/de/recipes/dynamic-checkout' }
            ]
          },
          { text: 'Fehlerbehebung', link: '/de/troubleshooting' },
          {
            text: 'Integration',
            collapsed: true,
            items: [
              { text: 'Allgemein', link: '/de/integration/general' },
              { text: 'Angular', link: '/de/integration/angular' },
              { text: 'React', link: '/de/integration/react' },
              { text: 'Next.js', link: '/de/integration/nextjs' },
              { text: 'Vue 3', link: '/de/integration/vue' },
              { text: 'Nuxt 3', link: '/de/integration/nuxt' },
              { text: 'Svelte', link: '/de/integration/svelte' },
              { text: 'Astro', link: '/de/integration/astro' },
              { text: 'WordPress', link: '/de/integration/wordpress' }
            ]
          },
          {
            text: 'API-Dokumentation',
            collapsed: true,
            items: [
              { text: 'Einführung', link: '/de/api/introduction' },
              { text: 'Authentication', link: '/de/api/auth' },
              { text: 'Gruppen', link: '/de/api/groups' },
              { text: 'Events', link: '/de/api/events' },
              { text: 'RSVP', link: '/de/api/rsvp' },
              { text: 'Verschiedenes', link: '/de/api/miscellaneous' },
            ]
          },
          {
            text: 'Automation-Integration',
            collapsed: true,
            items: [
              { text: 'Webhooks', link: '/de/automation-integration/webhooks' },
              { text: 'Zapier', link: '/de/automation-integration/zapier' },
              { text: 'n8n', link: '/de/automation-integration/n8n' },
              { text: 'Make', link: '/de/automation-integration/make' },
            ]
          },
          {
            text: 'Rechtliches',
            collapsed: true,
            items: [
              { text: 'Impressum', link: 'https://add-to-calendar-pro.com/de/legal-notice' },
              { text: 'Datenschutzbestimmungen', link: 'https://add-to-calendar-pro.com/de/privacy-policy' }
            ]
          }
        ],
    
        editLink: {
          pattern: 'https://github.com/add2cal/docs/edit/main/src/:path',
          text: 'Edit on GitHub'
        },    

        lastUpdated: {
          text: 'Aktualisiert am',
          formatOptions: {
            forceLocale: true
          }
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
      { text: 'Getting started', link: '/index' },
      {
        text: 'Application Manual',
        collapsed: false,
        items: [
          { text: 'Elements', link: '/application-manual/elements' },
          { text: 'Groups and Events', link: '/application-manual/groups-and-events' },
          { text: 'Styles and Templates', link: '/application-manual/styles-and-templates' },
          { text: 'Team', link: '/application-manual/team' },
          { text: 'Settings', link: '/application-manual/settings' }
        ]
      },
      {
        text: 'Recipes',
        collapsed: true,
        items: [
          { text: 'RSVP', link: '/recipes/rsvp' },
          { text: 'Newsletter Promotion', link: '/recipes/newsletter-promotion' },
          { text: 'Dynamic Checkout', link: '/recipes/dynamic-checkout' }
        ]
      },
      { text: 'Troubleshooting', link: '/troubleshooting' },
      {
        text: 'Integration',
        collapsed: true,
        items: [
          { text: 'General', link: '/integration/general' },
          { text: 'Angular', link: '/integration/angular' },
          { text: 'React', link: '/integration/react' },
          { text: 'Next.js', link: '/integration/nextjs' },
          { text: 'Vue 3', link: '/integration/vue' },
          { text: 'Nuxt 3', link: '/integration/nuxt' },
          { text: 'Svelte', link: '/integration/svelte' },
          { text: 'Astro', link: '/integration/astro' },
          { text: 'WordPress', link: '/integration/wordpress' }
        ]
      },
      {
        text: 'API Reference',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/api/introduction' },
          { text: 'Authentication', link: '/api/auth' },
          { text: 'Groups', link: '/api/groups' },
          { text: 'Events', link: '/api/events' },
          { text: 'RSVP', link: '/api/rsvp' },
          { text: 'Miscellaneous', link: '/api/miscellaneous' },
        ]
      },
      {
        text: 'Automation Integration',
        collapsed: true,
        items: [
          { text: 'Webhooks', link: '/automation-integration/webhooks' },
          { text: 'Zapier', link: '/automation-integration/zapier' },
          { text: 'n8n', link: '/automation-integration/n8n' },
          { text: 'Make', link: '/automation-integration/make' },
        ]
      },
      {
        text: 'Legal',
        collapsed: true,
        items: [
          { text: 'Legal Notice', link: 'https://add-to-calendar-pro.com/legal-notice' },
          { text: 'Privacy Policy', link: 'https://add-to-calendar-pro.com/privacy-policy' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/add2cal/docs/edit/main/src/:path',
      text: 'Edit on GitHub'
    },

    lastUpdated: {
      text: 'Last Update',
      formatOptions: {
        forceLocale: true
      }
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
      { icon: 'x', link: 'https://x.com/add2calendar' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/add-to-calendar' }
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
}
