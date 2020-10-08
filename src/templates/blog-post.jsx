import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout/Layout';
import Head from '../components/head';
import Newsletter from '../components/Newsletter/Newsletter';
import Comment from '../components/Comment/Comment.jsx';

// import reading from '../assets/images/blog/reading.svg';

import BlogPostStyles from './blog-post.module.scss';

const BlogPostTemplate = (props) => {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;
  console.log('Page context:', props.pageContext);
  console.log('post:', post);

  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement('script');
    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute('repo', 'tr1s/tris-portfolio-blog-comments');
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('id', 'utterances');
    commentScript.setAttribute('theme', 'github-light');
    commentScript.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []); // eslint-disable-line

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title={post.frontmatter.title} description={post.excerpt} />

      <section className={`inner-wrapper ${BlogPostStyles.postWrapper}`}>
        {/* QUOTE */}
        <p className="quote">
          <em>{post.excerpt}</em>
        </p>

        {/* POST INFO */}
        <div className={BlogPostStyles.postInfo}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {/* <img className={BlogPostStyles.reading} src={reading} alt="" /> */}
          <p>{post.timeToRead} minute read</p>
          <div>...............</div>
        </div>

        {/* ARTICLE */}
        <article className={BlogPostStyles.post}>
          <MDXRenderer>{post.body}</MDXRenderer>

          <div className={BlogPostStyles.comments} id="comments">
            <h2>Comments_</h2>
            <Comment commentBox={commentBox} />
          </div>

          {/* NAVIGATE */}
          <ul className={BlogPostStyles.navigate}>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <span>←</span> {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} <span>→</span>
                </Link>
              )}
            </li>
          </ul>
        </article>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default BlogPostTemplate;

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
        tags
        excerpt
        published
      }
      body
      timeToRead
    }
  }
`;
