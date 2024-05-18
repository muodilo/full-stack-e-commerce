import axios from 'axios';

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;

//get Latest men products

const addToCart = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await axios.post(`${BASE_API_URL}/cart/${id}`, null, config);
    return response.data;
};

const getCart = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_API_URL}/cart`, config);
  return response.data;
};



const cartServices = {
  addToCart,
  getCart
}

export default cartServices;