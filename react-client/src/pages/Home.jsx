import React from 'react'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import {Color} from '../Constants'
const LogoutBtn=styled.button`
    width:100px;
    height:50px;
    background-color:white;
    border-radius:10px;
    text-align:center;
    cursor:pointer;
`

const Home = ({user,setUser}) => {
    const Logout=()=>{
        alert("Logout!");
        setUser(null);
    }
    return (
        <div>
            <Navigation></Navigation>
            <LogoutBtn onClick={Logout}>
                Logout
            </LogoutBtn>
        </div>
    )
}

export default Home
