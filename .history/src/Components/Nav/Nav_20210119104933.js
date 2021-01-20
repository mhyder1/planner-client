import React from "react";
import TokenService from "../../Services/TokenService";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.handleLogout(e);
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        {!TokenService.hasAuthToken() ? (
          <>
            <div className="nav-home">
              <div className="nav-logo">
                <h1>
                  <Link to="/">Event Planner</Link>
                </h1>
              </div>
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div id="main-menu" className="dashboard-menu">
            <h1>
              <Link to="/dashboard">Event Planner</Link>
            </h1>
            <ul>
              <li>
                <h2>
                  <Link to="/dashboard">Home</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/calendar">Calendar</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/events">Events</Link>
                </h2>
              </li>
              <li>
                <Link to="/add-event">+ Event</Link>
              </li>

              <li>
                <h2>
                  <Link to="/teams">Teams</Link>
                </h2>
              </li>
              <li>
                <Link to="/add-event">+ Team</Link>
              </li>
              <li>
                <h2>
                  <button onClick={(e) => this.handleLogout(e)}>Log Out</button>
                </h2>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}