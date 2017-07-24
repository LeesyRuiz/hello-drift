import React, { Component } from "react";
import './App.css';
// import Form from "./Form";
// import Event from "./Event";
import WrappedForm from "./NewForm";


class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   events: [],
    //   eventName: []
    // }
  }

  render(){
    return (

<div>

     <WrappedForm  />

</div>





    )
  }
}



export default App;
