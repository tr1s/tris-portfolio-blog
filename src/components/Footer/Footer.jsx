import React from 'react';

import footerStyles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="inner-wrapper">
        <p>......................................</p>
        <p>
          {new Date().getFullYear()} ~ {' '}
          <a href="https://www.gatsbyjs.org"><span role="img" aria-label="Butterfly Emoji.">🦋🌙</span></a>
        </p>
      </div>

      {/* BLM */}
      <a className={footerStyles.blm} href="https://linktr.ee/blacklivesmatter" target="_blank" rel="noopener noreferrer">BLACK LIVES MATTER</a>
    </footer>
  )
}

export default Footer;
