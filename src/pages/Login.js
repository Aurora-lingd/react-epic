import {Form, Input, Button} from 'antd';
import React from "react";
import styled from "styled-components";
import {useStores} from "../stores";
import {useHistory} from 'react-router-dom'

const Wrapper = styled.div`
max-width:600px;
margin:30px auto;
box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
border-radius:4px;
padding:20px;
`
const Title = styled.h1`
text-align:center;
margin-bottom:30px;
`
const layout = {
  labelCol: {span: 4},
  wrapperCol: {span: 20},
};
const tailLayout = {
  wrapperCol: {offset: 4, span: 20},
};

const Component = () => {
  const history = useHistory()
  const {AuthStore} = useStores()
  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.login()
      .then(()=>{
        console.log('登录成功，跳转到首页')
        history.push('/')
      })
      .catch((err)=>{
        console.log('登录失败')
        console.log(err)
      })
  };


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const Validators = {
    username(rule,value){
      if (/\W/.test(value)) return Promise.reject('不能出现字母数字下划线以外字符');
      if (value.length<4 || value.length >10) return Promise.reject('长度为4~10个字符');
      return  Promise.resolve();
    }
  }

  return (
    <Wrapper>
      <Title>登录</Title>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{required: true, message: '输入用户名'},{validator:Validators.username}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="输入密码"
          name="password"
          rules={[
            {required: true, message: '输入密码'},
            {min:4,message:'最少4个字符'},
            {max:16,message:'最多16个字符'}

          ]}
        >
          <Input.Password/>
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
export default Component

