import React, { Component } from "react";
import Img from "gatsby-image";
import Slider from "react-slick";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SliderArrow from "../components/slider-arrows";

import "./gallery.scss";

import { graphql } from "gatsby";

class Gallery extends Component {
  componentDidMount() {
    const data = this.props.data;

    data.allFile.edges.forEach(({ node }) => {
      const url = "url('" + node.childImageSharp.fluid.src + "')";

      document.getElementById(
        `${node.id}`
      ).firstChild.firstChild.style.backgroundImage = url;

      document.getElementById(`${node.id}`).firstChild.firstChild.style.filter =
        "blur(20px) brightness(50%)";
    });
  }

  render() {
    const data = this.props.data;

    const settings = {
      accessibility: false,
      arrows: true,
      adaptiveHeight: true,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SliderArrow to="prev" icon="fas fa-angle-left" />,
      nextArrow: <SliderArrow to="next" icon="fas fa-angle-right" />
    };

    return (
      <>
        <SEO
          title="Gallery"
          keywords={[
            "reflexons",
            "calcutta university",
            "coding competition",
            "games",
						"counter strike",
						"gallery"
          ]}
        />
        <Layout>
          <div className="Gallery">
            <Slider {...settings}>
              {data.allFile.edges.map(({ node }) => {
                return (
                  <div key={node.id} id={node.id}>
                    <Img
                      fluid={node.childImageSharp.fluid}
                      style={{ background: `black` }}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Layout>
      </>
    );
  }
}

export default Gallery;

export const GalleryImages = graphql`
  query {
    allFile(
      filter: { extension: { eq: "jpg" }, relativeDirectory: { eq: "gallery" } }
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
