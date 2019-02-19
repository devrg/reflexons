import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";

import "./footer.scss";

const Footer = () => (
  <footer>
    <div className="pages-list">
      <div className="list-head">Reflexon Contents</div>
      <ul>
        <li>
          <Link to="/" className="sky-blue-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/#section-2" className="sky-blue-link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="sky-blue-link">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about" className="sky-blue-link">
            About
          </Link>
        </li>
      </ul>
    </div>
    <div className="contact-us">
      <div className="list-head">Contact Us</div>
      <ul>
        <li>
          <a href="tel:+919434538125" className="sky-blue-link">
            (+91)9434538125
          </a>
        </li>
        <li>
          <a href="tel:+918250149961" className="sky-blue-link">
            (+91)8250149961
          </a>
        </li>
        <li>
          <a href="tel:+919874052864" className="sky-blue-link">
            (+91)9874052864
          </a>
        </li>
        <li>
          <a href="mailto:reflexons.2019@gmail.com" className="sky-blue-link">
            reflexons.2019@gmail.com
          </a>
        </li>
      </ul>
    </div>
    <div className="info">
      <div className="list-head">© Reflexons {new Date().getFullYear()}</div>
      <br />
      Department of Computer Science and Engineering,
      <br />
      <Link to="/#section-4" className="sky-blue-link">
        University of Calcutta, Tech Campus
      </Link>
      <br />
      Designed by{" "}
      <OutboundLink href="https://www.nparchments.com" className="sky-blue-link">
        Nabhoneel Majumdar
      </OutboundLink>
    </div>
  </footer>
);

export default Footer;
