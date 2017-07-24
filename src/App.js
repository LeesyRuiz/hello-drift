// import './index.css';
import './App.css';
import React, { Component } from "react";
// import Clockwork from "./Clockwork";
import './interactiveForm.scss';

// import './App.css';
import Form from "./Form";
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
     <Form />
    )}
  }

  export default App;
