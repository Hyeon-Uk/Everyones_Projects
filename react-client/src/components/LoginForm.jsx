import axios from 'axios'
import React, { useState, useEffect } from 'react'
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
    ${props=>
    props.view===true?`
    width:100%;
    border:1px solid ${Color.border};
    border-radius:15px;
    padding:5px 15px;
    margin-bottom:15px;
    font-size:20px;`
    :
    ` 
    font-size:20px;
    width:0px;
    height:0px;
    display:inline-block;
    `
    }
   
    transition:all ease 0.5s;
`

const SubmitButton=styled.input`
    width:30%;
    height:30px;
    padding:5px 15px;
    font-size:15px;
    text-align:center;
    border-radius:15px;

    background-color:${props=> props.color==="blue"?Color.matteblue:Color.primary};

    color:white;
    cursor:pointer;
    margin:5px 0px;
    transition:all ease-out 0.3s;
`

const Warning=styled.span`
    font-size:13px;
    color:red;
    margin-top:10px;
`

const LoginForm = ({setUser}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passwordCheck,setPasswordCheck]=useState("");
    const [nick,setNick]=useState("");
    const [signIn,setSignIn]=useState(true);
    const [state,setState]=useState("");
    const onEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const onPassChange=(e)=>{
        setPassword(e.target.value);
    }
    const onPassCheckChange=(e)=>{
        setPasswordCheck(e.target.value);
    }
    const onNickChange=(e)=>{
        setNick(e.target.value);
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
    const Join=async (e)=>{
        if(email===""||password===""||passwordCheck===""||nick===""){
            setState("Input All Info");
            return;
        }
        else if(password!==passwordCheck){
            setState("Check your password");
            return;
        }
        else{
            try {
                const inputData={
                    u_email:email,
                    u_password:password,
                    u_nick:nick
                }
                console.log(inputData);
                const get=await fetch(Server.url+'/auth/register',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(inputData)
                }).then(res=>res.json());
                if(get.u_email){
                    window.location="/";
                }
                else{
                    setState(get);
                }
            } catch (error) {
                setState("다시 시도해주세요");
            }
        }
    }
    const act=(e)=>{
        if(signIn){
            if(e.target.value==="Sign in"){
                Login();
                return;
            }
            setSignIn(false);
        }
        else{
            if(e.target.value==="Sign up"){
                Join();
                return;
            }
            setSignIn(true);
        }
        setEmail("");
        setPassword("");
        setPasswordCheck("");
        setNick("");
        setState("");
    }
    useEffect(()=>{
        console.log("change!");
    },[signIn]);
    return (
        <Box>
        <Text>모두의 프로젝트</Text>
        <Form>
            <Input type="email" value={email} placeholder="Email" onChange={onEmailChange} required view={true}></Input>
            <Input type="password" value={password} placeholder="Password" onChange={onPassChange} required view={true}></Input>
            <Input 
            type="password" 
            value={passwordCheck}
             placeholder="PasswordCheck" 
             onChange={onPassCheckChange} 
            required={!signIn?true:false}
            view={!signIn?true:false}>
            
             </Input>
            <Input type="text" value={nick} placeholder="NickName" onChange={onNickChange}required={!signIn?true:false}
            view={!signIn?true:false}></Input>
            <SubmitButton type="button" value="Sign in" onClick={act} color={signIn?"blue":""}></SubmitButton>
            <SubmitButton type="button" value="Sign up" onClick={act} color={!signIn?"blue":""}></SubmitButton>
            <Warning>{state}</Warning>
        </Form>
        </Box>
    ) 
}

export default LoginForm
