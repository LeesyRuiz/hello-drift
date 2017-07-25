/* eslint-disable */
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
    var url =  'http://localhost:3000/events?lat=47.617&lng=-122.332&distance=70&sort=time&accessToken=EAACEdEose0cBAD1Day9ZB3mk3rvmgZA2xv5fNHN3vrT7ZAotEqZB0GB6BZBZAaZA1Xxrym43GTV4ZBvomQSsxBH5MWNPRzoePcag4kgkMEsZB8DnZAmfiZCJCIJTL6gPwiZCmiE3eJo8ekMDGJ3pLZBSzkZCZCelZBtO5pMWoTEFY7prw30WZArAXClWS4j1VBnUtHRDcO1YZD'
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
