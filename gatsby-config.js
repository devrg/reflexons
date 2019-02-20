module.exports = {
  siteMetadata: {
    title: `Reflexons 2019`,
    description: `The annual reunion and fest of the department of Computer Science and Engineering at the University of Calcutta`,
    author: `@nabhoneel`,
    siteUrl: "https://reflexons.cucse.org"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reflexons 2019`,
        short_name: `Reflexons 2019`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/logo.png`
      }
    },
    "gatsby-plugin-sass",
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-134714076-1`,
        head: true,
        anonymize: true
      }
    }
  ]
};
