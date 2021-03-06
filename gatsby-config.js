module.exports = {
  siteMetadata: {
    title: 'Tris',
    author: 'Tristan Lawrence',
    description:
      'Tristan Lawrence is a front-end engineer, digital creative, and music producer. This is my digital garden. 🌱🎶',
    siteUrl: 'https://tris.codes',
    social: {
      twitter: 'triscodes',
      instagram: 'tris.codes',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mailgo',
      options: {
        mailgoConfig: {
          dark: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `
            @import './src/styles/variables.scss';
            @import './src/styles/mixins.scss';
            @import './src/styles/functions.scss';
            @import './src/styles/keyframes.scss';
          `,
        includePaths: ['./src/styles/'],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },

          {
            resolve: 'gatsby-remark-smartypants',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },

            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             **/
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    html
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tristan Lawrence',
        short_name: 'tris',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#6554',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-512x512.jpg',
      },
    },
    'gatsby-plugin-offline',
  ],
};
