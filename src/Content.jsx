import React from 'react'
import Items from './Items';
import Cart from './Cart';
import './style.css';

import './App.css';

const Content = () => {

  return (
    <div className="content">
     <Items/>
    <Cart/>
</div>
  )
}

export default Content