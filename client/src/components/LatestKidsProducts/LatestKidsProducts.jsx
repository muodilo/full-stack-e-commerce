import React,{useEffect} from 'react'
import { getLatestKidsProducts,resetProduct } from '../../features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonCard from '../productCard/SkeletonCard';
import ProductCard from '../productCard/ProductCard';
import { Link } from 'react-router-dom';

const LatestKidsProducts = () => {

  const dispatch = useDispatch();
  const { latestKids, lastestKidsAreLoading, lastestKidsError, latestKidsSuccess, latestKidsMessage } = useSelector(state => state.reducer.product);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getLatestKidsProducts());
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
				<h1 className='text-center text-4xl font-bold mb-5'>
					Latest Kid's products
				</h1>
				<hr />
				<div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
					{lastestKidsAreLoading &&
						[1, 2, 3, 4].map((product, index) => <SkeletonCard key={index} />)}

					{!lastestKidsAreLoading &&
						latestKidsSuccess &&
						latestKids.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
				</div>
				<div className='text-center'>
					<Link
						to='/kids'
						className='btn btn-active animate-bounce'
						onClick={() => localStorage.setItem("activeNav", "kids")}>
						Explore more
					</Link>
				</div>
			</div>
		</section>
	);
}

export default LatestKidsProducts
