import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

import reading from '../assets/images/reading.svg';

import BlogPostStyles from './blog-post.module.scss';

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log('Page context:',this.props.pageContext)

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

        <section className={`inner-wrapper ${BlogPostStyles.postWrapper}`}>

          {/* POST INFO */}
          <div className={BlogPostStyles.postInfo}>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <img className={BlogPostStyles.reading} src={reading} alt="" />
            <div>............</div>
          </div>

          {/* ARTICLE */}
          <article className={BlogPostStyles.post}>
            <MDXRenderer>{post.body}</MDXRenderer>

            {/* NAVIGATE */}
            <ul className={BlogPostStyles.navigate}>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </article>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
