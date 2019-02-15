module.exports = {
  siteMetadata: {
    title: `Reflexons 2019`,
    description: `A reunion + annual fest of the department of Computer Science and Engineering at the University of Calcutta`,
    author: `@nabhoneel`,
    siteUrl: 'https://www.reflexons.cucse.org'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#46ceff`,
        theme_color: `#46ceff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          'src/assets',
        ]
      }
    },
    // 'gatsby-plugin-offline',
  ],
}
