import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./404.scss";

const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <SEO title="404: Not found" />
      <div className="poopy-browser">
        <div class="close" />
        <div className="minimize" />
        <div className="maximize" />
        <div className="address-bar" />
        <div className="x" />
      </div>
      <div className="title-text">Sorry, but we're out of content</div>
    </div>
  </Layout>
);

export default NotFoundPage;
