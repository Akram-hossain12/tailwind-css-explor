import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const Priching = () => {

    const pricing = [
        {id:1, name:'Free' , price: 0.00, Feturse:[
            'Full free video',
            'Smoth Larning plan',
            'Modiul wise Video',
            'free online cartificet',
            'Best teacher teaching',
            'Full plan for you'
        ]
    },
        {id:2, name:'Medium' , price:9.99, Feturse:[
            'Midium price of cost',
            'Smoth Larning plan',
            'Modiul wise Video',
            'monthly assginment',
            'free online cartificet',
            'Best teacher teaching',
            'Full plan for you'
        ]
    },
        {id:3, name:'Premium' , price: 99.99, Feturse:[
            'Primium cost video',
            'Smoth Larning plan',
            'Modiul wise Video',
            'free online cartificet',
            'monthly assginment',
            'Best teacher teaching',
            'Full plan for you'
        ]}
    ]
    return (
        <div>
            <h3 className='text-5xl bg-slate-500 text-white p-10 font-semibold'>Best Teach in the towen </h3>
          <div className='grid grid-cols-3'>
          {
                pricing.map(price=><PriceOption
                     key={price.id}
                      price={price}>
                        
                      </PriceOption>)
            }
          </div>
        </div>
    );
};

export default Priching;