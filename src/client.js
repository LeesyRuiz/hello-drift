import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import reactfire from 'reactfire';

var config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
};
firebase.initializeApp(config);

var provider = new firebase.auth.FacebookAuthProvider();
this.state = {user: null};

loginWithFacebook() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user});
    }.bind(this));
  }
  logOut() {
    firebase.auth().signOut().then(function() {
      this.setState({user: null});
    }.bind(this));
  }

  const user = this.state.user;
render() {
  return(
    <div>
      <p>Hi, {user.displayName}!</p>
      <button onClick={this.loginWithFacebook.bind(this)}>Login with Facebook</button><button onClick={this.logOut.bind(this)}>Log Out</button>
    </div>
  )
};
