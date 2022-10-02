import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
   const [open , setOpen]= useState(false);
    const route = [
        {id:1, name:"Home", path:"/Home"},
        {id:2, name:"Blog", path:"/Blog"},
        {id:3, name:"Class", path:"/Class"},
        {id:4, name:"Work", path:"/Work"},
        {id:5, name:"Exam", path:"/Exam"}
    ]

  
    return (
        
            <nav  className='bg-green-300 p-8'>

               <div onClick={()=> setOpen(!open)} className='w-12 h-10 lg:hidden md:hidden'>
                {
                    open ? <XMarkIcon/> : <Bars3Icon/> 
                }
               </div>
                <ul className={` md:flex w-full justify-center lg:static md:static  absolute ease-in duration-1000 ${open ? 'top-4' : 'top-[-160px]'}`}>
                    {
                        route.map(route =><Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
      
    );
};

export default Nav;