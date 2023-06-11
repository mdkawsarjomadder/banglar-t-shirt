import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
      const tshirts = useLoaderData();

      const [cart, setCart] = useState([]);

      const hendleAddToCart = tshirt => {
            const exists = cart.find(ts => ts._id === tshirt._id);
            if (exists) {
           toast('You Have Already Added This is a T-Shirt');
            }
            else {
                  const newCart = [...cart, tshirt];
                  setCart(newCart);
            }
      }

      const handleRemoveFromCart = id => {
            const remaining = cart.filter(ts => ts._id !== id);
            setCart(remaining);
      }
      return (
            <div className='home-contaner'>
                  <div className='t-shirt-contaner'>
                        {
                              tshirts.map(tshirt => <Tshirts
                                    key={tshirt._id}
                                    tshirt={tshirt}
                                    hendleAddToCart={hendleAddToCart}
                              > </Tshirts>)
                        }
                  </div>
                  <div className="cart-conatner">
                        <Cart
                              cart={cart}
                              handleRemoveFromCart={handleRemoveFromCart}
                        ></Cart>
                  </div>
            </div>
      );
};

export default Home;