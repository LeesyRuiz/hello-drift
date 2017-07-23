import React, { Component } from "react";
import './App.css';
import { Form, DatePicker, Input, TimePicker, Button }from 'antd';
const FormItem = Form.Item;
const format = 'HH:mm';



class TimeRelatedForm extends React.Component {
  constructor(props) {
    super(props);
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


      // console.log('Received values of form: ', values);

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
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    return (
      <Form onSubmit={this.handleSubmit}>

      <FormItem
      {...formItemLayout}
      label="City"

      wrapperCol={{ span: 4 }}

      >
      {getFieldDecorator('city',  {
        rules: [{ required: true, message: 'Please input your note!' }],
      })(
        <Input
          // onChange={e => this.change(e)}
        />
      )}
      </FormItem>


      <FormItem
      {...formItemLayout}
      label="Date Picker"

      >
      {getFieldDecorator('date-picker', config)(
        <DatePicker />
      )}
      </FormItem>

      <FormItem
      {...formItemLayout}
      label="Time Picker"


      >
      {getFieldDecorator('time-picker', config)(
        <TimePicker
        format={format}

        />
      )}
      </FormItem>
      <FormItem
      wrapperCol={{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }}
      >
      <Button type="primary" htmlType="submit">Submit</Button>
      </FormItem>
      </Form>
    );
  }
};

const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm);

export default WrappedTimeRelatedForm
