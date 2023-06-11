import React, { useState } from 'react';

const Tshirts = ({tshirt, hendleAddToCart}) => {
     const {picture, name, price} = tshirt;
      return (
            <div className='t-conatner'>
                  <img src={picture} alt="" />
                  <h3>{name}</h3>
                  <p>Price: ${price}</p>
                  <button onClick={() => hendleAddToCart(tshirt)}>Boy Now</button>
            </div>
      );
};

export default Tshirts;