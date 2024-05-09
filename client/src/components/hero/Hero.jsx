import React from 'react'
import HeroCourosel from './HeroCourosel';
import M1 from '../../assets/image1.png';
import Bannerx from './Banner';

const Hero = () => {
  return (
    <section className='lg:px-[7rem] md:px-[5rem] px-2 '>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div className='grid md:grid-cols-2 grid-cols-1 mt-5 p-2'>
        <div className='text-center md:text-left  '>
          <h1 className='text-3xl text-center font-bold'>E-SHOP</h1>
          <hr />
          <p className='lg:mt-7 md:mt-5 md:text-xl mt-1 pe-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque odit illo pariatur velit neque temporibus ipsa. Illo, modi a?</p>
          <button className='btn btn-primary lg:mt-7 md:mt-10 mt-2 '>CONTACT US</button>
        </div>
        <img src={M1} alt="" className='p-5 shadow rounded-3xl md:flex hidden '/>
      </div>
      <div className='mt-5'>
        <HeroCourosel/>
      </div>
      </div>
      <Bannerx/>
    </section >
  )
}

export default Hero
