import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 50 ? 0 : 5;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is currently empty</div>}
        {cartItems.map((item) => (
          <div key={item._id} className="">
            <div className="">{item.name}</div>
            <div className="">
              <button onClick={() => onRemove(item)} className="">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="">
                +
              </button>
            </div>

            <div className="">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="">
              <div className="">Items Price</div>
              <div className="">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="">
              <div className="">Tax Price</div>
              <div className="">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="">
              <div className="">Shipping Price</div>
              <div className="">${shippingPrice.toFixed(2)}</div>
            </div>

            <div className="">
              <div className="">
                <strong>Total Price</strong>
              </div>
              <div className="">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="">
              <button
                onClick={() => alert('Checkout pending, everything is free!')}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
