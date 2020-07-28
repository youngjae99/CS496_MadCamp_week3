import React, {Component} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css";
import { Typography } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
const { Title } = Typography;


class Login extends Component{


    onFinish = values => {
        console.log('Received values of form: ', values);
        axios.post('http://192.249.19.243:0280/user/login', {
            params: {
                id: values.username,
                password: values.password
            }
        }).then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };
        
    render(){
        return(
            <div id="loginPageDiv">
                <Title>Sign in to HandyCoook</Title>
                <div id="loginbox">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        Or <Link to={'/register'}>register now!</Link>
                    </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Login;