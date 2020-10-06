import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Newsletter from '../components/Newsletter/Newsletter';

import Layout from '../components/Layout/Layout';
import Head from '../components/head';
import Projects from '../components/Projects/Projects';
import Button from '../components/Button/Button';

import me from '../assets/images/home/mee.jpg';

import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/code.scss';
import '../styles/global.scss';
import indexStyles from './index.module.scss';

const Home = (props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="All posts" />

      <div className="inner-wrapper">
        {/* QUOTE */}
        <p className="quote">
          <em>
            “One can have no smaller or greater mastery than mastery of oneself.”{' '}
            <span>― Leonardo da Vinci</span>
          </em>
        </p>

        {/* HOME */}
        <div className={indexStyles.home}>
          <div className={indexStyles.info}>
            <h1 className={indexStyles.headline}>
              Building the modern web with focus on <span>performance</span>, <span>aesthetic</span>
              , and <span>simplicity</span>.
            </h1>
            <p className={indexStyles.description}>
              I’m just a boy who loves to create — I make <span>progressive web applications</span>,{' '}
              <span>dynamic websites</span>, <span>e-commerce websites</span>, and{' '}
              <span>music</span>. <a href="mailto:trislaw@gmail.com">Email me</a> and let’s talk
              about ways I can help solve your problems.
            </p>
            {/* <Button type="link" text="Blog" route="/blog" /> */}
          </div>

          {/* PORTRAIT? */}
          <figure className={indexStyles.portrait}>
            <img src={me} alt="A portrait photograph of Tristan Lawrence." />
          </figure>
        </div>

        <Projects />

        {/* TRISTAN LAWRENCE */}
        <span className={indexStyles.title}>TRISTAN LAWRENCE</span>
      </div>

      <Newsletter />
    </Layout>
  );
};

export default Home;
