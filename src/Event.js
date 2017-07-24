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
    var url = 'http://localhost:3000/events?lat=47.617&lng=-122.332&distance=70&sort=time&accessToken=EAACEdEose0cBAGvxOXmRzDg83d9171ONZCPTbAx9aOwHB8IZBfvMDfyyvn9TaYLmPBukXnqSMlP3BG7dmw5Cz60laBsAcCfgYG2qm1XLYGHZBZBVWWEjyetQMfZBZB7RQVc8E8uLqlRy7e9rnWk48ZA9GasuInF8kzID1KZBy2eSUBmmXzZCqSL2H9t6y77KNZCr0ZD'
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
