module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "GatsbyJS",
      short_name: "GatsbyJS",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "minimal-ui",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
    },
  },

  ],
}
