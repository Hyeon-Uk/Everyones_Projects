import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'

import {Color} from '../Constants'


const LoginBox=styled.div`
    border:1px solid ${Color.border};
    border-radius:50px;
    color:${Color.text};
    margin:0 auto;
    margin-top:50px;
    margin-bottom:50px;
    width:80%;
    max-width:1024px;
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:50px;
`

const Login = ({setUser}) => {
    return (
        <LoginBox>
           <LoginForm setUser={setUser}></LoginForm>   
        </LoginBox>
    )
}

export default Login
