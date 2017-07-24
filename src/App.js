// import './index.css';
import './Clockwork.css';

import React, { Component } from "react";
import $ from "jquery";

import Clockwork from "./Clockwork";
// import './App.css';
// import Form from "./Form";
// import Event from "./Event";
// import Nav from "./Nav";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // events: [],
      // eventName: []
    };
  }
  render(){
    return (
     <Clockwork />
    )}
  }

  export default App;
