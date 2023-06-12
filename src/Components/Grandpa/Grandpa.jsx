
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';
import { createContext, useState } from 'react';


// export const RingContaxt = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
      const ring = 'diamond';
    
      // const RingContaxt = createContext('gold');
      const [money, setMoney] = useState(0);
      return (
            <div className='grandpa'>
                  <h2>This is a GrandPa</h2>
                  <p>Has Money: {money}</p>

                  {/* <RingContaxt.Provider value='golden ringg'>
                        <section className='flex '>
                              <Father ring={ring}></Father>
                              <Uncle></Uncle>
                              <Aunty ring={ring}></Aunty>
                        </section>
                  </RingContaxt.Provider> */}
                   
                        <MoneyContext.Provider value={[money, setMoney]}>
                        <section className='flex '>
                              <Father ring={ring}></Father>
                              <Uncle></Uncle>
                              <Aunty ring={ring}></Aunty>
                        </section>
                        </MoneyContext.Provider>


            </div>
      );
};

export default Grandpa;