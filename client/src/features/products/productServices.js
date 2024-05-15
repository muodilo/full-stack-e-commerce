import axios from 'axios';

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;

//get Latest men products

const getLatestMenProducts = async() => {
  const response = await axios.get(`${BASE_API_URL}/products/currentMenProducts`);

  return response.data;
}

//get latest women products

const getLatestWomenProducts = async () => {
  const response = await axios.get(`${BASE_API_URL}/products/currentWomenProducts`)

  return response.data;
}

//get latest kids products
const getLatestKidsProducts = async () => {
  const response = await axios.get(`${BASE_API_URL}/products/currentKidsProducts`)

  return response.data;
}
const productServices = {
  getLatestMenProducts,
  getLatestWomenProducts,
  getLatestKidsProducts
}

export default productServices;