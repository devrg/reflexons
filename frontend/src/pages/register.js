import React, { Component } from "react";
import { Link } from "gatsby";
import firebase from "../components/config/Firebase";
import "firebase/database";

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
      teamSize: "",
      teammembers: "",
      event: "",
      teamPreference: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state !== null)
      this.setState({ event: this.props.location.state.event });

    if (this.props.location.state !== null) {
      this.maxTeamSize = this.props.location.state.maxTeam;

      if (this.props.location.state.maxTeam === "Solo, Duo, Squad") {
        this.maxTeamSize = 4;
      } else if (this.props.location.state.maxTeam === "1 bot per team") {
        this.maxTeamSize = 5;
      } else {
        this.maxTeamSize = this.props.location.state.maxTeam;
      }

      console.log("team size: " + this.props.location.state.maxTeam);
    }

    this.register = firebase.database().ref("registrations");
  }

  displaySuccess(message) {
    const successContainer = document.querySelector(".success-msg");
    successContainer.innerHTML = message;
    successContainer.style.height = "auto";
    successContainer.style.display = "block";
    setTimeout(() => {
      successContainer.style.height = "0";
      successContainer.style.display = "none";
    }, 3000);
  }

  displayError(message) {
    const errorContainer = document.querySelector(".error-msg");
    errorContainer.innerHTML = message;
    errorContainer.style.height = "auto";
    errorContainer.style.display = "block";
    setTimeout(() => {
      errorContainer.style.height = "0";
      errorContainer.style.display = "none";
    }, 3000);
  }

  verify(fields) {
    // name:
    if (fields.name === "") {
      this.displayError("Enter your name");
      return false;
    }

    // institution:
    if (fields.institution === "") {
      this.displayError("Enter your institution's name");
      return false;
    }

    // stream:
    if (fields.stream === "") {
      this.displayError("Enter your field's name");
      return false;
    }

    // course:
    if (this.state.event !== "Code Beta" && fields.course === "") {
      this.displayError("Enter your course name");
      return false;
    }

    // year of study:
    if (fields.year === "") {
      this.displayError("Enter the year of studies at your institution");
      return false;
    } else {
      if (this.state.event === "Code Beta") {
        if (
          !(
            fields.year.toLowerCase() === "first year" ||
            fields.year.toLowerCase() === "1st year" ||
            /^([1-9]|1[0-2])$/.test(fields.year)
          )
        ) {
          this.displayError(
            "Enter 'first year' for 1st year of college, or simply a number to denote that class"
          );
          return false;
        }
      } else {
        if (isNaN(fields.year)) {
          this.displayError("Enter a valid year of study (between 1 and 5)");
          return false;
        } else if (!/[1-5]/.test(fields.year)) {
          this.displayError("Years of studying should be between 1 and 5");
          return false;
        }
      }
    }

    // phone number:
    if (fields.phone === "") {
      this.displayError("Enter a phone number (for contacting you)");
      return false;
    } else if (fields.phone.length !== 10) {
      this.displayError("Enter a 10 digit phone number");
      return false;
    } else if (!/^\d+$/.test(fields.phone)) {
      this.displayError("Enter a valid phone number");
      return false;
    }

    // email id:
    if (fields.email === "") {
      this.displayError("Enter an email address (for contacting you)");
      return false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) {
      this.displayError("Enter a valid email address");
      return false;
    }

    // team size:
    if (this.maxTeamProcess()) {
      if (fields.teamSize === "") {
        this.displayError("Enter your team's size");
        return false;
      } else if (isNaN(fields.teamSize)) {
        this.displayError(
          "Enter your team's size in digits (between 1 and " +
            this.maxTeamSize +
            ")"
        );
        return false;
      } else if (
        parseInt(fields.teamSize) < 1 ||
        parseInt(fields.teamSize) > this.maxTeamSize
      ) {
        this.displayError(
          "Your team's size should be between 1 and " + this.maxTeamSize
        );
        return false;
      }
    }

    let commaCount =
      (fields.teammembers.match(/,/g) || []).length +
      1 -
      ((fields.teammembers.match(/^,/) || []).length +
        (fields.teammembers.match(/,$/) || []).length);

    if (this.maxTeamProcess() && fields.teammembers === "") {
      this.displayError("Enter your team members' names");
      return false;
    } else if (this.maxTeamProcess() && commaCount != fields.teamSize) {
      this.displayError(
        "Enter " +
          fields.teamSize +
          " names (separate each name with a COMMA (,)"
      );
      return false;
    }

    commaCount =
      (fields.teamPreference.match(/,/g) || []).length +
      1 -
      ((fields.teamPreference.match(/^,/) || []).length +
        (fields.teamPreference.match(/,$/) || []).length);

    if (fields.event === "Fifa 19") {
      if (fields.teamPreference === "") {
        this.displayError("Enter 3 team preferences (comma separated)");
        return false;
      } else if (commaCount != 3) {
        this.displayError(
          "Enter exactly 3 team preferences (separated by commas)"
        );
        return false;
      }
    }

    // valid:
    return true;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };

    if (this.verify(data)) {
      // var presenceRef = firebase.database().ref("disconnectmessage");
      // presenceRef.onDisconnect().set("I disconnected!");

      // let status = firebase.database().ref(".info/connected");
      // status.on("value", function(snap) {
      //   if (snap.val() === true) {
      //     console.log("connected");
      //   } else {
      //     console.log("not connected");
      //   }
      // });

      const dbConn = firebase.database().ref("registrations");
      const newReg = dbConn.push();
      if (
        !(newReg.key === null || newReg.key === "" || newReg.key === undefined)
      ) {
        newReg.set({
          name: data.name,
          institution: data.institution,
          stream: data.stream,
          course: data.course,
          year: data.year,
          phone: data.phone,
          email: data.email,
          event: data.event,
          teamSize: data.teamSize,
          teamMembers: data.teammembers,
          teamPreference: data.teamPreference
        });

        this.setState({
          name: "",
          institution: "",
          stream: "",
          course: "",
          year: "",
          phone: "",
          email: "",
          teamSize: "",
          teammembers: "",
          teamPreference: ""
        });

        this.displaySuccess(
          "Thank you for registering! We will get back to you soon."
        );

        setTimeout(() => {
          window.location = "/";
        }, 3000);
      } else {
        this.displayError(
          "Sorry, your entry could not be save (our servers couldn't be reached)"
        );
      }
    }
  }

  maxTeamProcess() {
    return (
      this.maxTeamSize > 1 ||
      this.maxTeamSize === "Solo, Duo, Squad" ||
      this.maxTeamSize === "1 bot per team"
    );
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
        this.setState({ teamSize: event.target.value });
        break;
      case "teammember":
        this.setState({ teammembers: event.target.value });
        break;
      case "teamPreference":
        this.setState({ teamPreference: event.target.value });
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
            First, select an <Link to="/#section-2">event</Link> from the
            homepage
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
              />
              <span className="focus-border" />
              <input
                className="input-field"
                type="text"
                name="institution"
                placeholder="Name Of Institution"
                onChange={this.handleChange}
                value={this.state.institution}
              />
              <input
                className="input-field"
                type="text"
                name="stream"
                placeholder="Enter Your Stream"
                onChange={this.handleChange}
                value={this.state.stream}
              />
              {data.slug !== "codebeta" ? (
                <input
                  className="input-field"
                  type="text"
                  name="course"
                  placeholder="Enter Your Course"
                  onChange={this.handleChange}
                  value={this.state.course}
                />
              ) : (
                ""
              )}
              <input
                className="input-field"
                type="text"
                name="year"
                placeholder={
                  data.slug !== "codebeta"
                    ? "Which year (of studies) are you in? [example: 2nd year of college]"
                    : "First year/Class (school)"
                }
                onChange={this.handleChange}
                value={this.state.year}
              />
              <input
                className="input-field"
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                onChange={this.handleChange}
                value={this.state.phone}
              />
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Enter Your Email ID"
                onChange={this.handleChange}
                value={this.state.email}
              />
              {this.maxTeamProcess() ? (
                <input
                  className="input-field"
                  name="teamsize"
                  placeholder="# of Team Members"
                  onChange={this.handleChange}
                  value={this.state.teamSize}
                />
              ) : (
                ""
              )}
              {this.maxTeamProcess() ? (
                <input
                  className="input-field"
                  name="teammember"
                  placeholder="Enter Names Of Team Members (comma separated)"
                  onChange={this.handleChange}
                  value={this.state.teammembers}
                />
              ) : (
                ""
              )}
              {data.slug === "fifa" ? (
                <input
                  className="input-field"
                  name="teamPreference"
                  placeholder="Enter 3 team names (separated by commas)"
                  onChange={this.handleChange}
                  value={this.state.teamPreference}
                />
              ) : (
                ""
              )}
              <div
                className="error-msg"
                style={{ height: 0, display: "none" }}
              />
              <div
                className="success-msg"
                style={{ height: 0, display: "none" }}
              />
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
