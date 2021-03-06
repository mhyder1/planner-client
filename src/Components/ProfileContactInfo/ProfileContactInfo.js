import React from "react";
import DummyStore from "../../DummyStore/DummyStore";
import config from "../../Config/Config";
import TokenService from "../../Services/TokenService";

export default class ProfileContactInfo extends React.Component {
  componentDidMount() {
    fetch(`${config.REACT_APP_API_BASE_URL}/users`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.props.setUser(user);
      });
    fetch(`${config.REACT_APP_API_BASE_URL}/events`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((events) => {
        const myEvents = events;

        fetch(`${config.REACT_APP_API_BASE_URL}/events/team-members/events`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then((res) => res.json())
          .then((tmEvents) => {
            const teamEvents = tmEvents;
            const allEvents = myEvents.concat(teamEvents);
            this.props.setUserEvents(allEvents);
          });
      });
    fetch(`${config.REACT_APP_API_BASE_URL}/teams`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((teams) => {
        this.props.setUserTeams(teams);
      });
    fetch(`${config.REACT_APP_API_BASE_URL}/team-members`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((tmembers) => {
        this.props.setUserTeamMembers(tmembers);
      });
  }
  render() {
    const firstName = DummyStore.users[0].first_name;
    const lastName = DummyStore.users[0].last_name;
    const email = DummyStore.users[0].email;
    const phone = DummyStore.users[0].phone_number;
    return (
      <div className="profile-details">
        <h3>{`${firstName} ${lastName}`}</h3>
        <h3>Email: {email}</h3>
        <h3>Phone number: {phone}</h3>
      </div>
    );
  }
}