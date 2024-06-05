import React, { useEffect, useState } from "react";
import kidF1 from "../../assets/kids2.png";
import SkeletonCard from "../../components/productCard/SkeletonCard";
import { useDispatch, useSelector } from "react-redux";
import {
	resetProduct,
	getAllKidsProducts,
} from "../../features/products/productSlice";
import ProductCard from "../../components/productCard/ProductCard";

const KidsPage = () => {
    useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
	const dispatch = useDispatch();
	const { kids, kidsAreLoading, kidsError, kidsSuccess, kidsMessage } =
		useSelector((state) => state.reducer.product);

	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getAllKidsProducts());
				dispatch(resetProduct());
			} catch (error) {
				console.error(error);
				dispatch(resetProduct());
			}
		};
		fetchData();
	}, [dispatch]);

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredProducts = kids.filter((product) =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<section className='lg:px-[7rem] md:px-[5rem] px-2 '>
			<div className=' border rounded-xl mt-5 grid  md:grid-cols-3 grid-cols-2 bg-blue-100 shadow animate-in fade-in zoom-in duration-300'>
				<div className=''>
					<img src={kidF1} alt='' className='h-48 md:h-auto' />
				</div>
				<div className='md:col-span-2  flex items-center justify-center'>
					<div>
						<h1 className='lg:text-7xl md:text-5xl   text-blue-500 md:text-left text-center'>
							Discover Our Kids' Collection
						</h1>
						<p className='pt-2 text-slate-500 md:text-left text-center lg:text-2xl md:text-xl text-sm md:px-5 '>
							Explore our kids' collection for fun and stylish fashion. From
							playful everyday wear to special occasion outfits, find the
							perfect clothes for every adventure.
						</p>
					</div>
				</div>
			</div>
			<div className='border mt-10 flex items-center justify-center px-5 rounded-2xl py-3 bg-blue-100 mb-3'>
				<label className='input input-bordered flex items-center gap-2'>
					<input
						type='text'
						className='grow border-none'
						placeholder='Search'
						value={searchQuery}
						onChange={handleSearchChange}
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='w-4 h-4 opacity-70'>
						<path
							fillRule='evenodd'
							d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
							clipRule='evenodd'
						/>
					</svg>
				</label>
			</div>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 '>
				{kidsAreLoading &&
					[1, 2, 3, 4].map((product, index) => <SkeletonCard key={index} />)}

				{!kidsAreLoading &&
					kidsSuccess &&
					filteredProducts.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
			</div>
		</section>
	);
};

export default KidsPage;
