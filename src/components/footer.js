import React from "react";

import "./footer.scss";

const Footer = () => (
  <footer>
    <div className="pages-list">
      <div className="list-head">Reflexon Contents</div>
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>Schedule</li>
        <li>Gallery</li>
        <li>Sponsors</li>
      </ul>
    </div>
    <div className="contact-us">
      <div className="list-head">Contact Us</div>
      <ul>
        <li>(+91)9434538125</li>
        <li>(+91)8250149961</li>
        <li>(+91)9874052864</li>
        <li>reflexons.2019@gmail.com</li>
      </ul>
    </div>
    <div className="info">
      <div className="list-head">© Reflexons {new Date().getFullYear()}</div>
      <br />
      Department of Computer Science and Engineering,
      <br />
      University of Calcutta, Tech Campus
      <br />
      Designed by <a href="https://www.nparchments.com">Nabhoneel Majumdar</a>
    </div>
  </footer>
);

export default Footer;
