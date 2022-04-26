// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'geodav.tech',
  plugins: [
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
