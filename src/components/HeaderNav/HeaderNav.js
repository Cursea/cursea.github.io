import React from 'react'
import './HeaderNav.css'

const HeaderNav = () => {
  return (
    <header id="header-nav">
      <div>
        <h1>
          Font <span>of all</span> Fonts
        </h1>
      </div>
      <nav>
        <ul id="links">
          <li>
            <a href="/Catalogue">CATALOGUE</a>
          </li>
          <li>
            <a href="/Featured">FEATURED</a>
          </li>
          <li>
            <a href="/Articles">ARTICLES</a>
          </li>
          <li>
            <a href="/About">ABOUT</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
