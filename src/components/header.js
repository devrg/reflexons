import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { push as Menu } from 'react-burger-menu'

import './header.scss'

const Header = () => (
  <Menu 
    pageWrapId={ "page-wrap" } 
    outerContainerId={ "outer-container" }
    right
    onStateChange={ (state) => {
      if(state.isOpen) {
        document.querySelector('.bm-burger-button').style.display = 'none';
      } else {
        document.querySelector('.bm-burger-button').style.display = 'block';
      }
    }}
    >
    <Link to='/' className="menu-item">Home</Link>
    <Link to='/about' className="menu-item">About</Link>
    <Link to='/events' className="menu-item">Events</Link>
    <Link to='/gallery' className="menu-item">Gallery</Link>
    <Link to='/team' className="menu-item">Team</Link>
    <Link to='/sponsors' className="menu-item">Sponsors</Link>
    <Link to='/schedule' className="menu-item">Schedule</Link>
    <Link to='/contact' className="menu-item">Contact</Link>
  </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
