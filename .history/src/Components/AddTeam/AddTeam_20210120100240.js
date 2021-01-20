import React from "react";
import config from "../../Config/Config"
import TokenService from "../../Services/TokenService"

export default class AddTeam extends React.Component {
    handleAddTeam = (e) => {
        e.preventDefault();
        const { user_id } = TokenService.readJwtToken()
           const title = e.target.title.value;
           const creator_id = user_id
           fetch(`${config.REACT_APP_API_BASE_URL}/teams`, {
               method: "POST",
               headers: {
                   "content-type": "application/json",
                   Authorization: `Bearer ${TokenService.getAuthToken()}`,
               },
               body: JSON.stringify({
                   title,
                   creator_id
                })
           })
           .then((res) => {
                if (!res.ok) {
                  throw new Error(res.status);
                }
                return res.json();
              })
              .then((newTeam) => {
                // this.props.updateTeams(newTeam)
                this.props.history.push("/teams");
              });
    };

    handleCancel = () => {
        this.props.history.goBack("/teams");
      };
    

        


    

    render() {
      console.log(this.props)
        return(
            <>
            <div >
                <h2>Create New Team</h2>
                <form
                   onSubmit={this.handleAddTeam}
                >
                    <label>Title: </label>
                    <input type="text" name="title" require="true"/>
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

