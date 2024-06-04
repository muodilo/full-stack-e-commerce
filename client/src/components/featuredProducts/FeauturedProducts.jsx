import React,{useEffect} from 'react'
import { getLatestFeaturedProducts,resetProduct } from '../../features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonCard from '../productCard/SkeletonCard';
import ProductCard from '../productCard/ProductCard';

const FeauturedProducts = () => {

  const dispatch = useDispatch();
  const { featured, featuredLoading, featuredError, featuredSuccess, featuredMessage } = useSelector(state => state.reducer.product);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getLatestFeaturedProducts());
        dispatch(resetProduct());
      } catch (error) {
        console.error(error);
        dispatch(resetProduct());
      }
    }
    fetchData();
  },[dispatch])
  return (
    <section>
      <div className='lg:px-[7rem] md:px-[5rem] px-2 pt-20'>

        <h1 className='text-center text-4xl font-bold mb-5'>Featured products</h1>
        <hr />
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
          
        {featuredLoading && [1, 2, 3, 4].map((product, index) => (
            <SkeletonCard key={index}/>
          ))}

          {(!featuredLoading && featuredSuccess) && featured.map((product) => (
            <ProductCard key={product._id} product={ product} />
          ))}
          
      </div>
      </div>
    </section>
  )
}

export default FeauturedProducts
