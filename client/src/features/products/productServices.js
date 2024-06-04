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
//get latest featured products
const getLatestFeaturedProducts = async () => {
  const response = await axios.get(`${BASE_API_URL}/products/featured`)

  return response.data;
}

const getSpecificProduct = async (id) => {
  const response = await axios.get(`${BASE_API_URL}/products/${id}`);
  return response.data;
}

const getAllMenProducts = async () => {
    const response = await axios.get(`${BASE_API_URL}/products/men`);

  return response.data;
}

const productServices = {
  getLatestMenProducts,
  getLatestWomenProducts,
  getLatestKidsProducts,
  getLatestFeaturedProducts,
  getSpecificProduct,
  getAllMenProducts,
}

export default productServices;