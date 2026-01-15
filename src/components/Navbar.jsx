import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='absolute z-60 w-full bg-transparent py-1 '>
        <div className='flex  justify-between items-center w-full mx-auto p-2 text-gray-300  '>
          <div className='relative left-2 flex justify-center items-center gap-0'>
            <Link to="/" className="relative left-2 flex items-center">
              <img src="./logo.png" alt="Logo" className="w-15 rounded-xl" />
            </Link>
          </div>
            
              
            <ul className='flex gap-6 text-gray-300 md:text-lg text-sm'>
              <li className='cursor-pointer hover:text-white transition'>About</li>
              <li className='cursor-pointer hover:text-white transition'><Link to="/collections">Collections</Link></li>
              <li className='cursor-pointer hover:text-white transition'><Link to="/cart">Cart</Link></li>
              <li className='cursor-pointer hover:text-white transition'>Contact</li>
            </ul>

            <button className='relative right-2 rounded-full py-1 px-3  text-gray-300  bg-gray-900 border-2 border-gray-500 hover:bg-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer'>Sign In</button>
        </div>

    </nav>
  )
}
