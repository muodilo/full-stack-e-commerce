import React from 'react'
import { Link } from 'react-router-dom'
import { RiMenu5Line } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  return (
    <section className='bg-blue-400 left-0 right-0 fixed z-30'>
      <div className='lg:px-[7rem] md:px-[5rem] px-2 py-2 grid md:grid-cols-4 grid-cols-1'>
        <div className='grid grid-cols-2'>
          <h1 className='lg:text-3xl text-xl font-bold text-white flex items-center'>E-SHOP</h1>
          <div className='flex items-center md:hidden'>

          <div className="relative  ms-auto md:hidden">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">0</p>
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            
            <div className="dropdown dropdown-bottom dropdown-end md:hidden block">
          <div tabIndex={0} role="button" className="  ms-5 mt-1 text-2xl"><RiMenu5Line /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className='me-5  '>
            <Link to='/'>SHOP</Link>
          </li>
          <li className='me-5  '>
            <Link to='/men'>MEN</Link>
          </li>
          <li className='pe-5  transition'>
            <Link to='/women'>WOMEN</Link>
          </li>
          <li className='me-5  transition'>
            <Link to='/kid'>KIDS</Link>
          </li>
          <li className='me-5  transition'>
            <Link to='/contact'>CONTACT</Link>
          </li>
  
          </ul>
        </div>
          </div>
        </div>
        <div className='md:flex md:items-center hidden lg:ms-16 ms-15'>
          <ul className='flex justify-around items-center w-full h-full text-white'>
            <li className='me-4'>
              <a href="" className='block  hover:text-black lg:text-xl'>SHOP</a>
            </li>
            <li className='me-4'>
              <a href="" className='block  hover:text-black lg:text-xl'>MEN</a>
            </li>
            <li className='me-4'>
              <a href="" className='block  hover:text-black lg:text-xl'>WOMAN</a>
            </li>
            <li className='me-4'>
              <a href="" className='block  hover:text-black lg:text-xl'>KIDS</a>
            </li>
            <li className='me-4'>
              <a href="" className='block  hover:text-black lg:text-xl'>CONTACT</a>
            </li>
          </ul>
        </div>
        <div className=' md:flex md:ms-40 lg:ms-auto hidden'>
          <button className='flex items-center text-xl'><CiLogin className='me-1'/> Login</button>
        </div>
        <div className='md:flex hidden'>
        <div className="relative  ms-auto">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">0</p>
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
          </div>
        </div>
        </div>
      
    </section>
  )
}

export default Navbar

