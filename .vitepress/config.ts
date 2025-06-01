// https://vitepress.dev/reference/site-config
export default {  
  mpa: false, // https://vitepress.dev/guide/mpa-mode
  srcDir: './src',
  vite: {
    publicDir: '../public',
  },
  appearance: true,

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

  transformPageData(pageData) {
    const canonicalUrl = `https://docs.add-to-calendar-pro.com/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },

  lastUpdated: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Add to Calendar PRO Docs",
      description: "Official Add to Calendar PRO Documentation. Add to Calendar Buttons, RSVP Management, ics file generation, and more. Via App, API, and Plugins.",
    },
    de: {
      label: 'German',
      lang: 'de',
      title: "Add to Calendar PRO Dokumentation",
      description: "Offizielle Add to Calendar PRO Dokumentation. Add to Calendar Buttons, RSVP Management, und viels mehr. Via App, API und Plugins.",
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
              { text: 'Statistiken', link: '/de/application-manual/analytics' },
              { text: 'Team', link: '/de/application-manual/team' },
              { text: 'Einstellungen', link: '/de/application-manual/settings' },
              { text: 'Fehlerbehebung', link: '/de/application-manual/troubleshooting' }
            ]
          },
          {
            text: 'Anleitungen',
            collapsed: true,
            items: [
              { text: 'Dynamic Checkout', link: '/de/recipes/dynamic-checkout' },
              { text: 'Event-Webseite', link: '/de/recipes/event-website' },
              { text: 'Individuelle E-Mail-Links', link: '/de/recipes/custom-email-links' },
              { text: 'Individuelle Event-Texte', link: '/de/recipes/dynamic-text' },
              { text: 'Newsletter-Promotion', link: '/de/recipes/newsletter-promotion' },
              { text: 'RSVP', link: '/de/recipes/rsvp' },
              { text: 'Warteliste', link: '/de/recipes/waitlist' }
            ]
          },
          {
            text: 'Integration',
            collapsed: true,
            items: [
              { text: 'Allgemein', link: '/de/integration/general' },
              { text: 'Angular', link: '/de/integration/angular' },
              { text: 'Astro', link: '/de/integration/astro' },
              { text: 'HTML / JavaScript', link: '/de/integration/html' },
              { text: 'HubSpot', link: '/de/integration/hubspot' },
              { text: 'Next.js', link: '/de/integration/nextjs' },
              { text: 'Nuxt 3', link: '/de/integration/nuxt' },
              { text: 'React', link: '/de/integration/react' },
              { text: 'Svelte', link: '/de/integration/svelte' },
              { text: 'Vue 3', link: '/de/integration/vue' },
              { text: 'Webflow', link: '/de/integration/webflow' },
              { text: 'Wix.com', link: '/de/integration/wix' },
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
              { text: 'Styles', link: '/de/api/styles' },
              { text: 'RSVP-Templates', link: '/de/api/rsvp' },
              { text: "CTA-Templates", link: '/de/api/cta' },
              { text: "Landingpage-Templates", link: '/de/api/landingpages' },
              { text: 'Webhooks', link: '/de/api/webhooks' },
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
          text: 'Via GitHub editieren'
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

        nav: [
          { text: '🚀 PRO', link: 'https://add-to-calendar-pro.com/de', rel: 'author' },
          { text: '✨ Features', link: 'https://add-to-calendar-pro.com/de/features', rel: 'author' },
          { text: '🏷️ Preise', link: 'https://add-to-calendar-pro.com/de/features#pricing', rel: 'author' },
        ],
      }
    }
  },

  head: [
    [ 'meta', { name: 'author', content: 'Add to Calendar PRO' },],
    [ 'meta', { name: 'publisher', content: 'Add to Calendar PRO' },],
    [ 'meta', { name: 'robots', content: 'index, follow' },],
    [ 'meta', { property: 'og:type', content: 'website' },],
    [ 'meta', { property: 'og:site_name', content: 'Add to Calendar PRO Docs' },],
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
          { text: 'Analytics', link: '/application-manual/analytics' },
          { text: 'Team', link: '/application-manual/team' },
          { text: 'Settings', link: '/application-manual/settings' },
          { text: 'Troubleshooting', link: '/application-manual/troubleshooting' }
        ]
      },
      {
        text: 'Recipes',
        collapsed: true,
        items: [
          { text: 'Custom Email Links', link: '/recipes/custom-email-links' },
          { text: 'Dynamic Checkout', link: '/recipes/dynamic-checkout' },
          { text: 'Event Website', link: '/recipes/event-website' },
          { text: 'Individual Event Text', link: '/recipes/dynamic-text' },
          { text: 'Newsletter Promotion', link: '/recipes/newsletter-promotion' },
          { text: 'RSVP', link: '/recipes/rsvp' },
          { text: 'Waitlist', link: '/recipes/waitlist' }
        ]
      },
      {
        text: 'Integration',
        collapsed: true,
        items: [
          { text: 'General', link: '/integration/general' },
          { text: 'Angular', link: '/integration/angular' },
          { text: 'Astro', link: '/integration/astro' },
          { text: 'HTML / JavaScript', link: '/integration/html' },
          { text: 'HubSpot', link: '/integration/hubspot' },
          { text: 'Next.js', link: '/integration/nextjs' },
          { text: 'Nuxt 3', link: '/integration/nuxt' },
          { text: 'React', link: '/integration/react' },
          { text: 'Svelte', link: '/integration/svelte' },
          { text: 'Vue 3', link: '/integration/vue' },
          { text: 'Webflow', link: '/integration/webflow' },
          { text: 'Wix.com', link: '/integration/wix' },
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
          { text: 'Styles', link: '/api/styles' },
          { text: 'RSVP Templates', link: '/api/rsvp' },
          { text: "CTA Templates", link: '/api/cta' },
          { text: "Landing Page Templates", link: '/api/landingpages' },
          { text: 'Webhooks', link: '/api/webhooks' },
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
      { text: '🚀 PRO', link: 'https://add-to-calendar-pro.com/', rel: 'author' },
      { text: '✨ Features', link: 'https://add-to-calendar-pro.com/features', rel: 'author' },
      { text: '🏷️ Pricing', link: 'https://add-to-calendar-pro.com/features#pricing', rel: 'author' },
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
