// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';



ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider> ,
  document.getElementById('app')
);
