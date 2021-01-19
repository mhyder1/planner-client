import React from "react";
import { Link } from "react-router-dom";
// import DummyStore from "../../DummyStore/DummyStore";

function Modal(props) {
    const showHideClassName = props.show
        ? "modal display-block"
        : "modal display-none";
    const id = Number(props.match.params.id);


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {props.match.url === `/events/${id}` ? (
                    <>
                        <h2>{props.events && props.events.name}</h2>
                        <h3>{`${props.event && props.events.time_start} ${props.event && props.event.time_end}`}</h3>
                        <h3>{props.event && props.event.location}</h3>
                        <h3>{props.event && props.event.description}</h3>
                
                        <div>
                            <Link to="/add-event">
                                <button>+ Event</button>
                            </Link>
                        </div>
                    </>
                ) : (
                        ""
                    )}{" "}
                {props.match.url === `/teams/${id}` ? (
                    <>
                        <h2>{`${props.teamMember && props.teamMember.first_name} ${props.teamMember && props.teamMember.last_name}`}</h2>
                        <img
                            className="modal-photo"
                            alt=""
                            src={props.teamMember && props.teamMember.profile_image}
                        />
                        <h3>Name: {props.teamMember && props.teamMember.first_name} {props.teamMember && props.teamMember.last_name}</h3>
                        <h3>Phone Number: { props.teamMember && props.teamMember.phone_number}</h3>
                    </>
                ) : (
                        ""
                    )}{" "}
                <button className="close-button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
}

export default Modal;
