import React,{useRef} from "react";
import {useStores} from "../stores";
import {observer,useLocalStore} from 'mobx-react';
import { Upload ,message,Spin} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from "styled-components";
const { Dragger } = Upload

const Result = styled.div`
margin-top:30px;
border:1px solid #333;
padding:20px;
`
const H1 = styled.h1`
margin:20px 0;
text-align:center;
`
const Image = styled.img`
max-width:300px;
`
const Input = styled.input`
outline: none;
border-radius: 4px;
margin-right:10px;
border:1px solid #333;
`

const Component = observer(()=>{
  const ref1 = useRef()
  const ref2 = useRef()

  const {ImageStore,UserStore} = useStores()
  const store = useLocalStore(()=>({
    width:null,
    get widthStr(){
      return store.width?`/w/${store.width}`:'';
    },
    setWidth(width){
      store.width = width;
    },
    height:null,
    get heightStr(){
      return store.height?`/h/${store.height}`:'';
    },
    setHeight(height){
      store.height = height;
    },
    get fullStr(){
      return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
    },
  }))
  const bindWidth = ()=>{
    store.setWidth(ref1.current.value)
  }
  const bindHeight = ()=>{
    store.setHeight(ref2.current.value)
  }

  const props = {
    showUploadList:false,
    beforeUpload:file =>{
      console.log(file)
      ImageStore.setFil(file)
      ImageStore.setFilename(file.name)
      if (UserStore.currentUser === null){
          message.warning('请先登录，在上传图片！')
          return false
      }
      window.file = file
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)){
        message.error('只能上传png/svg/jpg/gif格式图片')
        return  false
      }
      if (file.size > 1024*1024){
        message.error('图片最大1M')
        return false
      }
      ImageStore.upload()
        .then((serverFile)=>{
          console.log('上传成功')
          console.log(serverFile)
        }).catch((err)=>{
          console.log(err)
        console.log('上传失败')
      })
      return false
    }
  }

  return (
    <div>
      <Spin tip="上传中" spinning={ImageStore.isUploading}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽即可上传图片</p>
        <p className="ant-upload-hint">
          仅支持 png/gif/jpg/svg/jpeg 格式的图片，图片最大为1M
        </p>
      </Dragger>
      </Spin>
      {
        ImageStore.serverFile?
        <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>线上链接</dt>
            <dd><a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a></dd>
            <dt>文件名</dt>
            <dd>{ImageStore.filename}</dd>
            <dt>图片预览</dt>
            <dd>
              <Image src={ImageStore.serverFile.attributes.url.attributes.url} alt=""/>
            </dd>
            <dt>更多尺寸</dt>
            <dd>
              <Input ref={ref1} onChange={bindWidth} type="text" placeholder="最大宽度（可选）"/>
              <Input ref={ref2} onChange={bindHeight} type="text" placeholder="最大高度（可选）"/>
            </dd>
            <dd>
              <a href={store.fullStr} target="_blank">{store.fullStr}</a>
            </dd>
          </dl>
        </Result>
          :
          null
      }

    </div>
  )
})
export default Component