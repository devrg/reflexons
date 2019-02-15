import React, { Component } from "react";

import "./location-section.scss";

class Location extends Component {
  render() {
    return (
      <section
        id="section-4"
        className="default-section"
        style={this.props.backgroundStyle}
      >
        <h1 className="section-heading locate-us">Locate Us</h1>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="location"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=university%20of%20calcutta%2C%20technology%20campus&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
