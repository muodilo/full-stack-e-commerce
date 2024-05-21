import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, addToCart, resetCart } from '../../features/cart/cartSlice';
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CiSquareRemove } from "react-icons/ci";
import { Spinner } from "flowbite-react";


const Cart = () => {
  const { cart, addToCartError, addToCartSuccess, addToCartMessage, getCartError,getCartLoading } = useSelector(state => state.reducer.cart);
  const { user } = useSelector(state => state.reducer.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseQuantity = async (id) => {
    try {
      if (!user) {
        // If user is not logged in, redirect to login page
        navigate('/login');
        return;
      }

      // Set loading state for the item to true
      setLoading(prevState => ({ ...prevState, [id]: true }));

      const action = await dispatch(addToCart(id));

      if (addToCart.fulfilled.match(action)) {
        await dispatch(getCart());
        dispatch(resetCart());
      } else {
        console.error('Error creating post:', action.error.message);
        dispatch(resetCart());
      }
    } catch (error) {
      console.error('Error creating post:', error.message);
      dispatch(resetCart());
    } finally {
      // Set loading state for the item to false
      setLoading(prevState => ({ ...prevState, [id]: false }));
    }
  }

  useEffect(() => {
    // Check if user is not logged in or not authorized
    if (!user) {
      // If not logged in or authorized, navigate to the home page
      navigate('/login');
    }
    // Dispatch the getCart action here
    dispatch(getCart());
    dispatch(resetCart());
  }, [dispatch, navigate, user]);

  // State to track loading status for each item
  const [loading, setLoading] = useState({});

  return (
    <section className='lg:px-[7rem] md:px-[5rem] px-2 min-h-svh'>
      {user && <h1 className='capitalize text-4xl mb-2'>Welcome {user.username}</h1>}
      <hr className='mb-5' />

      {!getCartError ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className=''>Image</th>
                <th className='text-center'>Quantity</th>
                <th className=''>Price</th>
                <th className=''>Remove</th>
              </tr>
            </thead>
            <tbody>
              {user && cart.cart.items.map((item, index) => (
                <tr key={item.product._id}>
                  <td className='w-20'>
                    <div className=' h-14  overflow-hidden'>
                      <img src={item.product.images[0]} alt="" className='h-14 object-cover' />
                    </div>
                  </td>
                  <td>
                    <div className='flex flex-col items-center'>
                      <div>
                        <FaPlus className='cursor-pointer ' onClick={() => handleIncreaseQuantity(item.product._id)} />
                      </div>
                      <div>
                        <h1 className='text-xl m-2 h-8 min-w-8 flex items-center justify-center bg-green-500/50 border border-gray-700 rounded shadow-lg'>
                          {loading[item.product._id] ? <Spinner /> : item.quantity}
                        </h1>
                      </div>
                      <div>
                        <FaMinus className='cursor-pointer' />
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <h1 className='text-2xl capitalize'>{item.product.name}</h1>
                    <hr />
                    <h1 className='text-xl text-green-500'>{item.product.discountPrice * item.quantity} Rwf</h1>
                  </td>
                  <td className=''>
                    <CiSquareRemove className='text-4xl text-red-600 cursor-pointer' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>cart is empty</h1>
      )}
    </section>
  )
}

export default Cart;
