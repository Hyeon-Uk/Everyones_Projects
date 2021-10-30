import React, { useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login';



const App = () => {
  // const [user,setUser]=useState({
  //   "u_email":"Admin@gmail.com",
  //   "u_nick":"Admin"
  // });
  const [user,setUser]=useState(null);

  return (
      user?<Home user={user} setUser={setUser}></Home>:<Login setUser={setUser}></Login>
  )
}

export default App


