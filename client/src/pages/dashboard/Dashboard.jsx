import React,{useEffect} from 'react'
import { getUserOrders,resetOrder } from '../../features/order/orderSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "flowbite-react";


const Dashboard = () => {
  const { user } = useSelector((state) => state.reducer.auth);
  const { orders, getUserOrdersLoading, getUserOrdersErrorMessage } =
		useSelector((state) => state.reducer.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserOrders())
    }
    fetchData();
    dispatch(resetOrder());
  },[dispatch])

  return (
		<section className='lg:px-[7rem] md:px-[5rem] px-2 min-h-96'>
			<h1 className='text-2xl'>My Orders</h1>
			<hr />
			<div className='overflow-x-auto'>
				<table className='table table-md'>
					<thead>
						<tr>
							<th></th>
							<th>Order ID</th>
							<th>Date</th>
							<th>Order Details</th>
							<th>Amount</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>id</td>
							<td>12/5/2023</td>
							<td className='text-blue-500 underline'>View Order Details</td>
							<td>5000000 Rwf</td>
							<td>
								<Badge color='failure' className='inline'>pending</Badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default Dashboard
