import React from "react";
import { Link } from "react-router-dom";
import config from "../../Config/Config";
import TokenService from "../../Services/TokenService";

export default class AddTeamMember extends React.Component {

  handleAddTeamMember = (e) => {

  }

  render() {
    console.log(this.props.team && this.props.match.id)
    return(
      <>
        <div>
            <h2>Add Team member</h2>
              <form
                  onSubmit={(e) => this.handleAddTeamMember(e)}
              >
                <label htmlFor='teams'>Select Team</label>
                  <select id="teams" name="teams">
                    <option></option>
                  </select>
                  <br />
                <label>First Name: </label>
                <input type="text" name="first_name" require/>
                <br />
                <label>Last Name:</label>
                <input type="text" name="last_name" require/>
                <br />
                <label>Type in your photo URL</label>
                <input type="url" name="profile_image" />
                <br />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone_number" />
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