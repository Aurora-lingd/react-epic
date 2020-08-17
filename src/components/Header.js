import React from 'react'
//import LogoUrl from './logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
function ComponentHeader() {
    return (
        <Header>
            <nav>
                <StyledLink to='/' activeClassName='active' exact >首页</StyledLink>
                <StyledLink to='/hiStory' activeClassName='active'>历史</StyledLink>
                <StyledLink to='/about' activeClassName='active'>关于我</StyledLink>
            </nav>
            <Login>
                <Button>
                    <StyledLink to='/login'>登录</StyledLink>
                </Button>
                <Button>
                    <StyledLink to='/register'>注册</StyledLink>
                </Button>
            </Login>
        </Header>
    )
}
export default ComponentHeader
const Login = styled.div`
    margin-left:auto;
`
const Button = styled.button`
    margin-left:10px;
`
const Header = styled.header`
    padding:10px 50px;
    display:flex;
    align-item:center;
    background-color:#f6d186;
    color:#fff;
`;
const StyledLink = styled(NavLink)`
    margin-right:30px;
    &.active{
        color:#fff;
    }
`