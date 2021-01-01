import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Nav from "./Components/Nav/Nav";
import CalendarView from "./Components/Calendar/Calendar";
import AddEvent from "./Components/AddEvent/AddEvent"
import Event from "./Components/Event/Event";
import Header from "./Components/Header/Header"
import EventsList from "./Components/EventsList/EventsList";
import Login from "./Components/Login/Login";
import ProfileContactInfo from "./Components/ProfileContactInfo/ProfileContactInfo";
import ProfilePic from "./Components/ProfilePic/ProfilePic";
import Register from "./Components/Register/Register"
import TeamList from "./Components/TeamList/TeamList";
import TeamMember from "./Components/TeamMember/TeamMember";
import Footers from "./Components/Footer/Footers";
import Features from "./Components/Features/Features";
import DummyStore from "./DummyStore/DummyStore";
// import Dashboard from "./Components/Dashboard/Dashboard";






class App extends React.Component {

  state = {
    isLoggedIn: false,
    users: [
      {
        id: [],
        email: [],
        first_name: [],
        last_name: [],
        password: [],
        date_created: [],
        profile_image: [],
        phone_number: [],
      }

    ],
    team: [
      {
        id: [],
        email: [],
        first_name: [],
        last_name: [],
        password: [],
        date_created: [],
        profile_image: [],
        phone_number: [],
        
      }

    ],
    

  }

  
  componentDidMount(){
  setTimeout(() => this.setState(DummyStore), 600);
  }


  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,

    });
  };
  render() {
    return (
      <div className="App">
        <Route path="/"
          render={(props) => (
            <Nav {...props} {...this.state} handleLogout={this.handleLogout} />
          )}

        />
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={this.handleLogin} />
          )}
        />
        <Route exact path="/register" component={Register} />
        <main>
          <section className="main-dashboard">
            <Route exact path="/dashboard" component={ProfileContactInfo} />
            <Route exact path="/dashboard" component={ProfilePic} />
            {/* <Route exact path="/dashboard" component={Dashboard}/> */}
          </section>
          <section className="main-events">
            
            <Route
              exact
              path={["/events", "/events/:id", "/add-event"]}
              component={EventsList}
            />
            <Route exact path={["/events", "/events/:id"]} component={Event} />
            <Route exact path={["/events", "/events/:id"]} component={Event} />
            <Route
              exact
              path="/add-event"
              render={(props) => (
                <AddEvent {...props} {...this.state} onAddCal={this.handleAddCal }/>
              )} />
          </section>
            <section className="main-team">
            <Route exact path={["/teams", "/teams/:id"]} component={TeamList} />
            <Route
              exact
              path={["/teams", "/teams/:id"]}
              component={TeamMember}
            />
            </section>
          <section className="main-calendar">
            <Route exact path="/calendar" component={CalendarView} />
          </section>
          <Route exact path="/" component={Features} />
          <Route path="/" component={Footers} />
        </main>
      </div>
    )
  }
}


export default App;