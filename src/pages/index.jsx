import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

import me from '../assets/images/mee.jpg';

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
        <div className={indexStyles.tris}>

          <span className={indexStyles.title}>TRISTAN LAWRENCE</span>

          {/* INFO */}
          <img src={me} alt="A portrait photograph of Tristan Lawrence."/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
