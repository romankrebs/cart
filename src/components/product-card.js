import React, { useContext, useState } from 'react';
import { CartContext } from './context.js';
import '../styles/card.css';

export default function Card(props) {
  const { content } = props;
  const [ quanity, setQuanity ] = useState('1');
  const [ alert, setAlert ] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const addCart = (data) => {
    setCart(() => {
        const index = cart.findIndex((el) => el.vendor == data.vendor)
        if(index > -1) {
          cart[index].quanity += data.quanity;
        } else {
          cart.push(data);
        }
        console.dir(cart);
        return cart;
      }
    );
  }

  const handleChange = (event) => {
    let value = event.target.value - 0;
    if (value < 1 ) {
      value = 1;
    }
    if (value > 999) {
      value = 999;
    }
     
    setQuanity(value);
  }

  return (
    <div className="card">
      <img src={content.image} alt={content.name} />
      <h3>{content.name}</h3>
      <p>{content.descript}</p>
      <p>Артикул: {content.vendor}</p>
      <p>Стоимость: <span className="price">{content.price} ₽</span></p>
      <div className="quanity">
        <div className="number">
          <input
            className="dec"
            type="number"
            name="quanity"
            min="1"
            max="999"
            step="1"
            onChange={handleChange}
            value={quanity}
          />
        </div>
        <div
          className="button"
          onClick={
            () => {
              setAlert(true);
              addCart({
                vendor: content.vendor,
                quanity: quanity - 0,
                price: content.price,
                name: content.name,
                image: content.image
              })
            }
          }
        >
          добавить в корзину
        </div>
      </div>
      <p className="alert">{alert && 'Товар успешно добавлен'}</p>
    </div>
  )
}