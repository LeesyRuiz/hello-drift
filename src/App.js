import React, { Component } from 'react';
import './App.css';
import enUS from 'antd/lib/locale-provider/en_US';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';

const format = 'YYYY-MM-DD HH:mm';

function disabledSeconds() {
}

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <DatePicker
      showTime={{ format: 'HH:mm' }}
      format={format}
      placeholder="Select Date & Time"
      onChange={onChange}
      onOk={onOk}
      disabledSeconds={disabledSeconds}
      />
      </div>
    );
  }
}

export default App;
