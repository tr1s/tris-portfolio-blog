import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

import '../styles/normalize.scss'
import '../styles/typography.scss'
import '../styles/global.scss'
import indexStyles from './index.module.scss';


const Home = props => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title='All posts'
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <div className='inner-wrapper'>
        <h1>/</h1>
        <span className={indexStyles.tris}>TRISTAN LAWRENCE</span>

        {/* INFO */}
        <div className={indexStyles.trisInfo}>
          <p>- Hello World -</p>
          <p>I <Link to="/projects">build websites</Link> and I <a href="https://nightizm.com" target="_blank" rel="noopener noreferrer">make music</a>.</p>
          <p>I work at <a href="https://junocollege.com" target="_blank" rel="noopener noreferrer">Juno College of Technology</a>, and I create at <a href="https://nightizm.com" target="_blank" rel="noopener noreferrer">Nightizm</a>.</p>
          <p>Let's talk about ways I can help solve your problems.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
