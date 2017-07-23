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
    var url = 'http://localhost:3000/events?lat=47.617&lng=-122.332&distance=200&sort=time&accessToken=EAACEdEose0cBAHdWVlqsrGLzUoj2gYcPx2egzvs5J3tMzEans9MAjdr0CtVW4nDZCAgovDLjXGnr3Xl4NqGSrZCxenZCouIijZCCnhJJqhfx8IYUatBe2sBZBeGuOpZAXnRNZAr5wJJOp4XQqh6bvImcGVCG1F1Dn0uBYH22cQzFXqQLA5H4982ZAe89tRtEcnsZD'
    return fetch(url).then((res) => res.json())
  }


componentWillMount(){
  this.state.getEvents().then((res) => {
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
