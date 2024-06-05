import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";

const Whatsapp = () => {
  return (
		<div className='fixed bottom-10 md:right-10 right-2'>
			<a href='https://wa.me/250785244715' target='__blank' className='border p-2 bg-green-100 block rounded-2xl shadow'>
				<FaWhatsappSquare className='text-6xl text-green-400 shadow rounded' />
			</a>
		</div>
	);
}

export default Whatsapp
