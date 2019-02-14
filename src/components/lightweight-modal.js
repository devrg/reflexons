import React, { Component } from "react";

import "./lightweight-modal.scss";

class LightweightModal extends Component {
  componentDidMount() {
		const modal = this.props.modalRef.current;
		const closeButton = modal.children[0].childNodes[0].childNodes[1];

    closeButton.addEventListener("click", () => {
      console.log("close");
      modal.style.display = "none";
    });

    window.addEventListener("click", event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  render() {
    return (
      <div className="light-modal" ref={this.props.modalRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h2
              style={{ fontFamily: this.props.headFont || "Pacifico, curisve" }}
            >
              {this.props.modalHeading}
            </h2>
            <span className="close">&times;</span>
          </div>

          <div
            className="modal-body"
            style={{ fontFamily: this.props.headFont || "Pacifico, curisve" }}
          >
            <div className="event-type">
              <div>{this.props.eventType}</div>
            </div>
            <div className="fees">
              <div>{this.props.fees}</div>
            </div>
            <div className="max-team">
              <div>{this.props.maxTeam}</div>
            </div>
            <div className="details">
              <div>{this.props.details}</div>
            </div>
          </div>

          <button
            className="btn btn-lg btn-outline-secondary"
            style={{ fontFamily: this.props.headFont || "Pacifico, curisve" }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default LightweightModal;
