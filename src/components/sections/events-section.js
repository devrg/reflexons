import React, { Component } from "react";

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

    this.eventDetails = [
      {
        slug: "codecombat",
        modalHeading: "Code Combat",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        languages: "Languages allowed: C++, Java, Python2, Python3",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    There will be two seperate preliminary rounds one on 11th
                    March and other on 12th March 2019.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    Both the round will start at 11pm and contestant will be
                    give 2hrs of time to solve 4-5 programming questions and 10
                    MCQ questions.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    One team can participate in any one of the preliminary
                    round.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    Top teams from both the round will advance to final round
                    which will be on 13th march 2019
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">
                    Timing of final round will be informed to all qualified
                    teams
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">6</td>
                  <td className="detail">
                    The team with highest score and lowest time wins the event.{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">7</td>
                  <td className="detail">
                    Every team must have atleast one active Hackerearth ID{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Marking Scheme </td>
                  <td className="detail">
                    Standard marking metric based on time consumed and no of
                    accepted test-cases
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Arkadeep Baksi</td>
                    <td className="event-coordinator-contact">89109 45615</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Shankhanil Ghosh </td>
                    <td className="event-coordinator-contact">78725 24241</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.codeCombatRef
      },
      {
        slug: "codebeta",
        modalHeading: "Code Beta",
        eventType: "Only for First Years and School Students",
        fees: "₹60 per team",
        maxTeam: "2",
        languages: "Languages allowed: C, C++, Java",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <div className="disclaimer">
              If found the student is not a first year or school student then
              they will be disqualified on spot
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    There will be two seperate preliminary rounds one on 11th
                    March and other on 12th March 2019.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    {" "}
                    Both the round will start at 11pm and contestant will be
                    give 2hrs of time to solve 4-5 programming questions and 10
                    MCQ questions.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    One team can participate in any one of the preliminary
                    round.{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    Top teams from both the round will advance to final round
                    which will be on 13th march 2019{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">
                    Timing of final round will be informed to all qualified
                    teams{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">6</td>
                  <td className="detail">
                    The team with highest score and lowest time wins the event.{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">7</td>
                  <td className="detail">
                    Every team must have atleast one active Hackerearth ID{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Marking Scheme </td>
                  <td className="detail">
                    Standard marking metric based on time consumed and no of
                    accepted test-cases
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">
                      Sayangdipto Chakroborty
                    </td>
                    <td className="event-coordinator-contact">91638 25442</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Sounak Saha</td>
                    <td className="event-coordinator-contact">80170 29669</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.codeBetaRef
      },
      {
        slug: "bughunt",
        modalHeading: "Bug Hunt",
        eventType: "Open for all",
        fees: "50 per team",
        maxTeam: "2",
        languages: "Languages allowed: C, C++, Java Python3",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">1. </td>
                  <td className="detail">The Event is divided into 2 rounds</td>
                </tr>
                <tr>
                  <td className="serial-number">2. </td>
                  <td className="detail">
                    Top teams from round 1 will advance to final round{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3. </td>
                  <td className="detail">
                    iming of final round will be informed to all qualified
                    teams.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4.</td>
                  <td className="detail">
                    The team solving all the questions in minimum modifications
                    will be adjudged winner of the event.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5. </td>
                  <td className="detail">You will not be allowed a computer</td>
                </tr>
                <tr>
                  <td className="serial-number">Round 1 :</td>
                  <td className="detail">
                    Contestant will be given 30 mins to solve 20 MCQ Questions.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Round 2 :</td>
                  <td className="detail">
                    Round 1: Contestant will be given 30 mins to solve 20 MCQ
                    Questions.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Marking Scheme </td>
                  <td className="detail">
                    : The team solving maximum questions with minimum
                    modifications will be adjudged winner of the event
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Shaurjya Mandal</td>
                    <td className="event-coordinator-contact">84204 25209</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Aqib Mahboob</td>
                    <td className="event-coordinator-contact">98831 39569</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.bugHuntRef
      },
      {
        slug: "quiz",
        modalHeading: "Quiz",
        eventType: "Open for all",
        fees: "50 per team",
        maxTeam: "2",
        languages: "",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    The quiz will be conducted in 2 rounds.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    The first round will be the Preliminary Round which will be
                    held in written format.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    Teams scoring the highest in the Preliminary Round will
                    qualify for the Final Round
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    Teams can be formed with members from different streams as
                    well.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Shankhanil Ghosh</td>
                    <td className="event-coordinator-contact">78725 24241</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Sushmita Kumari </td>
                    <td className="event-coordinator-contact" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.quizRef
      },
      {
        slug: "debate",
        modalHeading: "Debate",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "2",
        languages: "Topics: You will be provided with once you register",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    There will be two seperate preliminary rounds one on 11th
                    March and other on 12th March 2019. Both the round will
                    start at 11pm and contestant will be give 2hrs of time to
                    solve 4-5 programming questions and 10 MCQ questions.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    Each team will have one member speaking for and one member
                    speaking against the resolution.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    One resolution will be allotted per two teams
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    The affirmative speaker on the first team presents arguments
                    in support of the resolution (2+1 minutes).
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">
                    The opposing speaker on the second team presents arguments
                    opposing the resolution. (2+1 minutes)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">6</td>
                  <td className="detail">
                    The affirmative speaker on the second team presents further
                    arguments in support of the resolution, identifies areas of
                    conflict, and answers questions that may have been raised by
                    the opposition speaker. (2+1 minutes).
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">7</td>
                  <td className="detail">
                    The opposing speaker on the first team presents further
                    arguments against the resolution, identifies further areas
                    of conflict, and answers questions that may have been raised
                    by the previous affirmative speaker. (2+1 minutes)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">8</td>
                  <td className="detail">
                    A short recess for teams to prepare their rebuttals. (5
                    minutes)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">9</td>
                  <td className="detail">
                    The opposing team begins with the rebuttal, attempting to
                    defend the opposing arguments and to defeat the supporting
                    arguments without adding any new information. (3 – 5
                    minutes)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">10</td>
                  <td className="detail">
                    First rebuttal of the affirmative team (3 – 5 minutes)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">11</td>
                  <td className="detail">
                    Each team gets a second rebuttal for closing statements with
                    the affirmative team having the last opportunity to speak.
                    (3 – 5 minutes)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">12</td>
                  <td className="detail">
                    Deviation from the topic frequently or overusing the same
                    point to establish a fact will lead to disqualification.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">13</td>
                  <td className="detail">
                    The usage of statistics to maintain one’s opinion should be
                    very limited (at most 2) in the speaker’s supporting or
                    opposing argumentative statements.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">14</td>
                  <td className="detail">
                    There cannot be any interruptions. Speakers must wait their
                    turns. The judges will enforce the rules.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">15</td>
                  <td className="detail">
                    If you have registered as a one person member, do remember
                    you have to speak both affirming and opposing the
                    resolution.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Shankhanil Ghosh</td>
                    <td className="event-coordinator-contact">78725 24241</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Sushmita Kumari</td>
                    <td className="event-coordinator-contact" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.debateRef
      },
      {
        slug: "photography",
        modalHeading: "Photography",
        eventType: "Open for all",
        fees: "30 per team",
        maxTeam: "1",
        languages: "",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    Photographs will be judged on the following parameters:-
                    Composition, Creativity, Quality of the image.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">Do not resubmit your photos.</td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    Photos must be your own work, if we suspect that the work is
                    not your own it shall be removed with an immediate effect.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    Submit your photos for prelims at our photography link on
                    the day before the event.(coming soon)
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">
                    The theme of finals will be announced at the day of the
                    event.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Ashita Gupta</td>
                    <td className="event-coordinator-contact">98308 78897</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Hiya Das </td>
                    <td className="event-coordinator-contact">94759 16985</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.photographyRef
      },
      {
        slug: "pubg",
        modalHeading: "PUBG",
        eventType: "Open for all",
        fees: "25 per team",
        maxTeam: "Solo, Duo, Squad",
        languages: "",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    Participants have to play on Campus and have to do Onspot
                    registration.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    Each participants has to bring their own device
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    Each Participants should have Erangel,Miramar and Sanhok
                    maps from before hand
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    Each participants will be provided a stable internet
                    connection{" "}
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">
                    Winners will get onspot prize money
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">6</td>
                  <td className="detail">
                    At any point in the tournament the organizer/coordinator has
                    the right to dismiss the match and disqualify a player
                    incase of fraud detected
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">7</td>
                  <td className="detail">
                    Participants will be given 5mins before every match to
                    configure their controls and to enter the room
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">8</td>
                  <td className="detail">
                    ONLY the participants will be allowed inside the competition
                    area. NO other person will be allowed to enter the area.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">9</td>
                  <td className="detail">
                    Participants who do not arrive in time will be disqualified.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">10</td>
                  <td className="detail">
                    Winners of the second round win the competition
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">1st Round</td>
                  <td className="detail">1st Round : 1 match (Erangel) </td>
                </tr>
                <tr>
                  <td className="serial-number">2nd Round</td>
                  <td className="detail">
                    2nd Round : 3 matches -&gt; Erangel,Miramar,Sanhok
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Subhajit Gupta</td>
                    <td className="event-coordinator-contact">79081 80691</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Shubham Kumar Das</td>
                    <td className="event-coordinator-contact">85830 57474</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.pubgRef
      },
      {
        slug: "csgo",
        modalHeading: "Counter Strike: Go",
        eventType: "Open for all",
        fees: "₹200 per team",
        maxTeam: "5",
        languages: "",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">Teams will consists of 5 members.</td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    Each and every player must have steam and CSGO account.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    Maps will be selected in veto process.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    There will be 7 maps de_overpass, de_mirage, de_nuke,
                    de_inferno, de_cache, de_train, de_cobblestone.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">
                    Each match will be of 30 rounds. First team to get 16 rounds
                    will win the match.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">6</td>
                  <td className="detail">
                    Sides will be selected in knife round. Winner of the round
                    will select the side.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">7</td>
                  <td className="detail">
                    Starting money will be $800 for each player.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">8</td>
                  <td className="detail">
                    If both team get to 15-15 draw then there will be again a
                    match of 6 rounds. 3 rounds on each sides, first team to win
                    4 rounds will win. And the starting money of that round will
                    be 6,000. If that match gets drawn again it will continue.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">9</td>
                  <td className="detail">
                    Each match will be elimination match.
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
              </tbody>
            </table>
            <div className="disclaimer">
              <p>
                <strong>
                  IN CASE OF ANY DISPUTES, THE DECISION OF EVENT CO-ORDINATOR
                  WILL BE FINAL.
                </strong>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="event-coordinator">Shubham Kumar Das </td>
                    <td className="event-coordinator-contact">85830 57474</td>
                  </tr>
                  <tr>
                    <td className="event-coordinator">Depraj Parida</td>
                    <td className="event-coordinator-contact">80135 54414</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        modalRef: this.csgoRef
      },
      {
        slug: "line",
        modalHeading: "Follow The Line",
        eventType: "Open for all",
        fees: "₹100 per team",
        maxTeam: "1 bot per team",
        languages: "Objective: Line Follower Bot",
        details: (
          <div className="table-responsive-sm" style={{ padding: 0 }}>
            <div className="disclaimer">
              Each student must carry their college ID with themselves
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td className="detail">
                    The dimension of bot should not exceed 25cmX25cmX25cm, with
                    each parameter eligible for a tolerance of 10%
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td className="detail">
                    Participants will be provided with a direct 220V power
                    supply only. Any special arrangement to power the bot must
                    be made by the participants themselves
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td className="detail">
                    Only electrically powered fully autonomous bots are allowed.
                    Failing to do so will lead to direct disqualification
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">4</td>
                  <td className="detail">
                    Potential difference between any two points on the bot must
                    not exceed 24V
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">5</td>
                  <td className="detail">Lego parts will not be allowed</td>
                </tr>
                <tr>
                  <td className="serial-number">6</td>
                  <td className="detail">
                    Any kind of damage to arena will lead to direct
                    disqualification
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">7</td>
                  <td className="detail">
                    In case of disputes, decision of the event coordinator(s)
                    will be final
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">8</td>
                  <td className="detail">
                    Width of track is about 2.5cm to 3cm
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">9</td>
                  <td className="detail">
                    5minutes will be given to the team for dry run after which
                    the team has to start the final run
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">10</td>
                  <td className="detail">
                    For the first round, the team is required to finish a
                    definite number of laps of the arena in the alloted time.
                    Alloted time and number of laps will be told on the day of
                    the event
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">11</td>
                  <td className="detail">
                    Teams that will complete the first round successfully will
                    be eligible for the second round
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">Date</td>
                  <td className="detail">Coming Soon</td>
                </tr>
                <tr>
                  <td className="serial-number">Time</td>
                  <td className="detail">Coming Soon</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
        modalRef: this.lineRef
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
      case "pubg":
        this.pubgRef.current.style.display = "block";
        break;
      case "csgo":
        this.csgoRef.current.style.display = "block";
        break;
      case "line":
        this.lineRef.current.style.display = "block";
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
            modalRef={event.modalRef}
            slug={event.slug}
          />
        ))}

        <h1 className="section-heading">Events</h1>
        <div className="broken-grid">
          <div
            className="code-combat"
            data-id="code-combat"
            onClick={this.handleClick}
          >
            <div className="description">
              <i className="fas fa-code" /> code combat
            </div>
          </div>
          <div
            className="code-beta"
            data-id="code-beta"
            onClick={this.handleClick}
          >
            <div className="description">
              <i className="fas fa-terminal" /> code beta
            </div>
          </div>
          <div
            className="bug-hunt"
            data-id="bug-hunt"
            onClick={this.handleClick}
          >
            <div className="description">
              <i className="fas fa-bug" /> bug hunt
            </div>
          </div>
          <div className="debate" data-id="debate" onClick={this.handleClick}>
            <div className="description">
              <i className="fas fa-diagnoses" /> debate
            </div>
          </div>
          <div className="quiz" data-id="quiz" onClick={this.handleClick}>
            <div className="description">
              <i className="fas fa-question-circle" /> quiz
            </div>
          </div>
          <div
            className="photography"
            data-id="photography"
            onClick={this.handleClick}
          >
            <div className="description">
              <i className="fas fa-camera-retro" /> photography
            </div>
          </div>
          <div className="pubg" data-id="pubg" onClick={this.handleClick}>
            <div className="description">
              <i className="fas fa-hard-hat" /> PUBG
            </div>
          </div>
          <div className="csgo" data-id="csgo" onClick={this.handleClick}>
            <div className="description">
              <i className="fas fa-gamepad" /> Counter Strike: Go
            </div>
          </div>
          <div className="line" data-id="line" onClick={this.handleClick}>
            <div className="description">
              <i className="fas fa-robot" /> Follow The Line
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
