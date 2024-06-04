import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { getSpecificProduct,resetProduct } from '../../features/products/productSlice';
import M2 from '../../assets/cloth1.webp'
import M3 from '../../assets/cloth2.jpeg'
import M4 from '../../assets/cloth3.webp'
import M5 from '../../assets/cloth4.jpeg'


const HeroCourosel = () => {

  const { featured, featuredLoading, featuredError, featuredSuccess, featuredMessage } = useSelector(state => state.reducer.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
		navigate("/products/" + id);
	};
  
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      {featuredLoading ? (
        <Carousel className='skeleton h-56 sm:h-64 xl:h-80 2xl:h-96'>

        </Carousel>
      ) : (
        <Carousel pauseOnHover>
          {featured.map(product => (      
            <img onClick={()=>handleClick(product._id)} src={product.images[0]} key={product._id} alt="..." />
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default HeroCourosel
