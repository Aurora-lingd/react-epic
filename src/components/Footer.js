import React from 'react'
import styled from 'styled-components'
function ComponentFooter() {
    return (
        <Footer>
          <div>请勿上传违反图片，违者后果自负</div>
            <p>© 西柚图床</p>
        </Footer>
    )
}
export default ComponentFooter
const Footer = styled.footer`
    padding:10px 10px;
    text-align:center;
    font-size:12px;
`
