import { render } from 'react-dom'
import Routes from './config/Routes'
import * as firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'

render(
  Routes,
  document.getElementById('root')
);


//
//
// // import './index.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';
//
//
//
// ReactDOM.render(
//   <LocaleProvider locale={enUS}>
//     <App />
//   </LocaleProvider> ,
//   document.getElementById('root')
// );
