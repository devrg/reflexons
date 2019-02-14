import React from "react";
import { Link } from "react-scroll";

import './dot-navigate.scss';

const DotNavigate = ({ elements }) => {
  console.log(elements);
  const list = elements.map((link, index) => (
    <li key={link + index}>
      <Link
        to={link}
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
      >
        {link}
      </Link>
    </li>
  ));
  return (
    <div className="dot-navigate">
      <ul>{list}</ul>
    </div>
  );
};

export default DotNavigate;
