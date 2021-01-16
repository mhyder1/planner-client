import React from "react";
//import DummyStore from "../../DummyStore/DummyStore";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class CalendarView extends React.Component {


    render() {
        // https://dev.to/lberge17/fullcalendar-with-react-3hnl
        return (
            <FullCalendar
                events={[
                    { title: this.props.events[0] && this.props.events.name, date: this.props.events[0] && this.props.events.date },
                    { title: this.props.events[1] && this.props.events.name, date: this.props.events[1] && this.props.events.date },
                    { title: this.props.events[2] && this.props.events.name, date: this.props.events[2] && this.props.events.date },
                    
                ]}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        );
    }
}

export default CalendarView;