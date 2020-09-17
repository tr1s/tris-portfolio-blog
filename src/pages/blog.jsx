import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Head from '../components/head'
import Newsletter from '../components/Newsletter/Newsletter';

import blogPostSvg from '../assets/images/blog/blog.svg';

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
      <Head
        title="All posts"
      />

      <section className={blogStyles.blog}>
        <div className="inner-wrapper">
          <div className={blogStyles.postsContainer}>
            <p className="quote">
              <em>"Life is bristling with thorns, and I know no other remedy than to cultivate one's own garden." <span>— Voltaire</span></em>
            </p>

            <div className="page-info">
              <h2 className={blogStyles.title}>Blog / Digital Garden</h2>
              <p>Expressing myself and teaching others through words:</p>
            </div>

            {/* <figure className={blogStyles.portrait}>
              <img src={blogPostSvg} alt="A portrait photograph of Tristan Lawrence." />
            </figure> */}

            <div>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;

                return (
                  <ul className={blogStyles.post} key={node.fields.slug}>
                    <li>
                      <Link className={blogStyles.postLink} to={node.fields.slug}>
                        <small>{node.frontmatter.date}</small>
                        {title}
                      </Link>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>
        </div>

        <Newsletter />
      </section>



    </Layout>
  )
}

export default Blog
