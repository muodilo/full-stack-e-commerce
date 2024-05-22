import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { addToCart, getCart, resetCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from "flowbite-react";
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // State to track loading status for each product card
  const navigate = useNavigate(); // Get history object from react-router-dom

  const { addToCartError, addToCartSuccess, addToCartMessage } = useSelector(state => state.reducer.cart);
  const { user } = useSelector(state => state.reducer.auth);
  
  const handleAddToCart = async () => {
    try {
      if (!user) {
        // If user is not logged in, redirect to login page
        navigate('/login');
        return;
      }

      const id = product._id;
      setLoading(true); // Set loading to true when the add to cart process starts

      const action = await dispatch(addToCart(id));
      

      if (addToCart.fulfilled.match(action)) {
        await dispatch(getCart());
        dispatch(resetCart());
        toast.success(`${product.name} added successfully`);
      } else {
        toast.error('Add to cart failed:', action.error.message);
        console.error('Add to cart failed:', action.error.message);  
        dispatch(resetCart());
      }
    } catch (error) {
      toast.error('Add to cart failed:', error.message);
      console.error('Add to cart failed:', error.message);
      dispatch(resetCart());
    } finally {
      setLoading(false); // Set loading to false when the add to cart process completes
    }
  }

  return (
    <div className='px-2'>
      <div className=" p-4 w-full shadow hover:shadow-xl rounded-xl">
        <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-125 transition" src={product.images[0]} />
        </a>
        <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.type}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
          <div className='grid grid-cols-2'>
            <div className='flex'>
                <p className="mt-1 me-3 text-green-500">Rwf {product.discountPrice}</p>
                <p className="mt-1 font-light line-through text-red-600">Rwf {product.price}</p>
            </div>
            <div className='flex items-center justify-end cursor-pointer'>
              {loading ? (
                <Spinner aria-label="Small spinner example" size="sm" />
              ) : (
                <BsFillCartPlusFill onClick={handleAddToCart} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
