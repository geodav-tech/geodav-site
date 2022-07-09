// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import config from '../gridsome.config'

// our two fonts and CSS deps
import '@fontsource/montserrat/700.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

// our custom global styles
import '~/assets/css/styles.css'

import DefaultLayout from '~/layouts/Default'
import PrimaryCta from '~/components/PrimaryCta'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // i suspect we'll use this a lot.
  Vue.component('PrimaryCta', PrimaryCta)

  // browser only, bc it breaks during SSR since the server has no window
  if (isClient) {
    const WOW = require('wowjs')

    // make animations only animate when things come into view.
    let wow = new WOW.WOW({animateClass: 'animate__animated', mobile: false})

    // set the hubspot path for initial pageview; it will automatically fire a `trackPageView` event when the script gets loaded
    let _hsq = window._hsq = window._hsq || []
    // The set path will be treated as relative to the current domain being viewed. The path should always start with a slash.
    _hsq.push(['setPath', window.location.href.replace(window.location.origin, '')])

    router.afterEach(() => {
      // window._hsq was defined on pageload so we can safely use it here
      window._hsq.push(['setPath', window.location.href.replace(window.location.origin, '')])
      window._hsq.push(['trackPageView'])

      // hacky shit to get it to WOW each page without needing to manually call it.
      // https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
      let scrolled = false // only start wow after the window has scrolled to not fuck up SEO
      setTimeout(() => { // needed for some reason.
        document.addEventListener('scroll', () => {
          if (!scrolled) {
            console.log('initting wow')
            scrolled = true
            wow.init()
          }
        })
      }, 50)
    })
  }

  // add hubspot tracking script
  head.script.push({
    id: 'hs-script-loader',
    async: true,
    defer: true,
    src: 'https://js.hs-scripts.com/5758326.js',
    body: true
  })

  // add default meta tags; can be manually overwritten at each page using the key.
  head.meta.push(
    {key: 'og:site_name', property: 'og:site_name', content: config.siteName},
    {key: 'og:type', property: 'og:type', content: 'website'}
  )
}
