import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart,resetCart,} from '../../features/cart/cartSlice';
import { Spinner } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { Label, Radio } from "flowbite-react";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { placeOrder, resetOrder } from '../../features/order/orderSlice';





const PlaceOrder = () => {

const { cart, addToCartError, addToCartSuccess, addToCartMessage, getCartError, getCartLoading } = useSelector(state => state.reducer.cart);
const { user } = useSelector(state => state.reducer.auth);

const dispatch = useDispatch();
const navigate = useNavigate();

const [loading, setLoading] = useState({});

const [formData, setFormData] = useState({
shippingAddress: '',
phoneNumber: '',
paymentMethod:'',
})

const { shippingAddress, phoneNumber, paymentMethod } = formData;

const onChange = (e) => {
setFormData((prev) => ({
...prev,
[e.target.name]:e.target.value,

}))
}


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

//import.meta.env.REACT_APP_FLWPUBK

const config = {
public_key: 'FLWPUBK_TEST-4b51072b2f643ebc4dc36ea7b4bf71e9-X',
tx_ref: Date.now(),
amount: getSubPrice(),
currency: 'RWF',
payment_options: 'card,mobilemoney,ussd',
customer: {
email: 'odilomurindahabi@gmail.com',
phone_number: '078524475',
name: 'odilo murindahabi',
},
customizations: {
title: 'E-Shop',
description: 'Pay with Card or Mobile Money',
logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
},
};

const fwConfig = {
...config,
text: 'CLICK HERE TO PAY WITH CARD --or-- MOBILE MONEY',
callback: (response) => {
console.log(response);
closePaymentModal() // this will close the modal programmatically
},
onClose: () => {},
};
const handleSubmit = async(e) => {
  e.preventDefault();
  try {
    const action = await dispatch(placeOrder(formData))
    if (placeOrder.fulfilled.match(action)) {
      toast.success('Order placed successfully');
      navigate('/dashboard')
    } else {
      toast.error('Error :',action.error.message) 
      console.log('Error :',action.error.message) 
    }
    
  } catch (error) {
    toast.error("Error :", error.message);
			console.log("Error :", error.message); 
  } finally {
    dispatch(resetOrder());
    dispatch(getCart());
  }
  
}
return (
	<section className='lg:px-[7rem] md:px-[5rem] px-2 min-h-svh border'>
		<h1 className='text-3xl text-center py-2'>Your Order</h1>
		<hr className='mb-2 shadow' />
		<hr className='shadow' />
		<div className='grid md:grid-cols-2 grid-cols-1'>
			<div className='bg-slate-100 border shadow rounded-md'>
				<div className='overflow-x-auto '>
					<table className='table'>
						<thead>
							<tr>
								<th className=''>Image</th>
								<th className=''>Price</th>
							</tr>
						</thead>
						<tbody>
							{user &&
								cart.cart.items.map((item, index) => (
									<tr key={item.product._id}>
										<td className='w-20'>
											<div className=' h-14  overflow-hidden'>
												<img
													src={item.product.images[0]}
													alt=''
													className='h-14 object-cover'
												/>
											</div>
										</td>

										<td className=''>
											<h1 className=' capitalize text-slate-500'>
												{item.product.name}
											</h1>
											<hr />
											<h1 className='text-xl text-green-500'>
												{item.product.discountPrice * item.quantity} Rwf
											</h1>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					<div className=' mt-10 px-5 pb-5'>
						<div className='flex items-center justify-around'>
							<h1 className=''>Total:</h1>
							<h1>{getSubPrice()} Rwf</h1>
						</div>
						<h2 className='text-2xl font-bold'></h2>
					</div>
				</div>
			</div>
			<div className='p-5'>
				<div className='border shadow rounded px-5 pt-9'>
					<h1 className='text-2xl text-center mb-5'>Billing details</h1>
					<form onSubmit={handleSubmit}>
						<FloatingLabel
							variant='outlined'
							label='Shipping Address'
							name='shippingAddress'
							type='text'
							required
							className='mb-3'
							value={shippingAddress}
							onChange={onChange}
						/>

						<FloatingLabel
							variant='outlined'
							label='Phone Number'
							name='phoneNumber'
							type='text'
							required
							className='mb-3'
							value={phoneNumber}
							onChange={onChange}
						/>

						<fieldset className='flex max-w-md flex-col gap-4 mb-5'>
							<legend className='mb-4'>Choose Payment method</legend>
							<div className='flex items-center gap-2'>
								<Radio
									id='mtnmomo'
									name='paymentMethod'
									value='mobile_money'
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											paymentMethod: "mobile_money",
										}))
									}
								/>
								<Label className='text-slate-500 font-thin' htmlFor='mtnmomo'>
									{" "}
									MTN MoMo Pay : * 182 * 8 * 1 * 0----0 * PIN #
								</Label>
							</div>
							<div className='flex items-center gap-2'>
								<Radio
									id='cash'
									name='paymentMethod'
									value='cash_on_delivery'
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											paymentMethod: "cash_on_delivery",
										}))
									}
								/>
								<Label className='text-slate-500 font-thin' htmlFor='cash'>
									{" "}
									Cash on delivery
								</Label>
							</div>
							<div className='flex items-center gap-2'>
								<Radio
									disabled
									id='cardOrMobile'
									name='paymentMethod'
									value='Card'
									onClick={() =>
										setFormData((prev) => ({ ...prev, paymentMethod: "Card" }))
									}
								/>
								<Label
									className='text-slate-300 font-thin'
									htmlFor='cardOrMobile'>
									{" "}
									Pay with Card or Mobile Money
								</Label>
							</div>

							<button type='submit' className='btn'>
								Place Order
							</button>
						</fieldset>
					</form>
					{/* <h1 className='text-center'>OR</h1>
        <hr /> */}
				</div>
			</div>

			{/* <FlutterWaveButton {...fwConfig} className='btn' /> */}
		</div>
	</section>
);
}

export default PlaceOrder