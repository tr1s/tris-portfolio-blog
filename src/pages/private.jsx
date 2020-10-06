import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Head from '../components/head';
import Newsletter from '../components/Newsletter/Newsletter';

import blogStyles from './blog.module.scss';

const Private = (props) => {
  const { site, allMdx } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: false } } }
      ) {
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

  const siteTitle = site.siteMetadata.title;
  const posts = allMdx.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="All posts" />

      <section className={blogStyles.blog}>
        <div className="inner-wrapper">
          <div className={blogStyles.postsContainer}>
            <p className="quote">
              <em>
                "Life is bristling with thorns, and I know no other remedy than to cultivate one's
                own garden." <span>— Voltaire</span>
              </em>
            </p>

            <div className="page-info blog">
              <h2 className={blogStyles.title}>Private _</h2>
            </div>

            <ol className={blogStyles.postContainer}>
              {posts.map(({ node }) => {
                console.log(node);
                const title = node.frontmatter.title || node.fields.slug;

                return (
                  <li className={blogStyles.post} key={node.fields.slug}>
                    <Link className={blogStyles.postLink} to={node.fields.slug}>
                      <small>{node.frontmatter.date}</small>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <Newsletter />
      </section>
    </Layout>
  );
};

export default Private;
