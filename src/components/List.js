import React,{useEffect} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import InfiniteScroll from 'react-infinite-scroller';
import {List,Spin} from "antd";
import styled from "styled-components";

const Img = styled.img`
width:100px;
height:120px;
object-fit:contain;
border:1px solid #eee;
`
const Wrapper = styled.div`
justify-content: space-around;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-wrap: wrap;
`
const Component = observer(()=>{
  const {HistoryStore} = useStores()
  const loadMore = ()=>{
    HistoryStore.find()
  }
useEffect(()=>{
  console.log('进入组件')
  return ()=>{
    console.log('卸载组件')
    HistoryStore.reset();
  }
},[])
  return (
    <div>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={loadMore}
        hasMore={!HistoryStore.isLoading&&HistoryStore.hasMore}
        useWindow={true}
      >
        <List
          dataSource={HistoryStore.list}
          renderItem={
            item=> <List.Item key={item.id} >
              <Wrapper>
                <Img src={item.attributes.url.attributes.url} alt=""/>
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
                <div>
                  <a href={item.attributes.url.attributes.url} target="_blank">{item.attributes.url.attributes.url}</a>
                </div>
              </Wrapper>
            </List.Item>
          }
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && (
            <div>
              <Spin tip="加载中"/>
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  )
})
export default Component