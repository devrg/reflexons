import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./team.scss";

const Team = props => {
  let members = [
    {
      id: "souvik",
      name: "Souvik Patra",
      role: "General Secretary",
      phone: "8250149961",
      email: "souvikpatra244@gmail.com",
      image: {}
    },
    {
      id: "sourjya",
      name: "Souvik Mukherjee",
      role: "Treasurer",
      phone: "9874052864",
      email: "sourjyar7@gmail.com",
      image: {}
    },
    {
      id: "suparno",
      name: "Suparno Karmakar",
      role: "Assistant General Secretary",
      phone: "9434538125",
      email: "ssuparno1998@gmail.com",
      image: {}
    },
    {
      id: "suheeta",
      name: "Suheeta Samanta",
      role: "Member",
      phone: "9088494804",
      email: "suheetasamanta@gmail.com",
      image: {}
    },
    {
      id: "narco",
      name: "Sumartya Sengupta",
      role: "Member",
      phone: "8335984508",
      email: "sumartyasengupta@gmail.com",
      image: {}
    },
    {
      id: "nistha",
      name: "Nistha Gupta",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "subhajit",
      name: "Subhajit Gupta",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "arkadeep",
      name: "Arkadeep Baksi",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "sona",
      name: "Sona Shaw",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "purbasha",
      name: "Pursbasha Chowdhury",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "tripti",
      name: "Tripti Guha",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "shankhanil",
      name: "Shankhanil Ghosh",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "ashita",
      name: "Ashita Gupta",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "shubham",
      name: "Shubham Das",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    },
    {
      id: "nishant",
      name: "Nishant Kumar",
      role: "Member",
      phone: "",
      email: "",
      image: {}
    }
  ];

  members.forEach((member, index, members) => {
    let node = props.data.allFile.edges.find(
      ({ node }) => node.name === member.id
    );
    if (node !== undefined)
      members[index].image = node.node.childImageSharp.fluid;
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
                <div className="team-member-role">{member.role}</div>
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
