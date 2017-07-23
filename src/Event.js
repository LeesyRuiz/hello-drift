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
    var url = 'http://localhost:3000/events?lat=47.617&lng=-122.332&distance=70&sort=time&accessToken=EAACEdEose0cBANE1fCOgvKRb6DsZAjY37vgOOkruw1DLF90ZBlaSvkkusffZBvo432Nak3fPQLw4oDTsQ1PZAaIXiz3WKBKndsNR4F4aJnarVpV91si3iWdNMWvQ13PdrkKqZAy9R84EJTSu2hX3ZBntzZBvPnc0ZA4omK4HnH18DAfZBHfpxfTX4VBLu3HZAPYvwZD'
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
    console.log(" Events: ", this.state.events);
     return (
       <div>
       <div>Events: {this.state.eventName}</div>
       <div>Name: Myeventname</div>
       <div>Place: theplace</div>
       <div>Time: thetime</div>
       </div>

     )
  };
}

export default Event;
