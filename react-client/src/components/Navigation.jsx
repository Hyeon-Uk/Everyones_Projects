import React from 'react'
import styled from 'styled-components'
import {Color} from '../Constants'
const Header=styled.div`
    width:100%;
    height:60px;
    background-color:${Color.secondary};
    box-shadow:0px 1px 1px 1px dark-gray;
    display:flex;
    justify-content:space-between;
    padding:10px 30px;
    margin-bottom:15px;
`

const Logo=styled.a`
    background-color:transparent;
    width:50px;
    height:40px;
    background-image:url(MainLogo.png);
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`

const Menu=styled.div`
    background-color:transparent;
    display:flex;
    align-items:center;
    justify-content:space-between;
    & > *{
        margin-left:20px;
        background-color:transparent;
    }
`

const Profile=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-image:url(${props=>props.src});
    background-size:cover;
    background-position:center;
    cursor:pointer;
`



const Navigation = () => {
    const Dropdown=(e)=>{

    }
    return (
        <Header>
            <Logo></Logo>
            <Menu>
                <Profile src="https://avatars.githubusercontent.com/u/43038815?v=4" onClick={Dropdown}>
                   
                </Profile>
            </Menu>
        </Header>
    )
}

export default Navigation
