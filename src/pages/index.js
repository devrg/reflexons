import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DotNavigate from "../components/dot-navigate";

import "./index.scss";

import LandingSection from "./sections/landing-section";
import EventsSection from "./sections/events-section";
import ScheduleSection from "./sections/schedule-section";

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
          elements={["section-1", "section-2", "section-3", "section-4"]}
        />

        <div className="social-media">
          <i className="fab fa-facebook-f" style={{ padding: "0.3em 0.5em" }} />
          <i className="fab fa-instagram" />
          <i className="fas fa-at" />
        </div>

        <div ref={indexLayout}>
          <LandingSection />
          <EventsSection />
          <ScheduleSection />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
