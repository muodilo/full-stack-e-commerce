import React,{useEffect} from 'react'
import { getUserOrders } from '../../features/order/orderSlice'
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders())
  },[dispatch])

  return (
    <div>
      
    </div>
  )
}

export default Dashboard
