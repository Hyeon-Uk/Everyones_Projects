import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Color ,Server} from '../Constants'

const Box=styled.div`
    width:50%;
`

const Text=styled.div`
    text-align:center;
    margin:15px 0px;
    width:100%;
    font-size:50px;
    font-weight:800;
`

const Form=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    position:relative;
`

const Input=styled.input`
    width:100%;
    border:1px solid ${Color.border};
    border-radius:15px;
    padding:5px 15px;
    margin-bottom:15px;
    font-size:20px;
`

const SubmitButton=styled.input`
    width:100%;
    height:30px;
    padding:5px 15px;
    font-size:15px;
    text-align:center;
    border-radius:15px;
    background-color:${Color.secondary};
    color:gray;
    cursor:pointer;
`

const LoginForm = ({setUser}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [state,setState]=useState("");
    const onEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const onPassChange=(e)=>{
        setPassword(e.target.value);
    }
    const Login=async (e)=>{
        const inputUser={
            "u_email":email,
            "u_password":password
        };
        setUser(inputUser);
        // try {
        //     const userData=await axios.post(Server.url+"/auth/login",inputUser);
        //     if(userData.accessToken){
                
        //     }
        //     else{
        //         setState(userData);
        //     }
        // } catch (error) {
        //     setState("다시 시도해주세요");
        // }
    }
    return (
        <Box>
        <Text>모두의 프로젝트</Text>
        <Form>
            <Input type="email" value={email} placeholder="Email" onChange={onEmailChange}></Input>
            <Input type="password" value={password} placeholder="Password" onChange={onPassChange}></Input>
            <SubmitButton type="button" value="Login" onClick={Login}></SubmitButton>
        </Form>
        </Box>
    ) 
}

export default LoginForm
