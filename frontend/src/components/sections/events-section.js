import React, { Component } from "react";
import { OutboundLink } from "gatsby-plugin-gtag";

import EventDetails from "../../assets/data/EventDetails.json";

import csgoPDF from "../../assets/docs/csgo.pdf";
import fifaPDF from "../../assets/docs/fifa19.pdf";
import pubgPDF from "../../assets/docs/pubg.pdf";
import dotaPDF from "../../assets/docs/dota.pdf";

import "./events-section.scss";

import LightModal from "../lightweight-modal";

class Events extends Component {
  constructor(props) {
    super(props);

    // References for modals:
    this.codeCombatRef = React.createRef();
    this.codeBetaRef = React.createRef();
    this.bugHuntRef = React.createRef();
    this.quizRef = React.createRef();
    this.debateRef = React.createRef();
    this.photographyRef = React.createRef();
    this.pubgRef = React.createRef();
    this.csgoRef = React.createRef();
    this.lineRef = React.createRef();
    this.fifaRef = React.createRef();
    this.dotaRef = React.createRef();

    const PDFs = {
      pubg: pubgPDF,
      csgo: csgoPDF,
      fifa: fifaPDF,
      dota: dotaPDF
    };

    let eventDetailsArray = EventDetails.map(event => {
      return {
        slug: event.slug,
        modalHeading: event.modalHeading,
        eventType: event.eventType,
        fees: event.fees,
        maxTeam: event.maxTeam,
        languages: event.languages,
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            {/* Top Disclaimers: */}
            {event.details.disclaimer_S1.map((disclaimer, id) => (
              <div className="disclaimer" key={id}>
                {disclaimer}
              </div>
            ))}
            {/* Rules: */}
            <table className="table">
              <tbody>
                {event.details.rules.map((rule, id) => (
                  <tr key={id}>
                    <td className="serial-number">{rule.ruleID}</td>
                    <td className="detail">
                      {rule.rule === "<#NONE>" ? (
                        <OutboundLink
                          className="btn btn-warning"
                          style={{ color: "white !important" }}
                          href={PDFs[event.slug]}
                        >
                          Download Rules &amp; Regulations
                        </OutboundLink>
                      ) : (
                        rule.rule
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="disclaimer">
              {/* Bottom Disclaimers: */}
              {event.details.disclaimer_S2.map((disclaimer, id) => (
                <p style={{ textTransform: "uppercase" }} key={id}>
                  <strong>{disclaimer}</strong>
                </p>
              ))}
              {/* Contact people: */}
              <table>
                <tbody>
                  {event.details.contact.map((contact, id) => (
                    <tr key={id}>
                      <td className="event-coordinator">{contact.name}</td>
                      <td className="event-coordinator-contact">
                        {contact.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      };
    });

    // add React refs:
    eventDetailsArray[0]["modalRef"] = this.codeCombatRef;
    eventDetailsArray[1]["modalRef"] = this.codeBetaRef;
    eventDetailsArray[2]["modalRef"] = this.bugHuntRef;
    eventDetailsArray[3]["modalRef"] = this.quizRef;
    eventDetailsArray[4]["modalRef"] = this.debateRef;
    eventDetailsArray[5]["modalRef"] = this.photographyRef;
    eventDetailsArray[6]["modalRef"] = this.pubgRef;
    eventDetailsArray[7]["modalRef"] = this.csgoRef;
    eventDetailsArray[8]["modalRef"] = this.fifaRef;
    eventDetailsArray[9]["modalRef"] = this.dotaRef;

    this.eventDetails = eventDetailsArray;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (e.currentTarget.dataset.id) {
      case "code-combat":
        this.codeCombatRef.current.style.display = "block";
        break;
      case "code-beta":
        this.codeBetaRef.current.style.display = "block";
        break;
      case "bug-hunt":
        this.bugHuntRef.current.style.display = "block";
        break;
      case "quiz":
        this.quizRef.current.style.display = "block";
        break;
      case "debate":
        this.debateRef.current.style.display = "block";
        break;
      case "photography":
        this.photographyRef.current.style.display = "block";
        break;
      case "pubg":
        this.pubgRef.current.style.display = "block";
        break;
      case "csgo":
        this.csgoRef.current.style.display = "block";
        break;
      case "fifa":
        this.fifaRef.current.style.display = "block";
        break;
      case "dota":
        this.dotaRef.current.style.display = "block";
        break;
      default:
    }
  }

  render() {
    return (
      <section
        className="default-section"
        id="section-2"
        style={this.props.backgroundStyle || ""}
      >
        {this.eventDetails.map((event, index) => (
          <LightModal
            key={event.slug + index}
            headFont={event.headFont}
            modalHeading={event.modalHeading}
            eventType={event.eventType}
            fees={event.fees}
            maxTeam={event.maxTeam}
            languages={event.languages}
            details={event.details}
            downloadLink={event.downloadLink}
            modalRef={event.modalRef}
            slug={event.slug}
          />
        ))}

        <h1 className="section-heading">Events</h1>

        <ul className="timeline">
          <li className="event" data-date="Monday">
            <p>11 - 03 - 2019</p>
            <div className="events">
              <h3>
                <span>Bug hunt</span>
                <span>[ Registrations closed ]</span>
                {/* <button
                  className="btn btn-outline-warning"
                  data-id="bug-hunt"
                  onClick={this.handleClick}
                >
                  Register
                </button> */}
              </h3>
              <h3>
                <span>Mock Parliament</span>
                <span>[ Registrations closed ]</span>
                {/* <button
                  className="btn btn-outline-warning"
                  data-id="debate"
                  onClick={this.handleClick}
                >
                  Register
                </button> */}
              </h3>
            </div>
          </li>
          <li className="event" data-date="Tuesday">
            <p>12 - 03 - 2019</p>
            <div className="events">
              <h3>
                <span>Photography</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="photography"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
            </div>
          </li>
          <li className="event" data-date="Wednesday">
            <p>13 - 03 - 2019</p>
            <div className="events">
              <h3>
                <span>Code Beta</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="code-beta"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
              <h3>
                <span>Quiz</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="quiz"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
            </div>
          </li>
          <li className="event" data-date="Thursday">
            <p>14 - 03 - 2019</p>
            <div className="events">
              <h3>
                <span>Code Combat</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="code-combat"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
              <h3>
                <span>Counter Strike: GO (knockout)</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="csgo"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
            </div>
          </li>
          <li className="event" data-date="Friday">
            <p>15 - 03 - 2019</p>
            <div className="events">
              <h3>
                <span>Robotics</span>
                <OutboundLink
                  href="https://plenipotentiary-wax.000webhostapp.com/"
                  className="btn btn-outline-warning"
                  data-id="line"
                  // onClick={this.handleClick}
                >
                  Register
                </OutboundLink>
              </h3>
              <h3>
                <span>PUBG: Mobile</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="pubg"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
              <h3>
                <span>Counter Strike: GO (finals)</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="csgo"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
              <h3>
                <span>Fifa 19</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="fifa"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
              <h3>
                <span>Dota 1v1</span>
                <button
                  className="btn btn-outline-warning"
                  data-id="dota"
                  onClick={this.handleClick}
                >
                  Register
                </button>
              </h3>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Events;
