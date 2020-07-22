import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className="inner-wrapper">
        <nav className={headerStyles.nav}>
          <div>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <p>........................</p>
        </nav>
      </div>
    </header>
  )
}

export default Header;
