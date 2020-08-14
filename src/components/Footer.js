import React from 'react'
import styled from 'styled-components'
function ComponentFooter() {
    return (
        <Footer>
            <p>Footer</p>
        </Footer>
    )
}
export default ComponentFooter
const Footer = styled.footer`
    padding:10px 10px;
    text-align:center;
    font-size:12px;
`