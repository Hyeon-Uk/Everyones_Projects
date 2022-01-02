import React,{useState} from 'react'
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
    background-image:url(${process.env.PUBLIC_URL}/MainLogo.png);
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
    position:relative;
`

const DropdownMenu=styled.div`
    display:${
        props=>props.dropdown?"flex":"none"
    };
    position:absolute;
    right:0;
    top:40px;
    background-color:${Color.primary};
    border:3px solid ${Color.secondary};
    border-radius:15px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:200px;    
    color:${Color.text};
`

const DropdownMenuItem=styled.div`
    background-color:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:600;
    height:50px;
    width:100%;
    &:not(:last-child)+&:not(:first-child){
        border-bottom:1px solid ${Color.secondary};
    }
    &:first-child{
        border-bottom:4px solid ${Color.secondary};
    }
    &:last-child{
        color:${Color.mattered};
        border-top:4px solid ${Color.secondary}
    }

`

const Plus=styled.a`
    width:50px;
    height:50px;
    text-decoration:none;
    color:white;
    justify-content:center;
    align-items:center;
    font-size:15px;
`

const Navigation = ({user,setUser}) => {
    const [dropdown,setDropdown]=useState(false);
    const Dropdown=(e)=>{
        setDropdown(!dropdown);
    }
    const Logout=()=>{
        alert("Logout!");
        setUser(null);
    }

    return (
        <Header >
            <Logo href="/"></Logo>
            <Menu>
                <Plus href="/post">+</Plus>
                <Profile src="https://avatars.githubusercontent.com/u/43038815?v=4" onClick={Dropdown}>
                   <DropdownMenu dropdown={dropdown}>
                        <DropdownMenuItem>{user.u_nick}</DropdownMenuItem>
                        <DropdownMenuItem>hello?</DropdownMenuItem>
                        <DropdownMenuItem>hello?</DropdownMenuItem>
                        <DropdownMenuItem>hello?</DropdownMenuItem>
                        <DropdownMenuItem>hello?</DropdownMenuItem>
                        <DropdownMenuItem onClick={Logout}>Logout</DropdownMenuItem>
                   </DropdownMenu>
                </Profile>
            </Menu>
        </Header>
    )
}

export default Navigation
