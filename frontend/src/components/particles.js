import React from "react";

import "./particles.scss";
import CU from "../images/logo.png";

const Particles = () => {
  return (
    <>
      <div
        className="page-bg"
        style={{ background: `#000 url(${CU}) no-repeat center center` }}
      />
      <div className="animation-wrapper">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
      </div>
    </>
  );
}

export default Particles;
