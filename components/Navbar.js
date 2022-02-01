import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState('');

  return (
    <nav className='bg-gray-100'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            {/* logo*/}
            <div>
              <Link href='/'>
                <a className='flex items-center py-5 px-2 text-gray-700 hover:text-gray-900'>
                  {/* <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg> */}
                  <span className='font-bold'>SV</span>
                </a>
              </Link>
            </div>

            {/* Primary nav */}
            <div className='hidden md:flex items-center space-x-1'>
              <Link href='#'>
                <a className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                  Menu Item 1
                </a>
              </Link>

              <Link href='#'>
                <a className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                  Menu Item 2
                </a>
              </Link>
            </div>
          </div>

          {/* secondary nav */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link href='#'>
              <a className='py-5 px-3'>Login</a>
            </Link>

            <Link href=''>
              <a className='py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300'>
                Signup
              </a>
            </Link>
          </div>

          {/* mobile button goes here */}
          <div className='md:hidden flex items-center'>
            <button
              className='mobile-menu-button'
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {/* mobile-menu md:hidden */}
      <div className={'mobile-menu md:hidden ' + (!isOpen ? 'hidden' : '')}>
        <Link href='#'>
          <a className='block py-2 px-4 text-sm hover:bg-gray-200'>
            Menu Item 1
          </a>
        </Link>
        <Link href='#'>
          <a className='block py-2 px-4 text-sm hover:bg-gray-200'>
            Menu Item 2
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
