import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

import blogStyles from './blog.module.scss';

const Blog = (props) => {
  const { site, allMdx } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `);

  const siteTitle = site.siteMetadata.title
  const posts = allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <div className="inner-wrapper">
        <section className={blogStyles.postsContainer}>
          <p className="description"><em>"Life is bristling with thorns, and I know no other remedy than to cultivate one's own garden." <span>— Voltaire</span></em></p>
          <div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;

              return (
                <ul className={blogStyles.post} key={node.fields.slug}>
                  <li>
                    <Link className={blogStyles.postLink} to={node.fields.slug}>
                      {title}
                      <small>{node.frontmatter.date}</small>
                    </Link>
                  </li>
                </ul>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Blog
