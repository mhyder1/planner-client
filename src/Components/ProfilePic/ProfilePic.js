import React from "react";
import DummyStore from "../../DummyStore/DummyStore";

export default class ProfilePic extends React.Component {
    render() {
        //const imageSrc = this.props.users.profile_image;

        return (
            <div className="profile-pic">
                <span className="profile-image">
                    <img src={this.props.users && this.props.users.profile_image} alt="" />
                </span>
            </div>
        );
    }
}
