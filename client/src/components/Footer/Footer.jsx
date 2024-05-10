import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font mt-10 bg-slate-100">
      <hr />
    <div className='lg:px-[7rem] md:px-[5rem] px-2'>
        <div className='text-center mt-5 mb-5'>
          <h1 className='text-2xl font-bold'>E-SHOP</h1>
          <ul className='flex justify-center md:flex-row flex-col mt-2 text-xl'>
            <li className='mx-3'>
              <Link>Shop</Link>
            </li>
            <li className='mx-3'>
              <Link>Men</Link>
            </li>
            <li className='mx-3'>
              <Link>Women</Link>
            </li>
            <li className='mx-3'>
              <Link>Kid</Link>
            </li>
            <li className='mx-3'>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul className='flex justify-center  mt-4 text-3xl'>
            <li className='mx-3'>
              <Link><FaInstagram /></Link>
            </li>
            <li className='mx-3'>
              <Link><CiFacebook /></Link>
            </li>
            <li className='mx-3'>
              <Link><FaXTwitter /></Link>
            </li>
          </ul>
        </div>
    </div>
        <div className='bg-slate-300 text-center h-10 flex justify-center items-center'>
          <p> &copy; 2024 ODILO, All right reserved </p>
        </div>
</footer>
  )
}

export default Footer
