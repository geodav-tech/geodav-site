// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'geodav.tech',
  siteUrl: 'https://geodav.tech', // i think this needs to NOT end in a slash.
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {}
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        policy: [{ userAgent: '*', disallow: '/demos/secret/*' }]
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-139335185-1'
      }
    },
    {
      use: 'gridsome-plugin-precompress',
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'json']
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Service', // Required
        baseDir: './src/services', // Where folders with .md files are located
        template: './src/templates/Service.vue', // Optional
        pathPrefix: '/services'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'PortfolioItem', // Required
        baseDir: './src/portfolio', // Where folders with .md files are located
        template: './src/templates/PortfolioItem.vue', // Optional
        pathPrefix: '/portfolio',
        refs: {
          // md files inherit their ids from the folder that contains them, so tags must be the exact name
          servicesUsed: 'Service' 
        }
      }
    }
  ]
}
