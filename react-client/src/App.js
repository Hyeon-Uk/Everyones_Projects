import React, { useState } from 'react'
import styled from 'styled-components'
import Home from './pages/Home';
import Login from './pages/Login';



const App = () => {
  const [user,setUser]=useState(null);

  return (
      user?<Home user={user}></Home>:<Login setUser={setUser}></Login>
  )
}

export default App


