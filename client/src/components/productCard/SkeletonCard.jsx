import React from 'react'

const SkeletonCard = () => {
  return (
		<div className=''>
			<div className='flex flex-col gap-4 shadow rounded-2xl p-4'>
				<div className='skeleton  h-48 w-full'></div>
				<div className='skeleton h-2 w-14'></div>
				<div className='skeleton h-4 w-28'></div>
				<div className='flex justify-between'>
					<div className='skeleton h-4 w-28'></div>
					<div className='skeleton h-4 w-4'></div>
				</div>
			</div>
		</div>
	);
}

export default SkeletonCard