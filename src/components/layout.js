import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import TopBar from "./top-bar";
import ParticlesBackground from "./particles";
import "./layout.scss";

import("bootstrap/dist/css/bootstrap.min.css");
import("bootstrap/dist/js/bootstrap");

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.setState({ ready: true });
      }, 1000);
      console.log("window ready!");
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Helmet>
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                  integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                  crossorigin="anonymous"
                />
                <link
                  href="https://fonts.googleapis.com/css?family=Roboto+Mono|Luckiest+Guy|Josefin+Sans"
                  rel="stylesheet"
                />
              </Helmet>

              <div className="main-content" id="outer-container">
                <ParticlesBackground />
                <Header />
                <main id="page-wrap">
                  <TopBar />
                  {this.props.children}
                </main>
                <Footer />
              </div>
            </>
          )}
        />
      );
    } else {
      return (
        <div className="loader">
          <svg viewBox="-2000 -1000 4000 2000">
            <path
              id="inf"
              d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"
            />
            <use
              href="#inf"
              strokeDasharray="1570 5143"
              strokeDashoffset="6713px"
            />
          </svg>
        </div>
      );
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
