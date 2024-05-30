import React from 'react'

const SkeletonRow = () => {
  return (
		<tr className='skeleton h-8'>
			<td className='skeleton'></td>
			<td className='skeleton'></td>
			<td className='skeleton'></td>
			<td className='skeleton'></td>
			<td className='skeleton'></td>
		</tr>
	);
}

export default SkeletonRow
