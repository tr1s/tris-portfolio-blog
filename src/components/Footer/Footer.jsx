import React from 'react';

import footerStyles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="inner-wrapper">
        <p>......................................</p>
        <p>
          {/* {new Date().getFullYear()}, Built w/ Love{' '}
          <a href="https://www.gatsbyjs.org">??? 🌱🦋🌙</a> */}
        </p>
      </div>
    </footer>
  )
}

export default Footer;
