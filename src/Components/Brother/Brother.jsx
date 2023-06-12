import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
     const [money] =useContext(MoneyContext);
      return (
            <div>
                  <h2>Hi Brother</h2>
                  <p><small>Grandpa M: {money}</small></p>
            </div>
      );
};

export default Brother;