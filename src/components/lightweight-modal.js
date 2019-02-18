import React, { Component } from "react";

import "./lightweight-modal.scss";
import { Link } from "gatsby";

class LightweightModal extends Component {
  componentDidMount() {
    const modal = this.props.modalRef.current;
    const closeButton = modal.children[0].childNodes[2].childNodes[0];

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
          <h2>{this.props.modalHeading}</h2>

          <div className="modal-body">
            <div className="info-set">
              <div className="event-type">
                <div>
                  <span className="info-header">Event type:</span>
                  {this.props.eventType}
                </div>
              </div>
              <div className="fees">
                <div>{this.props.fees}</div>
              </div>
              <div className="max-team">
                <div>
                  <span className="info-header">Maximum heads per team:</span>
                  {this.props.maxTeam}
                </div>
              </div>
            </div>
            <div className="details">
              {this.props.languages ? (
                <div>Languages allowed: {this.props.languages}</div>
              ) : (
                ""
              )}
              {this.props.details ? (
                <div style={{ padding: 0 }}>{this.props.details}</div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="modal-header">
            <span className="close">&times;</span>
            <Link
              to="/register"
              className="btn btn-lg btn-outline-primary"
              state={{
                event: this.props.modalHeading,
                slug: this.props.slug,
                maxTeam: this.props.maxTeam
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LightweightModal;
