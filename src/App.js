import React, { Component } from "react";
import './App.css';
import Form from "./Form";
import Event from "./Event";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventName: []
    }
  }

  render(){
    return (

      <div className="Drift">

    //  <Form  />
    <Event />
<p>rxdtcfghvjb</p>
     </div>




    )
  }
}



export default App;
