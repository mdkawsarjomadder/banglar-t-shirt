import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
      return (
            <div>
                  <h2> Aunty </h2>
                 <section className='flex'>
                 <Cousin>Kawsar</Cousin>
                  <Cousin ring={ring} hasFriend={true}>Jhokar</Cousin>
                 </section>
            </div>
      );
};

export default Aunty;