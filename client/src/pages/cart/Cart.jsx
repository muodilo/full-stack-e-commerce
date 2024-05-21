import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, addToCart, resetCart, removeFromCart } from '../../features/cart/cartSlice';
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { CiSquareRemove } from "react-icons/ci";
import { Spinner } from "flowbite-react";

const Cart = () => {
  const { cart, addToCartError, addToCartSuccess, addToCartMessage, getCartError, getCartLoading } = useSelector(state => state.reducer.cart);
  const { user } = useSelector(state => state.reducer.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState({});

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(getCart());
    dispatch(resetCart());
  }, [dispatch, navigate, user]);

  const handleIncreaseQuantity = async (id) => {
    try {
      if (!user) {
        navigate('/login');
        return;
      }
      setLoading(prevState => ({ ...prevState, [id]: true }));
      const action = await dispatch(addToCart(id));
      if (addToCart.fulfilled.match(action)) {
        await dispatch(getCart());
        dispatch(resetCart());
      } else {
        console.error('Error adding item to cart:', action.error.message);
        dispatch(resetCart());
      }
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
      dispatch(resetCart());
    } finally {
      setLoading(prevState => ({ ...prevState, [id]: false }));
    }
  }

  const handleRemove = async (id) => {
    try {
      if (!user) {
        navigate('/login');
        return;
      }
      setLoading(prevState => ({ ...prevState, [id]: true }));
      const action = await dispatch(removeFromCart(id));
      if (removeFromCart.fulfilled.match(action)) {
        await dispatch(getCart());
        dispatch(resetCart());
      } else {
        console.error('Error removing item from cart:', action.error.message);
        dispatch(resetCart());
      }
    } catch (error) {
      console.error('Error removing item from cart:', error.message);
      dispatch(resetCart());
    } finally {
      setLoading(prevState => ({ ...prevState, [id]: false }));
    }
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.cart.items.forEach(item => {
      totalPrice += item.product.discountPrice * item.quantity;
    });
    return totalPrice;
  }

  const handleCheckout = () => {
    // Redirect to checkout page
    navigate('/checkout');
  }

  return (
    <section className='lg:px-[7rem] md:px-[5rem] px-2 min-h-svh'>
      {user && <h1 className='capitalize text-4xl mb-2'>Welcome {user.username}</h1>}
      <hr className='mb-5' />

      {!getCartError ? (
        <div className="overflow-x-auto">
          <table className="table">
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
                        <FaMinus onClick={() => handleRemove(item.product._id)} className='cursor-pointer' />
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <h1 className='text-2xl capitalize'>{item.product.name}</h1>
                    <hr />
                    <h1 className='text-xl text-green-500'>{item.product.discountPrice * item.quantity} Rwf</h1>
                  </td>
                  <td className=''>
                    <CiSquareRemove onClick={() => handleRemove(item.product._id)} className='text-4xl text-red-600 cursor-pointer' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4">
            <h2 className="text-2xl font-bold">Total: {getTotalPrice()} Rwf</h2>
            <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </section>
  )
}

export default Cart;

