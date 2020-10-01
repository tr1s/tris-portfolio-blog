import React from 'react';

import Layout from '../components/Layout/Layout';
import Head from '../components/head';
import Projects from '../components/Projects/Projects';
import Newsletter from '../components/Newsletter/Newsletter';

// import projectStyles from './projects.module.scss';

const ProjectsPage = (props) => {
  return (
    <Layout location={props.location}>
      <Head title="Projects" />
      <div className="inner-wrapper">
        <Projects />
      </div>
      <Newsletter />
    </Layout>
  );
};

export default ProjectsPage;
