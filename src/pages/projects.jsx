import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import juno from '../assets/images/projects/juno.jpg';
import steph from '../assets/images/projects/steph-main.jpg';
import kathryn from '../assets/images/projects/kathryn.jpg';
import webpack from '../assets/images/projects/webpack.jpg';
import moodsong from '../assets/images/projects/moodsong-slant.jpg';

import projectStyles from './projects.module.scss';

const Projects = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Projects" />
      <div className="inner-wrapper">
        <div className={projectStyles.projects}>

          {/* INFO */}
          <div className={projectStyles.projectInfo}>

            {/* <h1 className={projectStyles.title}>Projects</h1> */}
            <p className="description">
              <em>“One can have no smaller or greater mastery than mastery of oneself.”{' '}
              <span>― Leonardo da Vinci</span></em>
            </p>
          </div>

          {/* PROJECTS LIST */}
          <div className={projectStyles.projectsList}>

            {/* 1 */}
            <a href="https://junocollege.com" className={projectStyles.projectLink} target="_blank" rel="noopener noreferrer">
              <div className={projectStyles.project}>
                <div className={projectStyles.info}>
                  <h2>Juno College</h2>
                  <p>Development of HackerYou’s newly branded website Juno College of Technology — Built with React, Gatsby, and Contentful.</p>
                </div>
                <img src={juno} alt="" />
              </div>
            </a>

            {/* 2 */}
            <a href="https://stephfirka.com" className={projectStyles.projectLink} target="_blank" rel="noopener noreferrer">
              <div className={projectStyles.project}>
                <div className={projectStyles.info}>
                  <h2>Steph Firka</h2>
                  <p>Development of Steph Firka's freshly designed portfolio — Built with Vue and Nuxt.js.</p>
                </div>
                <img src={steph} alt="" />
              </div>
            </a>

            {/* 3 */}
            <a href="https://kathrynbowen.com" className={projectStyles.projectLink} target="_blank" rel="noopener noreferrer">
              <div className={projectStyles.project}>
                <div className={projectStyles.info}>
                  <h2>Kathryn Bowen</h2>
                  <p>Development of an e-commerce store for up-and-coming fashion designer Kathryn Bowen — Built with Shopify.</p>
                </div>
                <img src={kathryn} alt="" />
              </div>
            </a>

            {/* 4 */}
            <a href="https://github.com/tr1s/tris-webpack-boilerplate" className={projectStyles.projectLink} target="_blank" rel="noopener noreferrer">
              <div className={projectStyles.project}>
                <div className={projectStyles.info}>
                  <h2>Webpack Boilerplate</h2>
                  <p>A Webpack boilerplate for static websites with modern tools baked in. Thorough documentation for beginners — perfect on performance.</p>
                </div>
                <img src={webpack} alt="" />
              </div>
            </a>

            {/* 5 */}
            <a href="https://moodsong.tris.codes/" className={projectStyles.projectLink} target="_blank" rel="noopener noreferrer">
              <div className={projectStyles.project}>
                <div className={projectStyles.info}>
                  <h2>Moodsong</h2>
                  <p>A drumpad that produces a unique song based on user selections — Built with HTML, CSS, JavaScript, jQuery, and FL Studio.</p>
                </div>
                <img src={moodsong} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects;
