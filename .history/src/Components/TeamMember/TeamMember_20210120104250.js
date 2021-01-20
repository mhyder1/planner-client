import React from "react";

export default class TeamMember extends React.Component {
  render() {
    const teams = this.props.teamMembers
    return (
      <section className="team-view">
        <div className="team-member-selected">
          {teams.map((team, i) =>(
            <section key={i}> 
            <h2 >{`${team.first_name} ${team.last_name}`}</h2>
            <h3>Email: {team.email}</h3>
            <h3>Phone Number: {team.phone_number}</h3>
          </section>
          ))}
        </div>
      </section>
    );
  }
}
