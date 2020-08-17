import React, {useState} from 'react'
//import LogoUrl from './logo.svg'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from "antd";

function ComponentHeader() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <Header>
      <nav>
        <StyledLink to='/' activeClassName='active' exact>首页</StyledLink>
        <StyledLink to='/hiStory' activeClassName='active'>历史</StyledLink>
        <StyledLink to='/about' activeClassName='active'>关于我</StyledLink>
      </nav>
      <Login>
        {
          isLogin ?
            <>
              Jack <StyledButton onClick={()=>setIsLogin(false)} >注销</StyledButton>
            </> :
            <>
              <StyledButton onClick={()=>setIsLogin(true)}>登录</StyledButton>
              <StyledButton>注册</StyledButton>
            </>
        }
      </Login>
    </Header>
  )
}

export default ComponentHeader
const StyledButton = styled(Button)`
  margin-left:10px;
`
const Login = styled.div`
    margin-left:auto;
`
const Header = styled.header`
    padding:10px 50px;
    display:flex;
    align-items: center;
    background-color:#f6d186;
    color:#fff;
`;
const StyledLink = styled(NavLink)`
    margin-right:30px;
    color:#333;
    &.active{
       color:#fff;
    }
`