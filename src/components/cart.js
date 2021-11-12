import React, { useContext } from 'react';
import '../styles/app.css';
import { CartContext } from './context'; 


export default function Cart() {
  const { cart } = useContext(CartContext);
  let totalQuanity = 0;
  let totalPrice = 0;

  return (
    <div className="cart-container">
      <div className="cart-list">
        <div className="cart-item header">
          <div className="cover" />
          <div class="summer" />
          <div className="quanity">количество</div>
          <div className="price">цена</div>
          <div className="cost">стоимость</div>
        </div>
        {cart.map((el, key) => {
          totalQuanity += el.quanity;
          totalPrice += el.price * el.quanity;
          
          return(
            <div className="cart-item" key={`${el.vendor}-${key}`}>
              <div className="cover">
                <img src={el.image} alt={el.name} />
              </div>
              <div class="summer">
                <p>Артикул: {el.vendor}</p>
                <h3>{el.name}</h3>
              </div>
              <div className="quanity">
                <span className="small">Количество:&emsp;</span>
                {el.quanity}
              </div>
              <div className="price">
                <span className="small">Цена:&emsp;</span>
                {el.price} ₽
              </div>
              <div className="cost">
                <span className="small">Стоимость:&emsp;</span>
                {el.price * el.quanity} ₽
              </div>
            </div>
          )
        })}
      </div>
      <div className="total">
        <p>Всего товаров в корзине: <b>{totalQuanity} шт.</b></p>
        <p>Ощая стоимость: <b>{totalPrice} ₽</b></p>
      </div>
    </div>
  )
}