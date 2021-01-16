import React from "react";
import { Link } from "react-router-dom";
//import Config from "../../Config/Config"

export default class TeamEventsList extends React.Component {
  render() {
    console.log(this.props.teams)
      const teamId = this.props.teams;
      const eventsList = this.props.events;
      const teamEventsList = this.props.events.filter(
       (e) => e.team_id !== teamId
     );

    return (
      <aside
        className={
          this.props.match.url === "/add-event"
            ? "event-sidebar-hidden"
            : "event-sidebar"
        }
      >
        <h2>Team Events</h2>
        <p>(events where you're a team member)</p>
        <ul>
          {teamEventsList && teamEventsList.map((event, i) => (
            <li key={i}>
              <div className="events-desktop">
                <Link to={`/tm-events/${event.id}`}>
                  <h3>{event.title}</h3>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}