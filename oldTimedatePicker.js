// import React, { Component } from 'react';
// import './App.css';
// // import enUS from 'antd/lib/locale-provider/en_US';
// import { DatePicker } from 'antd';
// // import { TimePicker } from 'antd';
// const format = 'YYYY-MM-DD HH:mm';
//
// function disabledSeconds() {
// }
//
// function onChange(value, dateString) {
//   console.log('Selected Time: ', value);
//   console.log('Formatted Selected Time: ', dateString);
// }
//
// function onOk(value) {
//   console.log('onOk: ', value);
// }
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//
//       <DatePicker
//       showTime={{ format: 'HH:mm' }}
//       format={format}
//       placeholder="Select Date & Time"
//       onChange={onChange}
//       onOk={onOk}
//       disabledSeconds={disabledSeconds}
//       />
//       </div>
//     );
//   }
// }
// export default App;
//
//
// <FormItem
//       {...formItemLayout}
//       label="Validating"
//       hasFeedback
//       validateStatus="validating"
//       help="The information is being validated..."
//     >
//       <Input placeholder="I'm the content is being validated" id="validating" />
//     </FormItem>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// <!-- <script>
// // init facebook js sdk
// window.fbAsyncInit = function() {
//   FB.init({
//     appId            : '569792133411051',
//     autoLogAppEvents : true,
//     xfbml            : true,
//     version          : 'v2.9'
//   });
//   // FB.AppEvents.logPageView();
//   FB.getLoginStatus(function(response) {
//     if (response.status === 'connected') {
//       document.getElementById('status').innerHTML = 'We are connected.';
//
//       // get tokens ----->
//       var uid = response.authResponse.userID;
//       var accessToken = response.authResponse.accessToken;
//
//       document.getElementById('login').style.visibility = 'hidden';
//     } else if (response.status === 'not_authorized') {
//       document.getElementById('status').innerHTML = 'We are not logged in.'
//     } else {
//       document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
//     }
//   });
// };
// (function(d, s, id){
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {return;}
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
//
// // login with facebook with extra permissions
// function login() {
//   FB.login(function(response) {
//     if (response.status === 'connected') {
//       document.getElementById('status').innerHTML = 'We are connected.';
//       document.getElementById('login').style.visibility = 'hidden';
//     } else if (response.status === 'not_authorized') {
//       document.getElementById('status').innerHTML = 'We are not logged in.'
//     } else {
//       document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
//     }
//   }, {scope: 'email'});
// }
//
// // getting basic user info
// function getInfo() {
//   FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
//     document.getElementById('status').innerHTML = response.name;
//     console.log(response);
//   });
// }
// </script> -->

// class App extends Component {
//  constructor() {
//    super();
//    this.state = {
//        fields: {}
//      };
//  }

//
//
//
// <section class="et-hero-tabs">
//   <h1>STICKY SLIDER NAV</h1>
//   <h3>Sliding content with sticky tab nav</h3>
//   <div class="et-hero-tabs-container">
//     <a class="et-hero-tab" href="#tab-es6">ES6</a>
//     <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
//     <a class="et-hero-tab" href="#tab-react">React</a>
//     <a class="et-hero-tab" href="#tab-angular">Angular</a>
//     <a class="et-hero-tab" href="#tab-other">Other</a>
//     <span class="et-hero-tab-slider"></span>
//   </div>
// </section>
//
// <!-- Main -->
// <main class="et-main">
//   <section class="et-slide" id="tab-es6">
//     <h1>ES6</h1>
//     <h3>something about es6</h3>
//   </section>
//   <section class="et-slide" id="tab-flexbox">
//     <h1>Flexbox</h1>
//     <h3>something about flexbox</h3>
//   </section>
//   <section class="et-slide" id="tab-react">
//     <h1>React</h1>
//     <h3>something about react</h3>
//   </section>
//   <section class="et-slide" id="tab-angular">
//     <h1>Angular</h1>
//     <h3>something about angular</h3>
//   </section>
//   <section class="et-slide" id="tab-other">
//     <h1>Other</h1>
//     <h3>something about other</h3>
//   </section>
// </main>
