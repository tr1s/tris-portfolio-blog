import React from 'react';
import { Link } from 'gatsby';

import rain from '../../assets/audio/nightizm-ambient-rain.mp3';
import play from '../../assets/images/play.svg';

import headerStyles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className="inner-wrapper">

        {/* NAV */}
        <nav className={headerStyles.nav}>
          <div>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <p>........................</p>
        </nav>

        {/* MUSIC */}
        <div className={headerStyles.player}>
          <button className={headerStyles.playContainer}>
            <img src={play} alt="Play button."/>
          </button>
        </div>

        {/* HTML PLAYER */}
        <audio controls>
          <source src={rain} type="audio/mpeg" />
        </audio>
      </div>
    </header>
  )
}

export default Header;
