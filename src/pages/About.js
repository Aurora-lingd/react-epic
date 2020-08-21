import React from 'react'
import styled from "styled-components";
function About() {
  const Green = styled.div`
   background: #d1eed1;
  border: 1px solid #83e583;
  font-size:20px;
  padding:10px;
  border-radius: 4px;
  margin-top:20px;
  color: #2c5b2c;
  `
  const Red = styled.div`
     background: #f3bdbd;
  border: 1px solid #f1a0a0;
  font-size:20px;
  padding:10px;
  border-radius: 4px;
  margin-top:30px;
  color: #642929;
  `
    return (
        <>
            <h1>关于西柚图床</h1>
          <Green>
            (oﾟ▽ﾟ)o 西柚图床仅供分享图片使用
          </Green>
          <Red>
            (σ｀д′)σ 严禁上传及分享含有色情、暴力、宣扬恐怖主义图片
          </Red>
        </>
    )
}
export default About