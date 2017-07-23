import React, { Component } from "react";
import './App.css';
// import { Form, DatePicker, Input, TimePicker, Button }from 'antd';
// const FormItem = Form.Item;
import Form from "./Form";
import Event from "./Event";

// import axios from 'axios';

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     events: [],
     eventName: ''
   }
}



  render() {
    console.log(" Events: ", this.state.events);
    return (
      <div className="Drift">

      <Form/>




      </div>

    )}
}

export default App;
