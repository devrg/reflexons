import { Link } from "gatsby";
import { Link as AnchorLink } from "react-scroll";
import React, { Component } from "react";

import { slide as Menu } from "react-burger-menu";

import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };

    this.location = "/";
    this.showSub = false;

    this.aboutListRef = React.createRef();
    this.arrowRef = React.createRef();
  }

  componentDidMount() {
    this.location = window.location.pathname;
    this.setState({
      loaded: true
    });
  }

  renderLinks() {
    if (this.location) {
      return (
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          width={"260px"}
          onStateChange={state => {
            if (state.isOpen) {
              document.querySelector(".bm-burger-button").style.display =
                "none";
            } else {
              document.querySelector(".bm-burger-button").style.display =
                "block";
            }
          }}
        >
          <Link to="/" className="menu-item">
            Home
          </Link>
          {this.location === "/" ? (
            <AnchorLink
              smooth={true}
              duration={500}
              to="section-2"
              className="menu-item"
            >
              Events
            </AnchorLink>
          ) : (
            <Link to="/#section-2" className="menu-item">
              Events
            </Link>
          )}
          <Link to="/register" className="menu-item">
            Register
          </Link>
          <div
            className="menu-item sub-menu-trigger"
            onClick={() => {
              this.showSub = !this.showSub;

              if (this.showSub) {
                this.aboutListRef.current.style.height = "200px";
                this.arrowRef.current.style.transform = "rotate(180deg)";
              } else {
                this.aboutListRef.current.style.height = "0";
                this.arrowRef.current.style.transform = "rotate(0deg)";
              }
            }}
          >
            <i
              className="fas fa-angle-down"
              style={{ marginRight: "1em" }}
              ref={this.arrowRef}
            />
            About
          </div>
          <div
            className="sub-menu-list"
            ref={this.aboutListRef}
            style={{ height: "0" }}
          >
            <Link to="/about" className="sub-menu bm-item">
              About Reflexons
            </Link>
            <Link to="/gallery" className="sub-menu bm-item">
              Gallery
            </Link>
            <Link to="/team" className="sub-menu bm-item">
              Team
            </Link>
          </div>
          <AnchorLink
            to="contact-us"
            smooth={true}
            duration={500}
            className="menu-item"
          >
            Contact
          </AnchorLink>
          {this.location === "/" ? (
            <AnchorLink
              smooth={true}
              duration={500}
              to="section-4"
              className="menu-item"
            >
              Location
            </AnchorLink>
          ) : (
            <Link to="/#section-4" className="menu-item">
              Location
            </Link>
          )}
          <AnchorLink
            smooth={true}
            duration={500}
            to="payment"
            className="menu-item"
          >
            Payment
          </AnchorLink>
        </Menu>
      );
    }
  }

  render() {
    return <>{this.state.loaded ? this.renderLinks() : null}</>;
  }
}

export default Header;
