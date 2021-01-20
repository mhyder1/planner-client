import React from "react";
import { Link } from "react-router-dom";
//import config from "../../Config/Config";
import Modal from "../Modal/Modal";

export default class EventsList extends React.Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };


  render() {
    //const teamId = this.props.teams[0];
    //const eventsList = this.props.events;
    //const myEvents = eventsList.filter((e) => e.team_id === teamId);
    // const event = this.props.match.params.id
    //   ? this.props.events.find(
    //       (e) => e.id === Number(this.props.match.params.id)
    //     )
    //   : "";
    console.log(this.props.match)
    return (
      <aside
        className="event-sidebar"
        // {
        //   this.props.match.url === "/add-event"
        //     ? "event-sidebar-hidden"
        //     : "event-sidebar"
        // }
      >
        <h2>My Events</h2>
        <p>(events you created)</p>
        <ul>
          {this.props.events.filter((event) => event.team_id === this.props.team)&& this.props.events.map((event, i) => (
            <li key={i}>
              <div className="events-desktop">
                <Link to={`/events/${event.id}`}>
                  <h3>{event.title}</h3>
                </Link>
              </div>
              <div className="view-modal">
                <Modal
                  event={this.props.match.params.id 
                    ? this.props.events.find(
                      (event) => event.id === Number(this.props.match.params.id)
                      )
                      : ""
                      }
                  {...this.props}
                  show={this.state.show}
                  handleClose={this.hideModal}
                />
                <button onClick={this.showModal} className="view-modal-button">
                  <Link to={`/events/${event.id}`}>
                    <h2>{event.name}</h2>
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <Link to="/add-event">
            <button>+ Event</button>
          </Link>
        </div>
      </aside>
    );
  }
}