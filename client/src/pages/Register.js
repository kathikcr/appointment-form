import React from 'react'
import { Form } from "antd";
const Register = () => {
  
  //form handler
  const onfinishHandler = (values) =>{
    console.log(values);
  }
    return (
    <>
    <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler}>
            <h1>Register Form</h1>
            <Form.Item label="Name" name="name">
                <input type='text' required/>
            </Form.Item>
            <Form.Item label="Email" name="email">
                <input type='email' required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <input type='password' required/>
            </Form.Item>
            
            <button className='btn btn-primary'>Register</button>
        </Form>
    </div>
    </>
  );
};

export default Register
