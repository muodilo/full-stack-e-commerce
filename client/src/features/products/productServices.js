import axios from 'axios';

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;

//get Latest men products

const getLatestMenProducts = async() => {
  const response = await axios.get(`${BASE_API_URL}/products/currentMenProducts`);

  return response.data;
}

const productServices = {
  getLatestMenProducts,
}

export default productServices;