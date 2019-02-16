import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class Register extends Component {
  render() {
    return (
      <Layout>
        <form className="register-form">
          <input
            class="inp"
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
          <input
            class="inp"
            type="text"
            name="insti"
            placeholder="Name Of Institution"
            required
          />
          <input
            class="inp"
            type="text"
            name="stream"
            placeholder="Enter Your Stream"
            required
          />
          <input
            class="inp"
            type="text"
            name="cor"
            placeholder="Enter Your Course"
            required
          />
          <input
            class="inp"
            type="number"
            name="year"
            max="4"
            min="1"
            placeholder="Enter Year Of Study"
            required
          />
          <input
            class="inp"
            type="tel"
            name="phno"
            placeholder="Enter Your Phone Number"
            required
          />
          <input
            class="inp"
            type="email"
            name="email"
            placeholder="Enter Your Email ID"
            required
          />
          <select class="inp" name="events" required>
            <option value="">Select Events</option>
            <option value="codecombat">Code Combat</option>
            <option value="codebeta">Code Beta</option>
            <option value="bughunt">Bug Hunt</option>
            <option value="quiz">Quiz</option>
            <option value="debate">Debate</option>
            <option value="photography">Photogrpahy</option>
            <option value="pubg">PUBG</option>
            <option value="csgo">Counter Strike : GO</option>
            <option value="line">Follow The Line</option>
          </select>
          <input
            class="inp"
            type="number"
            max="4"
            min="1"
            name="teamsize"
            placeholder="# of Team Members"
            required
          />
          <input
            class="inp"
            type="text"
            name="teammember"
            placeholder="Enter Name Of Team Members"
            required
          />
          <input class="inp" type="submit" />
        </form>
      </Layout>
    );
  }
}

export default Register;
