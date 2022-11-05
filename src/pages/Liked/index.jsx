import React from 'react'
import { Link } from 'react-router-dom'

const LikedProducts = () => {
  return (
    <div><h1>This is Liked Products page</h1>

    <p>You can see more products <Link to="/shopnow">here</Link> </p></div>
  )
}

export default LikedProducts