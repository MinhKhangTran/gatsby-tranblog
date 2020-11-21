module.exports = {
  siteMetadata: {
    title: "TranBlog",
    description: "This is a awesome Blog built with Gatsby and MDX",
    titleTemplate: "%s | TranBlog",
    url: "https://gatsby-tranblog.netlify.app",
    image: "mainImg.png",
    twitterUsername: "@john-smilga",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
  ],
}
