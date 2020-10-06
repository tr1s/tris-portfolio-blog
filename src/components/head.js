import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image, imageAltText, shareLink }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          social {
            twitter
            instagram
          }
        }
      }
    }
  `);

  const siteImage = 'https://i.imgur.com/H9kuxwX.jpg';

  return (
    <Helmet>
      <html lang="en" amp />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={description || site.siteMetadata.description} />

      {/* Open Graph data / Facebook Card data */}
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={shareLink || site.siteMetadata.siteUrl} />
      <meta property="og:image" content={image ? `https:${image}` : `${siteImage}`} />
      <meta
        property="og:image:alt"
        content={imageAltText || `Hildegard von Bingen, and inspiration of Tristan's.`}
      />
      <meta property="og:description" content={description || site.siteMetadata.description} />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${site.siteMetadata.social.twitter}`} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={description || site.siteMetadata.description} />
      <meta property="twitter:image" content={image ? `https:${image}` : `${siteImage}`} />
    </Helmet>
  );
};

export default Head;
