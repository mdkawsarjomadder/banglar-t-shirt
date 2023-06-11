import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
      return (
            <div className='myslf-contaner'>
                  <h2> Father </h2>
                  <section className='flex'>
                        <MySelf ring={ring}></MySelf>
                        <Brother></Brother>
                        <Sister></Sister>

                  </section>
            </div>
      );
};

export default Father;