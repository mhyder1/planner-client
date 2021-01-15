import React from "react";
import { Link } from "react-router-dom";
import config from "../../Config/Config";
import TokenService from "../../Services/TokenService";

// import DummyStore from "../../DummyStore/DummyStore";

export default class Event extends React.Component {
  handleInvites = () => {
    alert(
      `Email invites were sent to ${this.props.team[0].first_name} and ${this.props.team[1].first_name}!`
    );
  };

  handleDelete = (eventId, cb) => {
    fetch(`${config.REACT_APP_API_BASE_URL}/events/${eventId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res;
      })
      .then(() => {
        cb(eventId);
        this.props.history.push("/events");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return(
      <section className="event-view">
        <div className="event-view-selected">
          {this.props.events.map((event, i) => 
              <React.Fragment key={i}>
                <h2 key={i}>{event.title}</h2>
                <h3>{event.location}</h3>
                <p>{event.description}</p>
                <div
                  className={
                    this.props.location.pathname === `/events/${event.id}`
                      ? "my-events"
                      : "tm-events"
                  }
                >
                  <div>
                    <button onClick={this.handleInvites}>
                      + Invite Team Members
                    </button>
                  </div>
                  <div>
                    <Link to={`/edit-event/${event.id}`}>
                      <button>Edit Event</button>
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={(e) =>
                        this.handleDelete(
                          Number(this.props.match.params.id),
                          this.props.deleteEvent
                        )
                      }
                    >
                      Delete Event
                    </button>
                  </div>
                </div>


              </React.Fragment>
          )}

        </div>

      </section>
    )

  } 
}
    //console.log(this.props.events)

    //const teamId = this.props.teams[0];
    //console.log(this.props.events)

    
        

          //   e.id === Number(this.props.match.params.id) ? (
          //     <React.Fragment key={i}>
          //       <h2 key={i}>{e.title}</h2>
          //       <h3>{e.location}</h3>
          //       <p>{e.description}</p>
          //       <div
          //         className={
          //           this.props.location.pathname === `/events/${e.id}`
          //             ? "my-events"
          //             : "tm-events"
          //         }
          //       >
          //         <div>
          //           <button onClick={this.handleInvites}>
          //             + Invite Team Members
          //           </button>
          //         </div>
          //         <div>
          //           <Link to={`/edit-event/${e.id}`}>
          //             <button>Edit Event</button>
          //           </Link>
          //         </div>
          //         <div>
          //           <button
          //             onClick={(e) =>
          //               this.handleDelete(
          //                 Number(this.props.match.params.id),
          //                 this.props.deleteEvent
          //               )
          //             }
          //           >
          //             Delete Event
          //           </button>
          //         </div>
          //       </div>
          //     </React.Fragment>
          //    ) : (
          //     ""
          //    )
          // )}
       