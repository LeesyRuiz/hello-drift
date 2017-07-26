import React from "react";
import { Router, Route, Switch } from "react-router";

import Home from "./Home";
import Loading from "./Loading";
import Nav from "./Nav";
import Drift from "./Drift";


// Component definition
class App extends React.Component {
 render() {
   return (
     <Router>
       <div className='container'>
         <Nav />
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/drift' component={Drift} />
          //  <Route path='/battle/results' component={Results} />
          //  <Route path='/popular' component={Popular} />
           <Route render={function () {
             return <p>Not Found</p>;
           }} />
         </Switch>
       </div>
     </Router>
   );
 }
}

// Must export so that App component it is available in index.js
// Called CommonJS
module.exports = App;
