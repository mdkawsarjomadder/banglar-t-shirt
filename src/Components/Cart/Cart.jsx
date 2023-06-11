import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
      // const {} = cart;
      return (
            <div>
                  <h2>Order Summary:{cart.length}</h2>
                  {
                        cart.map(tshirt => <p 
                         key={tshirt._id}
                        >Name:{tshirt.name}  <button 
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                        >X</button>
                        </p>)
                  }
            </div>
      );
};

export default Cart;