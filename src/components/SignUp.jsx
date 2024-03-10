import React, { useState } from 'react';
import { Card, Form, Input, Select, Cascader, InputNumber, AutoComplete, Checkbox, Button, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};
let initForm = {
    firstName:'',
    lastName :"",
    email:'',
    password:'',
    phone_number:+910000000000,
    bio:'',
    gender:"male",
}

const SignUp = () => {
  const [form] = Form.useForm();
  const [formState,setFormState] = useState(initForm);

const handleChange = (e)=>{
    let {value,name } = e.target;
   
    let newObj = {...formState,[name]:value}
    setFormState(newObj)
}

console.log(formState)

  const onFinish = () => {
    // Your form submission logic here
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+91</Option>
        <Option value="87">+92</Option>
      </Select>
    </Form.Item>
  );

  

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

 


  return (
    <div>
      <Card style={{ margin:"auto",marginTop:'20px',width:'40%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <Typography.Title style={{textAlign:'center'}}>Sign Up</Typography.Title>
      <Form
      style={{padding:'20px'}}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      
     
      scrollToFirstError
    >
        {/* first name */}
      <Form.Item
        
        label="First Name"
        onChange={handleChange}
        rules={[
          {
            type: 'text',
            message: 'The input is not valid firstName!',
          },
          {
            required: true,
            message: 'Please input your firstName!',
          },
        ]}
      >
        <Input name='firstName' />
      </Form.Item>
      {/* last Name */}
      <Form.Item
        name="lastName"
        label="Last Name"
        onChange={handleChange}
        rules={[
          {
            type: 'text',
            message: 'The input is not valid Last Name!',
          },
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input name='lastName' />
      </Form.Item>
      {/* email id */}
      <Form.Item
        name="email"
        label="E-mail"
        onChange={handleChange}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input name='email' />
      </Form.Item>
    {/* password */}
      <Form.Item
        name="password"
        label="Password"
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password name='password' />
      </Form.Item>
{/* conform password */}
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
{/* phone number  */}
      <Form.Item
        name="phone"
        label="Phone Number"
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
        name='phone_number'
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
 {/* bio */}
      <Form.Item
        name="bio"
        label="Bio"
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input bio',
          },
        ]}
      >
        <Input.TextArea name='bio' showCount maxLength={100} />
      </Form.Item>

   {/* submit button */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    <Link to={'/login'}>Login!</Link>
      </Card>
    </div>
  );
};

export default SignUp;
