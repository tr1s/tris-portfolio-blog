import React from 'react';

import footerStyles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="inner-wrapper">
        <div className={footerStyles.footerContainer}>
          <ul className={footerStyles.footerLinks}>
            <li><a href="https://google.com">GitHub</a></li>
            <li><a href="https://google.com">Twitter</a></li>
            <li><a href="https://google.com">Email</a></li>
          </ul>

          <div className={footerStyles.copyright}>
            &copy; {new Date().getFullYear()} ~ {' '}
            <a href="https://www.gatsbyjs.org">Tristan Michael Lawrence</a>
          </div>
        </div>
        <p>

        </p>
      </div>

      {/* BLM */}
      <a className={footerStyles.blm} href="https://linktr.ee/blacklivesmatter" target="_blank" rel="noopener noreferrer">BLM</a>
    </footer>
  )
}

export default Footer;
