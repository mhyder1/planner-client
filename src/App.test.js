import React from 'react'
import ReactDOM from 'react-dom';
// import App from './App'
import { BrowserRouter, Router } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import Login from './Components/Login/Login'
import Event from './Components/Event/Event'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import AddEvent from './Components/AddEvent/AddEvent'
import AddTeam from './Components/AddTeam/AddTeam'
import AddTeamMember from './Components/AddTeamMember/AddTeamMember'
import Features from './Components/Features/Features'
import EditEvent from './Components/EditEvent/EditEvent'
import EventsList from './Components/EventsList/EventsList'
import TeamMember from './Components/TeamMember/TeamMember'
import Register from './Components/Register/Register'
import ProfileContactInfo from './Components/ProfileContactInfo/ProfileContactInfo'
import Modal from './Components/Modal/Modal'
import Footer from './Components/Footer/Footer'

let arrayOfComponents = [
  Nav, Login, Event, Header, Dashboard, 
  About, AddEvent, AddTeam, AddTeamMember, 
  Features, EditEvent, EventsList, TeamMember,
  Register, ProfileContactInfo, Modal, Footer
]

arrayOfComponents.forEach(Comp => {

  it(`${Comp.name} renders without crashing`, () => {
    const match = {params:{id:0}}
    const div = document.createElement('div');

    if(Comp.name === 'AddTeamMember') {
      ReactDOM.render(<BrowserRouter><Comp teams={[]}/></BrowserRouter>, div);
    } else if(Comp.name === 'EventsList') {
      ReactDOM.render(<BrowserRouter><Comp events={[]}/></BrowserRouter>, div);
    } else if(Comp.name === 'TeamMember') {
      ReactDOM.render(<BrowserRouter><Comp teamMembers={[]}/></BrowserRouter>, div);
    } else if(Comp.name === 'Modal') {
      ReactDOM.render(<BrowserRouter><Comp match={match}/></BrowserRouter>, div);
    } else {
      ReactDOM.render(<BrowserRouter><Comp /></BrowserRouter>, div);
    }
    ReactDOM.unmountComponentAtNode(div);
  });
})
