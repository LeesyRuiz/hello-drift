/* eslint-disable */
// import './index.css';
import React, { Component } from "react";
import $ from "jquery";
// import './App.css';
// import Form from "./Form";
// import Event from "./Event";
// import User from "./User";
import Page from "./Page";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventName: [],
    }
}

  render(){
    return (
      <div>
      <Page />
      </div>
    )
  }

}

export default App;
