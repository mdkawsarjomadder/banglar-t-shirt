import React, { Children } from 'react';
import Friend from '../Friend/Friend';


const Cousin = ({childen,hasFriend, ring}) => {
      return (
            <div>
                  <h2>Cousin</h2>
                  <p><small>{childen}</small> </p>
                 { hasFriend &&
                  <Friend ring={ring}></Friend>
                  }
            </div>
      );
};

export default Cousin;