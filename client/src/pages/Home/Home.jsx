import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Hero from '../../components/hero/Hero';

const Home = () => {

  const handleClick = () => {
    toast.success("Hello Odilo!")
  }
  return (
    <section>
      <Hero/>
    </section>
  )
}

export default Home
