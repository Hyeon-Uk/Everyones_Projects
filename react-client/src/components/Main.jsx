import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from '../components/Post'
import { Color } from '../Constants'

const Body=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:90%;
    height:100%;
    background-color:${Color.secondary};
    border-radius:15px;
`

const SearchBox=styled.div`
    width:90%;
    height:300px;
    margin:30px 0px;
    border:3px solid ${Color.tertiary};
    border-radius:15px;
`


const Main = () => {
    const post=[
        {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]},        {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]},        {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]},        {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}, {title:"React",desc:"리액트 구해요",positions:["react"]},
        {title:"Nodejs",desc:"노드 구해요",positions:["javascript","nodejs"]},
        {title:"프론트!!",desc:"프론트가 절실합니다.",positions:["react"]}
    ]
    
    useEffect(() => {
        console.log(Post);
    }, [])

    return (
        <Body>
            <SearchBox>SearchBox</SearchBox>
            {post.map(each=>{
                return <>
                <Post title={each.title} desc={each.desc} positions={each.positions}>
                </Post>
                </>
            })}
        </Body>
    )
}

export default Main
