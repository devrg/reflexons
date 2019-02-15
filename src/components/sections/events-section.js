import React, { Component } from "react";

import "./events-section.scss";

import LightModal from '../lightweight-modal';

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
    this.gamesRef = React.createRef();

    this.eventDetails = [
      {
        slug: "code-combat",
        headFont: "Roboto Mono",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "Languages allowed: C++, Java, Python2, Python3",
        modalRef: this.codeCombatRef
      },
      {
        slug: "code-beta",
        headFont: "Roboto Mono",
        modalHeading: "Code Beta",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "",
        modalRef: this.codeBetaRef
      },
      {
        slug: "code-combat",
        headFont: "Roboto Mono",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "",
        modalRef: this.bugHuntRef
      },
      {
        slug: "code-combat",
        headFont: "Roboto Mono",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "",
        modalRef: this.quizRef
      },
      {
        slug: "code-combat",
        headFont: "Roboto Mono",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "",
        modalRef: this.debateRef
      },
      {
        slug: "code-combat",
        headFont: "Roboto Mono",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "",
        modalRef: this.photographyRef
      },
      {
        slug: "code-combat",
        headFont: "Roboto Mono",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        details: "",
        modalRef: this.gamesRef
      }
    ];

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
      case "games":
        this.gamesRef.current.style.display = "block";
        break;
      default:
    }
  }

  render() {
    return (
      <section
        className="default-section"
        id="section-2"
        style={this.props.backgroundStyle || ''}
      >
        {this.eventDetails.map((event, index) => (
          <LightModal
            key={event.slug + index}
            headFont={event.headFont}
            modalHeading={event.modalHeading}
            eventType={event.eventType}
            fees={event.fees}
            maxTeam={event.maxTeam}
            details={event.details}
            modalRef={event.modalRef}
          />
        ))}

        <h1 className="section-heading">The Events</h1>
        <div className="broken-grid">
          <div
            className="code-combat"
            data-id="code-combat"
            onClick={this.handleClick}
          >
            <i className="fas fa-code" />
            <div className="description">code combat</div>
          </div>
          <div
            className="code-beta"
            data-id="code-beta"
            onClick={this.handleClick}
          >
            <i className="fas fa-terminal" />
            <div className="description">code beta</div>
          </div>
          <div
            className="bug-hunt"
            data-id="bug-hunt"
            onClick={this.handleClick}
          >
            <i className="fas fa-bug" />
            <div className="description">bug hunt</div>
          </div>
          <div className="debate" data-id="debate" onClick={this.handleClick}>
            <i className="fas fa-diagnoses" />
            <div className="description">debate</div>
          </div>
          <div className="quiz" data-id="quiz" onClick={this.handleClick}>
            <i className="fas fa-question-circle" />
            <div className="description">quiz</div>
          </div>
          <div
            className="photography"
            data-id="photography"
            onClick={this.handleClick}
          >
            <i className="fas fa-camera-retro" />
            <div className="description">photography</div>
          </div>
          <div className="games" data-id="games" onClick={this.handleClick}>
            <i className="fas fa-gamepad" />
            <div className="description">games</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
