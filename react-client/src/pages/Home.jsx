import React from 'react'
import styled from 'styled-components'
import {Color} from '../Constants'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import Profile from '../components/Profile'
import { BrowserRouter,Route,Switch } from 'react-router-dom';

const Body=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const Home = ({user,setUser}) => {
    return (
        <div>
            <BrowserRouter>
            <Navigation user={user} setUser={setUser}></Navigation>
            <Body>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/profile/:u_nick" component={Profile}></Route>
                </Switch>
            </Body>
            </BrowserRouter>
        </div>
    )
}

export default Home
