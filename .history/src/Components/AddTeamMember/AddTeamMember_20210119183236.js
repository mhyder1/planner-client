import React from "react";
import { Link } from "react-router-dom";
import config from "../../Config/Config";
import TokenService from "../../Services/TokenService";

export default class AddTeamMember extends React.Component {

  handleAddTeamMember = (e) => {
    e.preventDefault();
    const { user_id } = TokenService.readJwtToken()
    const member = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      phone_number: e.target.phone_number.value,
      user_id,
      team_id: parseInt(e.target.teams.value)
    }

    fetch(`${config.REACT_APP_API_BASE_URL}/team-members`, {
      method: "POST",
      headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(member)
  })
  .then((member) => {
        console.log(member)
     })

  }

  render() {
    // console.log(this.props.team && this.props.match.id)
    const { teams } = this.props
    return(
      <>
        <div>
            <h2>Add Team member</h2>
              <form
                  onSubmit={this.handleAddTeamMember}
              >
                <label htmlFor='teams'>Select Team</label>
                  <select id="teams" name="teams">
                    <option value="">...</option>
                    {
                      teams.map(team => (
                        <option key={team.id} value={team.id}>{team.title}</option>
                      ))
                    }
                  </select>
                  <br />
                <label>First Name: </label>
                <input type="text" name="first_name" require="true"/>
                <br />
                <label>Last Name:</label>
                <input type="text" name="last_name" require="true"/>
                <br />
                {/* <label>Type in your photo URL</label>
                <input type="url" name="profile_image" />
                <br /> */}
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone_number" />
                <br />
                <button type="submit">Add Team Members</button>
              </form>
              <div>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
          </div>
      </>
    )

    
  }
}

// export default class AddTeamMember extends React.Component {
//   state = {
//     senderName: "",
//     recipient: "",
//     sender: "",
//     inviteSentMessage: "",
//     sent: false,
//   };

//   componentDidMount() {
//     this.setState({
//       senderName: this.props.user.firstName,
//       sender: "thanki.monika@gmail.com",
//       // sender: this.props.user.email,
//     });
//   }

//   /* Need to add some kind of confirmation if email is successfully sent */
//   handleAddTeamMember = (e) => {
//     e.preventDefault();
//     // const recipient = this.state.recipient;
//     const recipient = "thanki.monika@gmail.com";
//     const sender = this.state.sender;
//     const name = this.state.senderName;
//     const email = { recipient, sender, name };
//     this.setState({
//       inviteSentMessage: `Invite to ${recipient} sent!`,
//       sent: true,
//     });

//     fetch(`${config.REACT_APP_API_BASE_URL}/emails`, {
//       method: "POST",
//       body: JSON.stringify(email),
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${TokenService.getAuthToken()}`,
//       },
      
//     });
//   };

//   getTeamMemberEmail = (e) => {
//     const teamMemberEmail = e.target.value;
//     this.setState({
//       recipient: teamMemberEmail,
//     });
//   };

//   handleCancel = () => {
//     this.props.history.goBack("/teams");
//   };

//   render() {
//     return (
//       <>
//         <div className="add-team-member-view">
//           <h2>Add a Team Member</h2>
//           <p>Team members can only see events they've joined.</p>
//           <p>
//             Once your team member creates an account, you can <br /> send them
//             an invitation to your event.
//           </p>
//           {this.state.sent === true ? (
//             <>
//               <p>{this.state.inviteSentMessage}</p>
//               <Link to="/dashboard">
//                 <button>Return to dashboard</button>
//               </Link>
//             </>
//           ) : (
//             ""
//           )}
//           <form
//             onSubmit={(e) => this.handleAddTeamMember(e)}
//             className="add-team-member-form"
//           >
//             <label>Email address</label>
//             <input
//               onChange={(e) => this.getTeamMemberEmail(e)}
//               type="text"
//               name="email"
//             />
//             <button type="submit">Send email invitation</button>
//           </form>
//           <div>
//             <button onClick={this.handleCancel}>Cancel</button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }