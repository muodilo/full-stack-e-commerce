import React from 'react'
import { Badge } from "flowbite-react";

const OrderTaleRow = ({ order }) => {
    const formatDate = (createdAt) => {
			const date = new Date(createdAt);
			return date.toLocaleDateString();
		};
  return (
		<tr>
			<td>{order._id}</td>
			<td>{formatDate(order.createdAt)}</td>
			<td className='text-blue-500 underline cursor-pointer'>View Order Details</td>
			<td>{order.totalAmount} Rwf</td>
			<td>
				<Badge color='failure' className='inline'>
					{order.status}
				</Badge>
			</td>
		</tr>
	);
}

export default OrderTaleRow
