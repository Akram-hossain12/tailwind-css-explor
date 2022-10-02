import React from 'react';
import Fetures from '../Fetures/Fetures';


const PriceOption = ({price}) => {
    const {Feturse} = price;
    return (
        <div className='bg-indigo-300 m-3 rounded-md'>
         <div className='mt-6'>
            <p><span className='text-6xl font-bold text-white'>{price.price}</span><span className='text-1xl text-gray-200'>/Month</span></p>
            <p className='text-4xl font-bold text-gray-100'>{price.name}</p>
         </div>
         <div className='mt-12 mb-5'> {
            Feturse.map( (Fee, idx)=> <Fetures key={idx} Fee={Fee}></Fetures>)
          }</div>
        </div>
    );
};

export default PriceOption;