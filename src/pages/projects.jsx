import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import projectStyles from './projects.module.scss';

const Projects = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Projects" />
      <div className="inner-wrapper">
        <h1>Projects</h1>
        <div className={projectStyles.projects}>
          List em' here.
        </div>
      </div>
    </Layout>
  )
}

export default Projects;
