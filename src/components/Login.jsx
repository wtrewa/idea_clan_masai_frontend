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

const Login = () => {
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
      <Card style={{ margin:"auto",marginTop:'200px',width:'400px', height:"60%", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <Typography.Title style={{textAlign:'center'}}>Login</Typography.Title>
      <Form
      style={{padding:'20px'}}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
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



   {/* submit button */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    <Link to={'/adminsignup'}> Sign Up ! </Link>
      </Card>
      
    </div>
  );
};

export default Login;
