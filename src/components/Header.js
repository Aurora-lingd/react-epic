import React from 'react'
import {NavLink,useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from "antd";
import {useStores} from "../stores";
import {observer} from 'mobx-react'

const ComponentHeader = observer(()=> {
  const history = useHistory()
  const {UserStore,AuthStore} = useStores()
  const handleLogout= ()=>{
    AuthStore.logout()
  }
  const handLogin = ()=>{
    console.log('跳转登陆页面')
    history.push('/login')
  }
  const handRegister = ()=>{
    console.log('跳转注册页面')
    history.push('/register')
  }
  return (
    <Header>
      <nav>
        <StyledLink to='/' activeClassName='active' exact>首页</StyledLink>
        <StyledLink to='/hiStory' activeClassName='active'>历史</StyledLink>
        <StyledLink to='/about' activeClassName='active'>关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ?
            <>
              {UserStore.currentUser.attributes.username} <StyledButton onClick={handleLogout} >注销</StyledButton>
            </> :
            <>
              <StyledButton onClick={handLogin}>登录</StyledButton>
              <StyledButton onClick={handRegister}>注册</StyledButton>
            </>
        }
      </Login>
    </Header>
  )
})

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
    color:#333;
`;
const StyledLink = styled(NavLink)`
    margin-right:30px;
    color:#333;
    &.active{
       color:#fff;
    }
`