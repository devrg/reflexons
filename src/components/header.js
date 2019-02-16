import { Link } from "gatsby";
import { Link as AnchorLink } from "react-scroll";
import React, { Component } from "react";

import { push as Menu } from "react-burger-menu";

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
      if (this.location === "/") {
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
            <AnchorLink to="section-2" className="menu-item">
              Events
            </AnchorLink>
            <AnchorLink to="section-3" className="menu-item">
              Schedule
            </AnchorLink>
            <div
              className="menu-item sub-menu-trigger"
              onClick={() => {
                this.showSub = !this.showSub;

                if (this.showSub) {
                  this.aboutListRef.current.style.height = "110px";
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
              <Link to="/gallery" className="sub-menu bm-item">
                Gallery
              </Link>
              <Link to="/team" className="sub-menu bm-item">
                Team
              </Link>
            </div>
            <Link to="/sponsors" className="menu-item">
              Sponsors
            </Link>
            <Link to="/contact" className="menu-item">
              Contact
            </Link>
            <AnchorLink to="section-4" className="menu-item">
              Location
            </AnchorLink>
          </Menu>
        );
      } else {
        return (
          <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
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
            <Link to="/#section-2" className="menu-item">
              Events
            </Link>
            <Link to="/#section-3" className="menu-item">
              Schedule
            </Link>
            <div
              className="menu-item sub-menu-trigger"
              onClick={() => {
                this.showSub = !this.showSub;

                if (this.showSub) {
                  this.aboutListRef.current.style.height = "110px";
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
              <Link to="/gallery" className="sub-menu bm-item">
                Gallery
              </Link>
              <Link to="/team" className="sub-menu bm-item">
                Team
              </Link>
            </div>
            <Link to="/sponsors" className="menu-item">
              Sponsors
            </Link>
            <Link to="/contact" className="menu-item">
              Contact
            </Link>
            <Link to="/#section-4" className="menu-item">
              Location
            </Link>
          </Menu>
        );
      }
    }
  }

  render() {
    return <>{this.state.loaded ? this.renderLinks() : null}</>;
  }
}

export default Header;
