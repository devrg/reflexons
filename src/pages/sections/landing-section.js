import React, { Component } from "react";
import { Link as AnchorLink } from "react-scroll";

import TextScramble from "../../assets/text-scrambler";

import "./landing-section.scss";

class Landing extends Component {
  constructor(props) {
		super(props);

    this.state = {
      phrases: [
        "Hello world",
        "Welcome to the 35th Reflexon",
        "The annual reunion and tech fest",
        "Of the Department of Computer Science and Engineering",
        "At the University of Calcutta",
        "11th to 17th March"
      ]
    };

    this.textScrambler = React.createRef();
  }

  componentDidMount() {

		// text scrambler setup:
    const el = this.textScrambler.current;
    const textEffect = new TextScramble(el);

    let counter = 0;

    const next = () => {
      textEffect.setText(this.state.phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % this.state.phrases.length;
    };

    next();
  }

  render() {
    return (
      <section className="default-section section-1" id="section-1">
        <div className="text-scrambler" ref={this.textScrambler} />
        <AnchorLink to="section-2" smooth={true} duration={500}>
          <i className="fas fa-caret-down" />
        </AnchorLink>
      </section>
    );
  }
}

export default Landing;
