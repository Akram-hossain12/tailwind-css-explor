import React from 'react';

const Link = ({route}) => {
    const {name,path} = route;
    return (
        <div>
            <li  className='ml-12 text-2xl font-bold'><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;