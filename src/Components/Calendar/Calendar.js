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
                    { title: this.props.events[0].id.name, date: this.props.events[0].date },
                    { title: this.props.events[1].id.name, date: this.props.events[1].date },
                    { title: this.props.events[2].id.name, date: this.props.events[2].date },
                    
                ]}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        );
    }
}

export default CalendarView;