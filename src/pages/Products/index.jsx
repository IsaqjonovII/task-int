import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>This is Products page</h1>

      <p>You can see more products <Link to="/shopnow">here</Link> </p>
    </div>
  )
}

export default Products