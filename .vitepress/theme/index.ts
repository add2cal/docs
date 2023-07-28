// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue';
import { useData, inBrowser } from 'vitepress';
import Theme from 'vitepress/theme';
import './custom-style.css';

export default {
  ...Theme,
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  },
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
