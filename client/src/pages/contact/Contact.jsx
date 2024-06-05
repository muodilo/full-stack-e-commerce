import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
    useEffect(() => {
			window.scrollTo(0, 0);
    }, []);
  
    const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

		const form = useRef();

		const sendEmail = (e) => {
			e.preventDefault();

			emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
			e.target.reset();
			toast.success(
				`Message sent! We've received your inquiry and will be in touch shortly.`
			);
		};
  return (
		<section className='text-gray-600 body-font relative'>
			<div className='container lg:px-[7rem] md:px-[5rem] px-2 py-5 mx-auto flex sm:flex-nowrap flex-wrap'>
				<div className='lg:w-2/3 md:w-1/2 bg--300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative animate-in fade-in zoom-in duration-300'>
					{/* <iframe
						width='100%'
						height='100%'
						className='absolute inset-0'
						frameborder='0'
						title='map'
						marginheight='0'
						marginwidth='0'
						scrolling='no'
						src='https://www.google.co.uk/maps/d/viewer?mid=13D83j0K7sXuiXIxDbh5OJCPQtuE&hl=en_GB&ll=-1.9579318000000003%2C30.099792500000007&z=18'></iframe> */}

					<img
						src='https://images.pexels.com/photos/8580765/pexels-photo-8580765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
						width='100%'
						height='100%'
						className='absolute inset-0 rounded-lg'
					/>
					<div className=' relative flex flex-wrap py-6 rounded shadow-md bg-blue-100 border-8 border-blue-300/50'>
						<div className='lg:w-1/2 px-6'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								ADDRESS
							</h2>
							<p className='mt-1'>
								You can visit our main office located at KN 3 Avenue, in the
								heart of Kigali, Rwanda, for all your inquiries and assistance.
							</p>
						</div>
						<div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								EMAIL
							</h2>
							<a
								href='mailto:odilomurindahabi@gmail.com'
								target='__blank'
								className='text-indigo-500 leading-relaxed text-xs'>
								odilomurindahabi@email.com
							</a>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
								PHONE
							</h2>
							<p className='leading-relaxed'>
								<a href='tel:+250785244715' target='__blank'>
									+250785244715
								</a>
							</p>
						</div>
					</div>
				</div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 animate-in fade-in zoom-in duration-300'>
					<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
						Contact Us
					</h2>
					<p className='leading-relaxed mb-5 text-gray-600'>
						Complete the form below, and we'll get back to you as soon as
						possible. Your inquiry is important to us!
					</p>
					<div className='relative mb-4'>
						<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							required
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='phone' className='leading-7 text-sm text-gray-600'>
							Phone
						</label>
						<input
							type='text'
							id='phone'
							name='phone'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							required
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							required
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-600'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
							required></textarea>
					</div>
					<button className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
						Send
					</button>
					{/* <p className='text-xs text-gray-500 mt-3'>
						Chicharrones blog helvetica normcore iceland tousled brook viral
						artisan.
					</p> */}
				</form>
			</div>
		</section>
	);
}

export default Contact
