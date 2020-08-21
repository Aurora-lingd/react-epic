import React from 'react'
import List from  '../components/List'
import styled from "styled-components";
function History() {
  const H1 = styled.h1`
  text-align: center;
  color: #333;
  `
    return (
        <>
          <H1>历史记录</H1>
          <List/>
        </>
    )
}
export default History