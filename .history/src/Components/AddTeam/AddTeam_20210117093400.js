import React from "react";
import config from "../../Config/Config"
import TokenService from "../../Services/TokenService"

export default class AddTeam extends React.Component {
    handleAddTeam = (e) => {
        e.preventDefault();
        const { user_id } = TokenService.readJwtToken()
           const title = e.target.title.value;
           const creator_id = user_id
           console.log(title, creator_id)

           fetch(`${config.REACT_APP_API_BASE_URL}/teams`, {
               method: "POST",
               headers: {
                   "content-type": "application/json",
                   Authorization: `Bearer ${TokenService.getAuthToken()}`,
               },
               body: JSON.stringify({
                   title: title,
                   creator_id: creator_id
                })
           })
           .then((res) => {
                if (!res.ok) {
                  throw new Error(res.status);
                }
                return res.json();
              })
              .then((newTeam) => {
                this.props.createEvent(newTeam);
                this.props.history.push("/teams");
              });
    };

    componentDidMount() {
        fetch(`${config.REACT_APP_API_BASE_URL}/teams`)
        .then(res => res.json())
        .then(teams => {
          this.setState({teams})
        })
    }

    handleCancel = () => {
        this.props.history.goBack("/teams");
      };

    render() {
        return(
            <>
            <div >
                <h2>Create New Team</h2>
                <form
                   onSubmit={(e) => this.handleAddTeam(e)}
                >
                    <label>Title: </label>
                    <input type="text" name="title" require/>
                    <button type="submit">Create a Team</button>
                </form>
                <div>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
            </div>
            </>
        )
    }
}

// export default class TeamMember extends React.Component {
//     render(){
//         return(
//             <section className="team-view">
//                 <div className="team-member-selected">
//                     {this.props.team && this.props.team.map((team, i) => 
//                      <>
//                       <img className="member-photo" alt="" src={team.profile_image} />
//                       <h2 key={i}>{`${team.first_name} ${team.last_name}`}</h2>
//                       <h3>Email: {team.email}</h3>
//                       <h3>Phone Number: {team.phone_number}</h3>

//                      </>
//                     )}

//                 </div>
//                 <div>

//                 </div>
//             </section>
//         )
//     }
//     // render() {
//     //     return (
//     //         <section className="team-view">
//     //             <div className="team-member-selected">
//     //                 {this.props.team.map((t, i) =>
//     //                     t.id === Number(this.props.match.params.id) ? (
//     //                         <>
//     //                             <img className="member-photo" alt="" src={t.profile_image} />
//     //                             <h2 key={i}>{`${t.first_name} ${t.last_name}`}</h2>
//     //                             <h3>Email: {t.email}</h3>
//     //                             <h3>Phone Number: {t.phone_number}</h3>
//     //                         </>
//     //                     ) : (
//     //                             ""
//     //                         )
//     //                 )}
//     //             </div>
//     //         </section>
//     //     );
//     // }
// }