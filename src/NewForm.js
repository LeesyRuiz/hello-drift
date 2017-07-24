import React from "react";
import './newFormStyle.css';
import './App.css';
import { Form, DatePicker, Input, TimePicker, Button } from 'antd';
const FormItem = Form.Item;
const format = 'HH:mm';

 class NewForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

 this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
 const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'time-picker': fieldsValue['time-picker'].format('HH:mm'),
      };
      alert(values['city'])
      console.log('Received values of form: ', values);

      // change = e => {
      // this.props.onChange({ [e.target.name]: e.target.value });
      // this.setState({
      //   [e.target.name]: e.target.value
      // });
      // };
    });
  }

render() {
  const { getFieldDecorator } = this.props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },

  };
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };

  return (
      <Form onSubmit={this.handleSubmit} >

      <FormItem
      {...formItemLayout}
      label="Time Picker"
      >

      {getFieldDecorator('time-picker', config)(

        <TimePicker
         Col={{ span: 8 }}
        // value={this.state.timepicker}
        // onChange={e => this.change(e)}
        format={format}
        />
      )}
      </FormItem>




    <input id="input-1" type="text" placeholder="John Doe" required autofocus />
    <label for="input-1">
    <span class="label-text">Full Name</span>
    <span class="nav-dot"></span>
    <div class="signup-button-trigger">Sign Up</div>
    </label>




    // <input id="input-2" type="text" placeholder="john" required />
    // <label for="input-2">
    // <span class="label-text">Username</span>
    // <span class="nav-dot"></span>
    // </label>




    //
    // <input id="input-3" type="email" placeholder="email@address.com" required />
    // <label for="input-3">
    // <span class="label-text">Email</span>
    // <span class="nav-dot"></span>
    // </label>
    //
    //
    //
    //
    //
    //
    // <input id="input-4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
    // <label for="input-4">
    // <span class="label-text">Password</span>
    // <span class="nav-dot"></span>
    // </label>
    //
    //
    //
    //
    //
    //
    // <input id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
    // <label for="input-5">
    // <span class="label-text">Confirm Password</span>
    // <span class="nav-dot"></span>
    // </label>




    <button type="submit">Create Your Account</button>
    <p class="tip">Press Tab</p>
    <div class="signup-button">Sign Up</div>

    <FormItem
    wrapperCol={{
      xs: { span: 24, offset: 0 },
      sm: { span: 16, offset: 8 },
    }}
    >
    <Button type="primary" htmlType="submit">Submit</Button>
    </FormItem>

  </Form>




  )
}
};

const WrappedForm = Form.create()(NewForm);

export default WrappedForm;
