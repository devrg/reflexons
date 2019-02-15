import React, { Component } from "react";
import { Link as AnchorLink } from "react-scroll";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import TextScramble from "../text-scrambler";

import "./landing-section.scss";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.phrases = [
      "Hello world",
      "Welcome to the 35th Reflexon",
      "Annual reunion and tech fest",
      "Department of Computer Science",
      "University of Calcutta",
      "11th to 17th March"
    ];

    this.textScrambler = React.createRef();
  }

  componentDidMount() {
    // text scrambler setup:
    const el = this.textScrambler.current;
    const textEffect = new TextScramble(el);

    let counter = 0;

    const next = () => {
      textEffect.setText(this.phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % this.phrases.length;
    };

    next();
  }

  render() {
    return (
      <section
        className="default-section section-1"
        id="section-1"
        style={this.props.backgroundStyle}
      >
        <StaticQuery
          query={graphql`
            query logo {
              placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => {
            return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
          }}
        />
        <div className="text-scrambler" ref={this.textScrambler} />
        <AnchorLink to="section-2" smooth={true} duration={500}>
          <i className="fas fa-caret-down" />
        </AnchorLink>
      </section>
    );
  }
}

export default Landing;