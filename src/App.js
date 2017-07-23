import React, { Component } from "react";
import './App.css';
// import { Form, DatePicker, Input, TimePicker, Button }from 'antd';
// const FormItem = Form.Item;
import Form from "./Form";
import api from "./api";

// import axios from 'axios';

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     events: []
   }
}

componentWillMount(){
  api.getEvents().then((res) => {
    this.setState({
      events: res.events
    })
  });
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
