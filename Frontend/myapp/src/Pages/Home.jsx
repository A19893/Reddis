import React from 'react'

const Home = () => {
  const logoutHandler=()=>{
    
  }
  return (
   <>
   <h1>Welcome to User Dashboard</h1>
    <button type="submit" onClick={logoutHandler}>Logout</button>
   </>
  )
}

export default Home