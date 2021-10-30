import React from 'react'
import styled from 'styled-components'
import { Color } from '../Constants'
const PostBody=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex-wrap:nowrap;
    align-items:center;
    background-color:${Color.primary};
    width:80%;
    height:100%;
    margin:15px 0px;
`

const PostTitle=styled.div`
    background-color:white;
    width:100px;
    height:30px;
`

const PostDesc=styled.div`
background-color:gray;
    width:100px;
    height:30px;
`

const PostPosition=styled.div`
background-color:white;
width:100px;
height:30px;
`

const Post = ({title,desc,positions}) => {
    return (
        <PostBody>
            <PostTitle>{title}</PostTitle>
            <PostDesc>{desc}</PostDesc>
            {positions.map(position=>{
                return <PostPosition>{position}</PostPosition>
            })}                    
        </PostBody>
    )
}

export default Post
