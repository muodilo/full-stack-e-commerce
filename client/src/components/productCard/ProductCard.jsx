import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { Spinner } from "flowbite-react";
import { toast } from 'react-toastify';
import { addToCart, getCart, resetCart } from '../../features/cart/cartSlice';
import { getSpecificProduct, resetProduct } from '../../features/products/productSlice';


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { addToCartError, addToCartSuccess, addToCartMessage, cart } = useSelector(state => state.reducer.cart);
	const { user } = useSelector(state => state.reducer.auth);
	const { specificProductMessage } = useSelector(
		(state) => state.reducer.product
	);

  useEffect(() => {
    if (user) {
      dispatch(getCart());
    }
  }, [dispatch, user]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      const action = await dispatch(addToCart(product._id));
      
      if (addToCart.fulfilled.match(action)) {
        await dispatch(getCart());
        toast.success(`${product.name} added successfully`);
      } else {
        toast.error('Add to cart failed');
        console.error('Add to cart failed:', action.error.message);  
      }
    } catch (error) {
      toast.error('Add to cart failed');
      console.error('Add to cart failed:', error.message);
    } finally {
      dispatch(resetCart());
      setLoading(false);
    }
  };

  const isProductInCart = cart?.cart?.items?.some(
		(item) => item.product._id === product._id
	);

  const handleClick = () => {
			navigate("/products/" + product._id);
	};

  return (
		<div className='px-2'>
			<div className='p-4 w-full shadow hover:shadow-xl rounded-xl'>
				<a className='block relative h-48 rounded overflow-hidden'>
					<img
						alt='ecommerce'
						className='object-cover object-center w-full h-full block hover:scale-125 transition'
						src={product.images[0]}
						onClick={handleClick}
					/>
				</a>
				<div className='mt-4'>
					<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
						{product.type}
					</h3>
					<h2 className='text-gray-900 title-font text-lg font-medium'>
						{product.name}
					</h2>
					<div className='grid grid-cols-2'>
						<div className='flex'>
							<p className='mt-1 me-3 text-green-500'>
								Rwf {product.discountPrice}
							</p>
							<p className='mt-1 font-light line-through text-red-600'>
								Rwf {product.price}
							</p>
						</div>
						<div className='flex items-center justify-end cursor-pointer'>
							{loading ? (
								<Spinner aria-label='Small spinner example' size='sm' />
							) : isProductInCart ? (
								<h1 className='text-green-500'>
									<BsFillCartCheckFill onClick={() => navigate("/cart")} />
								</h1>
							) : (
								<h1 className='text-blue-600'>
									<BsFillCartPlusFill onClick={handleAddToCart} />
								</h1>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
