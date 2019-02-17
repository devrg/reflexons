import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      institution: "",
      stream: "",
      course: "",
      year: "",
      phone: "",
      email: "",
      teamsize: "",
      teammembers: "",
      event: this.props.location.state.slug
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  verify(fields) {
    return true;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    let res = null;
    let status = false;
    console.log(this.state);
    if (this.verify(this.state)) {
      try {
        res = await axios.post(
          "https://formsubmitreflexon.000webhostapp.com/server.php",
          {
            name: data.name,
            insti: data.institution,
            stream: data.stream,
            cor: data.course,
            year: data.year,
            phno: data.phone,
            email: data.email,
            events: data.event,
            teamsize: data.teamsize,
            teammember: data.teammembers
          }
        );
      } catch (error) {
        const errorContainer = document.querySelector(".error-msg");
        errorContainer.innerHTML = "Sorry, your entry could not be submitted";
        errorContainer.style.height = "auto";
        errorContainer.style.padding = "1rem";
        setTimeout(() => {
          errorContainer.style.height = "0";
          errorContainer.style.padding = "0";
        }, 3000);
        console.log(error);
      }
      console.log(res);
    } else {
      const errorContainer = document.querySelector(".error-msg");
      errorContainer.style.height = "auto";
      errorContainer.style.padding = "1rem";
      setTimeout(() => {
        errorContainer.style.height = "0";
        errorContainer.style.padding = "0";
      }, 3000);
    }
  }

  handleChange(event) {
    let key = event.target.name;
    switch (key) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "institution":
        this.setState({ institution: event.target.value });
        break;
      case "stream":
        this.setState({ stream: event.target.value });
        break;
      case "course":
        this.setState({ course: event.target.value });
        break;
      case "year":
        this.setState({ year: event.target.value });
        break;
      case "phone":
        this.setState({ phone: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "teamsize":
        this.setState({ teamsize: event.target.value });
        break;
      case "teammember":
        this.setState({ teammembers: event.target.value });
        break;
      default:
        console.log("Error: " + event);
    }
  }

  render() {
    const data = this.props.location.state;
    if (
      data === null ||
      data === undefined ||
      data.event === null ||
      data.event === undefined ||
      data.event === ""
    )
      return (
        <Layout>
          <SEO title="Event Registration" />
          <div className="event-not-found">
            First, select an event from the homepage
            <span>Tip: open the menu and tap on 'Events'</span>
          </div>
        </Layout>
      );
    else {
      return (
        <Layout>
          <SEO title={data.event + " Registration"} />
          <div className="register-form">
            <form onSubmit={this.handleSubmit}>
              <div className="page-heading">
                {data.event || ""} Registration
              </div>
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
              <span className="focus-border" />
              <input
                className="input-field"
                type="text"
                name="institution"
                placeholder="Name Of Institution"
                onChange={this.handleChange}
                value={this.state.institution}
                required
              />
              <input
                className="input-field"
                type="text"
                name="stream"
                placeholder="Enter Your Stream"
                onChange={this.handleChange}
                value={this.state.stream}
                required
              />
              <input
                className="input-field"
                type="text"
                name="course"
                placeholder="Enter Your Course"
                onChange={this.handleChange}
                value={this.state.course}
                required
              />
              <input
                className="input-field"
                type="number"
                name="year"
                placeholder="Enter Year Of Study"
                onChange={this.handleChange}
                value={this.state.year}
                required
              />
              <input
                className="input-field"
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                onChange={this.handleChange}
                value={this.state.phone}
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Enter Your Email ID"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <input
                className="input-field"
                type="number"
                max="4"
                min="1"
                name="teamsize"
                placeholder="# of Team Members"
                onChange={this.handleChange}
                value={this.state.teamsize}
                required
              />
              <input
                className="input-field"
                type="text"
                name="teammember"
                placeholder="Enter Name Of Team Members"
                onChange={this.handleChange}
                value={this.state.teammembers}
                required
              />
              <div className="error-msg" style={{ height: 0, padding: "0" }}>
                Please check all the fields before submitting
              </div>
              <input
                className="input-field submit-button btn btn-lg btn-outline-success"
                type="submit"
              />
            </form>
          </div>
        </Layout>
      );
    }
  }
}

export default Register;
