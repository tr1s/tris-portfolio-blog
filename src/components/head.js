import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image, shareLink }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(site);

  return (
    <Helmet>
      <html lang="en" amp />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={
          description ||
          'Juno College of Technology helps talented developers find success in careers they love through community-oriented classroom training and personalized support.'
        }
      />

      {/* Open Graph data / Facebook Card data */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={shareLink || 'https://junocollege.com'} />
      <meta
        property="og:image"
        content={
          image
            ? `https:${image}`
            : 'https://storage.pardot.com/427982/254059/default_social_image_wide.png'
        }
      />
      <meta property="og:image:alt" content="Juno College of Technology" />
      <meta
        property="og:description"
        content={
          description ||
          'Juno College of Technology helps talented developers find success in careers they love through community-oriented classroom training and personalized support.'
        }
      />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@junocollege" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={
          description ||
          'Juno College of Technology helps talented developers find success in careers they love through community-oriented classroom training and personalized support.'
        }
      />
      <meta
        property="twitter:image"
        content={
          image
            ? `https:${image}`
            : 'https://storage.pardot.com/427982/254059/default_social_image_wide.png'
        }
      />

      {/* Pinterest */}
      {/* <meta name="p:domain_verify" content="d9265092506e23ed70805b168623dd69" /> */}
    </Helmet>
  );
};

export default Head;
