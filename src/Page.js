/* eslint-disable */
// import './index.css';
import React, { Component } from "react";
import $ from "jquery";
import Form from "./Form";
import Event from "./Event";



class Page extends Component {
  constructor(props) {
    super(props);
    // this.state = {showWarning: true}
    // this.handleToggleClick = this.handleToggleClick.bind(this)
    //  this.state = {
    //   events: [],
    //   eventName: [],
    // }

  }





  // handleToggleClick() {
  //   this.setState(prevState => ({
  //     showWarning: !prevState.showWarning
  //   }));
  // }



  render(){
    return (
      <div>

        <div id="status">  </div>
       <button onclick="getInfo()">Get Info</button>
       <button onclick="login()" id="login">Login</button>
      </div>
    )
  }
}

export default Page;
