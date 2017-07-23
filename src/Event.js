import React, { Component } from "react";
import './App.css';


class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      eventName: ''
    }

  }


  getEvents(){
    var url = 'http://localhost:3000/events?lat=47.617&lng=-122.332&distance=200&sort=time&accessToken=EAACEdEose0cBAFfrS2JRpKfi89TGCTzw0jJFwfCIROZC1ofaMZBCt9nsR5jqA17UOxK0ZBRRdqjBuZAvYsH1bY4jMIvO16ZBlJhxyrEuZCOfDkUkb4mBmGrSFeP2v2VpwJBPqdwnay9xZAyH45FRZBzqkmx1SxQ7qanXBfkbI5jLfvClYZAnPYbYwGP8wHZBCqCIkZD'
    return fetch(url).then((res) => res.json())
  }


  componentWillMount(){
    this.getEvents().then((res) => {
      this.setState({
        events: res.events,
        eventName: res.events[9].name
      })
    });
  }
   render() {
    return (

      Events: {this.state.eventName}
      
    )}
  }

  export default Event;
