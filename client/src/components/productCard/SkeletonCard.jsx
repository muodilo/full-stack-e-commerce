import React from 'react'

const SkeletonCard = () => {
  return (
    <div className='px-2'>
      <div className="flex flex-col gap-4 shadow p-4">
      <div className="skeleton  h-48 w-full"></div>
      <div className="skeleton h-2 w-14"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className='flex justify-between'>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-4"></div>
      </div>
      
      </div>
    </div>
  )
}

export default SkeletonCard