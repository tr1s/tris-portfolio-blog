import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import projectStyles from './projects.module.scss';

const Projects = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Projects" />
      <div className="inner-wrapper">
        <div className={projectStyles.projects}>
          <h1>Projects</h1>
          <p className="description">
          <em>“One can have no smaller or greater mastery than mastery of oneself.”
          ― Leonardo da Vinci</em>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Projects;
