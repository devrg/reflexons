import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import ParticlesBackground from "./particles";
import "./layout.scss";

import("bootstrap/dist/css/bootstrap.min.css");
import("bootstrap/dist/js/bootstrap");

const Layout = ({ children }) => (
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
          <main id="page-wrap">{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
