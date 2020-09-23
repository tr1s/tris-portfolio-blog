import React from 'react';
import { Link } from 'gatsby';
// import useSound from 'use-sound';

// import fx from '../../assets/audio/menu.mp3';

import headerStyles from './Header.module.scss'

const Header = () => {
  // const year = new Date().getFullYear;
  // const [play, { stop }] = useSound(fx, {
  //   interrupt: true
  // });
  return (
    <header>
      <div className="inner-wrapper">

        {/* NAV */}
        <nav className={headerStyles.nav}>
          <Link to="/" className={headerStyles.title}>
            <h1>tris.<span>codes</span></h1>
          </Link>
          <div className={headerStyles.navLinks}>
            <Link to="/" activeClassName={headerStyles.active}>Home</Link>
            <Link to="/projects" activeClassName={headerStyles.active}>Projects</Link>
            <Link to="/blog" activeClassName={headerStyles.active}>Blog</Link>
            {/* <a href="https://nightizm.com">Music</a> */}
          </div>
        </nav>

      </div>
    </header>
  )
}

export default Header;
