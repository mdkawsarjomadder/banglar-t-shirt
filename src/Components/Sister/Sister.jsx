import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
      const [money] = useContext(MoneyContext); 
      return (
            <div>
                  <h2>Hi Sister</h2>
                  <p><small>MOney: {money}</small></p>
            </div>
      );
};

export default Sister;