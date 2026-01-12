import React from 'react'

export const Navbar = () => {
  return (
    <nav className='absolute z-60 w-full bg-transparent py-1 '>
        <div className='flex  justify-between items-center w-full mx-auto p-2 text-gray-300  '>
          <div className='relative left-2 flex justify-center items-center gap-0'>
            <img src='./logo.png' className='w-15 rounded-xl'/>
            
          </div>
            
              
            <ul className='flex gap-6 text-gray-300 text-lg'>
              <li className='cursor-pointer hover:text-white transition'>About</li>
              <li className='cursor-pointer hover:text-white transition'>Collections</li>
              <li className='cursor-pointer hover:text-white transition'>Contact</li>
            </ul>

            <button className='relative right-2 rounded-full py-1 px-3  text-gray-300  bg-gray-900 border-2 border-gray-500 hover:bg-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer'>Sign In</button>
        </div>

    </nav>
  )
}
