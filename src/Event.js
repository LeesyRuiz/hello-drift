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
    var url = ' http://localhost:3000/events?lat=47.617&lng=-122.332&distance=70&sort=time&accessToken=EAACEdEose0cBAILcvd9QNwVQo8Ef4tTZClcGGjNE6mSiQZCi9zZCH6i7635ctC1o15LszCWukfDuM6xjjDtIaN4nmIimNP06WVtsvtWE6dcQsnwfHImoLZCWoTgMHeNZB5PyRRMo1XrZB6hhh4zChkcAEEsJ7E4VCPrcV4xckqzptgL09Ax6D0HJ5kumwnvDcZD'
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
       <div>Events: {this.state.eventName}</div>

     )
  };
}

export default Event;
