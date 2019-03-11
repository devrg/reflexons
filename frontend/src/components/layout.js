import React from "react";
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
            href="https://fonts.googleapis.com/css?family=Josefin+Sans"
            rel="stylesheet"
          />
        </Helmet>

        <div className="main-content" id="outer-container">
          <Header />
          <ParticlesBackground />
          <main id="page-wrap">
            <TopBar />
            {children}
            <div className="collapse" id="collapseExample">
              <div
                className="card card-body"
                style={{
                  backgroundColor: "#ffffffa6",
                  fontSize: "1.1em",
                  padding: "1em"
                }}
              >
                <div className="container">
                  <ul>
                    <li>8902498634@upi</li>
                    <li>
                      Bank account details:
                      <ol>
                        <li>
                          Account name: ANNL GETTOGETHER COM CSCUNI SANJIT SATUA
                        </li>
                        <li>
                          Bank name with Branch name: SBI Manicktala Branch
                        </li>
                        <li>Account number: 11152795149</li>
                        <li>IFSC no: SBIN0001715</li>
                        <li>MICR 010050</li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
