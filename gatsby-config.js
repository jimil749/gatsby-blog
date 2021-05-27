module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `GSoC Weekly Blog`,
    author: `Jimil Desai`,
    description: `Record of my weekly work during GSoC'21`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/jimil749`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
