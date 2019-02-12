import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from 'react-helmet'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >

    <div class="container">
      <header id="js-rotate" class="main-header">
        <div class="main-header__content">
          <div class="main-header__perspective">
            <div class="main-header__front">
              <h1 id="logo">Potato</h1>
            </div>
            <div class="main-header__bottom">
              <nav class="main-header__menu">
                <a href="#home">Home</a>
                <a href="#aboutus">About</a>
                <a href=" http://reflexons.cucse.org/gallery.html" target="_blank">Gallery</a>
                <a href="http://reflexons.cucse.org/team.html" target="_blank">Team</a>
                <a href="http://reflexons.cucse.org/sponsors.html" target="_blank">Sponsors</a>
                <a href="#events">Events</a>
                <a href="#contactus">Contact Us</a>
                <a href="#schedule">Schedule</a>

              </nav>
            </div>
          </div>
        </div>
        <button class="menu-button" id="js-menu-button">
          <div class="menu-button__hb" id="js-hamburger"><span></span></div>
        </button>
      </header>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
