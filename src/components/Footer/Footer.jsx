import React from 'react';

import footerStyles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="inner-wrapper">
        <div className={footerStyles.footerContainer}>
          <ul className={footerStyles.footerLinks}>
            <li>
              <a href="https://github.com/tr1s" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/triscodes" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="mailto:trislaw@gmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </li>
          </ul>

          <div className={footerStyles.copyright}>
            <p>&copy; {new Date().getFullYear()} ~ Tristan Michael Lawrence</p>
          </div>
        </div>
        <p />
      </div>

      {/* BLM */}
      <a
        className={footerStyles.blm}
        href="https://linktr.ee/blacklivesmatter"
        target="_blank"
        rel="noopener noreferrer"
      >
        BLM
      </a>
    </footer>
  );
}

export default Footer;
