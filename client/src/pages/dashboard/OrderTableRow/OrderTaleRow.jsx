import React from 'react'
import { Badge } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const OrderTaleRow = ({ order }) => {
    const formatDate = (createdAt) => {
			const date = new Date(createdAt);
			return date.toLocaleDateString();
  };
  
    const [openModal, setOpenModal] = useState(false);
  return (
		<tr>
			<td>{formatDate(order.createdAt)}</td>
			<td>{order._id}</td>
			<td className='text-blue-500 underline cursor-pointer'>
				<h1 onClick={() => setOpenModal(true)}>View Order Details</h1>
				<Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
					<Modal.Header>Order Details </Modal.Header>
					<Modal.Body>
						<div className='space-y-6'>
							<table className='table table-sm'>
								<thead>
									<tr>
										<th></th>
										<th>Product</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{order.items.map((item, index) => (
										<tr key={item._id}>
											<td>{index + 1}</td>
											<td>
												{item.product.name} x {item.quantity}
											</td>
											<td>{item.price * item.quantity} Rwf</td>
										</tr>
									))}
									<tr className='bg-slate-100'>
                    <th>Total:</th>
                    <td></td>
										<th>{order.totalAmount} Rwf</th>
									</tr>
								</tbody>
							</table>
						</div>
					</Modal.Body>
				</Modal>
			</td>
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
