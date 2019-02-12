import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import './index.scss'

const IndexPage = () => (
  <Layout>
    <div className="about-us">
      {/* <h1 className="text-center" id="aboutus">About Us</h1> */}
      <h3 className="text-center">
        Reflexons is the Annual reunion and techfest of the Department of Computer Science And Engineering, University Of Calcutta.
        <br />We believe that the newness of our college cannot shadow our technical expertise.
        <br />So, we organise Reflexons every year for students from all over Kolkata to participate, enjoy and enrich yourselves by stepping out of your comfort zones into the vast array of challenges this year.
        <br />We come with new techincal as well as cultural events each with a new flavour of challenge this time along
            with exciting prizes.
        <br />CUCSE cordially invites each and every one of you to the Reflexons 2019, to test your mettle and compete
              with the finest all over West Bengal
      </h3>
    </div>
  </Layout>
)

export default IndexPage
