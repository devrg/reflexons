import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DotNavigate from "../components/dot-navigate";

import "./index.scss";

import CU from "../images/cu-top.jpg";
import CUClass from '../images/cu-class.jpg';

import LandingSection from "../components/sections/landing-section";
import EventsSection from "../components/sections/events-section";
import LocationSection from "../components/sections/location-section";

const IndexPage = () => {
  const indexLayout = React.createRef();
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          "reflexons",
          "calcutta university",
          "coding competition",
          "games",
          "counter strike"
        ]}
      />
      <Layout>
        <DotNavigate
          elements={["section-1", "section-2", "section-4"]}
        />

        <div className="social-media">
          <i className="fab fa-facebook-f" style={{ padding: "0.3em 0.5em" }} />
          <i className="fab fa-instagram" />
          <i className="fas fa-at" />
        </div>

        <div ref={indexLayout}>
          <LandingSection backgroundStyle={{ background: `linear-gradient(180deg, #000000a5, #000000ff),url(${CUClass}) center background fixed` }} />
          <EventsSection backgroundStyle={{ background: "linear-gradient(180deg, #00000000 0%, #c1a16616 35%, #c1a16612 75%, #00000000 100%)" }} />          
          <LocationSection
            backgroundStyle={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.68)),url(${CU}) background fixed`
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
