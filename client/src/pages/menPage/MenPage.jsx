import React from 'react'
import MenF1 from '../../assets/menFashion.png'
import SkeletonCard from '../../components/productCard/SkeletonCard';

const MenPage = () => {
  return (
		<section className='lg:px-[7rem] md:px-[5rem] px-2'>
			<div className=' border rounded-xl mt-5 grid  md:grid-cols-3 grid-cols-2 bg-blue-100 shadow'>
				<div className=''>
					<img src={MenF1} alt='' className='h-48 md:h-auto' />
				</div>
				<div className='md:col-span-2  flex items-center justify-center'>
					<div>
						<h1 className='lg:text-7xl md:text-5xl   text-blue-500 md:text-left text-center'>
							Discover Our Men's Collection
						</h1>
						<p className='pt-2 text-slate-500 md:text-left text-center lg:text-2xl md:text-xl text-sm'>
							Discover stylish suits, casual wear, and active gear. Perfect fits
							for every occasion.
						</p>
					</div>
				</div>
			</div>
			<div className='border mt-10 flex items-center justify-center px-5 rounded-2xl py-3'>
				<label className='input input-bordered flex items-center gap-2'>
					<input type='text' className='grow border-none ' placeholder='Search' />
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='w-4 h-4 opacity-70'>
						<path
							fillRule='evenodd'
							d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
							clipRule='evenodd'
						/>
					</svg>
				</label>
			</div>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
					<SkeletonCard key={index} />
				))}
			</div>
		</section>
	);
}

export default MenPage
