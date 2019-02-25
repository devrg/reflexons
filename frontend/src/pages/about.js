import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import CU from "../images/cu-class.jpg";

import "./about.scss";

const About = () => (
  <div
    className="about-page"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.68))`
    }}
  >
    <SEO title="About" />
    <Layout>
      <div className="about-text">
        <div className="heading-text">About Reflexons 2019</div>
        <iframe
          title="Reflexons 2019 Promo video"
          src="https://player.vimeo.com/video/318777960"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          className="video-player"
        />
        <p>
          The department of computer science and engineering of Calcutta
          University puts forth their annual technological fest cum alumni
          reunion for the 35th time from 11th- 17th March! Several exciting
          events are panned out over the week to make it an eventful ride like
          code combat,treasure hunt,latest computer and mobile games, debate,
          quiz, photography, indoor &amp; outdoor sports, seminars held by
          eminent professors and cultural programmes with celebrity guest
          performances attended by our Alma-mater from all across the globe,
          eminent PhD scholars, professors and students from various reputed
          institutions in and around the city and IT professionals from the
          major corporate giants, ' Reflexons ' is truly an annual fete for this
          reputed university where its exposure is covered by theprint and
          audiovisual media. We would be delighted and honored if you would
          participate with us to make this grand fest a success!
        </p>
        <p>
          Acharya Prafulla Chandra Ray Shiksha Prangan was setup in the year
          2013.From the year 2015 B.Tech students from 3 branches namely CSE,
          OOE and IT study here. From the year 2015 Reflexons was shifted{" "}
          <Link to="/#section-4">here</Link> from the Rajabazar Campus.
        </p>
      </div>
    </Layout>
  </div>
);

export default About;
