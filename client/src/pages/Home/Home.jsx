import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Hero from '../../components/hero/Hero';
import FeauturedProducts from '../../components/featuredProducts/FeauturedProducts';
import LatestMenProducts from '../../components/latestMenProducts/LatestMenProducts';
import LatestWomenProducts from '../../components/latestWomenProducts/LatestWomenProducts';

const Home = () => {

  const handleClick = () => {
    toast.success("Hello Odilo!")
  }
  return (
    <section>
      <Hero />
      <FeauturedProducts />
      <LatestMenProducts />
      <LatestWomenProducts />
    </section>
  )
}

export default Home
