module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: `dracula`,
      },
    },
  ],
  siteMetadata: {
    title: `Blog by Leandro Machado`,
    author: `Leandro Machado`,
    description: `Sharing knowledge about Go and JavaScript`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lemachadao`,
      },
      {
        name: `github`,
        url: `https://github.com/leandro-machado`,
      },
    ],
  },
}
