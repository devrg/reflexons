import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.scss";
import TextScramble from "../assets/text-scrambler";

import CU from "../images/cu-top.jpg";

class IndexPage extends Component {
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

    this.scrollPos = 0;
    this.sections = [];
    this.currentSection = 0;

    this.textScrambler = React.createRef();
    this.typewriter = React.createRef();
    this.indexLayout = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
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

    this.scrollPos = 0;
    this.sections = this.indexLayout.current.children;

    window.addEventListener("scroll", this.handleScroll);
  }

  scrollWindow(pos) {
    console.log("y: " + pos);
    window.scroll(0, pos);
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {
    let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  }

  disableScroll() {
    if (window.addEventListener)
      // older FF
      window.addEventListener("DOMMouseScroll", this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  }

  enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  handleScroll(event) {
    this.disableScroll();

    if (document.body.getBoundingClientRect().top > this.scrollPos) {
      console.log("scrolling up");

      // this.currentSection =
      //   this.currentSection > 0 ? this.currentSection - 1 : this.currentSection;

      // console.log(this.currentSection);

      // this.scrollWindow(
      //   this.sections[this.currentSection].getBoundingClientRect().y
      // );
    } else {
      console.log("scrolling down");

      // this.currentSection =
      //   this.currentSection < this.sections.length - 1
      //     ? this.currentSection + 1
      //     : this.currentSection;

      // console.log(this.currentSection);

      // this.scrollWindow(
      //   this.sections[this.currentSection].getBoundingClientRect().y
      // );
    }

    this.scrollPos = document.body.getBoundingClientRect().top;

    // this.lastScrollPos = scrollPos <= 0 ? 0 : scrollPos; // for negative scrolling (just in case)

    setTimeout(() => {
      this.enableScroll();
    }, 500);
  }

  render() {
    return (
      <Layout>
        <div ref={this.indexLayout}>
          <section
            className="default-section"
            style={{
              flexDirection: "column"
            }}
          >
            <div className="text-scrambler" ref={this.textScrambler} />
            <i className="fas fa-caret-down" />
          </section>

          <section className="default-section">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere voluptatum obcaecati a rerum minima, porro magni aperiam
            illum corrupti quasi repellendus perferendis vero fugiat voluptate
            excepturi nesciunt eveniet soluta!
          </section>

          <section className="default-section">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere voluptatum obcaecati a rerum minima, porro magni aperiam
            illum corrupti quasi repellendus perferendis vero fugiat voluptate
            excepturi nesciunt eveniet soluta!
          </section>

          <section className="default-section">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere voluptatum obcaecati a rerum minima, porro magni aperiam
            illum corrupti quasi repellendus perferendis vero fugiat voluptate
            excepturi nesciunt eveniet soluta!
          </section>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
