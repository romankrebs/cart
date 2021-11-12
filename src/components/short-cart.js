import React, { useState } from 'react';
import Cart from './cart';
import CartIcon from './cart-svg.js';
import '../styles/cart.css';
import '../styles/modal.css';

export function ShortCart() {
  const [open, setOpen] = useState(false);
  
  const Modal = () => {
    return (
        <div className="black" >
          <div className="close" onClick={() => setOpen(false)}>+</div>
          <div className="child-modal">
            <Cart />
          </div>
        </div>
    )
  }

  return (
    <>
      {open
        ? <div className={open ? "modal" : "hidden"}>
            <Modal />
          </div>
        : null
      }
      <header className="short-cart">
        <span
          onClick={() => setOpen(!open)}
          className="show-cart"
        >
          <CartIcon />
          &ensp;
          показать корзину
        </span>
      </header>
    </>
  )
}