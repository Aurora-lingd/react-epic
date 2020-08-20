import React from "react";
import {observer} from "mobx-react";
import styled from "styled-components";

const Tips = styled.div`
background:#bbd196;
padding:10px;
margin:30px 0 ;
border-radius:4px;
`
const Component = observer(({children})=>{

  return (
    <Tips>{children}</Tips>
  )
})
export default Component