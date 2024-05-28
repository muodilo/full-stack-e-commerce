import axios from 'axios';

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;

const placeOrder = async (orderData,token) => {
  
    const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${BASE_API_URL}/order`,orderData,config);
  return response.data;
};

const getUserOrders = async (token) => {
  
    const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_API_URL}/order`,config);
  return response.data;
};






const orderService = {
  placeOrder,
  getUserOrders

}

export default orderService;