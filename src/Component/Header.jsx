import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon,
      Bars3Icon ,
      XMarkIcon} 
    from '@heroicons/react/24/solid'

const Header = () => {
    const [menu, setMenu] = useState(true);
    return (
        <div className='py-5 bg-slate-300 px-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <nav className='flex justify-between items-center relative'>
                <div>
                    <Link className='flex gap-2'>
                        <BoltIcon class="h-8 w-8 text-blue-500" />
                        <h3 className='text-2xl font-bold tracking-wide text-gray-800'>Book Store</h3>
                    </Link>
                </div>

                <ul className='lg:flex hidden gap-4'>
                    <li className='font-semibold text-xl'>
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-blue-400 " : "text-gray-800")}

                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to="/book"
                            className={({ isActive }) => (isActive ? "text-blue-400 " : "text-gray-800")}

                        >
                            Book
                        </NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to="/about"
                            className={({ isActive }) => (isActive ? "text-blue-400 " : "text-gray-800")}

                        >
                            About
                        </NavLink>
                    </li>
                </ul>

                <div className='lg:hidden'>
                    <span onClick={() => setMenu(false)}
                    > <Bars3Icon class="h-8 w-8 text-blue-500" />
                    </span>
                {
                    !menu && <div className='absolute top-0 left-0 z-20 bg-slate-200 w-full'>
                       
                       <div className='p-5'>
                    <Link className='flex gap-2'>
                        <BoltIcon class="h-8 w-8 text-blue-500" />
                        <h3 className='text-2xl font-bold tracking-wide text-gray-800'>Book Store</h3>
                    </Link>
                    
                   

               <div className='flex justify-between'>
               <ul className='lg:hidden flex flex-col gap-4 py-5'>
                    <li className='font-semibold text-xl'>
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-blue-400 " : "text-gray-800")}

                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to="/book"
                            className={({ isActive }) => (isActive ? "text-blue-400 " : "text-gray-800")}

                        >
                            Book
                        </NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to="/about"
                            className={({ isActive }) => (isActive ? "text-blue-400 " : "text-gray-800")}

                        >
                            About
                        </NavLink>
                    </li>


                </ul>
                <div>
                <span onClick={()=>setMenu(true)}>
                     <XMarkIcon  class="h-8 w-8 text-blue-500" />
                     </span>
                </div>
               </div>
                </div> 
                    </div>
                }
                  
                </div>
               

            </nav>
        </div>
    );
};

export default Header;