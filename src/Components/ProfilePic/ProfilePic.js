import React from "react";
import DummyStore from "../../DummyStore/DummyStore";

export default class ProfilePic extends React.Component {
    render() {
     const imageSrc = DummyStore.users.profile_image;

        return (
            <div className="profile-pic">
                <span className="profile-image">
                    <img src={imageSrc} alt="" />
                </span>
            </div>
        );
    }
}
