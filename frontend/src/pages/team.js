import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import TeamMembers from "../assets/data/TeamMembers.json";

import "./team.scss";

const Team = props => {
  let members = [...TeamMembers];

  // Add image to each team member:
  members.forEach((member, index, members) => {
    let node = props.data.allFile.edges.find(
      ({ node }) => node.name === member.id
    );
    if (node !== undefined)
      members[index]["image"] = node.node.childImageSharp.fluid;
  });

  console.log(members);

  return (
    <Layout>
      <SEO
        title="Reflexons 2019 Team"
        keywords={[
          "reflexons 2019",
          "university of calcutta",
          "annual fest",
          "computer science"
        ]}
      />
      <div className="Team">
        <h1 className="page-heading">Organizing Team</h1>
        <div className="team">
          {members.map(member => {
            return (
              <div key={member.name} className="team-member">
                <div className="team-member-image">
                  <Img fluid={member.image} />
                </div>
                <div className="team-member-name">{member.name}</div>
                {/* <div className="team-member-role">{member.role}</div> */}
                <div className="contact-details">
                  <div className="contact-number">
                    <a href={"tel:" + member.phone}>{member.phone}</a>
                  </div>
                  <div className="email">
                    <a href={"mailto:" + member.email}>{member.email}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Team;

export const GalleryImages = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        relativeDirectory: { eq: "team" }
      }
    ) {
      edges {
        node {
          id
          name
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
