import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Hero from '../../components/hero/Hero';
import FeauturedProducts from '../../components/featuredProducts/FeauturedProducts';

const Home = () => {

  const handleClick = () => {
    toast.success("Hello Odilo!")
  }
  return (
    <section>
      <Hero />
      <FeauturedProducts/>
    </section>
  )
}

export default Home
