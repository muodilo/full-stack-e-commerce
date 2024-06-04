import React,{useEffect} from 'react'
import { getUserOrders,resetOrder } from '../../features/order/orderSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SkeletonRow from './OrderTableRow/SkeletonRow';
import OrderTaleRow from './OrderTableRow/OrderTaleRow';



const Dashboard = () => {
  const { user } = useSelector((state) => state.reducer.auth);
  const {
		orders,
		getUserOrdersLoading,
		getUserOrdersErrorMessage,
		getUserOrdersSuccess,
	} = useSelector((state) => state.reducer.order);
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
							<th>Date</th>
							<th>Order ID</th>
							<th>Order Details</th>
							<th>Amount</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{getUserOrdersLoading &&
							[1, 2, 3, 4, 5].map((item, index) => <SkeletonRow key={index} />)}
            {(!getUserOrdersLoading && getUserOrdersSuccess) && orders.orders.map((order) => (
              <OrderTaleRow key={order._id} order={order} />
            ))} 
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default Dashboard
