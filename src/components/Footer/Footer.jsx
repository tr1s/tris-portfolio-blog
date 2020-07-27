import React from 'react';

import footerStyles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="inner-wrapper">
        <p>......................................</p>
        <p>
          {new Date().getFullYear()},{' '}
          <a href="https://www.gatsbyjs.org">??? 🌱🦋🌙</a>
        </p>
      </div>

      {/* BLM */}
      <a className={footerStyles.blm} href="#" target="_blank" rel="noopener noreferrer">BLM</a>
    </footer>
  )
}

export default Footer;
