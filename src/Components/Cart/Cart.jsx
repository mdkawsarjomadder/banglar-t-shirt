import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
      // const {} = cart;
      let message;
      if (cart.length === 0) {
            message = <p>Places Add Some To Produts</p>
      }
      else {
            message = <div>
                  <h3>Bolo loxc</h3>
                  <p> <small>Thinsk For giving you money </small> </p>
            </div>
      }
      return (
            <div>
                  <h2 className={cart.length === 1 ? 'orange' : 'red'}>Order Summary:{cart.length}</h2>
                   <p className={`blueviolet, border ${cart.length === 3 ? 'yellow' : 'skyblue'}`}>Something</p>
                  {
                        cart.length > 2
                               ? <span className='lightblue'>TK Nai</span>
                              : <span>Aro Kinbvo</span>}
                  {message}
                  {
                        cart.map(tshirt => <p
                              key={tshirt._id}
                        >Name:{tshirt.name}  <button
                              onClick={() => handleRemoveFromCart(tshirt._id)}
                        >X</button>
                        </p>)
                  }
                  {
                        cart.length === 2 && <p>Double Bonaza!</p>
                  }
                  {
                        cart.length === 3 || <h3>Thin Ta ze holo nh</h3>
                  }
            </div>
      );
};

export default Cart;