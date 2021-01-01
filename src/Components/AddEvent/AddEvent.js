import React from "react";

class AddEvent extends React.Component {
    state = {
        events: [
            {
                id: [],
                description: [],
                location: [],
                date: [],
                user_id: [],
                time_start: [],
                time_end: [],
                name: [],

            }
        ],
    }
    handleAddCal = (event) => {
        event.preventDefault();
        let newEvent = {
            id: event.target.id.value,
            discription: event.target.discription.value,
            location: event.target.location.value,
            date: event.target.date.value,
            user_id: event.target.user_id.value,
            time_start: event.target.time_start.value,
            time_end: event.target.time_end.value,
            name: event.target.name.value,
        }
        let currentEvents = this.state.events;
        currentEvents.push(newEvent);
        this.setState({
            newEvent: currentEvents
        });

        this.props.history.push("/events")

    }

    handleCancel = () => {
        this.props.history.goBack("/events");
    };
    render() {
        return (
            <>
                <div>
                    <h2>Add a New Event</h2>
                    <form
                        className="add-event-form">
                        <label>What time is your event?</label>
                        <p>My event starts at:</p>
                        <input type="time" name="start_time" />
                        <p>My event ends at:</p>
                        <input type="time" name="end_time" />
                        <label>Add an address:</label>
                        <input type="text" name="location" />
                        <label>Add a description:</label>
                        <input type="text" name="description" />
                    </form>
                    <button type="submit" onClick={this.handleAddCal}>Add to Calendar</button>
                </div>
                <div>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
            </>
        )
    }
}


export default AddEvent;