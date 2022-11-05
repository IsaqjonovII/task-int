import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>This is home page</h1>

        <p>You can see more products <Link to="/products">here</Link> </p>
    </div>
  )
}

export default Home