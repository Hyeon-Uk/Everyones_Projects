import React from 'react'
import Navigation from '../components/Navigation'

const Home = ({user}) => {
    return (
        <>
        <Navigation></Navigation>
        <div>
            {user.u_email}
        </div>
        </>
    )
}

export default Home
