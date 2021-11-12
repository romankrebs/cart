import React, { useState } from 'react';
import '../styles/app.css';
import { ShortCart } from './short-cart';
import { products } from '../content.js';
import { Product } from './product';
import { CartContext } from './context';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart: cart, setCart: setCart}}>
      <div className="app">
        <ShortCart />
        <Product content={products} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
