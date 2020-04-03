require('dotenv').config()
const resume = require('./src/content/resume.json')
const { name, website, email } = resume.basics

module.exports = {
  siteMetadata: {
    title: name,
    description: 'Digital portfolio and playground for Paul Kilmurray.',
    keywords: 'javascript',
    siteUrl: website,
    author: {
      name: name,
      url: website,
      email: email
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `query Repository ($owner: String!, $name: String!) {
          repository(name: $name, owner: $owner){
            owner {
              login
              avatarUrl(size: 150)
            }
            name
            description
          }
        }`,
        variables: { owner: 'kilbot', name: 'kilbot-com' }
      }
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: name.toLowerCase(),
        short_name: name.toLowerCase(),
        start_url: '/',
        background_color: '#e7eef4',
        theme_color: '#e7eef4',
        icon: 'src/images/favicon.png',
        display: 'standalone',
        cache_busting_mode: 'name',
        theme_color_in_head: false // dynamically set in ThemeSwitch
      }
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        minify: true
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml'
  ]
}
