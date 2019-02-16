import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// import "./404.scss";

const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <SEO title="404: Not found" />
      <div className="title-text">Not found</div>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
