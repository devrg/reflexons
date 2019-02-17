import React, { Component } from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";

import "./top-bar.scss";

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };

    this.location = "/";
  }

  componentDidMount() {
    this.location = window.location.pathname;
    this.setState({
      loaded: true
    });
  }

  renderBar() {
    if (this.location) {
      if (this.location !== "/") {
        return (
          <div className="top-bar">
            <Link to="/">
              <div className="logo-container">
                <span className="logo-text">Reflexons 2019</span>
                <StaticQuery
                  query={graphql`
                    query smallLogo {
                      placeholderImage: file(relativePath: { eq: "logo.png" }) {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `}
                  render={data => (
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  )}
                />
              </div>
            </Link>
            <div className="social-links" />
          </div>
        );
      }
    }
  }

  render() {
    return <>{this.state.loaded ? this.renderBar() : null}</>;
  }
}

export default TopBar;
