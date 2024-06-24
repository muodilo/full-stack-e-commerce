import React,{useEffect} from 'react'
import HeroCourosel from './HeroCourosel';
import { getLatestFeaturedProducts,resetProduct } from '../../features/products/productSlice';
import M1 from '../../assets/image1.png';
import Bannerx from './Banner';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {
    const dispatch = useDispatch();
  const { user } = useSelector(state => state.reducer.auth)
    useEffect(() => {
			const fetchData = async () => {
				try {
					await dispatch(getLatestFeaturedProducts());
					dispatch(resetProduct());
				} catch (error) {
					console.error(error);
					dispatch(resetProduct());
				}
			};
			fetchData();
		}, [dispatch]);
  return (
		<section className='lg:px-[7rem] md:px-[5rem] px-2 md:mt-7 '>
			<div className='grid lg:grid-cols-2 grid-cols-1 px-5 bg-blue-50 pb-5 rounded-xl border shadow animate-in fade-in zoom-in duration-300 '>
				<div className='grid md:grid-cols-2 grid-cols-1 md:mt-5 p-2'>
					<div className='text-center md:text-left  '>
						<h1 className='text-3xl text-center font-bold'>E-SHOP</h1>
						<hr />
						<p className='lg:mt-7 md:mt-5 md:text-xl mt-1 pe-2'>
							Discover premium fashion and accessories. Shop now for the latest
							trends and timeless classics.
						</p>
						<Link
							to='/contact'
							className='btn btn-primary lg:mt-7 md:mt-10 mt-2 '
							onClick={() => localStorage.setItem("activeNav", "men")}>
							CONTACT US
						</Link>
					</div>
					<img
						src={M1}
						alt=''
						className='p-5 shadow rounded-3xl md:flex hidden '
					/>
				</div>
				<div className='mt-5'>
					<HeroCourosel />
				</div>
			</div>
			{user ? null : <Bannerx />}
		</section>
	);
}

export default Hero
