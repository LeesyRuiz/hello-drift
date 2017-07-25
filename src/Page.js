import './index.css';
import React, { Component } from "react";
import $ from "jquery";
import Form from "./Form";
import Event from "./Event";


function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <Form/>
  );
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this)
    //  this.state = {
    //   events: [],
    //   eventName: [],
    // }

  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }



  render(){
    return (
      <div>
         <WarningBanner warn={this.state.showWarning} />
      <Event />
      <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Submit' : 'Show'}
        </button>
      </div>
    )
  }
}

export default Page;
