import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
	getSpecificProduct,
	resetProduct,
} from "../../features/products/productSlice";
import { addToCart, getCart, resetCart } from "../../features/cart/cartSlice";
import { Spinner } from "flowbite-react";
import { SlShareAlt } from "react-icons/sl";

const ProductDetails = () => {
	const URL = import.meta.env.REACT_APP_URL;
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const {
		specificProductMessage,
		specificProduct,
		specificProductLoading,
		specificProductSuccess,
	} = useSelector((state) => state.reducer.product);

	const { user } = useSelector((state) => state.reducer.auth);
	const { addToCartError, addToCartSuccess, addToCartMessage, cart } =
		useSelector((state) => state.reducer.cart);

	useEffect(() => {
		const fetchSingleProduct = async () => {
			try {
				await dispatch(getSpecificProduct(id));
			} catch (error) {
				toast.error(
					specificProductMessage || "Failed to fetch product details."
				);
			}
    };
    window.scrollTo(0, 0);
		fetchSingleProduct();
		return () => {
			dispatch(resetProduct());
		};
	}, [dispatch, id, specificProductMessage]);

	const handleAddToCart = async () => {
		if (!user) {
			navigate("/login");
			return;
		}

		try {
			setLoading(true);
			const action = await dispatch(addToCart(specificProduct._id));

			if (addToCart.fulfilled.match(action)) {
				await dispatch(getCart());
				toast.success(`${specificProduct.name} added successfully`);
			} else {
				toast.error("Add to cart failed");
				console.error("Add to cart failed:", action.error.message);
			}
		} catch (error) {
			toast.error("Add to cart failed");
			console.error("Add to cart failed:", error.message);
		} finally {
			dispatch(resetCart());
			setLoading(false);
		}
	};

	const isProductInCart = cart?.cart?.items?.some(
		(item) => item.product._id === specificProduct._id
	);

	// Share functionality
const handleShare = (id) => {
	const share = async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: specificProduct.name,
					text: `Discount Price: ${specificProduct.discountPrice}`,
					url: `${URL}/products/${id}`,
				});
			} else {
				console.error("Share API not supported");
			}
		} catch (error) {
			console.error("Error sharing:", error.message);
		}
	};

	// Debugging logs
	console.log("specificProduct:", specificProduct);
	console.log("URL:", URL);
	console.log("Product ID:", id);

	share();
};

	return (
		<div className='lg:px-[7rem] md:px-[5rem] px-2'>
			{specificProductLoading ? (
				<section className='text-gray-600 body-font overflow-hidden'>
					<div className='container px-5 py-24 mx-auto '>
						<div className='lg:w-4/5 mx-auto flex flex-wrap h-64 '>
							<div className='skeleton lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded'></div>
							<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
								<h2 className='text-sm title-font text-gray-500 tracking-widest uppercase skeleton'></h2>
								<h1 className='text-gray-900 text-3xl title-font font-medium mb-1 skeleton'></h1>
								<div className='flex mb-4 skeleton h-5'></div>
								<p className='leading-relaxed skeleton h-5'></p>
								<p className='leading-relaxed skeleton h-20 mt-7'></p>
								<div className='flex mt-20'>
									<span className='title-font font-medium text-2xl text-gray-900 flex gap-6 '>
										<button className='flex  text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded skeleton h-10'></button>
										<button className='flex  text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded skeleton h-10'></button>
									</span>
									<button className='flex ml-auto text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded skeleton h-10'></button>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				specificProductSuccess && (
					<section className='text-gray-600 body-font overflow-hidden'>
						<div className='container px-5 py-10 mx-auto '>
							<div className='lg:w-4/5 mx-auto flex flex-wrap border p-3 rounded shadow bg-blue-50/50'>
								<img
									alt='ecommerce'
									className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
									src={specificProduct.images[0]}
								/>
								<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
									<h2 className='text-sm title-font text-gray-500 tracking-widest uppercase'>
										{specificProduct.type}
									</h2>
									<h1 className='text-gray-900 text-3xl title-font font-medium mb-1 capitalize'>
										{specificProduct.name}
									</h1>
									<hr className='mb-2' />
									<p className='leading-relaxed'>
										{specificProduct.description}
									</p>
									<div className='flex mt-20'>
										<span className='title-font font-medium text-2xl text-gray-900 flex gap-6'>
											<h1>{specificProduct.discountPrice} Rwf</h1>
											<h1 className='text-red-500 line-through'>
												{specificProduct.price} Rwf
											</h1>
										</span>
										{loading ? (
											<button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
												<Spinner />
											</button>
										) : isProductInCart ? (
											<Link
												to='/cart'
												className='flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded'>
												View Cart
											</Link>
										) : (
											<button
												onClick={handleAddToCart}
												className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
												Add to cart
											</button>
										)}
									</div>
									<hr className='mt-4' />
									<div className='flex mb-4'>
										<span className='flex items-center ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s'>
											<h1>Share</h1>
											<button
												className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ml-2'
												onClick={() => handleShare(id)}>
												<SlShareAlt />
											</button>
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				)
			)}
		</div>
	);
};

export default ProductDetails;
