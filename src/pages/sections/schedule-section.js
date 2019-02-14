import React from "react";

import "./schedule.scss";

const Schedule = () => (
  <section className="default-section" id="section-3">
    <h1 className="section-heading">Schedule</h1>
    <ul class="timeline">
      <li class="event" data-date="Monday">
        <h3>Bug hunt + debate</h3>
        <p>11 - 03 - 2019</p>
      </li>
      <li class="event" data-date="Tuesday">
        <h3>Photography + Follow the line</h3>
        <p>12 - 03 - 2019</p>
      </li>
      <li class="event" data-date="Wednesday">
        <h3>Code Beta + Quiz</h3>
        <p>13 - 03 - 2019</p>
      </li>
      <li class="event" data-date="Thursday">
        <h3>Code Combat</h3>
        <p>14 - 03 - 2019</p>
      </li>
      <li class="event" data-date="Friday">
        <h3>PUBG + CSGO</h3>
        <p>15 - 03 - 2019</p>
      </li>
    </ul>
  </section>
);

export default Schedule;
