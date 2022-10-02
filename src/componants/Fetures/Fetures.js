import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Fetures = ({Fee}) => {
    console.log(Fee)
    return (
        <div className=''>
              <div className='flex items-center ml-12 mt-3'>
            <CheckCircleIcon className='w-6 h-5 text-2xl text-orange-600'/>
            <p className='text-2xl'>{Fee}</p>
         </div>
        </div>
    );
};

export default Fetures;