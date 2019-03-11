import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./sponsors-section.scss";

const Sponsors = props => {
  return (
    <section
      className="default-section"
      id="section-3"
      style={props.backgroundStyle}
    >
      <h1 className="section-heading sponsors">Sponsors</h1>
      <StaticQuery
        query={graphql`
          query {
            allFile(
              filter: {
                extension: { regex: "/(jpg)|(jpeg)|(png)/" }
                relativeDirectory: { eq: "sponsors" }
              }
            ) {
              edges {
                node {
                  id
                  name
                  childImageSharp {
                    fluid(maxWidth: 1280) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="sponsor-blurbs">
              {data.allFile.edges.map(({ node }) => {
                return (
                  <div className="sponsor" key={node.id}>
                    <Img fluid={node.childImageSharp.fluid} id={node.id} />
                    {node.name}
                  </div>
                );
              })}
            </div>
          );
        }}
      />
    </section>
  );
};

export default Sponsors;
