import React, { Component } from "react";
import './App.css';
import Form from "./Form";
// import DummyData from 'src/samples.json';




class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventId: '',
      eventName: '',
      eventPicture: '',
      eventDesdcription: '',
      eventDistance: '',
      eventStart: '',
      eventLocation: []
    }
  }



  getEvents(){
    var url = ' http://localhost:3000/events?lat=47.617&lng=-122.332&distance=70&sort=time&accessToken=EAACEdEose0cBANabfJ1R8pRJZBFR5QQrmRRTrAZAZBF2c10ooITvWfSCfeZBOZCsY0ACCJGOHhQWDpOxS1M8u8hpIrswLqZBdzwULpSzefgPxuDCczCxOUBOxZBkC8zrUSZCKK5otUGZBngLrT7ynj64ZB3kUdZArcC72ZCvNUHJR7sgqM6NVPJyu40toPqvf70d648ZD'

    var jsonData = fetch(url).then((res) => res.json())
    console.log(jsonData);

    return jsonData

  }


  componentWillMount(){
    this.getEvents().then((res) => {
      const num = 3
      this.setState({
        events: res.events,
        randomEvent: res.events[num],
        eventName: res.events[num].name,
        eventId:  res.events[num].id,
        eventPicture:  res.events[num].picture,
        eventDescription: res.events[num].description,
        eventDistance:  res.events[num].distance,
        eventStart:  res.events[num].startTime,
        eventLocation:res.events[num].location
      })


    });
  }


  render() {
    return (
      <div>

      <div>   Events: {this.state.eventName}  </div>
      <div>     eventPicture  {this.state.eventPicture } </div>
      <div>     eventDesdcription  {this.state.eventDescription}  </div>
      <div>     eventDistance {this.state.eventDistance}  </div>
      <div>     eventStart {this.state.eventStart}  </div>
      <div>      eventLocation {this.state.eventLocation}  </div>

      </div>
    )
  };
}

export default Event;
