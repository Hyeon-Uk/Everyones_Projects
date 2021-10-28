import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Color ,Server} from '../Constants'
axios.defaults.withCredentials=true;
// axios.defaults.baseURL="http://localhost:8000/"
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

const Warning=styled.span`
    font-size:13px;
    color:red;
    margin-top:10px;
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
        if(email===""||password===""){
            setState("Input All Info");
            return;
        }
        try {
            const inputData={
                u_email:email,
                u_password:password
            }
            const get=await fetch(Server.url+'/auth/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(inputData)
            }).then(res=>res.json());
            
            if(get.accessToken){
                setUser({
                    u_email:get.u_email,
                    u_nick:get.u_nick
                });
            }
            else{
                setState(get)
            }
            
        } catch (error) {
            setState("다시 시도해주세요");
        }
    }
    return (
        <Box>
        <Text>모두의 프로젝트</Text>
        <Form>
            <Input type="email" value={email} placeholder="Email" onChange={onEmailChange} required></Input>
            <Input type="password" value={password} placeholder="Password" onChange={onPassChange} required></Input>
            <SubmitButton type="button" value="Login" onClick={Login}></SubmitButton>
            <Warning>{state}</Warning>
        </Form>
        </Box>
    ) 
}

export default LoginForm
