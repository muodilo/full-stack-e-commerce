import React, { useEffect, useState } from "react";
import {
	getLatestMenProducts,
	resetProduct,
} from "../../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCard from "../productCard/SkeletonCard";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";

const LatestMenProducts = () => {
	const dispatch = useDispatch();
	const { latestMen, lastestMenAreLoading, latestMenSuccess } = useSelector(
		(state) => state.reducer.product
	);


	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getLatestMenProducts());
			} catch (error) {
				console.error(error);
			} finally {
				dispatch(resetProduct());
			}
		};
		fetchData();
	}, [dispatch]);

	return (
		<section>
			<div className='lg:px-[7rem] md:px-[5rem] px-2 pt-20'>
				<h1 className='text-center text-4xl font-bold mb-5'>
					Latest Men products
				</h1>
				<hr className='mb-3' />
				<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
					{lastestMenAreLoading &&
						[1, 2, 3, 4].map((_, index) => <SkeletonCard key={index} />)}

					{!lastestMenAreLoading &&
						latestMenSuccess &&
						latestMen.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
				</div>
				<div className='text-center'>
					<Link
						to='/men'
						className='btn btn-active animate-bounce'
						onClick={() => localStorage.setItem("activeNav", 'men')}>
						Explore more
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LatestMenProducts;
