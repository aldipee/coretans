module.exports = {
  siteMetadata: {
    title: `Coretans`,
    name: `Coretans`,
    siteUrl: `https://aldipee.com`,
    description: `Aldi Pranata's personal blog`,
    hero: {
      heading: 'The best things, never come easy',

      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/aldipeee`
      },
      {
        name: `github`,
        url: `https://github.com/aldipee`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/aldipee`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alfie Qashwa`,
        short_name: `Celloworld`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-plantuml`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134432059-1`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lusitana`,
        ],
        display: 'swap'
      }
    }
  ]
}
