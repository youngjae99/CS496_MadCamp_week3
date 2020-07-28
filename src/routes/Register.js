import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css";
import { Typography } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';

const { Title } = Typography;

const formItemLayout = {
labelCol: {
    xs: {
    span: 24,
    },
    sm: {
    span: 8,
    },
},
wrapperCol: {
    xs: {
    span: 24,
    },
    sm: {
    span: 16,
    },
},
};
const tailFormItemLayout = {
wrapperCol: {
    xs: {
    span: 24,
    offset: 0,
    },
    sm: {
    span: 16,
    offset: 8,
    },
},
};

class Register extends Component{

    componentWillMount(){
        
    }
    componentDidMount(){
      console.log("mount!");
    }


    onFinish = values => {
        console.log('Received values of form: ', values);
    };
        
    render(){
        const {form} = Form.useForm();
        return(
            <div id="loginPageDiv">
                <p>Login Page</p>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={this.onFinish}
                        scrollToFirstError
                    >
                    <Form.Item
                        name="id"
                        label="ID"
                        rules={[
                        {
                            required: true,
                            whitespace: false,
                            message: 'Please input your ID!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
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
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="first_name"
                        label="First Name"
                        rules={[
                        {
                            required: true,
                            whitespace: false,
                            message: 'Please input your first name',
                        },
                        ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                        name="last_name"
                        label="Last Name"
                        rules={[
                        {
                            required: true,
                            whitespace: false,
                            message: 'Please input your last name',
                        },
                        ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

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
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                        Register
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        );
    }
}
export default Register;