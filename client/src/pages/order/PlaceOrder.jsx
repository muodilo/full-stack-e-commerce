import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart,resetCart,} from '../../features/cart/cartSlice';
import { Spinner } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { Label, Radio } from "flowbite-react";
import { BsCreditCard2BackFill } from "react-icons/bs";




const PlaceOrder = () => {

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

  const getSubPrice = () => {
    let totalPrice = 0;
    cart.cart.items.forEach(item => {
      totalPrice += item.product.discountPrice * item.quantity;
    });
    return totalPrice;
  }

  return (
    <section className='lg:px-[7rem] md:px-[5rem] px-2 min-h-svh border'>
      <h1 className='text-3xl text-center py-2'>Your Order</h1>
      <hr className='mb-2 shadow'/>
      <hr className='shadow'/>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='bg-slate-100 border shadow rounded-md'>
        <div className="overflow-x-auto ">
          <table className="table">
            <thead>
              <tr>
                <th className=''>Image</th>
                <th className=''>Price</th>
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

                  <td className=''>
                    <h1 className='text-2xl capitalize text-slate-500'>{item.product.name}</h1>
                    <hr />
                    <h1 className='text-xl text-green-500'>{item.product.discountPrice * item.quantity} Rwf</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" mt-10 px-5 pb-5">
              <div className='flex items-center justify-around'>
                <h1 className=''>Total:</h1>
                <h1>{getSubPrice()} Rwf</h1>
              </div>
            <h2 className="text-2xl font-bold"></h2>
            
          </div>
        </div>
        </div>
        <div className='p-5'>
          <div className='border shadow rounded px-5 pt-9'>
            <h1 className='text-2xl text-center mb-5'>Billing details</h1>
          <form >
          <FloatingLabel
            variant="outlined"
            label="shippingAddress"
            name='address'
            type='text'
            required
            className='mb-3'

          />
          
          <FloatingLabel
            variant="outlined"
            label="phoneNumber"
            name='phone'
            type='text'
            required
            className='mb-3'

              />
                  <fieldset className="flex max-w-md flex-col gap-4 mb-5">
      <legend className="mb-4">Choose Payment method</legend>
      <div className="flex items-center gap-2">
        <Radio id="united-state" name="countries" value="USA" defaultChecked />
        <Label className='text-slate-500 font-thin' htmlFor="united-state"> MTN MoMo Pay : * 182 * 8 * 1 * 0----0 * PIN #</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="united-state" name="countries" value="USA" defaultChecked />
        <Label className='text-slate-500 font-thin' htmlFor="united-state"> Cash on delivery</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="united-state" name="countries" value="USA" defaultChecked />
                  <Label className='text-slate-500 font-thin' htmlFor="united-state">
                    <div className='flex items-center'>
                      <h1>Pay with card </h1><BsCreditCard2BackFill className='ms-2 text-xl'/>
                    </div>
                  </Label>
      </div>

    </fieldset>
        </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PlaceOrder
