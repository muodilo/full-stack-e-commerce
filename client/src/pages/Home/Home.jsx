import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Hero from '../../components/hero/Hero';
import FeauturedProducts from '../../components/featuredProducts/FeauturedProducts';
import LatestMenProducts from '../../components/latestMenProducts/LatestMenProducts';
import LatestWomenProducts from '../../components/latestWomenProducts/LatestWomenProducts';
import LatestKidsProducts from '../../components/LatestKidsProducts/LatestKidsProducts';
import { getCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getCart action here
    dispatch(getCart());
  }, [dispatch]); // Add dispatch as dependency to ensure it's only called once


  return (
    <section>
      <Hero />
      <FeauturedProducts />
      <LatestMenProducts />
      <LatestWomenProducts />
      <LatestKidsProducts/>
    </section>
  )
}

export default Home;

